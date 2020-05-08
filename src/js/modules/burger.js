const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);

    menuElem.style.display = 'none';

    burgerElem.addEventListener('click', () => {
        if( menuElem.style.display == "none" && window.screen.availWidth < 993 ) { // window.screen.availWidth < 993 это мы говорим если меню скрыто и если размер экрана меньше 993 px тогда мы меню показываем
            menuElem.style.display = 'block';
        } else {
            menuElem.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
       if( window.screen.availWidth > 992 ) {
           menuElem.style.display = 'none';
       }
    });
};

export default burger;
