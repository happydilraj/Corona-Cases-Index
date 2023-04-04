
function update() {
    fetch("/data.json")           //api for the get request
        .then(response => response.json())
        .then(res => {
            // console.log(res)


            res.data.forEach(element => {


                longitude = element.longitude;
                latitude = element.latitude;
                cases = element.infected;
                country = element.name;

                if(cases >= 255)
                color = "rgb(255,0,0)";

                else
                color = `rgb($cases,0,0)` 

                const popup = new mapboxgl.Popup({ offset: 25 }).setText(
                    `Corona Cases in ${country} are ${cases}`
                  );


                const marker1 = new mapboxgl.Marker({
                    draggable: false,
                    color : color
                })
                // create DOM element for the marker
                const el = document.createElement("div");
                el.id = "marker";
                new mapboxgl.Marker(el)
                    .setLngLat([longitude, latitude])
                    .setPopup(popup)
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

