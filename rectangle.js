$(function() {
      var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');

function Rectangle(width, height) {
    var w = Number(width),
      h = Number(height);

this.area = function() {
      return w * h;
        
};

this.perimeter = function() {
      return 2 * (w + h);
        
};

}



$btnCal.click(function(){
        var w = $width.val(),
            h = Number($height.val());       

       var r = new Rectangle(w, h);
            

       $perimeter.val(r.perimeter());
       $area.val(r.area());
  });


});
