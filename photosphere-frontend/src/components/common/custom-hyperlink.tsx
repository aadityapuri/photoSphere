function CustomHyperlink(
  { href, 
    children, 
    className = '',
    normalTextBeforeLink = '',
    normalTextAfterLink = ''
  }: { href: string; 
    children: React.ReactNode; 
    className?: string ;
    normalTextBeforeLink?: string;
    normalTextAfterLink?: string;
}) {
  return (
    <p className="text-gray-500 text-sm mt-4">
      {normalTextBeforeLink}
      <a href = {href} 
        className={`text-purple-600 hover:underline ${className}`}>
        {children}
      </a>
      {normalTextAfterLink}
    </p>
  )
};
export default CustomHyperlink;