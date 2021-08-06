export const themeData = {
  "logo": "./icon.jpg",
  "lastUpdated": "Last Updated",
  "navbar": [
    {
      "text": "Home",
      "link": "/foo/"
    },
    {
      "text": "Group",
      "children": [
        {
          "link": "/group/foo.md",
          "text": "test1"
        },
        "/group/bar.md"
      ]
    },
    "/bar/README.md",
    {
      "text": "Group",
      "children": [
        {
          "text": "SubGroup",
          "children": [
            "/group/sub/foo.md",
            "/group/sub/bar.md"
          ]
        }
      ]
    },
    {
      "text": "Group 2",
      "children": [
        {
          "text": "Always active",
          "link": "/",
          "activeMatch": "/"
        },
        {
          "text": "Active on /foo/",
          "link": "/not-foo/",
          "activeMatch": "^/foo/"
        }
      ]
    }
  ],
  "sidebar": [
    {
      "text": "Foo",
      "link": "/foo/",
      "children": [
        {
          "text": "github",
          "link": "https://github.com",
          "children": []
        },
        "/foo/bar.md"
      ]
    },
    "/bar/README.md"
  ],
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
