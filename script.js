const shadow = document.querySelector(".shadow")
const modal = document.querySelector(".modal")
const close = document.getElementById("close")
const pclose = document.getElementById("pclose")

addEventListener("load", () => {
	shadow.classList.add("showModal")
	modal.classList.add("showModal")
})

shadow.addEventListener("click", handleCloseModal)
pclose.addEventListener("click", handleCloseModal)
close.addEventListener("click", handleCloseModal)

function handleCloseModal() {
	modal.style.display = "none"
	shadow.style.display = "none"
}

function openAccordion(element) {
	const modalId = element.getAttribute('data-modal');
	const numero = modalId.match(/\d+/)[0];

        const modal = document.getElementById(modalId);

        const downButton = document.getElementById("down" + numero);
        const upButton = document.getElementById("up" + numero);

	modal.classList.toggle("view")
	downButton.classList.toggle("buttonVisible")
	upButton.classList.toggle("buttonHidden")
}

document.querySelectorAll('.element-li').forEach(element => {
	element.addEventListener('click', () => {
		openAccordion(element)
	});
})


function observeSection(sectionId) {
	const section = document.getElementById(sectionId);

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3
	};

	const callback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.disconnect();
			}
		});
	};

	const observer = new IntersectionObserver(callback, options);

	observer.observe(section);
}

function observeSection2(sectionId) {
	const section = document.getElementById(sectionId);

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.53
	};

	const callback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible2');
				observer.disconnect();
			}
		});
	};

	const observer = new IntersectionObserver(callback, options);

	observer.observe(section);
}


observeSection("section1");
observeSection2("section1");