const zhCNThemeConfig = {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
        { text: '主页', link: '/zh/' }
    ],

    sidebar: [
        {
            text: '',
            items: [
                { text: '主页', link: '/zh/' },
                { text: '更多信息', link: '/zh/more' }
            ]
        }
    ],

    socialLinks: [
        { icon: 'github', link: 'https://github.com/xiaoshu312/Docs' }
    ],

    footer: {
        message: `根据 GPLv3 许可证进行授权`,
        copyright: '版权所有 © 2025 <a href="https://github.com/xiaoshu312">小树的小窝</a>'
    },

    editLink: {
        pattern: 'https://github.com/xiaoshu312/Docs/edit/main/docs/:path',
        text: "在 GitHub 上编辑此页面"
    },

    lastUpdatedText: '最后更新于',
    returnToTopLabel: '返回顶部',

    docFooter: {
        prev: '上一页',
        next: '下一页'
    },

    outline: {
        level: "deep", // 右侧大纲标题层级
        label: "目录", // 右侧大纲标题文本配置
    }
}

export default zhCNThemeConfig