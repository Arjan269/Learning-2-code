export default function Map() {
    const numbers = [7, 8, 12];

    const addOne = numbers.map(num => num + 1)
    console.log(numbers, addOne);

    const fruits = ['apple', 'mango', 'orange'];

    const mappedFruits = fruits.map((fruit, index) => {
        return ` ${index}.${fruit}`;
    });

    console.log(mappedFruits);

    const fruitOrder = [
  {
    name: "Apple",
    qty: 3,
    singlePrice: 0.25
  },
  {
    name: "Mango",
    qty: 6,
    singlePrice: 0.35
  },
  {
    name: "Banana",
    qty: 4,
    singlePrice: 0.15
  }
];

const mappedOrder = fruitOrder.map((fruit, index) => {
    return `"${index+1}) ${fruit.qty} units of ${fruit.name} costs $${(fruit.singlePrice * fruit.qty).toFixed(2)}"`
})

    console.log(mappedOrder);

    return (
        <>
            
            {mappedOrder}
        </>
    );
}