# 6. sınıf başlangıç paketi

130 özgün soru: Matematikte 4 test, Türkçe, Fen Bilimleri ve İngilizcede üçer test; her test 10 soru. Matematik Test 4, 10 şekilli akıl yürütme sorusu içerir. Yalnız birinci dönemin başlangıç konuları. Tüm yıl/müfredat kapsandığı veya MEB onayı bulunduğu iddia edilmez. İkinci dönem için soru eklenmedi.

## Kaynaklar (23 Ekim 2026)

- MEB 2026–2027 taslak çerçeve planları: https://tymm.meb.gov.tr/taslak-cerceve-planlari/temel-egitim
- Matematik ilk tema: https://tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/456
- Türkçe ilk tema: https://tymm.meb.gov.tr/ortaokul-turkce-dersi/unite/104
- Fen ilk iki ünite: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/409 ve https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/410
- İngilizce: https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/752 ve https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/753

Matematik sorularında EBOB/EKOK terimleri kullanılmaz. Fen soruları sürat için sayısal hesap/birim dönüşümü ve gezegenlerin değişken uydu sayılarını gerektirmez. Öğretim takvimi okulun ilerleyişine göre değişebilir.

## Entegrasyon

İlk 6. sınıf eklemeleri `e152ac2` sürümü üzerine hazırlanmıştır. Şekilli Matematik Test 4, `fbeef87` üzerine eklenmiştir. Ana sayfa kartı korunmuştur; kayıtlı testlerden otomatik üretilen 18 adet 6. sınıf sitemap adresi vardır. Mevcut 5. sınıf dosyaları korunmuştur. Ekrandaki test/soru sayıları ve rota doğrulamasındaki toplamlar veri kayıtlarından hesaplanır.

## Şekilli Matematik Test 4 (24 Ekim 2026)

- Adres: `/6-sinif/matematik/test-4`; konu: **Sayılar ve Nicelikler: Şekilli Sorular**.
- Onaylanan 10 sorunun metni ve soru cümlesi birleştirildi; seçenek sırası ve açıklamalar korundu. Cevap anahtarı: **B, D, C, A, D, C, A, B, B, A**; veride sıfır tabanlı indeksler kullanılır.
- Görseller `public/grade6/matematik/test-4/soru-01.svg`–`soru-10.svg` altındadır. SVG'ler statik, kendi kendine yeterli ve haricî kaynak, betik veya gömülü HTML içermeyen vektörlerdir. Yeni bağımlılık eklenmedi.
- Her şeklin çözümü söylemeden verilerini aktaran Türkçe alternatif metni vardır. Soru ekranı, sonuç ekranı, büyütme penceresi ve sesli okuma bu metni kullanır. Görseller gerçek 460 × 145 oranıyla görüntülenir; mevcut büyütme, odak yönetimi ve mobil sayfa yakınlaştırması korunur.
- Önceki 120 soru değişmedi. 10 yeni sorunun metin, seçenek, cevap ve açıklamaları ile SVG dosyalarının baytları onaylanan kaynakla karşılaştırıldı. 10 SVG ayrıca rasterleştirilip görsel olarak incelendi.

## Kontroller ve sınırlar

- 13 test / 130 soru / 10 görsel; benzersiz kimlikler, her soruda dört farklı seçenek, geçerli cevap indeksleri, yerel görsel yolları, alternatif metinler, boyutlar ve pasif SVG içeriği doğrulandı.
- Cevap anahtarları ve açıklamalar ikinci bir incelemeden geçti.
- `fbeef87` tabanlı şekilli test eklemesinde TypeScript ve Next.js üretim derlemesi başarılı; 322 sayfa oluşturuldu. 18 adet 6. sınıf rotası, sitemap adresleri, ana sayfa bağlantısı, canonical adresleri, mobil yakınlaştırma ayarı ve başlangıç soru/görsel arayüzü statik olarak doğrulandı. Test URL kararlılığı kontrolü artık var olan Test 4'ü geçici veriyle değiştirmez.
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
