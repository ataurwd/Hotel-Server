import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Tutorials = () => {
    const videos = [
        {
          "id": 1,
          "title": "Learn Italian Vocabulary - Video 1",
          "url": "https://www.youtube.com/embed/MmLw1jFIjHc?si=v5X5yv5-yzgCPa_9"
        },
        {
          "id": 2,
          "title": "Learn Italian Vocabulary - Video 2",
          "url": "https://www.youtube.com/embed/PatDtNrDLWc?si=eGhTWZgPLCNekgVc"
        },
        {
          "id": 3,
          "title": "Learn Italian Vocabulary - Video 3",
          "url": "https://www.youtube.com/embed/j6aqpvO0MzQ?si=Brvangf9FKi2oHA6"
        },
        {
          "id": 4,
          "title": "Learn Italian Vocabulary - Video 4",
          "url": "https://www.youtube.com/embed/j6aqpvO0MzQ?si=XbX-cbpSfPR0FaGO"
        },
        {
          "id": 5,
          "title": "Learn Italian Vocabulary - Video 5",
          "url": "https://www.youtube.com/embed/EtuRDQNObJ8?si=U3TDFklSV1e4bKoK"
        },
        {
          "id": 6,
          "title": "Learn Italian Vocabulary - Video 6",
          "url": "https://www.youtube.com/embed/FQGMbVvo7JI?si=GPfOa5SnAreS5XTp"
        },
        {
          "id": 7,
          "title": "Learn Italian Vocabulary - Video 7",
          "url": "https://www.youtube.com/embed/OEOviqUs1ic?si=quXiPRMiQazcMJNm"
        },
        {
          "id": 8,
          "title": "Learn Italian Vocabulary - Video 8",
          "url": "https://www.youtube.com/embed/2K8OhUfsPH0?si=LEv9m6jLKvGqj0wt"
        },
        {
          "id": 9,
          "title": "Learn Italian Vocabulary - Video 8",
          "url": "https://www.youtube.com/embed/FS8f7WHdNBw?si=FS1upJI9QsucKXd7"
        }
      ]
      
    return (
        <div>
            <Helmet>
                <title>Vocable | tutorials</title>
            </Helmet>
            <div className="container mx-auto px-4 py-8">
            {/* Heading Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-semibold text-gray-800">Welcome to Our Tutorials</h1>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                    Explore a wide range of tutorials designed to help you enhance your skills. From beginner to advanced,
                    our tutorials are tailored to suit all learning levels. Start your learning journey with us today!
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                videos.map(video => 
                        <div key={video.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow ">
                            <iframe 
                                src={video.url}
                                alt="Tutorial 1" 
                                className="w-full h-56 object-cover rounded-md"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mt-4">Tutorial {video.id}</h3>
                            <p className="text-gray-600 py-4 text-xl">{video.title}</p>
                            <Link to={'/learning'} className="mt-4 bg-MainBg text-white px-6 py-2 rounded-md hover:bg-MainPrimary hover:text-black">
                            Learn Vocabularies
                            </Link>
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tutorials;