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
		<header class="topo">
			<div class="mobile__controls">
				<div class="logo">
					<h1 class="titulo__logo">Acomodare</h1>
				</div><!-- ./logo-->
				<button class="btn" type="button" aria-expanded="false" aria-label="Mostrar menu" id="menuToggler"><i class="fas fa-bars"></i></button><!-- ./menuToggler-->
			</div><!-- ./mobile__controls-->
			<nav class="main__topo">
				<div class="logo">
					<h1 class="titulo__logo">Acomodare</h1>
				</div><!-- ./logo-->
				<ul class="menu">
					<li>
						<a href="home" aria-label="Home">Home
							<img src="assets/images/home_normal.png" alt="icone" width="24" height="24">
						</a>
					</li>
					<li>
						<a href="cadastro-animais" aria-label="Animais">Animais
							<img src="assets/images/pets_normal.png" alt="icone" width="24" height="24">
						</a>
					</li>
					<li>
						<a href="agenda" aria-label="Agenda">Agenda
							<img src="assets/images/agenda_normal.png" alt="icone" width="24" height="24">
						</a>
					</li>
					<li>
						<a href="caixa" aria-label="Caixa">Caixa
							<img src="assets/images/caixa_normal.png" alt="icone" width="24" height="24">
						</a>
					</li>
					<li>
						<a href="cadastro-pessoas" aria-label="Pessoas">Pessoas
							<img src="assets/images/pessoas_normal.png" alt="icone" width="24" height="24">
						</a>
					</li>
					<li>
						<a href="cadastro-quartos" aria-label="Quartos">Quartos
							<img src="assets/images/pets_normal.png" alt="icone" width="24" height="24">
						</a>
					</li>
					<li>
						<a href="cadastro-produtos" aria-label="Produtos">Produtos
							<img src="assets/images/produtos_normal.png" alt="icone" width="24" height="24">
						</a>
					</li>
					<li>
						<a href="cadastro-usuarios" aria-label="Definições">Definições
							<img src="assets/images/definicoes_normal.png" alt="icone" width="24" height="24">
						</a>
					</li>
				</ul><!-- ./menu-->
			</nav><!-- ./main__topo-->
			<div class="backdrop"></div>
		</header><!-- ./topo-->
		<template>