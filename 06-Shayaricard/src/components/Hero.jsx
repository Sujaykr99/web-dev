import React from "react";

const Hero = () => {
  return (
    <div className="hero">

      <h3 className="tag-line">
        <i>
          bookhe maar jainge mere qabar ke bhi keede <br />
          iss kardar teri mohabat ne kahaya hai mujhe
        </i>
      </h3>

      <div className="hero-divider">
        <span>✦</span>
      </div>

      <h2 className="poetry-question">
        What is poetry for YOU ?
      </h2>
      

      <div className="word-strip">
        <div className="word-track">

          <span>محبت</span>
          <b>✦</b>
          <span>عشق</span>
          <b>✦</b>
          <span>याद</span>
          <b>✦</b>
          <span>khamoshi</span>
          <b>✦</b>
          <span>تنہائی</span>
          <b>✦</b>
          <span>خواب</span>
          <b>✦</b>
          <span>solitude</span>
          <b>✦</b>
          <span>nostalgia</span>
          <b>✦</b>
          <span>فراغ</span>
          <b>✦</b>
          <span>सुकून</span>

          {/* duplicate */}
          <span>محبت</span>
          <b>✦</b>
          <span>عشق</span>
          <b>✦</b>
          <span>याद</span>
          <b>✦</b>
          <span>khamoshi</span>
          <b>✦</b>
          <span>تنہائی</span>
          <b>✦</b>
          <span>خواب</span>
          <b>✦</b>
          <span>solitude</span>
          <b>✦</b>
          <span>nostalgia</span>
          <b>✦</b>
          <span>فراغ</span>
          <b>✦</b>
          <span>सुकून</span>

        </div>
      </div>

    </div>
  );
};

export default Hero;