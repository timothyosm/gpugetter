function redirect() {
    location.replace("https://www.msy.com.au/cart")
}

async function main() {
    var xmlhttp = new XMLHttpRequest()
    
    // TODO: pass in values into theUrl via the popup menu
    var theUrl = "https://www.msy.com.au/addproducttocart/details/14131/1"
    xmlhttp.open("POST", theUrl)

    // TODO: option to use formdata or JSON via the popup menu
    var formData = new FormData()
    formData.append('addtocart_14131.EnteredQuantity', 1)

    // TODO: this will repopulate based on the choices made in the popup menu
    xmlhttp.setRequestHeader("Content-Type", "multipart/form-data")
    
    await xmlhttp.send(formData)

    // TODO: implementation redirects the webpage too fast. The cart does not update in time
    redirect()
    

    return 1
}

main()










