function calculateMembershipCost() {
    const membershipType = document.getElementById("membershipType");
    const yearsInput = document.getElementById("years");
    const costField = document.getElementById("cost");
    const message = document.getElementById("message");

    const yearlyPrice = parseFloat(membershipType.value);
    const years = parseInt(yearsInput.value);

    // Tarkistetaan että vuosimäärä on kelvollinen
    if (isNaN(years) || years < 1) {
        costField.value = "";
        message.textContent = "Please enter a valid number of years.";
        message.className = "message normal";
        return;
    }

    let totalCost = yearlyPrice * years;

    // Yli 2 vuotta = 20 % alennus
    if (years > 2 && years < 5) {
        totalCost = totalCost * 0.8;
        message.textContent = "Great! You are eligible for a 20% discount.";
        message.className = "message discount";
    }
    // 5 vuotta tai enemmän = 20 % alennus + extra 5 €
    else if (years >= 5) {
        totalCost = (totalCost * 0.8) - 5;
        message.textContent = "Congratulations! You get a 20% discount and an extra €5 off.";
        message.className = "message special";
    }
    // Ei alennusta
    else {
        message.textContent = "No discount yet. Choose more than 2 years to get 20% off.";
        message.className = "message normal";
    }

    costField.value = "€" + totalCost.toFixed(2);
}

// Lasketaan hinta aina kun käyttäjä vaihtaa jäsenyyttä tai vuosia
document.getElementById("membershipType").addEventListener("change", calculateMembershipCost);
document.getElementById("years").addEventListener("input", calculateMembershipCost);

// Lasketaan heti sivun latautuessa oletusarvo
calculateMembershipCost();