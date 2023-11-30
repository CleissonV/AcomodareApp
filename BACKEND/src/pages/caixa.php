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
      $sql = "DELETE FROM vendas WHERE id = ?";
      
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
      header("Location: caixa");
      exit();
  }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST['btn-pesquisar'])) {
    // Verifica se há um valor no campo de pesquisa
    $buscarListagem = isset($_POST['buscar-listagem']) ? $_POST['buscar-listagem'] : '';

    // Consulta SQL para obter a lista de vendas
    $sql = "SELECT id, produto_id, agendamento_id, quantidade_produtos, preco_final FROM vendas";

    // Adiciona condição de pesquisa se o campo de pesquisa estiver preenchido
    if (!empty($buscarListagem)) {
        $sql .= " WHERE pessoa_nome LIKE '%$buscarListagem%'";
    }
    
    $result = $conn->query($sql);

    // Array para armazenar os vendas
    $vendas = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $vendas[] = $row;
        }
    }
  } elseif (isset($_POST['btn-outra-acao'])) {
    $id = $_POST["id"];
    $pessoa = $_POST['pessoa'];
    $quantidadeProdutos = $_POST['quantidade'];
    $produto = $_POST['produto'];
    $agendamento = $_POST['agendamento'];
    $acao = $_POST["acao"];

    // Divide o valor selecionado para obter o código e o nome
    list($pessoaId, $pessoaNome) = explode("|", $pessoa);

    // Divide o valor selecionado para obter o código e o nome
    list($produtoId, $produtoNome) = explode("|", $produto);

    // Divide o valor selecionado para obter o código e o nome
    list($agendamentoId, $agendamentoNome) = explode("|", $agendamento);

    // Remova espaços em branco extras
    $pessoaNome = trim($pessoaNome);
    // Remova espaços em branco extras
    $produtoNome = trim($produtoNome);

    // Remova espaços em branco extras
    $agendamentoNome = trim($agendamentoNome);

    // Obter o valor do produto e sua quantidade atual
    $sqlProdutoInfo = "SELECT preco, quantidade FROM produtos WHERE id = $produtoId";
    $resultProdutoInfo = $conn->query($sqlProdutoInfo);

    if (!$resultProdutoInfo) {
        echo "Erro ao executar a consulta de informações do produto: " . $conn->error;
        exit();
    }

    $rowProdutoInfo = $resultProdutoInfo->fetch_assoc();
    $valorProduto = $rowProdutoInfo['preco'];
    $quantidadeAtual = $rowProdutoInfo['quantidade'];

    // Verificar se há estoque suficiente
    if ($quantidadeAtual < $quantidadeProdutos) {
      echo '<script>alert("Estoque insuficiente.");</script>';
      echo '<script>window.location.href = "caixa";</script>';
      exit();
    } 

    // Inicializar o valor do agendamento
    $valorAgendamento = 0;

    // Obter o valor do agendamento, se fornecido
    if (!empty($agendamentoId)) {
        $sqlValorAgendamento = "SELECT valor FROM agendamentos WHERE id = $agendamentoId";
        $resultValorAgendamento = $conn->query($sqlValorAgendamento);

        if (!$resultValorAgendamento) {
            echo "Erro ao executar a consulta de valor do agendamento: " . $conn->error;
            exit();
        }

        $valorAgendamento = $resultValorAgendamento->fetch_assoc()['valor'];
    }

    // Calcular o preço final
    $precoFinal = $quantidadeProdutos * $valorProduto + $valorAgendamento;

    // Inserir na tabela de vendas com a data atual
    $sqlInserirVenda = "INSERT INTO vendas (produto_id, agendamento_id, quantidade_produtos, preco_final, data_venda, nome_produto, descricao_agendamento,pessoa_nome,pessoa_id)
                        VALUES ('$produtoId', '$agendamentoId', '$quantidadeProdutos', '$precoFinal', NOW(), '$produtoNome', '$agendamentoNome', '$pessoaNome', '$pessoaId')";

    if ($conn->query($sqlInserirVenda) !== TRUE) {
        echo "Erro ao executar a consulta de inserção de venda: " . $conn->error;
        exit();
    }

    // Atualizar a quantidade de produtos na tabela produtos
    $novaQuantidade = $quantidadeAtual - $quantidadeProdutos;
    $sqlAtualizarQuantidade = "UPDATE produtos SET quantidade = '$novaQuantidade' WHERE id = '$produtoId'";

    if ($conn->query($sqlAtualizarQuantidade) !== TRUE) {
        echo "Erro ao executar a consulta de atualização de quantidade: " . $conn->error;
        exit();
    }

    // Redireciona de volta para a página principal (ou para onde você desejar)
    header("Location: caixa");
    exit();
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
        <h2 class="title">Caixa
          <img src="assets/images/caixa_selecionado.png" alt="Animais" width="24" height="24">
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
                          <input type="text" id="buscar-listagem" name="buscar-listagem" placeholder="Buscar por comprador">
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
                      // Consulta SQL para obter a lista de vendas
                      $result = $conn->query("SELECT * FROM vendas ORDER BY id ASC");
                      
                      // Array para armazenar os vendas
                      $vendas = [];

                      if ($result->num_rows > 0) {
                          while ($row = $result->fetch_assoc()) {
                              $vendas[] = $row;
                          }
                      }
                    ?>
                    <table class="segura__listagem">
                      <thead>
                        <tr>
                            <th>Código</th>
                            <th>Comprador</th>
                            <th>Quantidade Vendidos</th>
                            <th>Produto</th>
                            <th>Agendamento</th>
                            <th>Preço Final</th>
                            <th>Data de Venda</th>
                            <th>Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        <?php foreach ($vendas as $venda) : ?>
                          <?php if (!empty($buscarListagem) && stripos($venda['pessoa_nome'], $buscarListagem) === false) continue; ?>
                          <tr class="linha">
                              <td><?= $venda['id']; ?></td>
                              <td><?= $venda['pessoa_nome']; ?></td>
                              <td><?= $venda['quantidade_produtos']; ?></td>
                              <td><?= $venda['nome_produto']; ?></td>
                              <td><?= $venda['descricao_agendamento']; ?></td>
                              <td>R$<?= number_format($venda['preco_final'], 2, ',', '.'); ?></td>
                              <td><?= date('d/m/Y', strtotime($venda['data_venda'])); ?></td>
                              <td class="td_segura">
                                <a href="?acao=excluir&id=<?= $venda['id']; ?>" class="btn btn__acoes" aria-label="Excluir" onclick="return confirm('Tem certeza que deseja excluir este produto?')">Excluir</a>
                              </td>
                          </tr>
                        <?php endforeach; ?>
                      </tbody>
                    </table><!-- ./segura__listagem-->
                    <button class="btn btn__acoes adicionar-linha" id="adicionar" aria-label="Lançar Venda">Lançar Venda</button>
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
                <div class="group__form">
                  <div class="group">
                    <label for="pessoa">Pessoa</label>
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
                    <select id="pessoa" name="pessoa" required>
                      <option value="">Selecione a pessoa</option>
                      <?php foreach ($pessoas as $pessoa) : ?>
                          <option value="<?= $pessoa['codigo'] . '|' . $pessoa['nome']; ?>"><?= $pessoa['nome']; ?></option>
                      <?php endforeach; ?>
                    </select>
                  </div>

                  <div class="group">
                    <label for="quantidade">Quantidade de Produtos</label>
                    <input type="text" id="quantidade" name="quantidade" required>
                  </div><!-- ./group-->

                  <div class="group">
                    <label for="produto">Produto</label>
                    <?php
                      // Consulta SQL para obter todas as produtos
                      $sql = "SELECT id, descricao FROM produtos WHERE quantidade >= 1";
                      $result = $conn->query($sql);

                      // Array para armazenar as produtos
                      $produtos = [];

                      // Verifica se a consulta foi bem-sucedida
                      if ($result) {
                          while ($row = $result->fetch_assoc()) {
                              $produtos[] = $row;
                          }
                      }
                    ?>
                    <select id="produto" name="produto" required>
                      <option value="">Selecione o produto</option>
                      <?php foreach ($produtos as $produto) : ?>
                          <option value="<?= $produto['id'] . '|' . $produto['descricao']; ?>"><?= $produto['descricao']; ?></option>
                      <?php endforeach; ?>
                    </select>
                  </div>
                </div><!-- ./group__form-->
                <div class="group__form">
                  <div class="group">
                    <label for="agendamento">Agendamento</label>
                    <?php
                      // Consulta SQL para obter todas as agendamentos
                      $sql = "SELECT id, observacoes FROM agendamentos";
                      $result = $conn->query($sql);

                      // Array para armazenar as agendamentos
                      $agendamentos = [];

                      // Verifica se a consulta foi bem-sucedida
                      if ($result) {
                          while ($row = $result->fetch_assoc()) {
                              $agendamentos[] = $row;
                          }
                      }
                    ?>
                    <select id="agendamento" name="agendamento">
                      <option value="">Selecione o agendamento</option>
                      <?php foreach ($agendamentos as $agendamento) : ?>
                          <option value="<?= $agendamento['id'] . '|' . $agendamento['observacoes']; ?>"><?= $agendamento['observacoes']; ?></option>
                      <?php endforeach; ?>
                    </select>
                  </div>
                </div>
                <div class="box__btns">
                    <button class="btn btn__form" type="submit" name="btn-outra-acao" aria-label="Lançar Venda">Lançar Venda</button>
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