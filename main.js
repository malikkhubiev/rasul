const currentYear=new Date().getFullYear(),year=document.getElementById("year");year.innerText=currentYear,feather.replace(),window.addEventListener("scroll",function(){let e=document.getElementById("header");window.scrollY>100?e.classList.add("scrolled"):e.classList.remove("scrolled")}),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let t=document.querySelector(this.getAttribute("href"));t&&t.scrollIntoView({behavior:"smooth",block:"start"})})});const observerOptions={threshold:.1,rootMargin:"0px 0px -50px 0px"},observer=new IntersectionObserver(function(e){e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},observerOptions);document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right").forEach(e=>{observer.observe(e)}),window.addEventListener("scroll",function(){let e=window.pageYOffset,t=document.querySelectorAll(".parallax-element");t.forEach(t=>{let r=t.dataset.speed||.5;t.style.transform=`translateY(${e*r}px)`})});const mobileMenuBtn=document.getElementById("mobile-menu-btn"),navMenu=document.querySelector(".nav-menu");mobileMenuBtn.addEventListener("click",function(){navMenu.classList.toggle("active")}),document.querySelectorAll(".nav-menu a").forEach(e=>{e.addEventListener("click",function(){navMenu.classList.remove("active")})}),document.querySelectorAll(".service-card").forEach(e=>{e.addEventListener("mouseenter",function(){this.style.transform="translateY(-10px) scale(1.02)"}),e.addEventListener("mouseleave",function(){this.style.transform="translateY(0) scale(1)"})}),document.querySelectorAll(".btn").forEach(e=>{e.addEventListener("click",function(e){let t=document.createElement("span");t.style.position="absolute",t.style.borderRadius="50%",t.style.background="rgba(255, 255, 255, 0.3)",t.style.transform="scale(0)",t.style.animation="ripple 0.6s linear",t.style.left=e.offsetX-10+"px",t.style.top=e.offsetY-10+"px",t.style.width="20px",t.style.height="20px",this.appendChild(t),setTimeout(()=>{t.remove()},600)})});const style=document.createElement("style");style.textContent=`
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.98);
        padding: 2rem;
        border-top: 1px solid var(--gray-700);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`,document.head.appendChild(style);