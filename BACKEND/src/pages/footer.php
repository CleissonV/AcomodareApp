    </template>
	</div>
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/scripts.min.js"></script>

  <script>
    $(document).ready(function() {
      $(".editar-linha").click(function() {
        // Obtém os dados da linha clicada
        var id = $(this).closest("tr").find("td:eq(0)").text();
        var descricao = $(this).closest("tr").find("td:eq(1)").text();
        var codigo_ean = $(this).closest("tr").find("td:eq(2)").text();
        var tipo_un = $(this).closest("tr").find("td:eq(3)").text();
        var quantidade = $(this).closest("tr").find("td:eq(4)").text();
        var preco = $(this).closest("tr").find("td:eq(5)").text();

        // Preenche o formulário com os dados obtidos
        $("#id").val(id);
        $("#descricao").val(descricao);
        $("#codigo_ean").val(codigo_ean);
        $("#tipo_un").val(tipo_un);
        $("#quantidade").val(quantidade);
        $("#preco").val(preco);

        // Abre automaticamente a tab de formulário
        $('#formulario-tab').tab('show');

        $("#submit-btn").click(function() {
          // Determina se a ação é uma inserção ou uma atualização
          var action = ($("#id").val() === "") ? "insert" : "update";

          // Modifica o atributo data-action do botão de submit
          $(this).attr("data-action", action);

            // Adiciona um campo oculto ao formulário para enviar a ação
          $("<input>").attr({
              type: "hidden",
              id: "acao",
              name: "acao",
              value: action
          }).appendTo("form");

          // Submete o formulário
          $("form").submit();
        });
      });

      $(".editar-linha-pessoas").click(function() {
        // Obtém os dados da linha clicada
        var codigo = $(this).closest("tr").find("td:eq(0)").text();
        var nome = $(this).closest("tr").find("td:eq(1)").text();
        var cpf = $(this).closest("tr").find("td:eq(2)").text();
        var genero = $(this).closest("tr").find("td:eq(3)").text();
        var data_nascimento = $(this).closest("tr").find("td:eq(4)").text();
        var telefone = $(this).closest("tr").find("td:eq(5)").text();
        var endereco = $(this).closest("tr").find("td:eq(6)").text();
        var bairro = $(this).closest("tr").find("td:eq(7)").text();
        var cidade = $(this).closest("tr").find("td:eq(8)").text();
        var cep = $(this).closest("tr").find("td:eq(9)").text();
        var uf = $(this).closest("tr").find("td:eq(10)").text();

        // Preenche o formulário com os dados obtidos
        $("#codigo").val(codigo);
        $("#nome").val(nome);
        $("#cpf").val(cpf);
        $("#genero").val(genero);
        $("#data_nascimento").val(data_nascimento);
        $("#telefone").val(telefone);
        $("#endereco").val(endereco);
        $("#bairro").val(bairro);
        $("#cidade").val(cidade);
        $("#cep").val(cep);
        $("#uf").val(uf);

        // Abre automaticamente a tab de formulário
        $('#formulario-tab').tab('show');

        $("#submit-btn").click(function() {
          // Determina se a ação é uma inserção ou uma atualização
          var action = ($("#codigo").val() === "") ? "insert" : "update";

          // Modifica o atributo data-action do botão de submit
          $(this).attr("data-action", action);

            // Adiciona um campo oculto ao formulário para enviar a ação
          $("<input>").attr({
              type: "hidden",
              id: "acao",
              name: "acao",
              value: action
          }).appendTo("form");

          // Submete o formulário
          $("form").submit();
        });
      });

      $(".editar-linha-animais").click(function() {
        // Obtém os dados da linha clicada
        var codigo = $(this).closest("tr").find("td:eq(0)").text();
        var nome = $(this).closest("tr").find("td:eq(1)").text();
        var proprietario = $(this).closest("tr").find("td:eq(2)").text();
        var raca = $(this).closest("tr").find("td:eq(3)").text();
        var cor = $(this).closest("tr").find("td:eq(4)").text();
        var pelagem = $(this).closest("tr").find("td:eq(5)").text();
        var tamanho = $(this).closest("tr").find("td:eq(6)").text();
        var observacoes = $(this).closest("tr").find("td:eq(7)").text();
        

        // Preenche o formulário com os dados obtidos
        $("#codigo").val(codigo);
        $("#nome").val(nome);
        $("#proprietario").val(proprietario);
        $("#raca").val(raca);
        $("#cor").val(cor);
        $("#pelagem").val(pelagem);
        $("#tamanho").val(tamanho);
        $("#observacoes").val(observacoes);

        // Abre automaticamente a tab de formulário
        $('#formulario-tab').tab('show');

        $("#submit-btn").click(function() {
          // Determina se a ação é uma inserção ou uma atualização
          var action = ($("#codigo").val() === "") ? "insert" : "update";

          // Modifica o atributo data-action do botão de submit
          $(this).attr("data-action", action);

            // Adiciona um campo oculto ao formulário para enviar a ação
          $("<input>").attr({
              type: "hidden",
              id: "acao",
              name: "acao",
              value: action
          }).appendTo("form");

          // Submete o formulário
          $("form").submit();
        });
      });

      $(".editar-linha-usuarios").click(function() {
        // Obtém os dados da linha clicada
        var id = $(this).closest("tr").find("td:eq(0)").text();
        var username = $(this).closest("tr").find("td:eq(1)").text();
        var password = $(this).closest("tr").find("td:eq(2)").text();
        

        // Preenche o formulário com os dados obtidos
        $("#id").val(id);
        $("#username").val(username);
        $("#password").val(password);

        // Abre automaticamente a tab de formulário
        $('#formulario-tab').tab('show');

        $("#submit-btn").click(function() {
          // Determina se a ação é uma inserção ou uma atualização
          var action = ($("#id").val() === "") ? "insert" : "update";

          // Modifica o atributo data-action do botão de submit
          $(this).attr("data-action", action);

            // Adiciona um campo oculto ao formulário para enviar a ação
          $("<input>").attr({
              type: "hidden",
              id: "acao",
              name: "acao",
              value: action
          }).appendTo("form");

          // Submete o formulário
          $("form").submit();
        });
      });


      $(".editar-linha-quartos").click(function() {
        // Obtém os dados da linha clicada
        var id = $(this).closest("tr").find("td:eq(0)").text();
        var numero_quarto = $(this).closest("tr").find("td:eq(1)").text();
        

        // Preenche o formulário com os dados obtidos
        $("#id").val(id);
        $("#numero_quarto").val(numero_quarto);

        // Abre automaticamente a tab de formulário
        $('#formulario-tab').tab('show');

        $("#submit-btn").click(function() {
          // Determina se a ação é uma inserção ou uma atualização
          var action = ($("#id").val() === "") ? "insert" : "update";

          // Modifica o atributo data-action do botão de submit
          $(this).attr("data-action", action);

            // Adiciona um campo oculto ao formulário para enviar a ação
          $("<input>").attr({
              type: "hidden",
              id: "acao",
              name: "acao",
              value: action
          }).appendTo("form");

          // Submete o formulário
          $("form").submit();
        });
      });

      $(".editar-linha-agendamentos").click(function() {
        // Obtém os dados da linha clicada
        var id = $(this).closest("tr").find("td:eq(0)").text();
        var data = $(this).closest("tr").find("td:eq(1)").text();
        var animal = $(this).closest("tr").find("td:eq(2)").text();
        var quarto = $(this).closest("tr").find("td:eq(3)").text();
        var valor = $(this).closest("tr").find("td:eq(4)").text();
        var observacoes = $(this).closest("tr").find("td:eq(5)").text();
        

        // Preenche o formulário com os dados obtidos
        $("#id").val(id);
        $("#data").val(data);
        $("#animal").val(animal);
        $("#quarto").val(quarto);
        $("#valor").val(valor);
        $("#observacoes").val(observacoes);

        // Abre automaticamente a tab de formulário
        $('#formulario-tab').tab('show');

        $("#submit-btn").click(function() {
          // Determina se a ação é uma inserção ou uma atualização
          var action = ($("#id").val() === "") ? "insert" : "update";

          // Modifica o atributo data-action do botão de submit
          $(this).attr("data-action", action);

            // Adiciona um campo oculto ao formulário para enviar a ação
          $("<input>").attr({
              type: "hidden",
              id: "acao",
              name: "acao",
              value: action
          }).appendTo("form");

          // Submete o formulário
          $("form").submit();
        });
      });
      

      $("#cancelar").click(function() {
        // Abre automaticamente a tab de formulário
        $('#listagem-tab').tab('show');
      });

      $("#adicionar").click(function() {
        // Abre automaticamente a tab de formulário
        $('#formulario-tab').tab('show');
      });
    });
  </script>

</body>

</html>