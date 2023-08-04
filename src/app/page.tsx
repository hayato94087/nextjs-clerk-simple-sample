import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  currentUser,
} from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <h1>My App</h1>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      </header>
      <main className="text-lg">
        <SignedIn><div>{user?.firstName}</div></SignedIn>
        <SignedIn><div>{JSON.stringify(user?.privateMetadata)}</div></SignedIn>
      </main>
    </>
  );
}
