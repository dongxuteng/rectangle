$(function() {
      var $width = $('#width'),
        $height = $('#height'),
        $form = $('form'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
function Rectangle(width,height){
  var w = Number(width),
      h = Number(height);
  this.perimeter = function(){
    return 2*(w+h);
  };
  this.area = function(){
    return w*h;
  };

}



$form.submit(function(e){
        e.preventDefault();
        var w = $width.val(),
            h = Number($height.val());       
       
       var r = new Rectangle(w, h);


       $perimeter.val(r.perimeter());
       $area.val(r.area());
  });


});
