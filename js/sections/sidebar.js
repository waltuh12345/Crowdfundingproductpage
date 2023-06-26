const body = document.querySelector('body');
const menuToggle = hero.querySelector('button');
const menuWrapper = menuToggle.nextElementSibling;
const menuContainer = menuWrapper.querySelector('ul');

const appearance = (elem,animation,display) => {
  if (display !== 'hide') {
    elem.style.visibility = 'visible';
    elem.style.opacity = '1';
  } else {
    setTimeout(() => {
      elem.style.visibility = 'hidden';
      elem.style.opacity = '0';
      console.log('hi')
    },600)
  }

  animateCSS(elem,animation);
} 

const animation = (elem,name,display,duration = '1s') => {
  return new Promise((resolve, reject) => {
    elem.style.visibility = 'visible';
    elem.style.opacity = '1';
    elem.style.animationDuration = duration;
  
    elem.classList.add(`animate__animated`, `animate__${name}`);

    function handleAnimationEnd (event) {
      event.stopPropagation();
      if (display === 'hide') {
        elem.style.visibility = 'hidden';
        elem.style.opacity = 0;
      }

      elem.classList.remove(`animate__animated`, `animate__${name}`);
      resolve('animation ended');

    }

    elem.addEventListener('animationend',handleAnimationEnd,{once:true});
  })
}

menuToggle.addEventListener('click', e => {
  const duration = (elem,name,display) => animation(elem,name,display,'.5s');

  if (!menuToggle.classList.contains('active')) {

    menuToggle.classList.add('active');
    duration(menuWrapper,'fadeIn','show');
    duration(menuContainer,'fadeInDown','show');
    body.style.overflowY = 'hidden';
    
  } else {
    
    menuToggle.classList.remove('active');
    duration(menuWrapper,'fadeOut','hide');
    duration(menuContainer,'fadeOutUp','hide');
    body.style.overflowY = 'auto';

  }
})

window.addEventListener('resize', e => {
  const arg = window.innerWidth >= 600;
  menuToggle.classList.remove('active');


  console.log(arg);
  if (arg) {
    menuWrapper.style.display = 'block';
    menuWrapper.style.visibility = 'visible';
    menuWrapper.style.opacity = '1';

    menuContainer.style.opacity = '1';
    menuContainer.style.visibility = 'visible';

    body.style.overflowY = 'scroll';
  } else {
    menuWrapper.style.visibility = 'hidden';
    menuWrapper.style.opacity = '0';
  }
})