import { ButtonVariants } from "@/types";

type ButtonProps = {
  text: string;
  variant: ButtonVariants;
  icon?: React.ReactNode;
};

function Button({ text, variant, icon }: ButtonProps) {
  const variantStyle =
    variant === ButtonVariants.Purple
      ? `bg-purple-600 hover:bg-purple-700 focus:ring-2 ring-purple-500`
      : "bg-blue-600 hover:bg-blue-700 focus:ring-2 ring-blue-500";

  return (
    <button
      className={`flex p-3 px-4 rounded-xl font-semibold gap-2 items-center transition-all ${variantStyle}`}
    >
      {icon && (
        <div className="mb-1 font-bold text-lg h-3 w-3 text-white">{icon}</div>
      )}
      <div className="text-sm px-2">{text}</div>
    </button>
  );
}

export default Button;
