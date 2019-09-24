import { fakeUsers} from './elements.js';

export const getData = (url) => {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			data.map(e => {
				fakeUsers.push({
					id : e.id,
					pic : e.pic,
					name : e.name,
					email : e.email,
					job : e.job,
					task : e.task
				})
			});
		})
		.catch((error) => console.log('error: ' + error));
};
