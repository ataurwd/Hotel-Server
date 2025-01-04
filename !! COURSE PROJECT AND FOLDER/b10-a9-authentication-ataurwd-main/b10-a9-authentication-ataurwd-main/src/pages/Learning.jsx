import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AOS from 'aos';


const Learning = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });  
      }, []);
    const [lessons, setLessons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/category.json');
            const data = await response.json();
            setLessons(data);
        };

        fetchData();
    }, []); // Fetches data on mount

    useEffect(() => {
        if (lessons.length === 0) {
            navigate('/learning'); // Redirect if no lessons found
        }
    }, [lessons, navigate]);

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center my-8">Our Lessons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:my-10 md:my-8 my-2">
                {lessons.map((lesson) => (
                    <Link data-aos="zoom-in"
                        to={`/learning/${lesson.id}`}
                        key={lesson.id}
                        className="bg-MainPrimary cursor-pointer p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <img
                            className="w-20 mx-auto"
                            src="https://i.ibb.co/ZGRdzNV/knowledge.png"
                            alt="Lesson Thumbnail"
                        />
                        <h3 className="text-xl font-bold text-center mb-4">
                            {lesson.lessonName}
                        </h3>
                    </Link>
                ))}
            </div>
            <div className='grid place-items-center lg:my-5'>
                <Link to={'/tutorials'} className='px-5 py-1 bg-MainBg text-white rounded-md'>View more</Link>
            </div>
        </div>
    );
};

export default Learning;
