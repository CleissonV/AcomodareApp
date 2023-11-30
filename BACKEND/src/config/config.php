<?php
// Configurações do banco de dados
define('DB_HOST', 'localhost');
define('DB_USER', 'brcriacaodesites_acomodare');
define('DB_PASSWORD', '9DPib3cGUji9nk');
define('DB_NAME', 'brcriacaodesites_acomodare');

// Conecte-se ao banco de dados
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Verifique a conexão
if ($conn->connect_error) {
  die("Falha na conexão: " . $conn->connect_error);
}
?>