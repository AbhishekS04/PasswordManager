
import { SignInButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <SignInButton />
      </div>
    </div>
  );
}
