import React from "react";

const Card = () => {
  return (
    <div className="flex">
      <div className="card w-96 glass p-5 m-5">
        <figure>
          <img
            src="https://www.thehoneyshopindia.com/wp-content/uploads/2016/11/Sunflower-Honey.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">SUNFLOWER HONEY</h2>
          <div className="card-actions justify-end mx-auto">
            <button className="btn btn-active btn-neutral">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="card w-96 glass p-5 m-5">
        <figure>
          <img
            src="https://www.thehoneyshopindia.com/wp-content/uploads/2013/06/Eucalyptus-Honey.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">EUCALYPTUS HONEY</h2>
          <div className="card-actions justify-end mx-auto">
            <button className="btn btn-active btn-neutral">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="card w-96 glass p-5 m-5">
        <figure>
          <img
            src="https://www.thehoneyshopindia.com/wp-content/uploads/2015/06/Honey-N-Nuts.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">HONEY & NUT</h2>
          <div className="card-actions justify-end mx-auto">
            <button className="btn btn-active btn-neutral">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
