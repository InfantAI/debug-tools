import axios from 'axios';

// 配置 axios 的基础 URL
const BASE_URL = 'https://api.infantai.tech/infantai-algorithmapi-api';

// 创建 axios 实例
const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 1000, // 可以设置超时时间
});

// 添加请求拦截器
apiClient.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
apiClient.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response;
    },
    error => {
        // 对响应错误做些什么
        return Promise.reject(error)
    }
);

// GET 请求帮助函数
export const get = (url: string, params = {}) => {
    return apiClient.get(url, { params });
};

// POST 请求帮助函数
export const post = (url: any, data = {}) => {
    return apiClient.post(url, data);
};