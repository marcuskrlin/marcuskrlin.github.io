//RANDOM THEME
// Change the 'header-image-' to something more relevant if you're not working with header images
var randomNumber =  Math.floor( (Math.random() * 3) + 1 );
bodyClass = 'theme' + randomNumber;
body = document.getElementsByTagName( 'body' )[0];

// Apply the random body class to the body element
body.classList.add( bodyClass );

//filtering functions and buttons
function filt(poop) {
    if (poop == 'all') {
        $(document.getElementsByClassName("content")).fadeIn();
        $(document.getElementsByClassName("subcontent")).fadeIn();
    } else if (poop != 'all' && poop != 'texty') {
        var items, notitems, notitemssub;
        notitems = document.querySelectorAll(".content:not(."+poop+")");
        notitemssub = document.querySelectorAll(".subcontent:not(."+poop+")");
        items = document.getElementsByClassName(poop);
        //fade out only unneeded items
        for (let i = 0; i<notitems.length; i++) {
            notitems[i].style.display = "none";
        }
        for (let i = 0; i<notitemssub.length; i++) {
            notitemssub[i].style.display = "none";
        }
        //fade in filtered out items
        $(items).fadeIn("slow");        
    } else if (poop == 'texty') {
        var text;
        text = document.getElementsByClassName("desc");
        $(text).fadeToggle();
    }
}
