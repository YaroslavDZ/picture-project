const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.remove('animated', 'fadeOut');
            upElem.classList.add('animated', 'fadeIn');
        } else {
            upElem.classList.remove('animated', 'fadeIn');
            upElem.classList.add('animated', 'fadeOut');
        }
    });

    const element = document.documentElement,
          body = document.body;

    const calcScroll = () => {
        upElem.addEventListener('click', function(e) {
            let scrollTop = Math.round(element.scrollTop || body.scrollTop);
            
            if (this.hash !== '') {
                e.preventDefault();
                let hashElement = document.querySelector(this.hash),
                    hashElementTop = 0;

                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }

                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElement, this.hash);
            }
        });
    };

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed;

        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function() {
            let scrollTop = Math.round(element.scrollTop || body.scrollTop);

            if (
                prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) || 
                (to < from && scrollTop <= to)
            ) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);
    };

    calcScroll();
};

export default scrolling;