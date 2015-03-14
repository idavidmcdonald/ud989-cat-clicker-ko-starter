var initialCats = [
	{
		clickCount: 0,
		name: 'David',
		imgSrc: 'http://www.helpinghomelesscats.com/images/cat1.jpg',
		nicknames: ['Dave', 'D', 'D Da Cat']
	},
	{
		clickCount: 0,
		name: 'Rob',
		imgSrc: 'http://www.thetimes.co.uk/tto/multimedia/archive/00342/114240651_cat_342943c.jpg',
		nicknames: ['R', 'Ro Ro']
	},
	{
		clickCount: 0,
		name: 'Mike',
		imgSrc: 'http://cdn.playbuzz.com/cdn/213b22c3-5a11-48a4-8a1e-08d7331f30a1/a388cc37-d3e8-4f18-8e18-aea55e826ede.jpg',
		nicknames: ['M', 'Mikey']
	}
];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

	this.catLevel = ko.computed(function(){
		if (this.clickCount() < 10) {
			return 'Level 1';
		} else if (this.clickCount() < 25) {
			return 'Level 2';
		} else {
			return 'Level 3';
		};
	}, this);
};

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCurrentCat = function(clickedCat) {
		self.currentCat(clickedCat);
	}
};

ko.applyBindings(new ViewModel());