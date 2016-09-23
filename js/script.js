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
  evPageVal = '36%';
else if(window.innerWidth<1400)
  evPageVal = '46%';
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
    var cat="",$eleEv;
    if($(this).children().length==0)
      $eleEv=$(this).parent().children();
    else {
      $eleEv=$(this).children();
    }
    $eleEv.map(function(i,e){
      cat+=$(e).html();
    });
    // $ele.children().map(function(i,e){
    //   cat+=$(e).html();
    // }),
    // console.log(cat,data);


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

      data.map(function(i){
        if(i.category.toLowerCase()==cat.toLowerCase()){
          var eventName=document.getElementsByClassName('event-name');
          for(var x=0;x<eventName.length;x++){
            if(x<i.events.length)
            eventName[x].innerHTML=i.events[x].name;
            else {
              eventName[x].innerHTML='';
            }
          }
        }
        });
    },800);

    setTimeout(function(){
      $('#eventListWrap').css({
        'transform':'scale(1.2)'
      });
    },500);
}
else{
    $('.eventData').animate({
       width:'0%'
     },500);
     $('.eventText,.eventTitle').hide();
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

      data.map(function(i){
        if(i.category.toLowerCase()==cat.toLowerCase()){
          var eventName=document.getElementsByClassName('event-name');
          for(var x=0;x<eventName.length;x++){
            if(x<i.events.length)
            eventName[x].innerHTML=i.events[x].name;
            else {
              eventName[x].innerHTML='';
            }
          }
        }
        });
    },500);

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

    var eventName=$(this).find('tspan').html();
    console.log(eventName);
    // ajax
    eventDesc=[{"name": "Choreo", "desc": "<p><strong>REGISTRATION</strong><br />\r\nPre-registration (includes video submission). Team participation.<br />\r\nSubmit a 2-3 minute long video showcasing your team&rsquo;s practice routine/previous performances to pcr@bits-oasis.org<br />\r\n\uf0b7 Subject of the e-mail: &ldquo;&lt;College Name&gt; &lt;Event Name&gt; Oasis\uf020<br />\r\n\uf020<br />\r\n&rsquo;15 Video Submission&rdquo;<br />\r\n\uf020<br />\r\n\uf0b7 For last date for submission, check last date for application in the registration details\uf020<br />\r\n\uf020<br />\r\n<strong>RULES</strong><br />\r\n\uf020<br />\r\n\uf0b7 Teams can have a maximum of 14 participants.\uf020<br />\r\n<br />\r\n\uf0b7 A maximum of 8 teams can participate in the event.\uf020<br />\r\n<br />\r\n\uf0b7 One entry per college.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams are expected to portray a theme through dance and choreography.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Time limit of 10 minutes including write-up (curtain to curtain). Negative points for exceeding the time limit.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 There will be an elimination round.\uf020<br />\r\n\uf0b7 Folk and classical dances are not allowed.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Lyrics are not allowed in the sound track. However, a short write-up describing the theme may be read before the performance. The write-up should be in printed form.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 All props must be specified to the Coordinator of Department of Theatre. Use of props is highly discouraged and can result in negative points or even disqualification. (Any item that is not a part of clothing is a prop. Also, an item of clothing will be considered a prop if it is moved from its initial position during the performance.)\uf020<br />\r\n\uf020<br />\r\n\uf0b7 On-Stage rehearsal slots will be provided to the short listed teams. Teams are expected to use these slots for finalizing lights cues and so on.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Backstage helpers should not exceed 6. Two team members must be present to provide cues for music and lights.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Lighting of candles, matches or cigarettes on stage is not allowed and will result in disqualification.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams are requested to have confirmed their participation in advance via email.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams should report to the Department of Theatre room immediately after registration at the Controls booth.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams must bring 2 CDs and a pen-drive containing their sound track. One CD is to be submitted at the time of eliminations. The soundtrack should be in .mp3 format.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams are advised to get their own music systems for practice\uf020<br />\r\n\uf020<br />\r\n\uf020</p>"}, {"name": "Street Dance", "desc": "<p>REGISTRATION<br />\r\nPre-registration (includes video submission). Team participation.<br />\r\nSubmit a 2-3 minute long video showcasing your team&rsquo;s practice routine/previous performances to pcr@bits-oasis.org<br />\r\n\uf0b7 Subject of the e-mail: &ldquo;&lt;College Name&gt; &lt;Event Name&gt; Oasis\uf020<br />\r\n\uf020<br />\r\n&rsquo;15 Video Submission&rdquo;<br />\r\n\uf020<br />\r\n\uf0b7 For last date for submission, check last date for application in the registration details\uf020<br />\r\n\uf020<br />\r\n\uf020<br />\r\nRULES<br />\r\n\uf020<br />\r\n\uf0b7 Minimum 5 and maximum 14 dancers per team.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 A maximum of 15 teams can participate in the event.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 One entry per college\uf020<br />\r\n\uf0b7 The duration of the performance should be 5-10 min.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams must bring 2 CDs and a pen-drive containing their soundtrack. One CD is to be submitted at the time of eliminations. The soundtrack should be in .mp3 format.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams should bring their own portable music systems for practice.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 The dance floor area must be in the same condition after the performances as before.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 No props will be provided. Teams may use props if they want, for which prior permission from the Coordinator of Department of Theatre is necessary. Negative points for usage of props without permission.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 There will be an elimination round from which the top teams will be selected for the finals\uf020<br />\r\n\uf020<br />\r\n\uf0b7 The final round will include a face-off round as well, in which the teams will compete against each other in pairs.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Participants should show the freestyle form of street dance. Power movements, acrobatics and such are admissible, but they should not form a major part of the performance.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Individuality and originality of the dance is encouraged as well as interaction and contact with the spectators and the other dancers.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Dancers are not restricted from performing any move but they must be aware that it is their own responsibility to ensure that they do not perform dangerous moves that could injure themselves or others. Coordinators have the right to bring in safety restrictions.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Lighting of candles, matches or cigarettes on stage is not allowed and will result in disqualification.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams should report to Department of Theatre room immediately after registration at Controls booth.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 In case of situations which have been not described in rules, decision taken by judges will be final.\uf020</p>"}, {"name": "Tandav", "desc": "<p>Tandav is a classical dance contest. It invites participants trained in Odissi, Kathak, Kuchipudi, Bharatanatyam, Manipuri, Kathakali, Mohiniattam and Sattriya.<br />\r\nREGISTRATION<br />\r\nIndividual and group participants will be judged separately. On-spot registration (individual)/Pre-registration (group and individual).<br />\r\nRULES<br />\r\nParticipants are expected to perform in full costume, which should be brought by them.<br />\r\n\uf0b7 Participants shall be evaluated in different rounds. No round is optional.<br />\r\n\uf0b7 Participants should not switch styles in between rounds.<br />\r\n\uf0b7 For individual participants, there will be 3 rounds which comprise of:<br />\r\no Laya is a recital in the respective style for a maximum of 7 minutes. Participants should bring the music track to which they are going to dance in their own USB drive/CD.<br />\r\nNo audio cassettes are allowed. Exceeding the time limit by more than 30 seconds will invite deduction of points.<br />\r\no Rasa is a depiction of a given situation for 2 minutes, the track for which shall be provided a few minutes before the round.<br />\r\no Tala is about Performing to a 30 second percussion sequence which shall be made known a few minutes before the round.<br />\r\no Rounds 2 and 3 involve extempore choreography.<br />\r\no Participants will be awarded points under different criteria based on their performance including detail of expressions, Taal sense, creativity and clarity in rendition.<br />\r\n\uf0b7 For Group Participants, there will be 2 rounds comprising of:<br />\r\no In the first round, groups will be judged on the basis of their own prepared sequence. Groups will be awarded points under different criteria based on their performance including choreography, coordination, formations and rhythm sense.<br />\r\no Time limit for the first round &ndash; 7 to 10 mins. Groups should bring the music track to which they are going to dance in their own USB drive/CD. No audio cassettes are allowed. Exceeding the time limit by more than 30 seconds will invite deduction of points.<br />\r\no In the second round, participants will be given a theme as well as a track which they have to choreograph. This track will be given in advance and time slots for a practice room will also be provided (Groups are requested to contact the Ragamalika coordinator after registering at the Controls booth). Groups will have to present their choreographed piece and will be judged on the basis of creativity, interpretation of theme, coordination and choreography.</p>"}, {"name": "Desert Duel", "desc": "<p>Desert duel is an event that brings out individual brilliance among participants and tests their mettle in dance. It is a solo dance event in which dancers from every college participate and showcase their talent. Since this is a solo event, it gives the dancer a lot of freedom in the steps/moves/stunts he/she chooses to perform. Depending on the dancer, styles can vary from western to classical to hip-hop and even to the typical Bollywood style.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf A maximum of 6 entries per college.<br />\r\n\u25cf Individual participation.<br />\r\n\u25cf The event comprises of eliminations followed by finals.<br />\r\nEliminations:<br />\r\n\u25cf Prepared Sequence<br />\r\n\u25cf Time limit: Max: 1 min. Min: 30 sec<br />\r\n\u25cf All forms of dance allowed.<br />\r\n\u25cf Weightage for costume, music, choreography.<br />\r\n\u25cf Fusion is allowed.<br />\r\n\u25cf Disqualification on exceeding time limit.<br />\r\n\u25cf Weightage will be given for props. However, prior permission is required for their usage.<br />\r\n\u25cf Get your own CD/pen drive with music for the dance.<br />\r\n\u25cf No audio cassettes will be allowed.<br />\r\n\u25cf NOTE: Props using fire are strictly prohibited and will lead to disqualification.<br />\r\nFinals Round 1: Solo Dance<br />\r\n\u25cf The participant will have to repeat the performance given during elimination round.<br />\r\nFinals Round 2: Theme Round (On the Spot theme presentation)<br />\r\n\u25cf The participant must portray a theme through dance.<br />\r\n\u25cf Organizers will provide music and 15 min to prepare.<br />\r\n\u25cf Theme will be decided through lots at the end of Round 1.<br />\r\n\u25cf Time limit: Max: 2 min, Min: 1 min (Left to the discretion of the organizers)<br />\r\n\u25cf Weightage will be given for interpretation and presentation of the theme, innovation, choreography, expressions.<br />\r\n\u25cf Usage of any kind of props will lead to disqualification.<br />\r\nFinals Round 3: Last Man Standing<br />\r\n\u25cf STAGE 1: The participants will be divided into groups (3 or 4 participants per group). Group-wise, every group will start dancing to the same song with its assigned participants together on stage. Some people of each group will be selected for stage 2.<br />\r\n6<br />\r\n\u25cf STAGE 2: The people who have entered into stage 2 will also be grouped now into groups of three or four and the same process continues till we finally have one last person standing. The last person standing will have the maximum number of points and the others will be marked relatively. The later he/she gets eliminated the more number of points he/she will get.</p>"}, {"name": "Razzmatazz", "desc": "<p>REGISTRATION<br />\r\nPre-registration (includes video submission). Team participation.<br />\r\nSubmit a 2-3 minute long video showcasing your team&rsquo;s practice routine/previous performances to pcr@bits-oasis.org<br />\r\n\uf0b7 Subject of the e-mail: &ldquo;&lt;College Name&gt; &lt;Event Name&gt; Oasis &rsquo;15 Video Submission&rdquo;\uf020<br />\r\n\uf020<br />\r\n\uf0b7 For last date for submission, check last date for application in the registration details\uf020<br />\r\n\uf020<br />\r\nRULES<br />\r\n\uf020<br />\r\n\u25cf Maximum of 12 participants per team.<br />\r\n\u25cf A maximum of 22 teams can participate in the event.<br />\r\n\u25cf There will be 3 rounds.<br />\r\n\uf020<br />\r\nEliminations:<br />\r\n\uf020<br />\r\n\u25cf Teams will be judged on the basis of their own prepared sequence.<br />\r\n\u25cf Teams need to show all the props which they might be using in their performance.<br />\r\n\u25cf Teams also need to show at least a single set of costumes they will be wearing for their performance.<br />\r\n\u25cf Props using fire are strictly prohibited.<br />\r\n\uf020<br />\r\nRound 0: Video entries (Pre-Oasis eliminations)<br />\r\n\u25cf Each team is required to send a dance video (Min. 1min and Max 3. min) of the performance while registering for the event.<br />\r\n\u25cf Qualified teams will go for next rounds.<br />\r\n\uf020<br />\r\nFinals Round 1: Group Dance (Prepared Sequence)<br />\r\n\uf020<br />\r\n\u25cf Minimum six dancers on stage.<br />\r\n\u25cf No lead dancer, no solo performance.<br />\r\n\u25cf Time limit (excluding briefing time) &ndash; Max: 6 min. Min: 3 min.<br />\r\n\u25cf All forms of dance allowed.<br />\r\n\u25cf Weightage for costumes, music, choreography and coordination.<br />\r\n\u25cf Fusion allowed.<br />\r\n\u25cf Negative marking on exceeding time limit and disqualification on exceeding the number of participants.<br />\r\n\u25cf No weightage will be given for props. However, prior permission is required for their usage.<br />\r\n\u25cf Get your own CD/pen-drive with music for the dance.<br />\r\n\u25cf No audio cassettes will be allowed.<br />\r\n\uf020<br />\r\nFinals Round 2: Footloose (On the Spot)<br />\r\n\uf020<br />\r\n\u25cf The music will keep changing, you will have to adapt to the beat.<br />\r\n\u25cf Organizers will provide music on the spot.<br />\r\n\u25cf There will have to be at least 3 dancers on stage at all times.<br />\r\n\u25cf Time limit: Max: 3 min, Min: 1 min (Left to the discretion of the organizers)<br />\r\n\u25cf Weightage will be given for adaptation to change of music and pace of beat, coordination and choreography.</p>\r\n\r\n<p>\u25cf No props allowed.<br />\r\nFinals Round 3: Prop Round (Improvised use of props)<br />\r\n\u25cf The organizers will provide props and music.<br />\r\n\u25cf Props will be decided through lots at the end of Round 1.</p>"}, {"name": "FashP", "desc": "<p>REGISTRATION<br />\r\nPre-registration (includes video submission). Team participation.<br />\r\nSubmit a 2-3 minute long video showcasing your team&rsquo;s practice routine/previous performances to pcr@bits-oasis.org<br />\r\n\uf0b7 Subject of the e-mail: &ldquo;&lt;College Name&gt; &lt;Event Name&gt; Oasis &rsquo;15 Video Submission&rdquo;\uf020<br />\r\n\uf020<br />\r\n\uf0b7 For last date for submission, check last date for application in the registration details\uf020<br />\r\n\uf020<br />\r\n\uf020<br />\r\nRULES<br />\r\n\uf020<br />\r\n\uf0b7 Only one entry per college.\uf020<br />\r\n\uf0b7 A maximum of 15 teams can participate in the event.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 There can be a maximum of 12 participants in each team. There can be up to 8 backstage helpers as a part of these 12 team members.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 All participants need not be on stage at the same time\uf020<br />\r\n\uf020<br />\r\n\uf0b7 All teams will have an on-campus elimination round during the fest.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams need to submit a copy of the write-ups of different rounds at the time of eliminations. The write-up should be in printed form.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Time limit: 18 minutes (Curtain to curtain, including the time for change of clothes after Round 1). All teams have to present their introduction, for which 5 extra minutes will be given. Points will be deducted for exceeding the time limit.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 There are two rounds in the competition. Participants can follow any theme of their choice for the first round. The second round should be on the Oasis theme compulsory.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 On-stage practice slots will be provided for the shortlisted teams. Teams are expected to use them for stage familiarization, finalising light cues, etc.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Emphasis will be given to apparel, portrayal and originality.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Two individuals must be present to provide cues for music and lights. (These two individuals are not counted as part of the 12 team members.)\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Lighting of candles, matches or cigarettes on stage is not allowed and will result in disqualification.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 A T-shaped extension will be provided to the auditorium stage. Both the stage and the extension may be used as the walking ramp.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams are required to have confirmed their participation in advance via email.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams must report to the Department of Theatre room immediately after registration at the Controls booth.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams must bring 2 CDs and a pen-drive containing their sound track. One CD is to be submitted at the time of eliminations. The soundtrack should be in .mp3 format.\uf020<br />\r\n\uf020<br />\r\n\uf020</p>"}, {"name": "Mime", "desc": "<p>MIME requires participants to portray a play, pertaining to a theme.<br />\r\nREGISTRATION<br />\r\nPre-registration (includes script submission). Team participation.<br />\r\nRULES<br />\r\nRULES<br />\r\n\uf0b7 Maximum number of participants per entry is 6 on stage and 2 off stage.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 A maximum of 12 teams can participate in the event.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Time limit: 9 minutes. Negative points for exceeding the time limit.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 No recorded music, recorded sounds, musical instruments, recognizable words, indicative makeup, indicative costumes or props are allowed. For clarification, please contact the Coordinator, Department of Theatre. Violation will result in negative points.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Microphones will be provided to the offstage members of the team. Any sound produced must not be recognizable as words.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Points will be deducted for vulgarity.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 A short synopsis may be read out before the performance.\uf020</p>"}, {"name": "Stage Play", "desc": "<p>REGISTRATION<br />\r\nPre-registration (includes script submission). Team participation.<br />\r\nSubmit a pdf version of your script to pcr@bits-oasis.org<br />\r\n\uf0b7 Subject of the e-mail: &ldquo;&lt;College Name&gt; &lt;Event Name&gt; Oasis &rsquo;15 Script Submission&rdquo;\uf020<br />\r\n\uf020<br />\r\n\uf0b7 For last date for submission, check last date for application in the registration details\uf020</p>\r\n\r\n<p>RULES<br />\r\n\uf0b7 Stage plays during Oasis 2015 will be judged by members of the screening panel.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 A maximum of 8 teams can participate in the event.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 All members putting up the play (with the exception of the playwright) should be under the age of 25.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 There can be up to 4 backstage helpers in a team.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 The play must EXACTLY follow the script sent at the time of pre-registration. Any deviations without prior approval of the Department of Theatre Coordinator will result in disqualification.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Time limit: Minimum &ndash; 60 minutes; Maximum &ndash; 75 minutes (Empty stage to empty stage)\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Not adhering to the time limit will result in negative points.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Backstage helpers should not exceed 6. Two team members must be present to provide cues for music and lights.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Points will be deducted for vulgarity. It is insisted that scripts should avoid abusive language.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Lighting of candles, matches or cigarettes on stage is not allowed and will result in disqualification.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Microphones and lights will be provided. Props may be provided but are subject to availability. (Any item that is not a part of clothing is a prop. Also, an item of clothing will be considered a prop if it is moved from its initial position during the performance.)\uf020</p>\r\n\r\n<p>\uf0b7 Rehearsal slots will be provided for quick stage familiarization.\uf020</p>"}, {"name": "Street Play", "desc": "<p>Oasis brings to you, right from the streets, a loud and larger-than-life exchange of ideologies, with drama full of humour and zeal. Street Plays aka Nukkad Natak, are carried out to propagate social and political messages among the masses, amidst the direct, intimate and effective means of theatre by means of shouts, chants, drums and catchy songs.<br />\r\nREGISTRATION<br />\r\nPre-registration (includes video submission). Team participation.<br />\r\nSubmit a pdf version of your script to pcr@bits-oasis.org<br />\r\n\uf0b7 Subject of the e-mail: &ldquo;&lt;College Name&gt; &lt;Event Name&gt; Oasis &rsquo;15 Script Submission&rdquo;\uf020<br />\r\n\uf020<br />\r\n\uf0b7 For last date for submission, check last date for application in the registration details\uf020<br />\r\nRULES<br />\r\n\uf0b7 Negative points for exceeding the time limit. An introduction of participants is necessary after the play but not included in the time limit.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 The play must EXACTLY follow the script sent at the time of pre-registration. Any deviations without prior approval of the Department of Theatre Coordinator will result in disqualification.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Points will be deducted for vulgarity.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Use of microphones, lights and make up is not allowed.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 No props will be provided. Teams may use props if they want, for which prior permission from the Coordinator of Department of Theatre is necessary. Negative points for the usage of props without permission. (Any item that is not a part of clothing is a prop. Also, an item of clothing will be considered a prop if it is moved from its initial position during the performance.)\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Teams must arrive at the venue 45 minutes before the event starts.\uf020<br />\r\n\uf0b7 The play may be in either English or Hindi.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 A maximum of 8 teams can participate in the event.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Maximum of two entries per college is allowed. In case of two entries, one play should be in English and the other in Hindi.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Minimum time &ndash; 15 minutes. Maximum time &ndash; 30 minutes.\uf020</p>"}, {"name": "Metamorphosis", "desc": "<p>Metamorphosis is a two-round movie making competition. The first-round is a screening round with no theme. Videos for the first round may be shot using digicams, handycams, or mobile phones.<br />\r\nOnce teams have been shortlisted for the second round (this will happen approximately a week before Oasis), they will be informed of the theme for the second round. Only those participants, who have cleared the first round, are eligible to take part in the second round.<br />\r\nREGISTRATION<br />\r\nPre-registration (includes video submission). Team participation.<br />\r\nRULES<br />\r\n\uf0b7 The maximum duration for an entry is 5 minutes.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 The maximum number of members in a team is 5 (excluding the cast).\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Each entry should bear a) an appropriate title b) the team name c) A disclaimer bearing the following text: &quot;This is an entry for Metamorphosis Oasis 2015&quot;. The team name and title of the film must run for five seconds before the start of the video.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 The video should contain the name of all the team members in the final credits along with contact number and email id of the team leader. The credits section and the disclaimer will not be counted in the 5 minutes allotted for the film.\uf020<br />\r\n\uf0b7 All entries should be completely original and independently produced. Content and idea should be original. The participating teams themselves will be responsible for any third-party claim for copyright infringement.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 All the teams must make sure that all their team members are registered on the Oasis-2015 website. No one will be confirmed if THEY ARE NOT ON REGISTERED ON THE\uf020<br />\r\n\uf020<br />\r\nWEBSITE.<br />\r\n\uf020<br />\r\n\uf0b7 Upload your video onto YouTube or Vimeo and send us the link (metamorphosis@bits-oasis.org), before the deadline, which would be announced later.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Entries must reflect your direction and editing skills, and should comprise of cinematography and editing only.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Organizers solely reserve the right to screen the entry.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Pornography, nudity and Excessive Violence are strictly prohibited and will lead to immediate disqualification.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Decision of the judges shall be final.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Mail your entries at metamorphosis@bits-oasis.org.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Keep checking the Facebook page for regular updates (https://www.facebook.com/oasis.metamorphosis).\uf020</p>"}, {"name": "Apt to Act", "desc": "<p>How sobered is Shakespeare when he says, &#39;All the world&#39;s a stage, and all the men and women merely actors&rsquo;? Where do you see yourself in an unforeseen situation from your day-to-day life of concealing actors around? How creative and spontaneous are you to handle such everyday plots? There is no better time than OASIS, to bring out the actor in you on a real stage. Get prepared to see how APT you are TO ACT in real life.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf Each team can have 2 to 3 participants<br />\r\n\u25cf Teams are expected to report 15 min before the event begins<br />\r\n\u25cf Order of participation will be based on lucky draw.<br />\r\n\u25cf In first round, situations are given on spot for each group with an act-time of 10 minutes. The theme for further rounds will be revealed at the time of event.<br />\r\n\u25cf Score awarded for dialogues-action-presentation-creativity-spontaneity.<br />\r\n\u25cf Use of vulgar language or action of any sort will lead to immediate disqualification.<br />\r\n\u25cf Teams can act in English or Hindi.<br />\r\n\u25cf Accessing the internet is not allowed.<br />\r\n\u25cf Situations to be enacted will be given by the judges and the decision of judges will be final.</p>"}, {"name": "Femina Miss India", "desc": "<p>femina miss india</p>"}, {"name": "Tarang", "desc": "<p>Tarang &ndash; a musical extravaganza from the Indian heartland and its innumerably diverse facets. Cover an existing piece, or create your own. Come as a band and the stage is yours.<br />\r\nREGISTRATION<br />\r\nPre-registration (includes video submission). Team participation.<br />\r\nSubmit a 2-3 minute long video showcasing your team&rsquo;s practice routine/previous performances to pcr@bits-oasis.org<br />\r\n\uf0b7 Subject of the e-mail: &ldquo;&lt;College Name&gt; &lt;Event Name&gt; Oasis &rsquo;15 Video Submission&rdquo;\uf020<br />\r\n\uf020<br />\r\n\uf0b7 For last date for submission, check last date for application in the registration details\uf020<br />\r\n\uf020<br />\r\nRULES<br />\r\n\uf020<br />\r\n\uf0b7 Bands can perform any songs of their choice, cover or an original composition.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Only two bands per college are allowed with a maximum of 10 members and minimum of 3 members per band. The two teams could have a maximum of 3 common band members.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Time limit is 20 minutes inclusive of setup time.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 5% of the total marks would be deducted for every extra minute. Sounds would be cut after 23 minutes.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Use of pre-recorded music (e.g., sequences, keyboard samples, guitar/octapad loops) will result in disqualification.<br />\r\n\uf020<br />\r\n\uf0b7 The songs should have lyrics from any Indian language. However, a refrain with English lyrics is allowed.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Purely classical numbers are not allowed. However, a classical refrain is allowed\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Bands should bring their own instruments. Drum kit and sounds equipment will be provided by BITS Pilani.\uf020<br />\r\nJUDGING CRITERIA<br />\r\n\uf0b7 Creativity.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Quality of vocals and instrumental music.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Tightness and synchronization.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Choice of song (in case of covers)\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Overall impact\uf020</p>"}, {"name": "Andholika", "desc": "<p>Andholika is a talent hunt for the most versatile singer amongst the participants.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf The event is split into two independent sections.<br />\r\n\u25cf EASTERN ANDHOLIKA<br />\r\n\u25aa This section is for Hindi vocalists.<br />\r\n\u25aa Maximum of 2 male and 2 female entries per college.<br />\r\nEliminations:<br />\r\n\u25cf The contestant will have to perform an Indian song of his/her choice in the first round.<br />\r\n\u25cf The contestants will also be tested on sense of scale and beat.<br />\r\n\u25cf No accompanists are allowed.<br />\r\n\u25cf 2 male and 2 female contestants will be short<br />\r\nlisted for the finals.<br />\r\nFinals:<br />\r\n\u25cf A song bank will be made available to the finalists after the elimination round.<br />\r\n\u25cf All songs in this stage must be from the song bank.<br />\r\n\u25cf The songs in final round will have to be sung on the original scale.<br />\r\n\u25cf Live orchestration will be provided.<br />\r\n\u25aa Judging will be based on:<br />\r\n\u25cf Quality of voice<br />\r\n\u25cf Sense of scale and beat<br />\r\n\u25cf Quality of rendition<br />\r\n\u25cf WESTERN ANDHOLIKA<br />\r\n\u25aa This section is for Western vocalists.<br />\r\n\u25aa Participants will be tested across a wide variety of genres.<br />\r\n\u25aa Maximum of 2 male and 2 female entries per college.<br />\r\n\u25aa In case of all-male or all-female colleges, a maximum of 3 entries is allowed.<br />\r\n\u25aa The event comprises Eliminations followed by Finals.<br />\r\nEliminations:<br />\r\n\u25cf The contestant will have to perform 2-3 Western songs of his/her choice in the first round.<br />\r\n\u25cf The contestants will be tested on sense of scale and beat.<br />\r\n\u25cf No accompanists are allowed.<br />\r\n\u25cf 2 male and 2 female contestants will be shortlisted for the finals.</p>\r\n\r\n<p>Finals:<br />\r\n\u25cf A song bank will be made available to the finalists after the elimination round.<br />\r\n\u25cf All songs in this stage must be from the song bank.<br />\r\n\u25cf The songs in final round should definitely be sung on the original scale.<br />\r\n\u25cf Live orchestration will be provided.<br />\r\n\u25cf Various rounds in the finals will test the participant&rsquo;s vocal skills across a wide variety of Western genres, and will also test a wide array of vocal attributes.<br />\r\nJudging will be based on:<br />\r\n\u25cf Quality of voice<br />\r\n\u25cf Sense of scale and beat<br />\r\n\u25cf Quality and accuracy of rendition<br />\r\n\u25cf Range, power and other vocal characteristics.<br />\r\n\u25cf Note:<br />\r\n\u25aa Participants must carry an iPod or mp3 player.<br />\r\n\u25aa Decision of the Music Club in all matters will be final and binding.</p>"}, {"name": "Pitch Perfect", "desc": "<p>Pitch Perfect is an A&rsquo;capella competition, aimed at showcasing creativity, blend and excellence in an A&rsquo;capella rendition.<br />\r\nREGISTRATION<br />\r\nPre-registration (includes video submission). Team participation.<br />\r\nSubmit a 2-3 minute long video showcasing your team&rsquo;s practice routine/previous performances to pcr@bits-oasis.org<br />\r\n\uf0b7 Subject of the e-mail: &ldquo;&lt;College Name&gt; &lt;Event Name&gt; Oasis &rsquo;15 Video Submission&rdquo;\uf020<br />\r\n\uf020<br />\r\n\uf0b7 For last date for submission, check last date for application in the registration details\uf020\uf020<br />\r\nRULES<br />\r\n\uf020<br />\r\n\u25cf One team per college, with a minimum of 4 and maximum of 25 members per team.<br />\r\n\uf020<br />\r\n\u25cf A maximum of 8 teams can participate in the event.<br />\r\n\u25cf Time limit: 8 minutes including sound check<br />\r\n\u25cf 5% of the total marks shall be deducted for every extra minute, Sounds shall be cut off after 10 minutes<br />\r\n\u25cf Use of any accompanying instrument is strictly not allowed. Such use will result in disqualification<br />\r\n\u25cf Teams have to prepare either a medley or two pieces of their choice.<br />\r\n\u25cf Teams are supposed to mention the scale of the song at the beginning of their performances.<br />\r\n\uf020<br />\r\nJudging will be based on:</p>\r\n\r\n<p>\u25cf Blend, quality and tightness of harmonies and rhythm<br />\r\n\u25cf Interpretation of the piece<br />\r\n\u25cf Creativity<br />\r\n\u25cf Dynamics<br />\r\n\u25cf Pitch accuracy<br />\r\n\u25cf Arrangement</p>"}, {"name": "Swaranjali", "desc": "<p>Swaranjali is a classical music contest. Participants trained in the vocal and instrumental aspects of both Carnatic and Hindustani styles are invited to compete. (Instruments: violin, sitar, veena, flute, Hawaiian guitar, tabla, mridangam, ghatam, keyboard, harmonium, kanjira, sarangi and sarod.)<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual and group participants will be judged separately.<br />\r\nRULES<br />\r\n\uf0b7 Individual participation (Instrumentalists, mainly percussionists, who might accompany other participants during their performances, shall not be judged while accompanying but shall be judged based on their separate performance alone).<br />\r\no Participants will be judged in three categories:<br />\r\n\uf0a7 Vocal<br />\r\n\uf0a7 Instrumental (String and Wind)<br />\r\n\uf0a7 Instrumental (Percussion)<br />\r\no Participants will be awarded points under different criteria based on their performance including clarity of rendition, knowledge of the respective Raga and creativity.<br />\r\no Contestants for instrumental music are expected to bring their own instruments.<br />\r\no Time duration: 5 minutes (minimum) to 10 minutes (maximum). Exceeding the time limit of 10 minutes will invite deduction of points.<br />\r\no Improvisations like alaap, tans/kalpana swarams, jod/taanam will be given due merit.<br />\r\no Performance in any other style, including light music, will lead to disqualification.<br />\r\n\uf0b7 Group Participation<br />\r\no The maximum number of participants allowed in a group is 12 (excluding accompanying artists which can only be a maximum of 2).<br />\r\no Time duration: 5 minutes (minimum) to 10 minutes (maximum). Exceeding the time limit of 10 minutes will invite deduction of points.<br />\r\no Groups will be awarded points under different criteria based on their performance including synchronization, rendition of raga and creativity.<br />\r\no Performance in any other style, including light music, will lead to disqualification.</p>"}, {"name": "Drums Duel", "desc": "<p>This is an exciting challenge for all drummers to exhibit their skill and expertise on their instrument. It is a chance to play your dream solos, to jam on any base line, to battle one-on-one against other drummers: an open event for all with a sense of beat and passion for drumming.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf Participants must be full-time students enrolled at your school or university<br />\r\n\u25cf This event will take place in 3 rounds.<br />\r\no Round 1 &ndash; First round will be an elimination round where drummers will play a solo (of their choice) for 2-3 minutes.<br />\r\no Round 2 &ndash; In this round, the participants will jam on a track/base line played to them. The entry to round 3 will be solely based on this round&rsquo;s performance.<br />\r\no Round 3 &ndash; This round will be the duel. 8 participants. 2 participants at a time would have a face-off on drums. The winner would be decided by the judges.<br />\r\n\u25cf Drum sets and microphones will be provided. Participants are advised to get their drum-sticks for their own convenience.<br />\r\n\u25cf This competition will be judged by the professionals coming for Music Workshops.</p>"}, {"name": "Rap Wars", "desc": "<p>REGISTRATION<br />\r\n\uf020<br />\r\nPre-registration (includes video submission). Individual participation.<br />\r\n\uf020 Submit a 2-3 minute long video showcasing your practice routine/previous performances to pcr@bits-oasis.org<br />\r\n\uf0b7 Subject of the e-mail: &ldquo;&lt;College Name&gt; &lt;Event Name&gt; Oasis &rsquo;15 Video Submission&rdquo;\uf020<br />\r\n\uf020<br />\r\n\uf0b7 For last date for submission, check last date for application in the registration details\uf020<br />\r\n\uf020<br />\r\n\uf020<br />\r\n\uf020<br />\r\n\uf020<br />\r\n\uf020<br />\r\nRULES<br />\r\n\u25cf The languages allowed for rapping are Hindi, English and Punjabi.<br />\r\n\u25cf The rap should not exceed 4 minutes. Exceeding the time limit will lead to immediate disqualification.<br />\r\n\u25cf The rap should be an original work of the individual. No kind of plagiarism allowed. The person can use whatever beats he/she likes but the lyrics should be original.<br />\r\n\u25cf The rap should not contain vulgar words and direct slangs. However, puns, quips, paronomasia, double-meaning phrases and witticism are allowed.</p>"}, {"name": "Free Jam", "desc": "<p>REGISTRATION<br />\r\nRegistration will be done on the spot.<br />\r\nRULES<br />\r\n\u25cf This is a non-competitive event.<br />\r\n\u25cf No restriction on number of participants performing.<br />\r\n\u25cf In case of any damage caused to the equipment, the parties involved will have to pay a fine, the amount of which shall be decided by Gurukul, depending on the extent of damage.<br />\r\n\u25cf In case of any disputes, Gurukul&#39;s decision will be final.</p>"}, {"name": "Rocktaves", "desc": "<p>Rocktaves is the annual semi-professional band competition of BITS Pilani. It is one of the most prestigious band competitions in India. For decades, Rocktaves has strived towards excellence, pioneering and redefining the fairly young and volatile Indian rock and metal scene. Rocktaves is, in fact, responsible for launching some of the biggest names in the Indian rock scene today; Parikrama, Prestorika, Them Clones, The Superfuzz and Euphoria are just some of the footnotes in this epic musical odyssey.<br />\r\nREGISTRATION<br />\r\nBands are shortlisted beforehand and only shortlisted bands will be invited to perform.</p>\r\n\r\n<p>RULES<br />\r\n\u25cf Bands will get 25 minutes on stage (including sound check).<br />\r\n\u25cf There will be no language restrictions on the entries.<br />\r\n\u25cf No registration fees will be charged and accommodation will be provided.<br />\r\n\u25cf The selection of teams will be the sole discretion of BITS-Pilani.<br />\r\n\u25cf The final decision regarding any matter lies in the hands of the organizers and judges and is absolutely binding.<br />\r\n\u25cf Professionals will be handling the judging of the event.<br />\r\n\u25cf Any team violating any of the above rules is subject to direct elimination.<br />\r\n\u25cf Professional sounds shall handle the event. Drum kits will be provided.</p>"}, {"name": "Axetacy", "desc": "<p>Axetacy is a solo guitar competition for both acoustic and electric guitarists.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf In the preliminary round, each participant will have 10 minutes on stage, including time for tuning, sound check etc. There is no restriction on the number of songs played.<br />\r\n\u25cf A basic sound setup will be provided.<br />\r\n\u25cf Participants are required to get their own guitars and patches/pedals/processors for the event. However if a guitar can be provided to a participant on the spot, it will be.<br />\r\n\u25cf Backing tracks are permitted in the preliminary stage, though not in the final round.<br />\r\n\u25cf The final round will be a face-off style event, where two contestants will be pitted against each other.<br />\r\n\u25cf A professional judge will be present.<br />\r\n\u25cf The decision of the judge and the organisers will be final and absolutely binding.</p>"}, {"name": "Antakshari", "desc": "<p>REGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf A team will consist of 2 contestants.<br />\r\n\u25cf No song can be repeated in any round.<br />\r\n\u25cf In case a team sings a song incorrectly, or is unable to complete the &quot;mukhra&rdquo; or forgets a word of the song etc., the rest of the teams can raise an objection to it.<br />\r\n\u25cf Antakshari will have multiple rounds. The rules of each round will be specified on the spot.</p>"}, {"name": "Exposure", "desc": "<p>REGISTRATION<br />\r\nOnline on-spot registration. Individual participation.<br />\r\nRULES:<br />\r\n\u25cf There are 4 categories under which entries can be given &ndash;<br />\r\no Dramatic Portraits &ndash; Who doesn&rsquo;t enjoy dramatic moments in life? So why not capture all those through our lens? Click any portrait that has a lot of drama in it.<br />\r\no Contradictions &amp; Odd One Out &ndash; Click anything which has contradictory things or representations or something that has something different from rest of the part of the photo.<br />\r\no People at Work &ndash; No work is big or small. Click photos of people engrossed in their work.<br />\r\no Motion and Time &ndash; Click photos that freezes time, displays motion.<br />\r\n\u25cf Title your snaps and categorize them under one of the above.<br />\r\n\u25cf The entry must be an original work of the participant.<br />\r\n\u25cf A single participant can give Maximum Two entries for EACH category. It is NOT compulsory to participate in all four categories.<br />\r\n\u25cf The entries must be submitted by the midnight of 29th October 2015, in the format given below:<br />\r\no Name -<br />\r\nTitle_Category_StudentName_CollegeName_PhoneNo.jpeg<br />\r\no Minimum size &ndash; 1200 * 800 pixels<br />\r\no Aspect ratio - 3:2<br />\r\n\u25cf Entries are to be sent to photog.bits@gmail.com with the subject &ldquo;Exposure&rdquo;. The entry should clearly mention which category it belongs to. Kindly make sure there are no watermarks or captions on your entries.</p>"}, {"name": "Wordwars", "desc": "<p>Words were never so much fun. In this crazy maze of words, letters, phrases and sentences come hone your skills and revamp your enthusiasm of discovering simple things.<br />\r\nA fun event, comprising of different forms of word games, from riddles to spellathons and simple spell checks, will remind you of days when learning was observing, remembering relating to someone or something.<br />\r\nNo prerequisites. No conditions. If you have ever had a face-off with,<br />\r\n&ldquo;ka, kha, ga&ldquo; (apart from A B C D) enter and rekindle that lost flame of fun with words.<br />\r\nREGISTRATION<br />\r\nOnline on-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf This is an online event.<br />\r\n\u25cf Questions will be uploaded online.<br />\r\n\u25cf Individual participation<br />\r\n\u25cf Only when a question has been answered will the next question pop-up.</p>"}, {"name": "Down The Line", "desc": "<p>Come and check out your hand at penmanship in &lsquo;Down The Line&rsquo; and orchestrate yourself to glory. Think you can pen down your thoughts well, or ever been good at cooking up lies on spot? Has story making ever been your passion? Are you good at spreading funny rumours? Have you just loved writing those 500 word essays in school? Then this is the event for you!<br />\r\nThe main idea behind of this event is to<br />\r\nbuild<br />\r\na<br />\r\nstory<br />\r\naround a given set of constraints (which<br />\r\nshall<br />\r\nbe<br />\r\ngiven<br />\r\non https://www.facebook.com/fmac4bitspilani).<br />\r\nREGISTRATION<br />\r\nOnline on-spot registration. Individual participation.<br />\r\nRULES:<br />\r\n\uf0b7 A theme or else a particular set of phrases or words will be given around which a story should be written by the participant.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 There should be clear reference to the constraints in the story.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 The most relevant script which is also cooked up very well will be given the prize.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 Submission is only open during Oasis.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 The winners will be declared at the end of Oasis.\uf020<br />\r\n\uf0b7 Each entry must have the contact details sent along with it in this format.\uf020<br />\r\n\uf020<br />\r\nName, Email Address, Contact No.<br />\r\n\uf020<br />\r\n\uf0b7 Plagiarism is highly discouraged and any instance of it will lead to immediate disqualification.\uf020<br />\r\n\uf020<br />\r\n\uf0b7 The entries should be submitted to fmac.oasispilani@gmail.com\uf020</p>"}, {"name": "10 Seconds to Fame", "desc": "<p>If the brevity of short videos inspires your creativity, make a vine. Vine - A short video, usually 5 to 10 seconds long of compiled clips of random stuff.<br />\r\nREGISTRATION<br />\r\nOnline on-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf The video must not exceed the time limit of 5-10 seconds. Entries violating this rule will be disqualified.<br />\r\n\u25cf The video can be hand-shot/animated stop motion. Use of editing and any other effects is allowed.<br />\r\n\u25cf Team size- 3 (including the cast)<br />\r\n\u25cf The decision of the judges will be final and binding.<br />\r\n\u25cf<br />\r\nThe<br />\r\nYouTube links of the video are to be mailed<br />\r\nto fmac.oasis@gmail.com.<br />\r\n\u25cf<br />\r\nThe mail must have the following details.<br />\r\no<br />\r\nTeam name<br />\r\no Team details (Name of participant, college name, contact number)</p>"}, {"name": "Movie Quiz", "desc": "<p>REGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf Maximum of three members per team<br />\r\n\u25cf A preliminary round will be conducted first, followed by a final round of shortlisted teams.<br />\r\n\u25cf The decisions of the quizmaster shall be final and binding.</p>"}, {"name": "Filmy Muqabla", "desc": "<p>REGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf Questions asked will be related only to Bollywood.<br />\r\n\u25cf Each team will consist of 2 members.<br />\r\n\u25cf It is a multiple round event.<br />\r\n\u25cf Rules as per the specific round will be announced on spot.</p>"}, {"name": "Oasis Quiz", "desc": "<p>REGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf Teams of three will have to answer the written elimination.<br />\r\n\u25cf Any number of teams from a college can participate.<br />\r\n\u25cf The top six/eight teams, selected on the basis of their scores in the elimination, will compete in the finals.</p>"}, {"name": "Entertainment Quiz", "desc": "<p>REGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf Teams of 2.<br />\r\n\u25cf Qualify the written preliminary to battle it out in the final rounds and be crowned.</p>"}, {"name": "Music Quiz", "desc": "<p>REGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf Teams should consist of three participants.<br />\r\n\u25cf No restriction on the number of teams from a college.<br />\r\n\u25cf Prelims and finals will be conducted.<br />\r\n\u25cf The top six teams in the preliminary round participate in the finals. This number might increase at the quizmaster&rsquo;s discretion.<br />\r\n\u25cf The decision of the quizmaster is final and binding.</p>"}, {"name": "Theme Quiz", "desc": "<p>REGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf This is a thematic quiz based on the theme of this Oasis &ndash; &lsquo;Around the world in 96 hours&rsquo;.<br />\r\n\u25cf Teams of three.<br />\r\n\u25cf Teams will have to go through a written preliminary round of screening, and six to eight teams will qualify to the final round.<br />\r\n\u25cf The decisions of the quizmaster shall be final and binding.</p>"}, {"name": "Triathlon", "desc": "<p>The Triathlon is back in a bigger, better avatar. Triathlon, as the name suggests, is an amalgamation of three tasks involving wits, courage and presence of mind.<br />\r\nThis edition of Triathlon takes you for a ride of the &lsquo;90s.<br />\r\n1) M : &lsquo;90s, but in minimal avatar.<br />\r\n2) Treasure Hunt : Dragon. Ball. Z.<br />\r\n3) That &lsquo;90s Tune : Relive the &lsquo;90s with the famous soundtracks.<br />\r\nBe it racking your brains or performing challenging tasks, you have to be on your toes to nail this one. Coordinating with your team will be key, if you are planning to ace Triathlon.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES</p>\r\n\r\n<p>\u25cf 6-10 people per team<br />\r\n\u25cf The three rounds of the event may be simultaneously running, requiring teams to split up.<br />\r\n\u25cf Based on their performance, teams will be awarded points for each round.<br />\r\n\u25cf The team with the maximum cumulative score shall be declared the winner.</p>"}, {"name": "Spell Bee", "desc": "<p>Pit your skills at etymology, word-play and obviously spelling, against the best in the business<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf Round-1 will be a written elimination round based on spelling. Participants are to spell words based on its pronunciation and meaning. Etymology and a sentence in which the word is used will be given, if required. Each correct&nbsp;answer in Round-1 will fetch 1 point. Star-marked words will be used to resolve ties.<br />\r\n\u25cf The successive rounds will be based on various aspects of spelling and knowledge of the language. The points system for these rounds will be announced at the time of the event.<br />\r\n\u25cf The event host has the final say in all issues regarding correctness of answers and marking.<br />\r\n&nbsp;</p>"}, {"name": "Suicide at Midnight", "desc": "<p>Here&rsquo;s a chance to plan an impeccable suicide, and document ones&rsquo; uniqueness and innovation. The participant has to invent reasons and excuses, suicide techniques and draft a will bequeathing his/her precious belongings. The idea is to form the perfect suicide note.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf Write an innovative suicide note in the stipulated time.<br />\r\n\u25cf Entries will be judged on wit, creativity, grammar and clarity by the event hosts.<br />\r\n\u25cf In case of any disputes, the decision of the Oasis English Press shall be binding.</p>"}, {"name": "Taboo", "desc": "<p>Test yourself with all the words you can dredge up as you try to convey the given word without using words that are Taboo.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf The event will be conducted in multiple rounds, with the first one being an elimination round. The first will be a classic taboo round, allowing 2 turns per team; each turn lasting 2 minutes. Every successful word guessed will fetch you +1 point, while uttering any of the words deemed &lsquo;Taboo&rsquo; will result in a negative point (-1). Passing a word (choosing not to guess) will result in neither gaining nor losing points<br />\r\n(0). Star-marked words will be used to resolve ties.<br />\r\n\u25cf The host(s) may select between 8-10 teams for the next round, as per their discretion.<br />\r\n\u25cf The points-system for the successive rounds will be announced at the venue.<br />\r\n\u25cf The event host&rsquo;s decision is final and binding on all issues relating to marking and answers.</p>"}, {"name": "Cocktail", "desc": "<p>More than knowledge of the Hindi language, Cocktail demands wit and presence of mind. A scintillating excogitation of Funtakshari, Random Speaking and unconventional Debating with flavours of<br />\r\n&ldquo;Order from Chaos&rdquo; &sbquo; &ldquo;Bol Hindi Bol&rdquo;, &ldquo;Tol Mol ke Bol&rdquo;, &ldquo;Bujho to<br />\r\nJaane&rdquo; and much more; it promises to remind you of your school days.<br />\r\nWith seven thrilling rounds challenging finalists to explore new flavoured funtakshari, this event will surely leave both the participants and the audience brimming with fun and excitement. Enjoy the Cocktail!<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf Elimination will be done through a written round, where the participants will have to face a cocktail of word games and unconventional quizzing.<br />\r\n\u25cf Teams of 2<br />\r\n\u25cf Maximum 8 teams in the Final<br />\r\n\u25cf Finals will begin with 8 teams, chosen after an elimination round, out of which one will emerge as winner.</p>"}, {"name": "Speed Scrabble", "desc": "<p>Speed Scrabble is a fun new take on the traditional board game. Finish your move as quickly as possible to stay in the game.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf Format of the Tournament: King of the Hill<br />\r\n\u25cf No. of Rounds: 4 Knockout Rounds + Final. All rounds to be played on real Scrabble sets.<br />\r\n\u25cf All NSA Tournament Scrabble rules apply, including loss of turn penalty for incorrect challenges. Winner\\Qualifier to be decided by spread in case of a tie. Reduced time limit of 6 minutes per player.<br />\r\n\u25cf Dictionary to be followed: SOWPODS and COLLINS OFFICIAL SCRABBLE DICTIONARY (computer versions of both).<br />\r\n\u25cf Time Frame: A game is expected to last 15 minutes. On 10 boards, 40 participants play head-to-head in two batches (time=90 min). Subsequent rounds are played in similar fashion till we&rsquo;re down to two finalists (time=45min). Final will be a full-length scrabble game (time=50min).</p>"}, {"name": "Wordstock", "desc": "<p>Think you can play with the English language? This event is sure to make you eat your words with a handful of crosswords, trixies and anagrams taking you to your wits&#39; end. Crack &#39;em and be crowned the king of words.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf Teams of two.<br />\r\n\u25cf No restriction on number of teams per college.<br />\r\n\u25cf Prelims and finals will be conducted.</p>"}, {"name": "Poetry, Slam!", "desc": "<p>Because Allen Ginsberg says, &ldquo;Slam! Into the Mouth of the Dharma!&rdquo;<br />\r\nBecause Gregory Corso says, &ldquo;Why do you want to hang out with us old guys? If I was young, I&rsquo;d be going to the Slam!&rdquo;<br />\r\nBecause Bob Kaufman says, &ldquo;Each Slam / a finality.&rdquo;<br />\r\nBob Holman, from &ldquo;Praise Poem for Slam: Why Slam Causes Pain and Is a Good Thing&rdquo;<br />\r\nCome battle your lyrical genius through spoken word.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf There will be three rounds in total.<br />\r\n\u25cf Round I - Thematic<br />\r\n\u25cb Contestants will be provided a palette of five to seven themes.<br />\r\n\u25cb They pick one and perform for three minutes.<br />\r\n\u25cb Themes will be announced on the website later on.<br />\r\n\u25cf Round II - Stipulations<br />\r\n\u25cb This will take place six or seven hours after the first round.<br />\r\n\u25cb Constraints will be put on metre, rhyme, length, verse and other parameters.<br />\r\n\u25cb Participant will be judged on how well he/she performs with the given restrictions.<br />\r\n\u25cf Round III &ndash; Form<br />\r\no Contestants are given a set form, e.g. Quatrain, Ballad, Sonnet, Ghazal, Couplet etc. and time to research about it.<br />\r\no The participant will have to perform in the given form and will be judged on the same.</p>"}, {"name": "Treasure Hunt", "desc": "<p>Hidden messages, obscure ciphers, elaborate maps, buried cryptexes, encrypted audios and much more awaits you in your search for that hidden gold or the crazy murderer. In the dead of night, beware of cloaked figures, laughing skulls, thundering drums or momentary signals in the sky as you find yourself embroiled in this vintage treasure hunt. So gather ye wits, pencils and running shoes,o villagers! Clues shall guide, fiends shall misguide and treasure shall beckon and whisper through the chilly air, &ldquo;Finders keepers!&rdquo;.<br />\r\nREGISTRATION<br />\r\nOn-spot registration.<br />\r\nRULES<br />\r\nNo limit on team size, but make sure you&rsquo;re the first ones to reach<br />\r\nthe treasure.</p>"}, {"name": "Beg, Borrow, Steal", "desc": "<p>You think you&rsquo;ve got everything you need? Think Again. Prepare to use all your resources and brainpower to fetch the most ridiculous, unfathomable and extraordinary things possible from a list of items given to you. Each object on this list earns you specified points and the team with the highest points wins. Beware. This event is a race against time as much as the other teams.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf Find as many items on the list as possible within the given time period.<br />\r\n\u25cf No limit on team size.</p>"}, {"name": "OASIS Reading Session(ORS)", "desc": "Let your thoughts flow into words and your imagination run wild with this chance to let the poet within you take lead. As they say, a picture speaks a thousand words.\r\nWell, slightly less than a thousand, perhaps.\r\n\r\nRegistration\r\n\r\nPre-registration (includes text submission). Individual participation.\r\nSubmit an original poem to\u00a0poetryclub.bits@gmail.com.\r\nSubject of the e-mail: \u201c<College Name> <Event Name> Oasis \u201915 Poem Submission\u201d\r\nFor last date for submission, check last date for application in the registration details.\r\nRules\r\n\r\nThe languages allowed for are English and Hindi.\r\nThe poem should be an original work of the individual. No plagiarism allowed.\r\nOf the\u00a0received entries, 10 deserving entries will be selected.\r\nSelected individuals will be invited to recite their poems and will be judged for their recitation skills.\r\nJudges' decision will be final."}, {"name": "Protest Out Of Waste", "desc": "<p><strong>REGISTRATION</strong><br />\r\nOn the spot registration. Team of 2-5.</p>\r\n\r\n<p><br />\r\n<strong>GAMEPLAY</strong><br />\r\nThe participants will be given waste material like wrappers, plastic bottles, used paint boxes, etc. at the expense of the tokens they earn along with basic stuff like chart paper, glue, scissor, etc. which will be provided at no cost. Using this, they have to make an environment related art piece.</p>\r\n\r\n<p>At the start of the game, each team will be divided in two groups. One team, consisting of two members will try to collect as many tokens as possible for the team to buy the paid materials. The other members will be busy making the collage using these materials.</p>\r\n\r\n<p>There will be numerous competitions for the two-member team earning tokens. This will include quizzing, mimicking, dancing, etc. which will be based on the theme &lsquo;Around the world in 96 hours&#39;. All this will be judged by the club members and the tokens would be provided accordingly. This will go on for an hour after which even these two members will go and join the rest of the team.</p>\r\n\r\n<p>In the remaining hour, the team building the most spectacular and meaningful piece of art wins. Also you will be given a sheet of paper to write the message that you wanted to depict through it.</p>\r\n\r\n<p><strong>RULES</strong></p>\r\n\r\n<p>Participants have to come in teams of 2-5.</p>\r\n\r\n<p>Some basic material will be provided by the club while the participants have to earn the rest.</p>\r\n\r\n<p>Time limit is 2 hours.</p>\r\n\r\n<p>In case of discrepancy, decision of REC members will be final and abiding.</p>"}, {"name": "Movie Screening", "desc": "<p>Movie Screening</p>"}, {"name": "Gaming", "desc": "<p>Gaming</p>"}, {"name": "Adventure Zone", "desc": "<p>Adventure Zone</p>"}, {"name": "Zorbing", "desc": "<p>Zorbing</p>"}, {"name": "POEM-A-PIC", "desc": "<p>Let your thoughts flow into words and your imagination run wild with this chance to let the poet within you take lead. As they say, a picture speaks a thousand words.<br />\r\nWell, slightly less than a thousand, perhaps.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf Participants are required to write a poem on a picture/set of pictures presented to them at the beginning.<br />\r\n\u25cf This is strictly an individual event.<br />\r\n\u25cf A time of two hours will be given to complete the poem.<br />\r\n\u25cf Participants are required to bring a pen along with them.<br />\r\n\u25cf Judges&rsquo; decision will be final.</p>"}, {"name": "Mock Parliament", "desc": "<p>The event envisages at directing the attention of the youth to problems residing in our country and beyond, through a series of debates.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf Individual participation is required for this event.<br />\r\n\u25cf Round 1 is a general quiz testing the contestants on current affairs and general knowledge, mainly about Indian politics.<br />\r\n\u25cf Round 2 is a general discussion, an extempore where contestants are supposed to debate on the given topic.<br />\r\n\u25cf Round 3, a group discussion, aims to create a parliamentary environment where contestants are expected to give solutions for social and political problems via parliamentary debate among themselves.</p>"}, {"name": "Mister and Miss Oasis", "desc": "<p>REGISTRATION<br />\r\nMAMO requires pre-registration via the online form.<br />\r\nRULES<br />\r\nJudgment is based on the contestant&#39;s performance across multiple rounds that gauge talent, wit, fortitude and confidence.</p>"}, {"name": "BLAB", "desc": "<p>BLAB stands for BITS Language Aptitude Battle. The first round is a written round in which participants will have to fill a form consisting of questions that test how witty they are and how well they can react to given situations. In the second round 36 people get selected and are divided into six groups. There will be elimination rounds in which<br />\r\none person from each group will proceed to the finals. The rounds of the final depend on the conductor.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf Participants must speak without any hesitation, slurs or grammatical errors. At any such hesitation or error, the other participants can buzz and start speaking.<br />\r\n\u25cf The first person to buzz gets to speak.<br />\r\n\u25cf For every second you speak, you get 1 point.<br />\r\n\u25cf For every correct interruption you get around 5 points (at the discretion of the conductor).<br />\r\n\u25cf Every round goes on for around one minute: JAM (Just a Minute) sessions.<br />\r\nJUDGING CRITERIA<br />\r\n\u25cf Point system depending on the time one speaks for and the number of justified interruptions.</p>"}, {"name": "Bol Baby Bol", "desc": "<p>REGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf In the first round each contestant will be given a topic. He will get 10 seconds to think at the end of which he has to speak for 1 min.<br />\r\n\u25cf Other contestants can make objections during the speech on the following points in his delivered words:<br />\r\n\u25aa Hesitation, Stammering, Laughter while speaking or change of pace<br />\r\n\u25aa Abrupt stop while speaking, pausing frequently<br />\r\n\u25aa Repeating one&rsquo;s or others&rsquo; views or thoughts<br />\r\n\u25aa Commenting unnecessarily on the topic itself<br />\r\n\u25aa Dramatizing content<br />\r\n\u25aa Unclear Speech, inappropriate pronunciation<br />\r\n\u25aa Grammatical errors<br />\r\n\u25aa Deviating from the topic<br />\r\n\u25aa Wasting time, using nonsensical words<br />\r\n\u25aa Starting before or after a signal from the moderator<br />\r\n\u25aa Decisions will be taken as per moderator discretion.<br />\r\n\u25cf At the time of objection, the clock will be stopped.<br />\r\n\u25cf This will be followed by other rounds like MAD AD where participants will have to show creativity as well as oratory skills in making a radio advertisement of a product provided to them.<br />\r\n\u25cf Other rounds will be disclosed on the spot.</p>"}, {"name": "Oasis Debate", "desc": "<p>The Oasis Debate is an annual 2-on-2 parliamentary style freshers&rsquo; debating event.<br />\r\nREGISTRATION<br />\r\nPre-registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf The order of the speeches of each of the speakers in the 2x2 Parliamentary Debate is as follows:<br />\r\n\u25cf The following four speeches are termed as &lsquo;Substantial Speeches&rsquo;<br />\r\n\u25cf Prime Minister: 7 minutes, 20 seconds<br />\r\n\u25cf Leader of Opposition: 7 minutes, 20 seconds<br />\r\n\u25cf Deputy Prime Minister: 7 minutes, 20 seconds<br />\r\n\u25cf Deputy Leader of Opposition: 7 minutes, 20 seconds<br />\r\n\u25cf Interrogation Round: 2 minutes per speaker<br />\r\n\u25cf Reply Speeches: 4 minutes, 20 seconds<br />\r\n\u25cf Points of Information can be addressed to each of the speakers during their substantial speeches between the first and sixth minute.<br />\r\n\u25cf Every debate will have a 3-panel adjudication panel, where the final decision will be made on the basis of the majority judgement.<br />\r\n\u25cf All debaters and adjudicators must be present for each and every round of the tournament to qualify for the next levels.</p>"}, {"name": "Bluffmaster", "desc": "<p>REGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf The game will begin with six contestants chosen after an elimination round.<br />\r\n\u25cf Every question asked will have 10 probable answers in decreasing order of popularity. The answers are divided into three ranges based on betting limit.<br />\r\n\u25cf Every contestant has to think of an answer and decide what range the answer might lie in. If the contestant is correct in both respects, he gets the points he bets for otherwise he loses half of it.<br />\r\n\u25cf There will be a vote out after every round in which contestants have to eliminate the Bluffmaster. A bluffmaster will be chosen randomly after each elimination.<br />\r\n\u25cf The better you bluff, the longer you last.</p>"}, {"name": "Contrasto", "desc": "<p>The most colourful combination in the world is black and white &ndash; it contains all colours and at the same time excludes all. A Sketching Competition for all enthusiasts. Get your grey cells working and convert a white paper into a masterpiece!<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Individual participation.<br />\r\nRULES<br />\r\n\u25cf Each participant will be provided with a drawing sheet- half of it being black and the other half being white, along with other inventories. He/she will have to draw something related to a certain theme using black and white charcoal/chalk provided to him/her.<br />\r\n\u25cf The participant will also have to give a written explanation about the art work in around 50 words.<br />\r\n\u25cf The judging will be based on beauty, skill, clarity of explanation and relevance to the theme.</p>"}, {"name": "Splash", "desc": "<p>Every face is a blank canvas and the true expressions are portrayed only when it is tinted in the right shade. Participate in splash, and unfurl your painted counterpart. Because art enables us to find&nbsp;ourselves and lose ourselves at the same time. Get ready to be lost in this face and hand painting competition.<br />\r\nREGISTRATION<br />\r\nOn-spot registration. Team participation.<br />\r\nRULES<br />\r\n\u25cf Maximum team size is 4.<br />\r\n\u25cf This is a face/hand painting event.<br />\r\n\u25cf One member of the team has to volunteer to get his/her face and hands painted by the rest of the team.<br />\r\n\u25cf All inventories will be provided.<br />\r\n\u25cf The painting must be based on one of the themes announced during the event and must be finished within the stipulated time.<br />\r\n\u25cf At the end of the time duration, the participants must explain the work to the judges.<br />\r\n\u25cf Judgement will be based on creativity, detailing, painting&nbsp;skills and the overall outlook of the art work.</p>"}, {"name": "Exposure Exhibition", "desc": "<p>The art of writing with light is a bewitching one&hellip; be it those black and white images that freeze time in altogether another dimension or those vivid splashes of colour that overflow with life.<br />\r\nExposure, a state of the art photography exhibition conducted by Photography Club of BITS Pilani, offers a guided tour of the photographic world, right from technological aspects, camera equipment, photography techniques and latest trends in the field. And all this is done without sacrificing the aesthetic or artistic value of the photographs.<br />\r\nThe theme for this year&rsquo;s exhibition is Central Perk, inspired by<br />\r\nF.R.I.E.N.D.S. and various themed panels on topics like Zodiac Signs,<br />\r\nLife&rsquo;s Purpose, Music, and Superheroes etc. will be displayed along with a &ldquo; &lsquo;Around the World &rdquo; theme based Central Panel.<br />\r\nThe exhibition will take place at 2204.</p>"}]

    eventDesc.map(function(i,e){
      if(eventName.toLowerCase()==i.name.toLowerCase()){
        console.log();
        $('.eventTitle h4').html(i.name);
        $('.eventText').html(i.desc);
      }
    });
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
       },500);
       $('.eventText,.eventTitle').hide();
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
          },500);

          $('.eventText,.eventTitle').show();
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
       },500);
    }


    else{

      $('.eventData').animate({
         width:evPageVal
       },500);
       $('.eventText,.eventTitle').show();
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
    var eventDesc=[];
    $(".events-trigger").click(function(){
      // ajax
      data=[{"category": "Dance", "events": [{"is_kernel": true, "short_desc": "A group dance event", "id": 1, "name": "Choreo"}, {"is_kernel": true, "short_desc": "Group dance event - showcasing the freestyle form.", "id": 7, "name": "Street Dance"}, {"is_kernel": false, "short_desc": "Classical dance contest", "id": 40, "name": "Tandav"}, {"is_kernel": true, "short_desc": "A solo dance event.", "id": 48, "name": "Desert Duel"}, {"is_kernel": true, "short_desc": "A group dance competition.", "id": 54, "name": "Razzmatazz"}]}, {"category": "Drama", "events": [{"is_kernel": true, "short_desc": "The fashion show at oasis 2015.", "id": 2, "name": "FashP"}, {"is_kernel": true, "short_desc": "Portray a play, pertaining to a theme", "id": 3, "name": "Mime"}, {"is_kernel": true, "short_desc": "Click here to know more", "id": 5, "name": "Stage Play"}, {"is_kernel": true, "short_desc": "Nukkad Natak to propagate social and political messages", "id": 6, "name": "Street Play"}, {"is_kernel": true, "short_desc": "A movie making competition.", "id": 36, "name": "Metamorphosis"}, {"is_kernel": false, "short_desc": "Bring out the actor in you on a real stage", "id": 38, "name": "Apt to Act"}, {"is_kernel": false, "short_desc": "", "id": 69, "name": "Femina Miss India"}]}, {"category": "Music", "events": [{"is_kernel": true, "short_desc": "Musical extravaganza from the Indian heartland", "id": 8, "name": "Tarang"}, {"is_kernel": false, "short_desc": "Ttalent hunt for the most versatile singer", "id": 9, "name": "Andholika"}, {"is_kernel": true, "short_desc": "An A\\u2019capella competition", "id": 10, "name": "Pitch Perfect"}, {"is_kernel": false, "short_desc": "A classical music event - both Carnatic and Hindustani styles", "id": 39, "name": "Swaranjali"}, {"is_kernel": false, "short_desc": "Calling all drummers to exhibit their expertise.", "id": 49, "name": "Drums Duel"}, {"is_kernel": true, "short_desc": "Set free the rapper in you.", "id": 50, "name": "Rap Wars"}, {"is_kernel": false, "short_desc": "A non-competitive event open for all music lovers.", "id": 51, "name": "Free Jam"}, {"is_kernel": true, "short_desc": "Come experience the battle of bands.", "id": 60, "name": "Rocktaves"}, {"is_kernel": false, "short_desc": "Solo guitar competition for acoustic and electric guitarists.", "id": 62, "name": "Axetacy"}, {"is_kernel": false, "short_desc": "The old Indian tradition in a new flavour.", "id": 66, "name": "Antakshari"}]}, {"category": "online", "events": [{"is_kernel": false, "short_desc": "Photography event", "id": 11, "name": "Exposure"}, {"is_kernel": false, "short_desc": "Different forms of word games", "id": 18, "name": "Wordwars"}, {"is_kernel": false, "short_desc": "Build a story around a given set of constraints", "id": 35, "name": "Down The Line"}, {"is_kernel": false, "short_desc": "Make a vine.", "id": 37, "name": "10 Seconds to Fame"}]}, {"category": "Quizzing", "events": [{"is_kernel": false, "short_desc": "Click here to know more", "id": 12, "name": "Movie Quiz"}, {"is_kernel": false, "short_desc": "Bollywood Quiz", "id": 30, "name": "Filmy Muqabla"}, {"is_kernel": false, "short_desc": "Click here to know more", "id": 31, "name": "Oasis Quiz"}, {"is_kernel": false, "short_desc": "Self Explanatory!", "id": 46, "name": "Entertainment Quiz"}, {"is_kernel": false, "short_desc": "Test your knowledge of music", "id": 58, "name": "Music Quiz"}, {"is_kernel": false, "short_desc": "Test your knowledge of the world.", "id": 65, "name": "Theme Quiz"}]}, {"category": "Misc", "events": [{"is_kernel": false, "short_desc": "", "id": 13, "name": "Triathlon"}, {"is_kernel": false, "short_desc": "Spell it out", "id": 14, "name": "Spell Bee"}, {"is_kernel": false, "short_desc": "Plan an impeccable suicide", "id": 15, "name": "Suicide at Midnight"}, {"is_kernel": false, "short_desc": "Convey the given word without using words that are Taboo", "id": 16, "name": "Taboo"}, {"is_kernel": false, "short_desc": "Test knowledge of the Hindi language", "id": 17, "name": "Cocktail"}, {"is_kernel": false, "short_desc": "A fun new take on the traditional board game", "id": 32, "name": "Speed Scrabble"}, {"is_kernel": false, "short_desc": "Be the king of words.", "id": 33, "name": "Wordstock"}, {"is_kernel": false, "short_desc": "Battle of poetry", "id": 41, "name": "Poetry, Slam!"}, {"is_kernel": false, "short_desc": "Solve the clues, take the treasure", "id": 42, "name": "Treasure Hunt"}, {"is_kernel": false, "short_desc": "Find as many items on the list within the given time", "id": 44, "name": "Beg, Borrow, Steal"}, {"is_kernel": false, "short_desc": "Showcase your poetry skills.", "id": 52, "name": "OASIS Reading Session(ORS)"}, {"is_kernel": false, "short_desc": "Make it out of waste..!!", "id": 68, "name": "Protest Out Of Waste"}, {"is_kernel": false, "short_desc": "", "id": 71, "name": "Movie Screening"}, {"is_kernel": false, "short_desc": "", "id": 72, "name": "Gaming"}, {"is_kernel": false, "short_desc": "", "id": 73, "name": "Adventure Zone"}, {"is_kernel": false, "short_desc": "", "id": 74, "name": "Zorbing"}]}, {"category": "Oratory", "events": [{"is_kernel": false, "short_desc": "Attend to problems residing in our country and beyond", "id": 29, "name": "Mock Parliament"}, {"is_kernel": false, "short_desc": "Be the Mister and Miss Oasis 2015.", "id": 43, "name": "Mister and Miss Oasis"}, {"is_kernel": false, "short_desc": "Short for BITS Language Aptitude Battle", "id": 57, "name": "BLAB"}, {"is_kernel": false, "short_desc": "Test your speaking skills against the others.", "id": 63, "name": "Bol Baby Bol"}, {"is_kernel": true, "short_desc": "Annual 2-on-2 parliamentary style freshers\\u2019 debating event.", "id": 64, "name": "Oasis Debate"}, {"is_kernel": false, "short_desc": "Do you have it in you to be a master at bluff ?", "id": 67, "name": "Bluffmaster"}]}, {"category": "Art", "events": [{"is_kernel": false, "short_desc": "Sketching Competition for art enthusiasts.", "id": 53, "name": "Contrasto"}, {"is_kernel": false, "short_desc": "Face and hand painting competition.", "id": 55, "name": "Splash"}, {"is_kernel": false, "short_desc": "A guided tour of the photographic world.", "id": 61, "name": "Exposure Exhibition"}]}];


      // data.map(function(i){
      //   console.log('CATEGORY '+i.category);
      //   i.events.map(function(i2){
      //     console.log(i2.name)
      //   })
      // });
      $.ajax({
        type:'GET',
        url:'http://bits-oasis.org/2016/events/summary/',
        success:function(response){
          data=response;
          console.log('data',data,response);
        }
      });
      $.ajax({
        type:'GET',
        url:'http://bits-oasis.org/2016/events/description/',
        success:function(response){
          eventDesc=response;
          console.log('desc',eventDesc,response);
        }
      });
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
        var eventDataSheet = document.getElementsByClass('eventData')[0];
        if(!(innerEve.contains(ev.target)||eventDataSheet.contains(ev.target))){
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
        $('.eventText,.eventTitle').show();

      $('.eventData').animate({
         width:'0%'
       },500);
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
