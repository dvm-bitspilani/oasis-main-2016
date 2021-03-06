'use strict';

var fps = 60;
var last = 0;
var initialTextureOffset;
var canvas;
var gl;

var shaderProgram;

var aTextureCoord;
var aVertexPosition;
var uBGAspect;
var uInitialTextureOffset;
var uIsBuffer;
var uMVMatrix;
var uPMatrix;
var uSampler;
var uTextureOffset;

var backgroundTexture;
var backgroundImage;

var sampleTexture;
var sampleTextureFramebuffer;

var samplingScreenVertexPositionBuffer;
var samplingScreenTextureCoordBuffer;
var samplingScreenIndexBuffer;

var mainScreenVertexPositionBuffer;
var mainScreenTextureCoordBuffer;
var mainScreenIndexBuffer;

var aspect;
var onePixel;
var story=[
  {
    src:'img/noah',
    no:5,
  },
  {
    src:'img/moses',
    no:7,
  },
  {
    src:'img/mahabharat',
    no:8,
  },
  {
    src:'img/troy',
    no:7,
  },

]
var fakeScroll = document.getElementById('fakeScroll');
function getShader(gl, id) {
    var shaderScript = document.getElementById(id);
    if (!shaderScript) {
        return;
    }

    var str = '';
    var k = shaderScript.firstChild;
    while (k) {
        if (k.nodeType === 3) {
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (shaderScript.type === 'x-shader/x-fragment') {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type === 'x-shader/x-vertex') {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return;
    }

    return shader;
}



function webGLStart() {
setTimeout(function(){
  $(window).scrollTop(0);

},1000);

    canvas = document.getElementById('canvas');
    initWebGL(canvas);

    initProgram();

    initBackgroundTexture();
    initSampleTexture();

    initSamplingScreen();
    initMainScreen();


    onePixel = gl.getUniformLocation(shaderProgram, 'onePixel');

    scrollHandling();

    backgroundImage.addEventListener('load', function() {
        requestAnimationFrame(render);
    });
  //     var doc = document.body,
  // scrollPosition = doc.scrollTop,
  // pageSize = (doc.scrollHeight - doc.clientHeight),
  // percentageScrolled = Math.floor((scrollPosition / pageSize) * 100);
  // console.log('percentageScrolled '+window.pageYOffset*100/doc.scrollHeight);
  //  if (percentageScrolled >= 50){ // if the percentage is >= 50, scroll to top
  //   // gl.uniform2f(uTextureOffset, 0, 0.1);
  //  }

    };


var ringArr=[
  14.772,
  87.146,
160.746,
234.347,
310.4 ,

]

    var storyTextPos;
    setTimeout(function(){
      $('.storyWrap').hide();
      storyTextPos=[];
        storyTextPos.push(0);
      for(var i=1;i<=5;i++)
      storyTextPos.push(parseInt(fakeScroll.style.height)*(i/5));
      storyTextPos.push(fakeScroll.style.height-100);

    console.log(storyTextPos);

    $('.slide').click(function(){
      var sNo=$(this).attr('slide');
      // window.scrollTo(0,storyTextPos[sNo-1]);
      $('html,body').animate({
       scrollTop: storyTextPos[sNo-1]
     }, 800);
    })

    },1000);


function scrollHandling(){
  var offset = 0;

  var lastScrollTop = 0;

  window.addEventListener('scroll', function(e) {
    if(isNaN(offset)){
      offset=0;
    }
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

    offset-=(st-lastScrollTop)/parseInt(fakeScroll.style.height);
    // offset -= (lastScrollTop-st)*1/(0.93*parseInt(fakeScroll.style.height));
    gl.uniform2f(uTextureOffset, 0,offset);

    // console.log(st,offset,aspect,st*aspect);
    // console.log(canvas.width , canvas.height,backgroundImage.width , backgroundImage.height);

    clearTimeout( $.data( this, "scrollCheck" ) );
    $.data( this, "scrollCheck", setTimeout(function() {
      console.log('stop');
      $("#storyWrap").css({"-webkit-filter": "blur(0px)","filter": "blur(0px)" })

    }, 250) );

var j;
    for(var i=0;i<5;i++)
      if(Math.abs(window.pageYOffset-storyTextPos[i])<50){
        // if(st-lastScrollTop>0){
        //   j=i+1
        // }else {
        //   j=i-1;
        // }
        $('.storyContentWrap').css({
          top:parseInt(storyTextPos[j])-(window.innerHeight/10)+'px'
        });
        $('.storyWrap').fadeIn();;
        $('#currentRing').attr('cy',ringArr[i]);
        console.log('hi',window.pageYOffset);
      }
      lastScrollTop = st;

});




}


function initWebGL(canvas) {
    gl = canvas.getContext('webgl');

    gl.clearColor(0, 0, 0, 1);
}


function initProgram() {
    var fragmentShader = getShader(gl, 'fragment-shader');
    var vertexShader = getShader(gl, 'vertex-shader');

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(shaderProgram));
        return;
    }

    gl.useProgram(shaderProgram);

    aVertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
    aTextureCoord = gl.getAttribLocation(shaderProgram, 'aTextureCoord');
    gl.enableVertexAttribArray(aVertexPosition);
    gl.enableVertexAttribArray(aTextureCoord);

    uBGAspect = gl.getUniformLocation(shaderProgram, 'uBGAspect');
    uIsBuffer = gl.getUniformLocation(shaderProgram, 'uIsBuffer');
    uInitialTextureOffset = gl.getUniformLocation(shaderProgram, 'uInitialTextureOffset');
    uMVMatrix = gl.getUniformLocation(shaderProgram, 'uMVMatrix');
    uPMatrix = gl.getUniformLocation(shaderProgram, 'uPMatrix');
    uSampler = gl.getUniformLocation(shaderProgram, 'uSampler');
    uTextureOffset = gl.getUniformLocation(shaderProgram, 'uTextureOffset');
}


function initBackgroundTexture() {
    backgroundImage = new Image();
    var sNo= window.location.hash.charAt(1);
    backgroundImage.src = storyArr[sNo-1];
    backgroundImage.addEventListener('load', function () {
        /* use TEXTURE0 for backgroundTexture */
        backgroundTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, backgroundTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, backgroundImage);

        gl.bindTexture(gl.TEXTURE_2D, null);
    });
}


function initSampleTexture() {
    initSampleTextureFramebuffer();

    /* use TEXTURE1 for sampleTexture */
    sampleTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, sampleTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, sampleTextureFramebuffer.width, sampleTextureFramebuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    initSampleTextureRenderbuffer();

    gl.bindTexture(gl.TEXTURE_2D, null);
}


function initSampleTextureFramebuffer() {
    sampleTextureFramebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, sampleTextureFramebuffer);
    sampleTextureFramebuffer.width = sampleTextureFramebuffer.height = 1024;

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

var kernels = {
  gaussianBlur: [
  0.045, 0.122, 0.045,
  0.122, 0.332, 0.122,
  0.045, 0.122, 0.045
],
}
function initSampleTextureRenderbuffer() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, sampleTextureFramebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, sampleTexture, 0);

    var sampleTextureRenderbuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, sampleTextureRenderbuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, sampleTextureFramebuffer.width, sampleTextureFramebuffer.height);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, sampleTextureRenderbuffer);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
}


function initSamplingScreen() {
    var x1, y1, x2, y2;
    samplingScreenVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, samplingScreenVertexPositionBuffer);
    x1 = -1;
    y1 = -1;
    x2 = x1 + 2;
    y2 = y1 + 2;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        x1, y1,
        x2, y1,
        x2, y2,
        x1, y2,
    ]), gl.STATIC_DRAW);
    samplingScreenVertexPositionBuffer.itemSize = 2;
    samplingScreenVertexPositionBuffer.numItems = 4;

    samplingScreenTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, samplingScreenTextureCoordBuffer);
    x1 = 0;
    y1 = 0;
    x2 = x1 + 1;
    y2 = y1 + 1;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      x1, y1,
      x2, y1,
      x2, y2,
      x1, y2,
    ]), gl.STATIC_DRAW);
    samplingScreenTextureCoordBuffer.itemSize = 2;
    samplingScreenTextureCoordBuffer.numItems = 4;

    samplingScreenIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, samplingScreenIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
        0, 1, 2,    0, 2, 3,
    ]), gl.STATIC_DRAW);
    samplingScreenIndexBuffer.itemSize = 1;
    samplingScreenIndexBuffer.numItems = 6;
}


function initMainScreen() {
    var x1, y1, x2, y2;
    mainScreenVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, mainScreenVertexPositionBuffer);
    x1 = -1;
    y1 = -1;
    x2 = x1 + 2;
    y2 = y1 + 2;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        x1, y1,
        x2, y1,
        x2, y2,
        x1, y2,
    ]), gl.STATIC_DRAW);
    mainScreenVertexPositionBuffer.itemSize = 2;
    mainScreenVertexPositionBuffer.numItems = 4;

    mainScreenTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, mainScreenTextureCoordBuffer);
    x1 = 0;
    y1 = 0;
    x2 = x1 + 1;
    y2 = y1 + 1;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      x1, y1,
      x2, y1,
      x2, y2,
      x1, y2,
    ]), gl.STATIC_DRAW);
    mainScreenTextureCoordBuffer.itemSize = 2;
    mainScreenTextureCoordBuffer.numItems = 4;

    mainScreenIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mainScreenIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
        0, 1, 2,    0, 2, 3,
    ]), gl.STATIC_DRAW);
    mainScreenIndexBuffer.itemSize = 1;
    mainScreenIndexBuffer.numItems = 6;

    initMVPMatrices();
}


function initMVPMatrices() {
    var mvMatrix = mat4.create();
    mat4.fromTranslation(mvMatrix, [0, 0, -1]);
    gl.uniformMatrix4fv(uMVMatrix, false, mvMatrix);

    var pMatrix = mat4.create();
    mat4.ortho(pMatrix, -1, 1, -1, 1, .1, 100);
    gl.uniformMatrix4fv(uPMatrix, false, pMatrix);
}


function render(HRTimestamp) {
    requestAnimationFrame(render);

    if (HRTimestamp - last < 1000 / fps) {
        return;
    }
    last = HRTimestamp;

    resize();
    drawSamplingScreen();
    drawMainScreen();
}


function resize() {
    if (canvas.width === canvas.clientWidth && canvas.height === canvas.clientHeight) {
        return;
    }

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    aspect = (canvas.width / canvas.height) / (backgroundImage.width / backgroundImage.height);
    // console.log(canvas.width , canvas.height,backgroundImage.width , backgroundImage.height);
    console.log(canvas.width);
    fakeScroll.style.height = canvas.width*(backgroundImage.height / backgroundImage.width) + 'px';
    gl.uniform1f(uBGAspect, aspect);

    initialTextureOffset = (1 - 1 / aspect) / 2;
    gl.uniform2f(uInitialTextureOffset, 0, initialTextureOffset);
    scrollHandling();
}


function drawSamplingScreen() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, sampleTextureFramebuffer);
    gl.viewport(0, 0, sampleTextureFramebuffer.width, sampleTextureFramebuffer.height);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.bindBuffer(gl.ARRAY_BUFFER, samplingScreenVertexPositionBuffer);
    gl.vertexAttribPointer(aVertexPosition, samplingScreenVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, samplingScreenTextureCoordBuffer);
    gl.vertexAttribPointer(aTextureCoord, samplingScreenTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindTexture(gl.TEXTURE_2D, backgroundTexture);
    gl.uniform1i(uIsBuffer, true);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, samplingScreenIndexBuffer);
    gl.drawElements(gl.TRIANGLES, samplingScreenIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);

    // gl.bindTexture(gl.TEXTURE_2D, sampleTexture);
    // gl.generateMipmap(gl.TEXTURE_2D);
    // gl.bindTexture(gl.TEXTURE_2D, null);
}


function drawMainScreen() {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.bindBuffer(gl.ARRAY_BUFFER, mainScreenVertexPositionBuffer);
    gl.vertexAttribPointer(aVertexPosition, mainScreenVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, mainScreenTextureCoordBuffer);
    gl.vertexAttribPointer(aTextureCoord, mainScreenTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindTexture(gl.TEXTURE_2D, sampleTexture);
    gl.uniform1i(uIsBuffer, false);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mainScreenIndexBuffer);
    gl.drawElements(gl.TRIANGLES, mainScreenIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}


// text-update

var storyContent={
  'moses':{
    'content':[
      'Lorem ipsum dolor sit amet, mundi ocurreret ei eum. Et principes omittantur vim',
      'nec ex alterum disputando dissentiunt. Putant accusata cu pro. Cibo omnium consulatu no nec.',
      'Posse definitionem id pri, cu fuisset omittam mediocrem qui. Sint moderatius ex qui.',
      ' Te quo alii iudico. Ridens interpretaris id duo, appetere expetenda constituam usu ad, ',
      ' sea alienum partiendo et. Mel alii adversarium et, velit constituam per et. '
    ],
      style:""
  },
  'noah':{
    'content':[
      'Sint tincidunt voluptatibus vim an, at pro verear conceptam, paulo petentium deseruisse',
      'cum ex. Sed at mundi aliquam consulatu. Sed ut inani nostro, mea no natum voluptaria.',
      ' Eos ut legere eripuit consectetuer. Luptatum tincidunt scribentur eu vis,',
      ' novum audiam euismod ex duo. Nam dolore constituam in, his ne brute disputando.',
      ' novum audiam euismod ex duo. Nam dolore constituam in, his ne brute disputando.'
    ],
    style:""
  }
}
