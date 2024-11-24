import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick, customClass }) {
  const base =
    "inline-block text-sm font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: `${base} rounded-md bg-red-600 text-white hover:bg-red-700 focus:bg-red-600 px-4 py-2`,
    small: `${base} uppercase rounded-lg bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    round: `${base} uppercase rounded-lg bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 px-2.5 py-1 md:px-3.5 md:py-2 text-sm`,
    accept: `${base} uppercase rounded-lg bg-green-400 text-stone-800 hover:bg-green-600 focus:bg-green-600 focus:ring-green-300 px-4 py-2 md:px-6 md:py-3 text-sm`,
    reject: `${base} uppercase rounded-lg bg-red-00 text-stone-800 hover:bg-red-600 focus:bg-red-600 focus:ring-red-300 px-4 py-2 md:px-6 md:py-3 text-sm`,
    start: `${base}  rounded-lg bg-green-600 text-white hover:bg-green-800 focus:bg-green-300 px-4 py-2 md:px-6 md:py-3`,
    answer: `${base} rounded-full border-4 border-custom-pink text-white hover:border-yellow-300 focus:border-yellow-300 px-4 py-2 md:px-6 md:py-3 text-sm w-full`,
    next: `${base} rounded-lg bg-gray-400 text-white hover:border-gray-500 focus:border-gray-300 px-4 py-2 md:px-6 md:py-3 text-sm`,
    end: `${base} rounded-lg bg-red-600 text-white hover:border-red-800 focus:border-red-300 px-4 py-2 md:px-6 md:py-3 text-sm`,
    dark: `rounded-full px-4 py-2 md:px-6 md:py-3`,
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      toast.error("You need to choose 3 skills to proceed!");
    } else if (onClick) {
      onClick();
    }
  };

  if (to)
    return (
      <Link
        to={to}
        className={`${styles[type]} ${customClass}`}
        onClick={handleClick}
      >
        {children}
      </Link>
    );

  return (
    <button
      disabled={disabled}
      className={`${styles[type]} ${customClass}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;