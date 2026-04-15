import React, { useState } from 'react';

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-sm text-gray-900">
      {/* Header / Logo */}
      <header className="px-8 py-10 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-4xl font-black tracking-tighter">FWRD</h1>
        <div className="text-[11px] font-medium tracking-wide">
          Need assistance? <span className="underline">(866) 434-3169</span> | <span className="underline">Live Chat</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-24">
        
        {/* Left Column: Sign In */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-6">Sign In To My Account</h2>
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="email" 
              className="w-full border border-gray-400 p-3 focus:outline-none focus:border-black"
            />
            <input 
              type="password" 
              placeholder="password" 
              className="w-full border border-gray-400 p-3 focus:outline-none focus:border-black"
            />
            <div className="flex justify-between items-center text-[11px] py-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="accent-black" defaultChecked />
                <span>Remember me</span>
              </label>
              <a href="#" className="underline">Forgot your password?</a>
            </div>
            <button className="w-full bg-black text-white font-bold py-4 uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Sign In
            </button>
          </form>
        </section>

        {/* Right Column: Create Account */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4">Create An Account</h2>
          <p className="text-[12px] mb-4">Creating an account enables you to:</p>
          <ul className="text-[12px] space-y-2 mb-6 list-disc list-inside">
            <li>Check out faster</li>
            <li>Keep track of your orders</li>
            <li>Add favorite items to your wish list</li>
          </ul>

          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="email address" 
              className="w-full border border-gray-400 p-3 focus:outline-none focus:border-black"
            />
            <input 
              type="password" 
              placeholder="create a password" 
              className="w-full border border-gray-400 p-3 focus:outline-none focus:border-black"
            />
            <input 
              type="password" 
              placeholder="verify your password" 
              className="w-full border border-gray-400 p-3 focus:outline-none focus:border-black"
            />
            
            <div className="space-y-4 pt-2">
              <label className="flex items-start space-x-2 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-black" defaultChecked />
                <span className="text-[11px] leading-tight">
                  Be the first to know about new arrivals, sales & promotions by submitting your email. 
                  You can opt out at any time. <a href="#" className="underline">privacy policy</a>
                </span>
              </label>

              <div className="flex items-center space-x-6 text-[12px]">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" className="accent-black" /> <span>Women</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" className="accent-black" /> <span>Men</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" className="accent-black" defaultChecked /> <span>Both</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-black text-white font-bold py-4 uppercase tracking-widest mt-4 hover:bg-gray-800 transition-colors">
              Agree and Continue
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-[10px] text-gray-600 pb-10">
        By signing in or clicking "Agree and Continue", you agree to our 
        <a href="#" className="underline mx-1">Terms of Service</a>. 
        Please also read our <a href="#" className="underline mx-1">Privacy Policy</a>.
      </footer>
    </div>
  );
};

export default AuthPage;