//Split Menu

const left = document.querySelector('.split-left')
const center = document.querySelector('.split-center')
const right = document.querySelector('.split-right')
const splitContainer = document.querySelector('.split-container')

left.addEventListener('mouseenter', () => splitContainer.classList.add('hover-left'))
left.addEventListener('mouseleave', () => splitContainer.classList.remove('hover-left'))

center.addEventListener('mouseenter', () => splitContainer.classList.add('hover-center'))
left.addEventListener('mouseleave', () => splitContainer.classList.remove('hover-center'))

right.addEventListener('mouseenter', () => splitContainer.classList.add('hover-right'))
right.addEventListener('mouseleave', () => splitContainer.classList.remove('hover-right'))
