
$('.contacts-trigger').click(function() {
  // $('#contacts-wrapper').fadeIn('400');
	startContact();
});

var w = window.innerWidth;
var h = window.innerHeight;
function startContact(){
		console.log('hi');
    $("#sq1").click(function(){
    	$("#info").fadeIn(500);
    	lbpop();
    });
    $("#sq2").click(function(){
    	$("#info").fadeIn(500);
    	lbpop();
    });
    $("#sq3").click(function(){
    	$("#info").fadeIn(500);
    	lbpop();
    });
    $("#sq4").click(function(){
    	$("#info").fadeIn(500);
    	lbpop();
    });
    $("#sq5").click(function(){
    	$("#info").fadeIn(500);
    	lbpop();
    });
    $("#sq6").click(function(){
    	$("#info").fadeIn(500);
    	lbpop();
    });
    $("#sq7").click(function(){
    	$("#info").fadeIn(500);
    	lbpop();
    });
    $("#sq8").click(function(){
    	$("#info").fadeIn(500);
    	lbpop();
    });
    $("#sq9").click(function(){
    	$("#info").fadeIn(500);
    	lbpop();
    });
    $("#sq10").click(function(){
    	$("#info").fadeIn(500);
    	lbpop();
    });
    $("#info").click(function(){
    	$("#info").fadeOut(500);
    });
    if(w > 700){
		$("#sq1").addClass("down");
		setTimeout(function(){
		$("#sq2").addClass("right");
		},500);
		setTimeout(function(){
		$("#sq3").addClass("up");
		},1000);
		setTimeout(function(){
		$("#sq4").addClass("left");
		},1500);
		setTimeout(function(){
		$("#sq5").addClass("down");
		},2000);
		setTimeout(function(){
		$("#sq6").addClass("up");
		},2500);
		setTimeout(function(){
		$("#sq7").addClass("right");
		},3000);
		setTimeout(function(){
		$("#sq8").addClass("left");
		},3500);
		setTimeout(function(){
		$("#sq9").addClass("up");
		},4500);
		setTimeout(function(){
		$("#sq10").addClass("down");
		},5000);
	}
	else{
		$("#sq1").addClass("down");
		setTimeout(function(){
		$("#sq2").addClass("up");
		},500);
		setTimeout(function(){
		$("#sq3").addClass("down");
		},1000);
		setTimeout(function(){
		$("#sq4").addClass("up");
		},1500);
		setTimeout(function(){
		$("#sq5").addClass("down");
		},2000);
		setTimeout(function(){
		$("#sq6").addClass("right");
		},2500);
		setTimeout(function(){
		$("#sq7").addClass("down");
		},3000);
		setTimeout(function(){
		$("#sq8").addClass("up");
		},3500);
		setTimeout(function(){
		$("#sq9").addClass("down");
		},4500);
		setTimeout(function(){
		$("#sq10").addClass("up");
		},5000);
	}
};

function lbpop(){
		setTimeout(function(){
		$("#i1").fadeIn(500);
		setTimeout(function(){
			$("#i5").fadeIn(500);
		},200);

		setTimeout(function(){
			$("#i9").fadeIn(400);
		},900);

		},500);
		setTimeout(function(){
		$("#i2").addClass("right");
		setTimeout(function(){
			$("#i6").addClass("right");
		},700);

		setTimeout(function(){
			$("#i10").addClass("right");
		},900);

		},1000);
		setTimeout(function(){
		$("#i3").addClass("left");
		setTimeout(function(){},200);
		$("#i7").addClass("left");
		setTimeout(function(){},200);
		$("#i11").addClass("left");
		},1500);
		setTimeout(function(){
		$("#i4").addClass("right");
		$("#i8").addClass("right");
		$("#i12").addClass("right");
		},2000);
		setTimeout(function(){
		$("#i1").hide();
		$("#i5").hide();
		$("#i9").hide();
		$("#i2").removeClass("right");
		$("#i6").removeClass("right");
		$("#i10").removeClass("right");
		$("#i3").removeClass("left");
		$("#i7").removeClass("left");
		$("#i11").removeClass("left");
		$("#i4").removeClass("right");
		$("#i8").removeClass("right");
		$("#i12").removeClass("right");
	    },3000);
}

function lbexit(){
		setTimeout(function(){
		$("#i1").fadeIn(500);
		setTimeout(function(){
			$("#i5").fadeIn(500);
		},200);

		setTimeout(function(){
			$("#i9").fadeIn(500);
		},400);

		},500);
		setTimeout(function(){
		$("#i2").addClass("right");
		setTimeout(function(){
			$("#i6").addClass("right");
		},700);

		setTimeout(function(){
			$("#i10").addClass("right");
		},900);

		},1000);
		setTimeout(function(){
		$("#i3").addClass("left");
		setTimeout(function(){},200);
		$("#i7").addClass("left");
		setTimeout(function(){},200);
		$("#i11").addClass("left");
		},1500);
		setTimeout(function(){
		$("#i4").addClass("right");
		$("#i8").addClass("right");
		$("#i12").addClass("right");
		},2000);
		setTimeout(function(){
		$("#i1").fadeOut(500);
		$("#i5").fadeOut(500);
		$("#i9").fadeOut(500);
		$("#i2").addClass("right");
		$("#i6").addClass("right");
		$("#i10").addClass("right");
		$("#i3").removeClass("left");
		$("#i7").removeClass("left");
		$("#i11").removeClass("left");
		$("#i4").removeClass("right");
		$("#i8").removeClass("right");
		$("#i12").removeClass("right");
	    },2500);
}


$('#contacts-wrapper').click(function(ev){
	var impEle = document.getElementById('sq1');
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
	}
	else{
		$("#sq1").removeClass("down");

		$("#sq2").removeClass("up");
		$("#sq3").removeClass("down");
		$("#sq4").removeClass("up");
		$("#sq5").removeClass("down");
		$("#sq6").removeClass("right");
		$("#sq7").removeClass("down");
		$("#sq8").removeClass("up");
		$("#sq9").removeClass("down");
		$("#sq10").removeClass("up");
	}
}
});
