using System;
using JSNLog;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Server.HttpSys;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using NLog.Extensions.Logging;
using NLog.Web;
using Swashbuckle.AspNetCore.Swagger;

namespace Vouchers
{
    public class Startup
    {
        private readonly IHostingEnvironment env;

        public Startup(IHostingEnvironment environment)
        {
            env = environment;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            //Config
            var cfgBuilder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json");
            var configuration = cfgBuilder.Build();
            services.Configure<VouchersConfig>(configuration);
            services.AddSingleton(typeof(IConfigurationRoot), configuration);

            //EF

            // SQL Server ... use "SQLServerDBConnection" ConString
            // var conStr = configuration["ConnectionStrings:SQLServerDBConnection"];
            // services.AddEntityFrameworkSqlServer()
            //     .AddDbContext<VouchersDBContext>(options => options.UseSqlServer(conStr));

            // SQLite ... use "SQLServerDBConnection" ConString
            var conStrLite = configuration["ConnectionStrings:SQLiteDBConnection"];
            services.AddEntityFrameworkSqlite().AddDbContext<VouchersDBContext>(options => options.UseSqlite(conStrLite));

            //Simple Windows Auth
            services.AddAuthentication(HttpSysDefaults.AuthenticationScheme);

            //Firebase

            var fbProjectId = configuration["Firebase:ProjectId"];

            services
            .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.Authority = "https://securetoken.google.com/" + fbProjectId;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = "https://securetoken.google.com/" + fbProjectId,
                    ValidateAudience = true,
                    ValidAudience = fbProjectId,
                    ValidateLifetime = true
                };
            });

            //CORS
            //Required if you develop Angular on a seperate proj
            // For specific URL ie. your Angular CLI Frontend use: 
            // corsBuilder.WithOrigins("http://localhost:4200")           

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowAnyOrigin()
                        .AllowCredentials());
            });

            //Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "Vouchers API", Version = "v1" });
            });

            //Serialization Options
            services.AddMvc().AddJsonOptions(ser =>
            {
                ser.SerializerSettings.ContractResolver =
                    new DefaultContractResolver();
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory,
            VouchersDBContext dbcontext)
        {
            //Logging
            loggerFactory.AddNLog();
            env.ConfigureNLog("nlog.config");

            var jsnlogConfiguration = new JsnlogConfiguration();
            app.UseJSNLog(new LoggingAdapter(loggerFactory), jsnlogConfiguration);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseStatusCodePages();
            }

            //Startup File for serving a *.html as default

            // DefaultFilesOptions options = new DefaultFilesOptions();
            // options.DefaultFileNames.Clear();
            // options.DefaultFileNames.Add("crud.html");
            // app.UseDefaultFiles(options);

            if (env.IsDevelopment())
            {
                app.UseStaticFiles(new StaticFileOptions
                {
                    OnPrepareResponse = context =>
                    {
                        context.Context.Response.Headers["Cache-Control"] = "no-cache, no-store";
                        context.Context.Response.Headers["Pragma"] = "no-cache";
                        context.Context.Response.Headers["Expires"] = "-1";
                    }
                });
            }
            else
            {
                app.UseStaticFiles();
            }

            //Cors
            app.UseCors("AllowAll");

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Vouchers API V1");
                c.RoutePrefix = string.Empty;
            });

            //Auth
            app.UseAuthentication();

            app.UseMvc();
        }
    }
}