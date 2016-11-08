using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.Linq;
using Newtonsoft.Json.Serialization;

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

            //string conStr = Configuration["ConnectionStrings:LocalDBConnection"];
            //services.AddDbContext<VouchersDBContext>(options => options.UseSqlServer(conStr));
            //Fix as of https://github.com/aspnet/EntityFramework/issues/5385#issuecomment-220435119
            services.AddSingleton(typeof(IConfigurationRoot), Configuration);
            services.AddEntityFrameworkSqlServer();//.AddDbContext<VouchersDBContext>();

            services.AddMvc().AddJsonOptions(ser =>
            {
                ser.SerializerSettings.ContractResolver =
                 new DefaultContractResolver();
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseStatusCodePages();
            }

            DefaultFilesOptions options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("app.html");
            app.UseDefaultFiles(options);
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();

            //Install-Package Microsoft.EntityFrameworkCore.Tools - Pre
            //Install-Package Microsoft.EntityFrameworkCore.SqlServer.Design
            //Scaffold-DbContext "Server=.;Database=VouchersDB;Trusted_Connection=true;MultipleActiveResultSets=true" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
        }
    }
}
