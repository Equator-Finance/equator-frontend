'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ImporterPortal() {
  const [currencyPair, setCurrencyPair] = useState('NGN/USD');
  const [notional, setNotional] = useState(100000);
  const [duration, setDuration] = useState(90);

  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Corporate Importer Portal</h1>
          <p className="text-slate-400 text-sm">Request and manage B2B FX Forward Hedges</p>
        </div>
        <Link href="/" className="text-slate-400 hover:text-white text-sm">
          ← Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-6">
          <h2 className="text-xl font-semibold text-white">Submit New RFQ</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Currency Pair</label>
              <select
                value={currencyPair}
                onChange={(e) => setCurrencyPair(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500"
              >
                <option value="NGN/USD">NGN/USD (Nigerian Naira)</option>
                <option value="ARS/USD">ARS/USD (Argentine Peso)</option>
                <option value="COP/USD">COP/USD (Colombian Peso)</option>
                <option value="BRL/USD">BRL/USD (Brazilian Real)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Notional Amount (USDC)</label>
              <input
                type="number"
                value={notional}
                onChange={(e) => setNotional(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Hedge Duration (Days)</label>
              <div className="grid grid-cols-3 gap-2">
                {[30, 60, 90].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d)}
                    className={`py-2 rounded-lg border text-sm font-medium transition-all ${
                      duration === d
                        ? 'bg-sky-600 border-sky-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {d} Days
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="w-full py-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-lg transition-all"
            >
              Broadcast RFQ to Desks
            </button>
          </div>
        </div>

        <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
          <h2 className="text-xl font-semibold text-white">Active Forward Contracts</h2>
          <div className="text-slate-500 text-sm text-center py-12">
            No active hedges found. Submit an RFQ above to lock in rates.
          </div>
        </div>
      </div>
    </div>
  );
}
