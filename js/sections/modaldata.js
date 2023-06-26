const modalData = [
  {
    name: 'Pledge with no reward',

    description: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
  },
  {
    name: 'Bamboo Stand',
    pledge: 'Pledge $25 or more',

    description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    left:'101 left',
  },
  {
    name: 'Black Edition Stand',
    pledge: 'Pledge $75 or more',

    description: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    left:'64 left',
  },
  {
    name: 'Mahogany Special Edition',
    pledge: 'Pledge $200 or more',

    description: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    left:'0 left',
  }
]


const modal = document.querySelector('.modal')
.querySelector('.section-wrapper');

let modalHtml = '';
modalData.forEach(data => {

  const {name,description} = data;
  const pledge = data.pledge || '';
  const left = data.left || '';

  const isEmpty = left === '0 left' ? 'empty' : '';


  modalHtml += `
  <section class="${isEmpty}">
    <div class="box1-wrapper box1">
      <div class="info">
        <input type="radio" class="radio">
        <div>
          <h3>${name}</h3>
          <span>${pledge}</span>
        </div>
      </div>
      <h3>${left}</h3>
      <div>${description}</div>
    </div>
    <div class="box2">
      <div>Enter Your pledge</div>
      <div>
        <div class="input-wrapper">
          <i></i> 
          <input type="number" max="1000">
        </div>
        <button class="primary-btn">Continue</button>
      </div>
    </div>
  </section>
  `
})

modal.innerHTML = modalHtml;