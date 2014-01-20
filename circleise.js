var circleise_worker = function() {
  var innerdiv = $(this);
  var outerdiv = innerdiv.parent('.circleise_outerdiv');
  var image = innerdiv.children('.circleise_image');
  var width = outerdiv.width();
  var height = outerdiv.height();

  innerdiv.stop(true);
  image.stop(true);

  if(width >= height)
  {
    innerdiv.animate({
      width: width/2,
      height: width/2,
      top: (height - (width/2))/2, 
      borderRadius: width/4
    });

    var ratio = width/height;

    image.animate({
      width: (width/2)*ratio, 
      height: width/2,
      left: -(((width/2)*ratio) - (width/2))/2
    });
  }  
  else
  {
    innerdiv.animate({
      width: height/2, 
      height: height/2,
      top: (height - (height/2))/2, 
      borderRadius: height/4
    });    

    var ratio = height/width;

    image.animate({
      width: height/2,
      height: (height/2)*ratio,
      top: -(((height/2)*ratio) - (height/2))/2
    });
  }  
}

var decircleise_worker = function() {
  var innerdiv = $(this);
  var outerdiv = innerdiv.parent('.circleise_outerdiv');
  var image = innerdiv.children('.circleise_image');
  var width = outerdiv.width();
  var height = outerdiv.height();

  innerdiv.stop(true);
  image.stop(true);

  innerdiv.animate({
    width: width,
    height: height,
    top: 0, 
    borderRadius: 0
  });    

  image.animate({
    width: width,
    height: height,
    top: 0,
    left: 0
  });
}

$.fn.circleise_and_decircleise = function(options) {

  var settings = $.extend({
      // These are the defaults.
      circleise_event: 'mouseout',
      decircleise_event: 'mouseenter'
  }, options);

  var image = $(this);
  image.addClass('circleise_image');
  image.wrap('<div class="circleise_outerdiv"><div class="circleise_innerdiv"></div></div>');
  var innerdiv = image.parent('.circleise_innerdiv');
  var outerdiv = innerdiv.parent('.circleise_outerdiv');

  image.css({
    'max-width': '100%', 
    'max-height': '100%'
  });

  outerdiv.css({
    'width': image.width(),
    'height': image.height(),
    'padding': 0,
    'margin': 'auto',
    'overflow': 'hidden'
  });

  innerdiv.css({
    'width': image.width(),
    'height': image.height(),
    'padding': 0,
    'margin': 'auto',
    'overflow': 'hidden',
    'position': 'relative'
  });

  image.css({
    'max-width': 'none',
    'max-height': 'none',
    'position': 'relative'
  });

  $('.circleise_innerdiv').on(settings.circleise_event, circleise_worker);
  $('.circleise_innerdiv').on(settings.decircleise_event, decircleise_worker);

  innerdiv.trigger(settings.circleise_event);

  return $(this);
};