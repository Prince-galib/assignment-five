document.getElementById('btn-donate-money').addEventListener('click', function(event){
    event.preventDefault();

    const donetMoneyNew = getInputFieldValueById('input-donate-money');

    if(donetMoneyNew){
        const balance = getTextFieldValueById('main-balance');
        const newBalance = balance - donetMoneyNew;
        document.getElementById('main-balance').innerText = newBalance;
    }
    else{

    }
})