var movementStrength = 200;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
var px = 0;
$("#box").mousemove(function(e){
    var pageX = e.pageX - ($("#box").width()/ 2);
    var pageY = e.pageY - ($("#box").height() / 2);
    var newvalueX = width * pageX * -1;
    var newvalueY = height * pageY * -1;
    var mypos = $("#nigger").css("background-position").split(" ")
	var thenum = parseInt(mypos[0], 10);
	var thenumb = parseInt(mypos[1], 10);
	if(Math.abs(px - e.pageX) > 5)
	{
		newvalueX =   thenum + newvalueX;
		if (newvalueX>128) newvalueX=128;
		newvalueY =  thenumb ;	
   		var str = newvalueX + "px "+ newvalueY + "px";	
   		$('#box').css({
							  '-webkit-transform' : 'translateX(' + newvalueX + 'px)',
							  '-moz-transform'    : 'translateX(' + newvalueX + 'px)',
							  '-ms-transform'     : 'translateX(' + newvalueX + 'px)',
							  '-o-transform'      : 'translateX(' + newvalueX + 'px)',
							  'transform'         : 'translateX(' + newvalueX + 'px)'
							});
   		px = e.pageX;
	}
    console.log($("#box").width()); 

});
