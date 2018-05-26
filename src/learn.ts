interface User {
    name: string;
    age: number;
    sayHello: () => void;
}

// const teo: User = { name: 'Teo Nguyen', age: 10 };
// const people: User[] = [
//     teo,
//     { name: 'Ti', age: 20 }
// ];

class Person implements User {
    name: string;
    age: number;
    sayHello() {
        return 1;
    }
}
