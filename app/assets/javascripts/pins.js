// "use strict";

$(document).ready(function(){

  // var map;
  // var directionsDisplay;
  // var directionsService = new google.maps.DirectionsService();
  // var stepDisplay;
  // var markerArray = [];
  var geocoder;
  var infowindow = new google.maps.InfoWindow();
  var marker;
  var map;




	//================================================================
	function initialize(currentPosition) {

	var currCoords = { lat: currentPosition.coords.latitude, long: currentPosition.coords.longitude };

	var mapOptions = {
		center: new google.maps.LatLng(currCoords.lat, currCoords.long),  // TODO change to current location
		// center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
		zoom: 12
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	var geocoder = new google.maps.Geocoder();
	var pins = [];

	//geolocation function (browser/GPS sensor)




  // function geoLocate() { 
  //   if(navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  //       var currentAddress = null;

  //       geocoder.geocode({'latLng': latlng}, function(results, status) {
  //         if (status == google.maps.GeocoderStatus.OK) {
  //           currentAddress = results[0].formatted_address;
  //           document.getElementById('address').value = currentAddress;
  //         } //inner if branch closure
  //       }); //geocoder.geocode  
  //     }); //getCurrentPosition function
  //   } //top if branch closure
  // } // geoLocate function closure



	// grabs DB pins
	$.get('/pins.json').done(function(data) {
		pins = data;
		$.each(pins, function(index, item){
			addPin(item.latitude, item.longitude, item.name);
		});
	});

	var addPin = function(lat, long, name){
		var loc = new google.maps.LatLng(lat, long);
		var newMarker = new google.maps.Marker({
			position: loc,
			map: map,
			title: "BOOM!"
		});
	var newInfoWindow = new google.maps.InfoWindow({
		content: "<h3>Added By: " + name + "</h3>"
	});
		addInfoWindowListener(newMarker, newInfoWindow);
	};
	var placeMaker = function(loc){
		var newMarker = new google.maps.Marker({
			position: loc,
			map: map,
			title: "BOOM2!"
		});
	};

	var lastInfoWindow;
	var addInfoWindowListener = function(marker, newInfoWindow){
		google.maps.event.addListener(marker, 'click', function() {
			if(!!lastInfoWindow){
				lastInfoWindow.close();
			}
			if(lastInfoWindow === newInfoWindow){
				lastInfoWindow = null;
			}
			else {
				newInfoWindow.open(map,this);
				lastInfoWindow = newInfoWindow;
			}
		});
	};
	google.maps.event.addListener(map, 'click', function(event) {
		var lat = event.latLng.lat();
		var lng = event.latLng.lng();
	
		$.ajax({
			url: "/pins",
			method: "post",
			data: {
				"pin": {
					"latitude": lat,
					"longitude": lng,
					}
				},
				dataType: "json",
				success: function(data) {
					addPin(data.latitude, data.longitude, data.name);
				},
				error: function(){
					alert("Server is at lunch!");
				}
			});
		});
	};

	var initializeWithDefault = function(){
		var currentPosition = {coords: {latitude: "37.758900", longitude: "-122.490349"}}; 
		initialize(currentPosition);
	};

	var geoLocate = function(){
		if(!!navigator.geolocation){
			navigator.geolocation.getCurrentPosition(initialize, initializeWithDefault)
		} else {
			initializeWithDefault();
		}
	};
	
	if(location.pathname === "/pins/new") {
		geoLocate();
	}

// 




});


