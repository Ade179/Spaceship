import addcomment, { getcomments } from './Involvement.js';

const popups = document.querySelector('.pop-up');
const over = document.querySelector('.over');
const overlay = document.getElementById('overlay');
let url;
let appId;
const popup = (id, rockets, appid) => {
  const rocket = rockets.find((data) => data.id === id);

  popups.innerHTML = `
    <div class="titles">
    <img class="rocketimage" src="${rocket.image}" alt="rocket">
    <button class="close">&times;</button>
</div>
<div class="content">
    <h1>${rocket.name}</h1>
    <div class="info">
        <ul class="line1">
            <li><span>Logistics Service Provider:</span> ${rocket.lsp_name}</li>
            <li><span>Orbit:</span> ${rocket.orbit}</li>
            <li><span>Pad:</span> ${rocket.pad}</li>
        </ul>
        <ul class="line2">
        <li><span>Mission:</span> ${rocket.mission}</li>
        <li><span>Mission Type:</span> ${rocket.mission_type}</li>
        <li><span>Location:</span> ${rocket.location}</li>
        </ul>
    </div>
    <h3>comment(2)</h3>
    <ul id="commentstable">
    </ul>

    <h3>Add comment</h3>
    <form>
        <input type="text" id="name" class="input" placeholder="your name">
        <textarea name="insight" class="input" id="insight" cols="30" rows="10" placeholder="your insights"></textarea>
        <button type="button" id="comment">comment</button>
    </form>
</div>    
    `;

  appId = appid;

  popups.classList.toggle('active');
  over.classList.toggle('active');
  overlay.classList.toggle('active');

  url = new URL(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`);
  const params = { item_id: id };
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  getcomments(url);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popups.classList.remove('active');
    over.classList.remove('active');
    overlay.classList.remove('active');
  });

  const commenting = document.getElementById('comment');
  const user = document.getElementById('name');
  const comment = document.getElementById('insight');

  commenting.addEventListener('click', () => {
    if (comment.value !== '' && user.value !== '') {
      addcomment(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, id, user.value, comment.value);
      document.forms[0].reset();
    }
  });
};

export { popup as default };
