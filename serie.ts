export class Serie {
    id : number;
    name : string;
    channel : string;
    seasons : number;
    description : string;
    seriesLink : string;
    imgLink : string;

    constructor (id:number, name:string, channel : string, seasons : number, description : string, seriesLink : string, imgLink : string)
    {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.seriesLink = seriesLink;
        this.imgLink = imgLink;
    }

   
    public showCard(cardbody : HTMLElement)
    {
        
        cardbody.innerHTML = `<img src = ${this.imgLink} alt="Poster">
                                <p> ${this.description}</p>
                                <a href = ${this.seriesLink} target = "_blank"> Haga click acá para conocer más </a>`;
        
        
    }
}