"use strict";
let relTopics = document.querySelector('.list-container');
let resultList = document.querySelector('.result-list-container');
console.log(resultList);
const loadMoreSection = document.querySelector('.load-more-section');
const search = document.querySelector('#search')
//console.log(loadMoreSection);
function displaySearchModal(){
    search.classList.toggle('search')
};
function closeSearchModal() {
    search.classList.toggle('search')
}
function Topics(topic, subtopic, img){
    this.topic = topic;
    this.subtopic = subtopic;
    this.img = img
}
let topic1 = new Topics(
    'Content & Display pattern with Expressive CSS',
    'content-display-patterns-expressive-css',

);
let topic2 = new Topics(
    'More code review tools (on Github)',
    'code-review-tools',
);
let topic3 = new Topics(
    'Resolution Independent Pixel Illustration',
    'resolution-independent-pixel-illustration',
);
let topic4 = new Topics(
    'What is the deal with declaring font properties on @font-face',
    'resolution-independent-pixel-illustration',
    'asset/images/svg/images/font-face-usage.png'
);
let topic5 = new Topics(
    '#147:Starting a React-Powered Comment Form',
    'video-screencast>147-starting-react-powered-comment-form',
);
let topic6 = new Topics(
    'Comic Book FX Lettering with SVG Filters',
    'comic-book-fx-lettering-svg-filters',
);
let topic7 = new Topics(
    "So You'd Like To Translate a CSS-Tricks Article",
    'translate-an-article',
);
let topic8 = new Topics(
    'Accessible,Simple,Responsive Table',
    'accessible-simple-responsive-table',
    'asset/images/svg/images/comparison-tables.jpg'
);
let topic9 = new Topics(
    "Leveling Up With ReactContainer Component",
    'learning-react-container-components',
);
let topic10 = new Topics(
    "Progressive Web Apps: The Long Game",
    'progressive-web-apps-long-game',
);
let topic11 = new Topics(
    "Using Web Fonts at All:Point/Counterpoint",
    'content-display-patterns-expressive-css',
);
let relevantTopics = [topic11, topic10, topic9,topic8,topic7,topic6,topic5,topic4, topic3, topic2, topic1];
const displayReview = function(arr) {
    //relTopics.innerHTML = '';
    arr.forEach(item => {
        const type = item.img ? `<img class="" src="${item.img}" style="width: 128px;height: 128px;">` : '';
        let html = `
            <li>
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
                    <a href="#" class="">
                        ${type}
                    </a>
                </div>
            </li>
        `;
        relTopics.insertAdjacentHTML("afterbegin", html);
    });
};
displayReview(relevantTopics);
let load = function(parameter){
    parameter.forEach(function(item){
        let htm = `
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
        `
        resultList.insertAdjacentHTML("afterbegin",htm);
    })
}
let Load = [topic1, topic1, topic1, topic1, topic1, topic1, topic1]
load(Load)
relTopics.insertAdjacentHTML("beforeend", loadMoreSection);

let mailPoet = {
    img: 'asset/images/svg/images/paid-subscription-newsletter-thumbnail.png',
    alt: 'Thumbnail for #211: Building a Paid Subscription Newsletter with MailPoet + WooCommerce + WordPress',
    title: '#211 Building a Paid Subscription Newsletter with MailPoet + WooCommerce + WordPress',
    date: 'Aug 23, 2021',
    time: 'Running Time: 31:26',
    paragraph: `
        With <a href="">MailPoet</a> and <a href="">WooCommerce,</a> we can
        build <a href="">a paid subscription newsletter</a> into a
        <a href="">WordPress</a> website. Our only costs are
        transaction fees, whatever WordPress hosting
        we might need, and a yearly fee for
        WooCommerce Subscriptions, making it a very
        cost-friendly …
    `,
    viewMore: 'WATCH THE SCREENCASTS'
};
let astro = {
    img: 'asset/images/svg/images/astro-thumbnail.png',
    alt: 'Thumbnail for #210: Yapping About Astro',
    title: '#210 Yapping About Astro',
    date: 'Aug 13, 2021',
    time: 'Running Time: 26:28',
    paragraph: `
        I think Astro is a pretty cool bit of technology for building websites!
        Should we call it a framework? We’ll get into that in the video. How can 
        we call it a framework if it asks you to “bring your …
    `,
    viewMore: 'WATCH THE SCREENCASTS'
};
let netflixClone = {
    img: 'asset/images/svg/images/astro-thumbnail.png',
    alt: 'Thumbnail for #209: A Netflix Clone with DataStax Astra and Netlify',
    title: '#209 A Netflix Clone with DataStax Astra and Netlify',
    date: 'Aug 6, 2021',
    time: 'Running Time: 50:53',
    paragraph: `
        I paired up with <a href="#">David Jones-Gilardi</a> of DataStax to go through 
        <a href="#">one of the workshops</a> they have put together (with <a href="#">Ania Kubów,</a> 
        who has <a href="#">a video </a>you should watch as well) that does a good job
        of showcasing how …
    `,
    viewMore: 'WATCH THE SCREENCASTS'
};
let articleGrid = document.querySelector('.article-grid')
let screencast = [mailPoet, astro, netflixClone];
function screenCast(arr){
    articleGrid.innerHTML = ''
    arr.forEach(function(item){
        let html = `
            <article>
                <a href="" class="links">
                    <img width="1280" height="780" class="video-thumbnail" src="${item.img}" alt="${item.alt}">
                </a>
                <div class="video-info">
                    <h2>
                        <a href="#" class="links">${item.title}</a>
                    </h2>
                    <div class="guide-time">
                        <p>${item.date}</p>
                        <p>${item.time}</p>
                    </div>
                    <div class="guide-excerpt">
                        <p>
                        ${item.paragraph}
                        </p>
                    </div>
                    <a href="#" class="button links">
                    ${item.viewMore}
                    </a>
                </div>
            </article>
        `
        articleGrid.insertAdjacentHTML("beforeend", html)
    })
};
screenCast(screencast)

// let widgetSearchContainer = document.querySelector('.widget-search-container');
// let postType = {
//     name: 'Post type',
//     opt1: 'Post(6319)',
//     opt2: 'Page(1608)',
//     opt3: 'Newsletter',
//     opt4: 'Chapter(20)',
// };
// let Categories = {
//     name: 'Categories',
//     opt1: 'Article(4687)',
//     opt2: 'Link(1973)',
//     opt3: 'Sponsored(302)',
//     opt4: 'Poll(101))',
//     opt5: 'Intermediate(62)'
// };
// let Tags = {
//     name: 'Tags',
//     opt1: 'SVG(206)',
//     opt2: 'WordPress(165)',
//     opt3: 'Accessibility(160)',
//     opt4: 'Performance(154))',
//     opt5: 'React(147)'
// };
// let Year = {
//     name: 'Year',
//     opt1: '2023(34)',
//     opt2: '2022(324)',
//     opt3: '2021(829)',
//     opt4: '2020(987))',
//     opt5: '2019(808)',
// };
// let filterOption = [postType, Categories, Tags, Year]
// function filter(arr){
//     arr.forEach(function(item){
//         let html = `
//         <div class="widget-search">
//             <h3>${item.name}</h3>
//             <div class="">
//                 <div class="">
//                     <input type="checkbox" name="post" id="">
//                     <label for="post">${item.opt1}</label>
//                 </div>
//                 <div class="">
//                     <input type="checkbox" name="post" id="post">
//                     <label for="post">${item.opt4}</label>
//                 </div>
//                 <div class="">
//                     <input type="checkbox" name="post" id="post">
//                     <label for="post">${item.opt3}</label>
//                 </div>
//                 <div class="">
//                     <input type="checkbox" name="post" id="post">
//                     <label for="post">${item.opt2}</label>
//                 </div>
//                 <div class="">
//                     <input type="checkbox" name="post" id="post">
//                     <label for="post">${item.opt5}</label>
//                 </div>
//             </div>
//         </div>
//         `
//         widgetSearchContainer.insertAdjacentHTML("beforeend",html)
//     })
// };
// filter(filterOption);