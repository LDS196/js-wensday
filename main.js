function sum(...args) {
    function add(...nextArgs) {
        if (nextArgs.length === 0) {
            return args.reduce((acc, val) => acc + val, 0);
        }
        return sum(...args, ...nextArgs);
    }
    return add;
}

console.log(sum(1)(2)( 4)()); // Выводит 10


