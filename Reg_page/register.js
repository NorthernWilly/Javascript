const formdata = {

}


function handleSubmit(event){
   
    for(let control of event){
    formdata[control.id] = control.value;
    }

    sessionStorage.setItem('userData', JSON.stringify(formdata));


    window.location="landingpage.html";

    return false;

}

