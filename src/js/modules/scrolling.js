const scrollig = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut')
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    // scrolling with request animation fraim

    let links = document.querySelectorAll('[href^="#"]'), // тут мы говорим что нужно искать все ссылки которые начинаются с #
        speed = 0.1;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top, // getBoundingClientRect() этот метод нужен чтоб можно было получить доступ к свойствам например к свойству top
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if( start === null )
                {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock)); // r мы обазначаем сколько пх

                    document.documentElement.scrollTo(0, r);

                if( r != widthTop + toBlock ) // как только это условие будет равно это будет значит что мы уже долистали до нужного элемента по px
                {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        })
    });

    // Pure js scrolling

    // const element = document.documentElement,
    //     body = document.body;

    // const calcScroll = () => {
    //     upElem.addEventListener('click', function(event) {
    //          let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //
    //          if( this.hash !== '' ) {
    //              event.preventDefault();
    //              let hashElement = document.getElementById(this.hash.substring(1)), // или querySelector(this.hash)
    //                  hashElementTop = 0;
    //
    //              while (hashElement.offsetParent) {
    //                  hashElementTop += hashElement.offsetTop;
    //                  hashElement = hashElement.offsetParent;
    //              }
    //
    //              hashElementTop = Math.round(hashElementTop);
    //              smoothScroll(scrollTop, hashElementTop, this.hash);
    //          }
    //     });
    // };
    //
    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval  = 1,
    //         prevScrollTop,
    //         speed;
    //
    //     if( to > from ) {
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }
    //
    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //
    //         if(
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };
    //
    // calcScroll();
};

export default scrollig;
