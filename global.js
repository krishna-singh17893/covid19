function updateMap() {

    fetch("././assets/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data);
            rsp.data.forEach(element => {
                lat = element.latitude;
                long = element.longitude;
                cases = element.infected;
                let clr;
                if(cases > 1000) clr = "rgb(255,0,0)";
                else if( cases >500) clr = "rgb(100,20,0)";
                else if(cases > 100) clr = "rgb(20,100,0)";
                else clr = "rgb(0,255,0)";

                new mapboxgl.Marker({
                    color: clr
                })
                    .setLngLat([long, lat])
                    .addTo(map);
            });

        });
}

updateMap();

//pk.eyJ1IjoibmVlbGFiaCIsImEiOiJja3JkN3RrejQ0dDg5MndueG53aWM2bXV3In0.Sg379L0dxNdhm-ULUyboow