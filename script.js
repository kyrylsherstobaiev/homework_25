
let inputarea = document.querySelector('input[data-numeric="numeric"]');
let inputArray = [];

let getArrayNumbers = () => new Promise((resolve, reject) => {
	confirm('Please enter numbers:') ? resolve() : reject();;
});

getArrayNumbers()
	.then(
		function () {
			inputarea.focus();
			inputarea.addEventListener('keypress', (e) => {
				if (e.key === 'Enter') {
					if (inputarea.value !== '') {
						inputArray.push(inputarea.value);
						inputarea.value = '';
					}
				}
			});
		}
	)
	.then(
		function () {
			setTimeout(() => {
				inputarea.setAttribute("readonly", 1);
				inputarea.value = '';
				console.log(inputArray);
			}, 5000);
		})
	.catch(
		function () {
			inputarea.setAttribute("readonly", 1);
			console.log('Action was cancelled by user');
		}
	)





