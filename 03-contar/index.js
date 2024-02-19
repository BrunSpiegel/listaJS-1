const $numbers = document.querySelector('.output')
const $form = document.querySelector('.form')
const $input = document.querySelector('.input-field')

$form.addEventListener('submit', function(event){
    event.preventDefault()

    $numbers.textContent = ''

    const number = Number($input.value)

    for(let i = 0; i <= number; i++) {
        $numbers.textContent = $numbers.textContent + i + ' '
    }
})

