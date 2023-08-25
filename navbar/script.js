const mobileBtn = document.getElementById('mobile-btn');
const sidebar = document.querySelector('.navbar-menu');
let sidebarActive = false;

mobileBtn.onclick = () =>{
    if(!sidebarActive){
    mobileBtn.classList.add('sidebar-active');
    sidebar.classList.add('sidebar-active');
    sidebarActive = true;
    }else{
    mobileBtn.classList.remove('sidebar-active');
    sidebar.classList.remove('sidebar-active');
    sidebarActive = false;
    }
}