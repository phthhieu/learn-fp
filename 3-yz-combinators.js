const classical_fact = (n) => {
  return n === 1 ? 1 : n * classical_fact(n - 1);
};

const fact_gen = (f) => (n) => {
  return n === 0 ? 1 : n * f(n - 1);
};

// Idea: SA(SA)
const Idea = ((g) => g(g))((g) => g(g));

// Fixed point recursion: Add f for stoping
const Y = (f) => ((g) => f(g(g)))((g) => f(g(g)));

// Because of Applicative order in JS, fix it by introducing n
const Z = (f) => ((g) => f((n) => g(g)(n)))((g) => f((n) => g(g)(n)));
