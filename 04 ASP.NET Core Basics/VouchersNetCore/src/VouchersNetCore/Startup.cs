using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Vouchers;

namespace VouchersNetCore
{
    public class Startup
    {
        private IHostingEnvironment env;

        public Startup(IHostingEnvironment environment)
        {
            env = environment;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var cfgBuilder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json");
            IConfigurationRoot configuration = cfgBuilder.Build();
            //Weak Typed
            string conStr = configuration["ConnectionStrings:LocalDBConnection"];
            //Strong Typed
            services.Configure<VouchersConfig>(configuration);

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                //app.UseBrowserLink();
            }

            var startHTML = false;

            if (startHTML)
            {
                DefaultFilesOptions options = new DefaultFilesOptions();
                options.DefaultFileNames.Clear();
                options.DefaultFileNames.Add("app.html");
                app.UseDefaultFiles(options);
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
            }
            else
            {
                app.UseMvcWithDefaultRoute();
            }
        }
    }
}
