export const themeData = {
  "logo": "/images/logo-dynamsoft-159x39.svg",
  "lastUpdateText": "Last Updated",
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
      "link": "/plugins/"
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
        "text": "Plugins",
        "children": [
          "/plugins/annotation.md",
          "/plugins/cropBox.md",
          "/plugins/directory.md",
          "/plugins/edit.md",
          "/plugins/error.md",
          "/plugins/log.md",
          "/plugins/slide.md",
          "/plugins/tag.md",
          "/plugins/thumbnail",
          "/plugins/ui"
        ]
      }
    ]
  },
  "sidebarDepth": 4,
  "darkMode": true,
  "notFound": [
    "not found"
  ],
  "backToHome": "back to home",
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
  "lastUpdated": true,
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
