let submit = document.getElementById("submit");
let number = document.getElementById("number-input");
let start = document.getElementById("start");
let generated = document.getElementById("generated");

submit.addEventListener("click", generate);

function generate() {
    start.style.display = "none";
    generated.style.display = "inline-block";

    let qrCode = qrcodegen.QrCode;
    let segments = qrcodegen.QrSegment.makeSegments(number.value);
    let finalCode = qrCode.encodeSegments(segments, qrCode.Ecc.MEDIUM, 2, 2, 2, false);
    for (let y = 0; y < finalCode.size; y++) {
        for (let x = 0; x < finalCode.size; x++) {
            (finalCode.getModule(x, y))
        }
    }
    let svg = finalCode.toSvgString(4);
    let container = document.getElementById("qrcode");
    container.innerHTML = svg;
}