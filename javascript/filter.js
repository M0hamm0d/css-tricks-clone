function screenCastSample(arr) {
  articleGrid.innerHTML = "";
  arr.forEach(function (item) {
    let htmL = document.createElement("article");
    let anchorTag = htmL.appendChild(document.createElement("a"));
    anchorTag.className = "links";
    let img = anchorTag.appendChild(document.createElement("img"));
    img.src = `${item.img}`;
    img.width = 1280;
    img.height = 780;
    img.alt = `${item.alt}`;
    let anchorTagNextSibling = htmL.appendChild(document.createElement("div"));
    anchorTagNextSibling.className = "video-info";
    anchorTagNextSibling.appendChild(
      document.createElement("h2")
    ).innerHTML = `${item.title}`;
    let guideTime = anchorTagNextSibling.appendChild(
      document.createElement("div")
    );
    guideTime.className = "guide-time";
    guideTime.appendChild(
      document.createElement("p")
    ).innerHTML = `${item.date}`;
    guideTime.appendChild(
      document.createElement("p")
    ).innerHTML = `${item.time}`;
    let guideExerpt = anchorTagNextSibling.appendChild(
      document.createElement("div")
    );
    guideExerpt.className = "guide-excerpt";
    guideExerpt.appendChild(
      document.createElement("p")
    ).innerHTML = `${item.paragraph}`;
    let viewMoreButton = anchorTagNextSibling.appendChild(
      document.createElement("a")
    );
    viewMoreButton.className = "links button";
    viewMoreButton.appendChild(
      document.createElement("p")
    ).innerHTML = `${item.viewMore}`;
    articleGrid.append(htmL);
  });
}
const displayReview = function (arr) {
  arr.forEach((item) => {
    const type = item.img
      ? `<img class="" src="${item.img}" style="width: 128px;height: 128px;">`
      : "";
    let html = `
            <li>
                <div class="result-list">
                    <div class="result-list-inner">
                        <h3 class="h3">
                            <a href="#" class="">
                                ${item.topic}
                            </a>
                        </h3>
                        <div class="">
                            <a href="">
                            ${item.subtopic}
                            </a>
                        </div>
                    </div>
                    <a href="#" class="">
                        ${type}
                    </a>
                </div>
            </li>
        `;
    relTopics.insertAdjacentHTML("afterbegin", html);
  });
};
let searchFilter = () => {
  let input = document
    .getElementById("searchPopularResult")
    .value.toUpperCase();
  let list = relTopics.getElementsByTagName("li");
  for (let i = 0; i < list.length; i++) {
    let textValue = list[i].getElementsByTagName("h3")[0].innerText;
    if (textValue.toUpperCase().indexOf(inputFilter) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
};
for (let i = 0; i < getArticle.length; i++) {
  console.log(getArticle[i]);
}

function screenCast(arr) {
  articleGrid.innerHTML = "";
  arr.forEach(function (item) {
    let html = `
            <article>
                <a>
                    <img width="1280" height="780" class="video-thumbnail" src="${item.img}" alt="${item.alt}">
                </a>
                <div>
                    <h2>
                        <a>${item.title}</a>
                    </h2>
                    <div class="guide-time">
                        <p>${item.date}</p>
                        <p>${item.time}</p>
                    </div>
                    <div class="">
                        <p>
                        ${item.paragraph}
                        </p>
                    </div>
                    <a>
                    ${item.viewMore}
                    </a>
                </div>
            </article>
        `;
    articleGrid.insertAdjacentHTML("beforeend", html);
  });
}
