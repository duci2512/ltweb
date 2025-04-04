document.addEventListener("DOMContentLoaded", function() {
    // Card Hover Effect
    const handleCardHover = () => {
        const cards = document.querySelectorAll(".service-card, .pricing-card");
        cards.forEach(card => {
            card.addEventListener("mouseover", () => {
                card.style.transform = "scale(1.05)";
            });
            card.addEventListener("mouseout", () => {
                card.style.transform = "scale(1)";
            });
        });
    };

    // Smooth Scroll
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href'))
                    .scrollIntoView({ behavior: 'smooth' });
            });
        });
    };

    // Form Validation
    const initFormValidation = () => {
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.querySelector('input[type="text"]')?.value;
                const phone = document.querySelector('input[type="tel"]')?.value;
                const message = document.querySelector('textarea')?.value;

                if (!name || !phone || !message) {
                    alert('Vui lòng điền đầy đủ thông tin!');
                    return;
                }
                alert('Cảm ơn bạn đã gửi thông tin, chúng tôi sẽ liên hệ lại!');
            });
        }
    };

    // Chat Functions
    window.openChat = () => {
        document.getElementById("chat-window").style.display = "block";
    };

    window.closeChat = () => {
        document.getElementById("chat-window").style.display = "none";
    };

    // Initialize
    handleCardHover();
    initSmoothScroll();
    initFormValidation();
});
