
buttons[3].addEventListener("click",merge);


function merge(){
    disableButtons()
    reset.disabled = false;
    buttons[3].classList.add("button_selected");
    defaultDelay = 0;
    reset.addEventListener("click", refreshPage);
    var start = performance.now();  
    console.log("start is " + start)
 
    merge_partition(0,arr_size-1);
     var end = performance.now();
    console.log("end is " + end)
    console.log(end-start)
    enable_buttons();

}


function merge_sort(start,mid,end)
{

  var p = start,q = mid+1;
  var Arr =[],k=0;

  while(p <= mid && q <= end){
      if(box_size[p] < box_size[q]){
          Arr[k++] = box_size[p++];
          div_update(boxes[p-1],box_size[p-1],"red");
      }else{
          Arr[k++] = box_size[q++];
          div_update(boxes[q-1],box_size[q-1],"red");
      }
  }

  while(p <= mid){
    Arr[k++] = box_size[p++];
    div_update(boxes[p-1],box_size[p-1],"red");
  }
  while(q <= end){
      Arr[k++] = box_size[q++]
      div_update(boxes[q-1],box_size[q-1],"red");
  }

  for(var t=0;t<k;t++)
  {
      box_size[start++]=Arr[t];
      div_update(boxes[start-1],box_size[start-1],"green");
  } 

}



function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(boxes[mid],box_size[mid],"yellow");

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}