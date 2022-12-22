var elBtn = document.querySelector(".btn")
var elModal = document.querySelector(".modal")
var elExit = document.querySelector(".modal__exit")
var elBody = document.querySelector('body')

elBtn.addEventListener("click", function(){
    elModal.classList.add('modal2')
    elBody.classList.add('bg_color')
})
elExit.addEventListener('click', function(){
    elModal.classList.remove('modal2')
    elBody.classList.remove('bg_color')
})