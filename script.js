function openQuotation() {
    alert("Quotation Editor - Coming Soon");
}

function openGallery() {
    window.location.href = "gallery.html";
}

function openCarRate() {
    alert("Car Rate - Coming Soon");
}

function openCalculator() {
    const amount = prompt("Enter amount:");

    if (amount !== null && amount !== "") {
        const value = Number(amount);

        if (!isNaN(value)) {
            alert("Amount: ₹" + value);
        } else {
            alert("Please enter a valid number.");
        }
    }
}