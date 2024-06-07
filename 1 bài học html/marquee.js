var marquee = document.querySelector('.marquee');

marquee.addEventListener('mouseover', function () {
  this.querySelector('p').style.animationPlayState = 'paused';
});

marquee.addEventListener('mouseout', function () {
  this.querySelector('p').style.animationPlayState = 'running';
});
