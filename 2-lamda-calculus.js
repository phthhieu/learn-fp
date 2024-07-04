// def I = \x.x
const I = (x) => x;

// def SA = \f.(f f)
const SA = (f) => f(f);

// def A = \f.\x.(f x)
const A = (f) => (x) => f(x);

// Select 1st
// def True = \first.\second.first
const True = (first) => (second) => first;

// Select 2nd
// def False = \first.\second.second
const False = (first) => (second) => second;

// MakePair or If
// def If = \e1.\e2.\c.((c e1) e2)
const If = (e1) => (e2) => (c) => c(e1)(e2);
//   If(I)(A)
//-> c => c(I)(A)
//   \c.((c I) A)
//   If(I)(A)(True)
//-> c => c(I)(A)
//   c(True)
//-> I
//   c(False)
//-> A
// -----
// if apply If with c = Sel1(True) -> Return the first  argument e1
// if apply If with c = Sel2(False)-> Return the second argument e2

// <condition>?<expression>:<expression>
// max = x>y?x:y
// absx = x<0?—x:x
//
// def cond = \e1.\e2.\c.((c e1) e2)
// \c.((c <expression1>) <expression2>)
// cond(True) -> <expression1>
// cond(False) -> <expression2>

const Not = If(False)(True);

const And = (x) => (y) => If(y)(False)(x);
// <operand> AND <operand>
// Note that if the left operand is TRUE,
// then the final value depends on the right operand
// and if the left operand is FALSE, then the final value is FALSE
// so AND could be modelled using the conditional expression as:
// X ? Y: FALSE

// Eta reduction
// const And = (y) => If(y)(False);

// const Or = (x) => (y) => If(True)(y)(x);
// <operand> OR <operand>
// Note that if the first operand is TRUE,
// then the final value is TRUE,
// otherwise the final value is the second operand.
// We could describe this using the conditional expression as:
// X ? TRUE : Y
//
// Eta reduction
const Or = If(True);

// Numbers

// const Zero = I;

const Y = (f) => SA((x) => f((y) => x(x)(y)));

const FACTORIAL = Y((f) => (n) => (n === 0 ? 1 : n * f(n - 1)));

// Example: Factorial of 5
// console.log(FACTORIAL(5)); // Outputs: 120

// const factorial = n => If()
