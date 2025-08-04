export default function Wrapper({ children }) {
  return (
    <div className="min-h-screen bg-[#121212]  text-gray-200 p-4">
      {children}
    </div>
  );
}
