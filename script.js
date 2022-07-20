function menuDisplay() {
    var menu = document.getElementById("menu");
     if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}	



function calcDisplay() {
    var calc = document.getElementById("calculadora");
     if (calc.style.display == "none") {
        calc.style.display = "block";
    } else {
        calc.style.display = "none";
    }
}

let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;

    el2 = document.querySelector('.pantalla_icono')
    // when the user clicks down on the element
    el2.addEventListener('mousedown', function (e) {
        e.preventDefault();
        // get the starting position of the cursor
        startPosX = e.clientX;
        startPosY = e.clientY;
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', mouseMove);
        });

    });
    el = document.querySelector('#calculadora')
    // when the user clicks down on the element
    el.addEventListener('mousedown', function (e) {
        e.preventDefault();
        // get the starting position of the cursor
        startPosX = e.clientX;
        startPosY = e.clientY;
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', mouseMove);
        });

    });


    function mouseMove(e) {
        // calculate the new position
        newPosX = startPosX - e.clientX;
        newPosY = startPosY - e.clientY;

        // with each move we also want to update the start X and Y
        startPosX = e.clientX;
        startPosY = e.clientY;

        // set the element's new position:
        el.style.top = (el.offsetTop - newPosY) + "px";
        el.style.left = (el.offsetLeft - newPosX) + "px";
    }