const LoadingSpinner = () => (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-8 border-gray-300 border-t-gray-600"></div>
    </div>
);

export default LoadingSpinner;
