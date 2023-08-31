import React from "react";
import "./contact.css";

const ContactUs = () => {
  return (
    <section className="ContactUs" id="ContactUs">
          <section className="ContactUs-section" id="ContactUs">
      <div className="parent-ContactUs">
        <h1 className="ContactUs">ContactUs</h1>
        <span className="S-child">contact me by filling this form</span>
      </div>


      <section class="contactus-cont">
    <div class="container">
        <div class="row">
           <div class="col-md-5">
               <div class="contactus-left">
                   <h4>Our Address</h4>
                   <ul>
                       <li> Construction Limited</li>
                       <li> Benha- Qalubia</li>
                       <li>Egypt</li>
                   </ul>
                   <h4>Call Us</h4>
                                <ul>
                                    <li> Phone:01281353625/01060940841</li>
                                    <li> Fax: +324-5442-415</li>
                                </ul>
                 <h4>links</h4>            
                   <ul>
                    <li> <a href="https://github.com/AhmedAtef925?tab=repositories">https://github.com/AhmedAtef925</a> </li>
                    <li> <a href="https://www.linkedin.com/in/ahmed-atef-89710a189/">https://www.linkedin.com/in/ahmed-atef </a> </li>                   
                    <li> <a href="https://mail.google.com/mail/u/0/">https://www.gmail.com </a> </li>
                </ul>
                </div>
           </div>
         <div class="col-md-7">
            <div class="contactus-right">
                 <h4>Fill in the form below and we’ll get back in touch :</h4>
                 <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                <div class="col-md-6">
                                    <input type="Email" placeholder="Email"/>
                                </div>
             </div>



             <div class="row">
                        <div class="col-md-6">
                            <input type="text" placeholder="company"/>
                        </div>
                    <div class="col-md-6">
                        <input type="number" placeholder="Phone"/>
                    </div>
        </div>
             
                 <div class="row">
                    <div class="col-md-12">
                        <textarea name="message"  cols="30" rows="4" placeholder="Message:" required="" ></textarea>
                    </div>
                </div>

                 <div class="contactus-buttom">
                     <button > <a href="#"> Send </a></button>
                     <p>Or telephone us with part number on:  Tel:01281353625/01060940841</p>
                 </div>

            </div>
           </div>


        </div>
    </div>
</section>
      </section>
      < div className="footer">
      © 2023 All Rights Reserved
      </div>
      </section>
  )}

  export default ContactUs;