const produtoSection = document.querySelector(".produto_section");
const wrapper = document.querySelector(".wrapper");
let painel = document.querySelector(".painel")

let sections = gsap.utils.toArray(".painel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease:"none", //Importante!!
    scrollTrigger: {
        trigger: produtoSection,
        pin:true, 
        scrub:.01,
        end:"+=3000"
    }
})