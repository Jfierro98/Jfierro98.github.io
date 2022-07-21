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