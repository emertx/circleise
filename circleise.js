var circleise = function() {
  var outerdiv = $(this).parent('.circleise_outerdiv');
  var width = outerdiv.width();
  var height = outerdiv.height();

  $(this).stop(true);
  if(width >= height)
  {
    $(this).animate({
      width: width/2,
      height: width/2,
      top: (height - (width/2))/2, 
      borderRadius: width/4
    });
  }  
  else
  {
    $(this).animate({
      width: height/2, 
      height: height/2,
      top: (height - (height/2))/2, 
      borderRadius: height/4
    });    
  }  
}

var de_circleise = function() {
  var outerdiv = $(this).parent('.circleise_outerdiv');
  var width = outerdiv.width();
  var height = outerdiv.height();

  $(this).stop(true);
  $(this).animate({
    width: width,
    height: height,
    top: 0, 
    borderRadius: 0
  });    
}

$(document).ready(function() {
  $('.circleise_image').on('load', function() {
    $(this).wrap('<div class="circleise_outerdiv"><div class="circleise_innerdiv"></div></div>');
    var innerdiv = $(this).parent('.circleise_innerdiv');
    var outerdiv = innerdiv.parent('.circleise_outerdiv');

    $(this).css({
      'max-width': '100%', 
      'max-height': '100%'
    });

    outerdiv.css({
      'width': outerdiv.width(),
      'height': outerdiv.width(),
      'margin': 'auto'
    });

    innerdiv.css({
      'width': outerdiv.width(),
      'height': outerdiv.width(),
      'margin': 'auto',
      'position': 'relative',
      'background-image': 'url(' + $(this).attr('src') + ')',
      'background-size': 'cover',
      'background-position': 'center'
    });

    $(this).hide();


    $('.circleise_innerdiv').on('mouseout', circleise);
    $('.circleise_innerdiv').on('mouseenter', de_circleise);

    innerdiv.trigger('mouseout');
  });
})