// Funksion për të shfaqur një mesazh
function showSms() {
    alert("Ky është vetëm një mesazh");
}

// Thirrja e funksionit
showSms();


// Funksion për mbledhje
function sum(nr1, nr2) {
    return nr1 + nr2;
}

// Shfaqja në console
console.log(sum(2, 4));

// Shfaqja në faqe
document.write(sum(3, 4));


// Funksion me variabël lokale
function localVariable() {
    let vl = "Digital School";
    alert(vl);
}

// Thirrja e funksionit
localVariable();