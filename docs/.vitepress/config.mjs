import { defineConfig } from 'vitepress'
import headConfig from './config/head'
import zhCNThemeConfig from './config/theme/zh_CN'
import enUSThemeConfig from './config/theme/en_US'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xiaoshu312\'s Website",
  description: "A place where Xiaoshu312 used to write articles.",
  head: headConfig,
  themeConfig: enUSThemeConfig,
  base: '/Docs/',
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: zhCNThemeConfig
    }
  },
  sitemap: {
    hostname: 'https://xiaoshu312.github.io/Docs'
  },
  lastUpdated: true
})
