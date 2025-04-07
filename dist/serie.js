var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, seriesLink, imgLink) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.seriesLink = seriesLink;
        this.imgLink = imgLink;
    }
    Serie.prototype.showCard = function (cardbody) {
        cardbody.innerHTML = "<img src = ".concat(this.imgLink, " alt=\"Poster\">\n                                <p> ").concat(this.description, "</p>\n                                <a href = ").concat(this.seriesLink, " target = \"_blank\"> Haga click ac\u00E1 para conocer m\u00E1s </a>");
    };
    return Serie;
}());
export { Serie };
