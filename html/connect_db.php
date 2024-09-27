<?php
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
    die(print_r(sqlsrv_errors(), true));
}

// สร้างคำสั่ง SQL
$sql = "SELECT * FROM tool_list";

// รันคำสั่ง SQL
$stmt = sqlsrv_query($conn, $sql);

// ตรวจสอบผลลัพธ์
if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
}

// แสดงผลข้อมูลในตาราง HTML
echo "<table border='1'>
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Class</th>
</tr>";

while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['class'] . "</td>";
    echo "</tr>";
}

echo "</table>";

// ปิดการเชื่อมต่อฐานข้อมูล
sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);
?>
