jQuery(document).ready(function($){

	var ajax_url = ajax_object.ajax_url;
	if($('.tz-gallery').length > 0) {
		baguetteBox.run('.tz-gallery');
	}

	if($('.project-single-slider').length > 0) {
		$('.project-single-slider').slick({
		  infinite: true,
		  speed: 800,
	  	  autoplaySpeed: 1000,
	  	  arrows: true,
		  adaptiveHeight: true,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ] 
		});
	}

	setTimeout(function(){
		if($('.fav-projs').length > 0) {
			$('.fav-projs').each(function(){
				var curProj = $(this);
				var curProjID = curProj.data('proj-id');
				console.log(curProjID);

				var data = {
		            action: 'fav_project',
		            id: curProjID
		        };

		        $.post(ajax_url, data, function(response){ 
					console.log(response);
					curProj.find('span').text('Sync Complete').css('color','#4b6574');
		        });
			});
		}

		if($('.update-projs').length > 0) {
			$('.update-projs').each(function(){
				var curProj = $(this);
				var curProjID = curProj.data('proj-id');
				console.log(curProjID);

				var data = {
		            action: 'project_update',
		            id: curProjID
		        };

		        $.post(ajax_url, data, function(response){ 
					console.log(response);
					curProj.find('span').text('Sync Complete').css('color','#4b6574');
		        });
			});
		}
	},2000);
});