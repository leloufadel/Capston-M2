import './style.css';
// API_KEY = '40xQQTkeHEs9D9wNQTQX0YGfyh2aoT-w';

const fetchAPI = async () => {
  const baseURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(baseURL);
  const data = await response.json();
  const shows = data.slice(0, 15); // Limit to shows

  // Display the show list in the HTML
  const showListContainer = document.getElementById('show-list');
  shows.forEach((show) => {
    const showTitle = show.name;
    const showImage = show.image.medium;

    const listItem = document.createElement('li');
    // listItem.classList.add('shows-movie');
    listItem.innerHTML = `
     
      <img src="${showImage}" alt="${showTitle}">
      <h2 class="title">${showTitle}</h2>
      <div class="interact">
      <button class="comments">comment</button>
      <div>
      <div>
        <i class="like fa-regular fa-heart" data-show-id="${show.name}"></i>
        <span class="likes" data-shows-id="${show.name}"></span>
          </div>
      <hr>
    `;
    const likeButton = listItem.querySelector('.like');
    const likesCounter = listItem.querySelector('.likes');

    let likesCount = 0;

    likeButton.addEventListener('click', () => {
      likesCount++;
      likesCounter.textContent = likesCount;
    });

    showListContainer.appendChild(listItem);
  });
};


fetchAPI().catch((error) => console.log(error));
