function SaveItem() {

    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    doShowAll();

}

function ModifyItem() {
    var name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value = localStorage.getItem(name);
    doShowAll();
}

function RemoveItem() {
    var name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value = localStorage.removeItem(name);
    doShowAll();
}

function ClearAll() {
    localStorage.clear();
    doShowAll();
}

// dynamically draw the table

function doShowAll() {
    if (CheckBrowser()) {
        var key = '';
        var list = "<tr><th>Name</th><th>Value</th></tr>";
        var i = 0;
        for (i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td><td>"
					+ localStorage.getItem(key) + "</td></tr>";
        }
        if (list == "<tr><th>Name</th><th>Value</th></tr>") {
            list += "<tr><td><i>empty</i></td><td><i>empty</i></td></tr>";
        }
        document.getElementById('list').innerHTML = list;
    } else {
        console.log('Cannot store shopping list as your browser do not support local storage');
    }
}

/*
 * Checking the browser compatibility.
 * 
 * Alternately can use Modernizr scripts- JavaScript library that helps us to
 * detect the browser support for HTML5 and CSS features Example - <script
 * type="text/javascript" src="modernizr.min.js"></script>
 * 
 * if (Modernizr.localstorage) { //use localStorage object to store data } else {
 * alert('Cannot store user preferences as your browser do not support local
 * storage'); }
 */
function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // we can use localStorage object to store data
        return true;
    } else {
        return false;
    }
}