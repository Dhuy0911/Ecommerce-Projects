import $ from "jquery";


export const slider = () => {
    // pre btn
const prevBtn = $('.achievement__wrapper .slick-prev')
prevBtn.html('<i class="fa-solid fa-chevron-left"></i>')  

// next btn
const nextBtn = $('.achievement__wrapper .slick-next')
nextBtn.html('<i class="fa-solid fa-chevron-right"></i>')

$('.achievement__wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  }); 

}
  

