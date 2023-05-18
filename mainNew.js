let upComing = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.opacity = 1;
        }
        else{
            box.target.style.opacity = 0;
        }
    })
})

let upComingFromLeft = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.transform = "translateX(0px)";
        }
        else{
            box.target.style.transform = "translateX(-400px)"
        }
    })
})

let upComingFromRight = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.transform = "translateX(0px)";
        }
        else{
            box.target.style.transform = "translateX(400px)"
        }
    })
})

let cycle = 1
let passDstnsSub = 0
let passDstnsMain = 0
let pass = () =>{
    if(cycle<=3){
        passDstnsMain = passDstnsMain-120
        passDstnsSub = passDstnsSub-83
        bennerTextGroupH1.style.transform = "translateY("+passDstnsMain+"px)"
        bennerTextGroupH2.style.transform = "translateY("+passDstnsSub+"px)"
        cycle++
        if(cycle>3){
            bennerTextGroupH1.style.transition = "none"
            bennerTextGroupH2.style.transition = "none"
            passDstnsMain = 120
            passDstnsSub = 83
            bennerTextGroupH1.style.transition = "all 2s"
            bennerTextGroupH2.style.transition = "all 2s"
            cycle = 0
        }
    }
    else{
    }
    console.log(cycle)
}

let textBox = document.querySelectorAll('article')
let left = document.querySelectorAll('.left')
let right = document.querySelectorAll('.right')
let bennerTextGroupH1 = document.querySelector('.bennerTextGroupH1')
let bennerTextGroupH2 = document.querySelector('.bennerTextGroupH2')

    upComing.observe(textBox[0])
    upComing.observe(textBox[1])
    upComing.observe(textBox[2])
    upComing.observe(textBox[3])
    upComing.observe(textBox[4])
    upComing.observe(textBox[5])

    upComingFromLeft.observe(left[0])
    upComingFromLeft.observe(left[1])
    upComingFromLeft.observe(left[2])

    upComingFromRight.observe(right[0])
    upComingFromRight.observe(right[1])
    upComingFromRight.observe(right[2])
    

    setInterval(pass, 4000)