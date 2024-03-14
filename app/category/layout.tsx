import MenuBar from "@/components/MenuBar";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <MenuBar />
      {children}
    </section>
  );
}
