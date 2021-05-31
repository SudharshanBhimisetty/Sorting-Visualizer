buttons[0].addEventListener("click", bubble)

function bubble() {

    disableButtons()
    reset.disabled = false;
    buttons[0].classList.add("button_selected");
    defaultDelay = 0
    reset.addEventListener("click", refreshPage);

    for (var i = 0; i < box_size.length; i++) {
        for (var j = 0; j < (box_size.length - i - 1); j++) {
            div_update(boxes[j], box_size[j], "yellow")
            if (box_size[j] > box_size[j + 1]) {

                div_update(boxes[j], box_size[j], "red")
                div_update(boxes[j + 1], box_size[j + 1], "red")

                var temp = box_size[j];
                box_size[j] = box_size[j + 1];
                box_size[j + 1] = temp;

                div_update(boxes[j], box_size[j], "red")
                div_update(boxes[j + 1], box_size[j + 1], "red")
            }

            div_update(boxes[j], box_size[j], "blue")
        }
        div_update(boxes[j], box_size[j], "green")
    }

    enable_buttons();


}