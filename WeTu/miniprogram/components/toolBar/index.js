// components/toolBar/index.js
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
    onTap(e) {
      if (Object.keys(e.target.dataset).length > 0) {
        this.triggerEvent('onTagTap', e.target.dataset.value, {bubbles:true})
      }
    }
  }
})
