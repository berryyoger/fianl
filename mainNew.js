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

let textBox = document.querySelectorAll('article')
let left = document.querySelectorAll('.left')
let right = document.querySelectorAll('.right')

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
