/**

void AddWord(String word) a-z
bool SearchWord(String pattern) a-z.

. : any single char

AddWord(hello)
AddWord(tokyo)
SearchWord(hell) -> false
SearchWord(h.ll.) -> true
SearchWord(hell..) -> false

 */

// {'hello'}
// 'h.ll.' -> 'halla' -> 'hallb'

// {'hello', '.ello', 'h.llo', 'he.lo',...}
// 'h.ll.'

class wordSearch {
  constructor() {
    this.words = new Set();
  }

  _AddWordHelper(word, idx = 0, temp = '') {
    if (temp.length === word.length) {
      this.words.add(temp);
      return;
    }
    this._AddWordHelper(word, idx + 1, temp + word[idx]);
    this._AddWordHelper(word, idx + 1, temp + '.');
  }

  AddWord(word) {
    this._AddWordHelper(word);
  }

  SearchWord(word) {
    return this.words.has(word);
  }
}
