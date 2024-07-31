// Applicative Order (Eager Evaluation) vs Normal Order (Lazy Evaluation)

// JS: Applicative Order

// Thunk

const add = (a) => (b) => a + b;

add(1 + 2)(3 + 4);

// 10

const minsFromNow = (date) => {
  // const dateLocal = date || new Date();
  // console.log(dateLocal);
};

//
minsFromNow();

for (let i = 1; i < 2; i++) {
  minsFromNow(new Date());
}

const lazy = (x) => () => x;

const lazyAdd = (xThunk, yThunk) => {
  return xThunk() + yThunk();
};

const result = lazyAdd(lazy(1), lazy(2));

console.log(result);

// Ref
// https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts
// https://en.wikipedia.org/wiki/Thunk
