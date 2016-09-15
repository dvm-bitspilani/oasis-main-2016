$(document).ready(function(){
  var tOrigin=[
  '0% 71%',
  '-2% -1%',
  '-1% -2%',
  '101% -2%',
  '102% 0%',
  '102% 101%',
  '102% 102%',
  ]
  // $('#inner').hide();
  for(var i=2;i<=8;i++){
    $('#cat'+i).css({
      'transform-origin':tOrigin[i-2],
    });
    // $('#cat'+i).delay(2000+(200*(i-2))).css({
    //   'opacity':'1'
    // });
  }

  $('#inner').fadeIn(1000);

});
