buttons[1].addEventListener("click", selection)

function selection(){
    
    disableButtons()
    reset.disabled = false;
    buttons[1].classList.add("button_selected");
    defaultDelay = 0
    reset.addEventListener("click", refreshPage);
 
    var min_index;
    for(var i=0;i < box_size.length-1;i++){
        div_update(boxes[i], box_size[i], "red")
        min_index = i;
        for(var j = i+1;j<box_size.length;j++){
            div_update(boxes[j], box_size[j], "yellow")
            if(box_size[j] < box_size[min_index]){
                if(min_index == i){
                    div_update(boxes[min_index], box_size[min_index], "red")     
                }else{
                    div_update(boxes[min_index], box_size[min_index], "blue")
                }
                min_index = j;
                div_update(boxes[min_index], box_size[min_index], "red")
            }else{
                div_update(boxes[j], box_size[j], "blue")
            }
        }
        var temp = box_size[min_index];
        box_size[min_index] =box_size[i];
        box_size[i] = temp;

        div_update(boxes[i], box_size[i], "green")     
    }
    div_update(boxes[box_size.length-1], box_size[box_size.length-1], "green")
    enable_buttons();
}