export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-300">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to NotForms</h1>
            <p className="text-lg text-white mb-8">Create forms without the hassle.</p>
            <button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
                Get Started
            </button>
        </div>
    );
}