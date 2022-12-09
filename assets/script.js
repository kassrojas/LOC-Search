// 'https://www.loc.gov/search/?q=' + queryParameter + '&fo=json';
// 'https://www.loc.gov/' + format + '/?q=' + queryParameter + '&fo=json';

var textInputEl = $('#textInput');
var selectEl = $('#select');
var submitButtonEl = $('#submitButton');
var goBackButton = $('#goBackButton');
var cardEl = $('.card');
var cardContainer = $('.card-container');

var getApi = function (event) {
    event.preventDefault();
    var queryParameter = textInputEl.value;

    var requestUrl = 'https://www.loc.gov/search/?q=' + queryParameter + '&fo=json';

    fetch(requestUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for(i in data.results){
                        // console.log(i + ". " +data.results[i].title);
                        displayData(data.results[i]);
                    }
                })
            }
        }) 
        .catch(function (error) {
            alert('Error' + response.statusText);
            console.log(error);
        });
};


var displayData = function (result) {
    var card = $("<div>");
    card.addClass("card");

    var cardBody = $("<div>");
    cardBody.addClass("card-body");

    var cardTitle = $("<div>");
    cardTitle.addClass("card-title");
    cardTitle.textContent = result.title;

    cardBody.append(cardTitle);
    card.append(cardBody);
    cardContainer.append(card);
};

submitButtonEl.on('click', getApi);