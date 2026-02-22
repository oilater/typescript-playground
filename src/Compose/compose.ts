const parseNumber = (s: string): number => parseInt(s, 10);
const isPositive = (n: number): boolean => n > 0;

function compose<A, B, C>(
    f: (a: A) => B,
    g: (b: B) => C,
): (a: A) => C {
    return (a: A) => g(f(a));
}

const isPositiveString = compose(parseNumber, isPositive);

isPositiveString("42"); // true