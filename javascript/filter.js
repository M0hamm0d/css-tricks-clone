//search filter
let searchFilter = () => {
    let input = document.getElementById('searchPopularResult').value.toUpperCase();
    //const relTopics = document.querySelector('.list-container');
    let li = relTopics.getElementsByTagName('li');
    //console.log(li);
    for (let i = 0; i < li.length; i++) {
        const el = li[i].getElementsByTagName('h3')[0];
        let textValue = el.textContent || a.innerText;
        if (textValue.toUpperCase().indexOf(input) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
        }
        //console.log(el);
    }; 
};
searchFilter();