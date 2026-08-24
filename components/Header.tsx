import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold">Habit Tracker</h1>
        <nav>
          <Link href="/" className="text-sm text-blue-600 hover:underline">Home</Link>
        </nav>
      </div>
    </header>
  );
}