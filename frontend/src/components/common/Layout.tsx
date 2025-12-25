import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-linear-to-b from-slate-100 to-slate-50">
            {/* Navbar could go here */}
            <main>
                {children}
            </main>
            {/* Footer could go here */}
        </div>
    );
};
