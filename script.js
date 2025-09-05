document.addEventListener('DOMContentLoaded', () => {
    // ---------- TAB SWITCH ----------
    const tabButtons = document.querySelectorAll('.tab-button');
    const formSections = document.querySelectorAll('.form-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            formSections.forEach(sec => sec.classList.remove('active'));
            button.classList.add('active');
            const target = button.getAttribute('data-tab');
            document.getElementById(target + 'Section').classList.add('active');
        });
    });

    // ---------- LOGIN ----------
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            const otp = document.getElementById('otp').value.trim();

            // Demo credentials
            const demoEmail = "test@test.com";
            const demoPassword = "12345";
            const demoOtp = "1111";

            if (email === demoEmail && password === demoPassword && otp === demoOtp) {
                alert("लॉगिन यशस्वी ✅");
                window.location.href = "services.html";
            } else {
                alert("ईमेल / पासवर्ड / OTP चुकीचा ❌");
            }
        });
    }

    // ---------- SEND OTP ----------
    const sendOtpButton = document.getElementById('sendOtpButton');
    if (sendOtpButton) {
        sendOtpButton.addEventListener('click', () => {
            const mobile = document.getElementById('loginMobile').value.trim();
            if (mobile === "") {
                alert("मोबाईल क्रमांक भरा.");
            } else {
                alert("OTP पाठवला गेला (डेमो): 1111");
            }
        });
    }

    // ---------- REGISTER ----------
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const mobile = document.getElementById('registerMobile').value.trim();
            const password = document.getElementById('registerPassword').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();

            if (fullName === "" || email === "" || mobile === "" || password === "" || confirmPassword === "") {
                alert("सर्व माहिती भरा ❌");
                return;
            }

            if (password !== confirmPassword) {
                alert("पासवर्ड जुळत नाही ❌");
                return;
            }

            alert("नोंदणी यशस्वी ✅");
            window.location.href = "services.html";
        });
    }
});
