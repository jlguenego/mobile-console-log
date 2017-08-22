(function() {
	'use strict';

	console.log('Hello World!');

	console.log('Hello World!', 12, 'foo');
	console.log('Hello World!', {
		coucou: 13,
		hello: 'abc'
	}, 'foo');

	console.log('%c Hello World!', 'background: #222; color: #bada55');
	
	console.log('%d + %d = %d', 2, 3, 5);

	console.log('document.body', document.body);

	console.log('window', window);

	console.warn('Warning: Hello World!');

	console.error('Error: Hello World!');
	
	console.dir(window);

})();
