<?php
// ข้อมูลเชื่อมต่อฐานข้อมูล
$servername = "localhost"; // ถ้า Docker รันบน localhost
$username = "sa"; // ชื่อผู้ใช้ root
$password = "YourStrong!Passw0rd"; // รหัสผ่านที่ตั้งไว้ตอนสร้าง Docker
$dbname = "sql-mytest"; // ชื่อฐานข้อมูลที่สร้าง

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("การเชื่อมต่อล้มเหลว: " . $conn->connect_error);
}

// SQL Query สำหรับการ select ข้อมูล
$sql = "SELECT * FROM your_table"; // ปรับเปลี่ยนตามตารางของคุณ
$result = $conn->query($sql);

// เก็บผลลัพธ์ในรูปแบบ JSON
$data = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// ส่งข้อมูลเป็น JSON
echo json_encode($data);

// ปิดการเชื่อมต่อ
$conn->close();
?>