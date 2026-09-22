export function Button({ onClick, disabled, children }) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`px-10 py-5 my-10 mx-20 text-white text-xl rounded-xl ${
                disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-400 cursor-pointer'
            }`}
        >
            {children}
        </button>
    )
}
