// Obtener el ID del jugador de la URL
const urlParams = new URLSearchParams(window.location.search);
const playerId = urlParams.get('id');

// Obtener datos de jugadores desde un archivo JSON
fetch('a.json')
  .then(response => response.json())
  .then(playersData => {
    const player = playersData.players.find(p => p.id == playerId);

    if (player) {
        const playerNameElement = document.getElementById('player');
        const playerDetailsElement = document.getElementById('player-details');

        // Agregar información del jugador a la página
        playerNameElement.textContent = player.Nombre;
        playerDetailsElement.innerHTML = `
        <div class="player-details-container" id="player-details-container">
            
            <img src="${player.img}" alt="${player.Nombre}">
            <p><strong>Equipo:</strong> ${player.Equipo}</p>
            <p><strong>Posición:</strong> ${player.Posicion}</p>
            <p><strong>Altura:</strong> ${player.Altura} (Pies)</p>
            <p><strong>Peso:</strong> ${player.Peso} lbs</p>
        </div>
        `;
    } else {
        // Manejar caso en que no se encuentre el jugador
        document.getElementById('player-details').textContent = 'Jugador no encontrado.';
    }
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });
