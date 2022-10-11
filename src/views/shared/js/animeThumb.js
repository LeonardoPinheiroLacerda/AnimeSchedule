const modalAddToList = new bootstrap.Modal('#add-my-list', {});

function renderAnimeThumb(container, obj) {
    //Por algum motivo a pesquisa trás alguns resultados inválidos com essa imagem
    if(obj.images.jpg.image_url === 'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png') return;

    container.innerHTML += `

        <div id="anime-${obj.mal_id}" class="thumb bg-primary rounded p-2 gap-2 d-flex flex-column position-relative justify-content-center align-items-center overflow-hidden" onclick="openModal(${obj.mal_id})">
            <img src="${obj.images.jpg.image_url}">
            <div class="thumb-body position-absolute start-0 end-0 top-0 bottom-0 bg-primary opacity-0 p-3 overflow-auto">
                <h6 class="text-center text-light mb-1">${obj.title}</h6>
                <hr class="text-light">
                <div>
                    ${obj.genres.reduce((previous, current) => {
                        return previous += `<span class="badge rounded-pill text-bg-light">${current.name}</span>`
                    }, '')}
                </div>

                <hr class="text-light">

                ${
                    obj.aired.from != undefined ?    
                        `<text class="text-light">${(
                            () => {
                                const from = new Date(obj.aired.from);
                                return "<b>Released at: </b>" + from.toDateString().substring(4);
                            }
                        )()}</text>

                        <hr class="text-light"></hr>`
                    : ''
                }


                ${
                    obj.score != null ?
                        `<div class="d-flex flex-row align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-light me-1" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>

                            <text class="text-light me-2">${obj.score}</text>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill text-light me-1" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>

                            <text class="text-light me-2">${(
                                () => {
                                    const scoredBy = obj.scored_by.toLocaleString('en');
                                    return scoredBy;
                                }
                            )()}</text>
                        </div>

                        <hr class="text-light">`
                    : ''
                }

                ${
                    obj.studios.length != 0 ?
                        `<div class="d-flex w-100 flex-wrap align-items-center">
                            <h6 class="text-light me-1">Studio:</h6>
                            ${obj.studios.reduce((previous, current) => {
                                return previous += `<span class="badge rounded-pill text-bg-light">${current.name}</span>`
                            }, '')}
                        </div>`
                    : ''
                }

                ${
                    obj.source != undefined ?
                        `<div class="d-flex w-100 flex-wrap align-items-center">
                            <h6 class="text-light me-1">Source:</h6>
                            <span class="badge rounded-pill text-bg-light">${obj.source}</span>
                        </div>`
                    : ''
                }

                ${
                    obj.demographics.length != 0 ?
                        `<div class="d-flex w-100 flex-wrap align-items-center">
                            <h6 class="text-light me-1">Demografic:</h6>
                            ${obj.demographics.reduce((previous, current) => {
                                return previous += `<span class="badge rounded-pill text-bg-light">${current.name}</span>`
                            }, '')}
                        </div>`
                    : ''
                }

                <hr class="text-light">

                <p class="text-light">${obj.synopsis}</p>
            </div>
        </div>
        
    `;


    
}

function clearRendererAnimesThumb(container){
    container.innerHTML = '';
}

function openModal(id) {
    getAnimeById(id).then((anime) => {
        document.querySelector('#modal-title').innerHTML = anime.data.title;
        document.querySelector('#modal-body').innerHTML = `Do you want to add ${anime.data.title} to which list?`;
        document.querySelector('#add-my-list').setAttribute('anime_id', id);
        modalAddToList.show();
    });
}