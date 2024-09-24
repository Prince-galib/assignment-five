// function getInputFieldValueById(){
//     console.log('will get value')
//     const donateMoney = document.getElementById('input-donate-money').value;
//     return donateMoney;
// }


function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
    }

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}