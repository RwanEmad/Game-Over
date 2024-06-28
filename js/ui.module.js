export class Ui {

    displayDataGame(data) {
        let gameContainer = ``
        for (let i = 0; i < data.length; i++) {
            gameContainer += `
         <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="box-sizing  game-card rounded-3 p-0 border border-2 border-dark">
                            <div class="rounded-3 p-3 ">
                            <p  class="idGame d-none">${data[i].id}</p>
                                <img src="${data[i].thumbnail}" width="100%" alt="">
                                <div class="card-info mt-4">
                                    <div class="title d-flex justify-content-between">
                                        <h3 class="m-0 title">${data[i].title}</h3>
                                        <span class="free-badge badge  p-2">Free</span>
                                    </div>
                                    <div class="descrition mt-4 text-center">
                                        <p class="sub-title text-center opacity-50 overflow-hidden">
                                        ${data[i].short_description.split(" ", 8)}
                                        </p>
                                    </div>

                                </div>

                            </div>
                            <footer
                                class="d-flex justify-content-between  px-4 py-3 rounded-bottom-3 border border-top-2 border-dark ">
                                <span class="badge">${data[i].genre}</span>
                                <span class="badge">${data[i].platform}</span>
                            </footer>
                        </div>

                    </div>

        `
        }

        document.getElementById('game-data').innerHTML = gameContainer
    }

    displayDetails(game) {
        let content = `
        <div class="col-xl-4">
                    <img src="${game.thumbnail}" width="100%" alt="">
                </div>
                <div class="col-xl-8 ">
                
                    <h3 class="details-title mb-4">Title: ${game.title}</h3>
                    <p class="sub-title text18 ">Category: <span class="badge text-bg-info"> ${game.genre}</span> </p>
                    <p class="sub-title text18 ">Platform: <span class="badge text-bg-info"> ${game.platform}</span> </p>
                    <p class="sub-title text18 ">Status: <span class="badge text-bg-info"> ${game.status}</span> </p>
                    <p class="description sub-title">${game.description} </p>
                    <a class="btn btn-outline-warning sub-title text18 py-2 px-3" target="_blank"
                        href="${game.game_url}">Show Game</a>
                </div>
        
        `
        document.getElementById('details-content').innerHTML = content
    }

}