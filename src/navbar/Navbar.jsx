import React, { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';

const Navbar = ({ handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');

    useEffect(() => {
        async function fetchBreeds() {
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
                    headers: { 'x-api-key': 'YOUR_CAT_API_KEY' }
                });
                setBreeds(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBreeds();
    }, []);

    function handleSearchButton() {
        handleSearch(selectedBreed ? `breed_ids=${selectedBreed}` : '');
    }

    const handleClearSearch = () => {
        setSelectedBreed('');
        handleSearch('');
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Breed Dropdown */}
                    <div className="flex-1 mx-4 relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <AiOutlineSearch className="text-gray-400" size={20} />
                        </span>
                        <select
                            className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                            onChange={(e) => setSelectedBreed(e.target.value)}
                            value={selectedBreed}
                        >
                            <option value="">Select a breed</option>
                            {breeds.map((breed) => (
                                <option key={breed.id} value={breed.id}>{breed.name}</option>
                            ))}
                        </select>
                        {selectedBreed && (
                            <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={handleClearSearch}>
                                <AiOutlineClose className="text-gray-400" size={20} />
                            </span>
                        )}
                    </div>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                        type='button'
                        onClick={handleSearchButton}
                    >
                        Search
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;