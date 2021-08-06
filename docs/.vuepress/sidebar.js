module.exports = {
    '/guide/': [{
        text: 'Guide',
        children: [{
            text: 'test1',
            link: 'test1'
        }, {
            text: 'test2',
            link: 'test2'
        }]
    }],
    '/api/': [{
        text: 'API',
        link: 'api.md'
    }],
    '/plugins/': [{
            text: 'Community',
            children: [
                '/plugins/community/user1.md',
                '/plugins/community/user2.md',
            ]
        },
        {
            text: 'webViewer',
            children: [
                '/plugins/webViewer/dvsPluginEdit.md',
            ]
        }
    ]
}