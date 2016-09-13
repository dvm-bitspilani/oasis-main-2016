$(document).ready(function(){
  $('#inner').hide();
  $('#inner').delay(300).fadeIn(1000);

  // var outer = $('#outer').get(0).getBBox();


  var pos=[
    '17 -52',
    '40 -20',
    '40 20',
    '17 52',
    '-20 50',
    '-50 20',
    '-45 -25',
    '-20 -49'
  ]

  $('g[id^="eve"]').map(function(i,ele){
    $(this).attr('on',false);
  });

  // $('body:not(#g3)').click(function () {
  //   reset(true);
  // });
  var $curEle;
  $('g[id^="eve"]').click(function(){
    var $ele = $(this);
    $curEle=$ele;
    console.log($ele.children()[0]);
    $ele.attr('on',true);
    reset();
    var animate=$ele.children()[0];
    var no = $ele.attr('id').charAt(3);
    // var point = $('#c'+no).get(0).getBBox();
    // var eleX = $ele.get(0).getBBox().x + ($ele.get(0).getBBox().width/2);
    // var eleY = $ele.get(0).getBBox().y + ($ele.get(0).getBBox().height/2);
    // var cx = point.x + (point.width/2);
    // var cy = point.y + (point.height/2);
    // console.log(eleX,eleY,point.x,point.y,$('#c'+no).attr('cx'),$('#c'+no).attr('cy'));
    // console.log($ele.get(0).getBBox().x,$ele.get(0).getBBox().y);

    animate.setAttribute('from','0 0');
    animate.setAttribute('to',pos[no-1]);
    animate.setAttribute('fill','freeze');
    animate.beginElement();
  });


  $('g[id^="evList"]').click(function(){
    var ani1=$('#outerRight').children()[0];
    var ani2=$('#midRight').children()[0];
    var ani3=$('#outerLeft').children()[0];
    var ani4=$('#midLeft').children()[0];

   $('.eventData').animate({
      width:'50%'
    },650);

   $('#inner').fadeOut();
   
    // $('.paper').show();
   
    $('#outerRight').addClass('moveRightOuter');
    $('#midRight').addClass('moveRightMid');
     $('#outerLeft').addClass('moveLeftOuter');
    $('#midLeft').addClass('moveLeftMid');

    // ani1.setAttribute('from','0 0');
    // ani1.setAttribute('to','300 0');
    // ani1.setAttribute('fill','freeze');
    // ani1.beginElement();
    // ani2.setAttribute('from','0 0');
    // ani2.setAttribute('to','300 0');
    // ani2.setAttribute('fill','freeze');
    // ani2.beginElement();
    // ani3.setAttribute('from','0 0');
    // ani3.setAttribute('to','-300 0');
    // ani3.setAttribute('fill','freeze');
    // ani3.beginElement();
    // ani4.setAttribute('from','0 0');
    // ani4.setAttribute('to','-300 0');
    // ani4.setAttribute('fill','freeze');
    // ani4.beginElement();
  });

  function reset(){
    // var condition = (all==false)?($ele.attr('id')!=$curEle.attr('id')):true;
    // console.log(condition,all);
    $('g[id^="eve"]').map(function(i,ele){
      $ele = $(this);
      // console.log($ele,$curEle,$ele.attr('id')!=$curEle.attr('id'));
      // console.log($ele.attr('on'),"true",$ele.attr('on')=="true");
      if($ele.attr('on')=="true" && ($ele.attr('id')!=$curEle.attr('id'))){
        var animate=$ele.children()[0];
        var no = $ele.attr('id').charAt(3);
        console.log(no);
        animate.setAttribute('from',pos[no-1]);
        animate.setAttribute('to','0 0');
        animate.setAttribute('fill','freeze');
        animate.beginElement();
        $ele.attr('on',false);
      }
    });



    
  }

   function resetAll(){
      reset();
      $ele=$curEle;
       var animate=$ele.children()[0];
        var no = $ele.attr('id').charAt(3);
        console.log(no);
        animate.setAttribute('from',pos[no-1]);
        animate.setAttribute('to','0 0');
        animate.setAttribute('fill','freeze');
        animate.beginElement();
        $ele.attr('on',false);
    }

    $('svg').click(function(ev){
        // console.log(ev.target);
        var innerEve = document.getElementById('innerEve');
        if(!innerEve.contains(ev.target)){
        resetAll();
      }
    });

var innerEve = $('#innerEve');
  // var ParX=$('#innerEve').parent().attr('x');
  // var ParY=$('#innerEve').parent().attr('y');
  var EveX=$('#innerEve').get(0).getBBox().width;
  var EveY=$('#innerEve').get(0).getBBox().height;''
  // paper

  var left=$('#outerLeft').position()
console.log(innerEve);
  // var  dx =   ($('#innerEve').position().left+EveX/2) - window.innerWidth/2;
  // var  dy =  ($('#innerEve').position().top+EveY/2) -window.innerHeight/2  ;
  // console.log(($('#innerEve').position().left+EveX/2),window.innerWidth/2);
  // console.log(($('#innerEve').position().top+EveY/2),window.innerHeight/2);

  // $('#innerEve').attr('transform','translate('+dx+','+dy+')');
  // $('path').hide();
  // var del=0;
  // $('#outer').children().each(function(i,ele){
  //   $(ele).delay(del).show();
  //   del+=1000
  // })

});
