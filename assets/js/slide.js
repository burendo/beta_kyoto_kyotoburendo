'use strict';

{
    const images = [
        'assets/story2/1.png',
        'assets/story2/3.png',
        'assets/story2/4.png',
        'assets/story2/5.png',
        'assets/story2/6.png',
        'assets/story2/7.png',
        'assets/story2/8.png',
        'assets/story2/9.png',
        'assets/story2/10.png',
        'assets/story2/11.png',
        'assets/story2/12.png',
        'assets/story2/13.png',
        'assets/story2/14.png',
        'assets/story2/15.png',
        'assets/story2/16.png',
        'assets/story2/17.png',
        'assets/story2/18.png',
        'assets/story2/19.png',
        'assets/story2/20.png',
        'assets/story2/21.png',
        'assets/story2/22.png',
        'assets/story2/23.png',
        'assets/story2/24.png',
        'assets/story2/25.png',
    ];
    let currentIndex = 0;

    const mainImage = document.getElementById('main');
    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;

        const li = document.createElement('li');
        if (index === currentIndex) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            mainImage.src = image;
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            thumbnails[currentIndex].classList.remove('current');
            currentIndex = index;
            thumbnails[currentIndex].classList.add('current');
        });

        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);
    });

    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        let target = currentIndex + 1;
        if (target === images.length) {
            target = 0;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });
    
    const prev = document.getElementById('prev');
    prev.addEventListener('click', () => {
        let target = currentIndex - 1;
        if (target < 0) {
            target = images.length - 1;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    let timeoutId; 

    function playSlideshow() {
        timeoutId = setTimeout(() => {
            next.click();
            playSlideshow();
        },5000);
    }

    let isPlaying = false;

    const play = document.getElementById('play');
    play.addEventListener('click', ()=> {
        if (isPlaying === false) {
            playSlideshow();
            play.textContent = '止まる';
        } else{
            clearTimeout(timeoutId);
            play.textContent = '動く';
        }
        isPlaying = !isPlaying;
    });
}