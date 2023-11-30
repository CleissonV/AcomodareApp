var templates = document.querySelectorAll('template')

templates.forEach(template=> {
	var els = template.content.querySelectorAll('img, iframe');

	els.forEach(el=> el.setAttribute('loading', 'lazy'))

	// Fixer Tables
	var tables = template.content.querySelectorAll('table');

	tables.forEach(table => {
		var parent = table.closest('.table-responsive');

		// Verificando se a table está dentro de .table-responsive
		if(!parent) {
			// Criando a div.table-responive
			parent = document.createElement('div');
			parent.classList.add('table-responsive');

			// Inserindo a div.table-responive na DOM
			table.insertAdjacentElement('beforebegin', parent)

			// Inserindo a table dentro de div.table-responive
			parent.appendChild(table);
		}
	})
})
