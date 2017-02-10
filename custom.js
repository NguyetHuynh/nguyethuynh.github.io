/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var row = document.getElementsByClassName("row");

function makeShadow(obj){
    obj.style.boxShadow = "3px 3px 10px #362e2e";
    obj.style.webkitBoxShadow = "3px 3px 10px #362e2e";
    obj.style.mozBoxShadow = "3px 3px 10px #362e2e";
}
function deleteShadow(obj){
    obj.style.boxShadow = "0px 0px 0px";
    obj.style.webkitBoxShadow = "0px 0px 0px";
    obj.style.mozBoxShadow = "0px 0px 0px";
}

var menu = document.getElementById('menuBtn');
menu.addEventListener("click", dropdownFunction);

//show and hidde menu when click on menu button
function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && (!event.target.matches('.iconMenu')) ){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
