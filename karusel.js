let sourse= [
    "./karuselfoto/foto1.jpg",
    "./karuselfoto/foto2.jpg",
    "./karuselfoto/foto3.jpg"
]
let long=sourse.length
let n=0
console.log("long====>",long)
let karusel = document.querySelector('.karusel')
let arrowLeft=document.querySelector('.arrowLeft')
let arrowRight=document.querySelector('.arrowRight')
console.log(karusel)
let divs=karusel.querySelectorAll('div')
console.log(divs[0])
divs[0].innerHTML=`<img src=${sourse[0]} alt="">`
let Draw = (n=0)=>{
    divs.forEach((el,i) => {
       let j= n+i
       if( j>long-1){j=j-long}
       el.innerHTML=`<img src=${sourse[j]} alt="">`
    }); 
}
Draw()
let scrolLeft=()=>{
    n=n-1
    if(n<0){n=long-1}
    console.log("n===",n)
    Draw(n)
}
let scrolRight=()=>{
    n=n+1
    if(n==long){n=0}
    console.log("n===",n)
    Draw(n)
}
