
let tabs = document.querySelectorAll('.tab');

function onTabClick(event) {
	// all of the active tabs
	let activeTabs = document.querySelectorAll('.active')

	//deactivate the existing active tab and panel
	activeTabs.forEach(function(tab) {
		tab.className = tab.className.replace('active', '')
	})

	//active the new tab and panel
	let currentTabId = event.target; //get tab id
	let currentTab = event.target.parentElement.parentElement; 

	let currentTabPanelId = currentTabId.getAttribute("href") //set tab id to panel
	let currentTabPanel = document.querySelector(currentTabPanelId) //select the panel 

	currentTab.classList.add("active")
	currentTabPanel.classList.add("active") 
}

// listen for clicking a tab
for( let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', onTabClick, false)
}

