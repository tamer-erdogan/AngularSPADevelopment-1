using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ngDemoAppApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class DemoController : ControllerBase
    {
        public DemoController()
        {
        }

        // GET api/Demo
        [HttpGet("")]
        public ActionResult<Demo[]> GetDemos()
        {
            List<Demo> demos = new List<Demo>();
            demos.Add(new Demo { title = "abc", url = "abc", component = "abc" });
            demos.Add(new Demo { title = "fgh", url = "fgh", component = "fgh" });
            return Ok(demos); 
        }

    }
}