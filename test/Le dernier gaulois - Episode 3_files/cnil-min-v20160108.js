(function($){"use strict";var isMobile;$(window).load(function(){if(1!=getCookie("cookie-cnil")){isMobile=getParamFromCurrentUrl("mobile","cnil");cnil_web(isMobile);cnil_mobile(isMobile);setCookie("cookie-cnil",1)}});function setCookie(cookieName,cookieValue){var cookieDate=new Date;cookieDate.setTime(cookieDate.getTime()+86400*1e3*365);var cookieExpires="expires="+cookieDate.toGMTString();document.cookie=cookieName+"="+cookieValue+"; "+cookieExpires+";path=/"}function getCookie(cookieName){var cookieSearch=cookieName+"=",cookieList=document.cookie.split(";"),cookieNb=cookieList.length;for(var i=0;i<cookieNb;i++){var cookieItem=cookieList[i].trim();if(cookieItem.indexOf(cookieSearch)==0){return cookieItem.substring(cookieSearch.length,cookieItem.length)}}return""}function getParamFromCurrentUrl(param_name,JsScriptId){var jsurl="";var script=document.getElementsByTagName("script");var sizeScripts=script.length;while(sizeScripts--){if(script[sizeScripts].src.indexOf(JsScriptId)>0){jsurl=script[sizeScripts].src;break}}var param_value=decodeURI((RegExp(param_name+"="+"(.+?)(&|$)").exec(jsurl)||[,null])[1]);if(param_value==="null"){return false}else{return true}}function fireEvent(firedEvent){if(typeof bean!=="undefined"){bean.fire(document,firedEvent)}}function addCnilMobileOnTop(){var textHeight=$("#cookie-cnil-mobile-text").height()+20;if(textHeight<53){textHeight=53}$("#cookie-cnil-mobile-box").height(textHeight);$(".html-cnil-mobile").attr("style","padding-top: "+textHeight+"px !important")}function clean_mobile(){$("html").removeAttr("style");$("html").removeClass("html-cnil-mobile");$("#cookie-cnil-mobile-box").remove()}function clean_web(){if($(".metanav").hasClass("cnil")){$(".metanav").removeClass("cnil")}$("html").removeAttr("style");$("html").removeClass("html-cnil");$("#cookie-cnil-box").remove()}function cnil_mobile(isMobile){if(1!=getCookie("cookie-cnil")){$("html").addClass("html-cnil-mobile");$("body").prepend('<div id="cookie-cnil-mobile-box"><div id="cookie-cnil-mobile"><p id="cookie-cnil-mobile-text">En poursuivant votre navigation sur ce site, vous acceptez l\'utilisation de cookies pour vous proposer des publicités ciblées adaptées à vos centres d\'intérêts. <a href="http://www.francetv.fr/confidentialite#gestion-cookies" target="_blank">Pour en savoir plus et paramétrer les cookies</a></p><a id="cookie-cnil-mobile-close" href="javascript:undefined;"></a></div></div>');if(false===isMobile){$("#cookie-cnil-mobile-box").hide()}else{addCnilMobileOnTop()}}$("#cookie-cnil-mobile-close").click(function(){clean_mobile();clean_web();setCookie("cookie-cnil",1);return false});var width=$(window).width();$(window).resize(function(){if($(this).width()!=width&&1!=getCookie("cookie-cnil")){width=$(this).width();if($("#cookie-cnil-mobile-box").is(":visible")){addCnilMobileOnTop()}else{$(".html-cnil-mobile").attr("style","padding-top: 84px !important")}}});fireEvent("cnilMobileLoaded")}function cnil_web(isMobile){if(1!=getCookie("cookie-cnil")){$(".metanav").addClass("cnil");$("html").addClass("html-cnil");$(".metanav").before('<div id="cookie-cnil-box"><div id="cookie-cnil"><p>En poursuivant votre navigation sur ce site, vous acceptez l\'utilisation de cookies pour vous permettre de partager du contenu via les boutons de partage de réseaux sociaux,<br>pour vous proposer des publicités ciblées adaptées à vos centres d\'intérêts et pour nous permettre de mesurer l\'audience. <a href="http://www.francetv.fr/confidentialite#gestion-cookies" target="_blank">Pour en savoir plus et paramétrer les cookies</a><a id="cookie-cnil-close" href="javascript:undefined;"></a></p></div></div>');if(true===isMobile){$("#cookie-cnil-box").hide()}}$("#cookie-cnil-close").click(function(){clean_mobile();clean_web();setCookie("cookie-cnil",1);return false});if(false===isMobile){fireEvent("cnilWebLoaded")}}})(jQuery);