class Person {
    constructor(private name: string, public age: number) {}
}

const p = new Person('teo nguyen', 10);

console.log(p);

function add(a: number, b: number): number {
    return a + b;
}

function identity<T>(arg: T): T {
    return arg;
}

class Factory<T> {
    constructor(private me: T) {}

    getMe(): T {
        return this.me;
    }
}

const x = new Factory<string>('');
