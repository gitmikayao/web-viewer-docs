export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/icon.jpg",
    "heroText": "WebViewer API",
    "tagline": "this is a test word",
    "actions": [
      {
        "text": "Get Started",
        "link": "/api/api.html",
        "type": "primary"
      },
      {
        "text": "Introduction",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "title 1",
        "details": "test1"
      },
      {
        "title": "title 2",
        "details": "test2"
      },
      {
        "title": "title 3",
        "details": "test3"
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1628500104000,
    "contributors": [
      {
        "name": "mika6",
        "email": "xlyao_666@163.com",
        "commits": 2
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
