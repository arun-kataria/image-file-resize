function imageConvert({ file, width, height, type }) {
    return new Promise(function (resolve, reject) {
        let allow = ['jpg', 'gif', 'bmp', 'png', 'jpeg'];
        if (file.name && allow.includes(file.name.split(".")[1]) && file.size && file.type && allow.includes(file.type.split("/")[1])) {
            let imageType = type? type:'jpeg';
            const imgWidth = width ? width : 500;
            const imgHeight = height ? height : 300;
            const fileName = file.name;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = event => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const elem = document.createElement('canvas');
                    elem.width = imgWidth;
                    elem.height = imgHeight;
                    const ctx = elem.getContext('2d');
                    ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
                    ctx.canvas.toBlob((blob) => {
                        const file = new File([blob], fileName, {
                            type: `image/${imageType}`,
                            lastModified: Date.now()
                        });
                        resolve(file)
                    }, 'image/jpeg', 1);
                }, reader.onerror = error => reject(error);
            };
        } else reject('File not supported!')
    })
}
export default imageConvert;