document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.querySelector('#searchInput');
    const searchIcon = document.querySelector('.header-search-icon');

    // Hide search bar initially
    searchBar.style.display = 'none';

    // Show/hide search bar when clicking the search icon
    searchIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        if (searchBar.style.display === 'none' || searchBar.style.display === '') {
            searchBar.style.display = 'flex';
            searchInput.focus();
        } else {
            searchBar.style.display = 'none';
        }
    });

    // Close search bar when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
            if (!searchInput.value) {
                searchBar.style.display = 'none';
            }
        }
    });
});