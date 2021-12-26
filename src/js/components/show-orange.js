
if(document.querySelector('.services__grid')) {
    let tab = document.querySelectorAll('.services__item'),
    wrapper = document.querySelector('.services__grid'),
    wrapperContent = document.querySelectorAll('.orange__wrapper')

    function hideTabContact(a) {
        for(let i = a; i < wrapperContent.length; i++) {
            wrapperContent[i].classList.remove('show')
            wrapperContent[i].classList.add('hide')
        }
    }

    hideTabContact(1)

    function showTabContent(b) {
        if(wrapperContent[b].classList.contains('hide')) {     
            wrapperContent[b].classList.remove('hide');
            wrapperContent[b].classList.add('show');
        }
    }

    wrapper.addEventListener('click', function(event) {
        let target = event.target;
         if (target && target.classList.contains('services__item')) {
            for (let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContact(0);
                    showTabContent(i)
                    break;
             }
         }
        }
    })
};




    