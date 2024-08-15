I = (x) => x;

SA = (f) => f(f);

A = (f) => (x) => f(x);

TRUE = (first) => (second) => first;

FALSE = (first) => (second) => second;

IF = (e1) => (e2) => (cond) => cond(e1)(e2);

NOT = (x) => IF(FALSE)(TRUE)(x);

AND = (y) => IF(y)(FALSE);

OR = IF(TRUE);

NAND = (y) => IF(NOT(y))(TRUE);
