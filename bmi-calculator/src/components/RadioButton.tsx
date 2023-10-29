interface RadioButtonProps {
  name: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  children: React.ReactNode;
}

export default function RadioButton({
  name,
  children,
  onClick,
}: RadioButtonProps) {
  return (
    <div className="flex items-center" onClick={onClick}>
      <input
        id={name}
        type="radio"
        value=""
        name={name}
        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={name}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {children}
      </label>
    </div>
  );
}
