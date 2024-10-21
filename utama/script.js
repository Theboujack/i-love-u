//reset animations
setInterval(()=>{
  let el = document.getElementById('love')
  var newone = el.cloneNode(true);
  el.parentNode.replaceChild(newone, el);
}, 4000)

window.addEventListener('resize', function() {
  document.querySelector('.container').style.width = window.innerWidth + 'px';
  document.querySelector('.container').style.height = window.innerHeight + 'px';
});