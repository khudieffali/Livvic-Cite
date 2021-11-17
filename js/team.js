$(".menu-bar").click(function(){
    $(".nav-li-bar").stop().slideToggle()
    
})

window.onload=function(){
    setTimeout(()=>{
    document.querySelector(".loader").classList.add("d-none")
     document.body.style="overflow-y:scroll"
    },1000)
}
window.onscroll=function(){

    if(scrollY>120){
    ("#header")

    }
}