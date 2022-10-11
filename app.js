const numViews = document.querySelector('#num-views');
const slider = document.querySelector('input[type="range"]');
const price = document.querySelector('.price');
const billingFreq = document.querySelector('.bill-frequency');
const selector = document.querySelector('input[type="checkbox"');
const inputs = document.querySelectorAll('input');
const prices = 
[
    { views: "10K", price: "8" },
    { views: "50K", price: "12" },
    { views: "100K", price: "16" },
    { views: "500K", price: "24" },
    { views: "1M", price: "36" }
]
function fillNumViews() {
    numViews.innerText = `${prices[slider.value]["views"]} pageviews`;
}

function fillPrice(){
    //selector checked means yearly billing
    if(selector.checked){
        price.innerText = `$${prices[slider.value]["price"]*12*0.75} `;
        billingFreq.innerText = "/ year";
    }
    else{
        price.innerText = `$${prices[slider.value]["price"]} `;
        billingFreq.innerText = "/ month";
    }
    
}

function fillData(){
    fillNumViews();
    fillPrice();
}


for(let input of inputs){
    input.addEventListener('input', fillData);
}

fillData();