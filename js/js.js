function changeElement(id) {
    var el = document.getElementById(id);
    if(el.style.display == "block"){
        el.style.display = "none"
    }else{
        el.style.display = "block";
    }
}

//ищем элемент по селектору
var a = document.querySelector('#ShowHide');
//вешаем на него события
a.onmouseout = function(e) {
  document.getElementById('small_element').style.display='none';
  
}

a.onmouseover = function(e) {
  document.getElementById('small_element').style.display='block';
};

var a = document.querySelector('#ShowHide2');
a.onmouseout = function(e) {
  document.getElementById('small_element2').style.display='none';
}
a.onmouseover = function(e) {
  document.getElementById('small_element2').style.display='block';
};
var a = document.querySelector('#ShowHide3');
a.onmouseout = function(e) {
  document.getElementById('small_element3').style.display='none';
}
a.onmouseover = function(e) {
  document.getElementById('small_element3').style.display='block';
};
var a = document.querySelector('#ShowHide4');
a.onmouseout = function(e) {
  document.getElementById('small_element4').style.display='none';
}
a.onmouseover = function(e) {
  document.getElementById('small_element4').style.display='block';
};
var a = document.querySelector('#ShowHide5');
a.onmouseout = function(e) {
  document.getElementById('small_element5').style.display='none';
}
a.onmouseover = function(e) {
  document.getElementById('small_element5').style.display='block';
};
var a = document.querySelector('#ShowHide6');
a.onmouseout = function(e) {
  document.getElementById('small_element6').style.display='none';
}
a.onmouseover = function(e) {
  document.getElementById('small_element6').style.display='block';
};