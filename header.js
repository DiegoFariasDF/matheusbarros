window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('scroll', this.window.scrollY > 0)
})



const hamb = document.querySelector(".hamb");
const nav = document.querySelector("#nav");

hamb.addEventListener("click", () => nav.classList.toggle("ativo"));