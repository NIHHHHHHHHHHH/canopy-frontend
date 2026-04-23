
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="bg-bg-page min-h-screen flex justify-center px-4 py-8">
      <div className="bg-bg-container w-full max-w-7xl rounded-3xl border border-border-light shadow-[0_0_40px_rgba(0,0,0,0.03)]">
        <Navbar />
      </div>
    </main>
  );
}