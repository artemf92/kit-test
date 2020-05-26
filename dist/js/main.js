"use strict";

var headerSliderWrapper = document.querySelector('.header__content-wrapper');
var headerControls = document.querySelector('.content-control');
var reviewSliderWrapper = document.querySelector('.review-wrapper');
var reviewControls = document.querySelector('.reviews-controls');

function moveSlider(move) {
  headerSliderWrapper.style.transform = "translateX(-".concat(move * 25, "%)");
}

function controlDeactive() {
  for (var i = 0; i < headerControls.children.length; i++) {
    headerControls.children[i].classList.remove('active');
  }
} // Слайдер в шапке


headerControls.addEventListener('click', function (evt) {
  var targetId = evt.target.getAttribute('id');
  moveSlider(targetId);
  controlDeactive();
  evt.target.classList.add('active');
}); //

reviewControls.addEventListener('click', function (evt) {
  var targetId = evt.target.dataset.move;
  var sumReviews = reviewSliderWrapper.children.length;
  var step = Math.round(100 / sumReviews);
  var currentPosition;

  for (var i = 0; i < reviewSliderWrapper.children.length; i++) {
    if (reviewSliderWrapper.children[i].dataset.review === 'active') {
      currentPosition = targetId === 'next' ? i + 1 : i - 1;
      if (currentPosition < 0 || currentPosition > reviewSliderWrapper.children.length - 1) return;
      reviewSliderWrapper.children[i].dataset.review = '';
      reviewSliderWrapper.children[currentPosition].dataset.review = 'active';
      break;
    }
  }

  reviewSliderWrapper.style.transform = targetId == 'next' ? "translateX(-".concat(currentPosition * step, "%)") : "translateX(-".concat(currentPosition * step, "%)");
});
$("#nav").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1500);
});
$("#to-top").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1500);
});
//# sourceMappingURL=main.js.map
