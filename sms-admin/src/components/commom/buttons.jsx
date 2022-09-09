export function PrimaryButton({ children, onClick, className }) {
  return (
    <div
      onClick={onClick}
      className={`bg-[#93278F]  sm:w-auto inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function SecondaryButton({ children, onClick, className }) {
  return (
    <div
      onClick={onClick}
      className={`bg-primary-grey-50 text-primary-grey-700   inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm ${className} `}
    >
      {children}
    </div>
  );
}
