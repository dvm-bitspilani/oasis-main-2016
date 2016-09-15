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

  // $('#eventListWrap').css({
  //   'transform-origin': '50% 50%'
  // });

  $('#inner').fadeIn(1000);

  $('#midWrap').delay(3000).css({
    'transform':'scale(1)'
  })


  // $('#outerLeft,#outerRight').delay(2000).fadeIn();
  // var outer = $('#outer').get(0).getBBox();
  var initHtml='<circle id="circle20699"r="95.705002"cy="494.66101"cx="494.09299"style="fill:#141613" />';

  var pos2=[
    '17px,-52px',
    '40px,-20px',
    '40px,20px',
    '17px,52px',
    '-20px,50px',
    '-50px,20px',
    '-45px,-25px',
    '-20px,-49px'
  ]
  var pos3=[
    '40px, -102px',
    '82px, -55px',
    '82px, 55px',
    '40px, 102px',
    '-32px, 94px',
    '-89px, 49px',
    '-98px, -60px',
    '-42px, -106px'
  ]
  var pos=[
    '9px, -60px',
    '82px, -55px',
    '82px, 55px',
    '40px, 102px',
    '-32px, 94px',
    '-89px, 49px',
    '-98px, -60px',
    '-42px, -106px'
  ]



  var $curEle;
  var event="off";
   $('g[id^="cat"] text').click(function(){
    $ele=$(this).parent().parent();
    $curEle=$ele;
    var no = $ele.attr('id').charAt(3);
    $ele.attr('on',true);
    console.log($ele);
    var eleChild=$ele.children()[0];
    console.log($(eleChild));
    // ele = $ele.get(0);
    // ele.style.webkitTransform = 'translate('+pos[no-1]+' !important)';
    // $ele.css({
    //   'opacity':'0.5'
    // });
    $(eleChild).css({
      'transform':'translate('+pos[no-1]+')'
    });
    option=(event=="off")?'#midWrap':'#eventListWrap';
    console.log(option);
    $(option).css({
      'transform':'scale(0)'
    });

    setTimeout(function(){
      $('#eventListWrap').css({
        'transform':'scale(1.2)'
      });
    },500);

    event="on";


    // $('#midWrap').fadeOut();
    // $('#eventListWrap').fadeIn();
    // $('#midWrap').css({
    //   'transform':'scale(1.5,1.5)'
    // })
    console.log($ele.children[0]);
    reset($ele);
   });

  $('g[id^="cat"]').map(function(i,ele){
    $(this).attr('on',false);
    var no = $(this).attr('id').charAt(3);

    var eleChild=$(this).children()[0];

$(eleChild).css({
      'transform':'translate('+pos[no-1]+')'
    });
  });

  // $('body:not(#g3)').click(function () {
  //   reset(true);
  // });
  // var $curEle;
  // $('g[id^="cat"]').click(function(){
  //   var $ele = $(this);
  //   $curEle=$ele;
  //   console.log($ele.children()[0]);
  //   $ele.attr('on',true);
  //   reset();
  //   var animate=$ele.children()[0];
  //   var no = $ele.attr('id').charAt(3);
  //   // var point = $('#c'+no).get(0).getBBox();
  //   // var eleX = $ele.get(0).getBBox().x + ($ele.get(0).getBBox().width/2);
  //   // var eleY = $ele.get(0).getBBox().y + ($ele.get(0).getBBox().height/2);
  //   // var cx = point.x + (point.width/2);
  //   // var cy = point.y + (point.height/2);
  //   // console.log(eleX,eleY,point.x,point.y,$('#c'+no).attr('cx'),$('#c'+no).attr('cy'));
  //   // console.log($ele.get(0).getBBox().x,$ele.get(0).getBBox().y);

  //   animate.setAttribute('from','0 0');
  //   animate.setAttribute('to',pos[no-1]);
  //   animate.setAttribute('fill','freeze');
  //   animate.beginElement();
  // });


  $('g[id^="eve"]').click(function(){
    var ani1=$('#outerRight').children()[0];
    var ani2=$('#midRight').children()[0];
    var ani3=$('#outerLeft').children()[0];
    var ani4=$('#midLeft').children()[0];

   $('.eventData').animate({
      width:'50%'
    },650);

   $('#inner').fadeOut();

    // $('.paper').show();


    $('#outerRightIn').addClass('moveRightOuter');
    $('.eventListRightIn').addClass('moveRightEventList');
     $('#outerLeftIn').addClass('moveLeftOuter');
    $('.eventListLeftIn').addClass('moveLeftEventList');

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

  function reset(Cele){
    $curEle=Cele;
    console.log($curEle);
    // var condition = (all==false)?($ele.attr('id')!=$curEle.attr('id')):true;
    // console.log(condition,all);
    $('g[id^="cat"]').map(function(i,ele){
      $ele = $(this);
      // console.log($ele,$curEle,$ele.attr('id')!=$curEle.attr('id'));
      // console.log($ele.attr('on'),"true",$ele.attr('on')=="true");
      if($ele.attr('on')=="true" && ($ele.attr('id')!=$curEle.attr('id'))){
        // var animate=$ele.children()[0];
        // var no = $ele.attr('id').charAt(3);
        // console.log(no);
        // animate.setAttribute('from',pos[no-1]);
        // animate.setAttribute('to','0 0');
        // animate.setAttribute('fill','freeze');
        // animate.beginElement();
        // $ele.attr('on',false);
        var eleChild=$ele.children()[0];
         $(eleChild).css({
        transform:'translate(0,0)'
      });
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
      //   var innerEve = document.getElementById('innerEve');
      //   if(!innerEve.contains(ev.target)){
      //   resetAll();
      // }
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
