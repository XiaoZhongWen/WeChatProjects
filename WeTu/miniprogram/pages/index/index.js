// pages/index/index.js

var parser = require("../../utils/utils.js")

Page({

  /**
   * Page initial data
   */
  data: {
    focus: true,
    holdKeyboard: true,
    showBottomDrawer: true,
    showLeftDrawer: false,
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
      },
    ],
    // _inputStack: []
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
    console.log("showOrHidenLeftSlider")
    this.setData({
      showLeftDrawer: !this.data.showLeftDrawer
    });
  },

  // 显示底边栏
  showBottomSlider(e) {
    this.setData({
      showBottomDrawer: true,
      holdKeyboard: true,
      focus: true
    });
  },

  // 隐藏底边栏
  hidenBottomSlider(e) {
    this.setData({
      showBottomDrawer: false,
      holdKeyboard: false,
      focus: false
    });
  },

  onChange(e) {
    
  },

  appendUrl(e) {
    if (e.detail === "done") {
      const url = this.data.inputValue
      const that = this
      wx.request({
        url: url,
        success (res) {
          if (res.statusCode === 200) {
            const html = res.data
            that.parseHtml(html)
          }
        }
      })
      this.setData({
        inputValue: "",
        holdKeyboard: false,
        showBottomDrawer: false,
        focus: false
      })
    } else {
      var value = this.data.inputValue + e.detail
      this.setData({
        inputValue: value,
        holdKeyboard: true,
      }) 
    }        
  },

  async parseHtml(html) {
    parser.getTitle(html)
    const imgUrls = parser.getImageUrls(html)
    for (const url of imgUrls) {
      try {
        const path = await this.downloadFile(url)
        console.log(path)
      } catch(err) {
        console.log(err)
      }
    }
  },

  downloadFile(url) {
    return new Promise((resolve, reject) => {
      wx.downloadFile({
        url: url,
        success: function(res) {
          if (res.statusCode === 200) {
            resolve(res.tempFilePath)
          } else {
            reject(new Error("statusCode=" + res.statusCode))
          }
        },
        fail: function(err) {
          reject(new Error("failed to download file: " + err))
        }
      })
    })
  }
})