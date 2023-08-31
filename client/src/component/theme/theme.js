import React from "react";
import "./theme.css";

const Theme = () => {
  return (
<section class="custom-message" id="custom-message">
<div class="card">
  <h1>Customize your view</h1>
  <span class="close" id="close"> <i class="fas fa-times"></i> </span>
  <p class="text-muted"> Mange your Font-size , Color and Background</p>

            <div class="font-size">
                <h3>Font size</h3>
                <div>
                <h6>Aa</h6>
                <div class="choose-font">
                    <span class="font-size-1 active"></span>
                    <span class="font-size-2"></span>
                    <span class="font-size-3"></span>
                    <span class="font-size-4"></span>
                    <span class="font-size-5"></span>
                </div>
                <h4>Aa</h4>
                </div>
            </div>


  <div class="color">
    <h3>color</h3>
    <div class="choose-color">
      <span class="color-1 active"></span>
      <span class="color-2"></span>
      <span class="color-3"></span>
      <span class="color-4"></span>
      <span class="color-5"></span>
    </div>
  </div>


                <div class="backGround">
                    <h3>BackGround</h3>
                    <div class="choose-bg">

                    <div class="bg-1 active">
                        <span></span>
                        <h5 for="bg-1">Light</h5>
                    </div>

                    <div class="bg-2">
                        <span></span>
                        <h5>Dim</h5>
                    </div>

                    <div class="bg-3">
                        <span></span>
                        <h5 for="bg-3">Lights Out</h5>
                    </div>
                    </div>
                </div>

</div>
</section>

);
  
};
export default Theme;
