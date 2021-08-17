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
function doubleView(text) {
    const VeiwText = text.innerText;
    const VeiwNum = parseFloat(VeiwText);
    return VeiwNum;
}

//Deposit
document.getElementById('deposit-btn').addEventListener('click', function() {
    //input
    const depositNum = dobuleValue('deposit-input');

    //deposit veiw
    const depositView = document.getElementById('deposit-view');
    const depositVeiwNum = doubleView(depositView);

    //Deposit input + veiw
    const depsitTotal = depositNum + depositVeiwNum;
    depositView.innerText = depsitTotal;

    //Balance
    const balanceView = document.getElementById('balance-view');
    const balanceViewNum = doubleView(balanceView);
    const totalBalance = depositNum + balanceViewNum;
    balanceView.innerText = totalBalance;
})

// Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function() {
    //input
    const withdrawNum = dobuleValue('withdraw-input');
    //view
    const withdrawView = document.getElementById('withdraw-view');
    const withdrawViewNum = doubleView(withdrawView)

    //input + view total
    const withdrawTotal = withdrawNum + withdrawViewNum;
    withdrawView.innerText = withdrawTotal;

    //Balance
    const balanceView = document.getElementById('balance-view');
    const balanceViewNum = doubleView(balanceView);
    const totalBalance = balanceViewNum - withdrawNum;
    balanceView.innerText = totalBalance;

})