import { useState } from 'react'

export default function Exercise3() {
    const [visible, setVisible] = useState("")

  function handleShowCapybara() {
    if (visible === "capybara") {
      setVisible("") 
    } else {
      setVisible("capybara")
    }
  }

  function handleShowHamster() {
    if (visible === "hamster") {
      setVisible("")
    } else {
      setVisible("hamster")
    }
  }

  function handleShowRabbit() {
    if (visible === "red panda") {
      setVisible("")
    } else {
      setVisible("red panda")
    }
  }

  return (

    <div>

      <button onClick={handleShowCapybara}>Show Capybara</button>
      <button onClick={handleShowHamster}>Show Hamster</button>
      <button onClick={handleShowRabbit}>Show Red Panda</button>

      {visible === "capybara" && (
        <img
          src="https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg"
          alt="Capybara"
          width="50%"
        />
      )}

      {visible === "hamster" && (
        <img
          src="https://www.thesprucepets.com/thmb/imljEHkBEt_d1AuGqs_CLeLj-8M=/2000x0/filters:no_upscale():strip_icc()/GettyImages-469029193-58179c5d5f9b581c0b86ab9b.jpg"
          alt="Hamster"
          width="50%"
        />
      )}

      {visible === "red panda" && (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKGqjVCNRZMmYtv-nfF3q-EeXAzOoZBDmBA&s"
          alt="Red Panda"
          width="50%"
        />
      )}

    </div>
  )
}
