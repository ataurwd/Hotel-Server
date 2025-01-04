import AOS from 'aos';
import { useEffect } from 'react';

const HomeCard = () => {

useEffect(() => {
   AOS.init({ duration: 1000, once: true });  
 }, []);
    return (
        <div>
            <div className="text-center lg:my-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Work Process</h2>
                <p className="text-gray-600 text-lg">Discover how we turn ideas into reality with a seamless, efficient, and transparent approach tailored to meet your needs.</p>
            </div>
            <div className="lg:px-20 md:px-14 px-10 gap-10 lg:flex space-y-5">

                <div data-aos="zoom-in" className="bg-MainPrimary grid place-items-center space-y-4 rounded-xl shadow-lg mt-4">
                <h1 className="lg:text-3xl text-center font-bold md:text-xl py-4 px-5">
                        Finally, a dictionary with a soul
                    </h1>
                    <img
                        className="w-[180px]"
                        src="https://www.vocabulary.com/images/sign-up-tile/dictionary-soul.svg"
                        alt="Dictionary with a soul"
                    />
                    <p className="text-center p-5">
                        Our definitions were written by humans, for humans. Each word has a friendly explanation that makes it easy to remember.
                    </p>
                </div>
                <div data-aos="zoom-in" className="bg-MainPrimary grid place-items-center space-y-4 rounded-xl shadow-lg">
                    <h1 className="lg:text-3xl text-center font-bold md:text-xl py-4 px-5">
                        Real world examples with practice
                    </h1>
                    <img
                        className="w-[200px]"
                        src="https://www.vocabulary.com/images/sign-up-tile/real-example.svg"
                        alt="Real world examples"
                    />
                    <p className="text-center p-5">
                        Find the word you’re looking for faster than any other online dictionary. That’s less time searching, more time learning.
                    </p>
                </div>
                {/* Card 2 */}

                {/* Card 3 */}
                <div data-aos="zoom-in" className="bg-MainPrimary grid place-items-center space-y-4 rounded-xl shadow-lg">
                    <h1 className="lg:text-3xl text-center font-bold md:text-xl py-4 px-5">
                        World’s smartest, fastest dictionary
                    </h1>
                    <img
                        className="w-[200px]"
                        src="https://www.vocabulary.com/images/sign-up-tile/fastest-smartest.svg"
                        alt="Smartest and fastest dictionary"
                    />
                    <p className="text-center p-5">
                        Find the word you’re looking for faster than any other online dictionary. That’s less time searching, more time learning.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
