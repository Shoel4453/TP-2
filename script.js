// Obtener datos de jugadores desde un archivo JSON
fetch('a.json')
  .then(response => response.json())
  .then(playersData => {
    // Seleccionar el contenedor de tarjetas
    const cardContainer = document.getElementById('card-container');
    const searchBar = document.getElementById('search-bar');

    // Función para crear las tarjetas de jugadores
    function createPlayerCards(filteredPlayers) {
        cardContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas
        filteredPlayers.forEach(player => {
            // Crear un elemento de tarjeta
            const card = document.createElement('div');
            card.classList.add('card');

            // Agregar contenido a la tarjeta
            card.innerHTML = `
                <img src="${player.img}" alt="${player.Nombre}">
                <h2>${player.Nombre}</h2>
                <a href="player.html?id=${player.id}" class="more-info">Más información</a>
            `;

            // Agregar la tarjeta al contenedor
            cardContainer.appendChild(card);
        });
    }

    // Crear las tarjetas con todos los jugadores al cargar la página
    createPlayerCards(playersData.players);

    // Filtrar jugadores según el texto ingresado en la barra de búsqueda
    searchBar.addEventListener('input', (event) => {
        const searchText = event.target.value.toLowerCase();
        const filteredPlayers = playersData.players.filter(player => 
            player.Nombre.toLowerCase().includes(searchText)
        );
        createPlayerCards(filteredPlayers);
    });
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });
