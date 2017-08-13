var list = document.getElementById('list'),
add = document.getElementById('addElem');

add.addEventListener('click', function(){
var element = document.createElement('li');

var liNo = document.getElementsByTagName('li');
var number =liNo.length;

element.innerHTML = 'item '+ number;
list.appendChild(element);
}
);