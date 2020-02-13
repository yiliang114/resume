/*
 * @Author: mrjzhang
 * @Date: 2020-02-10 21:21:29
 * @LastEditors  : mrjzhang
 * @LastEditTime : 2020-02-13 13:54:27
 */
module.exports = {
  base:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.jsdelivr.net/gh/yiliang114/resume/'
      : '',
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
