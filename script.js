//your JS code here. If required.
btn.addEventListener('click', (e) => {
	abc();
})

async function abc() {
	output.innerText = await new Promise((resolve, reject) => {
		setTimeout(() => {
			 resolve(text.value);
		}, Number(delay.value));
	})
}