// SHOW PASSWORD 
let passwordShow = false;
let password = document.forms['form']['password'];
let passwordIcon = document.querySelector('.material-symbols-outlined');
function showPassword(){
    if(!passwordShow){
        passwordIcon.textContent = 'visibility';
        password.type = 'text';
        passwordShow  = true;
    }else{
        passwordIcon.textContent = 'visibility_off';
        password.type = 'password';
        passwordShow  = false;
    }
}

// USER LOGIN 
const popup = document.querySelector('.popup-container');
document.forms['form']['btn'].onclick = (e) =>{ 
    e.preventDefault();
    let name = document.forms['form']['username'].value;
    document.forms['form'].reset();
    popup.style.display = 'grid';
    document.getElementById('user-display').textContent = name;
}

document.getElementById('back-btn').onclick = ()=>{
    popup.style.display = 'none';
}