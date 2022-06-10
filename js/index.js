const $burgerButton = document.querySelector('[data-btn="burger"]')
const $headerItems = document.querySelectorAll('[data-name="header__item"]')

const handleBurgerClick = () => {
  const $nav = document.querySelector('[data-name="nav"]')
  $nav.classList.toggle('active')
}

const handleItemClick = () => {
  const $nav = document.querySelector('[data-name="nav"]')
  $nav.classList.remove('active')
}

$burgerButton.addEventListener('click', handleBurgerClick)
$headerItems.forEach(item => {
  item.addEventListener('click', handleItemClick)  
})