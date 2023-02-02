const modalBg = document.querySelector(".modal__bg");
const modalWrapperService = document.querySelector(".modal__wrapper-service");

NiceSelect.bind(document.getElementById("a-select"), {
  placeholder: "select",
});
const openModal = () => {
  modalBg.classList.add("active");
  modalWrapperService.classList.add("active");
};
const closeModal = () => {
  modalBg.classList.remove("active");
  modalWrapperService.classList.remove("active");
};

const form = document.getElementById("serviceForm");

const pristine = new Pristine(form);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  var valid = pristine.validate();
  if (valid) {
    console.log(new FormData(form));
    let response = await fetch("/article/formdata/post/user", {
      method: "POST",
      body: new FormData(form),
    });

  }
  //  alert('Form is valid: ' + valid);
});
