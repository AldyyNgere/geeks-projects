document.forms['contact-form']['send-btn'].onclick = (e) =>{
    e.preventDefault();
    document.forms['contact-form'].reset();
    alertMessage();
}

function alertMessage(){
    setTimeout(alert('your message has been send'), 5000);
}
