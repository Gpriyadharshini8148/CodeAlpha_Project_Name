function calculateAge() {
    var dobDay = parseInt(document.getElementById('dob-day').value);
    var dobMonth = parseInt(document.getElementById('dob-month').value) - 1; // Months are zero-based
    var dobYear = parseInt(document.getElementById('dob-year').value);

    var dob = new Date(dobYear, dobMonth, dobDay);
    var currentDate = new Date();

    var ageDate = new Date(currentDate - dob);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);

    document.getElementById('result').innerHTML = "Your age is: " + age;
}
