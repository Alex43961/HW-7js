let isRunning: boolean = true
while (isRunning) {
	const userFirstNumber: number | null = +prompt("Enter your first number")
	if (isNaN(userFirstNumber) || userFirstNumber == "") {
		alert("Something went wrong. Try again.")
	} else {
		isRunning = false
	}

}