function doubleValue(num) {
    const inputValue = num.value;
    return inputValue;
}


document.getElementById('btn-login').addEventListener('click', function() {
    const inputUser = document.getElementById('input-user');
    const inputUserText = doubleValue(inputUser);

    const inputPass = document.getElementById('input-password');
    const inputPassText = doubleValue(inputPass);

    if (inputPassText == 'ridwan' && inputUserText == 'ridwan') {
        window.location.href = 'bank.html'
    };
})