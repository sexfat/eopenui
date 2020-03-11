// function Clickbankobj() {
//   const address = document.getElementById('address').value;
//   const contactAdr = document.getElementById('contactAdr').value;
//   const email = document.getElementById('email').value;
//   const personId = document.getElementById('personId').value;
//   const data = {
//     "address": address,
//     'contactAdr': contactAdr,
//     'email': email,
//     'personId': personId
//   };
//   localStorage.setItem('open_info', JSON.stringify(data));
// }



// function Clickbankobj_1() {
//   const applyReason = document.getElementById('applyReason').value;
//   const income = document.getElementById('income').value;
//   const category = document.getElementById('category').value;
//   const data = {
//     'applyReason': applyReason,
//     'income': income,
//     'category': category
//   };
//   localStorage.setItem('open_info_1', JSON.stringify(data));
// };

// function Clickbankobj_2() {
//   var open_info_1 = localStorage.getItem('open_info_1');
//   var open_info = localStorage.getItem('open_info');
//   const come = $('input[name=come]:checked').val();
//   const numbers = document.getElementById('numbers').value;
//   const pay_address = document.getElementById('pay_address').value;
//   const data = {
//     'come': come,
//     'numbers': numbers,
//     'pay_address': pay_address
//   };
//   localStorage.setItem('open_info_2', JSON.stringify(data));
//   var open_info_2 = localStorage.getItem('open_info_2');
// //物件轉型 然後再相加
//   const objs1 = JSON.parse(open_info);
//   const objs2 = JSON.parse(open_info_1);
//   const objs3 = JSON.parse(open_info_2);
//   var objects = $.extend({}, objs1, objs2,objs3);
//   const allinfo =  JSON.stringify(objects);
//   alert(allinfo);

// };






// // localStorage.removeItem('myCat');



// // localStorage.setItem('myCat', 'Tom');
// // var cat = localStorage.getItem('myCat');
// // console.log(cat);





// // const data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
// // 	todo: []
// //   };



// // // data.todo.splice(data.todo.indexOf('task 1'), 1);

// // localStorage.setItem('todoList', JSON.stringify(data));


//以上是用 localStorage


function IBankSTMGetData() {
    const address = document.getElementById('address').value;
    const contactAdr = document.getElementById('contactAdr').value;
    const email = document.getElementById('email').value;
    const personId = document.getElementById('personId').value;
    const applyReason = document.getElementById('applyReason').value;
    const income = document.getElementById('income').value;
    const category = document.getElementById('category').value;
    const come = $('input[name=come]:checked').val();
    const numbers = document.getElementById('numbers').value;
    const pay_address = document.getElementById('pay_address').value;

    var json_obj = {
        "address": address,
        'contactAdr': contactAdr,
        'email': email,
        'personId': personId,
        'applyReason': applyReason,
        'income': income,
        'category': category,
        'come': come,
        'numbers': numbers,
        'pay_address': pay_address
    };


    var json_str=JSON.stringify(json_obj);
    alert(json_str);
}












console.log(data)