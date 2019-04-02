$(function() {
      var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
        $widthValidation = $('#width-validation');
        $heightValidation = $('#height-validation');



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

$width.focusout(function(){
  var w = $width.val();
   if(w === ''){
      $widthValidation.html('密码不能为空!');
      $width.select();
   }else{
     $widthValidation.html('');
   }

   if(Number(w)<0){
     $widthValidation.html('宽度不能为空');
     $width.select();
   }else{
     $heightValidation.html('高度不能为空');
   }

});

$height.focusout(function(){
  var h = $height.val();
  if(h === ''){
    $heightValidation.html('高度不能为空');
    $height.select();
  }else{
    $heightValidation.html('');
  }

 if(Number(w)<0){
     $heightValidation.html('高度不能为空');
     $height.select();
 }else{
   $heightValidation.html('');
 }
})


$btnCal.click(function(){
        var w = $width.val(),
            h = Number($height.val());       
       
       var r = new Rectangle(w, h);
        if(w === ''){
           $widthValidation.html('密码不能为空!');
           $width.select();
        }
        if(h === ''){
          $heightValidation.html('高度不能为空');
          $height.select();
        }


       $perimeter.val(r.perimeter());
       $area.val(r.area());
  });


});
