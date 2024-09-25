document.getElementById('btn-donate-money').addEventListener('click', function(event){
    event.preventDefault();

    const donetMoneyNew = getInputFieldValueById('input-donate-money');

    if(isNaN(donetMoneyNew)){
        alert('Failed.');
        return;
    }

    if(donetMoneyNew){
        const balance = getTextFieldValueById('main-balance');
        if(donetMoneyNew > balance){
            alert('You do not have enough money!');
            return;
        }
        const newBalance = balance - donetMoneyNew;
        document.getElementById('main-balance').innerText = newBalance;

                // add to transaction history
                const div = document.createElement('div');
                div.classList.add('bg-cyan-400');
                div.innerHTML = `
                    <h4 class="text-2xl font-bold">Donate Money</h4>
                    <p>${donetMoneyNew}TK. Donate Successfilly. New Balance ${newBalance}BDT</p>
                `
    
                document.getElementById('transaction-container').appendChild(div);
    }
            else{
                alert('Cash in First')
            }

})