"use strict";

// @ts-ignore
import {SortData} from "./SortData";
import {BaseSort} from "./BaseSort";

let sortData = new SortData();
let baseSort = new BaseSort();

const chai = require('chai');
// @ts-ignore
var expect = require('chai').expect;
chai.use(require('chai-arrays'));

//let SortData = require('./SortData.ts');
//let BaseSort = require('./BaseSort.ts');

test('swaps', () => {
    let swap = baseSort.swaps;
    expect(swap).to.be.equal(0);
});

test('getSwaps', () => {
    let swap = baseSort.getSwaps();
    expect(swap).to.be.equal(0);
});

test('sort 4 element array', () => {
    let arr = sortData.getSortDataInt4();
    let arrSorted = sortData.getSortDataInt4Sorted();
    baseSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr).to.be.equalTo(arrSorted);
});

test('sort 6 element array', () => {
    let arr = sortData.getSortDataInt6();
    let arrSorted = sortData.getSortDataInt6Sorted();
    baseSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr).to.be.equalTo(arrSorted);
});
