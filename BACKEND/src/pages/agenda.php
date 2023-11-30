<?php
require_once '../config/config.php';
require_once '../includes/functions.php';
session_start();

// Verifica se o usuário está logado
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: login");
    exit;
}

if ($_GET['acao'] === 'excluir' && isset($_GET['id'])) {
  // Ação de exclusão
  $id = $_GET['id'];

  // Obter informações do quarto antes da exclusão
  $sqlObterQuarto = "SELECT id_quarto FROM agendamentos WHERE id = '$id'";
  $resultQuarto = $conn->query($sqlObterQuarto);
  $rowQuarto = $resultQuarto->fetch_assoc();
  $quartoCodigo = $rowQuarto['id_quarto'];

  $sqlExcluirAgendamento = "DELETE FROM agendamentos WHERE id = '$id'";

  if ($conn->query($sqlExcluirAgendamento) === TRUE) {
      // Reverter a situação do quarto para 0
      $sqlReverterSituacao = "UPDATE quartos SET situacao = 0 WHERE id = '$quartoCodigo'";
      $conn->query($sqlReverterSituacao);

      // Redireciona de volta para a página principal (ou para onde você desejar)
      header("Location: agenda");
      exit();
  } else {
      echo "Erro ao processar ação de exclusão: " . $conn->error;
  }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST['btn-pesquisar'])) {
    // Verifica se há um valor no campo de pesquisa
    $buscarListagem = isset($_POST['buscar-listagem']) ? $_POST['buscar-listagem'] : '';

    // Consulta SQL para obter a lista de agendamentos
    $sql = "SELECT id, data, observacoes FROM agendamentos";

    // Adiciona condição de pesquisa se o campo de pesquisa estiver preenchido
    if (!empty($buscarListagem)) {
        $sql .= " WHERE username LIKE '%$buscarListagem%'";
    }
    
    $result = $conn->query($sql);

    // Array para armazenar os agendamentos
    $agendamentos = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $agendamentos[] = $row;
        }
    }
  } elseif (isset($_POST['btn-outra-acao'])) {
    $id = $_POST["id"];
    $data = $_POST["data"];
    $animal = $_POST["animal"];
    $quarto = $_POST["quarto"];
    $valor = $_POST["valor"];
    $observacoes = $_POST["observacoes"];
    $acao = $_POST["acao"];

    // Divide o valor selecionado para obter o código e o nome
    list($animalCodigo, $animalNome) = explode("|", $animal);

    // Divide o valor selecionado para obter o código e o nome
    list($quartoCodigo, $quartoNumero) = explode("|", $quarto);

    // Remova espaços em branco extras
    $quartoNumero = trim($quartoNumero);

    if ($acao === "insert") {
        // Ação de inserção
        $sql = "INSERT INTO agendamentos (id, data, animal, valor, animal_codigo, observacoes, numero_quarto, id_quarto)
                VALUES ('$id', '$data', '$animalNome', '$valor', '$animalCodigo', '$observacoes', '$quartoNumero', '$quartoCodigo')";

        if ($conn->query($sql) === TRUE) {
            // Atualizar a situação do quarto
            $sqlAtualizarSituacao = "UPDATE quartos SET situacao = 1 WHERE id = '$quartoCodigo'";
            $conn->query($sqlAtualizarSituacao);

            // Redireciona de volta para a página principal (ou para onde você desejar)
            header("Location: agenda");
            exit();
        } else {
            echo "Erro ao processar ação: " . $conn->error;
        }
    } elseif ($acao === "update") {
        // Ação de atualização
        $sql = "UPDATE agendamentos
                SET data='$data', observacoes='$observacoes', animal='$animalNome', valor='$valor', animal_codigo='$animalCodigo', numero_quarto='$quartoNumero', id_quarto='$quartoCodigo' 
                WHERE id='$id'";

        if ($conn->query($sql) === TRUE) {
          // Atualizar a situação do quarto
          $sqlAtualizarSituacao = "UPDATE quartos SET situacao = 1 WHERE id = '$quartoCodigo'";
          $conn->query($sqlAtualizarSituacao);

          // Redireciona de volta para a página principal (ou para onde você desejar)
          header("Location: agenda");
          exit();
        } else {
            echo "Erro ao processar ação: " . $conn->error;
        }
    } else {
        echo "Ação não reconhecida.";
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
        <h2 class="title"> Agendar
          <img src="assets/images/agenda_selecionado.png" alt="Agenda" width="24" height="24">
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
                          <input type="text" id="buscar-listagem" name="buscar-listagem" placeholder="Buscar por data">
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
                      // Consulta SQL para obter a lista de agendamentos
                      $result = $conn->query("SELECT * FROM agendamentos ORDER BY id ASC");
                      
                      // Array para armazenar os agendamentos
                      $agendamentos = [];

                      if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            $agendamentos[] = $row;
                        }
                      }
                    ?>
                    <table class="segura__listagem">
                      <thead>
                        <tr>
                          <th>Código</th>
                          <th>Data de Agendamento</th>
                          <th>Animal</th>
                          <th>Quarto</th>
                          <th>Valor</th>
                          <th>Observações</th>
                          <th>Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        <?php foreach ($agendamentos as $agendamento) : ?>
                          <?php if (!empty($buscarListagem) && stripos($agendamento['data'], $buscarListagem) === false) continue; ?>
                          <tr class="linha">
                            <td><?= $agendamento['id']; ?></td>
                            <td><?= date('d/m/Y', strtotime($agendamento['data'])); ?></td>
                            <td><?= $agendamento['animal']; ?></td>
                            <td><?= $agendamento['numero_quarto']; ?></td>
                            <td><?= $agendamento['valor']; ?></td>
                            <td><?= $agendamento['observacoes']; ?></td>
                            <td class="td_segura">
                              <button class="btn btn__acoes editar-linha editar-linha-agendamentos" aria-label="Editar">Editar</button>
                              <a href="?acao=excluir&id=<?= $agendamento['id']; ?>" class="btn btn__acoes" aria-label="Excluir" onclick="return confirm('Tem certeza que deseja excluir este agendamento?')">Excluir</a>
                            </td>
                          </tr>
                        <?php endforeach; ?>
                      </tbody>
                    </table><!-- ./segura__listagem-->
                    <button class="btn btn__acoes adicionar-linha" id="adicionar" aria-label="Agendar">Agendar</button>
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
                  <label for="data">Data de Agendamento</label>
                  <input type="date" id="data" name="data">
                </div>
                <div class="group">
                  <label for="animal">Animal</label>
                  <?php
                    // Consulta SQL para obter todas as animais
                    $sql = "SELECT codigo, nome FROM animais";
                    $result = $conn->query($sql);

                    // Array para armazenar as animais
                    $animais = [];

                    // Verifica se a consulta foi bem-sucedida
                    if ($result) {
                        while ($row = $result->fetch_assoc()) {
                            $animais[] = $row;
                        }
                    }
                  ?>
                  <select id="animal" name="animal">
                    <option value="">Selecione o animal</option>
                    <?php foreach ($animais as $animal) : ?>
                        <option value="<?= $animal['codigo'] . '|' . $animal['nome']; ?>"><?= $animal['nome']; ?></option>
                    <?php endforeach; ?>
                  </select>
                </div>

                <div class="group">
                  <label for="quarto">Quarto</label>
                  <?php
                    // Consulta SQL para obter todas as quartos
                    $sql = "SELECT id, numero_quarto FROM quartos";
                    $result = $conn->query($sql);

                    // Array para armazenar as quartos
                    $quartos = [];

                    // Verifica se a consulta foi bem-sucedida
                    if ($result) {
                        while ($row = $result->fetch_assoc()) {
                            $quartos[] = $row;
                        }
                    }
                  ?>
                  <select id="quarto" name="quarto">
                    <option value="">Selecione o quarto</option>
                    <?php foreach ($quartos as $quarto) : ?>
                        <option value="<?= $quarto['id'] . '|' . $quarto['numero_quarto']; ?>"><?= $quarto['numero_quarto']; ?></option>
                    <?php endforeach; ?>
                  </select>
                </div>
                <div class="group">
                  <label for="valor">Valor do Serviço</label>
                  <input type="text" id="valor" name="valor">
                </div>
                <div class="group">
                  <label for="observacoes">Observações</label>
                  <input type="observacoes" id="observacoes" name="observacoes">
                </div>
                <div class="box__btns">
                  <button class="btn btn__form" type="submit" name="btn-outra-acao" id="submit-btn" aria-label="Agendar">Agendar</button>
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