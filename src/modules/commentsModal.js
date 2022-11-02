const commentModal = document.querySelector('.modalcomments');
const popup = (id, rockets) => {
  const rocket = rockets.find((data) => data.id === id);
  commentModal.innerHTML = `
    <div class="titles">
    <img class="rocketimage" src="${rocket.image}" alt="rocket">
    <button class="close">&times;</button>
</div>
<div class="content">
    <h1>${rocket.name}</h1>
    <div class="info">
       <div class='rocket-info'> <ul class="line1">
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
    <ul class ="comments-section">
    <li>01/11/2022 Chris: It's beautiful</li>
    <li>02/11/2022 Hazel: I really like this one!</li>
    </ul>
    </div>
    <form>
    <h3 id='com-head'>Add comment</h3>
        <input type="text" class="input" id="name" placeholder="your name">
        <textarea name="insight" class="input" id="insight" cols="30" rows="10" placeholder="your insights"></textarea>
        <button type="button" class='com-btn'>Comment</button>
    </form>
</div>    
    `;

  commentModal.classList.toggle('active');
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    commentModal.classList.remove('active');
  });
};

module.exports = popup;