function renderPaginator(container, pagination, q) {
    container.innerHTML += `
        <nav class="w-100 d-flex justify-content-center my-3">
            <ul class="pagination">
                <li id="previous" class="page-item ${pagination.current_page !== 1 ? '' : 'disabled'}"><button class="page-link">Previous</button></li>
                <li class="page-item"><button class="page-link">${pagination.current_page}</button></li>
                <li id="next" class="page-item ${pagination.has_next_page === true ? '' : 'disabled'}"><button class="page-link">Next</button></li>
            </ul>
        </nav>
    `;

    const previous = document.querySelector('#previous');
    const next = document.querySelector('#next');

    previous.addEventListener('click', (e) => {
        if(e.target.classList.contains('disabled')) return;
        q.page -= 1;
        search(q, container);
    });

    next.addEventListener('click', (e) => {
        if(e.target.classList.contains('disabled')) return;
        q.page += 1;
        search(q, container);
    });
}

function search(query, container) {

    const {type, rating, status, q, page} = query;

    searchAnime(q, type, rating, status, page).then(({data, pagination}) => {
        clearRendererAnimesThumb(container);

        data.forEach(anime => {
            renderAnimeThumb(container, anime)
        });

        renderPaginator(container, pagination, {q, type, rating, status, page});
    });

}