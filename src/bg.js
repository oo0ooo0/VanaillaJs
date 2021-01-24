const colors = [
  'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
  'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
  'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
];
document.getElementById('backGround').style.background = colors[Math.floor(Math.random() * 4)];
