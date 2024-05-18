const loadingAnimation = document.getElementById("loading")
let fetching = async ()=>{
    let data = await fetch("https://fakestoreapi.com/products")
    data = await data.json()
    loadingAnimation.style.display="none"


    let mensOnly = data.filter(menItem => menItem.category === "men's clothing")
    mensOnly.map(EachProduct =>{
        let rootElement = document.getElementById("products")

        let product = document.createElement("div")
        product.id="product"
        
        let img = document.createElement("img")
        img.setAttribute('src', EachProduct.image)
        let cartbutton = document.createElement("button")
        cartbutton.textContent="ADD TO CART"
        
        let purchaseButton = document.createElement("button")
        purchaseButton.textContent="PURCHASE"
        
        product.appendChild(img)
        product.appendChild(cartbutton)
        product.appendChild(purchaseButton)
        
        rootElement.append(product)
        
        cartbutton.addEventListener('click',()=>{
            window.localStorage.setItem(elem.uid,[1,2])
        })
    })

}






fetching()
