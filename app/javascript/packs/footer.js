document.addEventListener('DOMContentLoaded', (event) => {

	footer = document.querySelector("#footer");
	
	currentYear = new Date().getFullYear();

	footer.innerHTML = "&copy; " + currentYear + " Joshua Boyd"
});
