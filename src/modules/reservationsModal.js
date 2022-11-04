import addreserve, { getreserves } from './reserver.js';

const popups = document.querySelector('.pop-up');
const over = document.querySelector('.over');
const overlay = document.getElementById('overlay_1');
let url;
let appId;
const reservePopup = (id, reservations, appid) => {
  const reservation = reservations.find((data) => data.id === id);

  popups.innerHTML = `
    <div class="titles">
    <img class="reservationimage" src="${reservation.image}" alt="reservation">
    <button class="close">&times;</button>
</div>
<div class="content">
    <h1>${reservation.name}</h1>
    <div class="info">
        <ul class="line1">
            <li><span>Logistics Service Provider:</span> ${reservation.lsp_name}</li>
            <li><span>Orbit:</span> ${reservation.orbit}</li>
            <li><span>Pad:</span> ${reservation.pad}</li>
        </ul>
        <ul class="line2">
        <li><span>Mission:</span> ${reservation.mission}</li>
        <li><span>Mission Type:</span> ${reservation.mission_type}</li>
        <li><span>Location:</span> ${reservation.location}</li>
        </ul>
    </div>
    <h3>reservations(2)</h3>
    <ul id="reservestable">
    </ul>

    <h3>Add reserve</h3>
    <form>
        <input type="text" id="name" class="input" placeholder="your name">
        <input type="date" id="s-date" class="input" placeholder="Start Date">
        <input type="date" id="e-date" class="input" placeholder="End Date">
        
        <button type="button" id="reserve">reserve</button>
    </form>
</div>    
    `;

  appId = appid;

  popups.classList.toggle('active');
  over.classList.toggle('active');
  overlay.classList.toggle('active');

  url = new URL(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reserves`);
  const params = { item_id: id };
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  getreserves(url);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popups.classList.remove('active');
    over.classList.remove('active');
    overlay.classList.remove('active');
  });

  const reserveing = document.getElementById('reserve');
  const user = document.getElementById('name');
  const startDate = document.getElementById('s-date');
  const endDate = document.getElementById('e-date');

  reserveing.addEventListener('click', () => {
    if (user.value !== '' && startDate.value !== '' && endDate.value !== '') {
      addreserve(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reserves`, id, user.value, startDate.value, endDate.value);
      document.forms[0].reset();
    }
  });
};

export { reservePopup as default };
