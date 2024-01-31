import "./style.css";
import Grid from "tui-grid";

new Grid({
  el: document.getElementById("app")!,
  data: [
    { first: 1, second: 2 },
    { first: 2, second: 3 }
  ],
  scrollX: false,
  scrollY: false,
  columns: [
    {
      header: "First",
      name: "first",
    },
    {
      header: "Second",
      name: "second",
    },
  ],
});

Grid.applyTheme("default")
