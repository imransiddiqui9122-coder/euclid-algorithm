function calculate() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let result = document.getElementById("result");

    // Check if A or B is empty
    if (document.getElementById("a").value === "" ||
        document.getElementById("b").value === "") {

        result.innerHTML = "<p class='error'>⚠️ Please enter both A and B.</p>";
        return;
    }

    // B cannot be zero
    if (b === 0) {
        result.innerHTML = "<p class='error'>⚠️ B cannot be 0.</p>";
        return;
    }

    // B cannot be negative
    if (b < 0) {
        result.innerHTML = "<p class='error'>⚠️ B must be a positive number.</p>";
        return;
    }

    let steps = "<h3>A = BQ + R</h3>";

    while (b !== 0) {
        let q = Math.floor(a / b);
        let r = a % b;

        steps += a + " = " + b + " × " + q + " + " + r + "<br>";

        a = b;
        b = r;
    }

    steps += "<br><b>∴ HCF = " + a + "</b>";

    result.innerHTML = steps;
}


// Clear button
function clearApp() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("result").innerHTML = "";
}