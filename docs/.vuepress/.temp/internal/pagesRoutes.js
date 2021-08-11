import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-587e1e66","/api/api.html","DVS API",["/api/api","/api/api.md"]],
  ["v-3bcbb382","/plugins/annotation.html","Annotation",["/plugins/annotation","/plugins/annotation.md"]],
  ["v-8d91d9b4","/plugins/cropBox.html","Crop box",["/plugins/cropBox","/plugins/cropBox.md"]],
  ["v-5a737714","/plugins/directory.html","Directory",["/plugins/directory","/plugins/directory.md"]],
  ["v-6b747b87","/plugins/edit.html","Edit",["/plugins/edit","/plugins/edit.md"]],
  ["v-2e175059","/plugins/error.html","Error",["/plugins/error","/plugins/error.md"]],
  ["v-f69532c6","/plugins/log.html","Log",["/plugins/log","/plugins/log.md"]],
  ["v-67d16688","/plugins/","",["/plugins/index.html","/plugins/README.md"]],
  ["v-0d82c650","/plugins/slide.html","Slide",["/plugins/slide","/plugins/slide.md"]],
  ["v-41b0dff2","/plugins/tag.html","Tag",["/plugins/tag","/plugins/tag.md"]],
  ["v-398bfbf5","/plugins/thumbnail.html","Thumbnail",["/plugins/thumbnail","/plugins/thumbnail.md"]],
  ["v-25aedf3d","/plugins/ui.html","UI",["/plugins/ui","/plugins/ui.md"]],
  ["v-fad166c4","/guide/annotation.html","Annotation",["/guide/annotation","/guide/annotation.md"]],
  ["v-34c019a3","/guide/edit.html","edition",["/guide/edit","/guide/edit.md"]],
  ["v-6765606b","/guide/event.html","event",["/guide/event","/guide/event.md"]],
  ["v-d7be191a","/guide/installation.html","Installation",["/guide/installation","/guide/installation.md"]],
  ["v-7aafe7f8","/guide/instance.html","Instance",["/guide/instance","/guide/instance.md"]],
  ["v-1266a772","/guide/load.html","Load Document",["/guide/load","/guide/load.md"]],
  ["v-fffb8e28","/guide/","Guide",["/guide/index.html","/guide/README.md"]],
  ["v-a21a13e0","/guide/save.html","Save a document",["/guide/save","/guide/save.md"]],
  ["v-98d244f4","/guide/uiCustomization.html","UI customization",["/guide/uiCustomization","/guide/uiCustomization.md"]],
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
