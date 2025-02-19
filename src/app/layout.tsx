import './globals.css'
import type { Metadata } from 'next'
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import Navigation from '@/components/Navigation';

Amplify.configure(awsconfig);

export const metadata: Metadata = {
  title: 'ComplAInce',
  description: 'AI-powered compliance tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}