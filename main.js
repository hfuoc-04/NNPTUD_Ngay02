fetch('http://localhost:3000/posts')
    .then(function (data) {
        return data.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log('Error: ' + error);
    });