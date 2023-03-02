const template = document.querySelector('#template')
  .content.querySelector('.card')
const cardList = document.querySelector('.card-list')
const input = document.getElementById('search')
const searchButton = document.getElementById('search-button')

let dataArray = [
  {
    img: 'card1',
    title: 'title',
    body: 'text1',
  },
  {
    img: 'card1',
    title: 'dive',
    body: 'text1',
  },
  {
    img: 'card2',
    title: 'air',
    body: 'text2',
  },
  {
    img: 'card2',
    title: 'test',
    body: 'text2',
  },
  {
    img: 'card2',
    title: 'auto',
    body: 'text2',
  },
]

const search = (dataArray) => {
  input.value = ''
  function renderList(dataArray,cardList){
    cardList.innerHTML='';
    dataArray.forEach(data => {
      const item = template.cloneNode(true);
      item.querySelector('.card__img').src = 'assets/img/' + data.img + '.jpg';
      item.querySelector('.card__title').textContent = data.title;
      item.querySelector('.card__text').textContent = data.body;
      cardList.appendChild(item)
    })
  }
  renderList(dataArray,cardList)

  function filter(val,dataArray){
    return dataArray.filter(data=>(~data.title.indexOf(val)))
  }

  input.addEventListener('change', () => {
    renderList(filter(input.value, dataArray),cardList)
    // location.href = '#search/' + input.value
    // input.value = '';
  })
}
search(dataArray)
