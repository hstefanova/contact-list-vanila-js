
let tabs = document.querySelectorAll('.tab');

// click the tab head link
for( let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', tabClicks)
}

function tabClicks(event) {
	// all tab contents
	let tabContents = document.querySelectorAll('.tabs__content')

	let anchorLink = event.target; //take the href
	let currentTabId = anchorLink.getAttribute("href")
	let currentTab = document.querySelector(currentTabId)
	currentTab.classList.add("active")
}