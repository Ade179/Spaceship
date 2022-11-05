import display from './display.js';
import popup from './commentsModal.js';
import reservePopup from './reservationsModal.js';

const baseUrl = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?mode=list&status=8&ordering=window_end';
const counter = document.querySelector('.count');
const getTheApi = async () => {
  const data = await fetch(baseUrl);
  const res = await data.json();
  display(res.results);
  document.addEventListener('click', (e) => {
    const { id } = e.target;
    if (e.target.matches('.comment')) {
      popup(id, res.results);
    }
  });
  counter.innerText = res.count;

  document.addEventListener('click', (e) => {
    const { id } = e.target;
    if (e.target.matches('.reserve')) {
      reservePopup(id, res.results);
    }
  });
  counter.innerText = res.count;
};

export default getTheApi();