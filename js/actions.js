var fn = {
        ready: function(){
            alert("cero");
          document.addEventListener("deviceready",geo.getPosition,false);  
        },
        drawMap: function(lat,lng){
        //Posición del mapa
                    var latlng = new google.maps.LatLng(lat, lng);
                    var myOptions = {
                        zoom: 16,
                        center: latlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
                    //Marcador
                    var marker = new google.maps.Marker({
                        position: latlng, 
                        map: map, 
                        title:"Mi posición"
                    });

        
    }
}
$(fn.ready);