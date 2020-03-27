console.log('ok');

document.getElementById('address').value = '馬總';
var  enter = document.getElementById('address');
if (enter.value != '') {
    enter.classList.add("mystyle");
}