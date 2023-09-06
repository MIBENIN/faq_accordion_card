const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const accordionItem = this.closest(".accordion-item");
    accordionItem.classList.toggle("active");

    const allAccordionItems = document.querySelectorAll(".accordion-item");
    allAccordionItems.forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });
  });
});
