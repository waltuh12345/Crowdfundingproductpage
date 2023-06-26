const sec3Data = [
  {
    h3: 'Bamboo Stand',
    pledge: 'Pledge $25 or more',
    p: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and  you’ll be added to a special Backer member list.",
    left: '101',
    button: 'Select Reward',
  },
  {
    h3: 'Black Edition Stand',
    pledge: 'Pledge $75 or more',
    p: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    left: '64',
    button: 'Select Reward',
  },
  {
    h3: 'Mahogany Special Edition',
    pledge: 'Pledge $200 or more',
    p: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    left: '0',
    button: 'Out of Stock',
  },
]

const sec3Wrapper = document.querySelector('#sec3')
.querySelector('.section-wrapper');
let sec3Html = '';
sec3Data.forEach(data => {
  const {h3,pledge,p,left,button} = data;
  let cn = '';

  if (left == 0) {
    cn = 'empty';
  }

  sec3Html += `
  <section class="${cn}">
    <div class="box1">
      <h3>${h3}</h3>
      <span>${pledge}</span>
    </div>
    <p>${p}</p>
    <div class="box3">
      <div>${left} left</div>
      <button class="primary-btn">${button}</button>
    </div>
  </section>
  `
})


sec3Wrapper.innerHTML = sec3Html;