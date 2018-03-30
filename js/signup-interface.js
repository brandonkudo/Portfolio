$(document).ready(function() {
  try {
    headerToggle();
    stjornuSlider();
  } catch(e){
    console.log(e);
  }
});


function headerToggle() {
  $('.burger-container').click(function() {
    $('.hide-dropdown').slideToggle();
  });
}

function stjornuSlider() {
  let stCounter = 0;
  let stImgArray = $('.st-image').toArray();
  $(stImgArray).hide();
  $(stImgArray[0]).show();

  for (let i = 0; i < stImgArray.length; i++) {
    $('.carousel-buttons').append('<div class="carousel-button"></div>');
  }

  let stButtonArray = $('.carousel-button').toArray();
  $(stButtonArray[0]).addClass('btn-bg-grey');

}
