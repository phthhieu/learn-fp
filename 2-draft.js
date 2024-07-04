// x, y, z
// \x.x // x => x
// x x // x(x)
// def I = \x.x
// I(y) = (\x.x)(y)
//
const I = (x) => x; // def I = \x.x

const A = (f) => (x) => f(x); // def A = \f.\x.(f x)

// Reductions
// Beta reduction
// Alpha reduction (conversion)
// \y.y
// Eta reduction
//

const True = (x) => (y) => x;
// const True = Sel1;

const False = (x) => (y) => y;
// const False = Sel2;

const If = (x) => (y) => (f) => f(x)(y);

// const If = MakePair;

// (x => y => f => f(x)(y))(I)(S)(True) // I

// y => f => f(I)(y)
// f => f(I)(S)
// True(I)(S) // I

// const

// <condition>?<expression1>:<expression2>
// max = x > y ? x : y
// abs = x < 0 ? —x : x
//
// def cond = \e1.\e2.\c.((c e1) e2)
// \c.((c <expression1>) <expression2>)
// cond(True) -> <expression1>
// cond(False) -> <expression2>
//
// True -> False
// False -> True
const Not = (x) => If(False)(True)(x);

const Unless = (x) => If(Not(x));
