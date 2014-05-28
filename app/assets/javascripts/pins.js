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
		zoom: 13
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	var geocoder = new google.maps.Geocoder();
	var pins = [];


	// $.ajax({
 //      // url: form.attr('action'),
 //      // method: form.attr('method'),
 //      url: "/events.json",
 //      method: "get",
 //      data: {
 //        "events": {
 //          "latitude": latitude,
 //          "longitude": longitude
 //        } //events
 //      }, //data
 //      dataType: "json",
 //      success: function(data) {
 //          console.log("events get");

 //        var span = $('.antmachine');
 //        var post =  "<li>"+data.latitude + ", " + data.longitude + "</li>" ;
 //        span.append(post);
 //        // $('post').val('');
 //      }, //success
 //      error: function(){
 //        alert("Server no love you long time");
 //      } //error
 //    }); // AJAX CLOSURE








	// grabs DB pins
	$.get('/events.json').done(function(data) {
		pins = data;
		$.each(pins, function(index, item){
			addPin(item.latitude, item.longitude);
		}); //$.each closure
	}); //$.get closure

	var addPin = function(lat, long){

		var loc = new google.maps.LatLng(lat, long);

		var newMarker = new google.maps.Marker({
			position: loc,
			map: map,
			title: "BOOM!"
		}); // newMarker closure

	var newInfoWindow = new google.maps.InfoWindow({
		content: "<h3>lat: " + lat + ", long: " + long + "</h3>"
	}); //newInfoWindow closure

		addInfoWindowListener(newMarker, newInfoWindow);
	}; //invokes function defined below

	var placeMaker = function(loc){
		var newMarker = new google.maps.Marker({
			position: loc,
			map: map,
			title: "BOOM2!"
		}); 
	};  // placeMaker closure

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
		});  //google maps event listener closure
	}; //addInfoWindowListener closure

	google.maps.event.addListener(map, 'click', function(event) {
		var lat = event.latLng.lat();
		var lng = event.latLng.lng();


	// 	$.ajax({
	// 		url: "/pins.json",
	// 		method: "get",
	// 		data: {
	// 			"pin": {
	// 				"latitude": lat,
	// 				"longitude": lng,
	//				"updated_at": updat
	// 			} //pin closure
	// 		}, //data closure
	// 		dataType: "json",

	// 		success: function(data) {
	// 			addPin(data.latitude, data.longitude, data.name);
	// 		}, //success

	// 		error: function(){
	// 			alert("Server is at lunch!");
	// 		} //error

	// 	}); //$.ajax closure

	}); // google.maps.event Listener closure

	};  // INITIALIZE CLOSURE  initialize(currentPosition) 

	var initializeWithDefault = function(){
		var currentPosition = {coords: {latitude: "37.7586", longitude: "-122.4902"}}; 
		initialize(currentPosition);
	}; //initializeWithDefault closure

	var geoLocate = function(){
		if(!!navigator.geolocation){
			navigator.geolocation.getCurrentPosition(initialize, initializeWithDefault)
		} else {
			initializeWithDefault();
		}
	}; //geoLocate closure
	
	if(location.pathname === "/pins/new") {
		geoLocate();
	} // if pathname closure

// 



}); //DOCUMENT READY CLOSURE


