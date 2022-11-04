const getcomments = async (link) => {
  const response = await fetch(link);
  await response.json()
    .then((comments) => {
      const table = document.getElementById('commentstable');
      table.replaceChildren();
      comments.forEach((comment) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        ${comment.creation_date}&nbsp&nbsp&nbsp&nbsp ${comment.username}: &nbsp&nbsp ${comment.comment}
    `;
        table.append(listItem);
      });
    })
    .catch((ex) => console.log('Fetch Exception', ex));
};

const addcomment = async (link, id, user, comment) => {
  await fetch(link, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const url = new URL(link);
  const params = { item_id: id };
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  getcomments(url);
};

const getLikes = async (link, id) => {
  const response = await fetch(link);
  await response.json()
    .then((likeness) => {
      const likeId = `${id}like`;
      const likeItem = document.getElementById(likeId);
      likeItem.replaceChildren();
      const liked = likeness.find((like) => like.item_id === id);
      likeItem.append(liked.likes);
    });
};

const addLikes = async (link, id) => {
  await fetch(link, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  getLikes(link, id);
};

export { addLikes, getcomments, addcomment as default };