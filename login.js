document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า
  
    // รับค่าจากฟอร์ม
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // ตรวจสอบข้อมูลล็อกอิน (ตัวอย่างใช้ค่าคงที่)
    const validUsername = "admin";
    const validPassword = "1234";
  
    if (username === validUsername && password === validPassword) {
      showPopup("Login successful!");
      setTimeout(() => {
        window.location.href = "index.html"; // เปลี่ยนหน้าไปยังหน้าหลักหลังปิดป๊อปอัป
      }, 2000);
    } else {
      showPopup("Invalid username or password.");
    }
  });
  
  // ฟังก์ชันแสดงป๊อปอัป
  function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const closePopup = document.getElementById('closePopup');
  
    popupMessage.textContent = message;
    popup.classList.remove('hidden');
  
    closePopup.onclick = function () {
      popup.classList.add('hidden');
    };
  }
  