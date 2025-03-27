class MapHandler {
    constructor() {
        this.map = null;
        this.marker = null;
        this.autocomplete = null;
        this.defaultLocation = { lat: -14.235004, lng: -51.92528 };
    }

    init() {
        this.initializeMap();
        this.setupAutocomplete();
        this.setupMarkerDrag();
    }

    initializeMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: this.defaultLocation
        });

        this.marker = new google.maps.Marker({
            map: this.map,
            draggable: true,
            position: this.defaultLocation
        });
    }

    setupAutocomplete() {
        const input = document.getElementById('endereco');
        this.autocomplete = new google.maps.places.Autocomplete(input, {
            componentRestrictions: { country: 'br' },
            fields: ['address_components', 'geometry', 'formatted_address']
        });

        this.autocomplete.addListener('place_changed', () => this.handlePlaceSelection());
    }

    handlePlaceSelection() {
        const place = this.autocomplete.getPlace();
        if (!place.geometry) {
            alert('Endereço não encontrado');
            return;
        }

        this.map.setCenter(place.geometry.location);
        this.map.setZoom(17);
        this.marker.setPosition(place.geometry.location);
        this.updateCoordinates(place.geometry.location);
        document.getElementById('endereco').value = place.formatted_address;
    }

    setupMarkerDrag() {
        this.marker.addListener('dragend', () => {
            const position = this.marker.getPosition();
            this.updateCoordinates(position);
            this.updateAddress(position);
        });
    }

    updateCoordinates(position) {
        let lat, lng;
        
        if (typeof position.lat === 'function') {
            // Handle Google Maps LatLng object
            lat = position.lat();
            lng = position.lng();
        } else {
            // Handle regular position object
            lat = position.lat;
            lng = position.lng;
        }
        
        document.getElementById('latitude').value = lat;
        document.getElementById('longitude').value = lng;
    }

    updateAddress(position) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: position }, (results, status) => {
            if (status === 'OK' && results[0]) {
                document.getElementById('endereco').value = results[0].formatted_address;
            }
        });
    }
}

// Create a single instance of MapHandler
const mapHandler = new MapHandler();

// Initialize map when Google Maps API is loaded
window.initMap = function() {
    mapHandler.init();
};

// Add getCurrentLocation function
window.getCurrentLocation = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                mapHandler.map.setCenter(pos);
                mapHandler.map.setZoom(17);
                mapHandler.marker.setPosition(pos);
                mapHandler.updateCoordinates(pos);
                mapHandler.updateAddress(pos);
            },
            () => {
                alert('Erro ao obter localização atual.');
            }
        );
    } else {
        alert('Seu navegador não suporta geolocalização.');
    }
};