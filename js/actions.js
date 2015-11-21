var fn = {
        ready: function(){
          document.addEventListener("deviceready",geo.getPosition,false);  
        },
        init: function () {
                   //fn.drawMap(19.0538128,-98.2223255);
            
                    
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