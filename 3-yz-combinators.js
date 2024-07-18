const classical_fact = (n) => {
  return n === 1 ? 1 : n * classical_fact(n - 1);
};

const fact_gen = (f) => (n) => {
  return n === 0 ? 1 : n * f(n - 1);
};

// Idea: SA(SA)
const Idea = ((g) => g(g))((g) => g(g));

// Fixed point recursion of f: f(f(f(f(...))))
// Fixed point of f mean:
// - if f(x) = x then every x is a fixed point of f
const Y = (f) => ((g) => f(g(g)))((g) => f(g(g)));

// Y(fact_gen)(2) still raises exception in JS
// Because it requires evaluating g(g) itself
// We know fact(1) doesn't need any recursion
// Instead of call an infinite series of fact functions
// Just call it when we need it by Lazy evaluation
// n => g(g)(n)
const Z = (f) => ((g) => f((n) => g(g)(n)))((g) => f((n) => g(g)(n)));
