const sec1 = document.querySelector('#sec1');
const bookmark = document.querySelector('.bookmark');

bookmark.addEventListener('click', e => {
  const target = e.target;
  const arg = target.matches('button');

  if (arg) {
    const text = target.nextElementSibling;
    bookmark.classList.toggle('active');
    animation(bookmark,'fadeIn','show');
    animation(target,'pulse','show')

    if (bookmark.classList.contains('active')) {
      text.innerHTML = 'bookmarked';
    } else {
      text.innerHTML = 'bookmark';
    }
  }
})