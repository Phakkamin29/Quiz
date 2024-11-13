"use strict";
const inputNumber = document.getElementById("inputNumber");
const submitBtn = document.getElementById("submitBtn");
const outputDiv = document.getElementById("output");
// ฟังก์ชันสร้างรูปแบบดาว
function generatePattern(n) {
    const result = [];
    // สร้างรูปแบบเพิ่มจำนวนดาว
    for (let i = 1; i <= n; i++) {
        result.push("*".repeat(i));
    }
    // สร้างรูปแบบลดจำนวนดาว
    for (let i = n - 1; i >= 1; i--) {
        result.push("*".repeat(i));
    }
    return result;
}
// ฟังก์ชันเมื่อกดปุ่ม Submit
submitBtn.addEventListener("click", () => {
    const number = parseInt(inputNumber.value, 10);
    // ตรวจสอบว่าค่าที่ใส่เป็นตัวเลขที่ถูกต้อง
    if (isNaN(number) || number <= 0) {
        outputDiv.innerHTML = "<p>Please enter a valid positive number.</p>";
        return;
    }
    // สร้างรูปแบบดาวและแสดงผล
    const pattern = generatePattern(number);
    outputDiv.innerHTML = pattern.map((line) => `<p>${line}</p>`).join("");
});
