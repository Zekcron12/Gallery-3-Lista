const ADD = document.querySelector('#IDbutton');
const LIST = document.querySelector('#IDlist');

//El boton guardar llama a un evento
ADD.onclick = (e) => {
	e.preventDefault();
	const ITEM = document.querySelector('#IDlist-item');

	//En la casilla del input pongo la condicion que si no esta vacio, ejecutame lo siguiente;
	if (ITEM.value !== '') {

		let createEtiquet = document.createElement('li');
		createEtiquet.innerHTML = ITEM.value;

		let newButton = document.createElement('button');
		newButton.className = 'close';
		newButton.innerHTML = '\u00d7'; //Esto es el icon 'X' de cerrar que traen los botones.

		createEtiquet.appendChild(newButton);
		LIST.appendChild(createEtiquet);

		ITEM.value = '';

		//al clickear la lista creada me pone el style de tachado de letra.
		createEtiquet.addEventListener('click', (e) => {
			e.target.style.textDecoration = 'line-through';
		});
		//Al clickear el boton de la lista, me lo oculta, es decir me lo borra.
		newButton.addEventListener('click', (e) => {
			e.target.parentElement.style.display = 'none';
		});
	} else {
		alert('Casilla en blanco, no valido.');
	} //Si la casilla del input esta vacio, se dispara la alerta,

}