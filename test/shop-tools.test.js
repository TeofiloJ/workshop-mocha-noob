

var expect = require('chai').expect;
var module = require('../src/shop-tools')

//Test Exercice 1

var resultPrix = {
    banana : 1,
    potato : 2,
    tomato : 3,
    cucumber : 4,
    salad : 5,
    apple : 6
}

describe("Test des prix.", () => {
    it('should be equal ', () => {
        expect(module.getPrices()).to.be.resultPrix;
    })
})

//Test Exercice 2

const products1 = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];
var res1 = products1.length

describe("Test des longueurs.", () => {
    it('should be equal ', () => {
        expect(module.countArticles(products1)).to.be.res;
    })
})

//Test Exercice 3

const products2 = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];
var res2 = 4

describe("Test du nombre de produits différents.", () => {
    it('should be equal ', () => {
        console.log("res obtenu : ",module.countProducts(products2))
        expect(module.countProducts(products2)).to.be.res2;
    })
})

//Test Exercice 4

const products3 = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];

describe("Test du retrait des produits gratuits.", () => {
    it.skip('should be equal ', () => {
        console.log("res obtenu : ",module.countProducts(products2))
        expect(module.countProducts(products2)).to.be.res2;
    })
})