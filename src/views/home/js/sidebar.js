const btnSearch  = document.querySelector('#btn-search');
const btnSeasons = document.querySelector('#btn-seasons');
const btnMyLists = document.querySelector('#btn-my-lists');

const content = document.querySelector('#content');

let actualTab;

function focusSidebarButton(button){
    const activeClass = 'active';

    button.classList.add(activeClass);

    if(btnSearch != button) btnSearch.classList.remove(activeClass);
    if(btnSeasons != button) btnSeasons.classList.remove(activeClass);
    if(btnMyLists != button) btnMyLists.classList.remove(activeClass);
}

function openSearch(){
    if(actualTab === 1) return;
    actualTab = 1;
    focusSidebarButton(btnSearch);
    renderSearch(content);
}

function openSeasons() {
    if(actualTab === 2) return;
    actualTab = 2;
    focusSidebarButton(btnSeasons);
}

function openMyLists() {
    if(actualTab === 3) return;
    actualTab = 3;
    focusSidebarButton(btnMyLists);
}


openSearch();