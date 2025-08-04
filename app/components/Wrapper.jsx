export default function Wrapper({ children }) {
  return (
    <div className="min-h-screen bg-indigo-50 px-4 md:px-4 lg:px-32 pt-8 ">
      {children}
    </div>
  );
}
