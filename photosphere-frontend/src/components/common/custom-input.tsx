function CustomInput({
  value = '',
  onChange = () => {},
  placeholder = '',
  type = 'text',
  label = 'Input',
  className = ''
} : {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className="mb-4">
      <label className="text-sm text-gray-600 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full mt-2 p-2 border border-gray-300 rounded ${className}`}
      />
    </div>
  )
}
export default CustomInput;