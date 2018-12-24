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
// $('#inline-radio1').on('click', function () {
//   $('.submenu:eq(0)').css('display', 'block').siblings('.submenu:not(0)').css('display', 'none');
//   $('.submenu .none').css('display', 'none');
//   $('.k-1').prop('checked', false);
//   $('.submenu > div > div > input').prop('checked', false);
// })

// $('#inline-radio2').on('click', function () {
//   $('.submenu:eq(1)').css('display', 'block').siblings('.submenu:not(1)').css('display', 'none');
//   $('.submenu .none').css('display', 'none');
//   $('.k-1').prop('checked', false);
//   $('.submenu > div > div > input').prop('checked', false);

// })
// $('#inline-radio3').on('click', function () {
//   $('.submenu:eq(2)').css('display', 'block').siblings('.submenu:not(2)').css('display', 'none');
//   $('.submenu .none').css('display', 'none');
//   $('.k-1').prop('checked', false);
//   $('.submenu > div > div > input').prop('checked', false);
// })

// $('#inline-radio4').on('click', function () {
//   $('.submenu:eq(3)').css('display', 'block').siblings('.submenu:not(3)').css('display', 'none');
//   $('.submenu .none').css('display', 'none');
//   $('.k-1').prop('checked', false);
//   $('.submenu > div > div > input').prop('checked', false);
// })

// $('#inline-radio5').on('click', function () {
//   $('.submenu:eq(4)').css('display', 'block').siblings('.submenu:not(4)').css('display', 'none');
//   $('.submenu .none').css('display', 'none');
//   $('.k-1').prop('checked', false);
//   $('.submenu > div > div > input').prop('checked', false);
// })


// $('#inline-radio6').on('click', function () {
//   $('.submenu:eq(5)').css('display', 'block').siblings('.submenu:not(5)').css('display', 'none');
//   $('.submenu .none').css('display', 'none');
//   $('.k-1').prop('checked', false);
//   $('.submenu > div > div > input').prop('checked', false);
// })


// $('#inline-radio7').on('click', function () {
//   $('.submenu:eq(6)').css('display', 'block').siblings('.submenu:not(6)').css('display', 'none');
//   $('.submenu .none').css('display', 'none');
//   $('.k-1').prop('checked', false);
//   $('.submenu > div > div > input').prop('checked', false);
// })

// $('#inline-radio8').on('click', function () {
//   $('.submenu:eq(7)').css('display', 'block').siblings('.submenu:not(7)').css('display', 'none');
//   $('.submenu .none').css('display', 'none');
//   $('.k-1').prop('checked', false);
//   $('.submenu > div > div > input').prop('checked', false);
// })

// $('#inline-radio9').on('click', function () {
//   $('.submenu:eq(8)').css('display', 'block').siblings('.submenu:not(8)').css('display', 'none');
//   $('.submenu .none').css('display', 'none');
//   $('.k-1').prop('checked', false);
//   $('.submenu > div > div > input').prop('checked', false);
// })

// $('#inline-radio10').on('click', function () {
//   $('.submenu:eq(9)').css('display', 'block').siblings('.submenu:not(9)').css('display', 'none');
//   $('.submenu .none').css('display', 'none');
//   $('.k-1').prop('checked', false);
//   $('.submenu > div > div > input').prop('checked', false);
// })


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



// 新增印鑑卡


var month = 7;

switch (Math.ceil(month / 3)) {
  case 1:
    console.log('春天');
    break;
  case 2:
    console.log('夏天');
    break;
  case 3:
    console.log('秋天');
    break;
  case 4:
    console.log('冬天');
    break;
  default:
    console.log('月份錯誤');
    break;
}


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