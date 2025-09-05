interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 rounded p-2 w-full transition-colors duration-200 ${props.className}`}
    />
  );
}
