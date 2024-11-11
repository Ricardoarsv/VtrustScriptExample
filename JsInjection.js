// Selecciona todos los elementos con la clase .astra-shop-thumbnail-wrap
const elements = document.querySelectorAll('.astra-shop-thumbnail-wrap');

// Itera sobre cada elemento y agrega el overlay y el evento de clic
elements.forEach((element) => {
	// Crear el overlay
	const overlay = document.createElement('div');
	overlay.style.position = 'absolute';
	overlay.style.top = '0';
	overlay.style.left = '0';
	overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	overlay.style.color = 'white';
	overlay.style.padding = '5px';
	overlay.style.zIndex = '10';
	overlay.innerText = 'inyectado correctamente';

	// Asegurarse de que el contenedor padre tenga posición relativa
	element.style.position = 'relative';
	element.appendChild(overlay);

	// Agregar evento de clic
	element.addEventListener('click', () => {
		const productName = element
			.closest('li')
			.querySelector('.woocommerce-loop-product__title').innerText;
		console.log(productName);
	});
});

// Imprimir mensaje en la consola
console.log(
	'Este es un ejemplo de inyeccion de codigo desde javascript externo'
);
