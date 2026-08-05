import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          Equator <span className="text-sky-500">Finance</span>
        </h1>
        <p className="text-xl text-slate-300">
          Decentralized B2B FX Forward Protocol built on Stellar (Soroban).
          Trustlessly lock in future exchange rates using USDC-settled NDFs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/importer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-lg transition-all"
          >
            Corporate Importer Portal (CFO)
          </Link>
          <Link
            href="/desk"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 shadow-lg transition-all"
          >
            OTC Market Maker Terminal
          </Link>
        </div>
      </div>
    </main>
  );
}
