import { ImageResponse } from 'next/og';

export const alt = 'TestDünya — Online testler ve eğitici oyunlar';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px', background: '#0f172a', color: '#f8fafc', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 76, height: 76, borderRadius: 20, background: '#4f46e5', fontSize: 48, fontWeight: 700 }}>T</div>
        <div style={{ display: 'flex', fontSize: 48, fontWeight: 700 }}>TestDünya</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', fontSize: 66, fontWeight: 700, lineHeight: 1.12 }}>Öğren. Çöz. Kendini geliştir.</div>
        <div style={{ display: 'flex', fontSize: 31, color: '#cbd5e1' }}>Online testler, açıklamalı sorular ve eğitici oyunlar</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '2px solid #334155', fontSize: 28 }}>
        <span style={{ color: '#a5b4fc' }}>5. ve 6. sınıf · LGS · Kelime ve mantık</span>
        <span>testdunya.net</span>
      </div>
    </div>,
    size,
  );
}
