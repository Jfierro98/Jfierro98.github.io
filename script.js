document.addEventListener('DOMContentLoaded', function() {
    bios_windoex = document.getElementById('bios');
    pantalla = document.getElementById('pantalla');
    load = document.getElementById('load');
    pantalla.style.display = 'none';
    load.style.display = 'none';
    setTimeout(function() {
        bios_windoex.style.display = 'none';
        load.style.display = 'block';
        setTimeout(function() {
            load.style.display = 'none';
            pantalla.style.display = 'block';
            
            
        }, 3000);
        
    }, 3000);
    });

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
            menu.style.display = "none";
        } else {
            calc.style.display = "none";
        }
    }