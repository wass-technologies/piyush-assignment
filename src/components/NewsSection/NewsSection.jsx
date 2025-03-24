import React, { useState, useEffect } from "react";
import "./NewsSection.css";
import newsImage from "/newspic.png";
import eyeIcon from "/eyebut.svg";
import heartIcon from "/likebut.svg";

const newsData = Array(12).fill({
    id: 1,
    date: "Monday 24, March 2025 | By Admin",
    title: "This Article's Title goes Here, but not too long.",
    views: 50,
    likes: 90,
    image: newsImage,
}).map((item, index) => ({ ...item, id: index + 1 }));

function NewsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(newsData.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalPages]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="news-section">
            <p className="sub">BETTER INFORMATION, BETTER HEALTH</p>
            <h2>News</h2>
            <div className="news-container">
            {newsData.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((news) => (
          <div className="news-card" key={news.id}>
            <img src={news.image} alt="News" className="news-image" />
            <div className="news-info">
              <p className="news-date">{news.date}</p>
              <p className="news-title">{news.title}</p>
              <div className="news-stats">
                <img src={eyeIcon} alt="views" className="icon" /> {news.views}
                <img src={heartIcon} alt="likes" className="icon" /> {news.likes}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`carousel-btn ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default NewsSection;