module.exports = {
    lang: 'en-US',
    title: 'WebViewer API', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'web viewer api', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.ico' }], //浏览器的标签栏的网页图标
    ],
    serviceWorker: true,
    // theme: 'vdoing',
    themeConfig: {
        logo: '/images/logo-dynamsoft-159x39.svg',
        lastUpdateText: 'Last Updated',
        navbar: require('./nav'),
        sidebar: require('./sidebar'),
        sidebarDepth: 4,
        darkMode: true, // default true
        notFound: ["not found"],
        backToHome: "back to home",
    },
    markdown: {
        extractHeaders: {
            level: [2, 3, 4]
        }
    },
    // host: '192.168.8.129',
    // open: true,
}