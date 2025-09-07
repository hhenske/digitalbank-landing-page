import React from "react";
import "./Articles.css";

const Articles = () => {
  return (
    <section className="articles-container">
      <h2>Latest Articles</h2>
      
      <img src="./public/images/image-currency.jpg" />
      <div className="article">
        <p className="small-body">by Claire Robinson</p>
        <h4>Receive money in any currency with no fees</h4>
        <p className="reg-body">The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...</p>
      </div>
      <img src="./public/images/image-restaurant.jpg" />
      <div className="article">
        <p className="small-body">by Wilson Hutton</p>
        <h4>Treat yourself without worrying about money</h4>
        <p className="reg-body">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...</p>
      </div>
      <img src="./public/images/image-plane.jpg" />
      <div className="article">
        <p className="small-body">by Wilson Hutton</p>
        <h4>Take your Digitalcard wherever you go</h4>
        <p className="reg-body">We want you to enjoy your travels. This is why we don't change any fees on purchases while you're abroad. We'll even...</p>
      </div>
      <img src="./public/images/image-confetti.jpg" />
      <div className="article">
        <p className="small-body">by Claire Robinson</p>
        <h4>Our invite-only Beta accounts are now live!</h4>
        <p className="reg-body">After a lot of hard work by our whole team, we are excited to launch our closed beta. It's easy to request an invite through...</p>
      </div>
    </section>
  );
};

export default Articles;
