const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 border-b-purple-300 animate-spin-slow"></div>
        <div className="absolute inset-0 rounded-full border-4 border-l-pink-500 border-r-pink-300 animate-spin-slow-reverse"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
