# The Significance of Union and Intersection Types in TypeScript

TypeScript, a statically typed superset of JavaScript, brings several powerful features to the table that enhance both the safety and maintainability of your code. Among these features, **union types** and **intersection types** are two of the most significant. Understanding how to use these types effectively can elevate your TypeScript development experience, allowing you to create more flexible, robust, and reusable code.

## Union Types: Flexibility with Multiple Possible Types

Union types in TypeScript allow a variable to be one of several possible types. This is incredibly useful when a value could logically be one of many types, but you still want to ensure type safety and avoid errors.

### What Are Union Types?

A **union type** is a way of specifying that a variable can hold one of several types. You define it using the pipe (`|`) symbol. For example, if you want a variable that can hold either a number or a string, you can define it as:

```typescript
type Age = number | string;
type Age = number | string;

function handleAge(age: Age): string {
  if (typeof age === "number") {
    return `Age is a number: ${age}`;
  } else if (typeof age === "string") {
    return `Age is a string: ${age}`;
  }
  return "Invalid age";
}

console.log(handleAge(30));   // Output: Age is a number: 30
console.log(handleAge("30")); // Output: Age is a string: 30


## Intersection Types: Combining Multiple Types for Greater Power

While union types allow a variable to be one of several types, **intersection types** allow you to combine multiple types into one. This gives you the power to create more complex types that require a variable to satisfy multiple type constraints at the same time. In other words, an intersection type represents a value that has all the properties and methods of the intersected types.

### What Are Intersection Types?

An **intersection type** is created using the `&` symbol and signifies that a value must conform to multiple types simultaneously. This means that the value must have all properties and methods of each of the intersected types.

For example, if you have two types, `Person` and `ContactInfo`, you can create a new type that combines both:

```typescript
type Person = {
  name: string;
  age: number;
};

type ContactInfo = {
  email: string;
  phone: string;
};

type Employee = Person & ContactInfo;
