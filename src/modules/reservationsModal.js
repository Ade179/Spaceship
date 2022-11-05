const reserveModal = document.querySelector('.modalreserve');
const reservePopup = (id, reserves) => {
  const reserve = reserves.find((data) => data.id === id);
  reserveModal.innerHTML = `
    <div class="titles">
    <img class="reserveimage" src="${reserve.image}" alt="reserve">
    <button class="close">&times;</button>
</div>
<div class="content">
    <h1>${reserve.name}</h1>
    <div class="info">
       <div class='reserve-info'> <ul class="line1">
            <li><span>Logistics Service Provider:</span> ${reserve.lsp_name}</li>
            <li><span>Orbit:</span> ${reserve.orbit}</li>
            <li><span>Pad:</span> ${reserve.pad}</li>
        </ul>
        <ul class="line2">
        <li><span>Mission:</span> ${reserve.mission}</li>
        <li><span>Mission Type:</span> ${reserve.mission_type}</li>
        <li><span>Location:</span> ${reserve.location}</li>
        </ul>
    </div>
    <h3>Researvations(2)</h3>
    <ul class ="reserve-section">
    <li>01/11/2022 Chris: It's beautiful</li>
    <li>02/11/2022 Hazel: I really like this one!</li>
    </ul>
    </div>
    <form>
    <h3 id='com-head'>Add a Reservation</h3>
        <input type="text" class="input" id="name" placeholder="your name">
        <input type="text" class="input" id="name" placeholder="Start-Date">
        <input type="text" class="input" id="name" placeholder="End-Date">
        <button type="button" class='com-btn'>Reserve</button>
    </form>
</div>    
    `;

  reserveModal.classList.toggle('active');
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    reserveModal.classList.remove('active');
  });
};

module.exports = reservePopup;