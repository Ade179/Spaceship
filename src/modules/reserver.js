
const getreserves = async (link) => {
    const response = await fetch(link);
    await response.json()
      .then((reserves) => {
        const table = document.getElementById('reservestable');
        table.replaceChildren();
        reserves.forEach((reserve) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
          ${reserve.creation_date}&nbsp&nbsp&nbsp&nbsp ${reserve.user}: &nbsp&nbsp ${reserve.startDate}: &nbsp&nbsp ${reserve.endDate}
      `;
          table.append(listItem);
        });
      })
      .catch((ex) => console.log('Fetch Exception', ex));
  };
  
  const addreserve = async (link, id, user, startDate, endDate) => {
    await fetch(link, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        user,
        startDate,
        endDate,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const url = new URL(link);
    const params = { item_id: id };
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    getreserves(url);
  };
  
  export { addreserve, getreserves as default };