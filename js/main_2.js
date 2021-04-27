
$(function(){
    loadImages("js/autos.json");
    $('nav a').on('click', function (e) {
        e.preventDefault();
        
        $('h1#heading2').text($(this).text());
        
        var art = $(this).text().toLowerCase();
        
        if(art === 'alle_bilder'){
            loadImages("js/allBilder.json");
        }else if(art === 'autos'){
           loadImages("js/autos.json");
        }else if(art === 'fahrraeder'){
            loadImages("js/fahrraerder.json");
        }else if(art === 'flugzeuge'){
            loadImages("js/flugzeuge.json");
        }         
        return false;
    });
    

   // Add Img to the Extended Img
    $('#images').on('click','img', function () {       
        var currntImg = $(this).attr('src'); 
        $('.extended').fadeIn(1000);
        $('.extended img').attr('src', currntImg);
        
    });
    
    // lightbox zu zeigen
    $('.extended').on('mouseleave','img', function () {       
        $(this).parent().toggle(2000);

    });
    
    $('.close').on('click', function () {   
        $(this).parent().toggle(500);

    });
   
});


/**
 * load Fahrräder Bilder mit Ajax / json 
 * @param {string} file path to json file
 * @returns {undefined}
 */
function loadImages(file){
        $.ajaxSetup({cache: false});
        var $file = file;
        $.getJSON($file)
            .done(function (Bilder) {
                $('#images').empty();
                $.each(Bilder, function (key) {
                    let bild = Bilder[key].surc;
                     let txt = Bilder[key].alt;
                    $(`<img src=${bild} alt =${txt}></img>`)
                            .appendTo('#images').fadeIn('slow');
                    
                });
            })
            
            .fail(function () {
                $('h1#heading2').text('Entschuldigung ,,,, etwas Passiert');
            })
           ;
}

