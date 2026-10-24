# 6. sınıf başlangıç paketi

150 özgün soru: Matematikte 6 test, Türkçe, Fen Bilimleri ve İngilizcede üçer test; her test 10 soru. Matematik Test 1, Test 4, Test 5 ve Test 6, onar şekilli akıl yürütme sorusu içerir. Test 1, eski 10 soru yerine orta–zor düzeyde 10 şekilli soruyla yenilenmiştir; toplam test ve soru sayısı değişmemiştir. Yalnız birinci dönemin başlangıç konuları. Tüm yıl/müfredat kapsandığı veya MEB onayı bulunduğu iddia edilmez. İkinci dönem için soru eklenmedi.

## Kaynaklar (23–24 Ekim 2026)

- MEB 2026–2027 taslak çerçeve planları: https://tymm.meb.gov.tr/taslak-cerceve-planlari/temel-egitim
- Matematik ilk tema: https://tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/456
- Matematik Deneysel Olasılık (Veriden Olasılığa, MAT.6.6.1): https://tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/462
- Türkçe ilk tema: https://tymm.meb.gov.tr/ortaokul-turkce-dersi/unite/104
- Fen ilk iki ünite: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/409 ve https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/410
- İngilizce: https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/752 ve https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/753

Matematik sorularında EBOB/EKOK terimleri kullanılmaz. Fen soruları sürat için sayısal hesap/birim dönüşümü ve gezegenlerin değişken uydu sayılarını gerektirmez. Öğretim takvimi okulun ilerleyişine göre değişebilir.

## Entegrasyon

İlk 6. sınıf eklemeleri `e152ac2` sürümü üzerine hazırlanmıştır. Şekilli Matematik Test 4, `fbeef87`; Test 5, `a3802ba`; Test 6, `b8fd56a` üzerine eklenmiştir. Test 1 yenilemesi `c6f87d1` üzerine hazırlanmıştır; `/6-sinif/matematik/test-1` adresi ve soru kimlikleri korunmuştur. Ana sayfa kartı korunmuştur; kayıtlı testlerden otomatik üretilen 20 adet 6. sınıf sitemap adresi vardır. Mevcut 5. sınıf dosyaları korunmuştur. Ekrandaki test/soru sayıları ve rota doğrulamasındaki toplamlar veri kayıtlarından hesaplanır.

## Yenilenen Şekilli Matematik Test 1 (24 Ekim 2026)

- Adres: `/6-sinif/matematik/test-1`; konu: **Sayılar ve Nicelikler: Şekilli Orta–Zor Sorular**. Yeni bir test eklenmedi; mevcut Test 1’in on temel sorusu, şekli okuyarak birden fazla adımda düşünmeyi gerektiren on özgün soruyla değiştirildi. Soru kimlikleri `m6-1-t1-01`–`m6-1-t1-10` ve test adresi korunmuştur. Cevap anahtarı: **B, C, D, A, B, C, A, D, A, C**; veride sıfır tabanlı indeksler kullanılır.
- Görseller `public/grade6/matematik/test-1/soru-01.svg`–`soru-10.svg` altındadır. Test 5’teki büyük yazılı yaklaşım kullanılır: 360 birim tuval, dar kenar boşlukları, en az 26 birim metin ve küçük ekranlara uygun alt alta yerleşim. Her görselin Türkçe başlığı, çözümü söylemeyen açıklaması ve gerçek boyutları vardır. Alternatif metinler mevcut sesli okuma, sonuç ve büyütme bileşenlerine aktarılır; ortak arayüz değiştirilmemiştir.
- Matematik Test 2–6, diğer derslerdeki sorular, önceki 30 SVG, 5. sınıf, bağımlılıklar ve ortak bileşenler korunmuştur. Toplamlar 15 test / 150 soru / 40 görsel / 20 adet 6. sınıf rotasıdır. Önceki 140 soru veri karşılaştırmasıyla; izin verilen üç düzenlenmiş dosya dışındaki 1243 mevcut dosya bayt karşılaştırmasıyla doğrulanmıştır.
- On SVG 238, 320 ve 360 piksel genişlikte rasterleştirilmiştir. 238 ve 320 piksel çıktılarının tamamı görsel olarak incelenmiş, 238 piksel çıktıları bağımsız ikinci incelemeden geçmiştir. En küçük metin 238 pikselde yaklaşık 17,2 piksel görünür. Metin sınırları, çakışmalar, ok yönleri, tablo işaretleri ve cevap ipucu bulunmaması kontrol edilmiştir. On sorunun hesapları programatik olarak ve bağımsız matematik incelemesiyle doğrulanmıştır.

## Şekilli Matematik Test 4 (24 Ekim 2026)

- Adres: `/6-sinif/matematik/test-4`; konu: **Sayılar ve Nicelikler: Şekilli Sorular**.
- Onaylanan 10 sorunun metni ve soru cümlesi birleştirildi; seçenek sırası ve açıklamalar korundu. Cevap anahtarı: **B, D, C, A, D, C, A, B, B, A**; veride sıfır tabanlı indeksler kullanılır.
- Görseller `public/grade6/matematik/test-4/soru-01.svg`–`soru-10.svg` altındadır. SVG'ler statik, kendi kendine yeterli ve haricî kaynak, betik veya gömülü HTML içermeyen vektörlerdir. Yeni bağımlılık eklenmedi.
- Her şeklin çözümü söylemeden verilerini aktaran Türkçe alternatif metni vardır. Soru ekranı, sonuç ekranı, büyütme penceresi ve sesli okuma bu metni kullanır. Görseller gerçek 460 × 145 oranıyla görüntülenir; mevcut büyütme, odak yönetimi ve mobil sayfa yakınlaştırması korunur.
- Önceki 120 soru değişmedi. 10 yeni sorunun metin, seçenek, cevap ve açıklamaları ile SVG dosyalarının baytları onaylanan kaynakla karşılaştırıldı. 10 SVG ayrıca rasterleştirilip görsel olarak incelendi.

## Şekilli Matematik Test 5 (24 Ekim 2026)

- Adres: `/6-sinif/matematik/test-5`; konu: **Sayılar ve Nicelikler: Şekilli Akıl Yürütme**. Cevap anahtarı: **A, C, D, B, A, B, C, D, A, B**; veride sıfır tabanlı indeksler kullanılır.
- Görseller `public/grade6/matematik/test-5/soru-01.svg`–`soru-10.svg` altındadır. Her sorunun Türkçe alternatif metni, her SVG'nin başlığı ve açıklaması bulunur. Görseller pasif ve kendi kendine yeterlidir; yeni bağımlılık yoktur.
- Mobil okunabilirlik için yeni görseller 360 birim genişlikte, dar kenar boşluklarıyla ve en az 26 birim yazıyla hazırlanmıştır. Önceki Test 4'ün 460 birim genişlikteki 10–12 birim etiketlerine göre aynı gösterim genişliğinde yazılar belirgin biçimde büyüktür. Geniş yan yana paneller yerine gerektiğinde alt alta yerleşim kullanılır.
- On SVG, 238, 320 ve 360 piksel genişlikte rasterleştirildi; 238 ve 320 piksel çıktıları görsel olarak incelendi. 238 pikselde en küçük etiket yaklaşık 17,2 piksel görünür. Metin sınırları ve yazı boyutları ayrıca otomatik kontrol edildi; sorular ve şekiller bağımsız ikinci incelemeden geçti.
- Ortak test arayüzü, görsel büyütme ve mobil yakınlaştırma davranışı değiştirilmemiştir. Önceki 130 soru veri karşılaştırmasıyla, Test 4'ün 10 SVG dosyası bayt karşılaştırmasıyla doğrulandı; yeni soru metinleri, seçenekleri, cevapları ve açıklamaları denetlenen kaynakla eşleşir.

## Şekilli Matematik Test 6 (24 Ekim 2026)

- Adres: `/6-sinif/matematik/test-6`; konu: **Deneysel Olasılık: Şekilli Akıl Yürütme**. Birinci dönemde, 2026–2027 çerçeve planındaki çarpanlar-katlar konusunun ardından gelen Veriden Olasılığa temasını (MAT.6.6.1) çalıştırır. Orta–zor düzeydeki on soru eksik sıklık, farklı tekrar sayıları, birleşik kayıtlar, ek denemeler ve gözleme dayalı yorumlama üzerine kuruludur. Cevap anahtarı: **B, D, A, C, B, A, D, C, B, A**; veride sıfır tabanlı indeksler kullanılır.
- Yalnızca gözlenen deney verileri kullanılır. Çark dilimlerinden veya torba içeriğinden teorik olasılık hesaplatılmaz; iki veya daha fazla olaylı deneylere girilmez. Birden fazla turdaki kayıtlar, aynı tek olayın tekrarı olarak ele alınır. Deneysel sıklık ile gelecekteki kesin sonuç birbirinden ayrılır.
- Görseller `public/grade6/matematik/test-6/soru-01.svg`–`soru-10.svg` altındadır. Test 5’te onaylanan büyük yazılı yaklaşım korunmuştur: 360 birim genişlik, en az 26 birim yazı, dar kenar boşlukları ve kısa etiketler. Tablo, deney kartı, kümülatif akış ve nokta gösterimleri kullanılır; renkler metin ve sembollerle birlikte verilir.
- Her soruda çözümü açıklamadan gözlemleri aktaran Türkçe alternatif metin; her SVG’de başlık, açıklama ve gerçek boyutlar bulunur. Ortak test arayüzü, görsel büyütme ve mobil yakınlaştırma davranışı değiştirilmemiştir. Yeni bağımlılık eklenmemiştir.
- On yeni SVG 238, 320 ve 360 piksel genişlikte rasterleştirildi; 238 ve 320 piksel çıktıları görsel olarak incelendi. En küçük etiket 238 pikselde yaklaşık 17,2 piksel görünür. Tüm metinler sınırlar içindedir; üst üste binen etiket yoktur. Önceki 140 soru veri karşılaştırmasıyla ve önceki 20 SVG SHA-256/bayt karşılaştırmasıyla korunmuştur. Yeni metin, seçenek, cevap ve açıklamalar denetlenen içerikle birebir eşleşir. On sorunun kesin hesapları programatik olarak, matematiksel içeriği ve 238 pikseldeki görselleri bağımsız ikinci incelemeyle doğrulanmıştır.

## Kontroller ve sınırlar

- 15 test / 150 soru / 40 görsel; benzersiz kimlikler, her soruda dört farklı seçenek, geçerli cevap indeksleri, yerel görsel yolları, alternatif metinler, boyutlar ve pasif SVG içeriği doğrulandı.
- Cevap anahtarları ve açıklamalar ikinci bir incelemeden geçti.
- `a3802ba` tabanlı Test 5 eklemesinde `npm ci`, TypeScript ve Next.js üretim derlemesi başarılı; 323 sayfa oluşturuldu. 19 adet 6. sınıf rotası, sitemap adresleri, tüm test kartları, 14 test / 140 soru toplamları, ana sayfa bağlantısı, canonical adresleri, mobil yakınlaştırma ayarı ve soru/görsel verileri statik olarak doğrulandı. Test URL kararlılığı kontrolü kayıtlı testleri geçici veriyle değiştirmez.
- `b8fd56a` tabanlı Test 6 eklemesinde `npm ci`, TypeScript, veri doğrulaması ve Next.js üretim derlemesi başarılı; 324 sayfa oluşturuldu. 20 adet 6. sınıf rotası ve sitemap adresi, 15 test kartı / 150 soru, dinamik toplamlar, ana sayfa bağlantısı, canonical adresleri, mobil yakınlaştırma ayarı, soru/görsel işaretlemesi, kararlı test URL’leri ve mevcut 5. sınıf sitemap girdileri doğrulandı.
- `c6f87d1` tabanlı Test 1 yenilemesinde `npm ci`, TypeScript, veri/koruma doğrulaması ve Next.js üretim derlemesi başarılı; 324 sayfa oluşturuldu. 20 adet 6. sınıf rotası, sitemap, 15 test kartı / 150 soru, 40 görsel, yeni Test 1 başlangıç görseli ve büyütme/alternatif metin işaretlemesi doğrulandı.
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
