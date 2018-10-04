$(document).ready(function()
{
    var styleToggled = false;
    var stylesheet = document.querySelectorAll("link")[2];

    function toggle() {
        if(!styleToggled)
        {
            // Switch from tiles to list view
            stylesheet.href = "styles/project-list-display.css";
            styleToggled = true;
        } else {
            stylesheet.href = "styles/project-tile-display.css";
            styleToggled = false;
        }
    }

    $(".styleToggle").click(() => {
        toggle();
    });

    if(document.documentElement.clientWidth <= 650)
    {
        $(".styleToggle")[0].checked = true;
        toggle();
    }

    $(window).on('resize', function()
    {
        if(document.documentElement.clientWidth <= 650 && !styleToggled)
        {
            $(".styleToggle")[0].checked = true;
            toggle();   
        }
    });

});