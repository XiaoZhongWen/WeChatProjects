// components/drawer/index.js
Component({
  externalClasses: ["i-class"],
  /**
   * Component properties
   */
  properties: {
    visible: {
      type: Boolean,
      value: false
    },

    mask: {
      type: Boolean,
      value: true
    },

    maskClosable: {
      type: Boolean,
      value: true
    },

    mode: {
      type: String,
      value: "left"
    }
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
    handleMaskClick() {
      if (!this.data.maskClosable) {
        return
      }
      this.triggerEvent('close', {});
    }
  }
})
