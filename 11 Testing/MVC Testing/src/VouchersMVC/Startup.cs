using System;
using System.Linq;
using JSNLog;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using NLog.Extensions.Logging;
using NLog.Web;


namespace Vouchers
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
            IConfigurationRoot Configuration = cfgBuilder.Build();
            services.Configure<VouchersConfig>(Configuration);

            services.AddSingleton(typeof(IConfigurationRoot), Configuration);
            services.AddEntityFrameworkSqlServer().AddDbContext<VouchersDBContext>();
            services.AddSingleton<IVouchersRepository, VouchersRepository>();
            services.AddScoped<IVouchersRepository, VouchersRepository>();
            services.AddTransient<BalanceService>();

            if (env.IsDevelopment())
            {
                services
                .AddMvc()
                .AddMvcOptions(options =>
                {
                    options.CacheProfiles.Add("NoCache", new CacheProfile
                    {
                        NoStore = true,
                        Duration = 0
                    });
                })
                .AddJsonOptions(opts => opts.SerializerSettings.ContractResolver = new DefaultContractResolver());
            }
            else
            {
                services
                .AddMvc()
                .AddJsonOptions(opts => opts.SerializerSettings.ContractResolver = new DefaultContractResolver());
            }
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, VouchersDBContext dbcontext)
        {
            loggerFactory.AddConsole();
            
            //https://github.com/NLog/NLog.Extensions.Logging
            loggerFactory.AddNLog();
            env.ConfigureNLog("nlog.config");

            var jsnlogConfiguration = new JsnlogConfiguration();
            app.UseJSNLog(new LoggingAdapter(loggerFactory), jsnlogConfiguration);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseStatusCodePages();
                app.UseBrowserLink();
            }

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

            app.UseMvcWithDefaultRoute();
        }        
    }
}
