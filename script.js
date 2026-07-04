const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.querySelectorAll(`[name="complaint"]`);
const complaintsGroupFieldset = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description");
const complaintDescriptionFieldset = document.getElementById(
  "complaint-description-container",
);
const solutionsGroup = document.querySelectorAll(`[name="solutions"]`);
const solutionsGroupFieldset = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");
const solutionDescriptionFieldset = document.getElementById(
  "solution-description-container",
);
const submitButton = document.getElementById("submit-btn");
const form = document.getElementById("form");

function validateForm() {
  const isFullNameValid = fullName.value.trim() !== "";
  const qty = Number(quantity.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const orderNoRegex = /^2024\d{6}$/;
  const productCodeRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;
  const otherComplaint = document.getElementById("other");
  const description = complaintDescription.value.trim();

  const isEmailValid = emailRegex.test(email.value.trim());
  const isOrderNoValid = orderNoRegex.test(orderNo.value.trim());
  const isProductCodeValid = productCodeRegex.test(productCode.value.trim());
  const isQuantityValid = qty > 0 && Number.isInteger(qty);

  let isComplaintsGroupValid = false;
  for (const checkbox of complaintsGroup) {
    if (checkbox.checked) {
      isComplaintsGroupValid = true;
      break;
    }
  }

  let isComplaintDescriptionValid;
  if (otherComplaint.checked) {
    isComplaintDescriptionValid = description.length >= 20;
  } else {
    isComplaintDescriptionValid = true;
  }

  let isSolutionsGroupValid = false;
  for (const radio of solutionsGroup) {
    if (radio.checked) {
      isSolutionsGroupValid = true;
      break;
    }
  }

  const otherSolution = document.getElementById("other-solution");
  const solution = solutionDescription.value.trim();
  let isSolutionDescriptionValid;
  if (otherSolution.checked) {
    isSolutionDescriptionValid = solution.length >= 20;
  } else {
    isSolutionDescriptionValid = true;
  }

  return {
    "full-name": isFullNameValid,
    email: isEmailValid,
    "order-no": isOrderNoValid,
    "product-code": isProductCodeValid,
    quantity: isQuantityValid,
    "complaints-group": isComplaintsGroupValid,
    "complaint-description": isComplaintDescriptionValid,
    "solutions-group": isSolutionsGroupValid,
    "solution-description": isSolutionDescriptionValid,
  };
}

function isValid(validationResult) {
  return Object.values(validationResult).every(function (value) {
    return value;
  });
}

// =============================================================================
// Input changes validation
// =============================================================================

// Validate Input function
function validateInput(element, validationKey) {
  const validation = validateForm();
  console.log(validation);

  if (validation[validationKey]) {
    element.style.borderColor = "green";
  } else {
    element.style.borderColor = "red";
  }
}

// Fullname
fullName.addEventListener("change", function () {
  validateInput(fullName, "full-name");
});

// Email
email.addEventListener("change", function () {
  validateInput(email, "email");
});

// Order no
orderNo.addEventListener("change", function () {
  validateInput(orderNo, "order-no");
});

// Product Code
productCode.addEventListener("change", function () {
  validateInput(productCode, "product-code");
});

// Quantity
quantity.addEventListener("change", function () {
  validateInput(quantity, "quantity");
});

// Complaints Group
for (const checkbox of complaintsGroup) {
  checkbox.addEventListener("change", function () {
    validateInput(complaintsGroupFieldset, "complaints-group");
  });
}

// Complaint Description
complaintDescription.addEventListener("change", function () {
  validateInput(complaintDescription, "complaint-description");
});

// Solutions Group
for (const radio of solutionsGroup) {
  radio.addEventListener("change", function () {
    validateInput(solutionsGroupFieldset, "solutions-group");
  });
}

// Solution Description
solutionDescription.addEventListener("change", function () {
  validateInput(solutionDescription, "solution-description");
});

// Form Submit Handler
form.addEventListener("submit", function (event) {
  const validation = validateForm();
  const formIsValid = isValid(validation);

  if (!formIsValid) {
    event.preventDefault();
    validateInput(fullName, "full-name");
    validateInput(email, "email");
    validateInput(orderNo, "order-no");
    validateInput(productCode, "product-code");
    validateInput(quantity, "quantity");
    validateInput(complaintsGroupFieldset, "complaints-group");
    validateInput(complaintDescription, "complaint-description");
    validateInput(solutionsGroupFieldset, "solutions-group");
    validateInput(solutionDescription, "solution-description");
  }
});
