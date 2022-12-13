var searchBtn = document.querySelector('#searchButton');
var queryInput = document.querySelector('#queryParameter');
var formatInput = document.querySelector('#format');
var resultsEl = document.querySelector('#results');

// <!-- <div class="card">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <a href="#" class="card-link">Card link</a>
//   <a href="#" class="card-link">Another link</a>
// </div>
// </div> -->

var displayResults = function (results){
    
    // clears last results before populating more, otherwise it adds new results to bottom of old results
    resultsEl.innerHTML = null; 

    for (var result of results){
        
        // creating a CARD for every result with some margin
        var cardEl = document.createElement('div');
        cardEl.className = 'card m-3';
        
        //CARD BODY
        var cardBodyEl = document.createElement('div');
        cardBodyEl.className = 'card-body';
        
        // CARD TITLE
        var cardTitleEl = document.createElement('h5');
        cardTitleEl.className = 'card-title';
        cardTitleEl.textContent = result.title;
        
        // CARD TEXT
        var cardTextEl = document.createElement('p');
        cardTextEl.className = 'card-text';
        
        if (typeof results.description === 'string'){
            cardTextEl.textContent = result.description;
        } else if (result.description) {
            cardTextEl.textContent = result.description[0];
        }
        
        // CARD LINK
        var cardLink = document.createElement('a');
        cardLink.className = 'card-link';
        
        cardLink.textContent = result.url; // displays the url text
        cardLink.href = result.url; // makes url link clickable
        cardLink.target = '_blank'; // makes url pop up in NEW window
        
        resultsEl.appendChild(cardEl); // attach results onto the card
        cardEl.appendChild(cardBodyEl); // attach body onto the card
        cardBodyEl.append(cardTitleEl, cardTextEl, cardLink); // add title, text, link to card body
    }
};




function fetchResults(queryParameter, format){
    
    // if search includes a format, use var requestUrl as listed, otherwise use var requestUrl as listed in else
    // don't need the else statement, can leave var requestUrl out in the open
    if (format){
        var requestUrl = 'https://www.loc.gov/' + format + '/?q=' + queryParameter + '&fo=json'; 
    } 
    
    var requestUrl= 'https://www.loc.gov/search/?q=' + queryParameter + '&fo=json';
   
    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log('results ', data.results);
            displayResults(data.results);  
        })
        .catch(function (error){
            console.log(error);
        });
}

var handleSearch = function (event){
    event.preventDefault();
    //grabbing query value and trimming extra white space
    var q = queryInput.value.trim();
    // don't need trim for format input because they have already been preset in the html
    var format = formatInput.value;
    if (q) { //if a search exists, only then should the function fetch results
        fetchResults(q, format);
    }
};




searchBtn.addEventListener('click', handleSearch);