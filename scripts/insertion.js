buttons[2].addEventListener("click", insertion)

function insertion(){
    
    disableButtons()
    reset.disabled = false;
    buttons[2].classList.add("button_selected");
    defaultDelay = 0
    reset.addEventListener("click", refreshPage);
console.log(box_size)
    var key;
    var j;

    
    for(var i = 1;i< box_size.length;i++){
    
        key = box_size[i];
        j = i-1;

        div_update(boxes[i], box_size[i], "yellow")
        while( j >= 0 && box_size[j] > key){

        div_update(boxes[j], box_size[j], "red")
        div_update(boxes[j+1], box_size[j+1], "red")
            box_size[j+1] = box_size[j];
        div_update(boxes[j], box_size[j], "red")
        div_update(boxes[j+1], box_size[j+1], "red")
        div_update(boxes[j], box_size[j], "blue")
        if(j==(i-1))
        {
            div_update(boxes[j+1], box_size[j+1],"yellow");
        }
        else
        {
            div_update(boxes[j+1], box_size[j+1],"blue");
        }
        j = j -1;
        }

        box_size[j+1] = key;
        
        for(var t=0;t<i;t++)
        {
            div_update(boxes[t], box_size[t],"green");
        }

        div_update(boxes[i], box_size[i], "green")
    }

/*     for(var i = 0;i<boxes.length;i++){
        div_update(boxes[i], box_size[i], "green")
    } */


    enable_buttons();

}