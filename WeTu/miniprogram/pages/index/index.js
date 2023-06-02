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

  // 隐藏侧边栏
  ontapContainer(e) {
    console.log(e);
  },

  // 显示侧边栏
  onTapSliderMenu(e) {
    this.setData({
      showLeftDrawer: !this.data.showLeftDrawer
    });
  },

  // 显示url编辑视图
  onTabAddBtn(e) {
    console.log(e);
  }
})