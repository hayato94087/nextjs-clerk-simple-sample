import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
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
      <main className="text-lg">テストページ</main>
    </>
  );
}
