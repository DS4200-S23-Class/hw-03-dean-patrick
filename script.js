function clickButton() {
  const randomR = Math.floor(Math.random() * 255);
  const randomG = Math.floor(Math.random() * 255);
  const randomB = Math.floor(Math.random() * 255);
  const title = document.getElementById('page-title');
  title.style.color = `rgb(${randomR}, ${randomG}, ${randomB})`;
}
