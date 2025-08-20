import './App.css'
import Car from './components/Car.jsx';
import Person from './components/Person.jsx'
import Map from './components/Map.jsx';

function App() {
  const dog = {
    name: "Miko",
    breed: "English Staffordshire Bull Terrier",
    coat: "grey and white"
  }

  // Traditional way
  // const name = dog.name;
  // const breed = dog.breed;

  // Destructuring method
  const {name: dogName, breed: dogBreed, coat: dogCoat} = dog;

  const person = {
    firstName: "John",
    lastName: "Doe"
  }

  const {firstName: fName, lastName: lName} = person;
  console.log(fName, lName);

  // ==== Exercise 1 ==== //
  const myObj = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      companyName: "Romaguera-Crona",
      catchPhrase: "It's collaboration time",
      bs: "harness real-time e-markets",
    },
  };

  const {username: user, email: uEmail} = myObj;
  console.log(user, uEmail);

  // ==== Array Destructuring ==== //
  const names = ["Sukuna", "Gojo", "Yuji"];

  const [first, second, third] = names;
  console.log(first, second, third)

  return (
    <>
{/* exercise 2 */}
    <Person name="Yuji Itadori" age={15} />

    {/* Car Exercise */}
    <Car carMake="Toyota Prius" year={2020} askingPrice={34999} />
    <Car carMake="Mazda CX-3" year={2016} askingPrice={20999} />
    <Car carMake="Honda Vezel" year={2017} askingPrice={24999} />
    
    <p>{dogName} is a {dogCoat}ed {dogBreed}</p>

    {/* Map exercise */}
    <Map />

    </>
  )
}

export default App
