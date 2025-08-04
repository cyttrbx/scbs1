export default function Wrapper({ children }) {
  return (
    <div className="min-h-screen bg-blue-50 px-32 pt-8 ">
      {children}
    </div>
  );
}
