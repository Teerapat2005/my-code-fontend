<?php
require_once('../connect_database.php');
require_once('../SettingAPI.php');

try {
    if (isset($_GET['id']) && !empty($_GET['id'])) {
        $id = $_GET['id'];

        $stmt = $con->prepare("
            SELECT 
                id, 
                item_name, 
            FROM 
                master.dbo
                STS_CP.dbo.wage_structures_cost
            WHERE 
                wage_id = :id;
        ");
        
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        
        $wageData = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($wageData) {
            echo json_encode($wageData);
        } else {
            echo json_encode([]);
        }
    } else {
        echo json_encode(['error' => 'Error: Missing or invalid id parameter']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error: ' . $e->getMessage()]);
}
?>
