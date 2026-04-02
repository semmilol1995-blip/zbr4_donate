document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const address = btn.parentElement.querySelector('.address').innerText;

    navigator.clipboard.writeText(address);

    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  });
});