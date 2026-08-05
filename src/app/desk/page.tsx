'use client';

import Link from 'next/link';

export default function DeskTerminal() {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-white">OTC Market Maker Terminal</h1>
          <p className="text-slate-400 text-sm">Quote RFQs and manage institutional liquidity</p>
        </div>
        <Link href="/" className="text-slate-400 hover:text-white text-sm">
          ← Back to Home
        </Link>
      </div>

      <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
        <h2 className="text-xl font-semibold text-white">Live RFQ Order Flow</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-950 text-slate-300 uppercase text-xs">
              <tr>
                <th className="p-3">RFQ ID</th>
                <th className="p-3">Pair</th>
                <th className="p-3">Notional (USDC)</th>
                <th className="p-3">Maturity</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800/50">
                <td className="p-3 font-mono">rfq_104</td>
                <td className="p-3 font-semibold text-white">NGN/USD</td>
                <td className="p-3">$100,000</td>
                <td className="p-3">90 Days</td>
                <td className="p-3 text-emerald-400">OPEN</td>
                <td className="p-3 text-right">
                  <button className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold">
                    Quote Rate
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
