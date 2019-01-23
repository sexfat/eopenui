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













// $("#RestartStmap").on("click", function () {
//   var cas = $('#imagescut').cropper.getCroppedCanvas();
//   // var base64url = cas.toDataURL('image/jpeg');
//   $('#cavans').html(cas);
// })


// var canvas = document.getElementById('canvas');
// var dataURL = canvas.toDataURL();
// console.log(dataURL);



// cropper.getCroppedCanvas();
// var canvas = document.getElementById('canvas');
// var dataURL = canvas.toDataURL();


// function stop(){
//   cropper.crop();
// }



// function cuttingStamp() {

//   
// }


// image.addEventListener('click', (event) => {

//   var cropper = new Cropper(image, {
//     crop(event) {
//       console.log(event.detail.x);
//       console.log(event.detail.y);
//       console.log(event.detail.width);
//       console.log(event.detail.height);
//       console.log(event.detail.rotate);
//       console.log(event.detail.scaleX);
//       console.log(event.detail.scaleY);
//     },
//   });
// });









// function cutStamp() {
//   var $image = $('#imagescut');
//   $image .cropper({aspectRatio: 16 / 9});
// }

// cutStamp();




// $('.addiconcards').hide();
// var t1 = $('#newCard');
// var s1 = $('.newCard');
// var btns = $('.wires button');


// t1.click(function () {
//   s1.toggle();
//   console.log('ssssok');
// })


// for (i = 0; i < btns.length; i++) {

//   console.log(i);
// }


// $('.wires').each(function () {

// });





// $(function () {
// 預設顯示第一個 Tab
// var _showTab = 0;



//   $('.abgne_tab').each(function () {
//     // 目前的頁籤區塊
//     var $tab = $(this);

//     // var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
//     // $($defaultLi.find('a').attr('href')).siblings().hide();

//     // 當 li 頁籤被點擊時...
//     // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
//     $('ul.tabs li', $tab).click(function () {
//       // 找出 li 中的超連結 href(#id)
//       var $this = $(this),
//         _clickTab = $this.find('a').attr('href');
//       // 把目前點擊到的 li 頁籤加上 .active
//       // 並把兄弟元素中有 .active 的都移除 class
//       $this.addClass('active').siblings('.active').removeClass('active');
//       // 淡入相對應的內容並隱藏兄弟元素
//       $(_clickTab).stop(false, true).fadeIn().siblings().hide();

//       return false;
//     }).find('a').focus(function () {
//       this.blur();
//     });
//   });
// });






// for (i = 0; i < addiconcard.length; i++) {
//   newCard.eq(i).click(function () {
//     $('.addiconcards').eq(i).show();
//     console.log('ok');
//   })
//   // console.log(i);
// }



console.log('list ok');







// 新增印鑑卡


// var month = 7;

// switch (Math.ceil(month / 3)) {
//   case 1:
//     console.log('春天');
//     break;
//   case 2:
//     console.log('夏天');
//     break;
//   case 3:
//     console.log('秋天');
//     break;
//   case 4:
//     console.log('冬天');
//     break;
//   default:
//     console.log('月份錯誤');
//     break;
// }


//tab

// $(function () {
//   // 預設顯示第一個 Tab
//   var _showTab = 0;
//   $('.fin_tab').each(function () {
//     // 目前的頁籤區塊
//     var $tab = $(this);

//     var $defaultLi = $('ul.nav-tabs li', $tab).eq(_showTab).addClass('active');
//     $($defaultLi.find('a').attr('href')).siblings().hide();

//     // 當 li 頁籤被點擊時...
//     // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
//     $('ul.tabs li', $tab).click(function () {
//       // 找出 li 中的超連結 href(#id)
//       var $this = $(this),
//         _clickTab = $this.find('a').attr('href');
//       // 把目前點擊到的 li 頁籤加上 .active
//       // 並把兄弟元素中有 .active 的都移除 class
//       $this.addClass('active').siblings('.active').removeClass('active');
//       // 淡入相對應的內容並隱藏兄弟元素
//       $(_clickTab).stop(false, true).fadeIn().siblings().hide();

//       return false;
//     }).find('a').focus(function () {
//       this.blur();
//     });
//   });
// });

console.log('end ok');