const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.querySelectorAll(`[name="complaint"]`);
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.querySelectorAll(`[name="solutions"]`);
const solutionDescription = document.getElementById("solution-description");
const submitButton = document.getElementById("submit-btn");

function validateForm() {
  const isFullNameValid = fullName.value.trim() !== "";
  const qty = Number(quantity.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const orderNoRegex = /^2024\d{6}$/;
  const productCodeRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;

  const isEmailValid = emailRegex.test(email.value.trim());
  const isOrderNoValid = orderNoRegex.test(orderNo.value.trim());
  const isProductCodeValid = productCodeRegex.test(productCode.value.trim());
  const isQuantityValid = qty > 0 && Number.isInteger(qty);

  return {
    "full-name": isFullNameValid,
    email: isEmailValid,
    "order-no": isOrderNoValid,
    "product-code": isProductCodeValid,
    quantity: isQuantityValid,
  };
}

let isComplaintsGroupValid = false;

for (const checkbox of complaintsGroup) {
  if (checkbox.checked) {
    isComplaintsGroupValid = true;
    break;
  }
}
