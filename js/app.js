
class Main {
    constructor() {
        this.body = document.querySelector('body');
        // this.window = document.querySelector('window');
        this.popup = document.querySelector('.choicepopup');

        this.burgerMenu = document.querySelector('.bottom-header__burger-box');
        this.burgerMenuList = document.querySelector('.bottom-header__menu');
        this.burgerMenuLink = document.querySelectorAll('.bottom-header__link');

        this.showAndHoverPopup = this.showAndHoverPopup.bind(this);

        this.checkPopupMenuHead = true;


        this.attachEvents();
    }


// menu burger
        attachWatchburger = () =>{
            
        }

        showMenuBurger = () => {
            console.log(this.checkPopupMenuHead)
            if(this.checkPopupMenuHead){
                this.burgerMenuList.style.display = "block";
                this.checkPopupMenuHead = false;
            } else {
                this.burgerMenuList.style.display = "none";
                this.checkPopupMenuHead = true;
            }

            
        }

    showAndHoverPopup(ev) {

        // const mediaQuery = window.matchMedia('(min-width: 768px)')
        //     if (mediaQuery.matches) {
        //     console.log(1)
        //     }

        if ( ev.target === document.querySelector('.choicepopup') ) {
            return;
        }

        if ( ev.target === document.querySelector('.bottom-header__menu-burger') ) {
            this.popup.style.display = "none";
            this.burgerMenu.style.display = "none";
        }
        if(document.documentElement.clientWidth < 950){

            console.log(document.documentElement.clientWidth)

            this.burgerMenu.style.display = "block";
            this.burgerMenuList.style.display = "none";

        } else {
            this.burgerMenu.style.display = "none";
            this.burgerMenuList.style.display = "block";
        }
    }
    eventBurgerButton(e){
        console.log(111)
        this.burgerMenuList.style.display = "none";
        this.checkPopupMenuHead = true;
    }

    attachEvents() {
        window.addEventListener('resize', (ev) => this.showAndHoverPopup(ev));
        this.burgerMenu.addEventListener('click',  this.showMenuBurger);

        for(let i = 0;i < this.burgerMenuLink.length; i++){
            this.burgerMenuLink[i].addEventListener('click', (ev) => this.eventBurgerButton(ev))
        }
    }
}

class PopupHead {
    constructor() {
        this.popupHead = document.querySelector('.popupDetaols');
        this.popupHeadBoxItams = document.querySelector('.popupDetaols__flex');
        this.popupHeadBoxItam = document.querySelector('.popupDetaols__item');
        this.detailsHeaderTitle = document.querySelector('.datails-header__title');
        this.detailsHeaderTitleButton = document.querySelector('.popupDetaols__close-button button');


        this.attachEvents();

    }

    // popup top haed
    showPopupHead = ev => {

        ev.stopPropagation()
        this.popupHead.style.display = "flex";
    };

    closePopupHead = () => this.popupHead.style.display = "none";

    attachEvents() {
        this.detailsHeaderTitle.addEventListener('click', this.showPopupHead);
        this.detailsHeaderTitleButton.addEventListener('click', this.closePopupHead);
    }


    init () {
        // do something when class would be created
    }
}

class PopupButtonConstructor {
    constructor() {
        this.choose = document.querySelector('#show-popup');
        this.chooseButtonSpan = document.querySelector('.choose__button-span');
        this.popup = document.querySelector('.choicepopup');
        this.choicepopupSmall = document.querySelector('.choicepopup__small');
        this.choicepopupMedium = document.querySelector('.choicepopup__medium');
        this.choicepopupLarge = document.querySelector('.choicepopup__large');
        this.checkAddSize = false;
        this.sizeValue = "";
        this.sizeCost = "";

        this.attachEvents();
    }

    showChousePopup = () => this.popup.style.display = "flex";

    changePopupSmallEvent = ev => {
        this.sizeValue = '1';
        this.sizeCost = '1.5';
        this.checkAddSize = true;

        this.chooseButtonSpan.innerHTML = ev.path[0].innerHTML;
        this.choicepopupMedium.classList.remove('active');
        this.choicepopupLarge.classList.remove('active');
        this.choicepopupSmall.classList.add('active');
        this.popup.style.display = "none";
    }

    choicePopupMediumEvent = ev => {
        this.sizeValue = '10';
        this.sizeCost = '9';
        this.checkAddSize = true;

        this.chooseButtonSpan.innerHTML = ev.path[0].innerHTML;
        this.choicepopupSmall.classList.remove('active');
        this.choicepopupLarge.classList.remove('active');
        this.choicepopupMedium.classList.add('active');
        this.popup.style.display = "none";
    }

    choicePopupLargeEvent = ev => {
        this.sizeValue = '100';
        this.sizeCost = '99';
        this.checkAddSize = true;

        this.chooseButtonSpan.innerHTML = ev.path[0].innerHTML;
        this.choicepopupMedium.classList.remove('active');
        this.choicepopupSmall.classList.remove('active');
        this.choicepopupLarge.classList.add('active');
        this.popup.style.display = "none";
    }

    attachEvents() {
        this.choose.addEventListener('click', this.showChousePopup);

        //change pack
        this.choicepopupSmall.addEventListener('click', this.changePopupSmallEvent);

        this.choicepopupMedium.addEventListener('click', this.choicePopupMediumEvent);

        this.choicepopupLarge.addEventListener('click', this.choicePopupLargeEvent);
    }
}

class Products {
    constructor() {
        // elements which I call events
        this.inputSoiden = document.querySelector('.constructor__line-soiden');
        this.inputSesame = document.querySelector('.constructor__line-sesame');
        this.inputWheat = document.querySelector('.constructor__line-wheat');
        this.inputCorn = document.querySelector('.constructor__input-corn');
        // elements where I write
        this.outputPerSoydean = document.querySelector('.constructor__percent-soydean');
        this.outputPerSesame = document.querySelector('.constructor__percent-sesame');
        this.outputPerWheat = document.querySelector('.constructor__percent-wheat');
        this.outputPerCorn = document.querySelector('.constructor__percent-corn');

        // PUT BELOW VARIABLES TO THE OBJECT THAT MAKES IT CLEARLY FOR UNDERSTANDING
        this.Soydean = 0,
        this.Sesame = 0,
        this.Wheat = 0,
        this.Corn = 0,
        this.a = 0,
        this.b = 0,
        this.c = 0,
        this.w = 0;

        this.attachEvents();
        this.alignValue();
    }

    chengeValSoydean = ev => { 
        this.Soydean = +ev.target.value
    
        if(+this.Soydean + +this.Sesame + +this.Wheat <= 100){ 
    
            this.outputPerSoydean.innerHTML = ev.target.value
            this.a = ev.target.value
            this.alignValue(ev.target.value)
        } else{
            ev.path[0].value = this.a
            this.Soydean = this.a
        }
    };

    chengeValSesame = ev => {
        this.Sesame = +ev.target.value
        console.log(11)
        if(+this.Soydean + +this.Sesame + +this.Wheat <= 100){
    
        this.outputPerSesame.innerHTML = ev.target.value
        this.b = ev.target.value
        this.alignValue(ev.target.value)
        } else{
            ev.path[0].value = this.b
            this.Sesame = this.b
        }
    };
    
    chengeValWheat = ev => {
        this.Wheat = +ev.target.value
    
        if(+this.Soydean + +this.Sesame + +this.Wheat <= 100){
        this.outputPerWheat.innerHTML = ev.target.value
        this.c = ev.target.value
        this.alignValue(ev.target.value)
        } else{
            ev.path[0].value = this.c
            this.Wheat = this.c
        }
    };
    
    chengeValCorn = ev => {
        this.Corn = +ev.target.value
        this.inputCorn.value = +ev.target.value
        this.outputPerCorn.innerHTML = ev.target.value
        this.alignValue(ev.target.value)
    };
    
    alignValue = () => {
        this.ollSeed = +this.Soydean + +this.Sesame + +this.Wheat
        console.log(this.ollSeed)
        const fullValue = 100;
    
        if(this.ollSeed <= fullValue){
            this.outputPerCorn.innerHTML = fullValue - this.ollSeed
            this.inputCorn.value = fullValue - this.ollSeed
        }
    };

    attachEvents() {
        this.inputSoiden.addEventListener('input', this.chengeValSoydean);
        this.inputSesame.addEventListener('input', this.chengeValSesame);
        this.inputWheat.addEventListener('input', this.chengeValWheat);
 
    }
}
class Cart extends PopupButtonConstructor{
    constructor(){
        super()
        //add plusCart
        this.plusCart = document.querySelector('.constructor__add-button');
        //total
        this.totalPopup = document.querySelector('.popupDetaols__bottom-total>span');
        this.totalHeadTop = document.querySelector('.total-header__prise>span');
        this.calcItems = document.querySelector('.header__ring-text');
        this.currentValue = document.querySelector('.constructor__current-value');


        this.outputPerSoydean = document.querySelector('.constructor__percent-soydean');
        this.outputPerSesame = document.querySelector('.constructor__percent-sesame');
        this.outputPerWheat = document.querySelector('.constructor__percent-wheat');
        this.outputPerCorn = document.querySelector('.constructor__percent-corn');


        this.popupHeadBoxItams = document.querySelector('.popupDetaols__flex');


        
        this.attachEvents();
    }
    showButtonAddCartText = (e) => {
        e.target.innerHTML = 'ADD TO cart'
    }
    hideButtonAddCartText = (e) => {
        e.target.innerHTML = '+'
    }
    removeItemSeen = (e) => {
        console.log(11111)
        console.log(e)
        this.calcItems.textContent = +this.calcItems.textContent - 1
    
        this.currentValue.textContent = +this.currentValue.textContent - +e.path[2].childNodes[3].childNodes[5].innerHTML;
        this.totalPopup.textContent = +this.totalPopup.textContent - +e.path[2].childNodes[3].childNodes[5].innerHTML;
        this.totalHeadTop.innerHTML = +this.totalHeadTop.innerHTML - +e.path[2].childNodes[3].childNodes[5].innerHTML;
    
        e.path[2].remove()
    };
    AddButtonAddCartText = (e) => {

            console.log(this.checkAddSize)
            if(this.checkAddSize === false){
                return
            }
            
            this.calcItems.textContent = +this.calcItems.textContent + 1
        
            this.currentValue.textContent = +this.currentValue.textContent + +this.sizeCost;
        
            this.totalPopup.textContent = +this.totalPopup.textContent + +this.sizeCost;
        
            let p = +this.totalHeadTop.innerHTML + +this.sizeCost;
            this.totalHeadTop.innerHTML = String(p);
        
            this.popupHeadBoxItams.innerHTML += 
            `
                <div class="popupDetaols__item">
                    <div class="popupDetaols__item-image">
                        <img src="/images/dest/calc-blaсk.png" alt="">
                    </div>
                    <div class="popupDetaols__item-span">
                        <div class="popupDetaols__box-spanPre">
                            <span><span class="popupDetaols__item-perSoydean popupDetaols__item-pre" >${this.outputPerSoydean.innerHTML}</span>%</span>
                            <span><span class="popupDetaols__item-perSesame popupDetaols__item-pre" >${this.outputPerSesame.innerHTML}</span>%</span>
                            <span><span class="popupDetaols__item-perWheat popupDetaols__item-pre" >${this.outputPerWheat.innerHTML}</span>%</span>
                            <span><span class="popupDetaols__item-perCorn popupDetaols__item-pre" >${this.outputPerCorn.innerHTML}</span>%</span>
                        </div>
                    <span class="popupDetaols__item-weight">${this.sizeValue}</span>KG
                    <span class="popupDetaols__item-cost">${this.sizeCost}</span>€    
                    </div>
                    <div class="popupDetaols__item-button"><button>x</button></div>
                </div>
            `
            console.log(1)
            this.popupDetaolsItemButton = document.querySelectorAll('.popupDetaols__item-button>button');
            console.log( this.popupDetaolsItemButton)
            for(let i = 0; i <  this.popupDetaolsItemButton.length; i++){
                this.popupDetaolsItemButton[i].addEventListener('click', this.removeItemSeen);
            }
            
    }

    attachEvents = (e) =>{
        this.plusCart.addEventListener('mouseenter', this.showButtonAddCartText);
        this.plusCart.addEventListener('mouseout', this.hideButtonAddCartText);
        this.plusCart.addEventListener('click', this.AddButtonAddCartText);

    }
}
window.addEventListener('load', () => {
    new Main();
    new PopupHead();
    new PopupButtonConstructor();
    new Products();
    new Cart();
    console.log('call last class here');
})



//constructor

//add item
// plusCart.addEventListener('mouseenter', function(e){
// e.target.innerHTML = 'ADD TO cart'
// });

// plusCart.addEventListener('mouseout', function(e){
// e.target.innerHTML = '+'
// });

// plusCart.addEventListener('click', function(e){
//     console.log(checkAddSize)
//     if(checkAddSize === false){
//         return
//     }
    
//     calcItems.textContent = +calcItems.textContent + 1

//     currentValue.textContent = +currentValue.textContent + +sizeCost;

//     totalPopup.textContent = +totalPopup.textContent + +sizeCost;

//     let p = +totalHeadTop.innerHTML + +sizeCost;
//     totalHeadTop.innerHTML = String(p);

//     popupHeadBoxItams.innerHTML += 
//     `
//         <div class="popupDetaols__item">
//             <div class="popupDetaols__item-image">
//                 <img src="/images/dest/calc-blaсk.png" alt="">
//             </div>
//             <div class="popupDetaols__item-span">
//                 <div class="popupDetaols__box-spanPre">
//                     <span><span class="popupDetaols__item-perSoydean popupDetaols__item-pre" >${perSoydean.innerHTML}</span>%</span>
//                     <span><span class="popupDetaols__item-perSesame popupDetaols__item-pre" >${perSesame.innerHTML}</span>%</span>
//                     <span><span class="popupDetaols__item-perWheat popupDetaols__item-pre" >${perWheat.innerHTML}</span>%</span>
//                     <span><span class="popupDetaols__item-perCorn popupDetaols__item-pre" >${perCorn.innerHTML}</span>%</span>
//                 </div>
//             <span class="popupDetaols__item-weight">${sizeValue}</span>KG
//             <span class="popupDetaols__item-cost">${sizeCost}</span>€    
//             </div>
//             <div class="popupDetaols__item-button"><button onclick="removeItemSeen(event)">x</button></div>
//         </div>
//     `
// });

// popup item head
// function removeItemSeen(e){

//     calcItems.textContent = +calcItems.textContent - 1

//     currentValue.textContent = +currentValue.textContent - +e.path[2].childNodes[3].childNodes[5].innerHTML;
//     totalPopup.textContent = +totalPopup.textContent - +e.path[2].childNodes[3].childNodes[5].innerHTML;
//     totalHeadTop.innerHTML = +totalHeadTop.innerHTML - +e.path[2].childNodes[3].childNodes[5].innerHTML;

//     e.path[2].remove()
// };