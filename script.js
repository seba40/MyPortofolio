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

function reverse(s) {
    "use strict";

    return s.split('').reverse().join('');
}


$(document).ready(function () {
    "use strict";
    var data, i,
        infolist;
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
