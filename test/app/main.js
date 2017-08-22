(function() {
	'use strict';

	// window.console = window.jlgConsole;

	jlgConsole.log('Hello World!');

	jlgConsole.log('Hello World!', 12, 'foo');
	jlgConsole.log('Hello World!', {
		coucou: 13,
		hello: 'abc'
	}, 'foo');

	jlgConsole.log('%c Hello World!', 'background: #222; color: #bada55');
	
	jlgConsole.log('%d + %d = %d', 2, 3, 5);

	jlgConsole.log('document.body', document.body);

	jlgConsole.log('window', window);

	jlgConsole.warn('Warning: Hello World!');

	jlgConsole.error('Error: Hello World!');
	

})();
