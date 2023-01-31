const menuIcon = document.querySelector(".hamburger");
const Sidebar = document.querySelector(".sidebar");
const closeIcon = document.querySelector(".close_sidebar");

menuIcon.addEventListener("click", () => {
  Sidebar.classList.add("active");
  document.documentElement.style.overflow = "hidden";
});

closeIcon.addEventListener("click", () => {
  Sidebar.classList.remove("active");
  document.documentElement.style.overflow = "auto";
});

// Mail submit waring functinality
const submitHandler = (e) => {
  event.preventDefault();
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Our emailing service is under maintenance. Please book a call with us in order to get in touch",
  });
};
