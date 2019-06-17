/**
 * Makes sure we have all the required levels on the Tribe Object
 *
 * @since  TBD
 *
 * @type   {PlainObject}
 */
tribe.events = tribe.events || {};
tribe.events.views = tribe.events.views || {};
tribe.events.views.manager = tribe.events.views.manager || {};

/**
 * Configures Views Tooltip Object in the Global Tribe variable
 *
 * @since  TBD
 *
 * @type   {PlainObject}
 */
tribe.events.views.tooltip = {};

/**
 * Initializes in a Strict env the code that manages the Event Views
 *
 * @since  TBD
 *
 * @param  {PlainObject} $   jQuery
 * @param  {PlainObject} _   Underscore.js
 * @param  {PlainObject} obj tribe.events.views.tooltip
 *
 * @return {void}
 */
( function( $, _, obj ) {
	'use strict';
	var $document = $( document );

	/**
	 * Selectors used for configuration and setup
	 *
	 * @since TBD
	 *
	 * @type {PlainObject}
	 */
	obj.selectors = {
		tooltip: '[data-js="tribe-events-tooltip"]',
		tooltipContent: '[data-js="tribe-events-tooltip-content"]',
	};

	/**
	 * Override of the `functionInit` tooltipster method.
	 *
	 * A custom function to be fired only once at instantiation.
	 *
	 * @since TBD
	 *
	 */
	obj.onFunctionInit = function( instance, helper ) {

		var content = $( helper.origin ).find( obj.selectors.tooltipContent ).html();
		instance.content( content );
		$( helper.origin )
			.focus( function() {
				obj.onOriginFocus( $( this ) )
			})
			.blur( function() {
				obj.onOriginBlur( $( this ) )
		});
	};

	/**
	 * On tooltip focus
	 *
	 * @since TBD
	 *
	 */
	obj.onOriginFocus = function( el ) {
		el.tooltipster( 'open' );
	};

	/**
	 * On tooltip blur
	 *
	 * @since TBD
	 *
	 */
	obj.onOriginBlur = function( el ) {
		el.tooltipster( 'close' );
	};

	/**
	 * Override of the `functionReady` tooltipster method.
	 *
	 * A custom function to be fired when the tooltip and its contents have been added to the DOM.
	 *
	 * @since TBD
	 *
	 */
	obj.onFunctionReady = function( instance, helper ) {

		$( helper.origin ).find( obj.selectors.tooltipContent ).attr( 'aria-hidden', false );
	};

	/**
	 * Override of the `functionAfter` tooltipster method.
	 *
	 * A custom function to be fired once the tooltip has been closed and removed from the DOM.
	 *
	 * @since TBD
	 *
	 */
	obj.onFunctionAfter = function( instance, helper ) {

		$( helper.origin ).find( obj.selectors.tooltipContent ).attr( 'aria-hidden', true );
	};

	/**
	 * Initialize accessible tooltips via tooltipster
	 *
	 * @since TBD
	 *
	 */
	obj.initTooltips = function() {

		$( obj.selectors.tooltip ).tooltipster( {
			interactive: true,
			theme: [ 'tribe-common', 'tribe-events', 'tribe-events-tooltip-theme' ],
			functionInit: function( instance, helper ) {
				obj.onFunctionInit( instance, helper );
			},
			functionReady: function( instance, helper ) {
				obj.onFunctionReady( instance, helper );
			},
			functionAfter: function( instance, helper ) {
				obj.onFunctionAfter( instance, helper );
			}
		} );
	};


	/**
	 * Handles the initialization of the scripts when Document is ready
	 *
	 * @since  TBD
	 *
	 * @return {void}
	 */
	obj.ready = function() {
		// @todo: make it work with variable instead of function, so it's triggered how's supposed to be
		tribe.events.views.manager.$containers.on( 'afterSetup.tribeEvents', obj.initTooltips() );
	};

	// Configure on document ready
	$document.ready( obj.ready );
}( jQuery, window.underscore || window._, tribe.events.views.tooltip ) );
