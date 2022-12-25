import { Injectable } from '@angular/core';
import {Word} from '../word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Word[] = [
    {word: 'hello', mean: 'xin chào'},
    {word: 'goodbye', mean: 'tạm biệt'},
    {word: 'coffee shop', mean: 'quán cà phê'},
    {word: 'bartender', mean: ' nhân viên pha chế'},
    {word: 'shop owner', mean: 'chủ quán'},
    {word: 'milktea', mean: 'trà sữa'}
  ];
  constructor() { }

  getAllWord() {
    return this.dictionary;
  }

  translate(word: string) {
    for (const dictionaryElement of this.dictionary) {
      if (dictionaryElement.word.toLowerCase() === word) {
        return dictionaryElement.mean;
      }
    }
  }
}
