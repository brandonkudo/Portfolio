$(document).ready(function() {
  try {
    headerToggle();
    stjornuSlider();
    jeffreysSlider();
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
    $('.st-carousel-buttons').append('<div class="st-carousel-button"></div>');
  }

  let stButtonArray = $('.st-carousel-button').toArray();
  $(stButtonArray[0]).addClass('btn-bg-grey');

  for (let i = 0; i < stImgArray.length; i++) {
    $(stButtonArray[i]).click(function() {
      $(stButtonArray[i]).siblings().removeClass('btn-bg-grey');
      $(stImgArray[stCounter]).hide();
      stCounter = i;
      $(stButtonArray[stCounter]).addClass('btn-bg-grey');
      $(stImgArray[stCounter]).show();
    });
  }
}

function jeffreysSlider() {
  let jfCounter = 0;
  let jfImgArray = $('.jf-image').toArray();
  $(jfImgArray).hide();
  $(jfImgArray[0]).show();

  for (let i = 0; i < jfImgArray.length; i++) {
    $('.jf-carousel-buttons').append('<div class="jf-carousel-button"></div>');
  }

  let jfButtonArray = $('.jf-carousel-button').toArray();
  $(jfButtonArray[0]).addClass('btn-bg-grey');

  for (let i = 0; i < jfImgArray.length; i++) {
    $(jfButtonArray[i]).click(function() {
      $(jfButtonArray[i]).siblings().removeClass('btn-bg-grey');
      $(jfImgArray[jfCounter]).hide();
      jfCounter = i;
      $(jfButtonArray[jfCounter]).addClass('btn-bg-grey');
      $(jfImgArray[jfCounter]).show();
    });
  }
}
