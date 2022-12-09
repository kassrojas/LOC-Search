// 'https://www.loc.gov/search/?q=' + queryParameter + '&fo=json';
// 'https://www.loc.gov/' + format + '/?q=' + queryParameter + '&fo=json';

var textInputEl = document.querySelector('#textInput');
var selectEl = document.querySelector('#select');
var submitButtonEl = document.querySelector('#submitButton');
var goBackButton = document.querySelector('#goBackButton');

var getApi = function(queryParameter){
    var requestUrl = 'https://www.loc.gov/search/?q=' + queryParameter + '&fo=json';

    fetch(requestUrl).then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
                displayData(data, queryParameter);
            })
        .catch(function (error) {
            alert('Error' + response.statusText);
            console.log(error);
        });
        }
    });
}
