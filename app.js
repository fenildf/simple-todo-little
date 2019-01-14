let that;

App({

  auth: false,

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    that = this;
    wx.cloud.init()
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

  }
})

function getIds(){
  wx.cloud.callFunction({
    // 云函数名称
    name: 'index',
    // 传给云函数的参数
    data: {
      
    },
  })
    .then(res => {
      console.log(res.result) // 3
    })
    .catch(console.error)
}

function getAuth() {
  wx.getSetting({
    success(res) {
      console.log(res);
      that.auth = true;
    },
    fail(e){
      
    }
  })
}