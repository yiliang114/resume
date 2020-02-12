/*
 * @Author: mrjzhang
 * @Date: 2020-02-10 21:21:29
 * @LastEditors  : mrjzhang
 * @LastEditTime : 2020-02-12 17:18:02
 */
module.exports = {
  // base:
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://cdn.jsdelivr.net/gh/jquery/jquery/'
  //     : '',
  base: '/',
  dest: 'dist',
  theme: 'md-resume',
  themeConfig: {
    sidebar: [
      {
        collapsable: false,
        children: ['/']
      }
    ]
  }
}
