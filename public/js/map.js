mapboxgl.accessToken= mapToken;
const map = new mapboxgl.Map({
    container: "map",
    style:"mapbox://styles/mapbox/streets-v12",
    center: listings.geometry.coordinates,
    zoom: 9,
});
   
const marker = new mapboxgl.Marker({color:"red"})
    .setLngLat(listings.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset:25}).setHTML(
            `<h4>${listings.location}</h4><p>Exact Location will be provided after booking</p>`
        )
    )
    .addTo(map);
