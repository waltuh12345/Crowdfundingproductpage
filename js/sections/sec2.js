const sec2Data = [
  {
    h2: '$89,914',
    div: 'of $100,000 backed',
  },
  {
    h2: '5,007',
    div: 'total backers',
  },
  {
    h2: '56',
    div: 'days left',
  }
]

const sec2Ul = document.querySelector('#sec2').querySelector('ul');
let sec2Html = ``;

sec2Data.forEach(data => {
  sec2Html += `
  <li>
    <h2>${data.h2}</h2>
    <div>${data.div}</div>
  </li>
  `
})

sec2Ul.innerHTML = sec2Html;