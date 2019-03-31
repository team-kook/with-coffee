function initialize() {
	var Y_point			= 36.362857;		
	var X_point			= 127.348715;		
	var zoomLevel		= 16;						
	var markerTitle		= "With_Coffee";	
	var markerMaxWidth	= 300;						
	var contentString	= '<div>' +	"with_Coffee" + '</div>';
	var myLatlng = new google.maps.LatLng(Y_point, X_point);
	var mapOptions = {
						zoom: zoomLevel,
						center: myLatlng,
						mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById('map_view'), mapOptions);
	var marker = new google.maps.Marker({
											position: myLatlng,
											map: map,
											title: markerTitle
	});
	var infowindow = new google.maps.InfoWindow(
												{
													content: contentString,
													maxWidth: markerMaxWidth
												}
	);
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
}