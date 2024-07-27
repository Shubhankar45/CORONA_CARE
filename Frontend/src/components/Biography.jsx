import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum ipsam quia incidunt cupiditate, nihil dolorum repellat repudiandae nam rerum excepturi culpa nulla tenetur natus saepe asperiores odio corporis consectetur illo voluptas, ab maiores. Dolorum nulla ratione aliquid? Modi, commodi minima voluptates dolorum laudantium asperiores pariatur ullam accusantium repellat fuga!
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vero quasi, quae inventore doloribus, natus sint ut voluptate, labore dolorem sunt magnam maxime aspernatur accusamus harum alias accusantium officia non dolore? Vitae unde ipsa laborum?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsum corrupti nemo.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default Biography