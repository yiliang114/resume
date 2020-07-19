/*
 * @Author: mrjzhang
 * @Date: 2020-02-10 21:21:29
 * @LastEditors  : mrjzhang
 * @LastEditTime : 2020-02-14 09:15:18
 */
module.exports = {
  title: '易良的简历',
  base: '/resume/',
  // process.env.NODE_ENV === 'production'
  //   ? 'https://cdn.jsdelivr.net/gh/yiliang114/resume@deploy/'
  //   : '',
  dest: 'dist',
  head: [
    [
      'link',
      { rel: 'shortcut icon', href: '/favicon.icon.ico', type: 'image/jpg' },
    ],
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
  },
  plugins: [
    [
      'vuepress-plugin-sitemap',
      { hostname: 'https://yiliang.site', outFile: 'sitemap.xml' },
    ],
    [
      'baidu-tongji',
      {
        hm: '9aff301c4ae8ff27118e8bb605bb3b09',
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-156101458-1',
      },
    ],
    'vuepress-plugin-baidu-autopush',
  ],
};
