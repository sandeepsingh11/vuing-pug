$(document).ready(function() {
	Vue.component('friends-list', {
		props: {
			friends: {
				type: Array,
				required: true
			}
		},
		template: '<ul> <li v-for="friend in friends">{{ friend }}</li> </ul>'
	})

	new Vue({
		el: '#friends',
		data: {
			friendList: [
				'Jade',
				'Pug',
				'Vue',
				'Express',
				'Node',
				'jQuery',
				'JavaScript'
			]
		}
	})


	Vue.component('pokemon-list', {
		props: ['pokemon'],
		template: '<li>I choose {{ pokemon }}!</li>'
	})

	var pokemon = new Vue({
		el: '#pokemon',
		data: {
			allPokemons: [
				'charizard', 
				'typhlosion', 
				'swampert', 
				'torterra', 
				'serperior', 
				'greninja', 
				'primarina'
			],
			edit: ''
		},
		methods: {
			add: function () {
				if (this.edit != '') {
					this.allPokemons.push(this.edit)
					this.edit = ''
				}
			},
			remove: function () {
				this.allPokemons.pop()
			},
			test: function () {
				console.log('yey!');
			}
		}
	})

	$('input').keyup(function(e) {
		if (e.which === 13) {
			pokemon.add();
		}
	})
});