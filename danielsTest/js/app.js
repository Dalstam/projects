'use strict';

angular.module('eetStadApp', [])

.controller('teaserController', function() {

    var teasers = [{
        header: 'Elk seizoen nieuwe smaken, geuren en kleuren',
        image: '../img/appleT.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed elit at est vestibulum tristique eleifend sed sem. Mauris sodales lacus odio, nec posuere orci vehicula vitae. Fusce ipsum tellus, tristique a finibus eu, ultrices eget dolor. Vivamus elementum posuere eros, a dictum sem. Fusce efficitur eros ac urna euismod, ac hendrerit magna rutrum.',
        link: 'page_2',
    }, {
        header: 'Samen eten delen',
        image: '../img/food_to_share.jp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed elit at est vestibulum tristique eleifend sed sem. Mauris sodales lacus odio, nec posuere orci vehicula vitae. Fusce ipsum tellus, tristique a finibus eu, ultrices eget dolor. Vivamus elementum posuere eros, a dictum sem. Fusce efficitur eros ac urna euismod, ac hendrerit magna rutrum.',
        link: 'page_2',
    }, {
        header: 'Waar',
        image: '../img/map-with-pin.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed elit at est vestibulum tristique eleifend sed sem. Mauris sodales lacus odio, nec posuere orci vehicula vitae. Fusce ipsum tellus, tristique a finibus eu, ultrices eget dolor. Vivamus elementum posuere eros, a dictum sem. Fusce efficitur eros ac urna euismod, ac hendrerit magna rutrum.',
        link: 'page_2',
    }, {
        header: 'Hoe?',
        image: '../img/food_to_share.jpg"',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed elit at est vestibulum tristique eleifend sed sem. Mauris sodales lacus odio, nec posuere orci vehicula vitae. Fusce ipsum tellus, tristique a finibus eu, ultrices eget dolor. Vivamus elementum posuere eros, a dictum sem. Fusce efficitur eros ac urna euismod, ac hendrerit magna rutrum.',
        link: 'page_2',
    }];
    
    this.teasers=teasers;

});