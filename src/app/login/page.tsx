'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow-lg space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Login Agen</h1>
          <p className="text-sm text-gray-500 mt-1">
            Masuk untuk mengelola listingan & promosi iklan Anda
          </p>
        </div>

        {errorMsg && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-200">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="agen@properti.com"
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 text-sm outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 text-sm outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-3 rounded-xl transition"
          >
            {loading ? 'Masuk...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Belum punya akun?{' '}
          <a href="/register" className="text-indigo-600 font-semibold hover:underline">
            Daftar Agen Baru
          </a>
        </p>
      </div>
    </div>
  );
}
