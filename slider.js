const slideShow = $('.gallery ul')
const baseUrl = 'pictures/spiderman_'

let i = 0
let slidesContent = ''
while (++i < 5) {
  slidesContent += '<li class="each"><img src="'
    + baseUrl + i +'.jpg" /></li>'
}
slideShow.append(slidesContent)

const firstSlide = slideShow.find('li.each').first()

firstSlide.addClass('active').show()

$('.direction .next').click(function() {
  const nextSlide = slideShow.find('li.active').next()

  slideShow.find('li.active').removeClass('active')
  if (!nextSlide.length) {
    firstSlide.addClass('active')
  } else {
    nextSlide.addClass('active')
  } 
})