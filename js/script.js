$(document).ready(function() {

    const productContainers = $('.flex_2');
    const firstCont = $('.card_1');
    const nxtBtn = $('.title__item_arrow-right');
    const preBtn = $('.title__item_arrow-left');

    const cardContainers = $('.card_items');
    const secondCont = $('.cards');
    const btnNext = $('.more_btn');
    const btnPre = $('.btn_back');



    firstCont.each((i, item) => {
    let firstContDimensions = item.getBoundingClientRect();
    let firstContWidth = firstContDimensions.width;

    $(nxtBtn[i]).on('click', () => {
      $(productContainers[i]).scrollLeft($(productContainers[i]).scrollLeft() + firstContWidth);
    });

    $(preBtn[i]).on('click', () => {
      $(productContainers[i]).scrollLeft($(productContainers[i]).scrollLeft() - firstContWidth);
    });

    });

    secondCont.each((i, item) => {
      let secondContDimensions = item.getBoundingClientRect();
      let secondContWidth = secondContDimensions.width;
  
      $(btnNext[i]).on('click', () => {
        $(cardContainers[i]).scrollLeft($(cardContainers[i]).scrollLeft() + secondContWidth + 26);
      });
  
  
      });

      function handleResize() {
        secondCont.each((i, item) => {
          const secondContElement = $(item);
          const secondContWidth = secondContElement.width();
          const cardContainerElement = $(cardContainers[i]);
          const cardContainerWidth = cardContainerElement[0].scrollWidth;
          
          $(btnNext[i]).on('click', () => {
            $(cardContainers[i]).scrollLeft($(cardContainers[i]).scrollLeft() + secondContWidth + 26);
          });
        
          $(btnPre[i]).on('click', () => {
            cardContainerElement.scrollLeft(cardContainerElement.scrollLeft() - cardContainerWidth);
          });
        });
      }
      
      $(window).resize(() => {
        handleResize();
      });
    
      handleResize();

      secondCont.each((i, item) => {
        const secondContElement = $(item);
        const secondContWidth = secondContElement.width();
        const cardContainerElement = $(cardContainers[i]);
        const cardContainerWidth = cardContainerElement[0].scrollWidth;
        
        $(btnPre[i]).on('click', () => {
          cardContainerElement.scrollLeft(cardContainerElement.scrollLeft() - cardContainerWidth);
          // Добавляем проверку на отрицательное значение для предотвращения прокрутки влево за пределы контейнера
          if (cardContainerElement.scrollLeft() < 0) {
            cardContainerElement.scrollLeft(0);
          }
        });
    });


	$("a").click(function(event) {
		event.preventDefault();
		var blockID = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(blockID).offset().top
		}, 1000);
	});

}); 



/*-------------*/


/*const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();*/



