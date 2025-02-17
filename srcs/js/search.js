const result = document.getElementById('result-artist');
const playlistContainer = document.getElementById('result-playlist');
const searchInput = document.getElementById('search-input');





function requestApi(searchTerm) {
     fetch(`http://localhost:5500/artists?name_like=${searchTerm}`) // Corrigido URL
     //const url = `http://localhost:3000/artists?name_like=${searchTerm}`
      .then(response => response.json())
      .then(result => displayResults(result))
      .catch(error => console.error('Erro na API:', error));
  }

/**
 * Exibe os resultados da busca por artistas
 * 
 * @param {array} result - Array com os objetos de artistas
 * 
 * Se o array estiver vazio, oculta a div com o resultado do artista
 * e exibe a div com a lista de playlists.
 * Caso contr rio, exibe a div com o resultado do artista e a lista de
 * playlists  ocultada.
 */
  function displayResults(result) {
    hidePlaylist();
  
    const artistsImage = document.getElementById("artist-img");
    const artistsName = document.getElementById("artist-name");
  
    if (result.length === 0) {
      resultArtist.classList.add("hidden");
      playlistContainer.classList.remove("hidden");
      return;
    }
  
    result.forEach(element => {
      artistsImage.src = element.urlImg; // Corrigido src
      artistsName.innerText = element.name;
    });
  
    resultArtist.classList.remove("hidden");
  }

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Oculta a lista de playlists
 *
 * Adiciona a classe `hidden` na div com a lista de playlists
 */
/******  6ea16c85-c579-47d2-88b7-52be1395b142  *******/
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
