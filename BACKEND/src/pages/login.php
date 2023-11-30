<?php
require_once '../config/config.php';
require_once '../includes/functions.php';

session_start();

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];

  $stmt = $conn->prepare("SELECT id, username, password FROM usuarios WHERE username = ?");
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $stmt->bind_result($id, $db_username, $db_password);
  $stmt->fetch();
  $stmt->close();

  if ($db_username && $password === $db_password) {
      $_SESSION["loggedin"] = true;
      $_SESSION["username"] = $username;
      header("Location: home");
      exit;
  } else {
      $login_err = "Credenciais inválidas";
  }

  $conn->close();
}
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
	<title>Acomodare</title>
	<meta charset="utf-8">
	<meta name="description" content="Descrição do projeto Acomodare">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="msapplication-tap-highlight" content="no">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="format-detection" content="telephone=no"><!-- manifest-->
	<link rel="manifest" href="assets/application/manifest.json">
	<link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png"><!-- add to home screen (ios)-->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="Acomodare">
	<meta name="apple-mobile-web-app-status-bar-style" content="#1E1E1E">
	<link rel="apple-touch-icon" href="assets/application/icon-152x152.png"><!-- add to home screen (chrome)-->
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="application-name" content="Acomodare">
	<meta name="theme-color" content="#1E1E1E"><!-- Tile icon for Win8 (144x144 + tile color)-->
	<meta name="msapplication-TileImage" content="assets/application/icon-144x144.png">
	<meta name="msapplication-TileColor" content="#1E1E1E"><!-- ICONS-->
	<link rel="icon" sizes="72x72" type="image/png" href="assets/application/icon-72x72.png">
	<link rel="icon" sizes="96x96" type="image/png" href="assets/application/icon-96x96.png">
	<link rel="icon" sizes="128x128" type="image/png" href="assets/application/icon-128x128.png">
	<link rel="icon" sizes="144x144" type="image/png" href="assets/application/icon-144x144.png">
	<link rel="icon" sizes="152x152" type="image/png" href="assets/application/icon-152x152.png">
	<link rel="icon" sizes="192x192" type="image/png" href="assets/application/icon-192x192.png">
	<link rel="icon" sizes="384x384" type="image/png" href="assets/application/icon-384x384.png">
	<link rel="icon" sizes="512x512" type="image/png" href="assets/application/icon-512x512.png"><!-- PRELOADING-->
	<link rel="preload" as="script" href="assets/js/jquery.min.js">
	<link rel="preload" as="script" href="assets/js/bootstrap.min.js">
	<link rel="preload" as="script" href="assets/js/scripts.min.js">
	<link rel="preload" as="style" href="assets/css/estilos.css"><!-- CSS-->
  <link rel="preload" as="style" href="assets/css/estilos2.css"><!-- CSS-->
	<link rel="stylesheet" href="assets/css/estilos.css">
  <link rel="stylesheet" href="assets/css/estilos2.css">
</head><!-- colocar no attr [data-path] a url do site para poder fazer o lazyload de scripts sem problemas de rota.-->

<body data-path="http://localhost:9000">
	<noscript><style>.noscript{position: sticky;top:0;z-index: 1200;background: #D32F2F;color: #FFF;padding: 20px;text-align: center}</style>
		<div class="noscript">
			<p class="h1">(&gt;_&lt;) Ops....</p>
			<p>Seu navegador está com os scripts desabilitados! Para ter uma melhor experiencia com o nosso site, por favor, habiliete-os.</p>
		</div>
	</noscript><!--  [if lt IE 10]><style>.ie-message{position: sticky;top: 0;z-index: 1200;background: #FF9800;color: #FFF}</style><div class="ie-message"><p class="h1"><em>Atenção!!!</em></p><p>Seu navegador está desatualizado! Para ter uma melhor experiência com o nosso site, por favor atualize-o para a última versão do Microsoft Edge.</p></div><![endif]-->
	<div id="app"><sprite-svg></sprite-svg>
		<template>
      <main class="wrapper">
        <div class="page__login">
          <div class="box__img"></div>
          <div class="segura__conteudo">
            <h2 class="title">Seja bem vindo</h2>
            <h3 class="subtitle">Faça seu login para entrar no sistema</h3>
            <form class="form__login" action="" method="post">
              <div class="group">
                <label for="username">Usuário</label>
                <input type="text" id="username" name="username" required>
              </div>
              <div class="group">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" required>
              </div>
              <button class="btn btn__acessar"  aria-label="Acessar">Acessar</button>
            </form><!-- ./form__login-->
            <?php
              if (isset($login_err)) {
                  echo "<p>$login_err</p>";
              }
            ?>
          </div><!-- ./segura__conteudo-->
        </div><!-- ./page__login-->
      </main><!--/main.wrapper-->

<?php include 'footer.php'; ?>