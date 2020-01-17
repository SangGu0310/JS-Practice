$(function(){
    const $btnMovie = $('#movie');
    const $movieGroup = $('#movie-group');
    const $msg = $('#msg');

    $btnMovie.on({click : btnMovieClickHandler});

function btnMovieClickHandler(){
    $msg.removeClass('hide'); 
    getMovieList().then(printMovieList).catch();
} //then이 우리가 수행하는 success catch가 error

function getMovieList(){
   return $.ajax({
        url : 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
        type : 'get',
        dataType : 'json'
    });
}

function printMovieList(result){
    $msg.addClass('hide');
    let movies = result.data.movies;
    let $frag = $(document.createDocumentFragment()); // ajax로 받아서 다시 html로 뿌려줄때 사용한다
    for(let i =0; i< movies.length;i++){
        const{
            title,
            summary,
            medium_cover_image,
            rating,
            date_uploaded
        } = movies[i];
        let customMovie = `
        <li>
            <div>
                <img src="${medium_cover_image}"/>
                <h2>${title}</h2>
                <p>${summary}</p>
                <span> 점수 : ${rating}</span>
                <span>업로드일 : ${date_uploaded}</span>
            </div>
        </li>
        `;
        $frag.append($(customMovie));
    }
    $movieGroup.append($frag);
}
});

