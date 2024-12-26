export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[200px]" role="status">
      <div className="relative inline-block w-[80px] h-[80px]">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-4 h-4 rounded-full bg-primary
              animate-[loading_1.2s_linear_infinite]
              ${i === 0 && 'top-2 left-2 animation-delay-[0s]'}
              ${i === 1 && 'top-2 left-8 animation-delay-[-0.4s]'}
              ${i === 2 && 'top-2 left-14 animation-delay-[-0.8s]'}
              ${i === 3 && 'top-8 left-2 animation-delay-[-0.4s]'}
              ${i === 4 && 'top-8 left-8 animation-delay-[-0.8s]'}
              ${i === 5 && 'top-8 left-14 animation-delay-[-1.2s]'}
              ${i === 6 && 'top-14 left-2 animation-delay-[-0.8s]'}
              ${i === 7 && 'top-14 left-8 animation-delay-[-1.2s]'}
              ${i === 8 && 'top-14 left-14 animation-delay-[-1.6s]'}
            `}
          />
        ))}
      </div>
    </div>
  );
};
