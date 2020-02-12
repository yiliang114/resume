/*
 * @Author: mrjzhang
 * @Date: 2020-02-10 21:21:29
 * @LastEditors  : mrjzhang
 * @LastEditTime : 2020-02-12 09:44:15
 */
module.exports = {
  base:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.jsdelivr.net/gh/jquery/jquery/'
      : '',
  // theme: 'resume',
  themeConfig: {
    sidebar: [
      {
        collapsable: false,
        children: ['/']
      }
    ]
  }
}
