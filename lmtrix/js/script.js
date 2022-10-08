$( document ).ready(function() {


function anime()
{
    let div_slider = $( '.slider' );

    div_slider.animate( { left: '-100%' } , 800 , function() {

        let first = $('.slider div').first().remove();

        div_slider.append(first);

        div_slider.css( 'left' , '0' );

    });
}

setInterval( anime , 4000 );


});
const button = document.querySelector('.start-audio-btn');
const sound = document.querySelector('.sound');
button.addEventListener('click', (_) => { sound.play(); });
