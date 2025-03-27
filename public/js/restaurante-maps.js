// Inicializa o mapa e o autocomplete do endereço
function initMap() {
    // Coordenadas iniciais (Brasil)
    const defaultLocation = { lat: -14.235004, lng: -51.92528 };
    
    // Inicializa o mapa
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: defaultLocation,
    });

    // Marcador para a localização selecionada
    let marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: defaultLocation
    });

    // Configura o Autocomplete
    const input = document.getElementById('endereco');
    const autocomplete = new google.maps.places.Autocomplete(input, {
        componentRestrictions: { country: 'br' },
        fields: ['address_components', 'geometry', 'formatted_address']
    });

    // Atualiza o mapa quando um endereço é selecionado
    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        if (!place.geometry) {
            alert('Endereço não encontrado');
            return;
        }

        // Atualiza o mapa
        map.setCenter(place.geometry.location);
        map.setZoom(17);

        // Atualiza o marcador
        marker.setPosition(place.geometry.location);

        // Atualiza os campos de latitude e longitude
        document.getElementById('latitude').value = place.geometry.location.lat();
        document.getElementById('longitude').value = place.geometry.location.lng();

        // Atualiza o campo de endereço com o endereço formatado
        input.value = place.formatted_address;
    });

    // Atualiza os campos quando o marcador é arrastado
    marker.addListener('dragend', () => {
        const position = marker.getPosition();
        document.getElementById('latitude').value = position.lat();
        document.getElementById('longitude').value = position.lng();

        // Atualiza o endereço usando Geocoding
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: position }, (results, status) => {
            if (status === 'OK' && results[0]) {
                input.value = results[0].formatted_address;
            }
        });
    });
}

// Inicializa o mapa quando a página carregar
window.addEventListener('load', initMap);