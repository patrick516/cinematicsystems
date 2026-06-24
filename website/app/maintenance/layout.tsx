export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: "#030712",
        minHeight: "100vh", // if you want full height
      }}
    >
      {children}
    </div>
  );
}
