﻿using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Vouchers;

namespace VouchersBootstrap
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
            services.Configure<VouchersConfig>(configuration);
            string conStr = configuration["ConnectionStrings:SQLServerDBConnection"];

            services.AddSingleton(typeof(IConfigurationRoot), configuration);
            services.AddEntityFrameworkSqlServer()
                .AddDbContext<VouchersDBContext>(options => options.UseSqlServer(conStr));
            services.AddScoped<IVouchersRepository, VouchersRepository>();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            services.AddMvc().AddJsonOptions(ser =>
            {
                ser.SerializerSettings.ContractResolver = new DefaultContractResolver();
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, VouchersDBContext dbcontext)
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

            app.UseCors("AllowAll");
            app.UseMvcWithDefaultRoute();
        }
    }
}
