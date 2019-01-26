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
}


(function ($) {
  var switchs = $('.addaccount > .switchs');
  switchs.hide();
  $('.account_title > input:checkbox').click(function () {
    $(this).parent().next().fadeToggle();
  })
})(jQuery);


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


//select url

// function redirect(goto){
//   var conf = confirm("確認連結到系統外站");
//   if (conf && goto != '') {
//       window.open = goto;

//   }
// }

// document.getElementById('redirectSelect').onchange = 

function gotoUrl() {
  var goto = this.value;
  window.open(goto, '_blank');
};



//截章

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

$('#cropStmap').on('click', function () {

  var croppedImageDataURL = image.cropper.getCroppedCanvas();
  var ders = croppedImageDataURL.toDataURL("image/jpeg");
  $result.append($('<img>').attr('src', ders));

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



$(".addstamp").click(function () {
  $(".addiconcards").show();
});



console.log('end ok');