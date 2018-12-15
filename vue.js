$(document).ready(function() {
	Vue.component('friends-list', {
		props: {
			friends: {
				type: Array,
				required: true
			}
		},
		template: '<ul> <li v-for="friend in friends">Hello {{ friend }}</li> </ul>'
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
});