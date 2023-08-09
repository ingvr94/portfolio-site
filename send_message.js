
document.addEventListener('DOMContentLoaded',function(){
const form=document.getElementById('form');
const formModal=document.querySelector('.form__modal')
form.addEventListener('submit',formSend)

async function formSend(e) {
    e.preventDefault();

    let error=formValidate(form);
    let mail=`<b>Заявка с сайта</b> `;
    mail+=`<b>Имя:</b> ${this.name.value} `
    mail+=`<b>Почта:</b> ${this.email.value} `
    mail+=`<b>Проект:</b> ${this.project.value} `
    mail+=`<b>Cообщение:</b> ${this.message.value}`


    if (error===0) {
    sendData(mail);
   

    }
}


async function sendData(mail){
    try {
    const response=await fetch('https://portfolio-server-mu-one.vercel.app',{
        method:'POST',
        headers: {
            'Content-Type':'text/plain'
        },
        body:JSON.stringify(mail)
        
        }
        ).then(alert('Message sent!'))
  } 

  catch(err){
    console.log(err)
  }
 
    } 

function formValidate(form){
    let error=0;
    let formReq=document.querySelectorAll('._req');

    for (let i=0;i<formReq.length;i++){
        const input = formReq[i];
        formRemoveError(input);

        if(input.classList.contains('_email')) {
            if(emailTest(input)){
                formAddError(input);
                error++;
            }
        } else if(input.value === ''){
            formAddError(input);
            error++
        }
    }
    return error;
}

function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}

function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

function emailTest (input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
}
})