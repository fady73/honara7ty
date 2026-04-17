import { metadata } from './metadata';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>{metadata}</head>
            <body>{children}</body>
        </html>
    );
}
