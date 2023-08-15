let body = document.querySelector('body');
let btn = document.querySelector('button');
let colorCode = document.querySelector('.colorCode');
let parent = document.querySelector('.parent')

let hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener('click',()=>{
    let random1 = hexArray[Math.floor(Math.random(1)*hexArray.length)]
    let random2 = hexArray[Math.floor(Math.random(1)*hexArray.length)]
    let random3 = hexArray[Math.floor(Math.random(1)*hexArray.length)]
    let random4 = hexArray[Math.floor(Math.random(1)*hexArray.length)]
    let random5 = hexArray[Math.floor(Math.random(1)*hexArray.length)]
    let random6 = hexArray[Math.floor(Math.random(1)*hexArray.length)]
    let first= random1
    let second=random2
    let third=random3
    let fourth=random4
    let fifth=random5
    let sixth=random6
    
    let randomColor = "#"+first+second+third+fourth+fifth+sixth


    body.style.backgroundColor = randomColor
    colorCode.textContent = randomColor

    if(randomColor ==="#000000"){
        parent.style.border = '1px solid white'
        colorCode.style.border = '1px solid white'
        btn.style.backgroundColor = 'white'
        btn.style.color='black';
        btn.style.boxShadow= 'none'
    }
})