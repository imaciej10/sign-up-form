document.addEventListener("DOMContentLoaded", () => {
  const pass1 = document.querySelector(".firstPass");
  const pass2 = document.querySelector(".secondPass");
  const passCheck = document.querySelector("span.check");

  pass2.addEventListener("input", () => {
    if (pass2.value.length <= 8) {
      passCheck.textContent = "Too short!";
    } else if (pass2.value === pass1.value) {
      passCheck.textContent = "";
    } else {
      passCheck.textContent = "Passwords do not match!";
    }
  });

  pass1.addEventListener("input", () => {
    if (pass1.value.length <= 8) {
      passCheck.textContent = "Too short!";
    } else if (pass1.value === pass2.value) {
      passCheck.textContent = "";
    } else {
      passCheck.textContent = "Passwords do not match!";
    }
  });
});
