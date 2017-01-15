const slidesCount = 5
const slideShow = $('.gallery ul')
const baseUrl = 'pictures/spiderman_'

slideShow.append(Array(slidesCount).fill().reduce(function (totalContent, _, i) {
  return totalContent + '<li class="each"><img src="'
    + baseUrl + (i + 1) +'.jpg" /></li>'
}, ''))

const allSlides = slideShow.find('li.each')
const firstSlide = allSlides.first()
const lastSlide = allSlides.last()

firstSlide.addClass('active').show()

$('.direction-next').click(function() {
  const nextSlide = slideShow.find('li.active').next()

  slideShow.find('li.active').removeClass('active')
  if (nextSlide && nextSlide.length) {
    nextSlide.addClass('active')
  } else {
    firstSlide.addClass('active')
  }
})

$('.direction-prev').click(function() {
  const prevSlide = slideShow.find('li.active').prev()

  slideShow.find('li.active').removeClass('active')
  if (prevSlide && prevSlide.length) {
    prevSlide.addClass('active')
  } else {
    lastSlide.addClass('active')
  } 
})