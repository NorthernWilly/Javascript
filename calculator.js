
function calc(){
    const a = Number(document.getElementById('inputA').value);
    const b = Number(document.getElementById('inputB').value);
    
    return {
        add: function(){
            output(a + b);
        },
        subtract: function(){
            output(a - b);
        },
        multiply: function(){
            output(a * b);
        },
        divide: function(){
            output(a / b);
        }
    }
}
function output(out){
    document.getElementById('result').innerText = out;
    const H = document.createElement("p");
    H.innerText = out;
    document.getElementById('History').appendChild(H);
}
