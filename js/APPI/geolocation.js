var geo = {
    getPosition: function(){
        alert("uno");
        navigator.geolocation.getCurrentPosition(geo.succeess, geo.error);
    },
    success: function(pos){
        fn.drawMap(pos.coords.latitude,pos.coords.longitude);
    },
    error: function(err){
        alert(errr.code);
    }
}