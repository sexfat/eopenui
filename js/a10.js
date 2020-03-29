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


//拷貝
function copyOmit() {
    const content = document.getElementById('address').value;
    document.getElementById("contactAdr").value = content;
}



//監聽  最多選三項

function mostCheck(theObject) {
    var sportSelect = document.getElementsByName(theObject),
        maxNums = 3;
    for (var i in sportSelect) {
        sportSelect[i].onclick = function () {
            var _sportSelect = document.getElementsByName(theObject),
                cNums = 0;
            for (var i in _sportSelect) {
                if (i == 'length') break;
                if (_sportSelect[i].checked) {
                    cNums++;
                }
            }
            if (cNums > maxNums) {
                this.checked = false;
                alert('最多只能選擇三項');
            }
        }
    }
}


mostCheck('comein');
mostCheck('incomesource');





//申請金融卡





function come() {
    var obj = document.getElementsByName('come');
    var selected = [];

    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            selected.push(obj[i].value);
        }
    }
    console.log("申請個人網路銀行 : " + selected.join());
};







// function datapush(id) {
//     var obj = document.getElementsByName(id);
//     var selected = [];
//     for (var i = 0; i < obj.length; i++) {
//         if (obj[i].checked) {
//             selected.push(obj[i].value);
//         }
//     }
//      selected.join();
// }





var json_obj = '';

//資料 function
function IBankSTMGetData() {
    const address = document.getElementById('address').value;
    const contactAdr = document.getElementById('contactAdr').value;
    const h_tel = document.getElementById('h_tel').value;
    const company_tel = document.getElementById('company_tel').value;
    const cell = document.getElementById('cell').value;
    const email = document.getElementById('email').value;
    const statement = document.getElementById('statement').value;
    const employstatus = document.getElementById('employstatus').value;
    const agency = document.getElementById('agency').value;
    const institutional = document.getElementById('institutional').value;
    const category = document.getElementById('category').value;
    const sub_category = document.getElementById('sub_category').value;
    const job_title = document.getElementById('job_title').value;
    const income = document.getElementById('income').value;
    const amount = document.getElementById('amount').value;
    const purpose = document.getElementById('purpose').value;
    const Applycard = document.getElementsByName('Applycard').value;
    const cardkind = document.querySelector('input[name="cardkind"]:checked').value;
    const bankfirst = document.getElementsByName('bankfirst').value;
    const sure = document.querySelector('input[name="sure"]:checked').value;
    const yes = document.querySelector('input[name="yes"]:checked').value;
   

    // 資金來源
    var obj_c = document.getElementsByName('comein');
    var selected_c = [];

    for (var i = 0; i < obj_c.length; i++) {
        if (obj_c[i].checked) {
            selected_c.push(obj_c[i].value);
        }
    }

    var comein = selected_c.join();


    // 財富累積來源
    var obj_i = document.getElementsByName('incomesource');
    var selected_i = [];

    for (var i = 0; i < obj_i.length; i++) {
        if (obj_i[i].checked) {
            selected_i.push(obj_i[i].value);
        }
    }
    const incomesources = selected_i.join();



    // 申請金融卡
    var obj_a = document.getElementsByName('Applycardkind');
    var selected_a = [];

    for (var i = 0; i < obj_a.length; i++) {
        if (obj_a[i].checked) {
            selected_a.push(obj_a[i].value);
        }
    }
    var Applycardkind  = selected_a.join();

    

    // 申請銀行代收代付
    var obj_b = document.getElementsByName('bankfirstkind');
    var selected_b = [];

    for (var i = 0; i < obj_b.length; i++) {
        if (obj_b[i].checked) {
            selected_b.push(obj_b[i].value);
        }
    }
    var bankfirstkind =  selected_b.join();

      // 申請銀行代收代付
      var obj_n = document.getElementsByName('bankfirstkind');
      var selected_n = [];
  
      for (var i = 0; i < obj_n.length; i++) {
          if (obj_n[i].checked) {
              selected_n.push(obj_n[i].value);
          }
      }
      var come =  selected_n.join();
    












    var json_obj = {

        "address": address,
        'contactAdr': contactAdr,
        'h_tel': h_tel,
        'company_tel': company_tel,
        'cell': cell,
        'email': email,
        'statement': statement,
        'employstatus': employstatus,
        'agency': agency,
        'institutional': institutional,
        'category': category,
        'sub_category': sub_category,
        'job_title': job_title,
        'income': income,
        'amount': amount,
        'purpose': purpose,
        'Applycard': Applycard,
        'cardkind': cardkind,
        'bankfirst': bankfirst,
        '財富累積來源': incomesources,
        '申請網路銀行': come,
        '資金來源': comein,
        '申請金融卡': Applycardkind,
        '申請銀行代收代付': bankfirstkind,
        '申請狀態': sure,
        '本人同意' : yes
    };


    var json_str = JSON.stringify(json_obj);
    alert(json_str);
}













// console.log(data)