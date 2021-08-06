module.exports = [
    // NavbarItem
    {
        text: 'Guide',
        link: '/guide/',
    },
    // NavbarGroup
    {
        text: 'Api',
        link: '/api/api'
    },
    // 嵌套 Group - 最大深度为 2
    {
        text: 'Plugins',
        children: [{
                text: 'Community',
                children: ['/plugins/community/user1.md',
                    '/plugins/community/user2.md'
                ],
            },
            {
                text: 'webViewer',
                children: ['/plugins/webViewer/dvsPluginEdit.md'],
            },
        ],
    },
    // 控制元素何时被激活
    { text: 'Github', link: 'https://github.com/mika6/web-viewer-docs' },
]