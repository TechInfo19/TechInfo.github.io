(function($) {
var input = $('input[type="text"]');

for (var i = 0; i < input.length; i++){
$(input[i]).keyup(function() {
  if (input[0].value.length > 1 && input[1].value.length > 1) {
    $('#lantern-on').show();
  } else {
     $('#lantern-on').hide();
  }
});
};
});