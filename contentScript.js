function redirect() {
    location.replace("https://www.msy.com.au/cart")
}

async function main() {
    var xmlhttp = new XMLHttpRequest()
    
    var theUrl = "https://www.msy.com.au/addproducttocart/details/14131/1"
    xmlhttp.open("POST", theUrl)

    var formData = new FormData()
    formData.append('addtocart_14131.EnteredQuantity', 1)

    
    xmlhttp.setRequestHeader("Content-Type", "multipart/form-data")
    
    await xmlhttp.send(formData)

    // TODO: implementation redirects the webpage too fast. The cart does not update in time
    redirect()
    

    return 1
}

main()










