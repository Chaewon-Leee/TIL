$('input#search-input').on({focus: function () {
    // $('div.input-group').unbind('mouseout');
    $('button.button-addon2').css("background-color", "white");
    $('input#search-input').css("background-color", "white");
    // stopImmediatepropagation();
},
    blur: function () {
    $('button.button-addon2').css("background-color", "#E1DFDD");
    $('input#search-input').css("background-color", "#E1DFDD");
}
});

$('.input-group').on({
    mousemove: function () {
        $('button.button-addon2').css("background-color", "white");
        $('input#search-input').css("background-color", "white");
    },
    mouseout: function () {
        $('button.button-addon2').css("background-color", "");
        $('input#search-input').css("background-color", "");
    }
});
