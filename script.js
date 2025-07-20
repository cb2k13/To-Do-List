

$(document).ready(function() {
    $('#addItem').click(function() {
      const itemText = $('#itemInput').val().trim();
      if (itemText !== '') {
        // I get the itemList id selector and add list items with append 
        $('#itemList').append(
          `<li>${itemText} <span class="delete">✖</span></li>`
        );
        // Clear the text user provided so that they can add something a different
        // event to the list 
        $('#itemInput').val('');
      }
    });
  
    // On click function so that the current list item is deleted when clicking 
    // on the X 
    $('#itemList').on('click', '.delete', function() {
      $(this).parent().remove();
    });
  
    $('#itemInput').keypress(function(e) {
      if (e.which === 13) {
        $('#addItem').click();
      }
    });
  });
  
// I added this cool hover animate feature on my image logo and grab #image id 
  $('#image').hover(
    function() {
      // Mouse enters animate down from 10px to 100px
      $(this).stop().animate({
        top: '100px'
      }, 500);
    },
    function() {
      // When the cursor isn't hovering anymore, the image moves back up into its
      // original spot in the top left 
      $(this).stop().animate({
        top: '10px'
      }, 500);
    }
  );



