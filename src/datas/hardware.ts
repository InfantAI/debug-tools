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
      jsonData: {},
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "新增网络",
      typeflag: 4,
      jsonData: {},
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "停用设备",
      typeflag: 5,
      jsonData: {},
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "重置设备",
      typeflag: 6,
      jsonData: {},
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "固件升级",
      typeflag: 1, // 假设固件升级的typeflag是3
      jsonData: {
        url: "https://gadget-oss.oss-ap-southeast-5.aliyuncs.com/instaanswer/test/file/1805884136120909824.img",
        version: "1.0.1"
      },
      MQType: "devicedoll_msg_public",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "软件（算法）升级",
      typeflag: 4, // 假设软件升级的typeflag是4
      jsonData: {
        url: "https://gadget-oss.oss-ap-southeast-5.aliyuncs.com/instaanswer/test/file/1702200014467.mp3",
        version: "1.0.1"
      },
      MQType: "devicedoll_msg",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "课程任务",
      typeflag: 1,
      jsonData: {
        type: 1,
        url: "小熊寻找新家，跨过小河，爬过小山，不怕困难，终于找到温暖的家。"
      },
      MQType: "educational",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "儿童训练",
      typeflag: 2,
      jsonData: {
        type: 2,
        url: "https://gadget-oss.oss-ap-southeast-5.aliyuncs.com/spider/棕发少女"
      },
      MQType: "educational",
      deviceCode: "{deviceCode}"
    },
    {
      FunctionName: "家长远程对话",
      typeflag: 3,
      jsonData: {
        type: 3,
        url: "https://gadget-oss.oss-ap-southeast-5.aliyuncs.com/spider/《谁吃了我的苹果》EP449  | 睡前故事 | 童話故事 | 儿童故事 | 晚安故事 | 中文绘本故事 | Chinese Fairy Tales - ReadForKids亲子阅读"
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
