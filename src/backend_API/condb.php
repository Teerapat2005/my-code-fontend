<?php
header("Access-Control-Allow-Origin: *"); // Allow cross-origin requests

class Condb {
    // Database configuration
    private $serverName = "LAPTOP-IV71EIJG\DTW48";
    private $database = "Ea_dashbord";
    private $username = ""; // ใส่ชื่อผู้ใช้ของฐานข้อมูล
    private $password = ""; // ใส่รหัสผ่านของฐานข้อมูล

    public function connection() {
        try {
            // Attempt to connect to the database
            $conn = new PDO("sqlsrv:Server=$this->serverName;Database=$this->database", $this->username, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
             //echo json_encode(array('status' => 'success', 'message' => 'Connected successfully'));
            return $conn;
        } catch (PDOException $e) {
            // Handle connection errors
            echo json_encode(array('status' => 'error', 'message' => 'Database connection error: ' . $e->getMessage()));
            return null;
        }
    }

}

?>
