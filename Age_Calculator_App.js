let userInput = document.getElementById("date");

// Set max date as today's date in YYYY-MM-DD format
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let birthDate = new Date(userInput.value);

    if (!birthDate.getTime()) {
        document.getElementById("ageResult").innerText = "Please enter a valid date.";
        return;
    }

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // getMonth() returns 0-based index
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; // getMonth() returns 0-based index
    let y2 = today.getFullYear();

    let d3, m3, y3 = y2 - y1;

    // Calculate month difference
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--; // Decrease the year if the current month is less than the birth month
        m3 = 12 + m2 - m1;
    }

    // Calculate day difference
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Display the result
    document.getElementById("ageResult").innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate(); // Corrected the function to call getDate()
}
