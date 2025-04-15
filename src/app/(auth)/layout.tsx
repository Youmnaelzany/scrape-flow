import Logo from "@/components/Logo";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <Logo />
      {children}
    </div>
  );
}
