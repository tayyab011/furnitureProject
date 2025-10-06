import React from 'react';

const Loader = () => {
    return (
      <div className="min-h-screen bg-gray-300 flex justify-center items-center">
        <div className="loading loading-dots loading-xl mx-auto"></div>
      </div>
    );
};

export default Loader;