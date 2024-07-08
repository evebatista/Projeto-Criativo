document.addEventListener('DOMContentLoaded', () => {
    let prevButton = document.getElementById('prev');
    let nextButton = document.getElementById('next');
    let container = document.querySelector('.container');
    let items = container.querySelectorAll('.list .item');
    let indicator = document.querySelector('.indications');
    let dots = indicator.querySelectorAll('ul li');

    let active = 0;
    let firstPosition = 0;
    let lastPosition = items.length - 1;

    function setSlider() {
        let itemOld = container.querySelector('.list .item.active');
        if (itemOld) itemOld.classList.remove('active');

        let dotsOld = indicator.querySelector('ul li.active');
        if (dotsOld) dotsOld.classList.remove('active');

        dots[active].classList.add('active');

        indicator.querySelector('.number').innerHTML = '0' + (active + 1);
    }

    nextButton.onclick = () => {
        active = active + 1 > lastPosition ? 0 : active + 1;
        setSlider();
        items[active].classList.add('active');
    };

    prevButton.onclick = () => {
        active = active - 1 < firstPosition ? lastPosition : active - 1;
        setSlider();
        items[active].classList.add('active');
    };

    // Initialize the first item as active
    setSlider();
    items[active].classList.add('active');
});