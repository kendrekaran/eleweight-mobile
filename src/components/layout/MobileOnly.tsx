export function MobileOnly({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Mobile view - show the app */}
      <div className="block md:hidden">
        {children}
      </div>
      
      {/* Desktop view - show message */}
      <div className="hidden md:flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
        <div className="max-w-md text-center space-y-6 animate-in fade-in zoom-in duration-700">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-500/20">
            <svg 
              className="w-12 h-12 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
              />
            </svg>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-white">
              Mobile Only
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              This fitness app is designed exclusively for mobile devices. 
              Please open this page on your smartphone for the best experience.
            </p>
          </div>
          
       
        </div>
      </div>
    </>
  )
}
