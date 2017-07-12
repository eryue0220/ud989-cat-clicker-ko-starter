var catData = [{
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        nickNames: [
            { name: 'Tabby' },
            { name: 't-boy' },
            { name: 'rihana' }
        ]
    },
    {
        clickCount: 0,
        name: 'Cin',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        nickNames: [
            { name: 'Tabby' },
            { name: 't-boy' },
            { name: 'rihana' }
        ]
    },
    {
        clickCount: 0,
        name: 'Tigger',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        nickNames: [
            { name: 'Tabby' },
            { name: 't-boy' },
            { name: 'rihana' }
        ]
    },
    {
        clickCount: 0,
        name: 'Tobby',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        nickNames: [
            { name: 'Tabby' },
            { name: 't-boy' },
            { name: 'rihana' }
        ]
    }
];

function CatModel(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.cat = ko.observableArray(data.nickNames);
}

function viewModel() {
    var self = this;

    this.catList = ko.observableArray([]);

    catData.forEach(function(catItem) {
        self.catList.push(new CatModel(catItem));
    });

    this.cat = ko.observable(self.catList()[0]);
    this.incrementCounter = function() {
        self.cat().clickCount(self.cat().clickCount() + 1);
    };

    this.setCat = function(item) {
        self.cat(item);
    };
}

ko.applyBindings(new viewModel());