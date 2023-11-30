//Máscara para o Telefone
const telefone = document.querySelector('#telefone');


if(telefone){
	telefone.addEventListener('keyup', () => {
		telefone.value = phoneMask(telefone.value)
	})

	const phoneMask = (value) => {
		if (!value) return ""
		value = value.replace(/\D/g,'')
		value = value.replace(/(\d{2})(\d)/,"($1) $2")
		value = value.replace(/(\d)(\d{4})$/,"$1-$2")
		return value
	}
}

//Máscara para datas
const dataNascimento = document.querySelector('#dataNascimento');

if(dataNascimento){
	dataNascimento.addEventListener("keyup", formatarData);

	function formatarData(e){

		var v=e.target.value.replace(/\D/g,"");

		v=v.replace(/(\d{2})(\d)/,"$1/$2")

		v=v.replace(/(\d{2})(\d)/,"$1/$2")

		e.target.value = v;

	}
}

// Máscara para valores de moeda
const formataMoeda = document.querySelectorAll(".formataMoeda");

if(formataMoeda){
	formataMoeda.forEach((event) => {
		event.addEventListener("keyup", formatarMoeda);
	})

	function formatarMoeda(e) {

		var v = e.target.value.replace(/\D/g,"");

		v = (v/100).toFixed(2) + "";

		v = v.replace(".", ",");

		v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");

		v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

		e.target.value = v;

	}
}
