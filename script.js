let numbers = [];
for (i=-10; i<=10; i++) {
    numbers.push(i);
}

numbers = numbers.filter(num=> num>=0);

numbers = numbers.map(function(num){
    return num*num;
});

numbers = numbers.sort(function(a,b) {
    return b-a;
});

console.log(numbers);