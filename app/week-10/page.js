"use client";
import { useUserAuth } from "../contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const handleLogIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleLogOut = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="bg-gray-5 p-4 max-w-5xl mx-auto">
      <div className="text-center">
        {!user ? (
          <div className="text-center border border-gray-300 m-10 p-5 rounded-lg max-w-xs mx-auto">
            <h1> Login with GitHub </h1>
            <div className="">
              <Image
                src="/github-mark.svg"
                alt="GitHub Logo"
                width={64}
                height={64}
                className="mx-auto mb-4 w-16 md:w-24 lg:w-32 h-auto m-5"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded-full cursor-pointer w-full md:w-auto"
                onClick={handleLogIn}
              >
                Login
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 text-center border border-gray-300 m-10 p-5 rounded-lg max-w-xs mx-auto">
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <Link
              href="/week-10/shopping-list"
              className="text-blue-500 hover:underline"
            >
              Go to Shopping List
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded-full cursor-pointer w-full md:w-auto"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
