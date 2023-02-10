const data = require("./data.json");

  
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function combineElements() {
    const scope = getRandomElement(Object.keys(data.Scopes));
    let sector;
    
    if (Array.isArray(data.Scopes[scope])) {
      sector = getRandomElement(data.Scopes[scope]);
    } else {
      sector = data.Scopes[scope];
    }
    
    const usedTechnologies = new Set();
    const technologies = [];
    
    while (technologies.length < 3) {
      const technology = getRandomElement(Object.keys(data.Technologies));
      if (!usedTechnologies.has(technology)) {
        usedTechnologies.add(technology);
        technologies.push(technology);
      }
    }
    
    const usedTechnologyFeatures = new Set();
    const technologyFeatures = [];
    
    for (const technology of technologies) {
      const technologyFeature = getRandomElement(data.Technologies[technology]);
      if (!usedTechnologyFeatures.has(technologyFeature)) {
        usedTechnologyFeatures.add(technologyFeature);
        technologyFeatures.push(technologyFeature);
      }
    }
    
    console.log(`Scope: ${scope}`);
    console.log(`Sector: ${sector}`);
    console.log(`Technologies: ${technologies.join(', ')}`);
    console.log(`Technology Features: ${technologyFeatures.join(', ')}`);

    let string = `Scope: ${scope}\n`;
    string += `Sector: ${sector}\n`;
    string += `Technologies: ${technologies.join(', ')}\n`;
    string += `Technology Features: ${technologyFeatures.join(', ')}\n`;

    return string;
  }
  
  module.exports = {generate:combineElements}
  
  
  