<?php
// อนุญาตการร้องขอจากทุก Origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// ตั้งค่า Content-Type เป็น JSON
header('Content-Type: application/json');

// ตั้งค่าการเชื่อมต่อฐานข้อมูล
$serverName = "sqlserver"; 
$connectionOptions = array(
    "Database" => "teerapat_db", 
    "Uid" => "sa",
    "PWD" => "YourStrong!Passw0rd"
);

// สร้างการเชื่อมต่อ
$conn = sqlsrv_connect($serverName, $connectionOptions);

// ตรวจสอบว่าการเชื่อมต่อสำเร็จหรือไม่
if ($conn === false) {
    // ส่งข้อความแสดงข้อผิดพลาดในรูปแบบ JSON
    die(json_encode(array('error' => sqlsrv_errors())));
}

// สร้างคำสั่ง SQL
$sql = "SELECT * FROM tool_list";

// รันคำสั่ง SQL
$stmt = sqlsrv_query($conn, $sql);

// ตรวจสอบผลลัพธ์
if ($stmt === false) {
    // ส่งข้อความแสดงข้อผิดพลาดในรูปแบบ JSON
    die(json_encode(array('error' => sqlsrv_errors())));
}

// สร้าง array เพื่อเก็บผลลัพธ์
$results = array();

// นำผลลัพธ์จากฐานข้อมูลมาใส่ใน array
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $results[] = $row;
}

// ส่งข้อมูลในรูปแบบ JSON
echo json_encode($results);

// ปิดการเชื่อมต่อ
sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);
?>
