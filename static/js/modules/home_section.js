'use strict'

var homeSection = (function() {

	var carousel = function() {
	  	$('.home__carousel').slick();
	};

	 var getFeedData = function() {
        
        aja()
           .url('https://api.instagram.com/v1/users/344623690/media/recent/?access_token=344623690.d014ab5.85410d9d6bb5444286844120d213af15')
           .type('jsonp')
           .cache('false')
           .on('success', function(data) {
                
       
         		// filter data with underscore.js
                var filteredData = _.map(data.data, function(photo) {
                	return _.pick(photo, 'link', 'images', 'caption');
                });

                renderData(filteredData)
           })
           .go();
    };

    var renderData = function(filteredData) {

        //declare directives
        var directives = {

            imageLink: {
                href: function(params) {
                    return this.link;
                }
            },
            imageCaption: {
                text: function(params) {
                	if(this.caption !== null){
                    	return this.caption.text;
                    }
                }
            },
            imageSrc: {
                src: function(params) {
                    return this.images.standard_resolution.url;
                }
            }
            
        };

        var homeFeed = document.getElementById('home__feed-ul');
        //render data
        Transparency.render(homeFeed, filteredData,  directives);
    };

    return {
    	carousel,
        getFeedData
    }

})();