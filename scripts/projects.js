$(document).ready(function()
{
    var styleToggled = false;
    var stylesheet = document.querySelector("link");

    $(".styleToggle").click(function(){
        if(!styleToggled)
        {
            // Switch from tiles to list view
            stylesheet.href = "styles/project-list-display.css";
            styleToggled = true;
        } else {
            stylesheet.href = "styles/project-tile-display.css";
            styleToggled = false;
        }
    });

});