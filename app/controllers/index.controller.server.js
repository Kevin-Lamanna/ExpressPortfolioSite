// Filename: index.controller.server.js
// Student Name: Kevin Lamanna
// Student ID: 301224451
// Date: September 30th 2022

export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', myName: 'Kevin Lamanna'} );
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about'} );
};

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects'} );
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services'} );
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact'} );
};


