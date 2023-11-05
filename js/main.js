'use strict'

//------header-----------------------------------------//
document.querySelector('.header-menu__btn').addEventListener('click', () => {
  document.querySelector('.header-menu__list').classList.toggle('header-menu__list_active')
})

//-----------features---------------------------------//
const clickHandler = function (e) {
  const currentBtn = e.target
  const id = currentBtn.dataset.btn
  // активний клас для кнопки
  document.querySelectorAll('.tabs-btns__item').forEach(el => el.classList.remove('tabs-btns__item_active'))
  currentBtn.classList.add('tabs-btns__item_active')

  // активний клас для контенту
  document.querySelectorAll('.tabs-content__item').forEach(el => el.classList.remove('tabs-content__item_active'))
  document.querySelector(`#${id}`).classList.add('tabs-content__item_active')
}

document.querySelectorAll('.tabs-btns__item').forEach(btn => btn.addEventListener('click', clickHandler))
