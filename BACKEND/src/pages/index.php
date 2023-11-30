<?php
require_once '../config/config.php';
require_once '../includes/functions.php';

// Verifica se há um parâmetro 'page' na URL
if (isset($_GET['page'])) {
  $page = $_GET['page'];

  // Determina qual página carregar com base no parâmetro 'page'
  switch ($page) {
      case 'home':
          include 'pages/home.php';
          break;
      case 'login':
          include 'pages/login.php';
          break;
      case 'cadastro-produtos':
          include 'pages/cadastro-produtos.php';
          break;
      case 'cadastro-pessoas':
        include 'pages/cadastro-pessoas.php';
        break;
      case 'cadastro-animais':
        include 'pages/cadastro-animais.php';
        break;
      case 'cadastro-usuarios':
        include 'pages/cadastro-usuarios.php';
        break;
      case 'agenda':
        include 'pages/agenda.php';
        break;
      case 'caixa':
        include 'pages/caixa.php';
        break;
      case 'cadastro-quartos':
        include 'pages/cadastro-quartos.php';
        break;
        case 'esqueci-a-senha':
          include 'pages/esqueci-a-senha.php';
          break;
      default:
          include 'pages/not_found.php';
          break;
  }
} else {
  // Se não houver parâmetro 'page', carrega a página inicial
  include 'pages/home.php';
}
?>