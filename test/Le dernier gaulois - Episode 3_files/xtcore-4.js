/***@licence*Copyright2014ATInternet,AllRightsReserved.*ATInternetTag4.6.2*/window.Xtconf={xt1:'.frgf.fr',xtLogDom:'.xiti.com/hit.xiti',xtfirst:false,xt2:'1',xt3:365,xt4sec:'20',xt4rss:'20',xt4epr:'20',xt4erec:'20',xt4adi:'20',xt4adc:'20',xt4al:'20',xtsds:'https://logs1238',xtsd:'http://logc238',xtsts:0,xtsite:function(x){return x},xtscript:'',xtpreview:false,xtnocookies:false,xtcode:'',xt46:'1',xt50:'1',xt48:'',xt54:false,xt58:false,xtdocl:false,xttredir:500,xtkwv:'xtmc',xtkwp:'xtnp',idcExp:397,idcType:'fixed'};
window.Xtcore=function(){function B(b){return"undefined"!==typeof b}function C(b){var a=typeof b;if("object"!==a||null===b)return"string"===a&&(b=encodeURIComponent('"'+b+'"')),String(b);var e,c,d=[],g=b&&b.constructor==Array;for(e in b)c=b[e],a=typeof c,b.hasOwnProperty(e)&&"function"!==a&&("string"===a?c=encodeURIComponent('"'+c.replace(/[^\\]"/g,'\\"')+'"'):"object"===a&&null!==c&&(c=C(c)),d.push((g?"":encodeURIComponent('"'+e+'":'))+String(c)));return(g?"[":"{")+String(d)+(g?"]":"}")}function na(b){return b.replace(/%3C/g,
"<").replace(/%3E/g,">").replace(/[<>]/g,"")}function n(b,a,e,c,d){a=0===d?a:encodeURIComponent(a);oa||(j.cookie=b+"="+a+";expires="+e.toGMTString()+";path=/"+c)}function m(b,f,e){var c;try{c=Q.location.href}catch(d){c=a.location.href}f=null===f||!B(f)?na(c.toLowerCase().replace(/%3d/g,"=")):f;if(0<f.indexOf(b+"=")){f=f.substr(1);b=f.substr(f.indexOf(b+"="));if(2!=e){if(1!=e)try{b=decodeURIComponent(b)}catch(g){b=unescape(b)}if(f=b.match(/(\[[^\]]*\])/g)){c="";for(var l=0,k=f.length;l<k;l++)c=f[l].substring(1,
f[l].length-1),b=b.replace(c,encodeURIComponent(c))}}f=b.indexOf("#");c=b.search(/&.[^&]+=/gi);c=-1==c?-1==f?b.length:f:0<f&&f<c?f:c;return 1==e?decodeURIComponent(b.substring(b.indexOf("=")+1,c)):2==e?b.substring(b.indexOf("=")+1,c):b.substring(b.indexOf("=")+1,c).replace("&","%26")}return null}function D(b,a,e,c){if((0===pa||3==pa||"C"!=b)&&"P"!=b)Ya&&"0"==Y&&"F"==b?(u=u.replace("&p="+m("p",u,2),""),u=u.replace("&s2="+m("s2",u),""),AT_hit.isPreviewOrPrerendering()||AT_hit.sendTag(b,null,null,a),
Ya=!1):AT_hit.sendTag(b,a);null!==e&&(B(e)&&"M"!=b)&&(""===c||null===c?j.location=e:window.open(e,"xfen","").focus())}function qa(b){b-=100*Math.floor(b/100);return 10>b?"0"+b:b}function R(b){return Math.floor(Math.random()*Math.pow(10,b))}var ra=this;ra.sentHits=[];var h=Xtconf.xt1,Za=Xtconf.xtscript,$a=window.xtLogDom=Xtconf.xtLogDom,wb=Xtconf.xtpreview,ab=Xtconf.xtfirst,oa=Xtconf.xtnocookies,bb=Xtconf.xtcode,Y=Xtconf.xt46,sa=Xtconf.xt50,cb=Xtconf.xt48,xb=Xtconf.xt54,yb=Xtconf.xt58,zb=Xtconf.xtdocl,
Ab=Xtconf.xt2,Bb=Xtconf.xt3;window.xttredir=Xtconf.xttredir;var db=Xtconf.xtkwv,eb=Xtconf.xtkwp,ta=[],y=[];y.sec=Xtconf.xt4sec;y.rss=Xtconf.xt4rss;y.epr=Xtconf.xt4epr;y.erec=Xtconf.xt4erec;y.adi=Xtconf.xt4adi;y.adc=Xtconf.xt4adc;y.al=Xtconf.xt4al;y.es=Xtconf.xt4epr;y.ad=Xtconf.xt4adi;var ua=[],Ya=!0,K=!1,va=null,a=window.xw=window,j=window.xd=document,s=navigator,Cb=window.xtv=a.xtczv?"4.6.2-"+a.xtczv:"4.6.2",h=window.xt1=a.xtdmc?";domain="+a.xtdmc:""!==h?";domain="+h:"",Q=a.xtnv?a.xtnv:
j,Db=window.xt7=a.xtsdi?a.xtsdi:a.xtsd?a.xtsd+$a:("https:"===j.location.protocol?Xtconf.xtsds:Xtconf.xtsd)+$a,Z=a.xtsts?a.xtsts:Xtconf.xtsts,$="";if(xb){var wa="";try{wa=Q.location.href}catch(ac){wa=a.location.href}var Eb=/#.*/,xa=null;try{xa=wa.match(Eb)[0]}catch(bc){xa=null}$=($=xa)?"&sta="+encodeURIComponent(na($)):""}"undefined"!==typeof window.ATTvTracking&&window.ATTvTracking.init(a.Xtconf);var fb=a.xtcustom?C(a.xtcustom):"",E=window.xt8=a.xtsite?a.xtsite:0,Fb=window.xt9=a.xtn2?"&s2="+a.xtn2:
"",Gb=window.xt8b=(0===E?"":"s="+E)+(0===Z?"":0===E?"sts="+Z:"&sts="+Z),aa=window.xtp=a.xtpage?a.xtpage:"",gb=a.xto_force?a.xto_force.toLowerCase():null,F="redirect"===E,Hb=a.xtdi?"&di="+a.xtdi:"",Ib=a.xtidp?"&idpays="+a.xtidp:"",Jb=a.xtidprov?"&idprov="+a.xtidprov:"",r=a.xtparam?a.xtparam:"",Y=a.xtnopage&&"1"===a.xtnopage?"0":Y,sa=a.xtergo&&"0"===a.xtergo?"0":sa,pa=a.scriptOnClickZone&&"1"===sa?a.scriptOnClickZone:0,Kb=""!==bb?"&code="+bb:"",ya=[],ba=[],S=[],ca=[],za=[],I=[];window.xt44=a.xtprod_load?
"&pdtl="+a.xtprod_load:"";a.addEventListener?a.addEventListener("unload",function(){},!1):a.attachEvent&&a.attachEvent("onunload",function(){});j.addEventListener?(j.addEventListener("keydown",function(){K=!0},!1),j.addEventListener("keyup",function(){K=!1},!1)):j.attachEvent&&(j.attachEvent("onkeydown",function(){K=!0}),j.attachEvent("onkeyup",function(){K=!1}));var Lb=a.roimt&&0>r.indexOf("&roimt",0)?"&roimt="+a.roimt:"",Mb=0>r.indexOf("&mc=",0)?a.xtmc?"&mc="+a.xtmc:m(db)?"&mc="+m(db):m("xtmc")?
"&mc="+m("xtmc"):"":"",Nb=m("xtcr")?"&mcrg="+m("xtcr"):"",Ob=a.xtac&&0>r.indexOf("&ac=",0)?"&ac="+a.xtac:"",Pb=a.xtat&&0>r.indexOf("&at=",0)?"&at="+a.xtat:"",hb=a.xtan&&0>r.indexOf("&an=",0)?"&an="+a.xtan:"",Qb=0>r.indexOf("&np=",0)?a.xtnp?"&np="+a.xtnp:m(eb)?"&np="+m(eb):m("xtnp")?"&np="+m("xtnp"):"":"",Rb=a.xtprm&&0>r.indexOf("&x",0)?a.xtprm:"",r=r+(Lb+Mb+Nb+Ob+(""!==hb?hb:Pb)+Qb+Rb+$),Aa="";try{Aa=top.document.referrer}catch(cc){try{Aa=Q.referrer}catch(dc){}}var da=screen,G=window.xt21=new Date,
ib=G.getTime()/36E5,p=window.xtf1=function(b,a){if(oa)return null;a=null!==a&&B(a)?a:"0";var e=RegExp("(?:^| )"+b+"=([^;]+)").exec(j.cookie)||null;if(e&&(e=na(e[1]),"1"!=a))try{e=decodeURIComponent(e)}catch(c){e=unescape(e)}return e};window.xt_addchain=function(b,a){var e=a?a:"abmv",c=!ta[e]?0:ta[e];c++;r+="&"+e+""+c+"="+b;ta[e]=c};"function"===typeof xt_adch&&xt_adch();window.wck=n;window.xtf3=m;window.xt_mvt=function(b,a,e,c,d){if(c)for(var g=1;g<c.length+1;g++)e+="&"+(d?d:"abmv")+g+"="+c[g-1];
D("","&p="+b+"&s2="+a+"&abmvc="+e+"&type=mvt")};window.xt_med=function(b,a,e,c,d,g,l,k){c="F"==b&&(null===c||!B(c))?l?"&stc="+C(l):"":"M"==b?"&a="+c+"&m1="+d+"&m2="+g+"&m3="+l+"&m4="+k:"&clic="+c+(l?"&stc="+C(l):"");D(b,"&s2="+a+"&p="+e+c,d,g)};if(ab=window.xtfirst=-1!=s.userAgent.indexOf("Safari")&&0>s.userAgent.indexOf("Chrome")||-1!=s.userAgent.indexOf("iPhone")||-1!=s.userAgent.indexOf("iPod")||-1!=s.userAgent.indexOf("iPad")||ab||a.xtidc||oa){var ea=a.xtidc,Ba=p("xtidc"),L="",L=ea?ea:Ba?Ba:(new Date).getTime()+
""+R(7);if("relative"==Xtconf.idcType||ea||!Ba&&!ea){var Ca=new Date;Ca.setTime(Ca.getTime()+864E5*Xtconf.idcExp);n("xtidc",L,Ca,h,1)}var jb=p("xtidc"),L=L+(!a.xtidc&&(null===jb||jb!=L)?"-NO":"")}window.xt_ad=function(b,f,e,c){D("AT","&atc="+b+"&type=AT&patc="+a.xtpage+"&s2atc="+a.xtn2+(c?"&stc="+C(c):""),f,e)};window.xt_adi=function(b,a,e){D("AT","&ati="+b+"&type=AT",a,e)};window.xt_adc=function(b,f,e,c,d){D("AT","&atc="+f+"&type=AT&patc="+a.xtpage+"&s2atc="+a.xtn2+(d?"&stc="+C(d):""));return AT_click.do_navig(b,
e,c?"_blank":null,!0)};window.xt_click=function(b,a,e,c,d,g,l,k){d=("F"==a&&(null===d||!B(d))?"":"&clic="+d)+(k?"&stc="+C(k):"");D(a,"&s2="+e+"&p="+c+d);return AT_click.do_navig(b,g,l?"_blank":null,!0)};window.xt_form=function(b,a,e,c,d,g,l){d=("F"==a&&(null===d||!B(d))?"":"&clic="+d)+(l?"&stc="+C(l):"");D(a,"&s2="+e+"&p="+c+d);return AT_click.do_submit(b,!0,g)};window.xt_rm=function(b,f,e,c,d,g,l,k,q,m,n,h,j,p){D(b,"&p="+e+"&s2="+f+"&type="+b+"&a="+c+"&m5="+n+"&m6="+h+(null!==d&&"0"!=d?"&"+d:"")+
(null!==l&&"pause"!=c&&"stop"!=c?"&m1="+l+"&"+k+"&m3="+q+"&m4="+m+"&m7="+j+"&m8="+p+"&prich="+a.xtpage+"&s2rich="+a.xtn2:"")+(null!==g&&"0"!=g&&null!==l?"&rfsh="+g:""));d=new Date;if(null!==g&&"0"!=g&&("play"==c||"play&buf=1"==c||"refresh"==c)){I[b]&&18E5<d.getTime()-I[b]&&(S[b]=0);if(("play"==c||"play&buf=1"==c)&&!S[b])S[b]=d.getTime()/1E3,ca[b]=parseInt(l),c=Math.floor(g),c=1500<c?1500:5>c?5:c,ya[b]=c,ba[b]=c,I[b]=!1;else if("refresh"==c&&("live"==h||!ca[b]||300<ca[b]&&2>100*ya[b]/ca[b]))c=I[b]?
za[b]:d.getTime()/1E3-S[b],5>100*ba[b]/(c+30)&&(ba[b]=5*((c+30)/100)),I[b]&&(I[b]=!1,S[b]=d.getTime()/1E3-za[b]),za[b]=c;ua[b]=a.setTimeout("xt_rm('"+b+"','"+f+"','"+e+"','refresh','0','"+g+"',null,'"+k+"','"+q+"','"+m+"','"+n+"','"+h+"')",1E3*ba[b])}else if(("pause"==c||"stop"==c)&&null!==ua)a.clearTimeout(ua[b]),"stop"==c?ya[b]=0:I[b]=d.getTime()};var Da=window.xtidpg=qa(G.getHours())+""+qa(G.getMinutes())+""+qa(G.getSeconds())+""+R(7),t=0,kb=0;window.xt16="";window.xt_addProduct=function(b,f,e,
c,d,g){t++;a.xt16+="&pdt"+t+"=";a.xt16+=b?b+"::":"";a.xt16+=f?f:"";a.xt16+=e?"&qte"+t+"="+e:"";a.xt16+=c?"&mt"+t+"="+c:"";a.xt16+=d?"&dsc"+t+"="+d:"";a.xt16+=g?"&pcode"+t+"="+g:""};window.xt_rd=R;window.xt_addProduct_v2=function(b,f,e,c,d,g,l,k,q){t++;a.xt16+="&pdt"+t+"=";a.xt16+=b?b+"::":"";a.xt16+=f?f:"";a.xt16+=e?"&qte"+t+"="+e:"";a.xt16+=c?"&mt"+t+"="+c:"";a.xt16+=d?"&mtht"+t+"="+d:"";a.xt16+=g?"&dsc"+t+"="+g:"";a.xt16+=l?"&dscht"+t+"="+l:"";a.xt16+=q?"&roimt"+t+"="+q:"";a.xt16+=k?"&pcode"+t+
"="+k:""};window.xt_addProduct_load=function(b,f,e){f&&(kb++,a.xt44+=1==kb?"&pdtl=":"|",a.xt44+=b?b+"::":"",a.xt44+=f,a.xt44+=e?";"+e:"")};"function"==typeof xt_cart?xt_cart():a.xt16="";window.xt_ParseUrl=function(b,a,e){AT_hit.sendTag(e?"F":"old",a)};window.xt_ParseUrl3=function(b,a,e,c,d){AT_hit.sendTag("&ati="==d?"AT":"PDT",a,null,"&type="+("&ati="==d?"AT":"PDT"))};window.AT_click={id:0,objs:[],elem:function(b,a,e,c,d,g,l,k){var q={};q.urlDest=d;q.type=b;q.n2=a;q.label=e;q.typeClick=c;q.target=
g;q.submit=!1!==d;q.redir=!B(l)?!0:l;q.xtcust=B(k)?"&stc="+C(k):"";return q},addListener:function(b,a,e){window.addEventListener?b.addEventListener(a,e,!1):window.attachEvent&&b.attachEvent("on"+a,e)},tag:function(b,a,e,c,d,g,l,k,q){if(b&&"function"==typeof b.setAttribute)this.addElem(b,a,e,c,d,g,l,k,q);else if("object"==typeof b)for(var m in b)b.hasOwnProperty(m)&&"function"==typeof b[m].setAttribute&&this.addElem(b[m],a,e,c,d,g,l,k,q)},addElem:function(a,f,e,c,d,g,l,k,m){this.id++;a.setAttribute("data-xtclickid",
this.id);this.objs[this.id]=this.elem(f,e,c,d,g,l,k,m);"FORM"!=a.nodeName?this.addListener(a,"click",this.on_click_submit):this.addListener(a,"submit",this.on_click_submit)},on_click_submit:function(a){try{var f=a.target||a.srcElement,e=f.getAttribute("data-xtclickid"),c={},d="",g=a.defaultPrevented,l=window.AT_click;if(!e)for(var k=f.parentNode;k;){if(k.getAttribute("data-xtclickid")){e=k.getAttribute("data-xtclickid");break}k=k.parentNode}e&&(c=l.objs[e],"AT"!=c.type?d+="&p="+c.label+("C"==c.type?
"&clic="+c.typeClick:""):"AT"==c.type&&(d+="&type=AT&atc="+c.label),d+=c.xtcust,D(c.type,"&s2="+c.n2+d),!g&&c.redir&&(a.preventDefault(),"FORM"!=f.nodeName?l.do_navig(f,c.urlDest,c.target):l.do_submit(f,null,c.submit)))}catch(m){}},do_navig:function(b,f,e,c){var d=null;if("A"!=b.nodeName)for(var g=b.parentNode;g;){if("A"==g.nodeName){d=g;break}g=g.parentNode}else d=b;if(d){if(d.target=e||b.target||"_self",d.href=f||b.href||d.href,!c||c&&!K)if(b=d.href.split('"').join('\\"'),0>d.href.indexOf("mailto:"))if("_self"==
d.target.toLowerCase()){if(setTimeout('self.location.href="'+b+'"',a.xttredir),c)return!1}else if("_top"==d.target.toLowerCase()){if(setTimeout('top.location.href="'+b+'"',a.xttredir),c)return!1}else if("_parent"==d.target.toLowerCase()){if(setTimeout('parent.location.href="'+b+'"',a.xttredir),c)return!1}else return!0;else if(setTimeout('AT_click.mail_to("'+b+'");',a.xttredir),c)return!1}else if(f||b.href)if(f=f?f:b.href,0>f.indexOf("mailto:"))if("_blank"==e)setTimeout('(xw.open("'+f.split('"').join('\\"')+
'","_blank")).focus();',1);else{if(setTimeout('self.location.href="'+f.split('"').join('\\"')+'"',a.xttredir),c)return!1}else if(setTimeout('AT_click.mail_to("'+f.split('"').join('\\"')+'");',a.xttredir),c)return!1;if(c)return K=!1,!0},do_submit:function(a,f,e){if(e&&(setTimeout(function(){a.submit()},500),f&&e))return!1},mail_to:function(a){window.location=a}};window.AT_hit={first:!0,referrer:("acc_dir"==m("xtref")?"":null!==m("xtref")?m("xtref"):"acc_dir"==p("xtref")?"":p("xtref")||Aa.replace(/[<>]/g,
"")||"").replace(/[<>]/g,"").substring(0,1600),parse:function(a,f,e,c){var d=[""];if(1600>=f.length)d[0]=f;else{a=AT_hit.first&&"F"==a?Da:Da.substring(0,6)+R(8);var g="",l="",k,q={};k=[];var h=0;0<=f.indexOf("&ref=")&&(g=f.substring(f.indexOf("&ref=")),f=f.replace(g,""));if(c)for(var n in c)if(c.hasOwnProperty(n)&&0<=f.indexOf("&"+n+"=")&&1600<(l=m(n,f,2)).length)f=f.replace("&"+n+"="+l,""),k=RegExp("["+c[n]+"]","gi"),q[n]=l.replace(/&/g,"%26").split(k);k=RegExp("["+e+"]","gi");k=f.split(k);for(var j in k)k.hasOwnProperty(j)&&
(1600>=d[h].length+k[j].length+1?d[h]+=""!==k[j]?"&"+k[j]:"":(d.push(""),h++,d[h]=1600>k[j].length?d[h]+(""!==k[j]?"&"+k[j]:""):d[h]+("&mherr=1&"+k[j].substring(0,1600))));for(var p in q)if(q.hasOwnProperty(p)){f="&"+p+"=";e=!1;n=q[p].length;for(j=0;j<n;j++)1600>=d[h].length+q[p][j].length+1?(e||(d[h]+=f,e=!0),d[h]+=""!==q[p][j]?q[p][j]+("stc"===p&&n-1===j?"":c[p]):""):(d.push(f),e=!0,h++,d[h]=1600>q[p][j].length?d[h]+(""!==q[p][j]?q[p][j]+("stc"===p&&n-1===j?"":c[p]):""):d[h]+("mherr=1"+c[p]))}g&&
(1600>=d[h].length+g.length||(d.push(""),h++),d[h]+=g);for(c=0;c<d.length;c++)d[c]="&mh="+(c+1)+"-"+d.length+"-"+a+d[c]}return d},sendTag:function(b,f,e,c){"undefined"!=typeof window.ATTvTracking&&window.ATTvTracking.update();var d=[];e=e||Sb+Gb;e+=a.xtfirst?"&idclient="+L:"";b=b||"F";f=f||u;f+=(c?c:"")+"&vtag="+Cb+AT_hit.localHour()+AT_hit.resolution()+"&rn="+(new Date).getTime();AT_hit.first&&"F"==b&&(f+=fb&&0>f.indexOf("&stc=")?"&stc="+fb:"",f+="&ref="+AT_hit.referrer.replace(/&/g,"$"));"C"===
b&&(f+="&pclick="+a.xtpage+"&s2click="+(a.xtn2?a.xtn2:""));d=AT_hit.parse(b,f,"&",{ati:",",atc:",",pdtl:"|",stc:",",dz:"|"});for(f=0;f<d.length;f++)AT_hit.loadImage(e+d[f]);AT_hit.first&&("F"==b&&""!==Za)&&AT_hit.loadFile("script",Za,!0,"text/javascript");"F"==b&&(AT_hit.first=!1)},loadImage:function(a){var f=new Image;f.src=a;ra.sentHits instanceof Array&&ra.sentHits.push(a);f.onload=function(){f.onload=null}},loadFile:function(a,f,e,c,d){a=document.createElement(a);a.type=c;a.async=e;a.src=f;(d||
document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(a,null)},localHour:function(a){a=a?a:new Date;return"&hl="+a.getHours()+"x"+a.getMinutes()+"x"+a.getSeconds()},resolution:function(){if(4<=parseFloat(s.appVersion))try{var a;a="undefined"!==typeof window.devicePixelRatio?window.devicePixelRatio:1;return"&r="+da.width*a+"x"+da.height*a+"x"+da.pixelDepth+"x"+da.colorDepth}catch(f){}return""},prerenderDisplaying:function(){AT_hit.first&&
(AT_hit.sendTag("F"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+aa+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):"")))},isPreviewOrPrerendering:function(){return window.navigator&&"preview"===window.navigator.loadPurpose&&-1!=s.userAgent.indexOf("Safari")&&0>s.userAgent.indexOf("Chrome")?(wb&&(AT_hit.sendTag("F",null,null,"&pvw=1"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+aa+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||
"")+"&pidt="+(a.xt_pageDate||""):""))),!0):"prerender"==j.webkitVisibilityState?(j.addEventListener("webkitvisibilitychange",AT_hit.prerenderDisplaying,!1),!0):!1}};if(0!==E||0!==Z||F){var T="";if(""!==cb){T=p("xtvid");T||(va=T=G.getTime()+""+R(6));var Ea=new Date;Ea.setMinutes(Ea.getMinutes()+30);n("xtvid",T,Ea,"",1)}window.xtvid=T;var lb=Xtconf.xtsite("xtor"),Fa=Xtconf.xtsite("xtdate"),mb=Xtconf.xtsite("xtocl"),Ga=Xtconf.xtsite("xtan"),Ha=Xtconf.xtsite("xtat"),U=Xtconf.xtsite("xtant"),J=m("xtor"),
Ia=m("xtdt"),v=m("xtan"),w=m("xtat"),Ja=m("an",r),Ka=m("at",r),nb=m("ac",r),ob=p(mb),La=p("xtgo"),Ma=p("xtord"),pb=p("xtvrn"),V=null!==ob?ob:"$",Tb="0"===La?Ma:null,Na=null!==La?La:"0",fa=null!==pb?pb:"$",qb=G.getTime()/6E4,W=null!==Ia&&(m("xts")==E||F)?30>qb-Ia&&0<=qb-Ia?"2":"1":Na,Ub="1"==Na?"&pgt="+Ma:"1"==W&&null!==J?"&pgt="+J:"",M=null!==gb?gb:null!==J&&"0"==W?J:!F?Tb:null,M=0>V.indexOf("$"+M+"$")||"$"==V?M:null,A="0"==W?M:"2"==Na?Ma:"2"==W?J:null,N,Oa;null!==A?(Oa=A.substring(0,A.indexOf("-")),
N=y[Oa]):N="1";if(null===N||!B(N))N=y.ad;null===v&&!F&&(v=p("xtanrd"));null===w&&!F&&(w=p("xtatrd"));var rb=p(Ga),sb=p(Ha),ga=p(U),z=new Date,x=window.xt29=new Date,Pa=new Date;F?z.setTime(z.getTime()+3E4):z.setTime(z.getTime()+864E5*N);Pa.setTime(Pa.getTime()+18E5);x.setTime(x.getTime()+864E5*Bb);var Qa=null!==v?v.indexOf("-"):0,Ra=null!==w?w.indexOf("-"):0,tb=null!==Ja?"":null!==v&&0<Qa?"&ac="+v.substring(0,Qa)+"&ant=0&an="+v.substring(Qa+1,v.length):null!==rb?"&anc="+rb+"&anct="+ga:"",Vb=null!==
Ka?"":null!==w&&0<Ra?"&ac="+w.substring(0,Ra)+"&ant=0&at="+w.substring(Ra+1,w.length):null!==sb?"&attc="+sb+"&anct="+ga:"",H=0>fa.indexOf("$"+E+"$")?"&vrn=1":"",Wb=null!==m("xtatc")&&null===m("atc",r)?"&atc="+m("xtatc"):"";""!==H&&n("xtvrn",141>fa.length?fa+E+"$":fa.substring(0,141),x,h,0);H+=null===M?"":"&xto="+M;H+=(""!==tb?tb:Vb)+Ub+Wb;null!==Ja?(n(Ga,nb+"-"+Ja,x,h,1),n(U,"1",x,h,1)):null!==v&&"1"!=ga&&(n(Ga,v,x,h,1),n(U,"0",x,h,1));null!==Ka?(n(Ha,nb+"-"+Ka,x,h,1),n(U,"1",x,h,1)):null!==w&&"1"!=
ga&&(n(Ha,w,x,h,1),n(U,"0",x,h,1));var Sa=p(lb),X=p(Fa),X=(/[a-zA-Z]/.test(X)?(new Date(X)).getTime()/36E5:parseFloat(p(Fa)))||(new Date).getTime()/36E5,Xb=0<=Math.floor(ib-X)?Math.floor(ib-X):0,H=H+(null===Sa?"":"&xtor="+Sa+"&roinbh="+Xb);if(F)n("xtgo",W,z,h,1),null!==J&&n("xtord",J,z,h,1),null!==v&&n("xtanrd",v,z,h,1),null!==w&&n("xtatrd",w,z,h,1),n("xtref",AT_hit.referrer?AT_hit.referrer.replace(/&/g,"$"):"acc_dir",z,h,0),a.xtloc&&(Q.location=a.xtloc);else{null!==A&&(0>V.indexOf("$"+encodeURIComponent(A)+
"$")||"$"==V)&&n(mb,V+A+"$",Pa,h,1);var ha=s.appName+" "+s.appVersion,O=ha.indexOf("MSIE"),P;0<=O?(P=parseInt(ha.substr(O+5)),O=!0):(P=parseFloat(s.appVersion),O=!1);var Yb=0<=ha.indexOf("Netscape"),Zb=0<=ha.indexOf("Mac"),Ta=0<=s.userAgent.indexOf("Opera"),ia="",ub="",Ua="",Va="";if(O&&5<=P&&!Zb&&!Ta&&!F)try{j.body.addBehavior("#default#clientCaps"),ia="&cn="+j.body.connectionType,ia+="&ul="+j.body.UserLanguage,j.body.addBehavior("#default#homePage"),ub=j.body.isHomePage(location.href)?"&hm=1":"&hm=0",
Va="&re="+j.body.offsetWidth+"x"+j.body.offsetHeight}catch(ec){}else 5<=P&&(Va="&re="+a.innerWidth+"x"+a.innerHeight);Yb&&4<=P||Ta?Ua="&lng="+s.language:O&&(4<=P&&!Ta)&&(Ua="&lng="+s.userLanguage);n("xtord","",G,h,1);if(null!==A&&(null===Sa||"1"==Ab))n(lb,A,z,h,1),n(Fa,G.getTime()/36E5,z,h,1);var $b=zb?"&docl="+encodeURIComponent(Q.location.href.replace(/&/g,"#ec#")):"",u=Fb+"&p="+aa+Hb+Ib+Jb+H+$b+Kb+r+ia+ub+Ua+"&idp="+Da,Wa=p("xtvalCZ",1);if(null!==Wa){var u=u+decodeURIComponent(Wa.replace(/%at1%/g,
"-").replace(/%at2%/g,"_").replace(/%at3%/g,".").replace(/%at4%/g,"!").replace(/%at5%/g,"~").replace(/%at6%/g,"*").replace(/%at7%/g,"'").replace(/%at8%/g,"(").replace(/%at9%/g,")")).replace("&c=","&current=").replace("&b=","&before=").replace("&a=","&after="),Xa=new Date;Xa.setTime(Xa.getTime()-36E5);n("xtvalCZ",Wa,Xa,h,1)}var Sb=window.Xt_id=Db+"?",ja=p("xtide");if(null!==A)switch(Oa.toLowerCase()){case "erec":case "epr":case "es":var ka=null;try{var la=A.match(/(\[[^\]]*\])|([^\-]+)|(-)/g),vb=0,
ma;for(ma in la)"-"==la[ma]&&vb++,5==vb&&"-"!=la[ma]&&(ka=la[ma])}catch(fc){ka=null}null!==ka&&(ja=ka,n("xtide",ja,x,"",1))}u+="&jv="+(s.javaEnabled()?"1":"0")+Va+xt16+(null!==ja?"&ide="+ja:"");va&&(u+="&lnk="+cb+"&vid="+va);"0"!=Y&&!AT_hit.isPreviewOrPrerendering()&&(AT_hit.sendTag("F"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+aa+(a.xt_pageID?"&pid="+a.xt_pageID+"&pchap="+(a.xt_chap||"")+"&pidt="+(a.xt_pageDate||""):"")))}}0<pa&&"function"==typeof xtNodesload&&(yb?a.addEventListener?
a.addEventListener("load",xtNodesload,!1):a.attachEvent&&a.attachEvent("onload",xtNodesload):xtNodesload())};window.attag=new Xtcore;
