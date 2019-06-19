
const animals = [
    'elephant','monkey','tiger','lion','chicken','moose'
];

const output = animals
    .filter(item => item.length < 6)
    .map((item, index) => {
        if (index) {
            return ', ' + item;
        }
        return item;
    })
    .reduce((prev, item) => prev+= item , 'Animals: ');
    

console.log(output);