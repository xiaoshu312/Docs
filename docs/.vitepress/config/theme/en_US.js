const enUSThemeConfig = {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
        { text: 'Home', link: '/' }
    ],

    sidebar: [
        {
            text: '',
            items: [
                { text: 'Home', link: '/' }
            ]
        }
    ],

    socialLinks: [
        { icon: 'github', link: 'https://github.com/xiaoshu312/Docs' }
    ],

    footer: {
        message: `Released under GPLv3 License`,
        copyright: '© 2025 Xiaoshu312. All rights reserved.'
    },

    editLink: {
        pattern: 'https://github.com/xiaoshu312/Docs/edit/main/docs/:path',
        text: "Edit this page on GitHub"
    },

    outline: {
        level: "deep", // 右侧大纲标题层级
    }
}

export default enUSThemeConfig