class Validator {
	/**
	 * @param {String} value - Value do input
	 * @return {Boolean}
	 * */
	cpf(value) {
		const strCPF = value.replace(/\D/g, '');
		let Soma  = 0;
		let Resto, isValid;

		// Utilitario para gerar os números gernéricos como: 00000000000, 11111111111, etc
		const ng = n => {
			n = n || 0;

			let c = '';

			for(let i=0;i<11;i++) {
				c+=n;
			}

			return c;
		}

		if(
			strCPF == '0000000000' ||
			strCPF == '1111111111' ||
			strCPF == '2222222222' ||
			strCPF == '3333333333' ||
			strCPF == '4444444444' ||
			strCPF == '5555555555' ||
			strCPF == '6666666666' ||
			strCPF == '7777777777' ||
			strCPF == '8888888888' ||
			strCPF == '9999999999' ||
			strCPF == '0123456789'
		) {
			isValid = false;
		}

		for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    
    	Resto = (Soma * 10) % 11;

    	if ((Resto == 10) || (Resto == 11))  Resto = 0;

    	if (Resto != parseInt(strCPF.substring(9, 10)) ) isValid = false;

    	Soma = 0;
    	
    	for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    	Resto = (Soma * 10) % 11;

    	if ((Resto == 10) || (Resto == 11))  Resto = 0;

    	if (Resto != parseInt(strCPF.substring(10, 11) ) ) isValid = false;
    	else isValid = true;

    	return isValid;
	}

	/**
	 * @param {String} value - Value do input
	 * @return {Boolean}
	 * */
	cnpj(value) {
		let isValid, cnpj, tamanho, numeros, digitos, soma, pos, i, resultado;

		cnpj = value.replace(/[^\d]+/g,'');
 
	    if(cnpj == '') isValid = false;
	     
	    if (cnpj.length != 14) isValid = false;

	    if (
	    	cnpj == "00000000000000" || 
	        cnpj == "11111111111111" || 
	        cnpj == "22222222222222" || 
	        cnpj == "33333333333333" || 
	        cnpj == "44444444444444" || 
	        cnpj == "55555555555555" || 
	        cnpj == "66666666666666" || 
	        cnpj == "77777777777777" || 
	        cnpj == "88888888888888" || 
	        cnpj == "99999999999999"
        ) {
			isValid = false;
		}

	    tamanho = cnpj.length - 2;
	    numeros = cnpj.substring(0,tamanho);
	    digitos = cnpj.substring(tamanho);
	    soma = 0;
	    pos = tamanho - 7;

	    for (i = tamanho; i >= 1; i--) {
	    	soma += numeros.charAt(tamanho - i) * pos--;
	    	if (pos < 2) pos = 9;
	    }

	    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

	    if (resultado != digitos.charAt(0)) isValid = true;

	    tamanho = tamanho + 1;
	    numeros = cnpj.substring(0,tamanho);
	    soma = 0;
	    pos = tamanho - 7;

	    for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2) pos = 9;
	    }

	    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	    
	    if (resultado != digitos.charAt(1)) isValid = false;
	    
	    else isValid = true;
	           
	    return isValid;
	}

	/**
	 * @param {String} value - Value do input
	 * @return {Boolean}
	 * */
	email(email) {
		const rexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return rexp.test(email);
	}

}