const app = getApp();
let that;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      openId: app.openId
    },
    isInput: false,
    isAuth: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    that = this;
    getAuth();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 获取用户信息
  onGotUserInfo(e) {
    let that = this;
    // console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  /**
   * 
   */
  addTask() {
    console.log("添加新的任务");
    this.setData({
      isInput: true
    })
  },
  /**
   * 
   */
  submitTask(e) {
    console.log("提交新的任务");
    console.log(e.detail.value.textarea)
  }
})

function getAuth() {
  wx.getSetting({
    success(e) {
      console.log(e.authSetting);
      that.setData({
        // isAuth: e.authSetting.scope.userInfo
      })
    }
  })
}