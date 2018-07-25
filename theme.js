'use strict';
/**
 * Configuration for angular material custom theme .
 *
 * The goal of this file is to allow the custom theme setup
 * for more infomation visit
 * https://material.io/guidelines/style/color.html#color-color-palette
*/

angular.module('appraiser')
.config(['$mdThemingProvider', 
	function($mdThemingProvider) {

	$mdThemingProvider.definePalette('primary', {
	    '50':  'de5245',
	    '100': '029be7',
	    '200': '029be7',
	    '300': '35ba77',
	    '400': '029be7',
	    '500': '0099e6', //on bg color raised
	    '600': '0099e6', //on hover raised button 
	    '700': '35ba77',
	    '800': '35ba77',
	    '900': '35ba77',
	    'A100': '0099e6', //warn
	    'A200': '35ba77',//warn
	    'A400': '4ead79',//accent on mouse hover 
	    'A700': '4ead79',//accent on mouse hover 
	    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
	                                        // on this palette should be dark or light
	    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
	    '200', '300', '400', 'A100'],
	    'contrastLightColors': undefined    // could also specify this if default was 'dark'
	});
	$mdThemingProvider.theme('default')
	    .accentPalette('primary')
	    .primaryPalette('primary');
	    //md-raised for button 
	}
]);

