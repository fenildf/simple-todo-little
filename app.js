let that;

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    that = this;

    wx.cloud.init()
    wx.cloud.callFunction({
      name: 'index'
    }).then(res => {

      console.log(res.result)
      // that.openId = res.result.openid;
      // that.appid = res.result.appid;
      that.globalData.appid = res.result.appid;
      that.globalData.openId =res.result.openid;
    }).catch(console.error);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  },
  globalData:{
    auth: false,

    openId: null,
    appid: null,
  }
})
