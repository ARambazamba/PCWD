using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Lab1.Model;

namespace Lab1.Controllers
{
    [Route("api/[controller]")]
    public class AssetController : Controller
    {
        // GET: api/values
        [HttpGet]
        public List<Asset> Get()
        {
            List<Asset> result = new List<Asset>();
            result.Add(new Asset() {ID = 1, Name = "Test Asset", Value=10, StartDate = DateTime.Now, Periodes = 5 });
            return result;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
