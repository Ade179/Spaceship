const cardContainer = document.querySelector('.card-cont');
const heart = 'heart';
const like = 'like';
const render = (data) => {
  data.forEach((dat) => {
    const hearts = dat.id + heart;
    const likes = hearts + like;
    const containment = document.createElement('div');
    containment.classList.add('containment');
    containment.innerHTML = `
         <div class="contain">
         <img src="${dat.image}" class = "img" alt="">
         <div class="heading">
             <p class="mission-name">${dat.name}</p>
             <div class="likes">
             <button class="likeicon" id="${hearts}"><i class="fa fa-heart"></i></button>
             <p><span id="${likes}"></span>&nbsp&nbsp likes <p>
             </div>
         </div>
         <button id="${dat.id}" class="comment">Comments</button>
        </div>
         `;
    cardContainer.append(containment);
  });
};
export { render as default };
