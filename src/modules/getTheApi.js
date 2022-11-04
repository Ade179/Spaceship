import render from './render.js';
import popup from './popupwindow.js';
import { addLikes } from './Involvement.js';

const baseUrl = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?mode=list&status=8&ordering=window_end';
let appId = '';
const counter = document.querySelector('.count');
const getTheApi = async () => {
  const data = await fetch(baseUrl);
  const res = await data.json();
  render(res.results);
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((json) => {
      appId = json;
    });
  document.addEventListener('click', (e) => {
    const { id } = e.target;
    if (e.target.matches('.comment')) {
      popup(id, res.results, appId);
    } else if (e.target.matches('.likeicon')) {
      addLikes(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`, id);
    }
  });
  counter.innerText = res.count;
};

export default getTheApi();