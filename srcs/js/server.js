const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

let artists = [
    { id: 1, name: "Foo Fighters", genre: "Rock", urlImg: "https://i.scdn.co/image/ab67616100005174c884df599abc793c116cdf15" },
    { id: 2, name: "Michael Jackson", genre: "Pop", urlImg: "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa" },
    { id: 3, name: "Emicida", genre: "Hip Hop", urlImg: "https://i.scdn.co/image/ab67616100005174908b4b4bc90e1518b68b4068" },
    { id: 4, name: "Chitãozinho e Xororó", genre: "Sertanejo", urlImg: "https://i.scdn.co/image/ab676161000051744606c59411c57f7b49588be4" },
    { id: 5, name: "Mc Coringa", genre: "Funk", urlImg: "https://i.scdn.co/image/ab67616d00001e02fe8f6dd361ad0f12b88c7f56" },
    { id: 6, name: "Arlindo Cruz", genre: "Samba", urlImg: "https://i.scdn.co/image/ab67616100005174181873f93056642d7b340839" },
    { id: 7, name: "Caetano Veloso", genre: "MPB", urlImg: "https://i.scdn.co/image/ab67616100005174e98de50f36cf1aa4bf047757" }
  ];
  

  //Método DELETE para remover um artista pelo ID

app.delete('/artists/:id', (req, res) => {
    const id = req.params.id;
    const artistIndex = artists.findIndex(artist => artist.id === parseInt(id));
  
    if (artistIndex === -1) {
      return res.status(404).json({ error: 'Artista não encontrado' });
    }
  
    artists.splice(artistIndex, 1);
  
    res.status(204).send();
  });
  
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });

//   //Método POST para adicionar um novo artista
app.post('/artists', (req, res) => {
    const newArtist = req.body;
  
    artists.push(newArtist);
  
    res.status(201).json(newArtist);    
})

//Método PUT para atualizar um artista pelo ID

app.put('/artists/:id', (req, res) => {
    const id = req.params.id;
    const artistIndex = artists.findIndex(artist => artist.id === parseInt(id));
  
    if (artistIndex === -1) {
      return res.status(404).json({ error: 'Artista não encontrado' });
    }
  
    const updatedArtist = req.body;
  
    artists[artistIndex] = updatedArtist;
  
    res.status(200).json(updatedArtist);
  });

//Método GET para retornar todos os artistas
app.get('/artists', (req, res) => {
    res.status(200).json(artists);      
})

//Método GET para retornar um artista pelo ID
app.get('/artists/:id', (req, res) => {
    const id = req.params.id;
    const artist = artists.find(artist => artist.id === parseInt(id));
  
    if (!artist) {
      return res.status(404).json({ error: 'Artista não encontrado' });

    }
  
    res.status(200).json(artist);
  });

//Método GET para retornar um artista pelo nome
app.get('/artists/name/:name', (req, res) => {
    const name = req.params.name;
    const artist = artists.find(artist => artist.name === name);
  
    if (!artist) {
      return res.status(404).json({ error: 'Artista não encontrado' });
    }
  
    res.status(200).json(artist);
  });

//Método GET para retornar um artista pelo gênero
app.get('/artists/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    const artist = artists.find(artist => artist.genre === genre);
  
    if (!artist) {
      return res.status(404).json({ error: 'Artista não encontrado' });
    }
  
    res.status(200).json(artist);
})

//Método GET para retornar um artista pelo ID
app.get('/artists/:id', (req, res) => {
    const id = req.params.id;
    const artist = artists.find(artist => artist.id === parseInt(id));
  
    if (!artist) {
      return res.status(404).json({ error: 'Artista não encontrado' });
    }
  
    res.status(200).json(artist);
  });

  
  
    
