function renderSearch(container){
    
    container.innerHTML = `
        <div class="d-flex flex-row p-3 gap-3">
            <input id="search-field" type="text" class="form-control w-100" name="search-field" placeholder="anime">
            <button id="search-btn" class="btn btn-primary">Search</button>
        </div>
        <div>
            <div class="filters p-0 overflow-hidden" id="filters">

                <label class="text-light mx-3 my-3 mb-1">Type</label>
                <div class="d-flex flex-row mx-3">

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="type" id="type-any" value="any">
                        <label class="form-check-label text-light" for="type-any">
                            Any
                        </label>
                    </div>

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="type" id="type-tv" value="tv" checked>
                        <label class="form-check-label text-light" for="type-tv">
                            TV
                        </label>
                    </div>

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="type" id="type-movie" value="movie">
                        <label class="form-check-label text-light" for="type-movie">
                            Movie
                        </label>
                    </div>

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="type" id="type-ova" value="ova">
                        <label class="form-check-label text-light" for="type-ova">
                            OVA
                        </label>
                    </div>

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="type" id="type-special" value="special">
                        <label class="form-check-label text-light" for="type-special">
                            Special
                        </label>
                    </div>

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="type" id="type-ona" value="ona">
                        <label class="form-check-label text-light" for="type-ona">
                            ONA
                        </label>
                    </div>
                </div>





                <label class="text-light mx-3 my-3 mb-1">Status</label>
                <div class="d-flex flex-row mx-3">

                <div class="form-check mx-1">
                    <input class="form-check-input" type="radio" name="status" id="status-any" value="any" checked>
                        <label class="form-check-label text-light" for="status-any">
                            Any
                        </label>
                    </div>

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="status" id="status-airing" value="airing">
                        <label class="form-check-label text-light" for="status-airing">
                            Airing
                        </label>
                    </div>

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="status" id="status-complete" value="complete">
                        <label class="form-check-label text-light" for="status-complete">
                            Complete
                        </label>
                    </div>

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="status" id="status-upcoming" value="upcoming">
                        <label class="form-check-label text-light" for="status-upcoming">
                            Upcoming
                        </label>
                    </div>

                </div>


                <label class="text-light mx-3 my-3 mb-1">Rating</label>
                <div class="d-flex flex-row mx-3 mb-3">

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="rating" id="rating-any" value="any" checked>
                            <label class="form-check-label text-light" for="rating-any">
                                Any
                            </label>
                    </div>

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="rating" id="rating-g" value="g">
                            <label class="form-check-label text-light" for="rating-g">
                                G
                            </label>
                    </div>

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="rating" id="rating-pg" value="pg">
                            <label class="form-check-label text-light" for="rating-pg">
                                PG
                            </label>
                    </div>

                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="rating" id="rating-pg13" value="pg13">
                            <label class="form-check-label text-light" for="rating-pg13">
                                PG-13
                            </label>
                    </div>
                    
                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="rating" id="rating-r17" value="r17">
                            <label class="form-check-label text-light" for="rating-r17">
                                R
                            </label>
                    </div>
                    
                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="rating" id="rating-r+" value="r">
                            <label class="form-check-label text-light" for="rating-r+">
                                R+
                            </label>
                    </div>
                    
                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name="rating" id="rating-rx" value="rx">
                            <label class="form-check-label text-light" for="rating-rx">
                                Rx
                            </label>
                    </div> 

                </div>

            </div>
            <button class="btn btn-secondary w-100 square-element" id="filter-collapse-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>    
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



    function search(q, page = 1) {

        const type = document.querySelector('input[name="type"]:checked').value;
        const status = document.querySelector('input[name="status"]:checked').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;

        showSpinner();

        searchAnime(q, type, rating, status, page).then(({data, pagination}) => {
            clearRendererAnimesThumb(animesContainer);

            data.forEach(anime => {
                renderAnimeThumb(animesContainer, anime)
            });

            renderPaginator(animesContainer, pagination, {q, type, rating, status, page});

            hideSpinner();
        })
    }


    const filterCollapseButton = document.querySelector('#filter-collapse-button');
    const filterCollapse = document.querySelector('#filters');

    filterCollapseButton.addEventListener('click', () => {
        filterCollapse.classList.toggle('collapsed');
        filterCollapseButton.classList.toggle('collapsed');
    });

}
