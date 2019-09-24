import * as nodeElements from './elements.js';
import { getData } from './connection.js';

// Service Worker for PWA
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('./sw_cachedpages.js')
			.then((reg) => console.log('Service Worker: Registered'))
			.catch((error) => console.log(`Service Worker: Error: ${error}`));
	});
}
//render elements
document.body.insertBefore(nodeElements.header, document.body.childNodes[0]);

document.getElementById('main').appendChild(nodeElements.container);
