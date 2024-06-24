const sliders = document.querySelectorAll("input[type='range']");
    sliders.forEach(function(slider){
    slider.addEventListener("input",calculateInterest);
    });

const principalInput = document.getElementById("principal");
    principalInput.addEventListener("change",calculateInterest);

function calculateInterest(){
    let principal = parseFloat(principalInput.value);
    let interestRate = document.getElementById("interest-rate").value;
    let term = document.getElementById("no-of-years").value;

    principalInput.value = principal.toFixed(2);

    let totalInterest = parseFloat((principal * (interestRate/100) * term));
    let total = parseFloat((principal + totalInterest)).toFixed(2);

    let annualInterest = (totalInterest / term).toFixed(2);

    document.getElementById("interest-amount").textContent = `\£ ${totalInterest}`;
    document.getElementById("total-amount").textContent = `\£ ${total}`;
    
    document.getElementById("rate").textContent = `${interestRate}%`;
    document.getElementById("years").textContent = term;

    document.getElementById("interest-per-year").textContent = `\£ ${annualInterest}`;
}

calculateInterest();
