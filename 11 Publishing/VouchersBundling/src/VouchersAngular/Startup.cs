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
        private readonly IHostingEnvironment env;

        public Startup(IHostingEnvironment environment)
        {
            env = environment;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var cfgBuilder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json");
            var Configuration = cfgBuilder.Build();
            services.Configure<VouchersConfig>(Configuration);

            //string conStr = Configuration["ConnectionStrings:LocalDBConnection"];
            //services.AddDbContext<VouchersDBContext>(options => options.UseSqlServer(conStr));
            //Fix as of https://github.com/aspnet/EntityFramework/issues/5385#issuecomment-220435119
            services.AddSingleton(typeof(IConfigurationRoot), Configuration);
            services.AddEntityFrameworkSqlServer().AddDbContext<VouchersDBContext>();

            if (env.IsDevelopment())
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
            else
                services
                    .AddMvc()
                    .AddJsonOptions(opts => opts.SerializerSettings.ContractResolver = new DefaultContractResolver());
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory,
            VouchersDBContext dbcontext)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseStatusCodePages();
            }

            loggerFactory.AddConsole();
            loggerFactory.AddDebug();

            //https://github.com/NLog/NLog.Extensions.Logging
            loggerFactory.AddNLog();
            env.ConfigureNLog("nlog.config");

            // See jsnlog.com/Documentation/Configuration
            var jsnlogConfiguration = new JsnlogConfiguration();
            app.UseJSNLog(new LoggingAdapter(loggerFactory), jsnlogConfiguration);

            var options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("app.html");
            app.UseDefaultFiles(options);
            if (env.IsDevelopment())
                app.UseStaticFiles(new StaticFileOptions
                {
                    OnPrepareResponse = context =>
                    {
                        context.Context.Response.Headers["Cache-Control"] = "no-cache, no-store";
                        context.Context.Response.Headers["Pragma"] = "no-cache";
                        context.Context.Response.Headers["Expires"] = "-1";
                    }
                });
            else
                app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
            SeedDatabase(dbcontext);
        }

        private static void SeedDatabase(VouchersDBContext context)
        {
            //To Create the Code First DB go to Package Manager Console ->
            //PM: Install-Package Microsoft.EntityFrameworkCore.Tools -Pre
            //Add-Migration MigrationName
            //Update-Database

            if (context.BalanceAccounts.FirstOrDefault() == null)
            {
                var a1 = new BalanceAccount {Name = "Unclassified", Expense = true};
                var a2 = new BalanceAccount {Name = "Car Maintenance", Expense = true};
                var a3 = new BalanceAccount {Name = "Development", Expense = false};
                var a4 = new BalanceAccount {Name = "Consulting", Expense = false};
                var a5 = new BalanceAccount {Name = "Training", Expense = false};
                var a6 = new BalanceAccount {Name = "Software", Expense = true};
                var a7 = new BalanceAccount {Name = "Hosting & Internet", Expense = true};

                context.BalanceAccounts.AddRange(a1, a2, a3, a4, a5, a6, a7);
                context.SaveChanges();

                var v1 = new Voucher
                {
                    Date = DateTime.Now.AddDays(-2),
                    Amount = 800,
                    Text = "Reiser-ST",
                    Paid = false,
                    Expense = false,
                    Remark = true
                };
                var v2 = new Voucher
                {
                    Date = DateTime.Now.AddDays(-2),
                    Amount = 65,
                    Text = "BP Tankstelle",
                    Paid = false,
                    Expense = true,
                    Remark = true
                };
                var v3 = new Voucher
                {
                    Date = DateTime.Now.AddDays(-2),
                    Amount = 56,
                    Text = "Amazon",
                    Paid = false,
                    Expense = true
                };
                var v4 = new Voucher
                {
                    Date = DateTime.Now.AddDays(-3),
                    Amount = 100,
                    Text = "Media Markt",
                    Paid = true,
                    Expense = true
                };
                context.Vouchers.AddRange(v1, v2, v3, v4);
                context.SaveChanges();

                var vd1 = new VoucherDetail {VoucherID = v4.ID, Text = "Ladekabel", Amount = 100, Account = a1};
                var vd7 = new VoucherDetail
                {
                    VoucherID = v3.ID,
                    Text = "Game of Thrones, Season 6",
                    Amount = 29,
                    Account = a6
                };
                var vd2 = new VoucherDetail {VoucherID = v3.ID, Text = "USB Stick", Amount = 11, Account = a1};
                var vd3 = new VoucherDetail {VoucherID = v3.ID, Text = "DVI Kabel", Amount = 45, Account = a1};
                var vd4 = new VoucherDetail {VoucherID = v2.ID, Text = "Diesel", Amount = 45, Account = a2};
                var vd6 = new VoucherDetail {VoucherID = v2.ID, Text = "Reifenwechsel", Amount = 20, Account = a2};
                var vd5 = new VoucherDetail {VoucherID = v1.ID, Text = "Remote Support", Amount = 800, Account = a4};

                context.VoucherDetails.AddRange(vd1, vd2, vd3, vd4, vd5, vd6, vd7);
                context.SaveChanges();
            }
            ;
        }
    }
}