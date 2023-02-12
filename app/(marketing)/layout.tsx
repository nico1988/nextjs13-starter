export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <h2 className="mt-2 text-center text-xl">
        this is a custom layout, any page in the directory or below will render
        by this template
      </h2>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
