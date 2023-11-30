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
      header("Location: home");
      exit();
  } else {
      echo "Erro ao processar ação de exclusão: " . $conn->error;
  }
}

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
          <div class="segura_topo__home">
            <h2 class="titulo__bem__vindo">Bem-vindo, <?php echo $_SESSION["username"]; ?>!</h2>
            <a class="btn btn__logout" href="logout">Sair</a>
          </div>
          <div class="container container__principal container__principal__home">
            <h3 class="subtitulo">Próximos compromissos agendados</h3>
            
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
              $result = $conn->query("SELECT * FROM agendamentos WHERE numero_quarto = 0 ORDER BY data ASC");
              
              // Array para armazenar os agendamentos
              $agendamentos = [];

              if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $agendamentos[] = $row;
                }
              }
            ?>
            <div class="segura__agendamentos">
              <?php foreach ($agendamentos as $agendamento) : ?>
                <div class="card__agendamento">
                    <div class="data">Data do Agendamento: <?= date('d/m/Y', strtotime($agendamento['data'])); ?></div>
                    <?php if (!empty($agendamento['animal'])) : ?>
                        <div class="nome_animal">Nome do animal: <?= $agendamento['animal']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($agendamento['numero_quarto'])) : ?>
                        <div class="quarto">Quarto: <?= $agendamento['numero_quarto']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($agendamento['valor'])) : ?>
                        <div class="valor">Valor: R$<?= $agendamento['valor']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($agendamento['observacoes'])) : ?>
                        <div class="observacoes__agendamento">Obs: <?= $agendamento['observacoes']; ?></div>
                    <?php endif; ?>
                    <a href="?acao=excluir&id=<?= $agendamento['id']; ?>" class="btn btn__acoes" aria-label="Concluir" onclick="return confirm('Tem certeza que deseja concluir e fechar este agendamento?')">Concluir</a>
                </div>
              <?php endforeach; ?>
            </div>

            <h3 style="margin-top:40px;" class="subtitulo">Agendamentos de quartos</h3>
            
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
              $result = $conn->query("SELECT * FROM agendamentos WHERE numero_quarto >= 1 ORDER BY data ASC");
              
              // Array para armazenar os agendamentos
              $agendamentos = [];

              if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $agendamentos[] = $row;
                }
              }
            ?>
            <div class="segura__agendamentos">
              <?php foreach ($agendamentos as $agendamento) : ?>
                <div class="card__agendamento">
                    <div class="data">Data do Agendamento: <?= date('d/m/Y', strtotime($agendamento['data'])); ?></div>
                    <?php if (!empty($agendamento['animal'])) : ?>
                        <div class="nome_animal">Nome do animal: <?= $agendamento['animal']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($agendamento['numero_quarto'])) : ?>
                        <div class="quarto">Quarto: <?= $agendamento['numero_quarto']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($agendamento['valor'])) : ?>
                        <div class="valor">Valor: R$<?= $agendamento['valor']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($agendamento['observacoes'])) : ?>
                        <div class="observacoes__agendamento">Obs: <?= $agendamento['observacoes']; ?></div>
                    <?php endif; ?>
                    <a href="?acao=excluir&id=<?= $agendamento['id']; ?>" class="btn btn__acoes" aria-label="Concluir" onclick="return confirm('Tem certeza que deseja concluir e fechar este agendamento?')">Concluir</a>
                </div>
              <?php endforeach; ?>
            </div>

            <?php
              $servername = "localhost";
              $username = "brcriacaodesites_acomodare";
              $password = "9DPib3cGUji9nk";
              $dbname = "brcriacaodesites_acomodare";
              
              $conn = new mysqli($servername, $username, $password, $dbname);
              
              if ($conn->connect_error) {
                  die("Erro na conexão: " . $conn->connect_error);
              }
              // Consulta SQL para obter a lista de produtos
              $result = $conn->query("SELECT * FROM produtos WHERE quantidade <= 5");
              
              // Array para armazenar os produtos
              $produtos = [];

              if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $produtos[] = $row;
                }
              }
            ?>
            <h3 style="margin-top:40px;" class="subtitulo">Produtos com baixo estoque!</h3>
            <div class="segura__agendamentos">
              <?php foreach ($produtos as $produto) : ?>
                <div class="card__agendamento">
                  <div class="nome"><?= $produto['descricao']; ?></div>
                  <div class="qtd">Quantidade em estoque: <?= $produto['quantidade']; ?></div>
                </div>
              <?php endforeach; ?>
              <?php if (empty($produtos)) : ?>
                <h2 style="text-align:center;">Tudo certo! Não há produtos com quantidade baixa no estoque</h1>
              <?php endif; ?>
            </div>

            <?php
              $servername = "localhost";
              $username = "brcriacaodesites_acomodare";
              $password = "9DPib3cGUji9nk";
              $dbname = "brcriacaodesites_acomodare";
              
              $conn = new mysqli($servername, $username, $password, $dbname);
              
              if ($conn->connect_error) {
                  die("Erro na conexão: " . $conn->connect_error);
              }
              // Consulta SQL para obter a lista de quartos
              $result = $conn->query("SELECT * FROM quartos WHERE situacao = 0");
              
              // Array para armazenar os quartos
              $quartos = [];

              if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $quartos[] = $row;
                }
              }
            ?>
            <h3 style="margin-top:40px;" class="subtitulo">Quartos disponiveis:</h3>
            <div class="segura__agendamentos">
              <?php foreach ($quartos as $quarto) : ?>
                <div class="card__agendamento">
                  <div class="quarto">Quarto: <?= $quarto['numero_quarto']; ?></div>
                  <a href="agenda" class="btn btn__acoes" aria-label="Reservar">Reservar</a>
                </div>
              <?php endforeach; ?>
              <?php if (empty($quartos)) : ?>
                <h2 style="text-align:center;"> Não há quartos disponiveis no momento</h1>
              <?php endif; ?>
            </div>
          </div>
        </div><!-- ./conteudo__principal-->
      </section><!-- ./principal-->
    </main><!--/main.wrapper-->
<?php include 'footer.php'; ?>