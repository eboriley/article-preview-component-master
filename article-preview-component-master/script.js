var share_button = document.querySelector(".share-button")
var social_icons = document.querySelector(".social-icons-container")
var share_logo = document.querySelector(".box__bottom-share--logo")

share_button.addEventListener("click", function () {
    if (social_icons.style.visibility === 'hidden') {
        social_icons.style.visibility = 'visible'
        this.style.backgroundColor = 'hsl(214, 17%, 51%)'
        share_logo.style.fill = '#fff'
    } else {
        social_icons.style.visibility = 'hidden'
        share_logo.style.fill = '#6E8098'
        this.style.backgroundColor = 'hsl(210, 46%, 95%)'
    }
})