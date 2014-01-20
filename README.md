Q: Wanna make your images appear circular and go back to their original shape based on events?  
A: You have come to the right place :-D

All you need to do is: 
  
* Include 'circleise_and_decircleise' in your html page    
* Call the function 'cirlceise_and_decircleise' on your image object

Things to remember:

* Include 'jQuery' before including 'circleise_and_decircleise.js'
* Let the document load before manipulating the elements
* Let the image load before calling 'circleise_and_decircleise' function on it
  

Example  
  
  Let there be images with ids 'image_1', 'image_2'.  
  To make the image become circular and go back to its original shape, 

    $(document).ready(function() {  
      $('#image_1').on('load', function() {  
        $(this).circleise_and_decircleise();  
      });  
    });
  
  By default,   

  * on 'mouseout' event, the image becomes circular
  * on 'mouseenter' event, the image regains it original shape

    
If you would like to dictate the events yourself, pass in an object
  
    $(document).ready(function() {
      $('#image_2').on('load', function() {
        $(this).circleise_and_decircleise({
          'circleise_event': 'click',
          'decircleise_event': 'dblclick'
        });
      });
    });
