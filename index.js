module.exports = function({ file, width, height, type }) {
    return new Promise(function (resolve, reject) {
        let allow = ['jpg', 'gif', 'bmp', 'png', 'jpeg', 'svg'];
        try {
            if (file.name && file.name.split(".").reverse()[0] && allow.includes(file.name.split(".").reverse()[0].toLowerCase()) && file.size && file.type) {
                let imageType = type ? type : 'jpeg';
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
                                type: `image/${imageType.toLowerCase()}`,
                                lastModified: Date.now()
                            });
                            resolve(file)
                        }, ´image/${imageType}´, 1);
                    }, reader.onerror = error => reject(error);
                };
            } else reject('File not supported!')
        } catch (error) {
            console.log("Error while image resize: ", error);
            reject(error)
        }
    })
}
