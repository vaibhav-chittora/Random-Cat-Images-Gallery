import React from 'react';

function Cards({ image }) {
    function clickImage() {
        window.open(image.url, '_blank');
    }

    return (
        <div className="max-w-sm m-2 rounded-lg overflow-hidden shadow-xl cursor-pointer bg-gray-100 shadow-gray-400 group"
            onClick={() => clickImage()}
        >
            <div className="relative">
                <img
                    src={image.url}
                    alt="Cat"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{
                        aspectRatio: '1/1',
                        objectFit: 'cover',
                        maxHeight: '100%',
                        maxWidth: '100%',
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="font-bold text-white text-xl mb-2">
                        Cat Image
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;