import React, { Component } from 'react'
import './css/ContactUS.css';

export default class ContactUS extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width="100%" />
          {/* <div class="centered">we'd love to hear from you </div> */}
        </div>
        <div class="info">
          <img src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-call-vector-icon-png-image_702735.jpg" width="4%"></img>
          <br></br>
          <h5> +91-9000000000 </h5>

          <br></br><br></br>

          <img src="https://png.pngtree.com/png-vector/20191028/ourlarge/pngtree-email-icon-isolated-on-background-png-image_1901887.jpg" width="4%"></img>
          <br></br>
          <h5> <a href="mailto:divneet11singh@gmail.com"> Send an Email </a></h5>

          <br></br><br></br>
          <img src="https://png.pngtree.com/svg/20170629/location_559173.png" width="4%"></img>
          <h5> India</h5>
        </div>

        <br></br> <br></br>
      </div>


    )
  }
}
