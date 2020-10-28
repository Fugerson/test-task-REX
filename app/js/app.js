
let body = document.querySelector('body')

// popup top haed
let popupHead = document.querySelector('.popupDetaols');
let popupHeadBoxItams = document.querySelector('.popupDetaols__flex');
let popupHeadBoxItam = document.querySelector('.popupDetaols__item');

//popap bottom constructor
let choose = document.querySelector('#show-popup');
let chooseButtonSpan = document.querySelector('.choose__button-span');
let popup = document.querySelector('.choicepopup');
let choicepopupSmall = document.querySelector('.choicepopup__small');
let choicepopupMedium = document.querySelector('.choicepopup__medium');
let choicepopupLarge = document.querySelector('.choicepopup__large');

// products
let perSoydean = document.querySelector('.constructor__percent-soydean');
let perSesame = document.querySelector('.constructor__percent-sesame');
let perWheat = document.querySelector('.constructor__percent-wheat');
let perCorn = document.querySelector('.constructor__percent-corn');
let inputCorn = document.querySelector('.constructor__input-corn');

//add cart
let cart = document.querySelector('.constructor__add-button');

//total
let totalPopup = document.querySelector('.popupDetaols__bottom-total>span');
let totalHeadTop = document.querySelector('.total-header__prise>span');
let calcItems = document.querySelector('.header__ring-text');
let currentValue = document.querySelector('.constructor__current-value');


body.addEventListener('click', function(e){
    if(e.target == document.querySelector('.choicepopup')){
        return
    }

    popup.style.display = "none"
}, true)


let Soydean = 0
let Sesame = 0
let Wheat = 0
let Corn = 0
let a = 0
let b = 0
let c = 0
let w = 0


function chengeValSoydean(e){ 
    Soydean = +e.target.value

    if(+Soydean + +Sesame + +Wheat <= 100){ 

        perSoydean.innerHTML = e.target.value
        a = e.target.value
        alignValue(e.target.value)
    } else{
        e.path[0].value = a
        Soydean = a
    }

}
function chengeValSesame(e){
    Sesame = +e.target.value

    if(+Soydean + +Sesame + +Wheat <= 100){

    perSesame.innerHTML = e.target.value
    b = e.target.value
    alignValue(e.target.value)
    } else{
        e.path[0].value = b
        Sesame = b
    }
}
function chengeValWheat(e){
    Wheat = +e.target.value

    if(+Soydean + +Sesame + +Wheat <= 100){

    perWheat.innerHTML = e.target.value
    c = e.target.value
    alignValue(e.target.value)
    } else{
        e.path[0].value = c
        Wheat = c
    }
}


function chengeValCorn(e){
    Corn = +e.target.value
    inputCorn.value = +e.target.value
    perCorn.innerHTML = e.target.value
    alignValue(e.target.value)
}


function alignValue(){

    ollSeed = Soydean + Sesame + Wheat

    const fullValue = 100;

    if(+ollSeed <= fullValue){
        // perCorn.innerHTML = fullValue - ollSeed

        perCorn.innerHTML = fullValue - ollSeed
        inputCorn.value = fullValue - ollSeed
    }


}


choose.addEventListener('click', function(e){
    popup.style.display = "flex"

})

let checkAddSize = false,
    sizeValue = "",
    sizeCost = ""

choicepopupSmall.addEventListener('click', function(e){
        sizeValue = '1'
        sizeCost = '1.99'
         checkAddSize = true

        chooseButtonSpan.innerHTML = e.path[0].innerHTML
        choicepopupMedium.classList.remove('active');
        choicepopupLarge.classList.remove('active');
        choicepopupSmall.classList.add('active')
        popup.style.display = "none"

})
choicepopupMedium.addEventListener('click', function(e){
    sizeValue = '10'
    sizeCost = '9'
    checkAddSize = true

    chooseButtonSpan.innerHTML = e.path[0].innerHTML
    choicepopupSmall.classList.remove('active');
    choicepopupLarge.classList.remove('active');
    choicepopupMedium.classList.add('active')
        popup.style.display = "none"
})
choicepopupLarge.addEventListener('click', function(e){
    sizeValue = '100'
    sizeCost = '99'
    checkAddSize = true

    chooseButtonSpan.innerHTML = e.path[0].innerHTML
    choicepopupMedium.classList.remove('active');
    choicepopupSmall.classList.remove('active');
    choicepopupLarge.classList.add('active')
        popup.style.display = "none"
})




    cart.addEventListener('mouseenter', function(e){
    e.target.innerHTML = 'ADD TO CART'
    })
    
    cart.addEventListener('mouseout', function(e){
    e.target.innerHTML = '+'
    })
    
    cart.addEventListener('click', function(e){

        if(checkAddSize == false){
            return
        }
       
        calcItems.textContent = +calcItems.textContent + 1



       
        currentValue.textContent = +currentValue.textContent + +sizeCost;

        totalPopup.textContent = +totalPopup.textContent + +sizeCost;

        let p = +totalHeadTop.innerHTML + +sizeCost;
        totalHeadTop.innerHTML = String(p);

        

        popupHeadBoxItams.innerHTML += `
    <div class="popupDetaols__item">
        <div class="popupDetaols__item-image">
            <img src="/images/dest/calc-blaсk.png" alt="">
        </div>
        <div class="popupDetaols__item-span">
            <div class="popupDetaols__box-spanPre">
                <span><span class="popupDetaols__item-perSoydean popupDetaols__item-pre" >${perSoydean.innerHTML}</span>%</span>
                <span><span class="popupDetaols__item-perSesame popupDetaols__item-pre" >${perSesame.innerHTML}</span>%</span>
                <span><span class="popupDetaols__item-perWheat popupDetaols__item-pre" >${perWheat.innerHTML}</span>%</span>
                <span><span class="popupDetaols__item-perCorn popupDetaols__item-pre" >${perCorn.innerHTML}</span>%</span>
            </div>
        <span class="popupDetaols__item-weight">${sizeValue}</span>KG
        <span class="popupDetaols__item-cost">${sizeCost}</span>€    
        </div>
        <div class="popupDetaols__item-button"><button onclick="removeItemSeen(event)">x</button></div>
    </div>
    `
    })


// popup top haed


function showPopupHead(e){
    e.stopPropagation()
    popupHead.style.display = "flex";
}

function closePopupHead(event){
    popupHead.style.display = "none";
}

// item pop head

function removeItemSeen(e){

    calcItems.textContent = +calcItems.textContent - 1

    currentValue.textContent = +currentValue.textContent - +e.path[2].childNodes[3].childNodes[5].innerHTML;
    totalPopup.textContent = +totalPopup.textContent - +e.path[2].childNodes[3].childNodes[5].innerHTML;
    totalHeadTop.innerHTML = +totalHeadTop.innerHTML - +e.path[2].childNodes[3].childNodes[5].innerHTML;

    e.path[2].remove()
}


