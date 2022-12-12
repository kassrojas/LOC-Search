// 'https://www.loc.gov/search/?q=' + queryParameter + '&fo=json';
// 'https://www.loc.gov/' + format + '/?q=' + queryParameter + '&fo=json';


fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    })
    .catch(function (error){
        console.log(error);
    });