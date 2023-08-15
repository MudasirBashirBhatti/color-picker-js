let body = document.querySelector('body');
let getColor = document.querySelector('.getColor');
let colorCode = document.querySelector('.colorCode');
let parent = document.querySelector('.parent');
let success = document.querySelector('.success')
let hexCopy = document.querySelector('.hexCopy')
let htmlHexCode = document.querySelector('.htmlHexCode')
let rgbCopy = document.querySelector('.rgbCopy')
let htmlRgbCode = document.querySelector('.htmlRgbCode')

let hexArray = '0123456789abcdef'
getColor.addEventListener('click', () => {
    let hexString = '';
    for (let i = 0; i < 6; i++) {
        let randomDigit = hexArray[Math.floor(Math.random() * hexArray.length)]
        hexString += randomDigit;
    }
    hexCode = "#" + hexString
    body.style.backgroundColor = hexCode
    colorCode.textContent = hexCode

    let r = parseInt(hexCode.substring(1, 3), 16);
    let g = parseInt(hexCode.substring(3, 5), 16);
    let b = parseInt(hexCode.substring(5, 7), 16);

    htmlHexCode.innerHTML = hexCode
    htmlRgbCode.innerHTML = `rgb(${r},${g},${b})`

    if (hexCode === "#000000") {
        parent.style.border = '1px solid white'
        colorCode.style.border = '1px solid white'
        getColor.style.cssText = 'background-color:white; color:black; boxshadow:none;'
    }
})
htmlRgbCode.innerHTML = `rgb(250,182,255)`
hexCode = '#FAB6FF'

colorCode.addEventListener('click', () => {
    navigator.clipboard.writeText(hexCode);
    success.style.top = '0px'
    parent.style.paddingTop = '2.5em'
    success.innerHTML = `<span style="text-transform:uppercase;">${hexCode}</span> copied to clipboard!`
    setTimeout(() => {
        success.style.top = '-30px'
        parent.style.paddingTop = '1em'
    }, 1800)
})
hexCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(htmlHexCode.innerHTML)
    success.innerHTML = `<span style="text-transform: uppercase" >${htmlHexCode.innerHTML}</span> copied to clipboard!`
    success.style.top = '0px'
    parent.style.paddingTop = '2.5em'

    setTimeout(() => {
        success.style.top = '-30px'
        parent.style.paddingTop = '1em'
    }, 1800)
})
rgbCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(htmlRgbCode.innerHTML)
    success.innerHTML = `<span>${htmlRgbCode.innerHTML}</span> copied to clipboard!`
    success.style.top = '0px'
    parent.style.paddingTop = '2.5em'
    setTimeout(() => {
        success.style.top = '-30px'
        parent.style.paddingTop = '1em'
    }, 1800)
})