document.addEventListener('mousemove', function(ev){
    let mouse = document.getElementById('mouse')
    mouse.style.top = ev.clientY - mouse.height / 2 +'px';
    mouse.style.left = ev.clientX - mouse.width / 2 +'px';
});

function handle() {
    alert('Форма отправлена!');
}

let button = document.querySelector('.btn');
button.addEventListener('click', handle);