export default function Wrapper({ children }) {
  return (
    <div className="min-h-screen bg-blue-100 px-4 md:px-4 lg:px-32 pt-8 ">
      {children}
    </div>
  );
}
