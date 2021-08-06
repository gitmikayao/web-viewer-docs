import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-587e1e66","/api/api.html","webViewer API",["/api/api","/api/api.md"]],
  ["v-27caeaa4","/pages/0cbcb5/","README",["/pages/0cbcb5/index.html","/pages/","/pages/README.md"]],
  ["v-fffb8e28","/guide/","",["/guide/index.html","/guide/README.md"]],
  ["v-5888c846","/guide/test1.html","test1",["/guide/test1","/guide/test1.md"]],
  ["v-5a3da0e5","/guide/test2.html","test2",["/guide/test2","/guide/test2.md"]],
  ["v-0923f283","/pages/9ff48e/","test1",["/pages/9ff48e/index.html","/pages/folder1/test1.html","/pages/folder1/test1.md"]],
  ["v-d7b7267c","/pages/2f5170/","test2",["/pages/2f5170/index.html","/pages/folder1/test2.html","/pages/folder1/test2.md"]],
  ["v-932d068c","/pages/9786d9/","test3",["/pages/9786d9/index.html","/pages/folder1/test3.html","/pages/folder1/test3.md"]],
  ["v-4c9bac60","/pages/7783e5/","test1",["/pages/7783e5/index.html","/pages/folder2/test1.html","/pages/folder2/test1.md"]],
  ["v-9bee765e","/pages/93ce86/","test2",["/pages/93ce86/index.html","/pages/folder2/test2.html","/pages/folder2/test2.md"]],
  ["v-b87dd4d4","/pages/418c8e/","test3",["/pages/418c8e/index.html","/pages/folder2/test3.html","/pages/folder2/test3.md"]],
  ["v-bcbc7526","/pages/402334/","test4",["/pages/402334/index.html","/pages/folder2/test4.html","/pages/folder2/test4.md"]],
  ["v-488af741","/plugins/community/user1.html","user1",["/plugins/community/user1","/plugins/community/user1.md"]],
  ["v-4a3fcfe0","/plugins/community/user2.html","user2",["/plugins/community/user2","/plugins/community/user2.md"]],
  ["v-74ca7128","/plugins/webViewer/dvsPluginEdit.html","",["/plugins/webViewer/dvsPluginEdit","/plugins/webViewer/dvsPluginEdit.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
