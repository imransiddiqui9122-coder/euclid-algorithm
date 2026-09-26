function calculate() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let result = document.getElementById("result");

    if (document.getElementById("a").value === "" ||
        document.getElementById("b").value === "") {
        result.innerHTML = "<p class='error'>⚠️ Please enter both A and B.</p>";
        return;
    }

    if (b === 0) {
        result.innerHTML = "<p class='error'>⚠️ B cannot be 0.</p>";
        return;
    }

    if (b < 0) {
        result.innerHTML = "<p class='error'>⚠️ B must be a positive number.</p>";
        return;
    }

    let originalA = a;
    let originalB = b;

    let operation =
        document.querySelector('input[name="operation"]:checked').value;

    // HCF process
    let steps = "";

    while (b !== 0) {
        let q = Math.floor(a / b);
        let r = a % b;

        steps += a + " = " + b + " × " + q + " + " + r + "<br>";

        a = b;
        b = r;
    }

    let hcf = a;

    let lcm = (originalA * originalB) / hcf;

   // HCF only
if (operation === "hcf") {
    result.innerHTML =
        "<h3>A = BQ + R</h3>" +
        steps +
        "<br><b>∴ HCF = " + hcf + "</b>";
}

// LCM only
if (operation === "lcm") {
    result.innerHTML =
        "<h3>LCM = A × B / HCF</h3>" +
        "<b>LCM = " + originalA + " × " + originalB + " / " + hcf + "</b>" +
        "<br>" +
        "<b>LCM = " + lcm + "</b>";
}

// HCF + LCM
if (operation === "both") {
    result.innerHTML =
        "<h3>A = BQ + R</h3>" +
        steps +
        "<br><b>∴ HCF = " + hcf + "</b>" +
        "<br><br>" +
        "<h3>LCM = A × B / HCF</h3>" +
        "<b>LCM = " + originalA + " × " + originalB + " / " + hcf + "</b>" +
        "<br>" +
        "<b>∴ LCM = " + lcm + "</b>";
}
}


// Button text change
document.querySelectorAll('input[name="operation"]').forEach(function(radio) {

    radio.addEventListener("change", function() {

        let button = document.getElementById("calculateBtn");

        if (this.value === "hcf") {
            button.textContent = "Calculate HCF";
        }

        if (this.value === "lcm") {
            button.textContent = "Calculate LCM";
        }

        if (this.value === "both") {
            button.textContent = "Calculate HCF + LCM";
        }
    });

});


// Clear button
function clearApp() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("result").innerHTML = "";

    document.querySelector('input[value="hcf"]').checked = true;

    document.getElementById("calculateBtn").textContent = "Calculate HCF";
}
