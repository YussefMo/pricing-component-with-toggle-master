// declare variables for the toggle button and the price
let toggelbutton=document.getElementById('toggelbutton')
let basicprice=document.getElementById('basicprice')
let Professionalprice=document.getElementById('Professionalprice')
let Masterprice=document.getElementById('Masterprice')


toggelbutton.addEventListener('click' , function () {
    // toggle the active class on the button
    toggelbutton.classList.toggle('active')
    // tpggel condition
    if(toggelbutton.classList.contains('active')){
        basicprice.innerHTML='<span>&dollar;</span>19.99'
        Professionalprice.innerHTML='<span>&dollar;</span>24.99'
        Masterprice.innerHTML='<span>&dollar;</span>39.99'
    }else{
        basicprice.innerHTML='<span>&dollar;</span>199.99'
        Professionalprice.innerHTML='<span>&dollar;</span>249.99'
        Masterprice.innerHTML='<span>&dollar;</span>399.99'
    }
})