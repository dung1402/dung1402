

$('.tour-slick-slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 767,
      settings: "unslick"
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});


$('.word-row').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 767,
      settings: "unslick"
    }]
});
new WOW().init();


//event
// const bars = document.querySelector('.sub-menu');
// const menu = document.querySelector('.header-menu');
// bars.addEventListener('click', () => {
//   bars.classList.toggle('active');
//   menu.classList.toggle('active');
// });


$('.banner-angle').click(function () {
  let offset = $(this).parents().children(".banner").next().offset().top;
  $(window).scrollTop(offset);

});
//start javascript
const input = document.querySelector(".banner-booking__input");
const inner = document.querySelector(".banner-booking__inner")

input.addEventListener("click", () => {
  inner.classList.add("active")
})
document.addEventListener("click", (e) => {
  if (!input.contains(e.target)) {
    inner.classList.remove("active")
  }
})
// 
$(function () {

  $('input[name="datetimesStart"]').daterangepicker({
    autoUpdateInput: false,
    locale: {
      cancelLabel: 'Clear'
    }
  });

  $('input[name="datetimesStart"]').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });

  $('input[name="datetimesStart"]').on('cancel.daterangepicker', function (ev, picker) {
    $(this).val('');
  });

});
$(function () {

  $('input[name="datetimesEnd"]').daterangepicker({
    autoUpdateInput: false,
    locale: {
      cancelLabel: 'Clear'
    }
  });

  $('input[name="datetimesEnd"]').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });

  $('input[name="datetimesEnd"]').on('cancel.daterangepicker', function (ev, picker) {
    $(this).val('');
  });

});

