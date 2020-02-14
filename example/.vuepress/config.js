/*
 * @Author: mrjzhang
 * @Date: 2020-02-10 21:21:29
 * @LastEditors  : mrjzhang
 * @LastEditTime : 2020-02-14 09:13:52
 */
module.exports = {
  title: '易良的简历',
  base:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.jsdelivr.net/gh/yiliang114/resume@deploy/'
      : '',
  dest: 'dist',
  head: [
    [
      'link',
      { rel: 'shortcut icon', href: '/favicon.icon.ico', type: 'image/jpg' }
    ]
  ],
  theme: 'md-resume',
  themeConfig: {
    // TODO: 暂时不需要 sidebar
    // sidebar: [
    //   {
    //     collapsable: false,
    //     children: ['/']
    //   }
    // ]
  }
}
