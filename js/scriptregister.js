$(document).ready(function() {
  $('#nombre').on('input', function () {
    var input=$(this);
    var is_name=input.val();
    if (is_name) {input.removeClass("invalid").addClass("valid");}
    else {input.removeClass("valid").addClass("invalid");}
  });
  $('#apellido').on('input', function () {
    var input=$(this);
    var is_name=input.val();
    if (is_name) {input.removeClass("invalid").addClass("valid");}
    else {input.removeClass("valid").addClass("invalid");}
  });
  $('#email').on('input', function () {
    var input=$(this);
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email=re.test(input.val());
    if (is_email) {input.removeClass("invalid").addClass("valid");}
    else {input.removeClass("valid").addClass("invalid");}
  });
  $('#pass').on('input', function () {
    var input=$(this);
    var is_name=input.val();
    if (is_name) {input.removeClass("invalid").addClass("valid");}
    else {input.removeClass("valid").addClass("invalid");}
  });
  $('#cpass').on('input', function () {
    var input=$(this);
    var is_name=input.val();
    if (is_name) {input.removeClass("invalid").addClass("valid");}
    else {input.removeClass("valid").addClass("invalid");}
  });

});
