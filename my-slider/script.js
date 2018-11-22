let btn_prev = document.querySelector('.buttons__prev');
let btn_next = document.querySelector('.buttons__next');
let photos = document.querySelectorAll('.gallery__img');
let navDot = document.querySelectorAll('.navigation__dot');
let i = 0;

btn_next.addEventListener('click', () => {
    photos[i].classList.remove('gallery__img_show');
    navDot[i].classList.remove('navigation__dot_active');
    i++;
    if (i >= photos.length) {
        i = 0;
    }
    photos[i].classList.add('gallery__img_show');
    navDot[i].classList.add('navigation__dot_active');

});

btn_prev.addEventListener('click', () => {
    photos[i].classList.remove('gallery__img_show');
    navDot[i].classList.remove('navigation__dot_active');
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    photos[i].classList.add('gallery__img_show');
    navDot[i].classList.add('navigation__dot_active');
});

for (let y = 0; y < navDot.length; y++) {
    navDot[y].addEventListener('click', () => {
        i = y;
        document.querySelector('.navigation__dot_active').classList.remove('navigation__dot_active');
        document.querySelector('.gallery__img_show').classList.remove('gallery__img_show');
        navDot[y].classList.add('navigation__dot_active');
        photos[y].classList.add('gallery__img_show');
    })
}

