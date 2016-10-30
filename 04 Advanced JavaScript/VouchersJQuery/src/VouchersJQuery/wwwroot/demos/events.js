$(document).on('click', function (event) {

    $("#prevDef").on('click', preventDef);
    addEvents();
});

function evtTargets(event) {
    debugger;
    console.log("Event Type: " + event.type);    // The event type, eg. "click"
    console.log("Key / Button pressed: " + event.which);   // The button or key that was pressed.
    console.log("Event Targer: " + event.target);  // The originating element.
    console.log("X: " + event.pageX);   // The document mouse X coordinate.
    console.log("Y: " + event.pageY);   // The document mouse Y coordinate.
}

function unbind() {
    $("#unbound").off('click');
}

function log() {
    console.log("clicked");
}

function preventDef(event) {
    event.preventDefault();
    console.log("Tripadvisor blocked by jQuery firewall :-)");
}

function addEvents() {
    debugger;
    $("#container div").each(function () {
        $(this).mouseover(function (event) {
            $(event.currentTarget).css("padding-left", "30px");
        });
        $(this).mouseleave(function (event) {
            $(event.currentTarget).css("padding-left", "0");
        });
        }
    );

    $("#ulEvents li").each(function() {
        $(this).click(function() {
            console.log("you clicked an <li> with value " + this.value);
        });
    });

    $("#tblPurchases tbody").on("click", "tr", function (e) {
        console.log("row was clicked");
    });
    
    $("#txtName").change(function() {
        console.log("Value of txtName changed to " + $(this).val());
    });

    $("#tblPurchases tbody").on("click", "tr", function(e) {
        console.log("row was clicked");
    });

}

function doAnimate(trgt) {
    debugger;
    $(trgt).animate({
        opacity: 0.25,
        fontSize: '30px',
        width: '+=100'
    },
    300,
    function () {
        // executes when the animation is done
        console.log("animation finished");
    }
);
}

function changeValues() {
    debugger;
    $('input[type="text"]').val('new value');
    $('select').val('2');
    $('input[type="checkbox"]').prop('checked', 'checked');
    $('a').attr('title', 'ORF');
}

function changeOrder() {
    debugger;
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
