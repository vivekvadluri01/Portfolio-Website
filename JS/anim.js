var tl = gsap.timeline()

tl.from("#main_scroll #main .container .left_container>img",{
  y:-100,
  duration:0.2,
  delay:0.3,
  opacity:0,
  stagger:0.1
})


tl.from("#main_scroll #main .container .right_container .top .name>h1",{
  y:100,
  duration:0.2,
  delay:0.2,
  opacity:0,
  stagger:0.1
})

tl.from("#main_scroll #main .container .right_container .social_icon>a",{
  x:100,
  duration:0.2,
  delay:0.2,
  opacity:0,
  stagger:0.1
})

tl.from("#main_scroll #main .container .right_container .middle>h2",{
  x:-100,
  duration:0.2,
  delay:0.2,
  opacity:0,
  stagger:0.1
})

tl.from("#main_scroll #main .container .right_container .bottom>.home",{
  y:100,
  duration:0.2,
  delay:0.2,
  opacity:0,
  stagger:0.1
})

tl.from("#main_scroll #main .container .right_container .bottom>.About",{
  x:100,
  duration:0.2,
  delay:0.2,
  opacity:0,
  stagger:0.1
})

tl.from("#main_scroll #main .container .right_container .bottom>.work",{
  y:-100,
  duration:0.2,
  delay:0.2,
  opacity:0,
  stagger:0.1
})

tl.from("#main_scroll #main .container .right_container .bottom>.contact",{
  x:-100,
  duration:0.2,
  delay:0.2,
  opacity:0,
  stagger:0.1
})

tl.from("#main_scroll #main .download_resume .link",{
  x:-30,
  repeat:-1,
  duration:0.5,
  opacity:0,
  yoyo:true
})