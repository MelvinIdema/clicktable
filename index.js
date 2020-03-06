class Clicktable {
  constructor() {
    const clickableTableRows = document.querySelectorAll("table tr[data-href]");

    clickableTableRows.forEach((row) => {
      row.addEventListener("click", (e) => {
        window.location = e.srcElement.parentElement.dataset.href;
        e.srcElement.parentElement.style.cursor = "pointer";
      });
    });

  }
}

module.exports = Clicktable;
