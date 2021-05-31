
buttons[5].addEventListener("click",heap);


function heap(){
    disableButtons()
    reset.disabled = false;
    buttons[5].classList.add("button_selected");
    defaultDelay = 0;
    reset.addEventListener("click", refreshPage);
    console.log(box_size)
    heap_sort(arr_size);
    console.log(box_size)
    enable_buttons();
}


function heapify(n,i){
    var largest = i;
    var l = 2 * i + 1; 
    var r = 2 * i + 2; 
 
  
    if (l < n && box_size[l] > box_size[largest]){
        if(largest != i){
            div_update(boxes[largest],box_size[largest],"blue");
        }
        largest = l;
        div_update(boxes[largest],box_size[largest],"red");
    }
    if (r < n && box_size[r] > box_size[largest]){
        if(largest != i){
            div_update(boxes[largest],box_size[largest],"blue");
        }
        largest = r;
        div_update(boxes[largest],box_size[largest],"red");
    }
    if (largest != i) {

        div_update(boxes[i],box_size[i],"red");
        div_update(boxes[largest],box_size[largest],"red");
        var temp = box_size[i];
        box_size[i] = box_size[largest] 
        box_size[largest] = temp;
        
        div_update(boxes[i],box_size[i],"red");
        div_update(boxes[largest],box_size[largest],"red");
        
        div_update(boxes[i],box_size[i],"blue");
        div_update(boxes[largest],box_size[largest],"blue");
 
        heapify(n, largest);
    }
    
}


function heap_sort(n){
    for(var i = n/2 -1;i >= 0;i--){
        heapify(n,i);
    }

    for(var i = n - 1;i > 0;i--){
        
        
        div_update(boxes[0],box_size[0],"red");
        div_update(boxes[i],box_size[i],"red");
        
        var temp = box_size[0];
        box_size[0] = box_size[i] 
        box_size[i] = temp;

        div_update(boxes[0],box_size[0],"red");        
        div_update(boxes[i],box_size[i],"red");

       
        div_update(boxes[0],box_size[0],"blue");
        div_update(boxes[i],box_size[i],"blue");
       

        div_update(boxes[i],box_size[i],"green");
        div_update(boxes[i],box_size[i],"yellow");
        heapify(i,0);
        div_update(boxes[i],box_size[i],"blue");
        div_update(boxes[i],box_size[i],"green");

    }

    div_update(boxes[0],box_size[0],"green");

}