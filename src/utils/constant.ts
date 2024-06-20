export const OPERATION_TYPE: Map<number, string> = new Map([
    [1, 'URL播放'],
    [2, '文字转声音'],
    [3, '重置WIFI（重新配网）'],
    [4, '新增网络'],
    [5, '停用设备'],
    [6, '重置设备'],
]);

export const ADDITIONAL_OPERATION_TYPE: Map<number, string> = new Map([
    [1, '课程任务'],
    [2, '儿童训练'],
    [3, '家长远程对话'],
    [4, '固件/软件/算法更新'],
    [5, '音量调节'],
]);

// 通用请求头
export enum ContentTypeEnum {
    Json = 'application/json;charset=UTF-8',
    FormURLEncoded = 'application/x-www-form-urlencoded;charset=UTF-8',
    FormData = 'multipart/form-data;charset=UTF-8',
  }