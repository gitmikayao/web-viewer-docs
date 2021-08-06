export const themeData = {
  "logo": "./icon.jpg",
  "lastUpdated": "Last Updated",
  "navbar": [
    {
      "text": "Guide",
      "link": "/guide/"
    },
    {
      "text": "Api",
      "link": "/api/api"
    },
    {
      "text": "Plugins",
      "children": [
        {
          "text": "Community",
          "children": [
            "/plugins/community/user1.md",
            "/plugins/community/user2.md"
          ]
        },
        {
          "text": "webViewer",
          "children": [
            "/plugins/webViewer/dvsPluginEdit.md"
          ]
        }
      ]
    },
    {
      "text": "Github",
      "link": "https://github.com/mika6/web-viewer-docs"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "text": "Guide",
        "children": [
          {
            "text": "test1",
            "link": "test1"
          },
          {
            "text": "test2",
            "link": "test2"
          }
        ]
      }
    ],
    "/api/": [
      {
        "text": "API",
        "link": "api.md"
      }
    ],
    "/plugins/": [
      {
        "text": "Community",
        "children": [
          "/plugins/community/user1.md",
          "/plugins/community/user2.md"
        ]
      },
      {
        "text": "webViewer",
        "children": [
          "/plugins/webViewer/dvsPluginEdit.md"
        ]
      }
    ]
  },
  "darkMode": true,
  "notFound": [
    "页面飞了"
  ],
  "backToHome": "返回主页",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
