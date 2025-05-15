import { InputBox } from "../components/ui/Input";

export const SignUp = () => {
    return(
        <div className="w-screen h-screen bg-purple-500 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                        <InputBox placeholder="Enter your username"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <InputBox placeholder="Enter your password" type="password"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Confirm Password</label>
                        <InputBox placeholder="Confirm your password" type="password"/>
                    </div>
                    <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Sign Up</button>
                </form>
                <p className="mt-4 text-center text-gray-600 text-sm">
                    Already have an account? <a href="/signin" className="text-purple-500 hover:text-purple-700">Sign In</a>
                </p>
            </div>
            </div>
    )};