
$('.contacts-trigger').click(function() {
  // $('#contacts-wrapper').fadeIn('400');
	startContact();
});

var w = window.innerWidth;
var h = window.innerHeight;
function startContact(){
    $("#sq1").click(function(){
    	$("#info").fadeIn(500);
    });
    $("#sq2").click(function(){
    	$("#info").fadeIn(500);
    });
    $("#sq3").click(function(){
    	$("#info").fadeIn(500);
    });
    $("#sq4").click(function(){
    	$("#info").fadeIn(500);
    });
    $("#sq5").click(function(){
    	$("#info").fadeIn(500);
    });
    $("#sq6").click(function(){
    	$("#info").fadeIn(500);
    });
    $("#sq7").click(function(){
    	$("#info").fadeIn(500);
    });
    $("#sq8").click(function(){
    	$("#info").fadeIn(500);
    });
    $("#sq9").click(function(){
    	$("#info").fadeIn(500);
    });
    $("#sq10").click(function(){
    	$("#info").fadeIn(500);
    });
    $("#close").click(function(){
    	$("#info").fadeOut(500);

    });
    if(w > 700){
		$("#sq1").addClass("down");
		setTimeout(function(){
		$("#sq2").addClass("right");
		},250);
		setTimeout(function(){
		$("#sq3").addClass("up");
		},500);
		setTimeout(function(){
		$("#sq4").addClass("left");
		},750);
		setTimeout(function(){
		$("#sq5").addClass("down");
		},1000);
		setTimeout(function(){
		$("#sq6").addClass("up");
		},1250);
		setTimeout(function(){
		$("#sq7").addClass("right");
		},1500);
		setTimeout(function(){
		$("#sq8").addClass("left");
		},1750);
		setTimeout(function(){
		$("#sq9").addClass("up");
		},2000);
		setTimeout(function(){
		$("#sq10").addClass("down");
		},2250);
		setTimeout(function(){
		$("#sq11").addClass("right");
		},2500);		
		setTimeout(function(){
		$("#sq12").addClass("left");
		},2750);				
	}
	else{
		$("#sq1").addClass("down");
		setTimeout(function(){
		$("#sq2").addClass("up");
		},250);
		setTimeout(function(){
		$("#sq3").addClass("down");
		},500);
		setTimeout(function(){
		$("#sq4").addClass("up");
		},750);
		setTimeout(function(){
		$("#sq5").addClass("down");
		},1000);
		setTimeout(function(){
		$("#sq6").addClass("up");
		},1250);
		setTimeout(function(){
		$("#sq7").addClass("right");
		},1500);
		setTimeout(function(){
		$("#sq8").addClass("up");
		},1750);
		setTimeout(function(){
		$("#sq9").addClass("down");
    		var div = document.getElementById('sp9'),
        	deg = 180;		
		    div.style.webkitTransform = 'rotate('+deg+'deg)'; 
		    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
		    div.style.msTransform     = 'rotate('+deg+'deg)'; 
		    div.style.oTransform      = 'rotate('+deg+'deg)'; 
		    div.style.transform       = 'rotate('+deg+'deg)'; 		
		},2000);
		setTimeout(function(){
		$("#sq10").addClass("up");
		},2250);
		setTimeout(function(){
		$("#sq11").addClass("down");
		},2500);		
		setTimeout(function(){
		$("#sq12").addClass("up");
		},2750);		
	}
};


$('#contacts-wrapper').click(function(ev){
	var impEle = document.getElementById('sq1');
	var box = document.getElementById('info');
	if(box.offsetWidth > 0 && box.offsetHeight > 0){
	}
	else{
		if($("#sq12").hasClass("left") || $("#sq12").hasClass("up") )
		{
			if(!impEle.contains(ev.target)){
				$(this).fadeOut();
				if(w > 700){
					$("#sq1").removeClass("down");
					$("#sq2").removeClass("right");
					$("#sq3").removeClass("up");
					$("#sq4").removeClass("left");
					$("#sq5").removeClass("down");
					$("#sq6").removeClass("up");
					$("#sq7").removeClass("right");
					$("#sq8").removeClass("left");
					$("#sq9").removeClass("up");
					$("#sq10").removeClass("down");
					$("#sq11").removeClass("right");
					$("#sq12").removeClass("left");										
				}
				else{
					$("#sq1").removeClass("down");
					$("#sq2").removeClass("up");
					$("#sq3").removeClass("down");
					$("#sq4").removeClass("up");
					$("#sq5").removeClass("down");
					$("#sq6").removeClass("up");
					$("#sq7").removeClass("right");
					$("#sq8").removeClass("up");
					$("#sq9").removeClass("down");
					$("#sq10").removeClass("up");
					$("#sq11").removeClass("down");
					$("#sq12").removeClass("up");										
			    }		
		    }

	    }		
	}

});
