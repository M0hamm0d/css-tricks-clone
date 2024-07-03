//search filter
let searchFilter = () => {
    let input = document.getElementById('searchPopularResult').value.toUpperCase();
    //const relTopics = document.querySelector('.list-container');
    let list = relTopics.getElementsByTagName('li');
    //console.log(li);
    for (let i = 0; i < list.length; i++){
        let textValue = list[i].getElementsByTagName('h3')[0].innerText;
        if(textValue.toUpperCase().indexOf(inputFilter) > -1){
            list[i].style.display = ''
        } else {
            list[i].style.display = 'none'
        }
    };
};
for (let i = 0; i < getArticle.length; i++){
    console.log(getArticle[i]);
}
//searchFilter();