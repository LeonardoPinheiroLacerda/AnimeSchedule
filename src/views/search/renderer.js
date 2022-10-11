function renderSearch(container){
    
    container.innerHTML = `
        <div class="d-flex flex-row p-3 gap-3">
            <input id="search-field" type="text" class="form-control w-100" name="search-field" placeholder="anime">
            <button id="search-btn" class="btn btn-primary">Search</button>
        </div>
        <div class="d-flex flex-row flex-wrap gap-3 p-3" id="animes">
        </div>
    `;

    const field = document.querySelector('#search-field');
    const button = document.querySelector('#search-btn');
    const animesContainer = document.querySelector('#animes');

    button.addEventListener('click', () => {
        search(field.value);
    });

    field.addEventListener('keyup', (e) => {
        if(e.key === 'Enter') search(field.value);
    });



    function search(q) {
        searchAnime(q).then(({data}) => {
            clearRendererAnimesThumb(animesContainer);

            data.forEach(anime => {
                renderAnimeThumb(animesContainer, anime)
            })
        })
    }

}
