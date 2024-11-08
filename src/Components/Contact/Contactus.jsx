import React from 'react'

export default function Contactus() {
  return (
    <div>
        <section className="p-5 bg-yellow py-5">
         <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col-md-5">
                <h6>
                    Quick Contact
                </h6>
                <h2 className="display-3">
                    Leave a Message
                </h2>
                <p>
                    You can contact us using this form and we will reply to you soon.
                </p>
                </div>
                <div className="col-md-5">
                <div className="mb-3">
                    <input type="name" className="form-control p-3 rounded-4" name="name" id="name" aria-describedby="nameHelpId"
                    placeholder="your name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control p-3 rounded-4" name="email" id="email" aria-describedby="emailHelpId"
                    placeholder="your email" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control p-3 rounded-4" name="your message" placeholder="your message" id="message" rows="3"></textarea>
                </div>
                <div className="d-grid">
                    <button type="button" className="btn btn-dark btn-lg text-uppercase rounded-4">  Submit </button>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}
