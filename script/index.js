// element selection
const tabsList = document.querySelector('.tabs--selector__list');


const bookmarkTab = document.querySelector('.bookmark--tab');
const intelligentSearchTab = document.querySelector('.intelligent--search__tab');
const shareBookmarsTab = document.querySelector('.share--bookmarks__tab');


const selectorsArray = Array.from(tabsList.children);



// global state
let activeTab = 0;


// tab selection lisenter
selectorsArray.forEach((element, index, arr) => {
    element.addEventListener('click', () => {

        let activeTab = index
        

        if (activeTab === 0) {
            bookmarkTab.classList.add('active');
            intelligentSearchTab.classList.remove('active');
            shareBookmarsTab.classList.remove('active');
            index === activeTab && element.classList.add('active');

            arr[1].classList.remove('active');
            arr[2].classList.remove('active');


        } else if(activeTab === 1) {
            intelligentSearchTab.classList.add('active');
            shareBookmarsTab.classList.remove('active');
            bookmarkTab.classList.remove('active');
            index === activeTab && element.classList.add('active');

            arr[0].classList.remove('active');
            arr[2].classList.remove('active');



        } else if(activeTab === 2) {
            shareBookmarsTab.classList.add('active');
            intelligentSearchTab.classList.remove('active');
            bookmarkTab.classList.remove('active');
            index === activeTab && element.classList.add('active');

            arr[0].classList.remove('active');
            arr[1].classList.remove('active');

        }



    })


    bookmarkTab.classList.add('active');
})