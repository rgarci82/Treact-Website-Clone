function openMenu(){
    if(!document.body.classList.contains("menu--open")){
        document.body.classList += " menu--open"
    }
    else{
        document.body.classList -= " menu--open"
    }
}