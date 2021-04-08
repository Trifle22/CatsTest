const url = 'https:/api.thecatapi.com/v1/images/search?format=json&limit=15';
const allCats = document.querySelector('.all-cats');



fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'x-api-Key': '2c90cc4c-aa92-459c-93ea-9e81a664c71d'
  }
}).then(response => response.json()).then(response => renderCats(response));

const renderCats = (response) => {
  console.log(response);
  response.forEach(item => {
    const catCard = `
    <div class="cat-img">
      <img src="${item.url}" alt="cat">
      <div class="heart"></div>
    </div>`
    allCats.insertAdjacentHTML('beforeend', catCard);
  })

}




const tabs = () => {
  const tabs = document.querySelectorAll('.tab');
  const tabContent = document.querySelectorAll('.tab-content');
  const header = document.querySelector('.header');

  const toggleTabContent = index => {
    for (let i = 0; i < tabs.length; i++) {
      if (index === i) {
        tabs[i].classList.add('active');
        tabContent[i].classList.add('active');
      } else {
        tabs[i].classList.remove('active');
        tabContent[i].classList.remove('active');
      }
    }
  }

  header.addEventListener('click', event => {
    let target = event.target;
    target = target.closest('.tab');
    if (target) {
      tabs.forEach((item , i) => {
        if (item === target) {
          toggleTabContent(i);
        }
      });
    }
  })
}

tabs();

