// components/add-button/index.js
Component({
  /**
   * Component properties
   */
  properties: {

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

  },

  lifetimes: {
    attached: function() {
      var app = getApp();
      var globalData = app.globalData;
      var theme = globalData.theme;
      var backgroundColor = globalData.backgroundColor;
      this.setData({
        theme:theme,
        backgroundColor: backgroundColor
      });
    }
  }
})
