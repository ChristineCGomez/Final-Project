function submitForm() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const reason = document.getElementById("reason").value.trim();
  const sex = document.querySelector('input[name="sex"]:checked');

  let valid = true;

  document.querySelectorAll('.error').forEach(e => e.textContent = '');

  if (!firstName) {
    document.getElementById("firstNameError").textContent = " required";
    valid = false;
  }

  if (!lastName) {
    document.getElementById("lastNameError").textContent = " required";
    valid = false;
  }

  if (!sex) {
    document.getElementById("sexError").textContent = " required";
    valid = false;
  }

  if (!email) {
    document.getElementById("emailError").textContent = " required";
    valid = false;
  }

  if (!password) {
    document.getElementById("passwordError").textContent = " required";
    valid = false;
  }

  if (!reason) {
    document.getElementById("reasonError").textContent = " required";
    valid = false;
  }

  if (valid) {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("sex", sex.value);
    localStorage.setItem("reason", reason);

    window.location.href = "proj_profile_Gomez.html";
  }
}
