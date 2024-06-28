import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games {
    constructor() {
        this.getGames("MMORPG");
        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.innerHTML);

            });
        });
        this.Ui = new Ui()
    }
    async getGames(categoreOption) {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };

        const api = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoreOption}`,
            options
        );
        const data = await api.json();
        console.log(data);
        this.Ui.displayDataGame(data)
        this.startEvent(data)
    }
    startEvent(data) {
        // var id = 0
        let games = document.querySelectorAll('.game-card')
        for (let i = 0; i < games.length; i++) {
            games[i].addEventListener('click', (e) => {
                const gameId = data[i].id
                console.log(gameId)
                this.showDetails(gameId)

            })

        }
        // document.querySelectorAll('.game-card').forEach((game) => {
        //     game.addEventListener('click', (e) => {
        //         let id = document.querySelector('.game-card .idGame').innerHTML
        //         console.log(id)
        //         // this.showDetails(id)
        //     })
        // })
    }
    showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }
}