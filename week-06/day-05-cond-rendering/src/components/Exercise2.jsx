import { useState } from 'react'

export default function Exercise2() {
    const [showCapybara, setShowCapybara] = useState(false)
    const [showHamster, setShowHamster] = useState(false)

    function handleShowCapybara() {
        setShowCapybara(!showCapybara)
    }

    function handleShowHamster() {
        setShowHamster(!showHamster)
    }

  return (

    <div>
        <button onClick={handleShowCapybara} >Show Capybara</button>
          <button onClick={handleShowHamster} >Show Hamster</button>

          <br /><br />

        {showCapybara &&   <img
          src="https://cdn.britannica.com/79/191679-050-C7114D2B/Adult-capybara.jpg"
          alt="Capybara" width="50%"
          />}
        {showHamster &&   <img
            src="https://www.thesprucepets.com/thmb/imljEHkBEt_d1AuGqs_CLeLj-8M=/2000x0/filters:no_upscale():strip_icc()/GettyImages-469029193-58179c5d5f9b581c0b86ab9b.jpg"
            alt="Hamster" width="50%"
          />}

    </div>
  )
}
