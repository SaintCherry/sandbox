$(document).ready(function () {
    $(".button-one").mousedown(function () { 
        $(".frame-one").toggle(300);
    });
    $(".button-two").dblclick(function () { 
        $(".frame-two").toggle(400);
    });
});
