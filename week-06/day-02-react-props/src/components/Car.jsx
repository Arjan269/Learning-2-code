import './Car.css';

export default function Car({carMake, year, askingPrice}) {
    // console.log(props);

    return (
        <div className="card-car">
            {/* ==== using props ==== */}
            {/* <h2>Make: {props.carMake} </h2> */}
            {/* <p>Year: {props.year} </p> */}
            {/* <p>Asking ${props.askingPrice} </p> */}

            {/* ==== using destructuring with props ==== */}
            <h2>Make: {carMake} </h2>
            <p>Year: {year} </p>
            <p>Asking ${askingPrice} </p>
        </div>
    );
}