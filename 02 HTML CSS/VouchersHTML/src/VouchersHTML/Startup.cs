using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Vouchers
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            DefaultFilesOptions options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("app.html");
            app.UseDefaultFiles(options);
            app.UseStaticFiles(new StaticFileOptions()
            {
                OnPrepareResponse = (context) =>
                {                  
                    context.Context.Response.Headers["Cache-Control"] = "no-cache, no-store";
                    context.Context.Response.Headers["Pragma"] = "no-cache";
                    context.Context.Response.Headers["Expires"] = "-1";
                }
            });
        }
    }
}
