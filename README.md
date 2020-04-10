# image-file-resize
 
This node module to resize the image file according to width and height. Also you can change the extension of a file. And also it is very **light weight**.

> [Live demo](https://react-rggk21.stackblitz.io/)

## Install

```sh
npm install --save image-file-resize
```
## Examples of how to use it

```javascript
    import convert from 'image-file-resize';

    convert({ file: e.target.files[0],  width: 600, height: 400, type: 'jpeg'  }).then(resp => {
                // Response contain compress file
            }).catch(error => {
               // Error
            })
```

## Parameter to send
 Object need to send as a parameter and contain these data.

| Key | Required/Optional | Description |
| --- | --- | --- |
| `file` | **Required** | Contain file object. |
| `width` | Optional | Width of image required **Default is 500** |
| `height` | Optional | Height of image required **Default is 300** |
| `type` | Optional | Type of image required **Default is jpeg** |

You can convert image only in **jpg, gif, bmp, png, jpeg**.
