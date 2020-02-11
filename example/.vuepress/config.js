/*
 * @Author: mrjzhang
 * @Date: 2020-02-10 21:21:29
 * @LastEditors  : mrjzhang
 * @LastEditTime : 2020-02-11 11:53:01
 */
module.exports = {
  base: '/',
  dest: 'example/dist',
  theme: 'resume',
  themeConfig: {
    sidebar: [
      {
        collapsable: false,
        children: ['/']
      }
    ]
  }
}
