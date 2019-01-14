const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    isInput: false,
    isAuth: app.auth
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    wx.cloud.callFunction({
      name:'index'
    }).then(res => {
      console.log(res.result) // 3
    }).catch(console.error);

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

function wxLogin() {
  wx.login({
    success(res) {
      if (res.code) {
        // 发起网络请求
        wx.request({
          url: 'https://test.com/onLogin',
          data: {
            code: res.code
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}