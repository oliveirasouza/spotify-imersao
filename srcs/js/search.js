const result = document.getElementById('result-artist');
const playlistContainer = document.getElementById('result-playlist');
const searchInput = document.getElementById('search-input');



function requestApi(searchTerm) {
    fetch(`https://localhost:5500/artists?name_like=${searchTerm}}`)
        .then(response => response.json())
        .then(result => displayResults(results));
}

function displayResults(results) {
    hidePlaylist();
    const artistsImage = document.getElementById("artist-img");
    const artistsName = document.getElementById("artist-name");

    results.forEach(elemet => {
        artistsImage.srcs = elemet.urlImg;
        artistsName.innerText = elemet.name;
    });
    resultArtist.classList.remove("hidden");
}

function hidePlaylist() {
    playlistContainer.classList.add('hidden');
}



searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        resultArtist.classList.add("hidden");
        playlistContainer.classList.remove("hidden");;
        return
    }
    requestApi(searchTerm);
});


