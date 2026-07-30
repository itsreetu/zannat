const form = document.getElementById("orderForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    clearErrors();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let studentId = document.getElementById("studentId").value.trim();
    let department = document.getElementById("department").value;
    let quantity = document.getElementById("quantity").value;
    let instruction = document.getElementById("instruction").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    let foods = document.querySelectorAll(".food:checked");

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name cannot be empty.";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email.";
        valid = false;
    }

    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Phone number cannot be empty.";
        valid = false;
    }

    if (studentId === "") {
        document.getElementById("studentIdError").innerHTML = "Student ID cannot be empty.";
        valid = false;
    }

    if (!gender) {
        document.getElementById("genderError").innerHTML = "Select your gender.";
        valid = false;
    }

    if (department === "") {
        document.getElementById("departmentError").innerHTML = "Select a department.";
        valid = false;
    }


    if (foods.length === 0) {
        document.getElementById("foodError").innerHTML = "Select at least one food item.";
        valid = false;
    }

    if (quantity === "" || quantity <= 0) {
        document.getElementById("quantityError").innerHTML = "Quantity must be greater than 0.";
        valid = false;
    }

    if (!valid) return;

    let totalPrice = 0;
    let selectedItems = "";

    foods.forEach(function (item) {

        let foodName = item.value;
        let price = Number(item.dataset.price);

        totalPrice += price;

        selectedItems += "<li>" + foodName + " - $" + price + "</li>";
    });

    let totalBill = totalPrice * Number(quantity);

    let result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = `
        <h3>Order Placed Successfully!</h3>

        <p><strong>Customer Name:</strong> ${name}</p>

        <p><strong>Student ID:</strong> ${studentId}</p>

        <p><strong>Department:</strong> ${department}</p>

        <p><strong>Gender:</strong> ${gender.value}</p>

        <p><strong>Selected Items:</strong></p>

        <ul>
            ${selectedItems}
        </ul>

        <p><strong>Quantity:</strong> ${quantity}</p>

        <p><strong>Total Bill:</strong> $${totalBill}</p>

        <p><strong>Special Instructions:</strong> ${instruction || "None"}</p>

        <h3>Thank you, ${name}! Your order has been placed successfully.</h3>
    `;
});

function clearErrors() {

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("studentIdError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("departmentError").innerHTML = "";
    document.getElementById("foodError").innerHTML = "";
    document.getElementById("quantityError").innerHTML = "";
}