import { useEffect, useRef, useState } from "react";

const GoogleMapsComponent = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [directionsService, setDirectionsService] = useState(null);
    const [directionsRenderer, setDirectionsRenderer] = useState(null);
    const [infowindow, setInfowindow] = useState(null);

    useEffect(() => {
        if (!window.google) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB9lbmNDP48H2lEqZ3mHt3P33MRjT9RBnk&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = () => initMap();
            document.head.appendChild(script);
        } else {
            initMap();
        }
    }, []);

    const initMap = () => {
        if (!mapRef.current) return;
        
        const googleMap = new window.google.maps.Map(mapRef.current, {
            center: { lat: -14.235, lng: -51.9253 },
            zoom: 5,
        });

        setMap(googleMap);
        setInfowindow(new window.google.maps.InfoWindow());
        setDirectionsService(new window.google.maps.DirectionsService());
        setDirectionsRenderer(new window.google.maps.DirectionsRenderer());
    };

    const buscarVeterinarios = (location) => {
        if (!map) return;

        const request = {
            location,
            radius: 5000,
            type: ["veterinary_care"],
        };

        const service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                results.forEach((place) => {
                    const marker = new window.google.maps.Marker({
                        position: place.geometry.location,
                        map,
                        title: place.name,
                    });

                    marker.addListener("click", () => {
                        service.getDetails({ placeId: place.place_id }, (details, status) => {
                            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                                infowindow.setContent(`
                                    <h3>${details.name}</h3>
                                    <p><b>Avaliação:</b> ${details.rating || "Sem avaliações"} ⭐</p>
                                    <p><b>Endereço:</b> ${details.formatted_address || "Não informado"}</p>
                                    <p><b>Telefone:</b> ${details.formatted_phone_number || "Não informado"}</p>
                                    <p><b>Website:</b> <a href="${details.website || details.url}" target="_blank">Visitar</a></p>
                                `);
                                infowindow.open(map, marker);
                            }
                        });
                    });
                });
            } else {
                alert("Nenhum veterinário encontrado!");
            }
        });
    };

    return (
        <div>
            <input
                id="search-box"
                type="text"
                placeholder="Buscar veterinários..."
                style={{ padding: "10px", width: "90%", margin: "0 auto" }}
            />
            <div ref={mapRef} style={{ width: "90%", height: "100vh", margin: "0 auto" }} />
        </div>
    );
};

export default GoogleMapsComponent;
