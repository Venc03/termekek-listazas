class Termek {
    #adat;
    #divElem;
    #buttonElem;
    constructor(adat, szuloElem){
        this.#adat = adat;
        szuloElem.append(
            `<div><p>${this.#adat.nev}</p><p>${this.#adat.leiras}</p><p>${this.#adat.ar}</p><button>Kedvencekhez ad <br> +++</button></div>`
        );
        this.#divElem = szuloElem.children("div")
        this.#buttonElem = this.szuloElem.children("button")
    
        this.#buttonElem.on("click", () => {
            this.clickon()
        });
    }

    clickon(){
        const e = new Termek("elemclick", {detail:this.adat});
        window.dispatchEvent(e);
    }
}

export default Termek;