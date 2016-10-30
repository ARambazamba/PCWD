$(document).ready(function () {    
    //changeOrder();
    methodChaining();
});


function hide() {
    $("#divToggle").hide();
}

function show() {
    $("#divToggle").show();
}

function toggle() {
    $("#divToggle").toggle();
}

function changeColour() {
    $("#colourful").removeClass("divYellow").addClass("divRed");
}

function addStyle() {
    $('ul#indexing li').eq(1).css({
        'font-size': '20px',
        'padding-left': '20px'
    });
}

function methodChaining() {
    $('#tblPurchases').css("cursor", "pointer");
    $('#tblPurchases tr:odd').addClass('odd')
    .click(function () { console.log('you clicked a tr!'); });
}

function changeValues() {
    $('input[type="text"]').val('new value');
    $('select').val('2');
    $('input[type="checkbox"]').prop('checked', 'checked');
    $('a').attr('title', 'ORF');
}

function changeOrder() {

    var allItems = $('ul#indexing li');
    var liFirst = $('ul#indexing li').first();
    $('ul#indexing').append(liFirst);
    allItems.first().insertAfter(allItems.last());
    var clones = $('ul#indexing li').clone();
    $('ul#indexing').append(clones);

    $('ul#indexing li').click(function () {
        alert($(this).text());
    });

    var removedListItem = $('ul#indexing li').first().remove();
    removedListItem.appendTo('ul#indexing');
    
    liFirst.trigger('click');

    var replacedListItem = $('ul#indexing li').first().replaceWith('<li>new!</li>');

}
