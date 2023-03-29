let config = {
	defaultTheme: "dark",
	companyName: "Your Company Here",
	companyWebsite: "http://yourwebsite.com",

	footerNav: [
		{
			footerHeader: "Site Name Here",
			footerBody: "Site description here or something else like that here.",
			display: true,
			menu: false
		},
		{
			name: "Main Pages",
			display: true,
			menu: [
				{
					name: "Home",
					link: "#"
				},
				{
					name: "Lorem Ipsum",
					link: "#"
				},
				{
					name: "Lorem Ipsum",
					link: "#"
				},
				{
					name: "Lorem Ipsum",
					link: "#"
				}
			]
		},
		{
			name: "Lorem Ipsum",
			display: true,
			menu: [
				{
					name: "Lorem Ipsum",
					link: "#"
				},
				{
					name: "Lorem Ipsum",
					link: "#"
				},
				{
					name: "Lorem Ipsum",
					link: "#"
				},
				{
					name: "Lorem Ipsum",
					link: "#"
				}
			]
		},
		{
			name: "Admin Pages",
			display: true,
			menu: [
				{
					name: "Login",
					link: "#"
				},
				{
					name: "Dashboard",
					link: "#"
				},
				{
					name: "Lorem Ipsum",
					link: "#"
				},
				{
					name: "Lorem Ipsum",
					link: "#"
				}
			]
		},
		{
			name: "Lorem Ipsum",
			display: true,
			menu: [
				{
					name: "Lorem Ipsum",
					link: "#"
				},
				{
					name: "Lorem Ipsum",
					link: "#"
				},
				{
					name: "Lorem Ipsum",
					link: "#"
				},
				{
					name: "Lorem Ipsum",
					link: "#"
				}
			]
		}
	]
};

const darkModeBtn = document.getElementById("floatingDarkModeBtn");
const darkModeIconStyle = document.querySelector("#darkModeBtnIcon").style;
const darkModeBtnStyle = document.querySelector("#floatingDarkModeBtn").style;
const date = new Date();

function lightTheme() {
	document.getElementById("mainHeaderElement").classList.remove("bg-dark");
	document.getElementById("mainHeaderElement").classList.add("bg-light");
	document.getElementById("bsHeader").classList.remove("bg-dark");
	document.getElementById("bsHeader").classList.add("bg-light");
	document.getElementById("bsHeader").classList.remove("navbar-dark");
	document.getElementById("bsHeader").classList.add("navbar-light");
	darkModeIconStyle.color = "#000000";
	darkModeBtnStyle.backgroundColor = "#ffffff";
	document.getElementById("bodyElement").classList.remove("bg-dark-2");
	document.getElementById("bodyElement").classList.add("bg-light");
	document.getElementById("pricingHeader1").classList.remove("bg-dark-3");
	document.getElementById("pricingHeader2").classList.remove("bg-dark-3");
	document.getElementById("pricingHeader3").classList.remove("bg-dark-3");
	document.getElementById("pricingHeader1").classList.remove("text-light");
	document.getElementById("pricingHeader2").classList.remove("text-light");
	document.getElementById("pricingHeader3").classList.remove("text-light");
	document.getElementById("price1").classList.remove("text-light");
	document.getElementById("price2").classList.remove("text-light");
	document.getElementById("price3").classList.remove("text-light");
	document.getElementById("monthMuted1").classList.remove("text-muted-light");
	document.getElementById("monthMuted2").classList.remove("text-muted-light");
	document.getElementById("monthMuted3").classList.remove("text-muted-light");
	document.getElementById("monthMuted1").classList.add("text-muted");
	document.getElementById("monthMuted2").classList.add("text-muted");
	document.getElementById("monthMuted3").classList.add("text-muted");
	document.getElementById("pricingCardBody1").classList.remove("card-bg-dark");
	document.getElementById("pricingCardBody2").classList.remove("card-bg-dark");
	document.getElementById("pricingCardBody3").classList.remove("card-bg-dark");
	document.getElementById("cardItems1").classList.remove("text-light");
	document.getElementById("cardItems2").classList.remove("text-light");
	document.getElementById("cardItems3").classList.remove("text-light");
	document.getElementById("firstCard").classList.remove("black-card-border");
	document.getElementById("secondCard").classList.remove("black-card-border");
	document.getElementById("thirdCard").classList.remove("black-card-border");
}

function darkTheme() {
	document.getElementById("mainHeaderElement").classList.remove("bg-light");
	document.getElementById("mainHeaderElement").classList.add("bg-dark");
	document.getElementById("bsHeader").classList.remove("bg-light");
	document.getElementById("bsHeader").classList.add("bg-dark");
	document.getElementById("bsHeader").classList.remove("navbar-light");
	document.getElementById("bsHeader").classList.add("navbar-dark");
	darkModeIconStyle.color = "#ffffff";
	darkModeBtnStyle.backgroundColor = "#4b4b4b";
	document.getElementById("bodyElement").classList.remove("bg-light");
	document.getElementById("bodyElement").classList.add("bg-dark-2");
	document.getElementById("pricingHeader1").classList.add("bg-dark-3");
	document.getElementById("pricingHeader2").classList.add("bg-dark-3");
	document.getElementById("pricingHeader3").classList.add("bg-dark-3");
	document.getElementById("pricingHeader1").classList.add("text-light");
	document.getElementById("pricingHeader2").classList.add("text-light");
	document.getElementById("pricingHeader3").classList.add("text-light");
	document.getElementById("price1").classList.add("text-light");
	document.getElementById("price2").classList.add("text-light");
	document.getElementById("price3").classList.add("text-light");
	document.getElementById("monthMuted1").classList.remove("text-muted");
	document.getElementById("monthMuted2").classList.remove("text-muted");
	document.getElementById("monthMuted3").classList.remove("text-muted");
	document.getElementById("monthMuted1").classList.add("text-muted-light");
	document.getElementById("monthMuted2").classList.add("text-muted-light");
	document.getElementById("monthMuted3").classList.add("text-muted-light");
	document.getElementById("pricingCardBody1").classList.add("card-bg-dark");
	document.getElementById("pricingCardBody2").classList.add("card-bg-dark");
	document.getElementById("pricingCardBody3").classList.add("card-bg-dark");
	document.getElementById("cardItems1").classList.add("text-light");
	document.getElementById("cardItems2").classList.add("text-light");
	document.getElementById("cardItems3").classList.add("text-light");
	document.getElementById("firstCard").classList.add("black-card-border");
	document.getElementById("secondCard").classList.add("black-card-border");
	document.getElementById("thirdCard").classList.add("black-card-border");
}

function createFooterMenu() {
	let footerMenu = document.createElement("div");
	footerMenu.setAttribute("class", "row footer-menu");
	let footerMenuCode = "";

	for (let i = 0; i < config.footerNav.length; i++) {
		let footerCol = config.footerNav[i];

		if (footerCol.display && !footerCol.menu) {
			footerMenuCode += `<div class="col-sm footer-menu links-col"><h3 class="footer-title text-white">${footerCol.footerHeader}</h3><p class="footer-welcome text-light">${footerCol.footerBody}</p></div>`;
		} else if (footerCol.display && footerCol.menu && i <= 4) {
			let codeToInsert = "";
			codeToInsert += `<div class="col-sm footer-menu links-col column-${i + 1}">`;
			codeToInsert += `<h3 class="footer-menu column-header text-white">${footerCol.name}</h3>`;
			for (let x = 0; x < footerCol.menu.length; x++) {
				let footerItem = footerCol.menu[x];
				codeToInsert += `<a class="footer-link" href="${footerItem.link}">${footerItem.name}</a><br>`;
			}
			codeToInsert += `</div>`;
			footerMenuCode += codeToInsert;
		}
	}

	footerMenu.innerHTML = footerMenuCode;
	document.getElementById("footerMenuCont").appendChild(footerMenu);
}

function createFooterCopyright() {
	document.getElementById("copyrightYear").innerHTML = `© ${date.getFullYear()}`;
	document.getElementById("company-copyright").innerHTML = config.companyName;
	document.getElementById("company-copyright").href = config.companyWebsite;

	document.getElementById("mrd-des-ftr-pro-link").innerHTML =
		"MrDogeBro Designs";
	document.getElementById("mrd-des-ftr-pro-link").href = "http://mrdogebro.com";
	document.getElementById("mrd-des-ftr-pro-coprht").innerHTML = "Template by";
}

window.onload = () => {
	if (config.defaultTheme == "dark") darkTheme();
	else if (config.defaultTheme == "light") lightTheme();
	else lightTheme();

	createFooterMenu();
	createFooterCopyright();
};

darkModeBtn.addEventListener("click", () => {
	// Header Elements
	if (
		document.getElementById("mainHeaderElement").classList.contains("bg-light")
	) {
		document.getElementById("bodyElement").classList.add("theme-transition");
		darkTheme();
	} else lightTheme();
});

// document.getElementsById("mainHeaderElement").disabled = true;

// setTimeout()
// document.getElementById("mainHeaderElement").classList.remove("bg-light");
// document.getElementById("mainHeaderElement").classList.add("bg-dark");
// document.getElementById("bsHeader").classList.remove("bg-light");
// document.getElementById("bsHeader").classList.add("bg-dark");
// document.getElementById("bsHeader").classList.remove("navbar-light");
// document.getElementById("bsHeader").classList.add("navbar-dark");
// darkModeIconStyle.color = "#ffffff";
// darkModeBtnStyle.backgroundColor = "#4b4b4b";
// document.getElementById("bodyElement").classList.remove("bg-light");
// document.getElementById("bodyElement").classList.add("bg-dark-2");
// document.getElementById("pricingHeader1").classList.add("bg-dark-3");
// document.getElementById("pricingHeader2").classList.add("bg-dark-3");
// document.getElementById("pricingHeader3").classList.add("bg-dark-3");
// document.getElementById("pricingHeader1").classList.add("text-light");
// document.getElementById("pricingHeader2").classList.add("text-light");
// document.getElementById("pricingHeader3").classList.add("text-light");
// document.getElementById("price1").classList.add("text-light");
// document.getElementById("price2").classList.add("text-light");
// document.getElementById("price3").classList.add("text-light");
// document.getElementById("monthMuted1").classList.remove("text-muted");
// document.getElementById("monthMuted2").classList.remove("text-muted");
// document.getElementById("monthMuted3").classList.remove("text-muted");
// document.getElementById("monthMuted1").classList.add("text-muted-light");
// document.getElementById("monthMuted2").classList.add("text-muted-light");
// document.getElementById("monthMuted3").classList.add("text-muted-light");
// document.getElementById("pricingCardBody1").classList.add("card-bg-dark");
// document.getElementById("pricingCardBody2").classList.add("card-bg-dark");
// document.getElementById("pricingCardBody3").classList.add("card-bg-dark");
// document.getElementById("cardItems1").classList.add("text-light");
// document.getElementById("cardItems2").classList.add("text-light");
// document.getElementById("cardItems3").classList.add("text-light");
// document.getElementById("firstCard").classList.add("black-card-border");
// document.getElementById("secondCard").classList.add("black-card-border");
// document.getElementById("thirdCard").classList.add("black-card-border");

// document.getElementById("mainHeaderElement").classList.remove("bg-dark");
// document.getElementById("mainHeaderElement").classList.add("bg-light");
// document.getElementById("bsHeader").classList.remove("bg-dark");
// document.getElementById("bsHeader").classList.add("bg-light");
// document.getElementById("bsHeader").classList.remove("navbar-dark");
// document.getElementById("bsHeader").classList.add("navbar-light");
// darkModeIconStyle.color = "#000000";
// darkModeBtnStyle.backgroundColor = "#ffffff";
// document.getElementById("bodyElement").classList.remove("bg-dark-2");
// document.getElementById("bodyElement").classList.add("bg-light");
// document.getElementById("pricingHeader1").classList.remove("bg-dark-3");
// document.getElementById("pricingHeader2").classList.remove("bg-dark-3");
// document.getElementById("pricingHeader3").classList.remove("bg-dark-3");
// document.getElementById("pricingHeader1").classList.remove("text-light");
// document.getElementById("pricingHeader2").classList.remove("text-light");
// document.getElementById("pricingHeader3").classList.remove("text-light");
// document.getElementById("price1").classList.remove("text-light");
// document.getElementById("price2").classList.remove("text-light");
// document.getElementById("price3").classList.remove("text-light");
// document.getElementById("monthMuted1").classList.remove("text-muted-light");
// document.getElementById("monthMuted2").classList.remove("text-muted-light");
// document.getElementById("monthMuted3").classList.remove("text-muted-light");
// document.getElementById("monthMuted1").classList.add("text-muted");
// document.getElementById("monthMuted2").classList.add("text-muted");
// document.getElementById("monthMuted3").classList.add("text-muted");
// document.getElementById("pricingCardBody1").classList.remove("card-bg-dark");
// document.getElementById("pricingCardBody2").classList.remove("card-bg-dark");
// document.getElementById("pricingCardBody3").classList.remove("card-bg-dark");
// document.getElementById("cardItems1").classList.remove("text-light");
// document.getElementById("cardItems2").classList.remove("text-light");
// document.getElementById("cardItems3").classList.remove("text-light");
// document.getElementById("firstCard").classList.remove("black-card-border");
// document.getElementById("secondCard").classList.remove("black-card-border");
// document.getElementById("thirdCard").classList.remove("black-card-border");
// JavaScript Document