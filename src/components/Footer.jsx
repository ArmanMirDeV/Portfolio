const Footer = () => {
    return (
        <footer className="py-8 bg-background-dark border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-2 mb-4 group cursor-pointer">
                    <svg className="w-8 h-8 text-primary group-hover:rotate-180 transition-transform duration-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4z"></path>
                    </svg>
                    <span className="text-2xl font-bold text-white tracking-widest uppercase">Al Saidul Arman Mir</span>
                </div>
                <p className="text-sm text-slate-500">© 2026 . All rights reserved by Arman Mir.</p>
            </div>
        </footer>
    );
};

export default Footer;
