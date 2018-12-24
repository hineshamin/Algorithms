function isSubtree(t1, t2) {
  if (t2 === null) return true;
  function helper(t1, t2) {
    if (t1) {
      if (t1.value === t2.value && check(t1, t2)) return true;
      if (helper(t1.left, t2) || helper(t1.right, t2)) return true;
    }
    return false;
  }
  return helper(t1, t2);
}

function check(t1, t2) {
  if (t1 !== null && t2 === null) return false;
  if (t1 === null && t2 !== null) return false;
  if (t1 !== null && t2 !== null) {
    if (t1.value !== t2.value) return false;
    if (
      check(t1.left, t2.left) === false ||
      check(t1.right, t2.right) === false
    )
      return false;
  }
  return true;
}

const t1 = {
  value: 5,
  left: {
    value: 10,
    left: {
      value: 4,
      left: {
        value: 1,
        left: null,
        right: null
      },
      right: {
        value: 2,
        left: null,
        right: null
      }
    },
    right: {
      value: 6,
      left: null,
      right: {
        value: -1,
        left: null,
        right: null
      }
    }
  },
  right: {
    value: 7,
    left: null,
    right: null
  }
};

const t2 = {
  value: 10,
  left: {
    value: 4,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 2,
      left: null,
      right: null
    }
  },
  right: {
    value: 6,
    left: null,
    right: {
      value: -1,
      left: null,
      right: null
    }
  }
};

console.log(isSubtree(t1, t2));
