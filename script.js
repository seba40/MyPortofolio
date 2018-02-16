/*global $, jQuery, alert*/
/*jslint plusplus: true */


function on() {
    "use strict";
    $("div.overlay").css("display", "block");

}

function off() {
    "use strict";

    $("div.overlay").css("display", "none");

}

function checkQuery(el, prop, val) {
    if ($(el).css(prop) === val)
        return 1;
    else
        return 0;
}

function reverse(s) {
    "use strict";

    return s.split('').reverse().join('');
}


$(document).ready(function () {
    "use strict";
    var data, i,
        infolist,
        random = Math.floor((Math.random() * 3) + 1);

    $('body').css('background', 'url("Back' + random + '.png") no-repeat center center');
    $('body').css('background-attachment', 'fixed');
    $('body').css('background-position', '53% 50%');

    $('#menuButton').click(function () {
        $("ul.menu").css("display", "block");




    });
        $('body').imagesLoaded({
        background: true
    }, function () {
               if (checkQuery("#menuButton", "display", "block") === 0) {
        $("hr.logo").css("width", "0");
        $("h2.logo").css("width", "0");

        $("img.logo").hide().delay(1000).fadeIn(1200);

        $("div.line").delay(2400).animate({
            height: '0%',
            top: '50%'

        }, 400);
        $('div.name')
            .delay(1500)
            .queue(function (next) {
                $(this).css('display', 'block');
                next();
            });

        $("div.name").animate({
            width: '500px'
        }, 1000);
        $('hr.logo')
            .delay(1900)
            .queue(function (next) {
                $(this).css('display', 'block');
                next();
            });

        $("hr.logo").animate({
            width: '280px'
        }, 800);
        $("h2.logo").delay(2200).animate({
            width: '500px'
        }, 800);
    }
    });

 

    $('img.gallery').click(function () {
        var path = $(this).attr("src"),
            temp,
            tempinfo,
            lenght,
            i = 1;
        $("div.overlay").append('<img class="overlay" src= ' + '"' + path + '">');
        // data block
        path = path.replace('/', '\\/');

        temp = $('p.' + path.substring(0, path.indexOf('.'))).text().split(" "); //getData
        tempinfo = $('p.infotype\\/' + path.substring(0, 1)).text().split(" ");
        $('p.info').text(temp[0]); //set title
        $('p.info').text($('p.info').text().replace(/\_/g, " ")); //remove '_'
        lenght = Object.keys(tempinfo).length;
        $("li.info").each(function () { //set data for every line of list
            if (lenght === i - 1) {
                $(this).text("");
            } else {

                $(this).text(tempinfo[i - 1] + " :");
                $(this).text($(this).text().substring(0, $(this).text().indexOf(":") + 1) + " " + temp[i]);
                $(this).text($(this).text().replace("_", " "));
                i++;
            }
        });

        // end data block

        on();

    });
    $('#x').click(function () {
        $('img.overlay').remove();
        off();
    });



});
$(window).resize(function () { // functie apelata in momentul cand fereastra se redimensioneaza
    "use strict";
    if ($(window).width() <= 720) {
        $("ul.menu").css("display", "none");
        $("h1.logo").css("width", "100%");
        $("h2.logo").css("width", "70%");
        $("hr.logo").css("width", "30%");
        $("div.line").css("display", "none");
        $("div.name").css("width", "60%");
        $("div.name").css("height", "auto");








    } else {
        $("ul.menu").css("display", "block");

        $("h1.logo").css("width", "100%");
        $("h2.logo").css("width", "500px");
        $("hr.logo").css("width", "280px");
        $("div.name").css("width", "500");
        $("div.name").css("height", "60px");
        $("div.name").css("display","block");
         $("hr.logo").css("display","block");
       

    }
});
