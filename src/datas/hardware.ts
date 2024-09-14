export const pushFunctions = [
    {
      FunctionName: "URL播放",
      typeflag: 1,
      jsonData: {
        url: "https://gadget-oss.oss-ap-southeast-5.aliyuncs.com/instaanswer/test/file/1702200014467.mp3"
      },
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "文字转声音",
      typeflag: 2,
      jsonData: {
        txt: "小蝌蚪找妈妈"
      },
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "重置WIFI",
      typeflag: 3,
      jsonData: {"wifiname":"KD", 
    "wifipwd":"Kd@112345"  },
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "新增网络",
      typeflag: 4,
      jsonData: {"wifiname":"KD", 
    "wifipwd":"Kd@112345" },
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "停用设备",
      typeflag: 5,
      jsonData: {"typeflag":3 },
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "重置设备",
      typeflag: 6,
      jsonData: {"typeflag":6},
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "远程进行停止",
      typeflag: 7,
      jsonData: {"typeflag":7},
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "固件升级",
      typeflag: 1, // 假设固件升级的typeflag是3
      jsonData: {
        url: "https://gadget-oss.oss-ap-southeast-5.aliyuncs.com/instaanswer/test/file/update.tar",
        version: "1.0.1"
      },
      MQType: "devicedoll_msg_public",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "软件（算法）升级",
      typeflag: 2, // 假设软件升级的typeflag是4
      jsonData: {
        url: "https://gadget-oss.oss-ap-southeast-5.aliyuncs.com/instaanswer/test/file/1810895195076558848.so",
        version: "1.0.1"
      },
      MQType: "devicedoll_msg_public",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "课程任务",
      typeflag: 1,
      jsonData: {
      
        url: "https://gadget-oss.oss-ap-southeast-5.aliyuncs.com/spider/2/346199.mp3"
      },
      MQType: "educational",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "儿童训练",
      typeflag: 2,
      jsonData: {
        
        url: "https://gadget-oss.oss-ap-southeast-5.aliyuncs.com/spider/2/346199.mp3"
      },
      MQType: "educational",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "家长远程对话",
      typeflag: 3,
      jsonData: {
         
        url: " https://gadget-oss.oss-ap-southeast-5.aliyuncs.com/instaanswer/test/file/1827908339812532224.aac"
      },
      MQType: "educational",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "音量调节",
      typeflag: 5,
      jsonData: {
        volume: 20
      },
      MQType: "educational",
      deviceCode: "{deviceCode}"
    }
  ];
