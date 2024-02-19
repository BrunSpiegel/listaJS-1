const $changeableText = document.querySelector('.text')
const $form = document.querySelector('.form')
const $input = document.querySelector('.input')

$form.addEventListener('submit', function(event){
    event.preventDefault()    
    $changeableText.textContent = $input.value
})

$input.addEventListener('input', function(){
    $changeableText.textContent = $input.value
})