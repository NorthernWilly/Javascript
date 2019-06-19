
const f = JSON.parse(sessionStorage.getItem('userData'));

const name = document.getElementById('name');

//const pword = document.getElementById('password');

//name.innerText = f.fname + ' ' + f.lname;

//pword.innerText = f.pword;

//function output(f){

//document.getElementById('name').innerText = f;

//document.getElementById('password').innerText = f;

//}

for (let x in f){
    const hi = document.createElement('h4');
    hi.innerText = x + ':' + f[x];
    name.append(hi);
}




