"use strict";
const relTopics = document.querySelector(".list-container");
const resultList = document.querySelector(".result-list-container");
const loadMoreSection = document.querySelector(".load-more-section");
const search = document.querySelector("#search");
function displaySearchModal() {
  search.classList.toggle("search");
}
function closeSearchModal() {
  search.classList.toggle("search");
}
console.log(relTopics);
let contentDisplay = {
  topic: "Content & Display pattern with Expressive CSS",
  subtopic: "content-display-patterns-expressive-css",
};
let codeReview = {
  topic: "More code review tools (on Github)",
  subtopic: "code-review-tools",
};
let pixelIllustration = {
  topic: "Resolution Independent Pixel Illustration",
  subtopic: "resolution-independent-pixel-illustration",
};
let fontFace = {
  topic: "What is the deal with declaring font properties on @font-face",
  subtopic: "resolution-independent-pixel-illustration",
  img: "asset/images/svg/images/font-face-usage.png",
};
let commentForm = {
  topic: "#147:Starting a React-Powered Comment Form",
  subtopic: "video-screencast>147-starting-react-powered-comment-form",
};
let svgFilter = {
  topic: "Comic Book FX Lettering with SVG Filters",
  subtopic: "comic-book-fx-lettering-svg-filters",
};
let transArticle = {
  topic: "So You'd Like To Translate a CSS-Tricks Article",
  subtopic: "translate-an-article",
};
let responsiveTable = {
  topic: "Accessible,Simple,Responsive Table",
  subtopic: "accessible-simple-responsive-table",
  img: "asset/images/svg/images/comparison-tables.jpg",
};
let ReactContainer = {
  topic: "Leveling Up With ReactContainer Component",
  subtopic: "learning-react-container-components",
};
let webApp = {
  topic: "Progressive Web Apps: The Long Game",
  subtopic: "progressive-web-apps-long-game",
};
let webFont = {
  topic: "Using Web Fonts at All:Point/Counterpoint",
  subtopic: "content-display-patterns-expressive-css",
};
let inputFilter = document
  .getElementById("searchPopularResult")
  .value.toUpperCase();
let relevantTopics = [
  webFont,
  webApp,
  ReactContainer,
  responsiveTable,
  transArticle,
  svgFilter,
  commentForm,
  fontFace,
  pixelIllustration,
  codeReview,
  contentDisplay,
];

function filterByValue() {
  let inputFilter = document
    .getElementById("searchPopularResult")
    .value.toUpperCase();
  let rel = relevantTopics.filter((item) => {
    if (item.topic.toUpperCase().indexOf(inputFilter) > -1) {
      return true;
    } else false;
  });
  console.log(rel);
  relTopics.innerHTML = "";
  rel.forEach((item) => {
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
  relTopics.appendChild(loadMoreSection);
}
filterByValue();

let loadMore = function (parameter) {
  parameter.forEach(function (item) {
    let html = `
        <li class="">
            <div class="result-list">
                <div class="result-list-inner">
                    <h3>
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
            </div>
        </li>
        `;
    resultList.insertAdjacentHTML("afterbegin", html);
  });
  console.log(loadMoreSection);
};
let loadMoreInner = [
  contentDisplay,
  contentDisplay,
  contentDisplay,
  contentDisplay,
  contentDisplay,
  contentDisplay,
  contentDisplay,
];
loadMore(loadMoreInner);
let searchPopularResult = document.querySelector("#searchPopularResult");

let subPost = document.querySelector(".sub-post");
let subTag = document.querySelector(".sub-tags");
let subCategory = document.querySelector(".sub-categories");
let subYear = document.querySelector(".sub-year");
let svg = {
  labelName: "SVG (206)",
};
let wordpress = {
  labelName: "wordPress (165)",
};
let accessibility = {
  labelName: "Accessibility (160)",
};
let performance = {
  labelName: "Performance (154)",
};
let react = {
  labelName: "React (147)",
};

let post = {
  labelName: "Post (6319)",
};
let page = {
  labelName: "Page (1608)",
};
let newsletter = {
  labelName: "Newsletter (304)",
};
let chapter = {
  labelName: "Chapter (20)",
};

let article = {
  labelName: "Article (4687)",
};
let link = {
  labelName: "Link (1973)",
};
let sponsor = {
  labelName: "Sponsor (302)",
};
let poll = {
  labelName: "Poll (101)",
};
let intermediate = {
  labelName: "Intermediate (62)",
};

let Year5 = {
  labelName: "2023 (34)",
};
let Year4 = {
  labelName: "2022 (324)",
};
let Year3 = {
  labelName: "2021 (829)",
};
let Year2 = {
  labelName: "2020 (987)",
};
let Year1 = {
  labelName: "2019 (808)",
};

let posts = [post, page, newsletter, chapter];
let tags = [svg, wordpress, accessibility, performance, react];
let categories = [article, link, sponsor, poll, intermediate];
let years = [Year1, Year2, Year3, Year4, Year5];
function subTags(arr, arr1, arr2, arr3) {
  subTag.innerHTML = "";
  subPost.innerHTML = "";
  subCategory.innerHTML = "";
  subYear.innerHTML = "";
  arr.forEach(function (item) {
    let idName = item.labelName.split(" ").slice(0, 1);
    let html = `
        <div class="">
            <input type="checkbox" name="post" id="${idName}">
            <label for="${idName}">${item.labelName}</label>
        </div>
        `;
    subTag.insertAdjacentHTML("beforeend", html);
  });
  arr1.forEach(function (item) {
    let idName = item.labelName.split(" ").slice(0, 1);
    let html = `
        <div class="">
            <input type="checkbox" name="post" id="${idName}">
            <label for="${idName}">${item.labelName}</label>
        </div>
        `;
    subPost.insertAdjacentHTML("beforeend", html);
  });
  arr2.forEach(function (item) {
    let idName = item.labelName.split(" ").slice(0, 1);
    let html = `
        <div class="">
            <input type="checkbox" name="post" id="${idName}">
            <label for="${idName}">${item.labelName}</label>
        </div>
        `;
    subCategory.insertAdjacentHTML("beforeend", html);
  });
  arr3.forEach(function (item) {
    let idName = item.labelName.split(" ").slice(0, 1);
    let html = `
        <div class="">
            <input type="checkbox" name="post" id="${idName}">
            <label for="${idName}">${item.labelName}</label>
        </div>
        `;
    subYear.insertAdjacentHTML("beforeend", html);
  });
}
subTags(tags, posts, categories, years);

let viewMore = {
  viewFullPage: "WATCH THE SCREENCASTS",
};
//let viewMore = 'WATCH THE SCREENCASTS'
//Landing Page
//Just for practice first
const mailPoet = {
  img: "asset/images/svg/images/paid-subscription-newsletter-thumbnail.png",
  alt: "Thumbnail for #211: Building a Paid Subscription Newsletter with MailPoet + WooCommerce + WordPress",
  title:
    "#211 Building a Paid Subscription Newsletter with MailPoet + WooCommerce + WordPress",
  date: "Aug 23, 2021",
  time: "Running Time: 31:26",
  paragraph: `
        With <a href="">MailPoet</a> and <a href="">WooCommerce,</a> we can
        build <a href="">a paid subscription newsletter</a> into a
        <a href="">WordPress</a> website. Our only costs are
        transaction fees, whatever WordPress hosting
        we might need, and a yearly fee for
        WooCommerce Subscriptions, making it a very
        cost-friendly …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const astro = {
  img: "asset/images/svg/images/astro-thumbnail.png",
  alt: "Thumbnail for #210: Yapping About Astro",
  title: "#210 Yapping About Astro",
  date: "Aug 13, 2021",
  time: "Running Time: 26:28",
  paragraph: `
        I think Astro is a pretty cool bit of technology for building websites!
        Should we call it a framework? We’ll get into that in the video. How can 
        we call it a framework if it asks you to “bring your …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const netflixClone = {
  img: "asset/images/svg/images/netflix-thumbnail.png",
  alt: "Thumbnail for #209: A Netflix Clone with DataStax Astra and Netlify",
  title: "#209 A Netflix Clone with DataStax Astra and Netlify",
  date: "Aug 6, 2021",
  time: "Running Time: 50:53",
  paragraph: `
        I paired up with <a href="#">David Jones-Gilardi</a> of DataStax to go through 
        <a href="#">one of the workshops</a> they have put together (with <a href="#">Ania Kubów,</a> 
        who has <a href="#">a video </a>you should watch as well) that does a good job
        of showcasing how …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const gridLayout = {
  img: "asset/images/svg/images/layout-thumbnail.png",
  alt: "Thumbnail for #208: A CSS Grid Layout with Pictures Down One Side Matched Up with Paragraphs on the Other",
  title:
    "#208 A CSS Grid Layout with Pictures Down One Side Matched Up with Paragraphs on the Other",
  date: "Aug 23, 2021",
  time: "Running Time: 21:17",
  paragraph: `
        This is the video version of <a href="#"> a blog post we did</a> asking the question:
        How do you make a layout with pictures down one side of a page matched 
        up with paragraphs on the other side?It’s a satisfying answer because …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const WebPageTest = {
  img: "asset/images/svg/images/webpage-test.png",
  alt: "Thumbnail for #207: Performance Testing CSS-Tricks with WebPageTest",
  title: "#207 Performance Testing CSS-Tricks with WebPageTest",
  date: "Jul 23, 2021",
  time: "Running Time: 01:13:22",
  paragraph: `
        I get a hands-on performance review with <a href="#">Tim Kadlec</a> of <a href="#">WebPageTest!</a>
        This is a real honor as Tim
        is a real performance guru who knows WebPageTest in and out. I’m all about 
        <span>getting a little free consulting</span> helping y’all …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const nextJS = {
  img: "asset/images/svg/images/app-platform-thumbnail.png",
  alt: "Thumbnail for #206: Building a Data-Backed Next.js Site with Prisma &amp; App Platform",
  title: "#206 Building a Data-Backed Next.js Site with Prisma & App Platform",
  date: "Jul 12, 2021",
  time: "Running Time: 42:07",
  paragraph: `
        I’m joined by <a href="#">Chris Sev</a> from <a href="#"> Digital Ocean</a>
        to talk about their new <a href="#">App Platform.</a> We’re going to use it 
        to build a little website. The site will be blog-like:
        posts with IDs, titles, content, and the more dynamic …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const stickyPositioning = {
  img: "asset/images/svg/images/thumb-sticky.png",
  alt: "Thumbnail for #206: Building a Data-Backed Next.js Site with Prisma &amp; App Platform",
  title: "#205 Sticky Positioning",
  date: "Jul 9, 2021",
  time: "Running Time: 19:17",
  paragraph: `
        How it works <br>You apply <a href="#">position: sticky;</a> 
        to an element along with a top, left, right, or bottom threshold
        and it will “stick” in that position when the threshold is passed,
        as long as there is room …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const devTool = {
  img: "asset/images/svg/images/axe-thumbnail.png",
  alt: "Thumbnail for #206: Building a Data-Backed Next.js Site with Prisma &amp; App Platform",
  title: "#204 Using the axe DevTools Web Accessibility Testing Browser Plugin",
  date: "Mar 9, 2021",
  time: "Running Time: 31:40",
  paragraph: `
        In this video, I’m joined by <a href="#">Preety Kumar</a> of <a href="#">Deque</a> 
        to take a look at their <a href="#">DevTools plugin</a> for <a href="#">axe.</a> 
        Short story: this is an <i>amazing plugin</i> that helps you quickly find 
        accessibility problems on any website, <i>then helps …</i>
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const CloudFlare = {
  img: "asset/images/svg/images/site-thumbnail.png",
  alt: "Thumbnail for #206: Building a Data-Backed Next.js Site with Prisma &amp; App Platform",
  title: "#203 A First Look at Cloudflare Pages",
  date: "Nov 3, 2021",
  time: "Running Time: 29:58",
  paragraph: `
        <a href="#">Cloudflare Pages </a>is Jamstack hosting, meaning 
        it’s a static file host that runs your builds and lets you
        do <a href="#">dynamic things</a> with JavaScript and services.
        You might normally think of Cloudflare as something you 
        put in front of your site’s …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const listMaker = {
  img: "asset/images/svg/images/centered-list-markers-thumbnail.png",
  alt: "Thumbnail for #206: Building a Data-Backed Next.js Site with Prisma &amp; App Platform",
  title: "#202 Centered List Markers",
  date: "Jan 15, 2021",
  time: "Running Time: 10:13",
  paragraph: `
        Like so many things CSS, there is all sorts of little stuff to 
        know, even something as minuscule as centering a list marker.
        A reader wrote in with a screenshot of what they were trying
        to accomplish — basically an …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const booping = {
  img: "asset/images/svg/images/boop-thumbnail.png",
  alt: "Thumbnail for #206: Building a Data-Backed Next.js Site with Prisma &amp; App Platform",
  title: "#201 Doing Booping",
  date: "Dec 21, 2020",
  time: "Running Time: 15:42",
  paragraph: `
        Joshua Comeau crowd-coined the term <a href="#">“boop”</a> 
        (high five,<a href="#">Adam Kuhn</a> ). These are sorta like hover/focus states, 
        except that they aren’t. Your thingies — things like links, buttons, 
        etc. — should still have those states. A “boop” is a more …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const zoomSrolling = {
  img: "asset/images/svg/images/scroll-to-zoom-thumbnail.png",
  alt: "Thumbnail for #206: Building a Data-Backed Next.js Site with Prisma &amp; App Platform",
  title: "#200 Scroll to Zoom",
  date: "Dec 10, 2020",
  time: "Running Time: 10:05",
  paragraph: `
        Fair warning: you aren’t going to need this every day! 
        I just happened to be looking at <a href="#">a neat 
        little SVG warping tool</a> that had a feature where
        my mouse scroll wheel (or trackpad) could be used to zoom the …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
let jsx = {
  img: "asset/images/svg/images/jsx-thumbnail.png",
  alt: "Thumbnail for #206: Building a Data-Backed Next.js Site with Prisma &amp; App Platform",
  title: "#199 Messing with JSX",
  date: "Dec 11, 2020",
  time: "Running Time: 12:12",
  paragraph: `
        I probably should have learned this long ago, but alas, 
        here we are. Turns out you can tell what function you want 
        JSX to use. Yep, JSX really only has one primary transformation
        that it does. It turns angle brackets …
    `,
  viewMore: `${viewMore.viewFullPage}`,
};
const articleGrid = document.querySelector(".article-grid");
const screencast = [
  mailPoet,
  astro,
  netflixClone,
  gridLayout,
  WebPageTest,
  nextJS,
  stickyPositioning,
  devTool,
  CloudFlare,
  listMaker,
  booping,
  zoomSrolling,
  jsx,
];

screencast.forEach(function (item) {
  const htmL = document.createElement("article");
  const anchorTag = htmL.appendChild(document.createElement("a"));
  anchorTag.className = "links";
  const img = anchorTag.appendChild(document.createElement("img"));
  img.src = `${item.img}`;
  img.width = 1280;
  img.height = 780;
  img.alt = `${item.alt}`;
  let anchorTagNextSibling = htmL.appendChild(document.createElement("div"));
  anchorTagNextSibling.className = "video-info";
  anchorTagNextSibling.appendChild(
    document.createElement("h2")
  ).innerHTML = `${item.title}`;
  const guideTime = anchorTagNextSibling.appendChild(
    document.createElement("div")
  );
  guideTime.className = "guide-time";
  guideTime.appendChild(document.createElement("p")).innerHTML = `${item.date}`;
  guideTime.appendChild(document.createElement("p")).innerHTML = `${item.time}`;
  const guideExerpt = anchorTagNextSibling.appendChild(
    document.createElement("div")
  );
  guideExerpt.className = "guide-excerpt";
  guideExerpt.appendChild(
    document.createElement("p")
  ).innerHTML = `${item.paragraph}`;
  const viewMoreButton = anchorTagNextSibling.appendChild(
    document.createElement("a")
  );
  viewMoreButton.className = "links button";
  viewMoreButton.appendChild(
    document.createElement("p")
  ).innerHTML = `${item.viewMore}`;
  articleGrid.append(htmL);
});
const videoCards = document.querySelector(".video-card-container");
const aboutSvg = {
  img: "asset/images/svg/images/svg-fallback-guide.png",
  videoCourse: "Video Course (2015)",
  topics: "Everything You Need To Know About SVG",
  briefInfo: `Using SVG can be very simple, but if you
    start digging in, there is a lot to know about
    SVG. In his series you're going to learn why
    SVG is such an important part of building
    websites. From why SVG is useful and how
    to get your hands on it all the way to
    implementing it as a system and fancy stuff
    like animating it.`,
  linkToCourse: "GO TO COURSE →",
};
const jQuery = {
  img: "asset/images/svg/images/guide-jquery-thumbnail.png",
  videoCourse: "Video Course (2013)",
  topics: "Learn jQuery from Scratch",
  briefInfo: `
    This series will take you from zero to being confident in writing
    and working with jQuery and JavaScript.
    `,
  linkToCourse: "GO TO COURSE →",
};
const v10 = {
  img: "asset/images/svg/images/redisign-thumbnail.png",
  videoCourse: "Video Course (2010)",
  topics: "The Big v10 Redesign Project",
  briefInfo: `
    Over 150 videos detailing every step of the redesign process for this 
    very website, as it was in v10 in 2012.
    `,
  linkToCourse: "GO TO COURSE →",
};
const wordPressWebsite = {
  img: "asset/images/svg/images/artist-website-thumbnail.png",
  videoCourse: "Video Course (2015)",
  topics: "Building a Mobile-First WordPress-Powered Artists Website",
  briefInfo: `
    The complete process of designing an artist's
    website from a mobile-first perspective using WordPress as a CMS.
    `,
  linkToCourse: "GO TO COURSE →",
};
const videoCourses = [aboutSvg, jQuery, v10, wordPressWebsite];
function videoCardContainer(arr) {
  videoCards.innerHTML = "";
  arr.forEach(function (item) {
    let html = `
            <div class="video-card">
                <a href="#" class="video-thumb links">
                    <img class="guide-card-img" src="${item.img}" alt="">
                </a>
                <div class="video-info">
                    <div class="">
                        <span>${item.videoCourse}</span>
                    </div>
                    <h2><a href="#" class="links"> ${item.topics} </a></h2>
                    <p class="guide-excerpt">
                    ${item.briefInfo}
                    </p>
                    <a href="#" class="button links">
                    ${item.linkToCourse}
                    </a>
                </div>
            </div>
        `;
    console.log(html);
    videoCards.insertAdjacentHTML("beforeend", html);
  });
}
videoCardContainer(videoCourses);
