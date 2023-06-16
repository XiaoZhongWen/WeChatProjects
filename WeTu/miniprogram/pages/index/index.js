// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    focus: false,
    showLeftDrawer: false,
    showBottomDrawer: true,
    inputValue: '',
    album: [
      {
        "id": "",
        "coverName": "",
        "date": "2023-06-13 11:30:08",
        "url": "",
        "count": 9,
        "isExpired": false
      },
      {
        "id": "",
        "coverName": "",
        "date": "2023-06-14 10:30:08",
        "url": "",
        "count": 9,
        "isExpired": false
      }
    ]
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
        var statusBarHeight = res.statusBarHeight * 2;
        that.setData({
          sliderBarMarginTop: statusBarHeight + "rpx",
          sliderBarWidth: globalData.sliderBarWidth + "rpx",
          sliderBarHeight: res.windowHeight * 2 + "rpx"
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

  // 显示|隐藏底边栏
  showOrHidenBottomSlider(e) {
    this.setData({
      showBottomDrawer: !this.data.showBottomDrawer,
      focus: !this.data.focus
    });
  },

  onChange(e) {
    
  }
})