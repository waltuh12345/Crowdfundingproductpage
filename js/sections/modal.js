const modalTrigger = document.querySelector('#modal-trigger-btn');
const modalWrapper = document.querySelector('aside');
const modalClose = document.querySelector('#modal-close-btn');

modalTrigger.addEventListener('click', e => {
  const small = modalWrapper.querySelector('.small-container');

  const addDuration = (elem,name,display) => {
    animation(elem,name,display,'.6s');
  };

  addDuration(modalWrapper,'fadeIn','show');
  addDuration(small,'fadeInRight','show');
  body.style.overflowY = 'hidden';
  
  modalClose.addEventListener('click', e => {
    addDuration(modalWrapper,'fadeOut','hide');
    addDuration(small,'fadeOutRight','hide');
    body.style.overflowY = 'auto';
  })
})

const modalChildren = Array.from(modal.children);


modalChildren.forEach(child => {
  child.addEventListener('click', (e) => {
    const target = e.target;
    

    if (target.matches('.radio')) {
      const parent = target.closest('section');
      const box2 = parent.querySelector('.box2');
      parent.classList.toggle('active');

      const arg = parent.classList.contains('active') ? true : false;
      target.checked = arg;
      animation(box2,'fadeIn','show','1s');
    }

    console.log(target.matches('.primary-btn'));    
    if (target.matches('.primary-btn')) {
      const modalWrapper = target.closest('.modal');
      const small = modalWrapper.querySelector('.small-container');
      const complete = modalWrapper.nextElementSibling;

      animation(modalWrapper,'fadeOut','hide','.5s');
      animation(small,'fadeOutRight','hide','.5s');

      animation(complete,'fadeIn','show','.5s');

      const closeComplete = complete.querySelector('.primary-btn');

      closeComplete.addEventListener('click', e => {
        animation(complete,'fadeOut','hide');
        body.style.overflowY = 'auto';
      })
    }
  })
})
console.log(modalChildren[0]);