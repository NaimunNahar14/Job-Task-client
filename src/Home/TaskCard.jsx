import React, { useEffect, useState } from 'react';

const TaskCard = () => {
    const [data, setData] = useState(null);

    const url = 'http://localhost:5000/task';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [url]);
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    {/* You can display an image here if the data includes an image URL */}
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {data.title}
                    </div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                        {data.email}
                    </a>
                    <p className="mt-2 text-gray-500">{data.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;