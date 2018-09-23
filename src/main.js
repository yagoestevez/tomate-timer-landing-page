/**
 * Brought to you by Yago Estévez. https://twitter.com/yagoestevez
 */
require( "babel-runtime/regenerator" );
require( './index.html'              );
require( './scss/main.scss'          );

/** Menu toggler **/
document.querySelector( '.navbar__toggler' ).addEventListener( 'click', ( ) => {
  const menu = document.querySelector( '.navbar__links' )
  if ( !menu.classList.contains( 'show' ) )
    menu.classList.add( 'show' );
  else
    menu.classList.remove( 'show' );
} );

/** Smooth Scrolling **/
(function navSmoothScrolling ( ) {
  const navLinks = document.querySelectorAll( '.nav-link' );

  for ( let n in navLinks ) {
    if ( navLinks.hasOwnProperty( n ) ) {
      navLinks[ n ].addEventListener( 'click', e => {
        e.preventDefault( );
        document.querySelector( '.navbar__links' ).classList.remove( 'show' );
        document.querySelector( navLinks[ n ].hash )
          .scrollIntoView( {
            block   : "start",
            behavior: "smooth"
          } );
      } );
    }
  }
})( );

/** ScrollSpy **/
(function scrollSpy( ) {
  const sections = document.querySelectorAll( '.section' );

  window.onscroll = ( ) => {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    scrollPos += window.innerHeight / 2;

    for ( let s in sections )
      if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
        const id = sections[ s ].id;
        document.querySelector( '.active' ).classList.remove( 'active' );
        document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'active' );
        // document.querySelector( `#${ id }` ).classList.add( 'show' );
      }
  }  
})( );

/** Send Form **/
(function sendForm ( ){
  document.querySelector( '#form' ).addEventListener( 'submit', e => {
    e.preventDefault( );
    document.querySelector( '.newsletter__box'  ).classList.add( 'sent' );
    document.querySelector( '.newsletter__form' ).style = 'opacity: 0';
    document.querySelector( '.newsletter__sent' ).style = 'opacity: 1';
    document.querySelector( '#email'  ).style = 'pointer-events: none';
    document.querySelector( '#submit' ).style = 'pointer-events: none';
  } );
})( );