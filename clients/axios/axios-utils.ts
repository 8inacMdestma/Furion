/**
 * https://editor.swagger.io 代码生成 typescript-axios 辅组工具库
 * 适配 axios 版本：v0.21.1
 */

import globalAxios, { AxiosInstance } from "axios";
import { Configuration } from "../api-services";
import { BaseAPI, BASE_PATH } from "../api-services/base";

/**
 * 接口服务器配置
 */
export const serveConfig = new Configuration({
  basePath:
    process.env.NODE_ENV !== "production"
      ? "https://localhost:44342" // 开发环境服务器接口地址
      : "https://furion.icu", // 生产环境服务器接口地址
});

// token 键定义
const accessTokenKey = "access-token";
const refreshAccessTokenKey = `x-${accessTokenKey}`;

// 清除 token
const clearAccessTokens = () => {
  window.localStorage.removeItem(accessTokenKey);
  window.localStorage.removeItem(refreshAccessTokenKey);
};

/**
 * axios 默认实例
 */
export const axiosInstance: AxiosInstance = globalAxios;

// 这里可以配置 axios 更多选项 =========================================

// axios 请求拦截
axiosInstance.interceptors.request.use(
  (conf) => {
    // 将 token 添加到请求报文头中
    conf.headers!["Authorization"] = `Bearer ${window.localStorage.getItem(
      accessTokenKey
    )}`;
    conf.headers!["X-Authorization"] = `Bearer ${window.localStorage.getItem(
      refreshAccessTokenKey
    )}`;

    // 这里编写请求拦截代码 =========================================

    return conf;
  },
  (error) => {
    // 这里编写请求错误代码

    return Promise.reject(error);
  }
);

// axios 响应拦截
axiosInstance.interceptors.response.use(
  (res) => {
    // 获取状态码和返回数据
    var status = res.status;
    var serve = res.data;

    // 处理 401
    if (status === 401) {
      clearAccessTokens();
    }

    // 处理规范化结果 400/500 错误
    if (serve && serve.hasOwnProperty("errors")) {
      throw new Error(JSON.stringify(serve.errors || "[500] Server Error."));
    }

    // 读取响应报文头 token 信息
    var accessToken = res.headers[accessTokenKey];
    var refreshAccessToken = res.headers[refreshAccessTokenKey];

    // 判断是否是无效 token
    if (accessToken === "invalid_token") {
      clearAccessTokens();
    }
    // 判断是否存在刷新 token，如果存在则存储在本地
    else if (
      refreshAccessToken &&
      accessToken &&
      accessToken !== "invalid_token"
    ) {
      window.localStorage.setItem(accessTokenKey, accessToken);
      window.localStorage.setItem(refreshAccessTokenKey, refreshAccessToken);
    }

    // 这里编写响应拦截代码 =========================================

    return res;
  },
  (error) => {
    // 这里编写响应错误代码

    return Promise.reject(error);
  }
);

/**
 * 包装 Promise 并返回 [Error, any]
 * @param promise Promise 方法
 * @param errorExt 自定义错误信息（拓展）
 * @returns [Eror, any]
 */
export function feature<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt);
        return [parsedError, undefined];
      }

      return [err, undefined];
    });
}

/**
 * 获取/创建服务 API 实例
 * @param apiType BaseAPI 派生类型
 * @returns 服务API 实例
 */
export function getAPI<T extends BaseAPI>(
  apiType: new (
    configuration?: Configuration,
    basePath?: string,
    axiosInstance?: AxiosInstance
  ) => T
) {
  return new apiType(serveConfig, BASE_PATH, axiosInstance);
}
