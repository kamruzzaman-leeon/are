import React from 'react';

const ReviewCard = () => {
    return (
        <div className='border-2'>
            <div className="relative overflow-hidden bg-white px-6 sm:py-8 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <figure className="">
                        <blockquote className="text-center text-sm text-gray-900 sm:text-base italic">
                            <p>
                                “Teaching on <strong className='text-lg'>aRe</strong> has been a game-changer. The tools are intuitive, and the support is excellent, allowing me to focus on what I love—teaching. Connecting with students globally and seeing their progress has been incredibly rewarding. I highly recommend this platform to any educator.”
                            </p>
                        </blockquote>
                        <figcaption className="mt-4">
                            <img
                                alt="Profile"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="mx-auto h-10 w-10 rounded-full"
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-sm italic">
                                <div className="font-semibold text-gray-900">Judith Black</div>
                                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                    <circle r={1} cx={1} cy={1} />
                                </svg>
                                <div className="text-gray-600">Teacher</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
