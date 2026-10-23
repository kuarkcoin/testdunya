# 6. sınıf başlangıç paketi

120 özgün soru: Matematik, Türkçe, Fen Bilimleri, İngilizce; her derste 3 test × 10 soru. Yalnız birinci dönemin başlangıç konuları. Tüm yıl/müfredat kapsandığı veya MEB onayı bulunduğu iddia edilmez. İkinci dönem için soru eklenmedi.

## Kaynaklar (23 Ekim 2026)

- MEB 2026–2027 taslak çerçeve planları: https://tymm.meb.gov.tr/taslak-cerceve-planlari/temel-egitim
- Matematik ilk tema: https://tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/456
- Türkçe ilk tema: https://tymm.meb.gov.tr/ortaokul-turkce-dersi/unite/104
- Fen ilk iki ünite: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/409 ve https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/410
- İngilizce: https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/752 ve https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/753

Matematik sorularında EBOB/EKOK terimleri kullanılmaz. Fen soruları sürat için sayısal hesap/birim dönüşümü ve gezegenlerin değişken uydu sayılarını gerektirmez. Öğretim takvimi okulun ilerleyişine göre değişebilir.

## Entegrasyon

6. sınıf eklemeleri `e152ac2` sürümü üzerine hazırlanmıştır. Ana sayfa kartı ve 17 adet 6. sınıf sitemap adresi eklenmiştir. Mevcut 5. sınıf dosyaları korunmuştur.

## Kontroller ve sınırlar

- 12 test / 120 soru; benzersiz kimlikler, her soruda dört farklı seçenek, geçerli cevap indeksleri doğrulandı.
- Cevap anahtarları ve açıklamalar ikinci bir incelemeden geçti.
- Production kaynağı `e152ac2` üzerinde TypeScript ve Next.js üretim derlemesi başarılı; 321 sayfa oluşturuldu. 17 yeni 6. sınıf rotası, sitemap adresleri, ana sayfa bağlantısı, canonical adresleri, mobil yakınlaştırma ve başlangıç soru arayüzü statik olarak doğrulandı.
- Etkileşimli tarayıcı testi ortam kısıtı nedeniyle tamamlanamadı; mobil tıklama akışları henüz doğrulanmış değildir.
- Mevcut 5. sınıf dosyaları değiştirilmedi. Ana sayfa ve sitemap yalnızca 6. sınıf eklemeleri içerir.
- Bu başlangıç ekranında yapay zekâ sonuç analizi ve PDF indirme yoktur; mevcut 5. sınıf özellikleri etkilenmez.

## Yeniden doğrulama

```bash
npm ci
npx tsc --noEmit --incremental false
node scripts/validate-grade6.cjs
npm run build
node scripts/validate-grade6-routes.cjs
```

Production kaynağında `package.json` içinde zaten tanımlı olan `jspdf`, lockfile içinde eksikti. `package-lock.json` yalnızca bu bağımlılık ve onun alt bağımlılıkları için tamamlandı; mevcut bağımlılık sürümleri değiştirilmedi. `npm ci` ve son lockfile için `npm ci --dry-run` başarılı.

`next` ve `eslint-config-next` 15.0.5 → 15.5.28 olarak güncellendi. Bu sürüm, 14 Ekim 2026 tarihli resmi güvenlik duyurusunda önerilen Maintenance LTS yamasıdır: https://nextjs.org/blog/nextjs-security-update-october-14-2026 . Kurulumda Next.js tarafından kullanılan `sharp` sürümü 0.35.5 olarak doğrulandı; React 18.3.1 ve diğer doğrudan bağımlılık sürümleri korunmuştur. Next.js tarafından üretilen `next-env.d.ts` rota tipi başvurusu güncellenmiştir.
