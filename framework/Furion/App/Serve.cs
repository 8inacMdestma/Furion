﻿// Copyright (c) 2020-2022 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace System;

/// <summary>
/// 迷你 Web 主机静态类
/// </summary>
public static class Serve
{
    /// <summary>
    /// 启动默认迷你 Web 主机
    /// </summary>
    /// <param name="url">默认 5000/5001 端口</param>
    public static void Run(string url = default)
    {
        Run(LegacyRunOptions.Default
            .ConfigureWebHostBuilder(builder =>
            {
                builder.ConfigureServices((context, services) =>
                {
                    // 默认跨域
                    services.AddCorsAccessor();

                    // 控制器和规范化结果
                    services.AddControllers()
                            .AddInjectWithUnifyResult();
                })
                .Configure((context, app) =>
                {
                    // 错误页
                    if (context.HostingEnvironment.IsDevelopment())
                    {
                        app.UseDeveloperExceptionPage();
                    }

                    // 401，403 规范化结果
                    app.UseUnifyResultStatusCodes();

                    // Https 重定向
                    app.UseHttpsRedirection();

                    // 静态文件
                    app.UseStaticFiles();

                    // 路由
                    app.UseRouting();

                    // 跨域中间件
                    app.UseCorsAccessor();

                    // 授权模式
                    app.UseAuthentication();
                    app.UseAuthorization();

                    // 框架基础配置
                    app.UseInject(string.Empty);

                    // 重点路由
                    app.UseEndpoints(endpoints =>
                    {
                        endpoints.MapControllers();
                    });
                });
            }), url);
    }

    /// <summary>
    /// 启动泛型迷你 Web 主机
    /// </summary>
    /// <param name="options">配置选项</param>
    /// <param name="url">默认 5000/5001 端口</param>
    public static void Run(LegacyRunOptions options, string url = default)
    {
        var hostBuilder = Host.CreateDefaultBuilder(Environment.GetCommandLineArgs());
        options.HostBuilder = hostBuilder;

        hostBuilder.ConfigureWebHostDefaults(webHostBuilder =>
        {
            webHostBuilder.Inject();
            options.WebHostBuilder = webHostBuilder;

            // 自定义启动端口
            if (!string.IsNullOrWhiteSpace(url))
            {
                webHostBuilder.UseUrls(url);
            }

            // 调用自定义配置
            options?.ActionWebHostBuilder?.Invoke(webHostBuilder);
        });

        // 调用自定义配置
        options?.ActionBuilder?.Invoke(hostBuilder);

        hostBuilder.Build().Run();
    }

    /// <summary>
    /// 启动 WebApplication 迷你主机
    /// </summary>
    /// <param name="options">配置选项</param>
    /// <param name="url">默认 5000/5001 端口</param>
    public static void Run(RunOptions options, string url = default)
    {
        // 初始化 WebApplicationBuilder
        var builder = (options.Options == null
            ? WebApplication.CreateBuilder(Environment.GetCommandLineArgs())
            : WebApplication.CreateBuilder(options.Options)).Inject();
        options.Builder = builder;

        // 自定义启动端口
        if (!string.IsNullOrWhiteSpace(url))
        {
            builder.WebHost.UseUrls(url);
        }

        // 调用自定义配置
        options?.ActionBuilder?.Invoke(builder);

        // 初始化 WebApplication
        var app = builder.Build();
        options.Application = app;

        // 调用自定义配置
        options?.ActionApplication?.Invoke(app);

        app.Run();
    }
}