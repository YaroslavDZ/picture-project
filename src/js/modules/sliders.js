const sliders = (slides, direction, prev, next) => {
    let slideIndex = 1;
    let paused = false;
    const items = document.querySelectorAll(slides),
          prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        } 

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    function activateAnimation() {
        if (direction == 'vertical') {
            paused = setInterval(function() {
                plusSlide(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(function() {
                plusSlide(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);
        
        prevBtn.addEventListener('click', () => {
            plusSlide(-1);
        });

        nextBtn.addEventListener('click', () => {
            plusSlide(1);
        });
    } catch(e) {}

    showSlides(slideIndex);
};

export default sliders;