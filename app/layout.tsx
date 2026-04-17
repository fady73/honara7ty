import { metadata } from './metadata';
import './globals.css';

export const metadata: Metadata = {
  title: "Honara7ty",
  description: "Honara7ty helps users build a daily devotional habit with reading plans, reminders, prayer notes, and spiritual reflections.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>{metadata}</head>
            <body>{children}</body>
        </html>
    );
}
