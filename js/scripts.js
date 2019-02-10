console.log('js load ok');

// $('.checkeds input').eq(0).prop('checked', true)






$(".btn_01").on('click', function (){
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



// select gotourl 身份檢核
document.getElementById('redirectSelect').onchange = function gotoUrl(){
  var goto = this.value;
  window.open(goto, '_blank');
};


