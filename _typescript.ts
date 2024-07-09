function add(a: number, b: number): number {
return a + b;
}
const result: number = add(a, 2); //This will compile correctly
const errorResult: number = add("1", 2); //This will produce a compile-time error