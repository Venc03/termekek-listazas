import { LISTA } from "./adat.js";
import Termek from "./termek.js";


class Termekek {
    #kedvencek = [];

    constructor() {
        const SZULOELEM = $("article");

        for (let i = 0; i < LISTA.length; i++){
            const t1 = new Termek(LISTA[i], SZULOELEM)
        }
        $(window).on("click", (event) => {
            this.#kedvencek.push(event.detail.adat);
        });
    }
}

export default Termekek;