import { Suspense } from "react";
import SiralamaClient from "./SiralamaClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Yükleniyor…</div>}>
      <SiralamaClient />
    </Suspense>
  );
}