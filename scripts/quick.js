
buttons[4].addEventListener("click",quick);


function quick(){
    disableButtons()
    reset.disabled = false;
    buttons[4].classList.add("button_selected");
    defaultDelay = 0;
    reset.addEventListener("click", refreshPage);
    
    var start = performance.now();

    quick_sort(0,arr_size-1);
    enable_buttons();
    

    var end = performance.now();
    runTime.innerHTML = "<h6 style='font-family: monospace'>Run Time :</h6>" + (end - start) + " ms";

}


function partition(low,high){
    
    var pivot = box_size[high];
    var i = low-1;
    // var j = low;
   var j = low
   div_update(boxes[high],box_size[high],"red");
    while(j < high){
        div_update(boxes[j],box_size[j],"yellow");
        if(box_size[j] <= pivot){
            i++;
            div_update(boxes[j],box_size[j],"red");
            div_update(boxes[i],box_size[i],"red");
            var tem = box_size[j];
            box_size[j] = box_size[i];
            box_size[i] = tem
            div_update(boxes[j],box_size[j],"blue");
            div_update(boxes[i],box_size[i],"blue");
        }
        div_update(boxes[j],box_size[j],"blue");
        j++;
    }

    div_update(boxes[i+1],box_size[i+1],"red");
    var temp = box_size[i+1];
    box_size[i+1]  = box_size[high];
    box_size[high] = temp

    div_update(boxes[i+1],box_size[i+1],"blue"); 
    div_update(boxes[high],box_size[high],"blue");
    for(var t = 0;t<=i;t++){
        div_update(boxes[t],box_size[t],"green"); 
    }
    // div_update(boxes[i],box_size[i],"green"); 
    return i+1;
}


function quick_sort(low,high){
    if( low < high ){

        var pi = partition(low,high);

        quick_sort(low,pi-1);
        quick_sort(pi+1,high);
    }
    for(var t = low;t<=high;t++){
        div_update(boxes[t],box_size[t],"green"); 
    }
}