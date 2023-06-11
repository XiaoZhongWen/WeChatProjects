// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    active: true,
    showLeftDrawer: false
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    // 初始化页面样式
    this.initializeStyle();
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  /**
   * 初始化页面样式
   */
  initializeStyle() {
    var clientRect = wx.getMenuButtonBoundingClientRect();
    var isSupport = !!clientRect;
    var rect = clientRect ? clientRect : null;
    var that = this;
    wx.getSystemInfo({
      success: function success(res) {
        var ios = !!(res.system.toLowerCase().search("ios") + 1);
        var globalData = getApp().globalData;
        var statusBarHeight = res.statusBarHeight;
        var topBarHeight = ios ? (44 + statusBarHeight) : (48 + statusBarHeight)
        that.setData({
          sliderBarMarginTop: topBarHeight + "px",
          sliderBarWidth: globalData.sliderBarWidth + "px",
          sliderBarHeight: res.windowHeight - topBarHeight + "px"
        });
      }
    });
  },

  // 显示|隐藏侧边栏
  showOrHidenLeftSlider(e) {
    this.setData({
      showLeftDrawer: !this.data.showLeftDrawer
    });
  },

  // 显示url编辑视图
  onTabAddBtn(e) {
    console.log(e);
  }
})