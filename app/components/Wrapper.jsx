export default function Wrapper({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1a2233] to-[#101622] text-gray-200 p-4">
      {children}
    </div>
  );
}
