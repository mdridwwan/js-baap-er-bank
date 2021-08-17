//input function
function dobuleValue(num) {
    const numFeild = document.getElementById(num);
    const numText = numFeild.value;
    const inputNumber = parseFloat(numText);
    //Input clear
    numFeild.value = "";
    return inputNumber
}
//view function
function doubleView(text, num) {
    //  debugger;
    const textView = document.getElementById(text);
    const VeiwText = textView.innerText;
    const VeiwNum = parseFloat(VeiwText);
    const viewTotal = VeiwNum + num;
    textView.innerText = viewTotal;

}
//current balance
function currentbalance() {
    const balanceView = document.getElementById('balance-view');
    const balanceViewNum = balanceView.innerText;
    const totalBalance = parseFloat(balanceViewNum);
    return totalBalance;
}
//update Balance
function updateBalance(allNum, isAdd) {
    const balanceView = document.getElementById('balance-view');
    const balanceViewNum = balanceView.innerText;
    if (isAdd == true) {
        const totalBalance = allNum + parseFloat(balanceViewNum);
        balanceView.innerText = totalBalance;
    } else {
        const totalBalance = parseFloat(balanceViewNum) - allNum;
        balanceView.innerText = totalBalance;
    }
}

//Deposit
document.getElementById('deposit-btn').addEventListener('click', function() {

    const depositNum = dobuleValue('deposit-input');
    if (depositNum > 0) {
        doubleView('deposit-view', depositNum);
        updateBalance(depositNum, true);
    }
})

// Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function() {

    const withdrawNum = dobuleValue('withdraw-input');
    if (withdrawNum > 0 && currentbalance() >= withdrawNum) {
        doubleView('withdraw-view', withdrawNum)
        updateBalance(withdrawNum, false);
    }

})