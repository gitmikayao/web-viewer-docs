export const themeData = {
  "logo": "/images/logo-dynamsoft-159x39.svg",
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
          "/guide/installation.md",
          "/guide/instance.md",
          "/guide/uiCustomization.md",
          "/guide/load.md",
          "/guide/save.md",
          "/guide/edit.md",
          "/guide/event.md",
          "/guide/annotation.md"
        ]
      }
    ],
    "/api/": [
      "/api/api.md"
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
  "sidebarDepth": 4,
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
