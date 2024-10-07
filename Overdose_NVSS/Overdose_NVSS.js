//Detecting change within our Dropdown menu
document.getElementById("dropdown").addEventListener("change", function() {
    let selectedOption = this.options[this.selectedIndex].text;
    document.getElementById("selectedOption").textContent = "You selected: " + selectedOption;
});