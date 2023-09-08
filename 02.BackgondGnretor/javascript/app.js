document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("color-picker");
    const generateButton = document.getElementById("generate");
    const generatedColorBox = document.getElementById("generated-color");
    const copyButton = document.getElementById("copy");

    generateButton.addEventListener("click", function() {
        const selectedColor = colorPicker.value;
        generatedColorBox.style.backgroundColor = selectedColor;
        generatedColorBox.textContent = selectedColor;
    });

    copyButton.addEventListener("click", function() {
        const generatedColor = generatedColorBox.textContent;
        const tempInput = document.createElement("input");
        tempInput.value = generatedColor;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Color code copied to clipboard: " + generatedColor);
    });
});
