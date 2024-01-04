
function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }
  
  // Change text color based on checkbox state
  function changeColor(checkbox) {
    var label = checkbox.nextElementSibling;
    if (checkbox.checked) {
      label.style.color = "gray";
    } else {
      label.style.color = "black";
    }
  }

  export { toggleDropdown, changeColor };

