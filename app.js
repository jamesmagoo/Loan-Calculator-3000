// Listen For Submit

document.getElementById('loan-form').addEventListener('submit', calcResults);

function calcResults(e){

    // Get UI Variables
    const amount = document.getElementById('amount');
    const years = document.getElementById('year');
    const interest = document.getElementById('rate');
    const payment = document.getElementById('monthly-payment');;
    const totalPaid = document.getElementById('total-payment');
    const totalInterestPaid = document.getElementById('interest-payment');

    const principal = parseFloat(amount.value);
    const calcInterest = parseFloat(interest.value) /100 / 12 ;
    const calcPayments = parseFloat(years.value) * 12 ;

    // Compute monthly payments

    const x = Math.pow(1 + calcInterest, calcPayments);
    const monthly = (principal*x*calcInterest)/(x-1);

    if(isFinite(monthly)){
        payment.value = monthly.toFixed(2);
        totalPaid.value = ( monthly * calcPayments).toFixed(2);
        totalInterestPaid = ((monthly * calcPayments)- principal).toFixed(2);
    } else {


    console.log('ERROR');
    }


    e.preventDefault();

}