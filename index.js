// Function thanks to: https://davidwalsh.name/add-rules-stylesheets
function addCSSRule(sheet, selector, rules, index) {
  if(!sheet) {
    const style = `${selector} { ${rules} }`;
    let styleElement = document.createElement("style");
    styleElement.appendChild(document.createTextNode(style));
    document.getElementsByTagName("head")[0].appendChild(styleElement);
    return
  }

	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, rules, index);
	}

}

class Clicktable {
  constructor(options) {

    options = options || {};
    options.style = options.style || "default";
    const styleOptions = ['none', 'default'];
    const styleSheet = document.styleSheets[0];

    if(options.style != "none") {
      if(!styleOptions.includes(options.style)) throw new Error(`${options.style} is not a valid style option.`);

      if(options.style == "default") {
        addCSSRule(styleSheet, "tr[data-href]", "color: inherit;", 1);
        addCSSRule(styleSheet, "tr[data-href]:hover", "color: #0000EE; text-decoration: underline; cursor: pointer;", 2);
      }
    }

    const clickableTableRows = document.querySelectorAll("table tr[data-href]");

    clickableTableRows.forEach((row) => {
      row.addEventListener("click", (e) => {
        window.location = e.srcElement.parentElement.dataset.href;
      });
    });

  }
}

module.exports = Clicktable;
