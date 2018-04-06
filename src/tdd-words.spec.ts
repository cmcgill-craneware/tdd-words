import { TddWords } from './tdd-words';
import { expect } from 'chai';
import 'mocha';

describe('tdd words ',() => {
    let words;
    beforeEach(() => {
        words = new TddWords;
    });

    it('should return zero when string is null', () => {
        expect(words.wordCount(null)).to.equal(0)
    });

    it('should return zero when string consists of only whitespaces', () => {
        expect(words.wordCount(' \n\n\t\r ')).to.equal(0)
    });

    it('should return 1 with a single word', () => {
        expect(words.wordCount('Hello')).to.equal(1)
    });

    it('should return 2 with two words separated by a space', () => {
        expect(words.wordCount('Hello world')).to.equal(2)
    });

    it('should return 1 with single word separated by whitespaces', () => {
        expect(words.wordCount('  \nHello  \r ')).to.equal(1)
    });

    it('should return correct word count when words separated by any whitespaces', () => {
        expect(words.wordCount('Hello crazy \n  world')).to.equal(3)
    });

    it('should count only unique words and return 3', () => {
        expect(words.wordCount('Hello crazy \n  world')).to.equal(3)
    });

    it('should count only unique case insentive words and return 2', () => {
        expect(words.wordCount('Hello world hello')).to.equal(2)
    });

    it('should ignore trailing periods and return 2', ()=> {
        expect(words.wordCount('Hello world hello.')).to.equal(2)
    });

    it('should ignore all punction and return 3', () => {
        expect(words.wordCount('Hello (world) - 123.')).to.equal(3)
    });
    it('should count words that are accent insensitive and return 4', () => {
        expect(words.wordCount('Allô? Allo est la fin.')).to.equal(4)
    });
})