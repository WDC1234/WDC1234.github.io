import { getData } from './connection.js';

const url = 'https://5d8949cdb2568e0014d87a6e.mockapi.io/fakeusers';

getData(url)

const setAttributes = (e, attrs) => {
	for (var key in attrs) {
		e.setAttribute(key, attrs[key]);
	}
};

export const fakeUsers = [];

export var header = document.createElement('header');
setAttributes(header, { id: 'header', class: 'm-0 bg-dark media' });

var icon = document.createElement('img');
setAttributes(icon, { src: 'images/icons/icon-72x72.png', class: 'm-3 d-inline-block' });
header.appendChild(icon);

var title = document.createElement('h1');
title.setAttribute('class', 'h3 mt-3 ml-0 text-white');
title.innerText = 'Searching Fake Users... PWA';

var intro = document.createElement('p');
intro.setAttribute('class', 'text-white text-muted');
intro.innerText =
	'This is a test project of a PWA (Progressive Web App), which allows you to search for fake users in  a fake API';

var hbody = document.createElement('div');
hbody.setAttribute('class', 'media-body');
hbody.appendChild(title);
hbody.appendChild(intro);
header.appendChild(hbody);

export var container = document.createElement('div');
container.setAttribute('class', 'container mt-3 p-3 bg-dark jumbotron');

var btnAll = document.createElement('button');
setAttributes(btnAll, { id: 'allUsers', class: 'btn btn-info mb-3' });
btnAll.innerText = 'Get all users';
container.appendChild(btnAll);

var inputParent = document.createElement('span');
	inputParent.setAttribute('style', 'position:relative');
	container.appendChild(inputParent);

var input = document.createElement('input');
setAttributes(input, { type: 'text', id: 'entry', class: 'form-control alert-success', placeholder: 'Search user...' });
inputParent.appendChild(input);

const card = (e, parent)=> {
	var card = document.createElement('div');
		setAttributes(card, {"id" : e.id, "class" : "card m-3 bg-info text-white border-0"});
	var row = document.createElement('div');
		row.setAttribute('class', 'row no-gutters')
		card.appendChild(row);
	var col = document.createElement('div');
		col.setAttribute('class', 'col-md-4');
		row.appendChild(col);
	var img = document.createElement('img');
		setAttributes(img, {"src" : e.pic, "class" : "card-img"});
		col.appendChild(img);
	var col2 = document.createElement('div');
		col2.setAttribute('class', 'col-md-8')
		row.appendChild(col2);
	var cardBody = document.createElement('div');
		cardBody.setAttribute('class', 'card-body');
		col2.appendChild(cardBody);
	var title = document.createElement('h5');
		title.setAttribute('class', 'card-title');
		title.innerText = e.name;
		cardBody.appendChild(title);
	var text01 = document.createElement('p');
		text01.setAttribute('class', 'card-text');
		cardBody.appendChild(text01);
	var textMuted = document.createElement('small');
		textMuted.setAttribute('class', 'text-mutted');
		textMuted.innerText = e.email;
		text01.appendChild(textMuted);
	var text02 = document.createElement('p');
		text02.setAttribute('class', 'card-text');
		text02.innerText = e.job + ' - '+e.task;
		cardBody.appendChild(text02);

	return parent.appendChild(card);
}

var dropmenu = document.createElement('ul');
	setAttributes(dropmenu, {"class" : "list-group", "style" : "position: absolute; margin-top: 2px;"});


btnAll.addEventListener('click', ()=>{
	fakeUsers.forEach( e =>{
		card(e, container);
	})
	
});


const listUsers = function(){
	console.log(this.value)
	fakeUsers.map( e =>{
		console.log(e.name.includes('P'))
		if(e.name.includes(this.value)){
			var list = document.createElement('li');
				setAttributes(list, {"value" : e.id, "class" : "list-group-item" });
				list.innerText = e.name;
				dropmenu.appendChild(list)
			inputParent.appendChild(dropmenu);
		}else if(e.name.includes(this.value) === false){
			 inputParent.removeChild(inputParent.childNodes[1]);
			console.log('bad')
		}
	});
}


// input.addEventListener('click', listUsers);
// input.addEventListener('keyup', listUsers);
// input.addEventListener('keydown', listUsers);
// input.addEventListener('change', listUsers);