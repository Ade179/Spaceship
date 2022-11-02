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
         <button id="${dat.id}" class="comment com-btn">Comments</button>
        </div>
     </div>
         `;
    cardContainer.appendChild(containment);
  });
};
export { display as default };
