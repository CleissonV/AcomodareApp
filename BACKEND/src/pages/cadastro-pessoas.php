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
      $sql = "DELETE FROM pessoas WHERE codigo = ?";
      
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
      header("Location: cadastro-pessoas");
      exit();
  }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST['btn-pesquisar'])) {
    // Verifica se há um valor no campo de pesquisa
    $buscarListagem = isset($_POST['buscar-listagem']) ? $_POST['buscar-listagem'] : '';

    // Consulta SQL para obter a lista de pessoas
    $sql = "SELECT codigo, nome, cpf, genero, data_nascimento, telefone, endereco, bairro, cidade, cep, uf FROM pessoas";

    // Adiciona condição de pesquisa se o campo de pesquisa estiver preenchido
    if (!empty($buscarListagem)) {
        $sql .= " WHERE nome LIKE '%$buscarListagem%'";
    }
    
    $result = $conn->query($sql);

    // Array para armazenar os pessoas
    $pessoas = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $pessoas[] = $row;
        }
    }
  } elseif (isset($_POST['btn-outra-acao'])) {
    $codigo = $_POST["codigo"];
    $nome = $_POST["nome"];
    $cpf = $_POST["cpf"];
    $genero = $_POST["genero"];
    $data_nascimento = $_POST["data_nascimento"];
    $telefone = $_POST["telefone"];
    $endereco = $_POST["endereco"];
    $bairro = $_POST["bairro"];
    $cidade = $_POST["cidade"];
    $cep = $_POST["cep"];
    $uf = $_POST["uf"];
    $acao = $_POST["acao"];

    if ($acao === "insert") {
        // Ação de inserção
        $sql = "INSERT INTO pessoas (codigo, nome, cpf, genero, data_nascimento, telefone, endereco, bairro, cidade, cep, uf)
                VALUES ('$codigo', '$nome', '$cpf', '$genero', '$data_nascimento', '$telefone', '$endereco', '$bairro', '$cidade', '$cep', '$uf')";
    } elseif ($acao === "update") {
        // Ação de atualização
        $sql = "UPDATE pessoas
                SET nome='$nome', cpf='$cpf', genero='$genero', data_nascimento='$data_nascimento', telefone='$telefone', endereco='$endereco', bairro='$bairro', cidade='$cidade', cep='$cep', uf='$uf'
                WHERE codigo='$codigo'";
    }

    if ($conn->query($sql) === TRUE) {
        // Redireciona de volta para a página principal (ou para onde você desejar)
        header("Location: cadastro-pessoas");
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
        <h2 class="title">Pessoas
          <img src="assets/images/pessoas_selecionado.png" alt="Animais" width="24" height="24">
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
                      // Consulta SQL para obter a lista de pessoas
                      $result = $conn->query("SELECT * FROM pessoas ORDER BY codigo ASC");
                      
                      // Array para armazenar os pessoas
                      $pessoas = [];

                      if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            $pessoas[] = $row;
                        }
                      }
                    ?>
                    <table class="segura__listagem">
                      <thead>
                        <tr>
                          <th>Código</th>
                          <th>Nome</th>
                          <th>CPF</th>
                          <th>Gênero</th>
                          <th>Data Nascimento</th>
                          <th>Telefone</th>
                          <th>Endereço</th>
                          <th>Bairro</th>
                          <th>Cidade</th>
                          <th>CEP</th>
                          <th>UF</th>
                          <th>Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        <?php foreach ($pessoas as $pessoa) : ?>
                          <?php if (!empty($buscarListagem) && stripos($pessoa['nome'], $buscarListagem) === false) continue; ?>
                          <tr class="linha">
                            <td><?= $pessoa['codigo']; ?></td>
                            <td><?= $pessoa['nome']; ?></td>
                            <td><?= $pessoa['cpf']; ?></td>
                            <td><?= $pessoa['genero']; ?></td>
                            <td><?= date('d/m/Y', strtotime($pessoa['data_nascimento'])); ?></td>
                            <td><?= $pessoa['telefone']; ?></td>
                            <td><?= $pessoa['endereco']; ?></td>
                            <td><?= $pessoa['bairro']; ?></td>
                            <td><?= $pessoa['cidade']; ?></td>
                            <td><?= $pessoa['cep']; ?></td>
                            <td><?= $pessoa['uf']; ?></td>
                            <td class="td_segura">
                              <button class="btn btn__acoes editar-linha editar-linha-pessoas" aria-label="Editar">Editar</button>
                              <a href="?acao=excluir&codigo=<?= $pessoa['codigo']; ?>" class="btn btn__acoes" aria-label="Excluir" onclick="return confirm('Tem certeza que deseja excluir esta pessoa?')">Excluir</a>
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
                <div class="group__form">
                  <div class="group">
                    <label for="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf">
                  </div>
                  <div class="group">
                    <label for="genero">Gênero</label>
                    <input type="text" id="genero" name="genero">
                  </div><!-- ./group-->
                  <div class="group">
                    <label for="data_nascimento">Data Nascimento</label>
                    <input type="date" id="data_nascimento" name="data_nascimento">
                  </div><!-- ./group-->
                  <div class="group">
                    <label for="telefone">Telefone</label>
                    <input type="text" id="telefone" name="telefone">
                  </div><!-- ./group-->
                </div><!-- ./group__form-->
                <div class="group">
                  <label for="endereco">Endereço</label>
                  <input type="text" id="endereco" name="endereco">
                </div>
                <div class="group">
                  <label for="bairro">Bairro</label>
                  <input type="text" id="bairro" name="bairro">
                </div>
                <div class="group">
                  <label for="cidade">Cidade</label>
                  <input type="text" id="cidade" name="cidade">
                </div>
                <div class="group">
                  <label for="cep">CEP</label>
                  <input type="text" id="cep" name="cep">
                </div>
                <div class="group">
                  <label for="uf">UF</label>
                  <input type="text" id="uf" name="uf">
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