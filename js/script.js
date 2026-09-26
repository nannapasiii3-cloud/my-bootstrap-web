document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const successAlert = document.getElementById("successAlert");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (contactForm.checkValidity()) {

                successAlert.classList.remove("d-none");

                contactForm.reset();

                successAlert.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        });

    }

});


const filterButtons = document.querySelectorAll(".filter-btn");
const destinationItems = document.querySelectorAll(".destination-item");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // เปลี่ยนปุ่ม Active
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        // อ่านหมวดหมู่จากปุ่ม
        const filter = this.getAttribute("data-filter");

        destinationItems.forEach(item => {

            const category =
                item.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const destinationItems =
        document.querySelectorAll(".destination-item");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter =
                this.getAttribute("data-filter");


            // ลบ active ทุกปุ่ม
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });


            // เพิ่ม active ให้ปุ่มที่กด
            this.classList.add("active");


            // กรอง Card
            destinationItems.forEach(function (item) {

                const category =
                    item.getAttribute("data-category");

                if (filter === "all" ||
                    category === filter) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

});