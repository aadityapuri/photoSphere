function CustomButton({ children, onClick, className = '', type = 'button', disabled = false } : {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        disabled? 'bg-purple-300 curson-not-allowed' : 'bg-purple-600 hover: bg-purple-700'
      }
       text-white px-4 py-2 rounded transition-colors ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default CustomButton;