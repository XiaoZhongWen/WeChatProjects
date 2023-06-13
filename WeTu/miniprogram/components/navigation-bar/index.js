// components/navigation-bar.js
Component({
  options: {
    // 多插槽支持
    multipleSlots: true
  },
  /**
   * Component properties
   */
  properties: {
    "ext-class": {
      type: String,
      value: ""
    },
    active: {
      type: Boolean,
      value: false
    },
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    doubleClick(e) {

    }
  },

  lifetimes: {
    // 组件被加载时调用
    attached: function () {
      // 计算ios、android平台的尺寸差异
      // !!为双非运算符, !用在对象前时会将对象转化为bool类型再取非
      // 获取胶囊坐标, width:87, height:32, left:226 左边界坐标, right:313 右边界坐标, top:24 上边界坐标, bottom:56 下边界坐标
      var clientRect = wx.getMenuButtonBoundingClientRect();
      var isSupport = !!clientRect;
      var rect = clientRect ? clientRect : null;
      var that = this;
      // debugger
      wx.getSystemInfo({
        // 调整导航栏尺寸
        success: function success(res) {
          var ios = !!(res.system.toLowerCase().search("ios") + 1);
          var statusBarHeight = res.statusBarHeight * 2;
          var topBarHeight = ios ? (88 + statusBarHeight) : (96 + statusBarHeight);
          that.setData({
            ios:ios,
            topBarHeight: topBarHeight,
            statusBarHeight: statusBarHeight,
            innerWidth: isSupport ? "width:" + rect.left * 2 + "rpx" : "",
            innerPaddingRight: isSupport ? "padding-right:" + (res.windowWidth - rect.left) * 2 + "rpx" : "",
            leftWidth: isSupport ? "width:" + (res.windowWidth - rect.left) * 2 + "rpx" : ""
          });
        }
      });

      // 处理back箭头的异常和显示
      var pages = getCurrentPages();
      if (pages.length > 1) {
        this.setData({
          showBack: true
        });
      }
    }
  }
})
