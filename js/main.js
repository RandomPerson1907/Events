$( function() {
    $( ".block" ).draggable();
    $( ".block__drag__container" ).droppable({
        accept: '.block',
        activate: function( event, ui ) {
          $(this).addClass("droppable__active");
        },
        drop: function( event, ui ) {
            var block = ui.helper.clone();
            block.attr('style', '');
            block.appendTo($(this));
            block.draggable();
            ui.helper.remove();
            $(this).removeClass("droppable__active");
        },
        deactivate: function( event, ui ) {
            ui.helper.attr('style', 'position: relative');
            $(this).removeClass("droppable__active");
        }
    });
} );