document.addEventListener("DOMContentLoaded", function () {

  const gameCardsJSON = `[
    {
      "title": "Luna Park Caotico",
      "type": "Luogo",
      "encounterCost": 3,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Montagne Russe Infinite",
          "timeCost": 2
        },
        {
          "name": "Tunnel del Terrore Ridicoloso",
          "timeCost": 1
        },
        {
          "name": "Stand del Tiro al Bersaglio Magico",
          "timeCost": 3
        }
      ],
      "description": "Un colorato luna park con attrazioni esagerate e personaggi stravaganti.",
      "image": "./img/luna-park.jpg"
    },
    {
      "title": "Il Gatto Saggio",
      "type": "Personaggio",
      "encounterCost": 2,
      "bonusEffect": 1,
      "nextCards": [
        {
          "name": "Pergamena della Verità",
          "timeCost": 1
        },
        {
          "name": "Libro degli Enigmi",
          "timeCost": 2
        }
      ],
      "description": "Un gatto antropomorfo con occhiali e una sciarpa, che offre consigli criptici.",
      "image": "./img/gatto.jpg"
    },
    {
      "title": "Biblioteca del Mistero",
      "type": "Luogo",
      "encounterCost": 4,
      "bonusEffect": 3,
      "nextCards": [
        {
          "name": "Volume Perduto di Alchimia",
          "timeCost": 3
        },
        {
          "name": "Diario Segreto del Bibliotecario",
          "timeCost": 1
        }
      ],
      "description": "Una biblioteca antica con libri che contengono segreti.",
      "image": "./img/biblioteca.jpg"
    },
    {
      "title": "Il Fornaio Errante",
      "type": "Personaggio",
      "encounterCost": 1,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Torta della Forza",
          "timeCost": 1
        },
        {
          "name": "Biscotti dell'Agilità",
          "timeCost": 2
        }
      ],
      "description": "Un fornaio allegro su un furgoncino di dolci magici.",
      "image": "./img/panettiere.jpg"   
    },
    {
      "title": "Isola Fluttuante",
      "type": "Luogo",
      "encounterCost": 5,
      "bonusEffect": 3,
      "nextCards": [
        {
          "name": "Nido del Drago Aereo",
          "timeCost": 3
        },
        {
          "name": "Giardino Zen Volante",
          "timeCost": 1
        },
        {
          "name": "Fonte di Mana Celeste",
          "timeCost": 2
        }
      ],
      "description": "Un'isola sospesa in cielo, con creature volanti e piante che parlano.",
      "image": "./img/isola.jpg"
    },
    {
      "title": "Detective del Tempo",
      "type": "Personaggio",
      "encounterCost": 3,
      "bonusEffect": 0,
      "nextCards": [
        {
          "name": "Indizio d'Epoca Vittoriana",
          "timeCost": 1
        },
        {
          "name": "Ricordo del Futuro",
          "timeCost": 2
        },
        {
          "name": "Orologio Spaziotemporale",
          "timeCost": 3
        }
      ],
      "description": "Un investigatore che può viaggiare nel tempo, offrendo indizi da varie ere.",
      "image": "./img/detective.jpg"
    },
    {
      "title": "Mercato delle Meraviglie",
      "type": "Luogo",
      "encounterCost": 2,
      "bonusEffect": 1,
      "nextCards": [
        {
          "name": "Stallone delle Pozioni Rare",
          "timeCost": 2
        },
        {
          "name": "Banco degli Amuleti Perduti",
          "timeCost": 1
        },
        {
          "name": "Tendone delle Carte Fatate",
          "timeCost": 3
        }
      ],
      "description": "Un mercato notturno con oggetti magici e venditori mitologici.",
      "image": "./img/mercato.jpg"
    },
    {
      "title": "La Pirata dello Spazio",
      "type": "Personaggio",
      "encounterCost": 4,
      "bonusEffect": -1,
      "nextCards": [
        {
          "name": "Assalto al Convoglio Stellare",
          "timeCost": 3
        },
        {
          "name": "Tesoro del Pianeta Dimenticato",
          "timeCost": 2
        }
      ],
      "description": "Capitano di una nave spaziale a forma di galeone, naviga i flussi astrali.",
      "image": "./img/pirata.jpg"
    },
    {
      "title": "Giardini Sospesi di Harmonia",
      "type": "Luogo",
      "encounterCost": 5,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Sentiero dei Fiori Cantanti",
          "timeCost": 1
        },
        {
          "name": "Laghetto delle Ninfe",
          "timeCost": 2
        },
        {
          "name": "Albero della Saggezza Antica",
          "timeCost": 3
        }
      ],
      "description": "Giardini lussureggianti che fluttuano in bolle d'aria, con piante e animali fantastici.",
      "image": "./img/giardino.jpg"
    },
    {
      "title": "L'Inventore Folle",
      "type": "Personaggio",
      "encounterCost": 2,
      "bonusEffect": -2,
      "nextCards": [
        {
          "name": "Macchina del Tempo Difettosa",
          "timeCost": 3
        },
        {
          "name": "Robot Assistente Maldestro",
          "timeCost": 1
        },
        {
          "name": "Razzo Sperimentale",
          "timeCost": 2
        }
      ],
      "description": "Uno scienziato con un laboratorio di invenzioni incredibili ma spesso difettose.",
      "image": "./img/scienziato.jpg"
    },
    {
      "title": "Città Sotterranea di Lumina",
      "type": "Luogo",
      "encounterCost": 4,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Cripta dei Cristalli Luminosi",
          "timeCost": 2
        },
        {
          "name": "Laboratorio Segreto Sotterraneo",
          "timeCost": 3
        },
        {
          "name": "Piazza del Mercato Nascosto",
          "timeCost": 1
        }
      ],
      "description": "Una città in una caverna gigante, illuminata da cristalli.",
      "image": "./img/citta.jpg"
    },
    {
      "title": "Il Cantastorie Fantasma",
      "type": "Personaggio",
      "encounterCost": 3,
      "bonusEffect": 1,
      "nextCards": [
        {
          "name": "Racconto delle Origini Dimenticate",
          "timeCost": 3
        },
        {
          "name": "Leggenda del Guerriero Senza Tempo",
          "timeCost": 1
        },
        {
          "name": "Saga del Re Perduto",
          "timeCost": 2
        }
      ],
      "description": "Un'ombra eterea che narra storie del passato, presente e futuro.",
      "image": "./img/cantastorie.jpg"
    },
    {
      "title": "Accademia di Magia Antica",
      "type": "Luogo",
      "encounterCost": 5,
      "bonusEffect": 3,
      "nextCards": [
        {
          "name": "Aula delle Pozioni Avanzate",
          "timeCost": 2
        },
        {
          "name": "Biblioteca degli Incantesimi Obsoleti",
          "timeCost": 1
        },
        {
          "name": "Torre dell'Astronomia Magica",
          "timeCost": 3
        }
      ],
      "description": "Un'antica scuola di magia con aule e incantesimi dimenticati.",
      "image": "./img/scuola.jpg"
    },
    {
      "title": "La Ladra di Sogni",
      "type": "Personaggio",
      "encounterCost": 1,
      "bonusEffect": -3,
      "nextCards": [
        {
          "name": "Memoria Rubata",
          "timeCost": 2
        },
        {
          "name": "Incubo Intrappolato",
          "timeCost": 3
        },
        {
          "name": "Sogno D'oro",
          "timeCost": 1
        }
      ],
      "description": "Una misteriosa ladra che ruba ricordi e sogni, lasciando indizi per il recupero.",
      "image": "./img/ladra.jpg"
    },
    {
      "title": "Il Circo delle Illusioni",
      "type": "Luogo",
      "encounterCost": 2,
      "bonusEffect": 0,
      "nextCards": [
        {
          "name": "Tenda della Divinazione",
          "timeCost": 1
        },
        {
          "name": "Spettacolo di Fuoco Fatato",
          "timeCost": 2
        },
        {
          "name": "Acrobazie Aeree Mozzafiato",
          "timeCost": 3
        }
      ],
      "description": "Un circo itinerante dove nulla è come sembra, con artisti che sfidano la realtà.",
      "image": "./img/circo.jpg"
    }
  ]`;

  const container = document.querySelector('.container')
  container.innerHTML = ''
  const InputText = document.querySelector('.search__input')
  const searchBtn = document.querySelector('.search__button')
  const resetBtn = document.querySelector('.reset__button')
  const cards = JSON.parse(gameCardsJSON)
  let singleCard = []


  // Stampo tutte le card in pagina
  printCard(cards)
  
  // Con il pulsante di ricerca filtro le cards in base al valore inserito nel campo input
  searchBtn.addEventListener('click', function () {
   
    for (let index = 0; index < cards.length; index++) {
      const element = cards[index];
      if (element.title.toLowerCase().includes(InputText.value.toLowerCase())) {
        singleCard.push(element)
        container.innerHTML = ''
        printCard(singleCard)
      }
    }
  })
  
  // Pulsante di reset che ristampa in pagina tutte le card e svuota il campo Input
  resetBtn.addEventListener('click', function () {
    container.innerHTML = ''
    singleCard = []
    console.log(singleCard);
    InputText.value = ''
    printCard(cards)
  })

// Funzione che stampa le card in base all'array che gli passiamo
  function printCard(array) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      const nextCards = element.nextCards
      template =
        `<div class="card">
        <div class="card__front">
          <div class="card__header">
            <img src="${element.image}" alt="">
    
          <div class="card__header-badges">
            <div class="badge badge--encounter-cost">${element.encounterCost}</div>
            <div class=" badge badge--bonus-effect">${element.bonusEffect}</div>
          </div>
        </div>
        <div class="card__content">
        <h2 class="title">${element.title}
            
        </h2>
        <p class="description">${element.description}
            
        </p>
        </div>
       </div>
    
        <div class="card__back">
        <h2 class="title">Next cards</h2>
        <ul>
          `
      for (let index = 0; index < nextCards.length; index++) {
        const element = nextCards[index];
        template +=
          `<li class="next-card">${element.name}</li>
          <li><p> Costo tempo: ${element.timeCost}</p></li>`
      }
      template +=
        `        
          </ul>
          </div>
          <div class="card__footer">
          <button class="btn read-more">Flip</button>
          </div>
          </div>
      `
      container.innerHTML += template
    }
    const flipButton = document.querySelectorAll('.read-more')

    for (let index = 0; index < flipButton.length; index++) {
      const buttonFlip = flipButton[index];
      buttonFlip.addEventListener('click', function () {
        this.closest('.card').classList.toggle('is-flipped')
      })

    }
  }
})
