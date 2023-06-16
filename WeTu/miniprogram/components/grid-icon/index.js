// components/grid-icon/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    album: {
      type: Array
    }
  },

  /**
   * Component initial data
   */
  data: {
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    days: [1, 2, 3, 4, 5, 6, 7],
    flags: [1, 5, 10]
  },

  /**
   * Component methods
   */
  methods: {
    /**
     * 点击热力图单元格, 跳转到相应日期相册或目录
     * @param {*} e 
     * 1. 该单元格所在日期没有相册记录时, 不跳转
     * 2. 该单元格所在日期仅有一个相册记录时, 跳转到该相册列表
     * 3. 该单元格所在日期有多个相册记录时, 跳转到该日期下的相册目录列表
     */
    onTapGrid(e) {
      console.log(e)
    }
  }
})
