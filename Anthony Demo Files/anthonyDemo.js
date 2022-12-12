var searchBtn = document.querySelector('#searchButton');
var queryInput = document.querySelector('#queryParameter');
var formatInput = document.querySelector('#format');

function fetchResults(queryParameter, format){
    
    // if search includes a format, use var requestUrl as listed, otherwise use var requestUrl as listed in else
    // don't need the else statement, can leave var requestUrl out in the open
    if (format){
        var requestUrl = 'https://www.loc.gov/' + format + '/?q=' + queryParameter + '&fo=json'; 
    } else {
        var requestUrl= 'https://www.loc.gov/search/?q=' + queryParameter + '&fo=json';
    };

    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);  
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

    console.log(search);
};



fetchResults('apple');

searchBtn.addEventListener('click', handleSearch);