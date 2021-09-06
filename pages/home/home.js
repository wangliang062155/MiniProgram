// getApp()获取App产生的实例对象
const app = getApp()
const name = app.globaData.name
console.log(app.globaData.name)
// page方法注册页面   App方法注册小程序 
// 绑定数据，监听生命周期 
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  // 初始化数据
  data: {
    list: [],
    name: "hhh"
  },
  handleGetUserInfo(e) {
    console.log(e)
  },
  // 监听点击事件
  handleViewClick() {
    console.log('hhh')
  },
  // 监听其他事件
  // --页面滚动--
  onPageScroll(obj) {
    // console.log(obj)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 页面加载
  onLoad: function (options) {
    // console.log(this)
    var that = this
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success(res) {
        console.log(res)
        const data = res.data.data.list;
        that.setData({
          list: data
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // 页面渲染 
  onReady: function () {

  },
  // 加载 显示 渲染 和vue很像
  /**
   * 生命周期函数--监听页面显示
   */
  // 先执行显示 
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  // --检查滚动到底部--
  onReachBottom: function () {
    console.log('触底了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})