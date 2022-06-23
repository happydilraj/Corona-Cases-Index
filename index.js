function update() {
    fetch("/data.json")           //api for the get request
        .then(response => response.json())
        .then(res => {
            console.log(res)


            res.data.forEach(element => {


                longitude = element.longitude;
                latitude = element.latitude;
                cases = element.infected;

                if(cases >= 255)
                color = "rgb(255,0,0)";

                else
                color = `rgb($cases,0,0)` 


                const marker1 = new mapboxgl.Marker({
                    draggable: false,
                    color : color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map)
                 });
                map.addControl(new mapboxgl.FullscreenControl());
                map.addControl(
                new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    mapboxgl: mapboxgl
                })
            );
        });
        




}

update();

