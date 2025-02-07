const result = document.getElementById('result-artist');
const playlistContainer = document.getElementById('result-playlist');
const searchInput = document.getElementById('search-input');

function requestApi(searchTerm) {
    fetch(`http://localhost:5500/artists?name_like=${searchTerm}`) // Corrigido URL
      .then(response => response.json())
      .then(results => displayResults(results))
      .catch(error => console.error('Erro na API:', error));
  }

  function displayResults(results) {
    hidePlaylist();
  
    const artistsImage = document.getElementById("artist-img");
    const artistsName = document.getElementById("artist-name");
  
    if (results.length === 0) {
      resultArtist.classList.add("hidden");
      playlistContainer.classList.remove("hidden");
      return;
    }
  
    results.forEach(element => {
      artistsImage.src = element.urlImg; // Corrigido src
      artistsName.innerText = element.name;
    });
  
    resultArtist.classList.remove("hidden");
  }

function hidePlaylist() {
    playlistContainer.classList.add('hidden');
}


searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === "") {
      resultArtist.classList.add("hidden");
      playlistContainer.classList.remove("hidden");
      return;
    }
  
    requestApi(searchTerm);
  });
