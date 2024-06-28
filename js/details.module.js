import { Ui } from "./ui.module.js";
export class Details {
    constructor(id) {
        this.ui = new Ui();
        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });
        this.getDetails(id)
    }

    async getDetails(idGames) {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };

        const api = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`,
            options
        );
        const data = await api.json();
        console.log(data);
        this.ui.displayDetails(data)
    }


}