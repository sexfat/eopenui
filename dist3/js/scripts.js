console.log('js load ok');

// $('.checkeds input').eq(0).prop('checked', true)






$(".btn_01").on('click', function () {
  $(this).siblings('.active').removeClass('active');
  $(".box01").addClass("on").fadeIn('slow').siblings('.on').removeClass('on');
  $('.submenu > div > div > input').prop('checked', false);
  $('.j-1').prop('checked', false);
  $('.submenu').css('display', 'none');
  $('.submenu').css('display', 'none');
  $('.submenu .none').css('display', 'none');

});

$(".btn_02").on('click', function () {
  $(this).siblings('.active').removeClass('active');
  $(".box02").addClass("on").fadeIn('slow').siblings('.on').removeClass('on');
  $('.j-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);
  $('.submenu').css('display', 'none');
  $('.submenu .none').css('display', 'none');
});

$(".btn_03").on('click', function () {
  $(this).siblings('.active').removeClass('active');
  $(".box03").addClass("on").fadeIn('slow').siblings('.on').removeClass('on');
  $('.j-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);
  $('.submenu').css('display', 'none');
  $('.submenu .none').css('display', 'none');
});


// =========
$('#inline-radio1').on('click', function () {
  $('.submenu:eq(0)').css('display', 'block').siblings('.submenu:not(0)').css('display', 'none');
  $('.submenu .none').css('display', 'none');
  $('.k-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);
})

$('#inline-radio2').on('click', function () {
  $('.submenu:eq(1)').css('display', 'block').siblings('.submenu:not(1)').css('display', 'none');
  $('.submenu .none').css('display', 'none');
  $('.k-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);

})
$('#inline-radio3').on('click', function () {
  $('.submenu:eq(2)').css('display', 'block').siblings('.submenu:not(2)').css('display', 'none');
  $('.submenu .none').css('display', 'none');
  $('.k-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);
})

$('#inline-radio4').on('click', function () {
  $('.submenu:eq(3)').css('display', 'block').siblings('.submenu:not(3)').css('display', 'none');
  $('.submenu .none').css('display', 'none');
  $('.k-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);
})

$('#inline-radio5').on('click', function () {
  $('.submenu:eq(4)').css('display', 'block').siblings('.submenu:not(4)').css('display', 'none');
  $('.submenu .none').css('display', 'none');
  $('.k-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);
})


$('#inline-radio6').on('click', function () {
  $('.submenu:eq(5)').css('display', 'block').siblings('.submenu:not(5)').css('display', 'none');
  $('.submenu .none').css('display', 'none');
  $('.k-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);
})


$('#inline-radio7').on('click', function () {
  $('.submenu:eq(6)').css('display', 'block').siblings('.submenu:not(6)').css('display', 'none');
  $('.submenu .none').css('display', 'none');
  $('.k-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);
})

$('#inline-radio8').on('click', function () {
  $('.submenu:eq(7)').css('display', 'block').siblings('.submenu:not(7)').css('display', 'none');
  $('.submenu .none').css('display', 'none');
  $('.k-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);
})

$('#inline-radio9').on('click', function () {
  $('.submenu:eq(8)').css('display', 'block').siblings('.submenu:not(8)').css('display', 'none');
  $('.submenu .none').css('display', 'none');
  $('.k-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);
})

$('#inline-radio10').on('click', function () {
  $('.submenu:eq(9)').css('display', 'block').siblings('.submenu:not(9)').css('display', 'none');
  $('.submenu .none').css('display', 'none');
  $('.k-1').prop('checked', false);
  $('.submenu > div > div > input').prop('checked', false);
})


// 科目寫法
$(":checkbox").change(function () {
  if (this.checked) {
    $(this).siblings('.none').css('display', 'block');
  } else {
    $(this).siblings('.none').css('display', 'none');
  }
});

$(".noid").on('click', function () {
  var $this = $(this);
  $this.addClass('active').siblings('.active').removeClass('active');
  $(".noidc").addClass("on").fadeIn('slow').siblings('.on').removeClass('on');
});

$(".haveid").on('click', function () {
  var $this = $(this);
  $this.addClass('active').siblings('.active').removeClass('active');
  $(".haveidc").addClass("on").fadeIn('slow').siblings('.on').removeClass('on');
});

$('.datepickers').datepicker({
  format: 'yyyy-mm-dd',
  autoPick: true
});

var accountId = 'acc01';

if (accountId == 'acc01') {
  $('#account01').val('6201-01-');
} else if (accountId == 'acc11') {
  $('#account11').val('6201-11-');
} else {
  $('#account11').val('請填入');
};


// 新增證件
//外國監護人


$(".addlocal").on('click', function () {
  var $this = $(this);
  $this.addClass('active').siblings('.active').removeClass('active');
  $(".addlocal_box").addClass("on").fadeIn('slow').siblings('.on').removeClass('on');
});

$(".addfr").on('click', function () {
  var $this = $(this);
  $this.addClass('active').siblings('.active').removeClass('active');
  $(".addfr_box").addClass("on").fadeIn('slow').siblings('.on').removeClass('on');
});


//截章

function cropstamp() {
  var image = document.getElementById('imagescut');
  var start = document.getElementById('StartStmap');
  var restart = document.getElementById('RestartStmap');
  var canvas = $('.sealcut');
  var $result = $('#result');

  start.addEventListener('click', function () {
    new Cropper(image, {
      autoCrop: true,
      zoomOnWheel: false,
      rotatable: true,
      toggleDragModeOnDblclick: true,
      background: true,
      ready() {
        this.cropper.crop();
      },

    });
  });

  start.addEventListener('click', function () {
    new Cropper(image, {
      autoCrop: true,
      zoomOnWheel: false,
      rotatable: true,
      toggleDragModeOnDblclick: true,
      background: true,
      ready() {
        this.cropper.crop();
      },

    });
  });



  $('#cropStmap_red').on('click', function () {
    var croppedImageDataURL = image.cropper.getCroppedCanvas();
    var ders = croppedImageDataURL.toDataURL("image/jpeg");
    $result.append($('<img>').attr('src', ders).addClass("red"));

    var xData = image.cropper.getData();
    var imgBase64 = image.cropper

    console.log(croppedImageDataURL);
    console.log('x:' + xData.x);
    console.log('y:' + xData.y);
    console.log('width:' + xData.width);
    console.log('height:' + xData.height);
    console.log('base64:' + ders);

  });



  $('#cropStmap_blue').on('click', function () {
    var croppedImageDataURL = image.cropper.getCroppedCanvas();
    var ders = croppedImageDataURL.toDataURL("image/jpeg");
    $result.append($('<img>').attr('src', ders).addClass("blue"));

    var xData = image.cropper.getData();
    var imgBase64 = image.cropper

    console.log(croppedImageDataURL);
    console.log('x:' + xData.x);
    console.log('y:' + xData.y);
    console.log('width:' + xData.width);
    console.log('height:' + xData.height);
    console.log('base64:' + ders);

  });

  $('#RestartStmap').on('click', function () {
    image.cropper.destroy();
  });


  $('#imgRotation').click(function () {
    image.cropper.rotate(90);
  });


  $('#clearImg').click(function () {
    $result.empty();
  });


};

$(".addstamp").click(function () {
  $(".addiconcards").show();
});

//select gotourl 身份檢核

// document.getElementById('redirectSelect').onchange = function gotoUrl() {
//   var goto = this.value;
//   window.open(goto, '_blank');
// };


// upload








// scanner.js  主要程式


function scanToJpg() {
  scanner.scan(displayImagesOnPage, {
    "output_settings": [{
      "type": "return-base64",
      "format": "jpg"
    }]
  });
}

/** Processes the scan result */
function displayImagesOnPage(successful, mesg, response) {
  if (!successful) { // On error
    console.error('Failed: ' + mesg);
    return;
  }

  if (successful && mesg != null && mesg.toLowerCase().indexOf('user cancel') >= 0) { // User cancelled.
    console.info('User cancelled');
    return;
  }

  var scannedImages = scanner.getScannedImages(response, true, false); // returns an array of ScannedImage
  for (var i = 0;
    (scannedImages instanceof Array) && i < scannedImages.length; i++) {
    var scannedImage = scannedImages[i];
    processScannedImage(scannedImage);
    window.setTimeout(function () {
      resize();
      cropstamp();
    }, 100);

  }
}


/** Images scanned so far. */
var imagesScanned = [];

/** Processes a ScannedImage */
function processScannedImage(scannedImage) {
  imagesScanned.push(scannedImage);
  var elementImg = scanner.createDomElementFromModel({
    'name': 'img',
    'attributes': {
      'id': 'imagescut',
      'src': scannedImage.src
    }
  });
  $('#cutImg').append(elementImg);
}



function resize() {

  var cutObjs = $('#cutImg img');
  var xps = cutObjs.width();
  var addWidths = Math.round(xps * 0.4032) + 'px';
  cutObjs.attr("width", addWidths);

}

// var cutObjs = $('#cutImg > img');
//   var xps = cutObjs.width();
//   var addWidths = Math.round(xps * 0.44496855) + 'px';
//   cutObjs.attr("width", addWidths);
//   console.log('scanner' + addWidths + 'ok');

// window.setTimeout( function(){
//   var cutObjs = $('#cutImg > img');
//   var xps = cutObjs.width();
//   var addWidths = Math.round(xps * .4132) + 'px';
//   cutObjs.attr("width", addWidths);
//   console.log('scanner' + addWidths + 'ok');
//   }, 1000);



// 1:1 寫法


// upload


//上傳圖片，並且預覽



$("#imgInp").change(function () {
  $("#cutImg").html(""); // 清除預覽
  readURL(this);
});

function readURL(input) {
  if (input.files && input.files.length >= 0) {
    for (var i = 0; i < input.files.length; i++) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var img = $("<img id='imagescut'>").attr('src', e.target.result);

        $("#cutImg").append(img);
        cropstamp();

        // var cutObj = $('#cutImg > img');
        // var xp = cutObj.width();
        // var addWidth = Math.round(xp * .4132) + 'px';
        // cutObj.attr("width", addWidth);
        // console.log('upload' + addWidth + 'ok');
        // console.log('upload ok');
      }
      reader.readAsDataURL(input.files[i]);
    }
  } else {
    var noPictures = $("<p>目前沒有圖片</p>");
    $("#cutImg").append(noPictures);
  }
}


function redirectPage(){
  var wjb51 = screen.width;
  var hjb51 = screen.height;
  console.log('經系統檢測，你的螢幕解析度為' + wjb51 + 'x' + hjb51);
}


redirectPage();




console.log('end ok');