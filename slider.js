const slidesBase = Array(5).fill()
const slideShow = $('.gallery ul')
const baseUrl = 'pictures/spiderman_'

slideShow.append(slidesBase.reduce(function (content, _, i) {
  return content + '<li class="each"><img src="'
    + baseUrl + (i + 1) +'.jpg" /></li>'
}, ''))

const allSlides = slideShow.find('li.each')
const firstSlide = allSlides.first()
const lastSlide = allSlides.last()

function thumbnailClick(idx) {
  const slide = allSlides[idx]

  if (!slide.classList.contains('active')) {
    slideShow.find('li.active').removeClass('active')
    slide.classList.add('active')
  }
}

$('#thumbnail-container').append(slidesBase.reduce(function (content, _, i) {
  return content + '<a class="thumbnail" href="javascript:thumbnailClick('
    + i +')"><img src="'+ baseUrl + (i + 1) +'.jpg" /></a>'
}, ''))

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

firstSlide.addClass('active').show()
