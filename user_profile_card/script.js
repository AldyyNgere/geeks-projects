const likeBtn = document.getElementById('like-btn');
let like = false;
likeBtn.onclick = () =>{
    if(!like){
        likeBtn.classList.add('like');
        like = true;
    }else{
        likeBtn.classList.remove('like');
        like = false;
    }
};