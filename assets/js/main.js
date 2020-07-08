let x = 0
let y = 0
let z = 0
function showMenu() {
    x++
    if (x % 2 == 1) {
        document.getElementById("menu").style.width = "50%"
        document.getElementById("one").style.transform = "rotate(45deg) translate(6px,4px)"
        document.getElementById("three").style.transform = "rotate(135deg) translate(-8px,4px)"
        document.getElementById("two").style.display = "none"
        document.getElementById("link-one").style.display = "inline"
        document.getElementById("link-two").style.display = "inline"
        document.getElementById("link-three").style.display = "inline"
    }
    else {
        document.getElementById("menu").style.width = "0%"
        document.getElementById("one").style.transform = "none"
        document.getElementById("three").style.transform = "none"
        document.getElementById("two").style.display = "block"
        document.getElementById("link-one").style.display = "none"
        document.getElementById("link-two").style.display = "none"
        document.getElementById("link-three").style.display = "none"
    }
}
function apply() {
    y++
    if (y % 2 == 1) {
        document.getElementById("application").style.height = "60px"
    }
    else {
        document.getElementById("application").style.height = "0px"
    }
}
function req() {
    z++
    if (z % 2 == 1) {
        document.getElementById("req").style.height = "60px"
    }
    else {
        document.getElementById("req").style.height = "0px"
    }
}
function light() {
    document.getElementById("apply").style.background = "#fff"
    document.getElementById("apply").style.color = "#000"
    document.getElementById("hero").style.opacity = "1"
    document.getElementById("nav").style.background = "#999"
    document.getElementById("footer").style.background = "#999"
    document.getElementById("accordion-one").style.background = "#999"
    document.getElementById("accordion-two").style.background = "#999"
}
function dark() {
    document.getElementById("apply").style.background = "#000"
    document.getElementById("apply").style.color = "#fff"
    document.getElementById("hero").style.opacity = ".6"
    document.getElementById("nav").style.background = "#333"
    document.getElementById("footer").style.background = "#333"
    document.getElementById("accordion-one").style.background = "#333"
    document.getElementById("accordion-two").style.background = "#333"
}
function fancy() {
    document.getElementById("apply").style.background = "#2B2B29"
    document.getElementById("apply").style.color = "#F4C4C4"
    document.getElementById("hero").style.opacity = "1"
    document.getElementById("nav").style.background = "#444"
    document.getElementById("footer").style.background = "#444"
    document.getElementById("accordion-one").style.background = "#444"
    document.getElementById("accordion-two").style.background = "#444"
}