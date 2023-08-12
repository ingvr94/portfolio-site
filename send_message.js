
document.addEventListener('DOMContentLoaded',function(){
const form=document.getElementById('form')

const contactButLabel=document.querySelector('.contact__button_label')
const sendMessageIcon=document.getElementById('sendMessageIcon')
const contactButton=document.querySelector('.contact__button');


form.addEventListener('submit',formSend)

async function sendSucceed() {
        contactButton.classList.add('button__success')
        contactButLabel.textContent='Message Sent'
        sendMessageIcon.classList.remove('uil-message')
        sendMessageIcon.classList.add('uil-check')
        
        setTimeout(()=>{   
        contactButton.classList.remove('button__success')    
        contactButLabel.textContent='Send Message'
        sendMessageIcon.classList.remove('uil-check')
        sendMessageIcon.classList.add('uil-message')
        },3000)

        form.reset();
}

async function sendFailed() {
    contactButton.classList.add('button__failed')
    contactButLabel.textContent='Message was not sent'
    sendMessageIcon.classList.remove('uil-message')
    sendMessageIcon.classList.add('uil-times-circle')
    
    setTimeout(()=>{   
    contactButton.classList.remove('button__failed')    
    contactButLabel.textContent='Send Message'
    sendMessageIcon.classList.remove('uil-times-circle')
    sendMessageIcon.classList.add('uil-message')
    },3000)

}

async function formSend(e) {
    e.preventDefault();

    let error=formValidate(form);
    let mail=`<b>Заявка с сайта</b> `;
    mail+=`<b>Имя:</b> ${this.name.value} `
    mail+=`<b>Почта:</b> ${this.email.value} `
    mail+=`<b>Проект:</b> ${this.project.value} `
    mail+=`<b>Cообщение:</b> ${this.message.value}`


    if (error===0) {
    sendData(mail)
   
    }
}


async function sendData(mail){
    try {
    const response=await fetch('https://portfolio-server-fo77uiqne-ingvr94.vercel.app',{
        method:'POST',
        headers: {
            'Content-Type':'text/plain'
        },
        body:JSON.stringify(mail)
        
        }
        ).then(
         sendSucceed()
        )
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