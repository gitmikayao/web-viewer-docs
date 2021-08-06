export const data = {
  "key": "v-0923f283",
  "path": "/pages/9ff48e/",
  "title": "test1",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "test1",
    "date": "2021-08-05T17:13:02.000Z",
    "permalink": "/pages/9ff48e/",
    "categories": [
      "pages",
      "folder1"
    ],
    "tags": [
      null
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "test 1-1",
      "slug": "test-1-1",
      "children": []
    }
  ],
  "filePathRelative": "pages/folder1/test1.md",
  "git": {
    "updatedTime": null,
    "contributors": []
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
