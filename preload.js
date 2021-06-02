const dataUrl = 'http://localhost:8888/data/data.json';

const render = (data) => {
  const { currentEventId, events } = data;
  const container = document.querySelector('.events');
  const currentEventEl = document.querySelector('.current-event');

  events.forEach((event) => {
    const { id, type, date, location, participants } = event;
    const eventEl = document.createElement('div');

    const typeEl = document.createElement('div');
    typeEl.innerText = type;
    typeEl.setAttribute('class', "event-type");
    typeEl.setAttribute('id', type);

    const detailsEl = document.createElement('div');
    detailsEl.innerHTML = `${date}${location ? ` - ${location}` : ''}`;
    detailsEl.setAttribute('class', "event-details");

    const participantsEl = document.createElement('div');
    participantsEl.innerHTML = `${participants.join(', ')}`;
    participantsEl.setAttribute('class', "event-participants");

    eventEl.append(typeEl, detailsEl, participantsEl);
    eventEl.setAttribute('class', 'event');

    container.appendChild(eventEl);

    if (id === currentEventId) {
      currentEventEl.appendChild(eventEl);
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  fetch(dataUrl)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => render(data))
    .catch(console.error);
});