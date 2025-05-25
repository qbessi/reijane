import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro, d as renderComponent, e as addAttribute, j as defineScriptVars, b as renderSlot, s as spreadAttributes, u as unescapeHTML, F as Fragment, k as renderHead, l as renderScript } from './astro/server_DrjHWHeI.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CeSu2GKU.mjs';
import 'clsx';
/* empty css                         */

const Facebook = new Proxy({"src":"/_astro/facebook.D0JOV-zG.svg","width":30,"height":30,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/super/Documents/reijane/src/assets/facebook.svg";
							}
							
							return target[name];
						}
					});

const Linkedin = new Proxy({"src":"/_astro/linkedin.eKpMB-Du.svg","width":30,"height":30,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/super/Documents/reijane/src/assets/linkedin.svg";
							}
							
							return target[name];
						}
					});

const Logo = new Proxy({"src":"/_astro/logo-alt.g2asEovs.svg","width":220,"height":36,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/super/Documents/reijane/src/assets/logo-alt.svg";
							}
							
							return target[name];
						}
					});

const Twitter = new Proxy({"src":"/_astro/twitter.CkIHlicD.svg","width":30,"height":30,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/super/Documents/reijane/src/assets/twitter.svg";
							}
							
							return target[name];
						}
					});

const $$ShortForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="bg-[#292A32] px-10 py-14 rounded-[14px] gap-5 h-full flex flex-col sm:flex-row items-center justify-center"> <div class="w-full sm:w-[55%]"> <input type="text" id="email" name="email" placeholder="Email" class="bg-transparent w-full px-[35px] py-5 border rounded-[14px] focus:outline-none"> </div> <button type="submit" name="submit" class="w-full sm:w-[45%] btn-tertiary">Subscribe to news</button> </form>`;
}, "/home/super/Documents/reijane/src/components/ui/ShortForm.astro", void 0);

const $$Astro$d = createAstro("https://positivustheme.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Footer;
  const logos = [
    { name: "Facebook", src: Facebook, link: "https://facebook.com" },
    { name: "Linkedin", src: Linkedin, link: "https://linkedin.com" },
    { name: "Twitter", src: Twitter, link: "https://twitter.com" }
  ];
  const links = [
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#cases" },
    { name: "Pricing", href: "#Testimonials" },
    { name: "Blog", href: "#Home" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="sm:px-5"> <div class="w-full max-w-[1240px] mx-auto"> <div class="px-[15px] bg-dark text-gray py-[55px] lg:px-[60px] sm:rounded-t-[45px]"> <div> <div class="flex flex-col lg:flex-row gap-7 items-center justify-between"> <picture> <a href="#home"> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "Logo for Kreatif Brand" })} </a> </picture> <ul class="flex flex-col sm:flex-row gap-5"> ${links.map((link) => {
    return renderTemplate`<li class="text-center"> <a class="underline"${addAttribute(link.href, "href")}> ${link.name} </a> </li>`;
  })} </ul> <ul class="flex gap-5"> ${logos.map((logo) => {
    return renderTemplate`<li> <a${addAttribute(logo.link, "href")} target="_blank"> <picture> ${renderComponent($$result, "Image", $$Image, { "src": logo.src, "alt": logo.name })} </picture> </a> </li>`;
  })} </ul> </div> <div class="flex flex-col lg:flex-row mt-[66px] mb-[51px]"> <div class="flex text-center lg:text-start flex-col w-full lg:w-[30%]"> <h3 class="mb-5 text-center md:text-left text-2xl text-green">Contact us</h3> <div class="flex flex-col justify-between gap-4"> <span> Email: examplemail.com </span> <span> Phone: +123 456 789 </span> <span class="lg:w-3/4">
Address: 1234 Street Name, City Name, Country Name
</span> </div> </div> <div class="flex-grow my-10 lg:my-0 lg:ml-12"> ${renderComponent($$result, "ShortForm", $$ShortForm, {})} </div> </div> </div> <div class="h-[1px] bg-gray mb-5"></div> <div class="flex flex-col lg:flex-row h-20 justify-center mt-4 text-center md:justify-between md:mt-0"> <span>2024 Positivus - Made With <a class="underline" target="_blank" href="https://astro.build">Astro</a> by
<a class="underline" target="_blank" href="https://manulthanura.com">Manul</a></span>&nbsp
<span>
Credits (
<a href="https://www.olgaskuja.design/" target="_blank" class="underline">Olga</a>,
<a href="https://esteban-vasquez.netlify.app/" target="_blank" class="underline">Esteban</a>)
<span> &</span> <a class="underline" href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Licence</a> </span> </div> </div> </div> </section>`;
}, "/home/super/Documents/reijane/src/components/ui/Footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$c = createAstro("https://positivustheme.vercel.app");
const $$Astronav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      `.astronav-dropdown button, .astronav-dropdown label, .astronav-dropdown input,\n	  .astronav-dropdown-submenu button, .astronav-dropdown-submenu label, .astronav-dropdown-submenu input,\n	  #astronav-menu`\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'], ["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      \\`.astronav-dropdown button, .astronav-dropdown label, .astronav-dropdown input,\n	  .astronav-dropdown-submenu button, .astronav-dropdown-submenu label, .astronav-dropdown-submenu input,\n	  #astronav-menu\\`\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "/home/super/Documents/reijane/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$b = createAstro("https://positivustheme.vercel.app");
const $$MenuIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu"> ${renderSlot($$result, $$slots["default"], renderTemplate` <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${spreadAttributes(rest)}> <title>Toggle Menu</title> <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path> <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path> </svg> `)} </button>`;
}, "/home/super/Documents/reijane/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$a = createAstro("https://positivustheme.vercel.app");
const $$OpenIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/home/super/Documents/reijane/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$9 = createAstro("https://positivustheme.vercel.app");
const $$CloseIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/home/super/Documents/reijane/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$8 = createAstro("https://positivustheme.vercel.app");
const $$MenuItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "/home/super/Documents/reijane/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$7 = createAstro("https://positivustheme.vercel.app");
const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "/home/super/Documents/reijane/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$6 = createAstro("https://positivustheme.vercel.app");
const $$DropdownSubmenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/super/Documents/reijane/node_modules/astro-navbar/src/components/DropdownSubmenu.astro", void 0);

const $$Astro$5 = createAstro("https://positivustheme.vercel.app");
const $$DropdownItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/super/Documents/reijane/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://positivustheme.vercel.app");
const $$StickyHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$StickyHeader;
  const {
    scrollY = 100,
    defaultClass = "",
    activeClass = "",
    class: className = "",
    ...rest
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<header", "", " data-astro-cid-itfz4qi6> ", " </header> <script>(function(){", '\n  // @ts-nocheck\n  let lastKnownScrollPosition = 0;\n  let ticking = false;\n\n  const header = document.querySelector(".astronav-sticky-header");\n\n  // Define two different scroll positions\n  const addScrollY = Math.max(scrollY, 100); // Scroll position to add active class\n  const removeScrollY = Math.max(scrollY - 50, 50); // Scroll position to remove active class\n\n  function updateAnimation(scrollPos) {\n    if (scrollPos > addScrollY) {\n      header.classList.remove(...defaultClass.split(" "));\n      header.classList.add("is-active", ...activeClass.split(" "));\n      header.setAttribute("active", "");\n    } else if (scrollPos < removeScrollY) {\n      header.classList.remove("is-active", ...activeClass.split(" "));\n      header.classList.add(...defaultClass.split(" "));\n      header.removeAttribute("active");\n    }\n  }\n\n  window.addEventListener("scroll", function () {\n    lastKnownScrollPosition = window.scrollY;\n    if (!ticking) {\n      window.requestAnimationFrame(function () {\n        updateAnimation(lastKnownScrollPosition);\n        ticking = false;\n      });\n\n      ticking = true;\n    }\n  });\n})();<\/script> '])), maybeRenderHead(), addAttribute(["astronav-sticky-header", className, defaultClass], "class:list"), spreadAttributes(rest), renderSlot($$result, $$slots["default"]), defineScriptVars({ scrollY, defaultClass, activeClass }));
}, "/home/super/Documents/reijane/node_modules/astro-navbar/src/components/StickyHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://positivustheme.vercel.app");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    { href: "/about", label: "About us" },
    { href: "/#services", label: "Services" },
    { href: "/#cases", label: "Use Cases" },
    { href: "/pricing", label: "Pricing" },
    { href: "/articles", label: "Blog" }
  ];
  const navButton = { href: "https://github.com/manulthanura/Positivus", label: "Request a quote" };
  return renderTemplate(_a || (_a = __template(["", '<div class="mt-20"> <nav class="w-full top-0 left-0 z-50 fixed bg-white"> <header class="flex flex-col lg:flex-row justify-between items-center my-5 px-6 md:px-32"> ', ' <div> <div class="hidden lg:flex items-center gap-4"> <a class="px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex"', '> <h2 class="text-center text-xl font-normal leading-7">', `</h2> </a> </div> </div> </header> </nav> </div> <script>
  // Get references to the menu icon, open/close icons, and menu items
  const menuIcon = document.getElementById('menu-icon');
  const openIcon = document.getElementById('open-icon');
  const closeIcon = document.getElementById('close-icon');
  const menuItems = document.getElementById('menu-items');
  const closeMenuItems = document.querySelectorAll('[data-close-menu="true"]');  // Select all items with the 'data-close-menu' attribute

  // Toggle the menu visibility and icon when the menu icon is clicked
  menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('hidden');  // Toggle the 'hidden' class on the menu

    // Toggle between open and close icons
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Close the menu when any item is clicked
  closeMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.classList.add('hidden');  // Add the 'hidden' class to hide the menu
      openIcon.classList.remove('hidden');  // Show the open (hamburger) icon
      closeIcon.classList.add('hidden');  // Hide the close (X) icon
    });
  });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Astronav", $$Astronav, {}, { "default": ($$result2) => renderTemplate` <div class="flex w-full lg:w-auto items-center justify-between"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/Logo.svg" class="h-8" alt="Logo"> </a> <div class="block lg:hidden"> <div id="menu-icon" class="w-8 h-8 text-black cursor-pointer"> <!-- Open (hamburger) icon --> <svg id="open-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <!-- Close (X) icon --> <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-8 h-8 hidden"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </div> </div> </div> <nav class="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0" id="menu-items"> <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0"> ${menuitems.map((item, index) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class="mobile-nav-link block py-2 px-3 text-black rounded lg:bg-transparent lg:p-0" data-close-menu="true"> ${item.label} </a> </li>`)} <div class="lg:hidden flex items-center justify-center mt-3 gap-4"> <a class="mobile-nav-link px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex"${addAttribute(navButton.href, "href")} data-close-menu="true"> <h2 class="text-center text-xl font-normal leading-7">${navButton.label}</h2> </a> </div> </ul> </nav> ` }), addAttribute(navButton.href, "href"), navButton.label);
}, "/home/super/Documents/reijane/src/components/ui/Navbar.astro", void 0);

const title = "Positivus";
const description = "Positivus is a simple and minimalistic blog theme for Ghost. It is designed to be a perfect starting point for your blog project.";
const image = {"src":"https://github.com/manulthanura/Positivus/raw/main/public/cover.png","alt":"Positivus"};
const siteData = {
  title,
  description,
  image,
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function jsonLDGenerator({ type, post, url }) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${"https://positivustheme.vercel.app"}"
      }
    </script>`;
}

const $$Astro$2 = createAstro("https://positivustheme.vercel.app");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title,
    description,
    url = Astro2.url,
    image,
    frontmatter,
    robots
  } = Astro2.props;
  const jsonLD = jsonLDGenerator({
    type: frontmatter ? "post" : "website",
    post: frontmatter,
    url
  });
  return renderTemplate`<!-- SEO --><link rel="canonical"${addAttribute(url, "href")}><!-- Open Graph --><meta property="og:site_name" content="Site Name"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:url"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:secure_url"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:image:alt"${addAttribute(image?.alt || siteData.image.alt, "content")}><!-- Twitter --><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image"${addAttribute(image?.src || siteData.image.src, "content")}><meta name="twitter:image:alt"${addAttribute(title, "content")}><!-- Using environment domain --><meta name="twitter:domain"${addAttribute("https://positivustheme.vercel.app", "content")}>${robots && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- JSON LD -->${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(jsonLD)}` })}`;
}, "/home/super/Documents/reijane/src/components/seo/Seo.astro", void 0);

const $$Astro$1 = createAstro("https://positivustheme.vercel.app");
const $$MainHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainHead;
  const { title, description, image, frontmatter, robots } = Astro2.props;
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- iOS 
  <link rel="apple-touch-icon" sizes="256x256" href="/path/to/your/icon.png" />
  --><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "url": Astro2.url.toString(), "image": image, "frontmatter": frontmatter, "robots": robots })}<!-- Preconnect fonts, images... -->${renderHead()}</head>`;
}, "/home/super/Documents/reijane/src/layouts/MainHead.astro", void 0);

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { ...props } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-ouamjn2i> ${renderComponent($$result, "MainHead", $$MainHead, { ...props, "data-astro-cid-ouamjn2i": true })}${renderScript($$result, "/home/super/Documents/reijane/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts")}${maybeRenderHead()}<body class="bg-white font-grotesk" data-astro-cid-ouamjn2i> <main data-astro-cid-ouamjn2i> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-ouamjn2i": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ouamjn2i": true })} </main> </body></html>`;
}, "/home/super/Documents/reijane/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
