# Angular Testing

## Unit Testing

[Jasmine Matchers](https://jasmine.github.io/api/edge/matchers.html)

---

## Wallaby.js Test Runner

[Wallaby VS Code Extension](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode)

### Setup

Install required packages

`npm i --save-dev electron@4.0.1 wallaby-webpack@3.9.10 angular2-template-loader`

Add `wallaby.js` to root folder:

```
module.exports = function(wallaby) {
  const wallabyWebpack = require("wallaby-webpack");
  const path = require("path");
  const fs = require("fs");

  const specPattern = "/**/*spec.ts";
  const angularConfig = require("./angular.json");

  const projects = Object.keys(angularConfig.projects)
    .map(key => {
      return { name: key, ...angularConfig.projects[key] };
    })
    .filter(project => project.sourceRoot)
    .filter(
      project =>
        project.projectType !== "application" ||
        (project.architect &&
          project.architect.test &&
          project.architect.test.builder ===
            "@angular-devkit/build-angular:karma")
    );

  const applications = projects.filter(
    project => project.projectType === "application"
  );
  const libraries = projects.filter(
    project => project.projectType === "library"
  );

  const tsConfigFile = projects
    .map(project => path.join(__dirname, project.root, "tsconfig.spec.json"))
    .find(tsConfig => fs.existsSync(tsConfig));

  const tsConfigSpec = tsConfigFile
    ? JSON.parse(fs.readFileSync(tsConfigFile))
    : {};

  const compilerOptions = Object.assign(
    require("./tsconfig.json").compilerOptions,
    tsConfigSpec.compilerOptions
  );
  compilerOptions.emitDecoratorMetadata = true;

  return {
    files: [
      { pattern: path.basename(__filename), load: false, instrument: false },
      ...projects.map(project => ({
        pattern:
          project.sourceRoot +
          "/**/*.+(ts|js|css|less|scss|sass|styl|html|json|svg)",
        load: false
      })),
      ...projects.map(project => ({
        pattern: project.sourceRoot + specPattern,
        ignore: true
      })),
      ...projects.map(project => ({
        pattern: project.sourceRoot + "/**/*.d.ts",
        ignore: true
      }))
    ],

    tests: [
      ...projects.map(project => ({
        pattern: project.sourceRoot + specPattern,
        load: false
      }))
    ],

    testFramework: "jasmine",

    compilers: {
      "**/*.ts": wallaby.compilers.typeScript({
        ...compilerOptions,
        getCustomTransformers: program => {
          return {
            before: [
              require("@ngtools/webpack/src/transformers/replace_resources").replaceResources(
                path => true,
                () => program.getTypeChecker(),
                false
              )
            ]
          };
        }
      })
    },

    preprocessors: {
      /* Initialize Test Environment for Wallaby */
      [path.basename(__filename)]: file => `
 import '@angular-devkit/build-angular/src/angular-cli-files/models/jit-polyfills';
 import 'zone.js/dist/zone-testing';
 import { getTestBed } from '@angular/core/testing';
 import { BrowserDynamicTestingModule,  platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
 getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());`
    },

    middleware: function(app, express) {
      const path = require("path");

      applications.forEach(application => {
        if (
          !application.architect ||
          !application.architect.test ||
          !application.architect.test.options ||
          !application.architect.test.options.assets
        ) {
          return;
        }

        application.architect.test.options.assets.forEach(asset => {
          app.use(
            asset.slice(application.sourceRoot.length),
            express.static(path.join(__dirname, asset))
          );
        });
      });
    },

    env: {
      kind: "chrome"
    },

    postprocessor: wallabyWebpack({
      entryPatterns: [
        ...applications
          .map(project => project.sourceRoot + "/polyfills.js")
          .filter(polyfills =>
            fs.existsSync(path.join(__dirname, polyfills.replace(/js$/, "ts")))
          ),
        path.basename(__filename),
        ...projects.map(
          project => project.sourceRoot + specPattern.replace(/ts$/, "js")
        )
      ],

      module: {
        rules: [
          { test: /\.css$/, loader: ["raw-loader"] },
          { test: /\.html$/, loader: "raw-loader" },
          {
            test: /\.ts$/,
            loader: "@ngtools/webpack",
            include: /node_modules/,
            query: { tsConfigPath: "tsconfig.json" }
          },
          { test: /\.styl$/, loaders: ["raw-loader", "stylus-loader"] },
          {
            test: /\.less$/,
            loaders: ["raw-loader", { loader: "less-loader" }]
          },
          {
            test: /\.scss$|\.sass$/,
            loaders: [
              { loader: "raw-loader" },
              {
                loader: "sass-loader",
                options: { implementation: require("sass") }
              }
            ]
          },
          { test: /\.(jpg|png|svg)$/, loader: "raw-loader" }
        ]
      },

      resolve: {
        extensions: [".js", ".ts"],
        modules: [
          wallaby.projectCacheDir,
          ...(projects.length
            ? projects
                .filter(project => project.root)
                .map(project =>
                  path.join(wallaby.projectCacheDir, project.root)
                )
            : []),
          ...(projects.length
            ? projects
                .filter(project => project.sourceRoot)
                .map(project =>
                  path.join(wallaby.projectCacheDir, project.sourceRoot)
                )
            : []),
          "node_modules"
        ],
        alias: libraries.reduce((result, project) => {
          result[project.name] = path.join(
            wallaby.projectCacheDir,
            project.sourceRoot,
            "public-api"
          );
          return result;
        }, {})
      }
    }),

    setup: function() {
      window.__moduleBundler.loadTests();
    }
  };
};

```

## End to End Testing

[Protactor](https://www.protractortest.org/#/)

## Chrome Debugging with Angular CLI

by [Anthony Sneed (@tonysneed)](https://github.com/tonysneed)

This recipe shows how to use the [Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug) extension with VS Code to debug
an application generated by the [Angular CLI](https://cli.angular.io/).

### Getting Started

- Make sure to have [Google Chrome](https://www.google.com/chrome) installed in its default location.

- Make sure to have version **3.1.4** or greater of the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension installed in VS Code.

- Use [NPM](https://www.npmjs.com) to install [Angular CLI](https://cli.angular.io) version **6.0** or greater globally.

  > **Please note**: Debugging may not function with other versions of Angular CLI.

  ```
  npm install -g @angular/cli@">=6.0"
  ```

- Use Angular CLI to create a new Angular application.

  ```
  ng new my-dream-app
  ```

- Change to the newly created application directory and open VS Code.

  ```
  cd my-dream-app
  code .
  ```

### Configure launch.json File

- Click on the Debug icon in the Activity Bar of VS Code to bring up the Debug view.
  Then click on the gear icon to configure a launch.json file, selecting **Chrome** for the environment:

  ![add-chrome-debug](https://user-images.githubusercontent.com/2836367/27004175-77582668-4dca-11e7-9ce8-30ef3af64a36.png)

- Replace content of the generated launch.json with the following three configurations:

  ```json
  {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "ng serve",
        "type": "chrome",
        "request": "launch",
        "preLaunchTask": "npm: start",
        "url": "http://localhost:4200/#",
        "webRoot": "${workspaceFolder}",
        "sourceMapPathOverrides": {
          "webpack:/*": "${webRoot}/*",
          "/./*": "${webRoot}/*",
          "/src/*": "${webRoot}/*",
          "/*": "*",
          "/./~/*": "${webRoot}/node_modules/*"
        }
      },
      {
        "name": "ng test",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:9876/debug.html",
        "webRoot": "${workspaceFolder}",
        "sourceMaps": true,
        "sourceMapPathOverrides": {
          "webpack:/*": "${webRoot}/*",
          "/./*": "${webRoot}/*",
          "/src/*": "${webRoot}/*",
          "/*": "*",
          "/./~/*": "${webRoot}/node_modules/*"
        }
      },
      {
        "name": "ng e2e",
        "type": "node",
        "request": "launch",
        "program": "${workspaceFolder}/node_modules/protractor/bin/protractor",
        "protocol": "inspector",
        "args": ["${workspaceFolder}/e2e/protractor.conf.js"]
      }
    ]
  }
  ```

  - Since `ng serve` also compiles the Angular application it can be used as a build task if you prefer the "PROBLEMS" tab to `Ctrl + click` in the terminal (for smaller screens you could open the terminal only when the status bar shows there are problems).

  - The following `npm: start` task runs in the background, so we never expect it to fully complete. Instead we define a [problem matcher](https://code.visualstudio.com/docs/editor/tasks#_processing-task-output-with-problem-matchers), which alerts us that the task is ready.

  > **Please note**: Running `npm start` instead of `ng serve` ensures the app is served with the version of @angular/cli specified in package.json.

  Add the following `npm` task to your `tasks.json` file:

  ```json
  {
    "version": "2.0.0",
    "tasks": [
      {
        "type": "npm",
        "script": "start",
        "isBackground": true,
        "presentation": {
          "focus": true,
          "panel": "dedicated"
        },
        "group": {
          "kind": "build",
          "isDefault": true
        },
        "problemMatcher": {
          "owner": "typescript",
          "source": "ts",
          "applyTo": "closedDocuments",
          "fileLocation": ["relative", "${cwd}"],
          "pattern": "$tsc",
          "background": {
            "activeOnStart": true,
            "beginsPattern": {
              "regexp": "(.*?)"
            },
            "endsPattern": {
              "regexp": "Compiled |Failed to compile."
            }
          }
        }
      }
    ]
  }
  ```

  ### Start Debugging

- Set a breakpoint in **app.component.ts** on the line that sets the `title` property of `AppComponent`.

- Go to the Debug view, select the **'ng serve'** configuration, then press F5 or click the green play button to start 'Angular Live Development Server'.

- A console window should appear where `ng serve` will run. Once the app is served, or if the task encounters an error, a browser window will appear. Use it to trigger your breakpoint!

### Debug Unit Tests

- Set a breakpoint in **app.component.spec.ts** on a line in one of the unit tests.

- Open a terminal at the root folder and run the tests using Angular CLI:

  > **Please note**: Running `npm run test` instead of `ng test` ensures tests are run with the version of @angular/cli specified in package.json.

  ```
  npm run test
  ```

- After the test run, go to the Debug view, select the **'ng test'** configuration, then press F5 or click the green button.

- When a browser opens with the test list, click the link for the test in which you placed the breakpoint. You should then hit the breakpoint:

![angular-test-breakpoint](https://user-images.githubusercontent.com/2836367/27004448-e5134ff8-4dce-11e7-8145-69de0956dd07.png)

### Debug End-to-end Tests

You can also debug your end-to-end tests running in Protractor with VS Code.

1. Start 'Angular Live Development Server' by starting a debug session in VS Code with our **'ng serve'** configuration we created above. Alternatively, and as mentioned above, executing `ng serve` command in terminal will also run the development server but without having VS Code running a debug session for it.

2. Set a breakpoint in **app.e2e-spec.ts** on a line in one of the end-to-end tests.

3. Now go to the Debug view in VS Code, select the **'ng e2e'** configuration, then press F5 or click the green button to run Protractor in a debug session.

Notice: You might need to update the `"protocol"` property to `legacy` if you are using an older version of Node (older than Node 8)
