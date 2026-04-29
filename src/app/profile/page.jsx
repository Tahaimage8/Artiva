"use client";

import UpdateUserModal from "@/compornents/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import Link from "next/link";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const userName = user?.name || "User";
  const userEmail = user?.email || "No email found";
  const userImage = user?.image || "";
  const fallbackLetter = userName?.charAt(0)?.toUpperCase() || "U";

  if (userData.isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <p className="animate-pulse text-gray-400">Loading profile...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
        <Card className="w-full max-w-md border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h1 className="text-2xl font-black">Please Sign In</h1>
          <p className="mt-2 text-sm text-gray-400">
            You need to sign in to view your profile.
          </p>

          <Link href="/signin">
            <Button
              variant="light"
              className="mt-6 bg-linear-to-r from-pink-500 to-violet-600 font-semibold text-white"
            >
              Go to Sign In
            </Button>
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-16 text-white">
      <section className="mx-auto max-w-4xl">
        <Card className="border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
       
          <div className="flex flex-col items-center text-center">
            <Avatar>
              <Avatar.Image
                className="relative h-28 w-28 rounded-full object-cover ring-4 ring-white/10 transition duration-500 group-hover:scale-105"
                alt={userName}
                src={userImage}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback className="relative flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-r from-pink-500 to-violet-600 text-4xl font-black text-white">
                {fallbackLetter}
              </Avatar.Fallback>
            </Avatar>

            <Chip className="mt-5 bg-pink-500/10 text-pink-300">
              Active Account
            </Chip>

            <h1 className="mt-4 text-4xl font-black">
              {userName}
              <span className="text-pink-500">.</span>
            </h1>

            <p className="mt-2 text-gray-400">{userEmail}</p>

            <div className="mt-8 grid w-full gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-gray-400">Account</p>
                <h3 className="mt-1 font-bold text-white">Verified</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-gray-400">Plan</p>
                <h3 className="mt-1 font-bold text-white">Free</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-gray-400">Role</p>
                <h3 className="mt-1 font-bold text-white">Creator</h3>
              </div>
            </div>

        
            <div className="mt-8 grid  md:grid-cols-2 sm:grid-cols-1 gap-4 items-center">
              <Link href="/all-photos">
                <Button className="bg-linear-to-r from-pink-500 to-violet-600 text-white">
                  Explore Gallery
                </Button>
              </Link>

              <Link href="/">
                <Button
                  variant="bordered"
                  className="border-white/15 text-white"
                >
                  Back Home
                </Button>
              </Link>

              
            </div>

            <div className="mt-8 items-center">
                <UpdateUserModal/>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default ProfilePage;
