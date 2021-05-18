const toggleLayout = () => {
  const styles = document.getElementsByClassName("cssSwitcher");
  for (let style of styles) {
    style.media = style.media === "screen" ? "offscreen" : "screen";
  }
};
const button = document.getElementById("toggleLayout");
button.addEventListener("click", toggleLayout);
