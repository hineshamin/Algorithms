function dump(square, s = '') {
  for (let elem of square) {
    if (Array.isArray(elem)) return dump(elem, s);
    else {
      s += elem;
    }
  }
  return s;
}

function valid(square) {
  if (!Array.isArray(square)) {
    if (square !== 0 && square !== 1) return false;
  } else {
    for (let elem of square) {
      if (Array.isArray(elem)) {
        if (
          elem.length !== 4 ||
          !elem.every(x => x === 0 || x === 1 || Array.isArray(x))
        ) {
          return false;
        }
        return valid(elem);
      } else {
        if (elem !== 0 && elem !== 1) return false;
      }
    }
  }

  return true;
}
