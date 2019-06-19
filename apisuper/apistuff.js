const SuperHero = document.getElementById("Superhero");

const req = new XMLHttpRequest();

req.onload = () => {
    console.log('loaded');
    const parsedData = JSON.parse(req.responseText);
    console.log('DATA:', parsedData);
    const actualData = {};
    for (let key in parsedData) {
        if (key !== 'members') {
            actualData[key] = parsedData[key];
        }
    }
    displaySuperhero(actualData);

    for (y in parsedData.members) {
        displaySuperheroname(parsedData.members[y]);
    }

};

req.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
req.send();
console.log('sent');

function displaySuperhero(data) {

    for (let x in data) {

        const hi = document.createElement('h3');
        hi.innerText = x + ' : ' + data[x];
        Superhero.append(hi);
    }
    Superhero.append("--------------------------------------------------");
}
function displaySuperheroname(data) {

    for (let x in data) {

        const hi = document.createElement('h4');
        hi.innerText = x + ' : ' + data[x];
        Name.append(hi);
    }
    Name.append("--------------------------------------------------");
}