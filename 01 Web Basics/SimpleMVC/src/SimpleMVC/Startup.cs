using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace SimpleMVC
{
    public class Startup
    {
        private IHostingEnvironment hostingEnvironment;

        public Startup(IHostingEnvironment environment)
        {
            hostingEnvironment = environment;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app)
        {
            if (hostingEnvironment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        name: "Default",
            //        template: "{controller}/action/{id?}",
            //        defaults: new {
            //            controller = "Home",
            //            action = "Index" ,
            //            id = ""
            //        });                
            //});

            app.UseMvcWithDefaultRoute(); // Same as above
            app.UseStaticFiles();
            app.UseStatusCodePages();
        }
    }
}
