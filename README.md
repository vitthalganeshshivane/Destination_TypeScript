# TypeScript

## 1. What is TypeScript?

TypeScript = **JavaScript + Types + Error checking before running code.**
It compiles into JavaScript and helps avoid bugs by ensuring variables and functions use the correct types.

## 2. Basic Types

You learned the 3 most common types:

- string → "hello"

- number → 10

- boolean → true

Example:

```bash
let name: string = "Vitthal";
let age: number = 45;
let isEligible: boolean = true;
```

## 3. Type Inference

TypeScript can automatically guess the type:

```bash
let score = 99; // TS infers: number
```

## 4. Functions with Types

How to type:

- parameters

- return type

Example:

```bash
function add(a: number, b: number): number {
  return a + b;
}
```

Helps avoid mistakes like sending a string instead of a number.

## 5. Object Types

You learned how to give types to objects:

```bash
const car: { brand: string; speed: number } = {
  brand: "Bugatti",
  speed: 500
};
```

## 6. Interfaces

Interfaces are a cleaner way to describe object structures.

You learned:

```bash
interface Product {
  title: string;
  price: number;
};

const product: Product = {
  title: "Laptop",
  price: 20000
};
```

Advantages:

- ✅ Clean
- ✅ Reusable
- ✅ Used in React props
- ✅ Used in big projects

## 7. Optional Properties

Adding ? makes a property optional:

```
interface User {
  name: string;
  bio?: string;
}
```

Company may not require some properties, so optional properties make the code flexible.
