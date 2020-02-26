// function IBankSTMGetData()
// { 
//     var vName = document.getElementById("name").value;
// 	var vSex = document.getElementById("sex").value;
// 	var vID = document.getElementById("idcard").value;
// 	var vAGE = document.getElementById("age").value;
// 	var vNation = document.getElementById("nation").value;
// 	var vwechat = document.getElementById("wechat").value;
// 	var vemail = document.getElementById("email").value;
// 	var vphone = document.getElementById("phone").value;

// 	var vadd = document.getElementById("address").value;
// 	var vcardnum = document.getElementById("cardnum").value;
// 	var vcardadd = document.getElementById("cardpageadd").value;
// 	var vworkadd = document.getElementById("workadd").value;

// 	var json_obj={"vName":vName,"sex":vSex,"idcard":vID,"age":vAGE,"nation":vNation,"wechat":vwechat,"email":vemail,"phone":vphone,"address":vadd,"cardnum":vcardnum,"cardpageadd":vcardadd,"workadd":vworkadd};
//     var json_str=JSON.stringify(json_obj);

//     alert(json_str);
// }


// const data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
// 	todo: []
//   };

//   data.todo.push('task 1');
// localStorage.setItem('todoList', JSON.stringify(data));

// function extend(des, src, override) {
//   if (src instanceof Array) {
//     for (var i = 0, len = src.length; i < len; i)
//       extend(des, src[i], override);
//   }
//   for (var i in src) {
//     if (override || !(i in des)) {
//       des[i] = src[i];
//     }
//   }
//   return des;
// }



function Clickbankobj() {
  const address = document.getElementById('address').value;
  const contactAdr = document.getElementById('contactAdr').value;
  const email = document.getElementById('email').value;
  const personId = document.getElementById('personId').value;
  const data = {
    "address": address,
    'contactAdr': contactAdr,
    'email': email,
    'personId': personId
  };
  localStorage.setItem('open_info', JSON.stringify(data));
}



function Clickbankobj_1() {
  const applyReason = document.getElementById('applyReason').value;
  const income = document.getElementById('income').value;
  const category = document.getElementById('category').value;
  const data = {
    'applyReason': applyReason,
    'income': income,
    'category': category
  };
  localStorage.setItem('open_info_1', JSON.stringify(data));
};

function Clickbankobj_2() {
  var open_info_1 = localStorage.getItem('open_info_1');
  var open_info = localStorage.getItem('open_info');
  const come = $('input[name=come]:checked').val();
  const numbers = document.getElementById('numbers').value;
  const pay_address = document.getElementById('pay_address').value;
  const data = {
    'come': come,
    'numbers': numbers,
    'pay_address': pay_address
  };
  localStorage.setItem('open_info_2', JSON.stringify(data));
  var open_info_2 = localStorage.getItem('open_info_2');
//物件轉型 然後再相加
  const objs1 = JSON.parse(open_info);
  const objs2 = JSON.parse(open_info_1);
  const objs3 = JSON.parse(open_info_2);
  var objects = $.extend({}, objs1, objs2,objs3);
  alert(JSON.stringify(objects));
};





//  json合併






// localStorage.removeItem('myCat');



// localStorage.setItem('myCat', 'Tom');
// var cat = localStorage.getItem('myCat');
// console.log(cat);





// const data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
// 	todo: []
//   };



// // data.todo.splice(data.todo.indexOf('task 1'), 1);

// localStorage.setItem('todoList', JSON.stringify(data));






// console.log(data)