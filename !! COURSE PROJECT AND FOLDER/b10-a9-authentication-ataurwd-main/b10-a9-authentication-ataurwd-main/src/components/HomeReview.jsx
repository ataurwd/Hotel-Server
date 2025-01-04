import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const HomeReview = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      rating: 5,
      review:
        "Absolutely fantastic service! The team was professional and exceeded all my expectations.",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Project Manager",
      rating: 4,
      review:
        "Great experience overall. A little room for improvement, but I was satisfied with the outcome.",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Entrepreneur",
      rating: 4.5,
      review:
        "Exceptional quality and attention to detail. Would highly recommend to anyone!",
      image:
        "https://randomuser.me/api/portraits/men/47.jpg",
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="flex justify-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
        {halfStar && <FaStar className="text-yellow-400 opacity-60" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <FaRegStar key={i} className="text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-lg rounded-lg p-6 space-y-2 text-center border border-gray-200"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-300"
            />
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.role}</p>
            {renderStars(review.rating)}
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeReview;
