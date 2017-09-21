// Flip an element on hover or on click
rh.test.flip = {
    attr: {
        trigger: "data-test-flip-on",
        visible: "data-test-visible"
    },
    action: function( $el ) {
        const index = $( "[" + this.attr.trigger + "]" ).index( $el );
        const direction = index % 2 === 0 ? "next" : "prev";

        $el.toggle();
        $el[ direction ]().toggle();
    }
};

// For all flip-enabled elements, attach an on click or on hover event
$( "[" + rh.test.flip.attr.trigger + "]", context ).each( function( idx, val ) {
    // Add your trigger event here
    $( val ).on( "click", function() {
        rh.test.flip.action( $( this ) );
    } );
} );
