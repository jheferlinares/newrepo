const linksURL = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetsData() {
  const response = await fetch(linksURL);
  const data = await response.json();
 displayProphets(data.prophets);
}

getProphetsData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
    });
  };