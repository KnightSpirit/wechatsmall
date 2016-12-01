// pages/me/me.js
import { Img } from "../../utils/util";
Page({
  data:{
    dataForTabbar: 
   [
   {
                iCount: 1, //未读数目
                sIconUrl: Img("train"), //按钮图标
                sTitle: "段内", //按钮名称
              },
              {
                iCount: 99, //未读数目
                sIconUrl: Img("file"), //按钮图标
                sTitle: "文件", //按钮名称
              },
              {
                iCount: 0, //未读数目
                sIconUrl: Img("chat"), //按钮图标
                sTitle: "交流", //按钮名称
              },
              {
                iCount: 0, //未读数目
                sIconUrl: Img("me"), //按钮图标
                sTitle: "我", //按钮名称
              },
              ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onTabItemTap : function (event){
    let tabName = event.target.dataset.key;
    let tabPath;
    switch (tabName) {
      case "文件":
      tabPath = "filebrowser";
      break;
      case "段内":
      tabPath = "index";
      break;
      case "我":
                tabPath = "me";
                break;        
    }
    let url = "../" + tabPath + "/" + tabPath;
    wx.redirectTo({
      url:url
    })
  },
})