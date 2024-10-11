import { ClerkProvider, SignInButton, SignedIn, SignedOut,UserButton} from '@clerk/nextjs';
import '../globals.css';
export default function RootLayout({}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </ClerkProvider>
  )
}