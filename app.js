App({

  /* 声明周期函数 */
  // 监视小程序初始化
  // onLaunc 发射
  onLaunch: function () {
    //  wx.getUserInfo异步调用
    // 目前已经失效了 
    wx.getUserInfo({
      // 数据拿到之后才进行回调的
      success: function(res){
        // console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  // 小程序界面显示出来就会执行的生命周期函数
  onShow: function (options) {
    console.log(options)
    // console.log("界面显示出来了")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  // 小程序中发生错误时，会进行
  onError: function (msg) {
    
  },
  globaData:{
    name:'zouye',
    age:18
  }
})
// 可能在app.js中用到生命周期和全局变量