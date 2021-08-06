module.exports = {
    lang: 'zh-CN',
    title: 'WebViewer API', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'web viewer api', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: './icon.jpg' }], //浏览器的标签栏的网页图标
    ],
    serviceWorker: true,
    // theme: 'vdoing',
    themeConfig: {
        logo: './icon.jpg',
        lastUpdated: 'Last Updated', // string | boolean
        navbar: require('./nav'),
        sidebar: require('./sidebar'),
        darkMode: true, // default true
        notFound: ["页面飞了"],
        backToHome: "返回主页",

    }
}