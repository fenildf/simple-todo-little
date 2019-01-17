const app = getApp();
let that;
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      openId: app.openId
    },
    isInput: false,
    isAuth: true,
    todos: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    this.getTodos()
  },
  /**
   * 获取全部todo列表 
   */
  getTodos() {
    that.setData({
      todos:[]
    })
    const todos = db.collection('tb_todos')
      .where({
        done: db.command.eq(false)
      })
      .get({
        success(res) {
          console.log(res.data)
          if (res.data) {
            that.setData({
              todos: res.data
            })
          }
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    that.getTodos()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * checkbox点击事件
   */
  checkboxChange: function (e) {
    const _id = e.detail.value[0]
    console.log('checkbox发生change事件，携带value值为：', )
    db.collection('tb_todos')
      .doc(_id)
      .update({
        // data 传入需要局部更新的数据
        data: {
          // 表示将 done 字段置为 true
          done: true
        },
        success(res) {
          console.log(res.data)
          that.getTodos()
        }
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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
   * 提交新增的todo
   */
  submitTask(e) {
    let that = this;
    console.log("提交新的任务");
    console.log(e.detail.value.textarea)
    console.log(app)
    const value = e.detail.value.textarea
    const openId = app.globalData.openId

    db.collection('tb_todos').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          value: value,
          open_id: app.globalData.openId,
          done: false
        }
      })
      .then(res => {
        console.log(res)
        that.getTodos()
        that.setData({
          isInput: false
        })
      })
      .catch(e => {
        console.log(e)
      })
  },

  getAuth() {
    wx.getSetting({
      success(e) {
        console.log(e.authSetting);
        that.setData({
          // isAuth: e.authSetting.scope.userInfo
        })
      }
    })
  }
})