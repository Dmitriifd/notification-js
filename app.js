const button = document.querySelector('.button')

button.addEventListener('click', () => {
	Notification.requestPermission().then((perm) => {
		if (perm === 'granted') {
			const notification = new Notification('Example notification', {
				body: 'This is more text',
				data: { hello: 'world' },
				icon: 'icon.png',
				tag: 'Welcome Message',
			})

			notification.addEventListener('close', (e) => {
				console.log(e)
			})
		}
	})
})

let notification
let interval
document.addEventListener('visibilitychange', (e) => {
	if (document.visibilityState === 'hidden') {
		const leaveDate = new Date()
		interval = setInterval(() => {
			notification = new Notification('Come back please', {
				body: `You have been gone for ${Math.round((new Date() - leaveDate) / 1000)} seconds`,
				tag: 'come back',
			})
		}, 100)
	} else {
		if (interval) clearInterval(interval)
		if (notification) notification.close()
	}
})
