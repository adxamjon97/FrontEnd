const dce = e => document.createElement(e)
const main = document.querySelector("main")

// har bir shaxsni aks etirish uchun
for(let i of list){
    const div = dce("div"),
    	img = dce("img"),
    	h   = dce("h3"),
    	p1  = dce("p"),
    	p2  = dce("p")

    img.src = `img/${i.id}.jpg`
    
    h.innerText  = i.ism
    p1.innerText = i.yil
    p2.innerText = i.tel
    
    div.appendChild(img)
	div.appendChild(h)
    div.appendChild(p1)
    div.appendChild(p2)
    
    main.prepend(div)   
}

// interaktiv holat uchun
var bosildi = ""
var yopish = false

addEventListener("click", e => {
    let div = e.target
    
	// bosilgan hudud div ligini tekshiradi
	if(bosildi.localName == "div"){
        bosildi.removeAttribute("class", "divActive")
        
        let child = bosildi.children
        
        child[1].removeAttribute("class", "h3Active")
        child[2].removeAttribute("class", "pActive")
        child[3].removeAttribute("class", "pActive")

        yopish = bosildi == div
    }
    
	// ...
    if(div.localName == "div"){
        if(yopish){
            yopish = false
            bosildi = ""
        }else if(div.getAttribute("class") == null){
            div.setAttribute("class", "divActive")
            
            let child = div.children
            
            child[1].setAttribute("class", "h3Active")
            child[2].setAttribute("class", "pActive")
            child[3].setAttribute("class", "pActive")
            
            bosildi = div
        }
    }
})