'use strict';

class Slider {

    constructor() {
        this.imageElement = document.querySelector('#slider');
        this.imagesTab = ['images/toulouse4.jpg', 'images/toulouse5.jpg', 'images/toulouse6.jpg'];
        this.index = 0;
        this.timer = null;
        this.buttonPlay = document.querySelector(".play");
        this.buttonNext = document.querySelector(".next");
        this.buttonPrev = document.querySelector(".prev");
        this.init();
        this.autoplay();
    }

    // Play Pause
    play() {
        if (this.timer == null) {
            this.timer = window.setInterval(() => {
                this.next();
            }, 5000);
        } else {
            window.clearInterval(this.timer);
            this.timer = null;
        }
    }

    // Autoplay
    autoplay() {
        setInterval(() => {
            this.next();
        }, 5000);

    }

    init() {

        document.addEventListener("keydown", (event) => {

            switch (event.code) {
                case 'ArrowRight':
                    this.next();
                    break;
                case 'ArrowLeft':
                    this.previous();
                    break;
                case 'Space':
                    this.play();
                    break;
                default:
                    alert('Désolé mais cette touche n\'est pas active, les touches disponible sont "fleche droite","fleche gauche" & "espace"');
            }
        });

        this.buttonNext.addEventListener("click", () => {
            this.next();
        });

        this.buttonPrev.addEventListener("click", () => {
            this.previous();
        });

        this.buttonPlay.addEventListener("click", () => {
            this.pause();
        });
    }

    // Manual Slide next previous
    next() {
        this.index++;
        if (this.index >= this.imagesTab.length) {
            this.index = 0
        }
        this.imageElement.src = this.imagesTab[this.index]
    }

    previous() {
        this.index--;
        if (this.index < 0) {
            this.index = this.imagesTab.length - 1
        }
        this.imageElement.src = this.imagesTab[this.index]
    }


}





