let currentPostIndex = 0; // Индекс текущего поста

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const postList = document.getElementById('postList');
      postList.innerHTML = ''; // Очистить список перед добавлением новых элементов
      const listItem = document.createElement('li');
      listItem.textContent = `userId: ${data[currentPostIndex].userId}, id: ${data[currentPostIndex].id}, title: ${data[currentPostIndex].title}, body: ${data[currentPostIndex].body}`;
      postList.appendChild(listItem);
    });
}

function getNextPost() {
  currentPostIndex++;
  getPosts();
}