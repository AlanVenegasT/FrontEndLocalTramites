export const PantallaCarga = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="text-center text-white">
            <svg
              className="animate-spin h-12 w-12 mx-auto mb-4 text-white"
              
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-80"
                fill="currentColor"
                d="M10 20A7.5 7.5 0 1 1 17.5 12A7.5 7.5 0 0 1 10 20M10 18A5.5 5.5 0 1 1 15.5 12A5.5 5.5 0 0 1 10 18z"

              ></path>
            </svg>
            <p className="text-lg">Espere un momento...</p>
          </div>
        </div>
        </>
    )
}
