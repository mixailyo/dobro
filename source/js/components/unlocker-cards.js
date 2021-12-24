let card = document.querySelectorAll('.card');
let now = Date.now();

card.forEach((item) => {
  if (item.dataset.date <= now) {
    item.classList.add('card--unlocked')
  } else {
    let socialLinks = item.querySelectorAll('.card__social-link');
    let cardLink = item.querySelector('.card__link').href;
    let cardTitle = item.querySelector('.card__title').textContent;
    let cardDescription = item.querySelector('.card__description').textContent;
    
    socialLinks[0].href = `https://connect.ok.ru/offer?url=${cardLink}&title=${cardTitle}`
    socialLinks[1].href = `http://vk.com/share.php?url=${cardLink}&title=${cardTitle}&description=${cardDescription}&noparse=true`
    socialLinks[2].href = `http://www.facebook.com/sharer.php?s=100&p[title]=${cardTitle}&p[summary]=${cardDescription}&p[url]=${cardLink}`
    socialLinks[3].href = `http://twitter.com/share?text=${cardTitle}&url=${cardLink}`

    socialLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        window.open(link.href,'','toolbar=0,status=0,width=626,height=436');
      })
    })
  }
})