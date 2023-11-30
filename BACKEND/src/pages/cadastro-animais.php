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
  if ($_GET['acao'] === 'excluir' && isset($_GET['codigo'])) {
      // Ação de exclusão
      $codigo = $_GET['codigo'];
      $sql = "DELETE FROM animais WHERE codigo = ?";
      
      $stmt = $conn->prepare($sql);

      if (!$stmt) {
          die("Erro na preparação da consulta: " . $conn->error);
      }

      $stmt->bind_param("s", $codigo);

      if (!$stmt->execute()) {
          die("Erro na execução da consulta: " . $stmt->error);
      }

      $stmt->close();

      // Redireciona de volta para a página principal (ou para onde você desejar)
      header("Location: cadastro-animais");
      exit();
  }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST['btn-pesquisar'])) {
    // Verifica se há um valor no campo de pesquisa
    $buscarListagem = isset($_POST['buscar-listagem']) ? $_POST['buscar-listagem'] : '';

    // Consulta SQL para obter a lista de animais
    $sql = "SELECT codigo, nome, proprietario, raca, cor, pelagem, tamanho, observacoes FROM animais";

    // Adiciona condição de pesquisa se o campo de pesquisa estiver preenchido
    if (!empty($buscarListagem)) {
        $sql .= " WHERE nome LIKE '%$buscarListagem%'";
    }
    
    $result = $conn->query($sql);

    // Array para armazenar os animais
    $animais = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $animais[] = $row;
        }
    }
  } elseif (isset($_POST['btn-outra-acao'])) {
    $codigo = $_POST["codigo"];
    $nome = $_POST["nome"];
    $proprietario = $_POST["proprietario"];
    $raca = $_POST["raca"];
    $cor = $_POST["cor"];
    $pelagem = $_POST["pelagem"];
    $tamanho = $_POST["tamanho"];
    $observacoes = $_POST["observacoes"];
    $acao = $_POST["acao"];

    // Divide o valor selecionado para obter o código e o nome
    list($proprietarioCodigo, $proprietarioNome) = explode("|", $proprietario);

    // Remova espaços em branco extras
    $proprietarioNome = trim($proprietarioNome);

    if ($acao === "insert") {
        // Ação de inserção
        $sql = "INSERT INTO animais (codigo, nome, proprietario, raca, cor, pelagem, tamanho, observacoes,proprietario_codigo)
                VALUES ('$codigo', '$nome', '$proprietarioNome', '$raca', '$cor', '$pelagem', '$tamanho', '$observacoes','$proprietarioCodigo')";
    } elseif ($acao === "update") {
        // Ação de atualização
        $sql = "UPDATE animais
                SET nome='$nome', proprietario='$proprietarioNome', raca='$raca', cor='$cor', pelagem='$pelagem', tamanho='$tamanho', observacoes='$observacoes',proprietario_codigo='$proprietarioCodigo'
                WHERE codigo='$codigo'";
    }

    if ($conn->query($sql) === TRUE) {
        // Redireciona de volta para a página principal (ou para onde você desejar)
        header("Location: cadastro-animais");
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
        <h2 class="title">Animais
          <img src="assets/images/pets_selecionado.png" alt="Animais" width="24" height="24">
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
                          <input type="text" id="buscar-listagem" name="buscar-listagem" placeholder="Buscar por nome">
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
                      // Consulta SQL para obter a lista de animais
                      $result = $conn->query("SELECT * FROM animais ORDER BY codigo ASC");
                      
                      // Array para armazenar os animais
                      $animais = [];

                      if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            $animais[] = $row;
                        }
                      }
                    ?>
                    <table class="segura__listagem">
                      <thead>
                        <tr>
                          <th>Código</th>
                          <th>Nome</th>
                          <th>Propietário</th>
                          <th>Raça</th>
                          <th>Cor</th>
                          <th>Pelagem</th>
                          <th>Tamanho</th>
                          <th>Observações</th>
                          <th>Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        <?php foreach ($animais as $animal) : ?>
                          <?php if (!empty($buscarListagem) && stripos($animal['nome'], $buscarListagem) === false) continue; ?>
                          <tr class="linha">
                            <td><?= $animal['codigo']; ?></td>
                            <td><?= $animal['nome']; ?></td>
                            <td><?= $animal['proprietario']; ?></td>
                            <td><?= $animal['raca']; ?></td>
                            <td><?= $animal['cor']; ?></td>
                            <td><?= $animal['pelagem']; ?></td>
                            <td><?= $animal['tamanho']; ?></td>
                            <td><?= $animal['observacoes']; ?></td>
                            <td class="td_segura">
                              <button class="btn btn__acoes editar-linha editar-linha-animais" aria-label="Editar">Editar</button>
                              <a href="?acao=excluir&codigo=<?= $animal['codigo']; ?>" class="btn btn__acoes" aria-label="Excluir" onclick="return confirm('Tem certeza que deseja excluir este animal?')">Excluir</a>
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
                  <label for="codigo">Código</label>
                  <input style="pointer-events: none; opacity: 0.5;" type="text" id="codigo" name="codigo">
                </div>
                <div class="group">
                  <label for="nome">Nome</label>
                  <input type="text" id="nome" name="nome">
                </div>
                <div class="group">
                  <label for="proprietario">Proprietário</label>
                  <?php
                    // Consulta SQL para obter todas as pessoas
                    $sql = "SELECT codigo, nome FROM pessoas";
                    $result = $conn->query($sql);

                    // Array para armazenar as pessoas
                    $pessoas = [];

                    // Verifica se a consulta foi bem-sucedida
                    if ($result) {
                        while ($row = $result->fetch_assoc()) {
                            $pessoas[] = $row;
                        }
                    }
                  ?>
                  <select id="proprietario" name="proprietario">
                    <option value="">Selecione o proprietário</option>
                    <?php foreach ($pessoas as $pessoa) : ?>
                        <option value="<?= $pessoa['codigo'] . '|' . $pessoa['nome']; ?>"><?= $pessoa['nome']; ?></option>
                    <?php endforeach; ?>
                  </select>
                </div>
                <div class="group__form">
                  <div class="group">
                    <label for="raca">Raça</label>
                    <input type="text" id="raca" name="raca">
                  </div><!-- ./group-->
                  <div class="group">
                    <label for="cor">Cor</label>
                    <input type="text" id="cor" name="cor">
                  </div><!-- ./group-->
                  <div class="group">
                    <label for="pelagem">Pelagem</label>
                    <input type="text" id="pelagem" name="pelagem">
                  </div><!-- ./group-->
                  <div class="group">
                    <label for="tamanho">Tamanho</label>
                    <input type="text" id="tamanho" name="tamanho">
                  </div><!-- ./group-->
                </div><!-- ./group__form-->
                <div class="group">
                  <label for="observacoes">Observações</label>
                  <textarea name="observacoes" id="observacoes"></textarea>
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