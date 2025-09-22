
import styles from './User.module.css';
import { useEffect, useState } from 'react'

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("http://localhost:4000/users")
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => console.log(err))

  }, [])

  // Dummy Data
  // const studentList = [
  //   {
  //     name: "Aiden Andrews",
  //     imgSrc: "/Images/students/AidenAndrews.png",
  //   },
  //   {
  //     name: "Courtney Bristol",
  //     imgSrc: "/Images/students/CourtneyBristol.png",
  //   },
  //   {
  //     name: "Nagani Cortes",
  //     imgSrc: "/Images/students/NaganiCortes.png",
  //   },
  //   {
  //     name: "Rawiri Fletcher",
  //     imgSrc: "/Images/students/RawiriFletcher.png",
  //   },
  //   {
  //     name: "Javier Fuego",
  //     imgSrc: "/Images/students/JavierFuego.png",
  //   },
  // ];

  return (
    <div className={styles.userContainer}> 
        {/* <div className={styles.card}>
        <img src="/Images/students/AidenAndrews.png" alt="profile" />
            <p>Aiden</p>
        </div> */}

    {/* {studentList.map((student, index) => {
        return (
            <div className={styles.card} key={index}>
            <img src={student.imgSrc} alt="profile" />
                <p>{student.name}</p>
            </div>
        )
    })} */}

    {users.map((student) => {
        return (
            <div className={styles.card} key={student.id}>
                    <img src={student.images} alt="profile" />
                     <p>{student.name}</p>
                </div>
        )
    })}

    </div>
  )
}
