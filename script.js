function Organism(SingleCell){
    this.SingleCell = SingleCell;
}

    function Org(MultiCell){
        this.MultiCell = MultiCell;
    }

Organism.prototype.displayDetails = function() {
    console.log("Organizem Njeqelizor: " + this.SingleCell);
}

Org.prototype.displayDetails = function() {
    console.log("Organizem Shumeqelizor: " + this.MultiCell);
}

function Life() {
    this.organizmat = [];
}

Life.prototype.addOrganism = function (organism) {
    this.organizmat.push(organism);
}

Life.prototype.displayOrganizmat = function (){
        console.log(" Organizmat ne Boten e Gjalle ");
        for(var i = 0; i < this.organizmat.length; i++){
            this.organizmat[i].displayDetails();
        }
    }

var jeta = new Life();

    var org1 = new Organism("Bacteria");
    var org2 = new Organism("Amebae");
    var org3 = new Organism("Paramecium");

    var org4 = new Org("Fungi");
    var org5 = new Org("Plants");
    var org6 = new Org("Animals");

    jeta.addOrganism(org1);
    jeta.addOrganism(org2);
    jeta.addOrganism(org3);

    jeta.addOrganism(org4);
    jeta.addOrganism(org5);
    jeta.addOrganism(org6);

    jeta.displayOrganizmat();