var arr_size_temp = document.getElementById('arr_size');
var arr_size = arr_size_temp.value;
var al_speed = document.getElementById('al_speed');
var new_array = document.getElementById('new_array');

var runTime = document.getElementById('runTime');
var area = document.getElementById('area');


var buttons = document.querySelectorAll(".algo_buttons button");


new_array.addEventListener("click",generate_array);


arr_size_temp.addEventListener("input",update_array);

var boxes = [];
var box_size = [];

var defaultDelay = 0;

function generate_array(){
    area.innerHTML = " ";
    runTime.innerHTML = " "
    box_size = [];
    boxes = [];
    for(var i=0;i<arr_size;i++){
  
        box_size[i] = Math.floor((Math.random() * 5 * (arr_size_temp.max-arr_size_temp.min))/10) + 25;
        boxes[i] = document.createElement("div");
        area.appendChild(boxes[i]);
        boxes[i].style = "margin:0% 0.1%;background-color:#e6e6ff;height:" + box_size[i] + "%;width:" + (100/arr_size) + "%";
    }
}

function update_array(){

    arr_size = arr_size_temp.value;
    generate_array();
}

window.onload=update_array();


var allButtons = document.querySelectorAll("button");


var reset = document.getElementById('reset');
reset.disabled = true;


function disableButtons(){
    for(var i=0;i<allButtons.length;i++){

        allButtons[i].classList=[];
        allButtons[i].classList.add("button_locked");
        
        allButtons[i].disabled = true;
        arr_size_temp.disabled = true;
        al_speed.disabled = true; 
    }
}

function refreshPage(){
    window.location.reload();
}

