export default {
  title: 'My Site',
  description: 'A VitePress Site',
  base: '/Docs/', // 若部署到 username.github.io/repo，需设置 base 路径
  themeConfig: {
    nav: [{ text: 'Guide', link: '/' }],
    socialLinks: [{ icon: 'github', link: 'https://github.com/xiaoshu312/Docs' }]
  }
};