export default function IELTSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang="en" özelliği bu bölümün İngilizce olduğunu tarayıcılara bildirir
    <div lang="en">
      {children}
    </div>
  );
}

