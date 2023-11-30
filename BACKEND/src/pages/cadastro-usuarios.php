<?php
require_once '../config/config.php';
require_once '../includes/functions.php';
session_start();

// Verifica se o usuário está logado
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: login");
    exit;
}

// Verifica se o parâmetro 'acao' foi enviado via GET
if (isset($_GET['acao'])) {
  if ($_GET['acao'] === 'excluir' && isset($_GET['id'])) {
      // Ação de exclusão
      $id = $_GET['id'];
      $sql = "DELETE FROM usuarios WHERE id = ?";
      
      $stmt = $conn->prepare($sql);

      if (!$stmt) {
          die("Erro na preparação da consulta: " . $conn->error);
      }

      $stmt->bind_param("s", $id);

      if (!$stmt->execute()) {
          die("Erro na execução da consulta: " . $stmt->error);
      }

      $stmt->close();

      // Redireciona de volta para a página principal (ou para onde você desejar)
      header("Location: cadastro-usuarios");
      exit();
  }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST['btn-pesquisar'])) {
    // Verifica se há um valor no campo de pesquisa
    $buscarListagem = isset($_POST['buscar-listagem']) ? $_POST['buscar-listagem'] : '';

    // Consulta SQL para obter a lista de usuarios
    $sql = "SELECT id, username, password FROM usuarios";

    // Adiciona condição de pesquisa se o campo de pesquisa estiver preenchido
    if (!empty($buscarListagem)) {
        $sql .= " WHERE username LIKE '%$buscarListagem%'";
    }
    
    $result = $conn->query($sql);

    // Array para armazenar os usuarios
    $usuarios = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $usuarios[] = $row;
        }
    }
  } elseif (isset($_POST['btn-outra-acao'])) {
    $id = $_POST["id"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $acao = $_POST["acao"];

    if ($acao === "insert") {
        // Ação de inserção
        $sql = "INSERT INTO usuarios (id, username, password)
                VALUES ('$id', '$username', '$password')";
    } elseif ($acao === "update") {
        // Ação de atualização
        $sql = "UPDATE usuarios
                SET username='$username', password='$password'
                WHERE id='$id'";
    }

    if ($conn->query($sql) === TRUE) {
        // Redireciona de volta para a página principal (ou para onde você desejar)
        header("Location: cadastro-usuarios");
        exit();
    } else {
        echo "Erro ao processar ação: " . $conn->error;
    }
  }
  
}

$conn->close();
include 'header.php'; 
?>
  <main class="wrapper">
    <section class="principal">
      <ul class="menu__lateral">
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
        <?php
        // Verifica se o usuário logado é o "admin"
        if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true && $_SESSION["username"] === "admin") {
        ?>
            <li>
                <a href="cadastro-usuarios" aria-label="Definições">Definições
                    <img src="assets/images/definicoes_normal.png" alt="icone" width="24" height="24">
                </a>
            </li>
        <?php
        }
        ?>
      </ul><!-- ./menu__lateral-->
      <div class="conteudo__principal">
        <h2 class="title">Configurações - Usuários
          <img src="assets/images/definicoes_selecionado.png" alt="Animais" width="24" height="24">
        </h2>
        <div class="container container__principal">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="listagem-tab" data-toggle="tab" data-target="#listagem" type="button" role="tab" aria-controls="listagem" aria-selected="true">Listagem</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="formulario-tab" data-toggle="tab" data-target="#formulario" type="button" role="tab" aria-controls="formulario" aria-selected="false">Formulario</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="listagem" role="tabpanel" aria-labelledby="listagem-tab">
              <div class="container container__listagem">
                <div class="row">
                  <div class="col-lg-12">
                  <form method="post">
                      <div class="buscar__listagem">
                          <input type="text" id="buscar-listagem" name="buscar-listagem" placeholder="Buscar por login">
                          <button type="submit" name="btn-pesquisar" class="btn btn__pesquisar" aria-label="Pesquisar">Pesquisar</button>
                      </div><!-- ./buscar__listagem-->
                  </form>
                    
                    <?php
                      $servername = "localhost";
                      $username = "brcriacaodesites_acomodare";
                      $password = "9DPib3cGUji9nk";
                      $dbname = "brcriacaodesites_acomodare";
                      
                      $conn = new mysqli($servername, $username, $password, $dbname);
                      
                      if ($conn->connect_error) {
                          die("Erro na conexão: " . $conn->connect_error);
                      }
                      // Consulta SQL para obter a lista de usuarios
                      $result = $conn->query("SELECT * FROM usuarios ORDER BY id ASC");
                      
                      // Array para armazenar os usuarios
                      $usuarios = [];

                      if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            $usuarios[] = $row;
                        }
                      }
                    ?>
                    <table class="segura__listagem">
                      <thead>
                        <tr>
                          <th>Código</th>
                          <th>Login</th>
                          <th>Senha</th>
                          <th>Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        <?php foreach ($usuarios as $usuario) : ?>
                          <?php if (!empty($buscarListagem) && stripos($usuario['username'], $buscarListagem) === false) continue; ?>
                          <tr class="linha">
                            <td><?= $usuario['id']; ?></td>
                            <td><?= $usuario['username']; ?></td>
                            <td><?= $usuario['password']; ?></td>
                            <td class="td_segura">
                              <button class="btn btn__acoes editar-linha editar-linha-usuarios" aria-label="Editar">Editar</button>
                              <a href="?acao=excluir&id=<?= $usuario['id']; ?>" class="btn btn__acoes" aria-label="Excluir" onclick="return confirm('Tem certeza que deseja excluir este usuário?')">Excluir</a>
                            </td>
                          </tr>
                        <?php endforeach; ?>
                      </tbody>
                    </table><!-- ./segura__listagem-->
                    <button class="btn btn__acoes adicionar-linha" id="adicionar" aria-label="Adicionar">Adicionar</button>
                  </div><!-- ./col-->
                </div><!-- ./row-->
              </div><!-- ./container-->
            </div>
            <div class="tab-pane fade" id="formulario" role="tabpanel" aria-labelledby="formulario-tab">
              <form class="form__cadastro" action="" method="post">
                <input type="hidden" id="acao" name="acao" value="insert">
                <div class="group">
                  <label for="id">Código</label>
                  <input style="pointer-events: none; opacity: 0.5;" type="text" id="id" name="id">
                </div>
                <div class="group">
                  <label for="username">Login</label>
                  <input type="text" id="username" name="username" required>
                </div>
                <div class="group">
                  <label for="password">Senha</label>
                  <input type="password" id="password" name="password" required>
                </div>
                <div class="box__btns">
                  <button class="btn btn__form" type="submit" name="btn-outra-acao" id="submit-btn" aria-label="Salvar">Salvar</button>
                  <button class="btn btn__form" type="button" id="cancelar" aria-label="Voltar">Voltar</button>
                </div><!-- ./box__btns-->
              </form><!-- ./form__cadastro-->
            </div>
          </div>
        </div><!-- ./container-->
      </div><!-- ./conteudo__principal-->
    </section><!-- ./principal-->
  </main><!--/main.wrapper-->
<?php include 'footer.php'; ?>