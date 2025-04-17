import React from 'react';

const LoadingSpinner = () => (
    <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="w-16 h-16 border-8 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
    </div>
);

export default LoadingSpinner;
