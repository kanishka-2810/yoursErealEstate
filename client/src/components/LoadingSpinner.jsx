const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-7">
      <div className="w-12 h-12 border-4 border-slate-400 border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
