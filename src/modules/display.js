const cardContainer = document.querySelector('.card-cont');
const display = (data) => {
  data.forEach((dat) => {
    const containment = document.createElement('div');
    containment.classList.add('containment');
    containment.innerHTML = `
         <div class="contain">
         <img src="${dat.image}" class = "img" alt="a rocket">
         <div class="heading">
             <p class="mission-name">${dat.name}</p>
             <div class="likes"></div>
         </div>
        <div class="buttons">
         <button class="comment">Comments</button>
        </div>
     </div>
         `;
    cardContainer.appendChild(containment);
  });
};
module.exports = display;
