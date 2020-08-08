"use strict";

import {SortData} from "./SortData";
import {BucketSort} from "./BucketSort";
import {AssertionError} from "assert";

let sortData = new SortData();
let bucketSort = new BucketSort();

// @ts-ignore
const chai = require('chai');
// @ts-ignore
var expect = require('chai').expect;
chai.use(require('chai-arrays'));

test('swaps', () => {
    let swap = bucketSort.swaps;
    expect(swap).to.be.equal(0);
});

test('getSwaps', () => {
    let swap = bucketSort.getSwaps();
    expect(swap).to.be.equal(0);
});


test('sort 4 element array', () => {
    let arr = sortData.getSortDataInt4();
    let arrSorted = sortData.getSortDataInt4Sorted();
    bucketSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr.length).to.be.equal(arrSorted.length);
    expect(arr).to.be.equalTo(arrSorted);
});

test('sort 6 element array should fail because of negative elements', () => {
    let arr = sortData.getSortDataInt6();
    let arrSorted = sortData.getSortDataInt6Sorted();
//    const t = () => {
    bucketSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr.length).to.be.equal(arrSorted.length);
    expect(arr).not.to.be.equalTo(arrSorted);
    // };
    // expect(t).to.throw(AssertionError);
});

test('sort 10 element array', () => {
    let arr = sortData.getSortDataInt10();
    let arrSorted = sortData.getSortDataInt10Sorted();
    bucketSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr.length).to.be.equal(arrSorted.length);
    expect(arr).to.be.equalTo(arrSorted);
});

test('sort S element array should fail because of negative elements', () => {
    let arr = sortData.getSortDataIntS();
    let arrSorted = sortData.getSortDataIntSSorted();
//    const t = () => {
    bucketSort.sort(arr);
    expect(arr).to.be.array();
    expect(arr.length).to.be.equal(arrSorted.length);
    expect(arr).not.to.be.equalTo(arrSorted);
    // };
    // expect(t).to.throw(AssertionError);
});
