let map, marker, geocoder;

function initMap() {
    geocoder = new google.maps.Geocoder();
    const defaultLocation = { lat: -23.550520, lng: -46.633308 }; // São Paulo

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: defaultLocation,
    });

    marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        draggable: true
    });

    // Update address when marker is dragged
    marker.addListener('dragend', function() {
        const position = marker.getPosition();
        updateLocationInfo(position);
    });

    // Initialize the places autocomplete
    const input = document.getElementById('endereco');
    const autocomplete = new google.maps.places.Autocomplete(input);

    // Update marker when place is selected
    autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        if (!place.geometry) return;

        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
        updateLocationInfo(place.geometry.location);
    });
}

function updateLocationInfo(location) {
    // Update hidden lat/lng inputs
    document.querySelector('input[name="latitude"]').value = location.lat();
    document.querySelector('input[name="longitude"]').value = location.lng();

    // Update address field
    geocoder.geocode({ location: location }, (results, status) => {
        if (status === 'OK' && results[0]) {
            document.getElementById('endereco').value = results[0].formatted_address;
        }
    });
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                map.setCenter(pos);
                marker.setPosition(pos);
                updateLocationInfo(pos);
            },
            () => {
                alert('Erro ao obter localização atual.');
            }
        );
    } else {
        alert('Seu navegador não suporta geolocalização.');
    }
}