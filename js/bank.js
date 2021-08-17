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
    const textView = document.getElementById(text);
    const VeiwText = textView.innerText;
    const VeiwNum = parseFloat(VeiwText);
    const viewTotal = VeiwNum + num;
    textView.innerText = viewTotal;

    //return VeiwNum;
}

//Deposit
document.getElementById('deposit-btn').addEventListener('click', function() {
    //input
    const depositNum = dobuleValue('deposit-input');
    //view
    doubleView('deposit-view', depositNum);
    //Total Balance
    const balanceView = document.getElementById('balance-view');
    const balanceViewNum = balanceView.innerText;
    const totalBalance = depositNum + parseFloat(balanceViewNum);
    balanceView.innerText = totalBalance;
})

// Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function() {
    //input
    const withdrawNum = dobuleValue('withdraw-input');
    //view
    doubleView('withdraw-view', withdrawNum)

    //Balance
    const balanceView = document.getElementById('balance-view');
    const balanceViewNum = balanceView.innerText;
    const totalBalance = parseFloat(balanceViewNum) - withdrawNum;
    balanceView.innerText = totalBalance;

})