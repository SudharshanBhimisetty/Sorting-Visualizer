

var speed = al_speed.value;

al_speed.addEventListener("input",changeSpeed)

var userDelay = 400/arr_size;

function changeSpeed(){
    userDelay = 100/(al_speed.value)
    if(al_speed.value == 1) {
        userDelay = 10000/arr_size;
    }
    else if(al_speed.value == 2) {
        userDelay = 1000/arr_size;
    }   
    else if(al_speed.value == 3) {
        userDelay = 400/arr_size;
    }
    else if(al_speed.value == 4) {
        userDelay = 300/arr_size;
    }
    else  {
        userDelay = 50/arr_size;
    }
}

function div_update(temp1,height,color){
    setTimeout(function(){
        temp1.style = "margin:0% 0.1%;background-color:" + color + ";height:" + height + "%;width:" + (100/arr_size) + "%";
    },defaultDelay = defaultDelay + userDelay)
}


function enable_buttons()
{
 
    window.setTimeout(function(){
        for(var i=0;i<allButtons.length;i++)
        {

            allButtons[i].classList=[];
            allButtons[i].classList.remove("button_locked");
            allButtons[i].disabled = false;
            arr_size_temp.disabled = false;
            al_speed.disabled = false; 
        }
        buttons[0].classList.remove("button_selected");
        reset.disabled = true;
    },defaultDelay = defaultDelay + userDelay);
}
