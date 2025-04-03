document.addEventListener("DOMContentLoaded", function () {
    // Hiệu ứng hover cho các thẻ dịch vụ
    const cards = document.querySelectorAll(".service-card");
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s ease-in-out";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Hiệu ứng cuộn mượt mà
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Xác thực form liên hệ
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();  // Ngừng hành động mặc định

        const name = document.querySelector('input[type="text"]').value;
        const phone = document.querySelector('input[type="tel"]').value;
        const message = document.querySelector('textarea').value;

        if (name === '' || phone === '' || message === '') {
            alert('Vui lòng điền đầy đủ thông tin!');
        } else {
            alert('Cảm ơn bạn đã gửi thông tin, chúng tôi sẽ liên hệ lại!');
            // Xử lý gửi form ở đây
        }
    });

    // Hiệu ứng fade-in cho các phần khi cuộn trang
    document.addEventListener('scroll', function () {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                el.classList.add('visible');
            }
        });

        // Thay đổi màu thanh điều hướng khi cuộn trang
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
