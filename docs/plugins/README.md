Plugins are usually used to extend the DVS system and have the following functions:
- Add some global level methods and properties to DVS.
- Add some methods and properties to DVS instance. e.g. [dvsLog](./log.md)
- Extend some  inner class. e.g. [dvsEdit](./edit.md)
- A library that provides an API of its own, at the same time injecting some combination of the above. e.g. [dvsTag](./tag.md)

## Using a Plugin
Use plugins by calling `DVS.use()` or `DVS.useAll()` method.

::: tip Notice
This has to be done before calling `new DVS()`.
:::

```js
DVS.use(dvs-plugin-xx1);
DVS.use(dvs-plugin-xx2，{
    //... config
});

const dvs = new DVS({
    //... config
})
```
You can chain invoke `DVS.use()`.
```js
DVS.use(dvs-plugin-xx1)
   .use(dvs-plugin-xx2,{
       //... config
    })
    .use(dvs-plugin-xx3);

const dvs = new DVS({
    //... config
});
```
You can use `DVS.useAll()` to use multiple plugins:
```js
DVS.useAll([
    dvs-plugin-xx1,
    [dvs-plugin-xx2, { someOption: true }],
    dvs-plugin-xx3
]);

const dvs = new DVS({
    //... config
});
```

## Developing a Plugin
The DVS plugin should expose `install` or `instancing` method. The `install` method will be called width `DVS` constructor as the first argument. The `instancing` method will be called width  `DVS` instance as the first argument.

```js
// install
const dvs-plugin-xxx1 = {
    install(DVS){
        // 1. add some global method to DVS
        DVS.globalMethod = () => {
            // ...
        }

        // 2. extend some inner class
        const classes = DVS.getClasses();
        const oldClass = classes.oldClass;
        const newClass = class AClass extends oldClass{
            //...
        }
        classes.oldClass = newClass;
    }
}

// instancing
import Library from 'xxx';

const dvs-plugin-xxx1 = {
    instancing(dvsInstance){
        // 3. a  library that provides an API of its own, at the
        // same time injecting some combination of the above. 
        dvsInstance["Library"] = new Library();
    }
}
```

## Plugins
There are some default plugins provided by DVS.
| Name | Description |
| :--- | :--- |
| [dvsCropBox](./cropBox.md) | Use this plugin to select the cropped area on the page |
| [dvsDirectory](./directory.md) | Add directory function to DVS and manage the file or folder. |
| [dvsEdit](./edit.md) | Add some transform, crop and change the page size functions to the viewer. |
| [dvsError](./error.md) | Collect the error message. |
| [dvsLog](./log.md) | Collect the log message. |
| [dvsSlide](./slide.md) | Add a slide function to main view to switch the current page, it is valid on single page mode only. |
| [dvsTag](./tag.md) | Add tag function to DVS and manage the tag. |
| [dvsThumbnail](./thumbnail.md) | Add thumbnail function to viewer.The plugin `dvsUi` is needed if show the thumbnail in the html.|
| [dvsUi](./ui.md) | Add ui customization function to DVS. |
