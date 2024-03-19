fetch('https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json')
  .then(response => response.json())
  .then(data => {
    const prophetTemplate = document.getElementById('prophet-card');

    function renderProphetCard(prophet) {
      const card = prophetTemplate.content.cloneNode(true);

      card.querySelector('h2').textContent = `${prophet.name} ${prophet.lastname}`;
      card.querySelector('p:nth-of-type(1)').textContent = `Birthdate: ${prophet.birthdate}`;
      card.querySelector('p:nth-of-type(2)').textContent = `Birthplace: ${prophet.birthplace}`;
      card.querySelector('.profile').src = prophet.imageurl;
      card.querySelector('.profile').alt = `${prophet.name} ${prophet.lastname}`;

      document.body.appendChild(card);
    }
    data.prophets.forEach(renderProphetCard);
  })
  .catch(error => console.error('Error fetching data:', error));

