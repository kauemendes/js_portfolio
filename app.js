const videosContainer = document.getElementById('videoContainer');
const videoIdInput = document.getElementById("videoId");
let youTubeVideoIds = [];

const loadVideos = () => {
  youTubeVideoIds = JSON.parse(localStorage.getItem("youTubeVideoIds")) || [];
}

const displayVideos = () => {
  const videosHTMLStrings = youTubeVideoIds.map(id => `
    <li onclick="clickVideo(event, '${id}')">
      <img class="thumbnail" src="https://i3.ytimg.com/vi/${id}/sddefault.jpg" alt="Cover image for Youtube Video with id ${id}">
      <button class="delete-btn"> &times;</button>
    </li>
  `).join("");
  videosContainer.innerHTML = videosHTMLStrings;
}

const saveVideo = (e) => {
  e.preventDefault();
  const videoId = videoIdInput.value;
  youTubeVideoIds.unshift(videoId);
  videoIdInput.value = "";
  localStorage.setItem("youTubeVideoIds", JSON.stringify(youTubeVideoIds));
  displayVideos();
}

loadVideos()
displayVideos()