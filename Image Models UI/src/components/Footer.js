import React from 'react'

const Footer = () => {
  return (
    <div>
        
      <section id='footer'>

<div className="container border-top ">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="#photogallary" className="nav-link px-2 text-muted">Photo Gallary</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
    </ul>

    <p className='text-center text-muted'>For more information contact :</p> <p className='text-center text-muted'> <a href="mailto: abc@example.com" className='link-secondary'>abc@example.com</a> </p>

    <p className="text-center text-muted">© 2023 MODELS, Inc</p>
  </footer>

</div>
</section>

    </div>
  )
}

export default Footer