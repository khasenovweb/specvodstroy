function canvasrender() {
    
    var canvasblock = document.querySelector('.canvasblock');
    var canvas = document.querySelector('.canvasblock__canvas');
    var context = canvas.getContext('2d');
    canvas.width = canvasblock.offsetWidth;
    canvas.height = canvasblock.offsetHeight;

    var circles_from = document.querySelectorAll('.canvasblock__main__item__circle__from');
    var circles_to = document.querySelectorAll('.canvasblock__main__img__circle');
    var i = 0;
    circles_from.forEach(element => {
        var from = element;
        var to = circles_to[i];
        context.beginPath();
        context.moveTo(
            from.getBoundingClientRect().left + 5 - canvasblock.getBoundingClientRect().left, 
            from.getBoundingClientRect().top + 5 - canvasblock.getBoundingClientRect().top
        );
        context.lineTo(
            to.getBoundingClientRect().left + 5 - canvasblock.getBoundingClientRect().left, 
            to.getBoundingClientRect().top + 5 - canvasblock.getBoundingClientRect().top
        );
        context.strokeStyle = '#D6D6D6';
        context.stroke();
        i += 1;
    });
}


if ( document.querySelector('.canvasblock') ) {
    canvasrender();
}



window.addEventListener('resize', function(){
    if ( document.querySelector('.canvasblock') ) {
        canvasrender();
    }
});
