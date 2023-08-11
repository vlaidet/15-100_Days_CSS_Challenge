document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.querySelector(".card__container");
  const bar = document.querySelector(".card__container .bar");
  
  const input = document.querySelector('.input__container input[type="file"]');
  const uploadIcon = document.querySelector(".input__container .upload__icon");
  const filename = document.querySelector(".input__container .filename");
  const uploadFileButton = document.querySelector(".upload__file__button");

  input.addEventListener("change", function (e) {
    if (e.target.files.length > 0 && e.target.files[0].name !== undefined) {
      uploadIcon.style.display = "none";

      filename.style.display = "block";
      filename.innerHTML = e.target.files[0].name;
    }
  });

  uploadFileButton.addEventListener("click", function () {
    if (input.files.length > 0 && !cardContainer.classList.contains("done")) {
      cardContainer.classList.add("syncing");
      bar.classList.add("active");
      uploadFileButton.innerHTML = "Uploading...";

      setTimeout(() => {
        cardContainer.classList.remove("syncing");
        cardContainer.classList.add("done");
        uploadFileButton.innerHTML = "Done";
        clearTimeout(this);
      }, 3000);
    }

    if (cardContainer.classList.contains("done")) {
      location.reload();
    }
  });
});
