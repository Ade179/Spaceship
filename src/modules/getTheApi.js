import display from './display.js';

const baseUrl = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?mode=list&status=8&ordering=window_end';
const counter = document.querySelector('.count');
const getTheApi = async () => {
  const data = await fetch(baseUrl);
  const res = await data.json();
  display(res.results);
  counter.innerText = res.count;
};

export default getTheApi();