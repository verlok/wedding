const toggleNerdMode = () => {
  const styles = document.getElementsByClassName("cssSwitcher");
  for (let style of styles) {
    style.media = style.media === "screen" ? "offscreen" : "screen";
  }
};
const button = document.getElementById("toggleNerdMode");
button.addEventListener("click", toggleNerdMode);
