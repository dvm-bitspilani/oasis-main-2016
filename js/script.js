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

var evPageVal;
if(window.innerWidth<1000)
  evPageVal = '40%';
else if(window.innerWidth<1400)
  evPageVal = '50%';
else if(window.innerWidth<2000)
  evPageVal = '70%';

  $('#Layer_1').css({
    'position':'absolute'
  })

  // $('#eventListWrap').css({
  //   'transform-origin': '50% 50%'
  // });




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
    '62px, -14px',
    '62px, 14px',
    '9px, 60px',
    '-37px, 59px',
    '-79px, 28px',
    '-76px, -24px',
    '-39px, -57px'
  ]



  var $curEle;
  var eventData="off";

  var event="off";
   $('g[id^="cat"] text').click(function(){
    $ele=$(this).parent().parent();
    $curEle=$ele;
    // reset($ele);
    var no = $ele.attr('id').charAt(3);
    $ele.attr('on',true);
    console.log($ele);
    var eleChild=$ele.children()[0];
    // console.log($(eleChild));
    // ele = $ele.get(0);
    // ele.style.webkitTransform = 'translate('+pos[no-1]+' !important)';
    // $ele.css({
    //   'opacity':'0.5'
    // });
    $(eleChild).css({
      'transform':'translate('+pos[no-1]+')'
    });
    console.log(event);
    if(eventData=="off"){
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
}
else{
    $('.eventData').animate({
       width:'0%'
     },600);
     $('.eventText').hide();
    setTimeout(function(){
    $('#outerRightIn').removeClass('moveRightOuter');
    $('.eventListRightIn').removeClass('moveRightEventList');
    $('#innerLeftIn').removeClass('moveLeftInner');
    $('#innerRightIn').removeClass('moveRightInner');
    $('#outerLeftIn').removeClass('moveLeftOuter');
    $('.eventListLeftIn').removeClass('moveLeftEventList');


  },100);

  setTimeout(function(){
    $('#eventListWrap').css({
      'transform':'scale(0)'
    });

    setTimeout(function(){
      $('#eventListWrap').css({
        'transform':'scale(1.2)'
      });
    },500);
  },750);
}
    event="on";
reset($curEle);
console.log(event);

    // $('#midWrap').fadeOut();
    // $('#eventListWrap').fadeIn();
    // $('#midWrap').css({
    //   'transform':'scale(1.5,1.5)'
    // })
    // console.log($ele.children[0]);
   });

  $('g[id^="cat"]').map(function(i,ele){
    $(this).attr('on',false);
  });

  // var no = $(this).attr('id').charAt(3);
  //
  // var eleChild=$(this).children()[0];
  //
  // $(eleChild).css({
  //   'transform':'translate('+pos[no-1]+')'
  // });
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

  $('#eventSelect text').click(function(){
    // reset($curEle);
    var ani1=$('#outerRightIn').children()[0];
    var ani2=$('#midRight').children()[0];
    var ani3=$('#outerLeftIn').children()[0];
    var ani4=$('#midLeft').children()[0];



  //  $('#inner').fadeOut();

    // $('.paper').show();
// todo
    if(eventData=="on"){
      $('.eventData').animate({
         width:'0%'
       },600);
       $('.eventText').hide();
      setTimeout(function(){
      $('#outerRightIn').removeClass('moveRightOuter');
      $('.eventListRightIn').removeClass('moveRightEventList');
      $('#innerLeftIn').removeClass('moveLeftInner');
      $('#innerRightIn').removeClass('moveRightInner');
      $('#outerLeftIn').removeClass('moveLeftOuter');
      $('.eventListLeftIn').removeClass('moveLeftEventList');
      // ani1.setAttribute('from','0');
      // ani1.setAttribute('to',window.innerWidth/2);
      // ani1.setAttribute('dur','0.5s');
      // ani1.beginElement();
      // ani3.setAttribute('from',600);
      // ani3.setAttribute('to',window.innerWidth/2);
      // ani3.setAttribute('dur','0.5s');
      // ani3.beginElement();

    },100);

       setTimeout(function () {
         $('.eventData').animate({
            width:evPageVal
          },600);

          $('.eventText').show();
          setTimeout(function(){
            $('#outerRightIn').addClass('moveRightOuter');
            $('.eventListRightIn').addClass('moveRightEventList');
            $('#innerLeftIn').addClass('moveLeftInner');
            $('#innerRightIn').addClass('moveRightInner');
            $('#outerLeftIn').addClass('moveLeftOuter');
            $('.eventListLeftIn').addClass('moveLeftEventList');

            // ani1.setAttribute('to','0');
            // ani1.setAttribute('from',window.innerWidth/2);
            // ani1.setAttribute('dur','0.5s');
            // ani1.beginElement();
            // ani3.setAttribute('to',600);
            // ani3.setAttribute('from',window.innerWidth/22);
            // ani3.setAttribute('dur','0.5s');
            // ani3.beginElement();


          },100);
       },600);
    }


    else{

      $('.eventData').animate({
         width:evPageVal
       },600);
       $('.eventText').show();
      // var eventDataPaper = document.getElementById('eventPageRect');
      // var animate1=eventDataPaper.childNodes[1];
      // ani1.setAttribute('from','0');
      // ani1.setAttribute('to',window.innerWidth/2);
      // ani1.setAttribute('dur','0.5s');
      // ani1.beginElement();
      // ani3.setAttribute('from',600);
      // ani3.setAttribute('to',window.innerWidth/2);
      // ani3.setAttribute('dur','0.5s');
      // ani3.beginElement();

    setTimeout(function(){
      $('#outerRightIn').addClass('moveRightOuter');
      $('.eventListRightIn').addClass('moveRightEventList');
      $('#innerLeftIn').addClass('moveLeftInner');
      $('#innerRightIn').addClass('moveRightInner');
      $('#outerLeftIn').addClass('moveLeftOuter');
      $('.eventListLeftIn').addClass('moveLeftEventList');

    },100);
    eventData="on";
  }
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
    // console.log($curEle);
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
    var data=[];
    $(".events-trigger").click(function(){
      // ajax
      data=[{"category": "Dance", "events": [{"is_kernel": true, "short_desc": "A group dance event", "id": 1, "name": "Choreo"}, {"is_kernel": true, "short_desc": "Group dance event - showcasing the freestyle form.", "id": 7, "name": "Street Dance"}, {"is_kernel": false, "short_desc": "Classical dance contest", "id": 40, "name": "Tandav"}, {"is_kernel": true, "short_desc": "A solo dance event.", "id": 48, "name": "Desert Duel"}, {"is_kernel": true, "short_desc": "A group dance competition.", "id": 54, "name": "Razzmatazz"}]}, {"category": "Drama", "events": [{"is_kernel": true, "short_desc": "The fashion show at oasis 2015.", "id": 2, "name": "FashP"}, {"is_kernel": true, "short_desc": "Portray a play, pertaining to a theme", "id": 3, "name": "Mime"}, {"is_kernel": true, "short_desc": "Click here to know more", "id": 5, "name": "Stage Play"}, {"is_kernel": true, "short_desc": "Nukkad Natak to propagate social and political messages", "id": 6, "name": "Street Play"}, {"is_kernel": true, "short_desc": "A movie making competition.", "id": 36, "name": "Metamorphosis"}, {"is_kernel": false, "short_desc": "Bring out the actor in you on a real stage", "id": 38, "name": "Apt to Act"}, {"is_kernel": false, "short_desc": "", "id": 69, "name": "Femina Miss India"}]}, {"category": "Music", "events": [{"is_kernel": true, "short_desc": "Musical extravaganza from the Indian heartland", "id": 8, "name": "Tarang"}, {"is_kernel": false, "short_desc": "Ttalent hunt for the most versatile singer", "id": 9, "name": "Andholika"}, {"is_kernel": true, "short_desc": "An A\\u2019capella competition", "id": 10, "name": "Pitch Perfect"}, {"is_kernel": false, "short_desc": "A classical music event - both Carnatic and Hindustani styles", "id": 39, "name": "Swaranjali"}, {"is_kernel": false, "short_desc": "Calling all drummers to exhibit their expertise.", "id": 49, "name": "Drums Duel"}, {"is_kernel": true, "short_desc": "Set free the rapper in you.", "id": 50, "name": "Rap Wars"}, {"is_kernel": false, "short_desc": "A non-competitive event open for all music lovers.", "id": 51, "name": "Free Jam"}, {"is_kernel": true, "short_desc": "Come experience the battle of bands.", "id": 60, "name": "Rocktaves"}, {"is_kernel": false, "short_desc": "Solo guitar competition for acoustic and electric guitarists.", "id": 62, "name": "Axetacy"}, {"is_kernel": false, "short_desc": "The old Indian tradition in a new flavour.", "id": 66, "name": "Antakshari"}]}, {"category": "online", "events": [{"is_kernel": false, "short_desc": "Photography event", "id": 11, "name": "Exposure"}, {"is_kernel": false, "short_desc": "Different forms of word games", "id": 18, "name": "Wordwars"}, {"is_kernel": false, "short_desc": "Build a story around a given set of constraints", "id": 35, "name": "Down The Line"}, {"is_kernel": false, "short_desc": "Make a vine.", "id": 37, "name": "10 Seconds to Fame"}]}, {"category": "Quizzing", "events": [{"is_kernel": false, "short_desc": "Click here to know more", "id": 12, "name": "Movie Quiz"}, {"is_kernel": false, "short_desc": "Bollywood Quiz", "id": 30, "name": "Filmy Muqabla"}, {"is_kernel": false, "short_desc": "Click here to know more", "id": 31, "name": "Oasis Quiz"}, {"is_kernel": false, "short_desc": "Self Explanatory!", "id": 46, "name": "Entertainment Quiz"}, {"is_kernel": false, "short_desc": "Test your knowledge of music", "id": 58, "name": "Music Quiz"}, {"is_kernel": false, "short_desc": "Test your knowledge of the world.", "id": 65, "name": "Theme Quiz"}]}, {"category": "Misc", "events": [{"is_kernel": false, "short_desc": "", "id": 13, "name": "Triathlon"}, {"is_kernel": false, "short_desc": "Spell it out", "id": 14, "name": "Spell Bee"}, {"is_kernel": false, "short_desc": "Plan an impeccable suicide", "id": 15, "name": "Suicide at Midnight"}, {"is_kernel": false, "short_desc": "Convey the given word without using words that are Taboo", "id": 16, "name": "Taboo"}, {"is_kernel": false, "short_desc": "Test knowledge of the Hindi language", "id": 17, "name": "Cocktail"}, {"is_kernel": false, "short_desc": "A fun new take on the traditional board game", "id": 32, "name": "Speed Scrabble"}, {"is_kernel": false, "short_desc": "Be the king of words.", "id": 33, "name": "Wordstock"}, {"is_kernel": false, "short_desc": "Battle of poetry", "id": 41, "name": "Poetry, Slam!"}, {"is_kernel": false, "short_desc": "Solve the clues, take the treasure", "id": 42, "name": "Treasure Hunt"}, {"is_kernel": false, "short_desc": "Find as many items on the list within the given time", "id": 44, "name": "Beg, Borrow, Steal"}, {"is_kernel": false, "short_desc": "Showcase your poetry skills.", "id": 52, "name": "OASIS Reading Session(ORS)"}, {"is_kernel": false, "short_desc": "Make it out of waste..!!", "id": 68, "name": "Protest Out Of Waste"}, {"is_kernel": false, "short_desc": "", "id": 71, "name": "Movie Screening"}, {"is_kernel": false, "short_desc": "", "id": 72, "name": "Gaming"}, {"is_kernel": false, "short_desc": "", "id": 73, "name": "Adventure Zone"}, {"is_kernel": false, "short_desc": "", "id": 74, "name": "Zorbing"}]}, {"category": "Oratory", "events": [{"is_kernel": false, "short_desc": "Attend to problems residing in our country and beyond", "id": 29, "name": "Mock Parliament"}, {"is_kernel": false, "short_desc": "Be the Mister and Miss Oasis 2015.", "id": 43, "name": "Mister and Miss Oasis"}, {"is_kernel": false, "short_desc": "Short for BITS Language Aptitude Battle", "id": 57, "name": "BLAB"}, {"is_kernel": false, "short_desc": "Test your speaking skills against the others.", "id": 63, "name": "Bol Baby Bol"}, {"is_kernel": true, "short_desc": "Annual 2-on-2 parliamentary style freshers\\u2019 debating event.", "id": 64, "name": "Oasis Debate"}, {"is_kernel": false, "short_desc": "Do you have it in you to be a master at bluff ?", "id": 67, "name": "Bluffmaster"}]}, {"category": "Art", "events": [{"is_kernel": false, "short_desc": "Sketching Competition for art enthusiasts.", "id": 53, "name": "Contrasto"}, {"is_kernel": false, "short_desc": "Face and hand painting competition.", "id": 55, "name": "Splash"}, {"is_kernel": false, "short_desc": "A guided tour of the photographic world.", "id": 61, "name": "Exposure Exhibition"}]}];


      data.map(function(i){
        console.log('CATEGORY '+i.category);
        i.events.map(function(i2){
          console.log(i2.name)
        })
      });
      $.ajax({
        type:'GET',
        url:'http://bits-oasis.org/2016/events/summary/',
        dataType:'jsonp',
        success:function(response){
          data=[{"category": "Dance", "events": [{"is_kernel": true, "short_desc": "A group dance event", "id": 1, "name": "Choreo"}, {"is_kernel": true, "short_desc": "Group dance event - showcasing the freestyle form.", "id": 7, "name": "Street Dance"}, {"is_kernel": false, "short_desc": "Classical dance contest", "id": 40, "name": "Tandav"}, {"is_kernel": true, "short_desc": "A solo dance event.", "id": 48, "name": "Desert Duel"}, {"is_kernel": true, "short_desc": "A group dance competition.", "id": 54, "name": "Razzmatazz"}]}, {"category": "Drama", "events": [{"is_kernel": true, "short_desc": "The fashion show at oasis 2015.", "id": 2, "name": "FashP"}, {"is_kernel": true, "short_desc": "Portray a play, pertaining to a theme", "id": 3, "name": "Mime"}, {"is_kernel": true, "short_desc": "Click here to know more", "id": 5, "name": "Stage Play"}, {"is_kernel": true, "short_desc": "Nukkad Natak to propagate social and political messages", "id": 6, "name": "Street Play"}, {"is_kernel": true, "short_desc": "A movie making competition.", "id": 36, "name": "Metamorphosis"}, {"is_kernel": false, "short_desc": "Bring out the actor in you on a real stage", "id": 38, "name": "Apt to Act"}, {"is_kernel": false, "short_desc": "", "id": 69, "name": "Femina Miss India"}]}, {"category": "Music", "events": [{"is_kernel": true, "short_desc": "Musical extravaganza from the Indian heartland", "id": 8, "name": "Tarang"}, {"is_kernel": false, "short_desc": "Ttalent hunt for the most versatile singer", "id": 9, "name": "Andholika"}, {"is_kernel": true, "short_desc": "An A\\u2019capella competition", "id": 10, "name": "Pitch Perfect"}, {"is_kernel": false, "short_desc": "A classical music event - both Carnatic and Hindustani styles", "id": 39, "name": "Swaranjali"}, {"is_kernel": false, "short_desc": "Calling all drummers to exhibit their expertise.", "id": 49, "name": "Drums Duel"}, {"is_kernel": true, "short_desc": "Set free the rapper in you.", "id": 50, "name": "Rap Wars"}, {"is_kernel": false, "short_desc": "A non-competitive event open for all music lovers.", "id": 51, "name": "Free Jam"}, {"is_kernel": true, "short_desc": "Come experience the battle of bands.", "id": 60, "name": "Rocktaves"}, {"is_kernel": false, "short_desc": "Solo guitar competition for acoustic and electric guitarists.", "id": 62, "name": "Axetacy"}, {"is_kernel": false, "short_desc": "The old Indian tradition in a new flavour.", "id": 66, "name": "Antakshari"}]}, {"category": "online", "events": [{"is_kernel": false, "short_desc": "Photography event", "id": 11, "name": "Exposure"}, {"is_kernel": false, "short_desc": "Different forms of word games", "id": 18, "name": "Wordwars"}, {"is_kernel": false, "short_desc": "Build a story around a given set of constraints", "id": 35, "name": "Down The Line"}, {"is_kernel": false, "short_desc": "Make a vine.", "id": 37, "name": "10 Seconds to Fame"}]}, {"category": "Quizzing", "events": [{"is_kernel": false, "short_desc": "Click here to know more", "id": 12, "name": "Movie Quiz"}, {"is_kernel": false, "short_desc": "Bollywood Quiz", "id": 30, "name": "Filmy Muqabla"}, {"is_kernel": false, "short_desc": "Click here to know more", "id": 31, "name": "Oasis Quiz"}, {"is_kernel": false, "short_desc": "Self Explanatory!", "id": 46, "name": "Entertainment Quiz"}, {"is_kernel": false, "short_desc": "Test your knowledge of music", "id": 58, "name": "Music Quiz"}, {"is_kernel": false, "short_desc": "Test your knowledge of the world.", "id": 65, "name": "Theme Quiz"}]}, {"category": "Misc", "events": [{"is_kernel": false, "short_desc": "", "id": 13, "name": "Triathlon"}, {"is_kernel": false, "short_desc": "Spell it out", "id": 14, "name": "Spell Bee"}, {"is_kernel": false, "short_desc": "Plan an impeccable suicide", "id": 15, "name": "Suicide at Midnight"}, {"is_kernel": false, "short_desc": "Convey the given word without using words that are Taboo", "id": 16, "name": "Taboo"}, {"is_kernel": false, "short_desc": "Test knowledge of the Hindi language", "id": 17, "name": "Cocktail"}, {"is_kernel": false, "short_desc": "A fun new take on the traditional board game", "id": 32, "name": "Speed Scrabble"}, {"is_kernel": false, "short_desc": "Be the king of words.", "id": 33, "name": "Wordstock"}, {"is_kernel": false, "short_desc": "Battle of poetry", "id": 41, "name": "Poetry, Slam!"}, {"is_kernel": false, "short_desc": "Solve the clues, take the treasure", "id": 42, "name": "Treasure Hunt"}, {"is_kernel": false, "short_desc": "Find as many items on the list within the given time", "id": 44, "name": "Beg, Borrow, Steal"}, {"is_kernel": false, "short_desc": "Showcase your poetry skills.", "id": 52, "name": "OASIS Reading Session(ORS)"}, {"is_kernel": false, "short_desc": "Make it out of waste..!!", "id": 68, "name": "Protest Out Of Waste"}, {"is_kernel": false, "short_desc": "", "id": 71, "name": "Movie Screening"}, {"is_kernel": false, "short_desc": "", "id": 72, "name": "Gaming"}, {"is_kernel": false, "short_desc": "", "id": 73, "name": "Adventure Zone"}, {"is_kernel": false, "short_desc": "", "id": 74, "name": "Zorbing"}]}, {"category": "Oratory", "events": [{"is_kernel": false, "short_desc": "Attend to problems residing in our country and beyond", "id": 29, "name": "Mock Parliament"}, {"is_kernel": false, "short_desc": "Be the Mister and Miss Oasis 2015.", "id": 43, "name": "Mister and Miss Oasis"}, {"is_kernel": false, "short_desc": "Short for BITS Language Aptitude Battle", "id": 57, "name": "BLAB"}, {"is_kernel": false, "short_desc": "Test your speaking skills against the others.", "id": 63, "name": "Bol Baby Bol"}, {"is_kernel": true, "short_desc": "Annual 2-on-2 parliamentary style freshers\\u2019 debating event.", "id": 64, "name": "Oasis Debate"}, {"is_kernel": false, "short_desc": "Do you have it in you to be a master at bluff ?", "id": 67, "name": "Bluffmaster"}]}, {"category": "Art", "events": [{"is_kernel": false, "short_desc": "Sketching Competition for art enthusiasts.", "id": 53, "name": "Contrasto"}, {"is_kernel": false, "short_desc": "Face and hand painting competition.", "id": 55, "name": "Splash"}, {"is_kernel": false, "short_desc": "A guided tour of the photographic world.", "id": 61, "name": "Exposure Exhibition"}]}];
          console.log(data);
        }
      })
      $('.events-wrapper').fadeIn();
      $('#inner').fadeIn(1000);

      $('#midWrap').delay(1000).css({
        'transform':'scale(1)'
      });
      $('#storybutton').fadeOut();
    })

    $('.events-wrapper').click(function(ev){

        // console.log(ev.target);
        var innerEve = document.getElementById('innerEve');
        if(!innerEve.contains(ev.target)){
          eventData="off";

          event="off";
      //  var animate=$curEle.children().children()[0];
      //   var no = $curEle.attr('id').charAt(3);
      //   animate.setAttribute('from',pos[no-1]);
      //   animate.setAttribute('to','0 0');
      //   animate.setAttribute('fill','freeze');
      //   animate.beginElement();
      var eleChild=$curEle.children()[0];
       $(eleChild).css({
      transform:'translate(0,0)'
    });
        $curEle.attr('on',false);
        console.log($curEle);
        $(this).fadeOut();
        $('.eventText').show();

      $('.eventData').animate({
         width:'0%'
       },600);
      $('#midWrap').css({
        transform:'scale(0)'
      })
      setTimeout(function(){
      $('#outerRightIn').removeClass('moveRightOuter');
      $('.eventListRightIn').removeClass('moveRightEventList');
      $('#innerLeftIn').removeClass('moveLeftInner');
      $('#innerRightIn').removeClass('moveRightInner');
      $('#outerLeftIn').removeClass('moveLeftOuter');
      $('.eventListLeftIn').removeClass('moveLeftEventList');


    },100);

    setTimeout(function(){
      $('#eventListWrap').css({
        'transform':'scale(0)'
      });
    },100);
    }
      $('#storybutton').fadeIn();
  });

var innerEve = $('#innerEve');
  // var ParX=$('#innerEve').parent().attr('x');
  // var ParY=$('#innerEve').parent().attr('y');
  var EveX=$('#innerEve').get(0).getBBox().width;
  var EveY=$('#innerEve').get(0).getBBox().height;''
  // paper

  var left=$('#outerLeft').position()
// console.log(innerEve);
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
