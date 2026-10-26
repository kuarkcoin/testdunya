# 6. sınıf başlangıç paketi

330 özgün soru: Matematikte 10, Fen Bilimlerinde 10, Türkçede 3 ve İngilizcede 10 test; her test 10 soru. Matematik Test 1, Test 4, Test 5 ve Test 6, onar şekilli akıl yürütme sorusu içerir. Test 1, eski 10 soru yerine orta–zor düzeyde 10 şekilli soruyla yenilenmiştir; toplam test ve soru sayısı değişmemiştir. Test 7, Test 8, Test 9 ve Test 10, yedişer şekilli ve üçer şekilsiz orta–zor soru içerir. Fen Test 1, Test 2 ve Test 3, yedişer şekilli ve üçer şekilsiz orta–zor soruyla yenilenmiştir. Testler mevcut birinci dönem kayıt yapısında tutulur; yeni matematik testleri yılın farklı temalarından seçilmiştir. Tüm yıl/müfredat kapsandığı veya MEB onayı bulunduğu iddia edilmez. İkinci dönem için soru eklenmedi.

## Kaynaklar (23–24 Ekim 2026)

- MEB 2026–2027 taslak çerçeve planları: https://tymm.meb.gov.tr/taslak-cerceve-planlari/temel-egitim
- Matematik İstatistiksel Araştırma (MAT.6.5.1–MAT.6.5.2): https://tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/461
- Matematik ilk tema: https://tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/456
- Matematik Ondalık Gösterimler ve Uzunluk Ölçme (MAT.6.1.5–MAT.6.1.8): https://tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/457
- Matematik Deneysel Olasılık (Veriden Olasılığa, MAT.6.6.1): https://tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/462
- Türkçe ilk tema: https://tymm.meb.gov.tr/ortaokul-turkce-dersi/unite/104
- Fen ilk iki ünite: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/409 ve https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/410
- İngilizce: https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/752 ve https://tymm.meb.gov.tr/ingilizce-dersi-temel-egitim/unite/753

Matematik sorularında EBOB/EKOK terimleri kullanılmaz. Fen soruları sürat için sayısal hesap/birim dönüşümü ve gezegenlerin değişken uydu sayılarını gerektirmez. Öğretim takvimi okulun ilerleyişine göre değişebilir.

## Entegrasyon

İlk 6. sınıf eklemeleri `e152ac2` sürümü üzerine hazırlanmıştır. Şekilli Matematik Test 4, `fbeef87`; Test 5, `a3802ba`; Test 6, `b8fd56a` üzerine eklenmiştir. Test 1 yenilemesi `c6f87d1` üzerine hazırlanmıştır; `/6-sinif/matematik/test-1` adresi ve soru kimlikleri korunmuştur. Ana sayfa kartı korunmuştur; kayıtlı testlerden otomatik üretilen 31 adet 6. sınıf sitemap adresi vardır. Mevcut 5. sınıf dosyaları korunmuştur. Ekrandaki test/soru sayıları ve rota doğrulamasındaki toplamlar veri kayıtlarından hesaplanır.

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

## Matematik Test 7: Ondalık Gösterimler ve Uzunluk Ölçme (24 Ekim 2026)

- Adres: `/6-sinif/matematik/test-7`; konu: **Ondalık Gösterimler ve Uzunluk Ölçme: Orta–Zor Sorular**. `5952b62` sürümü üzerine eklenmiştir. İlk 7 soru şekilli, son 3 soru şekilsizdir. Cevap anahtarı: **B, C, D, A, B, C, A, D, B, C**; veride sıfır tabanlı indeksler kullanılır.
- Sayı doğrusu ve basamak tablosu okuma, kesir–ondalık dönüşümü, yuvarlama koşullarından rakam bulma, kesim kaybı, eşit paylaşma, uzunluk birimleri ve erken yuvarlamanın oluşturduğu fark ele alınır. Sorular MAT.6.1.5–MAT.6.1.8 kapsamındaki konularla ilişkilidir; bütün kazanımların tamamını ölçtüğü iddia edilmez.
- Yedi pasif SVG `public/grade6/matematik/test-7/soru-01.svg`–`soru-07.svg` altındadır. 360 birim genişlik, en az 26 birim yazı, büyük etiketler ve Türkçe alternatif metinler kullanılır. 238 piksel genişlikte raster çıktıları görsel olarak incelenmiştir. Son üç sorunun hiçbir görsel alanı yoktur. Ortak arayüz değiştirilmemiştir.
- On sorunun tek doğru cevabı bağımsız matematik denetiminden ve tam hassasiyetli hesap kontrollerinden geçmiştir. Önceki 150 soru ve 40 SVG korunmuştur. Toplamlar 16 test / 160 soru / 47 görsel / 21 adet 6. sınıf rotasıdır.


## Matematik Test 8: İstatistiksel Araştırma (24 Ekim 2026)

- Adres: `/6-sinif/matematik/test-8`; konu: **İstatistiksel Araştırma: Verileri Yorumlama**. `54eb325` sürümü üzerine eklenmiştir. İlk 7 soru şekilli, son 3 soru şekilsizdir. Cevap anahtarı: **B, C, D, A, B, C, D, B, C, A**.
- Nokta grafiği, kök-yaprak gösterimi, eksik sıklık, ortalama–ortanca–tepe değer–açıklık karşılaştırmaları, kategori değişimi, kesilmiş grafik ekseni ve örneklem yanlılığı ele alınır. Şekilsiz sorular ortak zaman aralığıyla anket hazırlama, iki tepe değer ve hatalı kaydın etkisine odaklanır. MAT.6.5.1–MAT.6.5.2 kapsamında hazırlanmıştır; tüm kazanımları kapsadığı iddia edilmez.
- Yedi pasif SVG `public/grade6/matematik/test-8/soru-01.svg`–`soru-07.svg` altındadır. 360 birim genişlik, en az 26 birim yazı ve Türkçe alternatif metinler kullanılır. 238, 320 ve 360 piksel raster çıktıları üretilmiş, 238 piksel çıktıları görsel olarak incelenmiştir. Son üç sorunun görsel alanı yoktur. Ortak arayüz ve bağımlılıklar değiştirilmemiştir.
- Sorular bağımsız içerik/anahtar denetiminden ve kesin aritmetik kontrollerinden geçmiştir. Önceki 160 soru ve 47 SVG korunmuştur. Toplamlar 17 test / 170 soru / 54 görsel / 22 adet 6. sınıf rotasıdır. Tarayıcı etkileşim testi yapılmamıştır.

## Matematik Test 9: Geometrik Şekiller (24 Ekim 2026)

- Adres: `/6-sinif/matematik/test-9`; konu: **Geometrik Şekiller: Açılar ve Dörtgenler**. `d616348` sürümü üzerine eklenmiştir. İlk 7 soru şekilli, son 3 soru şekilsizdir. Cevap anahtarı: **A, C, B, D, C, D, B, B, C, A**.
- Paralel doğrularda açı aktarımı, tümler–bütünler ilişkisi, üçgende dış açı, ikizkenar üçgen, yamuk ve paralelkenarda açılar, dikdörtgenin köşegenlerinden ikizkenar üçgen çıkarımı, iki kesenli düzenek ve köşegen özelliklerinden dörtgen sınıflandırma işlenir. MAT.6.3.1–MAT.6.3.4 ile ilişkilidir; tüm kazanımları kapsadığı iddia edilmez. Resmî kaynak: https://tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/459 . Test numaraları öğretim takvimi veya tema sırası iddiası taşımaz.
- Yedi pasif SVG `public/grade6/matematik/test-9/soru-01.svg`–`soru-07.svg` altındadır. 360 birim genişlik, en az 26 birim yazı, açı yayları, köşe adları ve Türkçe alternatif metinler kullanılır. Şekillerde ölçeksiz çizim uyarısı vardır; görselden ölçüm istenmez. 238, 320 ve 360 piksel raster çıktıları hazırlanmıştır. Son üç sorunun görsel alanı yoktur.
- Önceki 170 soru ve 54 SVG korunmuştur. Toplamlar 19 test / 190 soru / 68 görsel / 23 adet 6. sınıf rotasıdır. Ortak arayüz ve bağımlılıklar değiştirilmemiştir; tarayıcı etkileşim testi yapılmamıştır.
- Bağımsız soru/anahtar ve son görsel incelemesi başarılıdır. İki kesenli 7. şeklin koordinatları verilen 48° ve 62° açılardan hesaplanmıştır; x açısının geniş, y açısının dar olduğu doğru gösterilir. Önceki tüm dosyalar, üç beklenen veri/belge değişikliği dışında bayt düzeyinde karşılaştırılmıştır.


## Matematik Test 10 (24 Ekim 2026)

- Konu: Cebirsel Düşünme: Örüntüler ve Algoritmalar. 7 şekilli ve 3 şekilsiz orta–zor soru. Bilinmeyen nicelikler, ortak kenarlı örüntüler, ücret karşılaştırma, ters işlem ve tekrarlı/koşullu algoritmalar işlenir.
- Resmî kapsam: MAT.6.2.1–MAT.6.2.3, https://tymm.meb.gov.tr/ortaokul-matematik-dersi/unite/458 . Tüm yıl kapsamı veya MEB onayı iddia edilmez.
- Adres /6-sinif/matematik/test-10; kimlikler m6-1-t10-01–m6-1-t10-10. Anahtar B, C, D, A, B, C, D, C, B, A.
- Yedi SVG 360 birim genişlikte, en az 26 birim yazı; 238 piksel görüntüleme genişliğinde raster kontrolü yapıldı. Önceki 180 soru ve 61 görsel değiştirilmedi.
- Sayısal test sıralama zaten Number dönüşümü kullanır ve test10 kimliği/rotası mevcut kurala uyar; ortak bileşen ve doğrulayıcı kodu değiştirilmedi. Toplam 19 test, 190 soru, 68 görsel ve 24 altıncı sınıf rotası.
- Bağımsız cevap denetimi, kesin hesap ve koruma kontrolü, TypeScript, üretim derlemesi ve rota/veri doğrulaması uygulanır. Tarayıcı etkileşimleri test edilmedi.


## Fen Test 1 yenilemesi (24 Ekim 2026)

- Aynı 10 soru kimliği ve `/6-sinif/fen/test-1` rotası korunarak test yenilendi; başlık **Güneş Sistemi ve Tutulmalar: Orta–Zor Sorular**.
- 7 büyük SVG ve 3 şekilsiz soru: gezegen sıralamasını düzeltme, iki ölçütle sınıflama, yaklaşık çap grafiği, ana asteroit kuşağının komşuları, tutulma modellerini karşılaştırma, gözlem yerine bağlı gölge, dolunay ve tutulma koşulları, model sınırlılıkları.
- Gezegenlerin kesin doğal uydu sayıları sorulmaz. Çap grafiği yaklaşık değerleri açıkça verir; tutulma çizimleri ölçekli model iddiası taşımaz. Güneş gözlemi için güvenli filtre uyarısı açıklamaya eklendi.
- Yedi SVG 360px genişliğinde ve metinler en az 26px; 238px telefon iç genişliğinde incelendi. Görsel gölge bölgeleri ve tek doğru cevap koşulu bağımsız denetlendi.
- Toplam 19 test, 190 soru, 75 görsel, 24 altıncı sınıf rotası. Önceki 180 diğer soru ve 68 SVG değişmedi.
- TypeScript, üretim derlemesi ve veri/rota doğrulayıcıları çalıştırıldı. Tarayıcı etkileşim testi yapılmadı.
- Bilimsel kaynaklar: [MEB FB.6.1.1–FB.6.1.4](https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/409), [NASA Güneş Sistemi](https://science.nasa.gov/solar-system/solar-system-facts/), [NASA Gezegen Verileri](https://nssdc.gsfc.nasa.gov/planetary/factsheet/), [NASA Tutulmalar](https://science.nasa.gov/moon/eclipses/), [NASA Çocuklar İçin Tutulmalar](https://spaceplace.nasa.gov/eclipses/en/).

## Fen Test 2 yenilemesi (24 Ekim 2026)

- Mevcut kimlikler ve /6-sinif/fen/test-2 rotası korundu. Konu: Tutulmalar ve Bileşke Kuvvet: Orta–Zor Sorular.
- 7 şekilli, 3 şekilsiz soru: tutulma görünümü, model hizası, ışığı engelleyen cisim, dolunay çıkarımı; kuvvet kaldırma, dengeleyici, bilinmeyen kuvvet ve dengelenmiş hareket.
- Büyük SVG metinleri en az 26 birim, genişlik 360 birim; 238px mobil iç genişlikte incelendi. Şematik kuvvet okları, bilinmeyen F uzunluğunun ölçülemeyeceğini açıklar.
- Cevap anahtarı B, C, D, A, B, C, D, B, C, A. Önceki 180 diğer soru ve 75 SVG korunmuştur. Toplam 19 test, 190 soru, 82 görsel ve 24 altıncı sınıf rotası.
- Bağımsız bilimsel/cevap denetimi, TypeScript, üretim derlemesi, veri/rota ve koruma kontrolleri uygulandı. Tarayıcı etkileşim testi yapılmadı.
- Kapsam: [MEB tutulmalar](https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/409), [MEB kuvvet](https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/410), [NASA tutulmalar](https://science.nasa.gov/moon/eclipses/).

## Yenilenen Fen Test 3 (24 Ekim 2026)

- Mevcut `test3` kimlikleri korunarak kuvvet, hareket, sürat ve hız konularında 7 şekilli ve 3 şekilsiz orta–zor soru ile yenilendi. Anahtar: B, C, D, A, B, C, D, B, C, A.
- Bileşke değişimi, dengelenmiş kuvvetlerde farklı başlangıç durumları, kontrollü deney, yol/yer değiştirme, yön değişimi ve dengeleyici kuvvet yorumlanır. Sürat hesabı, hareket grafiği ve birim dönüşümü yoktur. Resmî kapsam: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/410 .
- Yedi SVG 360px tuval ve en az26px etiketle hazırlanıp 238/320/360px raster çıktılarında incelendi. Bağımsız bilimsel cevap ve görsel denetimi yapıldı. Önceki180 diğer soru ve82SVG korunur. Toplam19test,190soru,89SVG,24rota.
- TypeScript, üretim derlemesi, veri/rota doğrulaması, koruma ve diff kontrolü çalıştırılır. Tarayıcı etkileşimleri bu çalışma kapsamında test edilmedi.

## Şekilli Fen Test 4 (24 Ekim 2026)

- Yeni `/6-sinif/fen/test-4`: Canlılarda Üreme, Büyüme ve Gelişme: Orta–Zor Sorular. Yedi şekilli ve üç şekilsiz soru; cevaplar B, C, D, A, B, C, D, B, C, A. Çimlenmede değişken kontrolü, sınırlı veriden çıkarım, tozlaşma, vejetatif üreme, başkalaşım ve onarım/üreme ayrımı işlenir.
- Kapsam FB.6.3.1–FB.6.3.4: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/411. İnsan üreme organları ve denetleyici sistemler bu teste dahil değildir. Oksijen etkisi yalnız kavramsal sorulur; oksijensiz deney veya hayvanlara zarar veren etkinlik önerilmez. Işığın çimlenme için gerekliliği bütün türlere genellenmez.
- 360 birim genişlikte yedi statik SVG ve en az 26 birim etiket. 238, 320 ve 360 pikselde raster QA. Önceki 190 soru ve 89 görsel korunur. Toplam 20 test / 200 soru / 96 görsel / 25 altıncı sınıf rotası.
- Cevaplar bağımsız bilimsel incelemeyle kontrol edilmiştir. TypeScript, üretim derlemesi, veri/rota doğrulaması ve önceki dosyaların korunması kontrol edilir. Tarayıcı etkileşimleri test edilmemiştir.

## Fen Test 5: Denetleyici ve Düzenleyici Sistemler (24 Ekim 2026)

- `/6-sinif/fen/test-5`: 7 şekilli + 3 şekilsiz orta–zor soru. Merkezî/çevresel sinir sistemi, refleks yolu, beyin bölümlerinin görevleri, kanla hormon taşınması, insülin/glukagon, tiroit/böbrek üstü bezleri ve ergenlikte bireysel farklılıklar. FB.6.3.6–FB.6.3.8’den seçmeler; tam ünite veya yıl kapsamı iddiası yoktur.
- Anahtar: B, C, D, A, B, C, D, B, C, A. Şemalar 360 birim genişliğinde, yazılar en az 26 birim; 238px çıktılar görsel olarak kontrol edilir. Anatomik çizimler sadeleştirilmiş modellerdir; kişisel sağlık tanısı veya uygulama önerisi içermez.
- Yedi yeni SVG `public/grade6/fen/test-5/` altındadır. Önceki 200 soru ve 96 SVG korunmuştur. Yeni toplam: 21 test, 210 soru, 103 görsel, 26 altıncı sınıf rotası. Ortak arayüz, bağımlılıklar ve eski sınıf içerikleri değiştirilmemiştir.
- Denetim: bağımsız bilimsel cevap incelemesi; veri ve rota doğrulaması, TypeScript, üretim derlemesi ve önceki dosyalarla koruma karşılaştırması. Tarayıcı etkileşim denemesi yapılmamıştır.
- Kaynaklar: MEB https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/411 ; NIMH https://www.nimh.nih.gov/news/media/2023/get-to-know-your-brain ; NIDDK https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes/artificial-pancreas ; NINDS https://www.ninds.nih.gov/health-information/public-education/brain-basics .


## Fen Test 6: Işığın Yansıması ve Aynalar (24 Ekim 2026)

- Adres: `/6-sinif/fen/test-6`; yedi şekilli ve üç şekilsiz orta–zor soru. Gelme/yansıma açısının normalden ölçülmesi, düzgün/dağınık yansıma, ayna gözlemleri, iki aynalı model ve kontrollü karşılaştırma. Özel ışınlarla görüntü çizimi veya ayna denklemleri içermez.
- Anahtar: C, A, D, B, A, C, D, B, D, A. Resmî kapsam: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/412 (FB.6.4.1–FB.6.4.3). Test tüm üniteyi kapsamaz; renk ve soğurulma sonraki çalışmalara bırakılmıştır.
- Yedi SVG: `public/grade6/fen/test-6/soru-01.svg`–`soru-07.svg`. 360 birim tuval, en az 26 birim yazı; gerçek boyut ve alternatif metinler. 238 pikselde raster görsel kontrolü. Yerel yüzey eğimleriyle yansıyan ışınlar hesaplanmış; iki düz aynanın eğimleri ve yön okları kontrol edilmiştir.
- Önceki 210 soru ve 103 SVG korunmuştur. Yeni toplam 22 test, 220 soru, 110 görsel ve 27 altıncı sınıf rotasıdır. TypeScript, veri/rota doğrulamaları ve üretim derlemesi çalıştırılır. Tarayıcı etkileşim testi yapılmamıştır.

## Fen Test 7: Işığın Soğurulması ve Renkler

7 şekilli + 3 şekilsiz orta–zor soru; FB.6.4.4–FB.6.4.7 kapsamında soğurma, kontrollü karşılaştırma, beyaz ışık, renkli görünme ve güneş enerjisi uygulamaları. Renkli yüzey sorularındaki ideal model ve yalnız belirtilen ışık koşulları açık yazılmıştır. Renkler yazıyla da etiketlenmiştir. Kaynaklar: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/412 , https://science.nasa.gov/ems/09_visiblelight/ , https://www.energystar.gov/products/solar_water_heaters/how-it-works .

Toplam: 23 test, 230 soru, 117 SVG, 28 rota. Önceki 220 soru ve 110 SVG korunur. Yedi SVG 360px genişlikte; etiketler en az 26px, 238px çıktı incelemesi yapılır. Tarayıcı etkileşim testi erişim kısıtı nedeniyle yapılmaz. Production yükseltmesi yapılmaz.


## Şekilli Fen Test 8 (24 Ekim 2026)

- Konu: Genleşme ve Hâl Değişim Noktaları; 7 şekilli ve 3 şekilsiz orta–zor soru. Kaynak: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/413 (FB.6.5.1–FB.6.5.2). Yoğunluk bu testin konusu değildir.
- Aynı basınç, saflık ve kontrollü deney koşulları sorularda belirtilir. Sıcaklığın sabit kaldığı hâl değişimi ile enerji alışverişi ayırt edilir; süre tek başına kaynama noktası sayılmaz.
- Anahtar: B, C, D, A, B, C, D, A, C, D. Yedi SVG 360 birim genişlikte, en az 26 birim yazılıdır; 238px çıktıları incelenmiştir.
- Toplam 24 test, 240 soru, 124 SVG ve 29 rota. Önceki 230 soru ve 117 SVG korunur.
- TypeScript, üretim derlemesi, veri/rota doğrulaması ve bağımsız bilimsel cevap denetimi uygulanır. Tarayıcı etkileşimleri test edilmemiştir.


## Fen Test 9 — Yoğunluk (24 Ekim 2026)

- 7 şekilli + 3 şekilsiz orta–zor soru; yoğunluk hesabı, dara çıkarma, sıvı yer değiştirmesi, homojen parçalar, karışmayan sıvılar, yüzme-batma ve buzun önemi. FB.6.5.3–FB.6.5.5; kaynak: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/413. Kaldırma kuvveti formülü kullanılmaz.
- 360 birim SVG tuvali, en az 26 birim yazı; 238 px genişlikte görsel denetim. Önceki 240 soru ve 124 SVG korunur. Yeni toplam: 25 test, 250 soru, 131 SVG, 30 rota.
- Cevap anahtarı: D, B, A, C, B, D, C, A, D, B. Tarayıcı etkileşim testi yapılmadı.


## Fen Test 10 — Elektriğin İletimi ve Direnç (24 Ekim 2026)

- 7 şekilli + 3 şekilsiz orta–zor soru: iletkenlik testi, kontrollü deney, uzunluk/kesit/cins etkileri, reosta ve yalıtım. FB.6.6.1–FB.6.6.3: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/414. Direnç formülleri veya şebeke elektriği deneyi içermez.
- 360 birim tuval, en az 26 birim yazı, 238 px görsel denetim. Önceki 250 soru ve 131 SVG korunur. Toplam: 26 test, 260 soru, 138 SVG, 31 rota.
- Anahtar: C, A, D, B, A, C, D, B, C, A. Tarayıcı etkileşimleri test edilmedi.

## Yenilenen İngilizce Test 1 (24 Ekim 2026)

- Mevcut `/6-sinif/ingilizce/test-1` adresi ve `e6-1-t1-01`–`e6-1-t1-10` kimlikleri korundu. Konu: **Life: Günlük Rutinler ve Saatler (Orta)**. Kullanıcının istediği Life kapsamı esas alındı; güncel MEB portalındaki ilk temanın adı **School Life** olduğundan Life’ın güncel resmî tema adı olduğu iddia edilmez. Rutinler ve Simple Present konuları School Life ile örtüşür; paket tüm tema kazanımlarını kapsamaz.
- Yedi görselli ve üç metin sorusu; saat okuma, günlük sıra, haftalık sıklık, çizelge yorumlama ve Simple Present iletişimi. Soru ve seçenekler İngilizce, açıklamalar Türkçe. Anahtar: **C, A, D, B, C, D, A, B, D, C**.
- 360 birim genişlikte yedi pasif SVG, en az 26 birim yazı; 238 piksel genişlikte okunabilirlik ve analog saatlerde saat/dakika ibresi konumu incelendi. İngilizce Test 2–3 ve diğer derslerdeki 250 soru ile önceki 138 görsel korundu. Toplamlar 26 test / 260 soru / 145 görsel / 31 rota.
- Bağımsız dil/cevap denetimi, veri/rota doğrulaması, TypeScript ve üretim derlemesi uygulanır. Tarayıcı etkileşimleri bu çalışmada test edilmemiştir. Production’a otomatik aktarım yapılmaz.


## Yenilenen İngilizce Test 2 (24 Ekim 2026)

- Mevcut `/6-sinif/ingilizce/test-2` rotası ve `e6-1-t2-01`–`e6-1-t2-10` kimlikleri korundu. Konu: **Yummy Breakfast: Yiyecekler ve Tercihler (Orta)**. Kullanıcının verdiği sıraya göre yiyecek/içecekler, sevme-sevmeme, teklif kabulü ve kibar ret ele alındı. Bu ad güncel MEB ikinci teması Classroom Life yerine resmî tema adı olarak sunulmaz; tam müfredat kapsamı iddiası yoktur.
- 7 görselli + 3 metin sorusu; İngilizce soru/seçenekler, Türkçe açıklamalar. Menü ve sipariş karşılaştırması, ortak tercihler, teklif/yanıt uyumu ve Simple Present kullanımı. Anahtar: **B, C, D, A, B, C, D, A, C, B**.
- Yedi pasif SVG: 360 birim genişlik, en az 26 birim etiket; yiyecek/içecek çizimleri, alternatif metin ve gerçek boyutlar. 238 piksel çıktıları okunabilirlik ve kırpılma bakımından incelendi. İngilizce Test 1 ve 3 dahil diğer 250 soru ile önceki 145 SVG korundu. Toplam: 26 test / 260 soru / 152 SVG / 31 rota.
- Bağımsız dil/tek-doğru-cevap denetimi, veri/rota kontrolü, TypeScript ve üretim derlemesi uygulanır. Tarayıcı etkileşim testi yapılmadı; production’a otomatik aktarım yapılmaz.


## Yenilenen İngilizce Test 3 (24 Ekim 2026)

- Mevcut `/6-sinif/ingilizce/test-3` rotası ve `e6-1-t3-01`–`e6-1-t3-10` kimlikleri korundu. Konu: **Downtown: Şehirde Yaşam ve Karşılaştırmalar (Orta)**. Kullanıcının verdiği konu sırası esas alınır; güncel resmî MEB tema adı veya tüm müfredat kapsamı iddiası yoktur.
- 7 görselli + 3 metin sorusu; şehir haritası ve kamusal binalar, şu anda yapılan eylemler (Present Continuous), bina yüksekliği/kalabalıklık/hız karşılaştırmaları ve açılış saatleri. Soru/seçenekler İngilizce, açıklamalar Türkçe. Anahtar: **D, B, A, C, B, D, A, C, D, B**.
- Yedi pasif SVG: 360 birim genişlik, en az 26 birim yazı; 238 piksel çıktıları incelenir. Bina yükseklikleri ortak tabana ve orana sahiptir; sokak kalabalıklığı ve araç hızları yalnız verilen örneğe aittir. İngilizce Test 1–2 dahil diğer 250 soru ve önceki 152 SVG korunur. Toplam: 26 test / 260 soru / 159 SVG / 31 rota.
- Bağımsız dil/tek-doğru-cevap ve görsel denetimi, veri/rota doğrulaması, TypeScript ve üretim derlemesi uygulanır. Tarayıcı etkileşim testi yapılmadı; production’a otomatik aktarım yapılmaz.


## İngilizce Test 4 — Weather and Emotions (24 Ekim 2026)

- Yeni `/6-sinif/ingilizce/test-4` rotası: **Weather and Emotions: Hava Durumu ve Duygular (Orta)**. Kullanıcının verdiği konu sırası esas alınır; güncel resmî MEB tema adı veya tüm müfredat kapsamı iddiası yoktur.
- 7 görselli + 3 metin sorusu; hava durumu simgeleri, örnek tahminler, sıcaklık karşılaştırmaları, kişisel duygular, koşula uygun öneriler ve iletişim. Soru/seçenekler İngilizce, açıklamalar Türkçe. Duygular kişilerin açık sözlerine/ifadelerine dayanır; hava durumu ile duygu arasında evrensel ilişki kurulmaz. Anahtar: **C, A, D, B, C, A, D, B, C, A**.
- Yedi pasif SVG: 360 birim genişlik, en az 26 birim yazı; 238 piksel çıktıları okunabilirlik ve kırpılma açısından denetlenir. Önceki 260 soru ve 159 SVG korunur. Yeni toplam: 27 test / 270 soru / 166 SVG / 32 rota.
- Bağımsız dil/tek-doğru-cevap ve görsel denetimi, veri/rota doğrulaması, TypeScript ve üretim derlemesi uygulanır. Tarayıcı etkileşim testi yapılmadı; production’a otomatik aktarım yapılmaz.


## İngilizce Test 5 — At the Fair (24 Ekim 2026)

- Yeni `/6-sinif/ingilizce/test-5` rotası: **At the Fair: Lunapark Etkinlikleri ve Görüşler (Orta)**. Kullanıcının verdiği konu sırası esas alınır; güncel resmî MEB tema adı veya tüm müfredat kapsamı iddiası yoktur.
- 7 görselli + 3 metin sorusu; lunapark oyuncakları, şu anki etkinlikler, ortak tercihler, giriş kuralı, kişisel görüş karşılaştırması, açılış saatleri ve kibar ret. İngilizce soru/seçenekler, Türkçe açıklamalar. Duygular kişilerin açık ifadelerine dayanır. Anahtar: **B, D, A, C, B, D, C, A, D, B**.
- Yedi pasif SVG: 360 birim genişlik, en az 26 birim yazı; 238 piksel çıktıları okunabilirlik ve kırpılma açısından denetlenir. Önceki 270 soru ve 166 SVG korunur. Yeni toplam: 28 test / 280 soru / 173 SVG / 33 rota.
- Bağımsız dil/tek-doğru-cevap ve görsel denetimi, veri/rota doğrulaması, TypeScript ve üretim derlemesi uygulanır. Tarayıcı etkileşim testi yapılmadı; production’a otomatik aktarım yapılmaz.


## İngilizce Test 6 — Karma Tekrar (24 Ekim 2026)

- Yeni `/6-sinif/ingilizce/test-6` rotası: **Karma Tekrar: İlk Beş Konu (Orta)**. Kullanıcının verdiği Life, Yummy Breakfast, Downtown, Weather and Emotions ve At the Fair konularının karma tekrarıdır. Yeni tema veya tam/güncel resmî müfredat kapsamı iddiası yoktur.
- 7 görselli + 3 metin sorusu; saatli rutin, eksik kahvaltı siparişi, şehir haritası, hava durumuna uygun plan, alışkanlık/şimdiki eylem, bilet fiyatı, kişisel duygu, teklif/istek, metinde bulunmayan bilgi ve görüş ayrılığı. İngilizce soru/seçenekler, Türkçe açıklamalar. Anahtar: **A, C, B, D, A, C, D, B, A, C**.
- Yedi pasif SVG: 360 birim genişlik ve en az 26 birim yazı; 238 piksel çıktıları okunabilirlik ve kırpılma açısından denetlenir. Önceki 280 soru ve 173 SVG korunur. Yeni toplam: 29 test / 290 soru / 180 SVG / 34 rota.
- Bağımsız dil/tek-doğru-cevap ve görsel denetimi, veri/rota doğrulaması, TypeScript ve üretim derlemesi uygulanır. Tarayıcı etkileşim testi yapılmadı; production’a otomatik aktarım yapılmaz.


## İngilizce Test 7 — Günlük Yaşamdan Karma Sorular (24 Ekim 2026)

- Yeni `/6-sinif/ingilizce/test-7` rotası: **Günlük Yaşamdan Karma Sorular (Orta)**. Kullanıcının verdiği Life, Yummy Breakfast, Downtown, Weather and Emotions ve At the Fair konularından karma tekrar; güncel resmî tema veya tüm müfredat kapsamı iddiası yoktur.
- 7 görselli + 3 metin sorusu: hafta sonuna uygun yüzme saati, kahvaltı görselinde yanıtlanmayan bilgi, otobüs güzergâhı, uçurtma mesajı, kapalı/açık oyuncaklar, parkta eş zamanlı etkinlikler, tamamlanacak görev, sipariş diyaloğu, köy/şehir karşılaştırması ve neden sorusu. İngilizce soru/seçenekler, Türkçe açıklamalar. Anahtar: **B, D, A, C, B, A, D, C, A, B**.
- Yedi pasif SVG, 360 birim genişlik ve en az 26 birim yazı; 238 piksel çıktıları okunabilirlik ve kırpılma açısından denetlenir. Önceki 290 soru ve 180 SVG korunur. Yeni toplam: 30 test / 300 soru / 187 SVG / 35 rota.
- Bağımsız dil/tek-doğru-cevap ve görsel denetimi, veri/rota doğrulaması, TypeScript ve üretim derlemesi uygulanır. Tarayıcı etkileşim testi yapılmadı; production’a otomatik aktarım yapılmaz.


## İngilizce Test 8 — Görsel Okuma ve Diyaloglar (24 Ekim 2026)

- Yeni `/6-sinif/ingilizce/test-8` rotası: **Görsel Okuma ve Diyaloglar: Karma Tekrar (Orta)**. Kullanıcının Life, Yummy Breakfast, Downtown, Weather and Emotions ve At the Fair konularını farklı senaryolarla tekrar eder; güncel resmî tema veya tüm müfredat kapsamı iddiası yoktur.
- 7 görselli + 3 metin sorusu: analog saatler, yiyecek/içecek siparişi, bina yüksekliği karşılaştırması, hava raporundaki eksik bilgi, lunapark sıraları, eyleme uygun soru, ulaşım günlüğü, davete yanıt, duygu çıkarımı ve sıklık bilgisi. İngilizce soru/seçenekler, Türkçe açıklamalar. Anahtar: **C, A, D, B, C, D, A, B, D, C**.
- Yedi pasif SVG, 360 birim genişlik ve en az 26 birim yazı; 238 piksel çıktıları okunabilirlik ve kırpılma açısından denetlenir. Önceki 300 soru ve 187 SVG korunur. Yeni toplam: 31 test / 310 soru / 194 SVG / 36 rota.
- Bağımsız dil/tek-doğru-cevap ve görsel denetimi, veri/rota doğrulaması, TypeScript ve üretim derlemesi uygulanır. Tarayıcı etkileşim testi yapılmadı; production’a otomatik aktarım yapılmaz.


## İngilizce Test 9 — Günlük Planlar ve İletişim (24 Ekim 2026)

- Kullanıcının ilk beş konu başlığına (Life, Yummy Breakfast, Downtown, Weather and Emotions, At the Fair) göre karma tekrar; güncel resmî tema sırası veya tam yıllık kapsam iddiası değildir.
- 7 görselli + 3 metin sorusu: haftalık bitki bakımı, sipariş düzeltme, between ile konum, iki şehrin hava raporu, eş zamanlı eylemler, saat ifadeleri, görsele uymayan cümle, Simple Present, duruma göre değişen duygular ve teklif kabulü. İngilizce soru/seçenekler, Türkçe açıklamalar. Anahtar: **B, D, A, C, A, D, B, C, A, D**.
- Yedi pasif SVG, 360 birim genişlik ve en az 26 birim yazı; 238 piksel çıktıları okunabilirlik ve kırpılma açısından denetlenir. Önceki 310 soru ve 194 SVG korunur. Yeni toplam: 32 test / 320 soru / 201 SVG / 37 rota.
- Veri/rota doğrulayıcıları, TypeScript ve üretim derlemesi çalıştırılır. Etkileşimli tarayıcı testi yapılmamıştır; kullanıcı isteği uyarınca production’a terfi edilmez.


## İngilizce Test 10 — Günlük Durumlar ve Anlam Çıkarma (24 Ekim 2026)

- Kullanıcının ilk beş konu başlığına göre karma tekrar; güncel resmî tema sırası veya tam yıllık kapsam iddiası değildir.
- 7 görselli + 3 metin sorusu: sabah eylem sırası, görselden yanıtlanamayan bilgi, günlük işler için kamu binaları, havaya uygun hazırlık, görsele uygun davet, şimdiki zaman sorusuna yanıt, öğle aralı mağaza saatleri, kişisel görüşü ayırt etme, soru sözcükleri ve mesajdan çıkarım. Anahtar: **C, A, D, B, C, A, D, B, C, D**.
- Yedi pasif SVG, 360 birim genişlik ve en az 26 birim yazı; 238 piksel çıktıları denetlenir. Önceki 320 soru ve 201 SVG korunur. Yeni toplam: 33 test / 330 soru / 208 SVG / 38 rota.
- Bağımsız içerik ve görsel denetimi, veri/rota doğrulaması, TypeScript ve üretim derlemesi uygulanır. Etkileşimli tarayıcı testi yapılmaz; production’a otomatik aktarım yapılmaz.


## Türkçe Test 1 — Anlam Bilgisi, Paragraf ve Görsel Okuma (25 Ekim 2026)

- Mevcut Test 1, kullanıcı tercihiyle **8 metin + 2 görsel okuma** sorusuyla yenilendi; yeni test eklenmedi. Orta düzeyde özgün sözcük anlamı, özdeyiş yorumu, ana düşünce, çıkarım, afiş ve tablo okuma, günlük türü, geçiş ifadesi, yazım ve noktalama soruları içerir. Tam yıllık müfredat kapsamı iddiası değildir.
- Soru kimlikleri ve `/6-sinif/turkce/test-1` adresi korunur. Cevap anahtarı: **B, D, A, C, A, C, B, D, A, C**.
- İki SVG 360 birim genişlikte, en az 26 birim yazıyla hazırlanır; 238 piksel çıktıları incelenir. Diğer 320 soru ve mevcut 208 SVG korunur. Toplam 33 test / 330 soru / 210 SVG / 38 rota.
- Dil, tek doğru cevap, görsel, veri, rota, TypeScript ve üretim derlemesi denetimleri uygulanır. Bağımsız lint yapılandırması bulunmadığı için lint çalıştırılmaz; etkileşimli tarayıcı denetimi yapılmaz. Production’a terfi edilmez.


## Türkçe Test 2 — Metinde Anlam ve Görsel Okuma (25 Ekim 2026)

- Mevcut Test 2, orta düzeyde 8 metin + 2 görsel okuma sorusuyla yenilendi. Sözcüğün bağlamdaki anlamı, bakış açısı, başlık, paragraf sıralama, duyuru okuma, görsel mesaj, koşul, öznel yargı, soru eki ve anlamı etkileyen virgül işlenir. Tam yıllık müfredat kapsamı iddiası değildir.
- Anahtar: **C, A, D, B, C, A, D, B, A, C**. İki pasif SVG 360 birim genişliğinde, en az 26 birim yazıyla hazırlanır; 238 piksel çıktıları denetlenir.
- Diğer 320 soru ve 210 SVG korunur. Toplam 33 test / 330 soru / 212 SVG / 38 rota. Veri, rota, TypeScript ve üretim derlemesiyle doğrulanır. Etkileşimli tarayıcı testi yapılmadı; production’a otomatik aktarılmaz.


## Türkçe Test 3 — Paragraf, Çıkarım ve Görsel Yorumlama (25 Ekim 2026)

- Mevcut Test 3, orta düzeyde 8 metin + 2 görsel okuma sorusuyla yenilendi. Bağlamda sözcük anlamı, mecazlı anlatım, ana düşünce, akışı bozan cümle, grafikten çıkarılamayan yargı, görsel mesaj, gezi yazısı, paragraf tamamlama, büyük harfler ve özetleyici ifade işlenir. Tam yıllık müfredat kapsamı iddiası değildir.
- Anahtar: **A, D, B, C, D, A, C, B, D, A**. İki pasif SVG 360 birim genişliğinde ve en az 26 birim yazıyla hazırlanır; 238 piksel çıktıları denetlenir.
- Diğer 320 soru ve 212 SVG korunur. Toplam 33 test / 330 soru / 214 SVG / 38 rota. Veri, rota, TypeScript ve üretim derlemesiyle doğrulanır. Etkileşimli tarayıcı testi yapılmaz; production’a otomatik aktarılmaz.


## Türkçe Test 4 — Anlam İlişkileri ve Eleştirel Okuma (25 Ekim 2026)

- Yeni Test 4, orta düzeyde 8 metin + 2 görsel okuma sorusundan oluşur. Bağlamda söz anlamı, amaç belirleme, önerileri değerlendirme, paragraf tamamlama, duyuruda koşulları birleştirme, bilgi güvenilirliği, amaç/neden ilişkisi, yapılmamış bir işten duyulan üzüntü/plan, sözcüklerin yazımı ve yorum işlenir. Tam yıllık müfredat kapsamı iddiası değildir.
- Anahtar: **B, D, A, C, B, D, C, A, D, B**. İki pasif SVG 360 birim genişliğinde, en az 26 birim yazıyla hazırlanır; 238 piksel çıktıları incelenir.
- Önceki 330 soru ve 214 SVG korunur. Toplam 34 test / 340 soru / 216 SVG / 39 rota. Veri, rota, TypeScript ve üretim derlemesiyle doğrulanır. Etkileşimli tarayıcı testi yapılmaz; production’a otomatik aktarılmaz.


## Türkçe Test 5 — Ayrıntıdan Anlama ve Bilgileri Birleştirme (25 Ekim 2026)

- Yeni Test 5, orta düzeyde 8 metin + 2 görsel okuma sorusudur. Bağlam, deyim, anıların katkısı, ayrıntıdan çıkarım, gereklilik listesi, yönerge, paragraf sıralama, geçiş ifadesi, kesme işareti ve bilgileri birleştirme işlenir. Tam yıllık müfredat kapsamı iddiası değildir.
- Anahtar: **C, A, D, B, C, D, A, C, D, B**. İki pasif SVG 360 birim genişliğinde, en az 26 birim yazıyla hazırlanır; 238 piksel çıktıları incelenir.
- Önceki 340 soru ve 216 SVG korunur. Toplam 35 test / 350 soru / 218 SVG / 40 rota. Veri, rota, TypeScript ve üretim derlemesiyle doğrulanır. Etkileşimli tarayıcı testi yapılmaz; production’a otomatik aktarılmaz.


## Türkçe Test 6 — Metinleri Karşılaştırma ve İletileri Yorumlama (25 Ekim 2026)

- Yeni Test 6, orta düzeyde 8 metin + 2 görsel okuma sorusudur. Bağlamda anlam, iki metindeki yaklaşımları karşılaştırma, geri bildirimden çıkarım, paragraf tamamlama, duyuruları karşılaştırma, görsel ileti, anlatım biçimi, geçiş ifadesi, sayıların yazımı ve çıkarım sınırları işlenir. Tam yıllık müfredat kapsamı iddiası değildir.
- Anahtar: **C, A, B, D, C, A, D, B, D, C**. İki pasif SVG 360 birim genişliğinde, en az 26 birim yazıyla hazırlanır; 238 piksel çıktıları incelenir.
- Önceki 350 soru ve 218 SVG korunur. Toplam 36 test / 360 soru / 220 SVG / 41 rota. Veri, rota, TypeScript ve üretim derlemesiyle doğrulanır. Etkileşimli tarayıcı testi yapılmaz; production’a otomatik aktarılmaz.


## Türkçe Test 7 — Örtük Anlam ve Görsel Yönergeler (25 Ekim 2026)

- Yeni Test 7, orta düzeyde 8 metin + 2 görsel okuma sorusudur. Bağlamda anlam, örtük bilgi, başlık, davranış değişimi, yön levhaları, ortak alan iletisi, cevabı bulunmayan soru, kişileştirme, yazım ve metinden ders çıkarma işlenir. Tam yıllık müfredat kapsamı iddiası değildir.
- Anahtar: **B, D, A, C, B, D, A, C, D, B**. İki pasif SVG 360 birim genişliğinde, en az 26 birim yazıyla hazırlanır; 238 piksel çıktıları incelenir.
- Önceki 360 soru ve 220 SVG korunur. Toplam 37 test / 370 soru / 222 SVG / 42 rota. Veri, rota, TypeScript ve üretim derlemesiyle doğrulanır. Etkileşimli tarayıcı testi yapılmaz; production’a otomatik aktarılmaz.


## Türkçe Test 8 — Bağlam, Karşılaştırma ve Erişim İletileri (25 Ekim 2026)

- Yeni Test 8, orta düzeyde 8 metin + 2 görsel okuma sorusudur. Bağlamda anlam, yakın anlam, ana düşünce, işlev ve görünüş, çalışma planı, erişim iletisi, paragraf sıralama, benzetme, tarih yazımı ve yeniden okuma işlenir. Tam yıllık müfredat kapsamı iddiası değildir.
- Anahtar: **B, D, A, C, D, A, C, B, D, B**. İki pasif SVG 360 birim genişliğinde, en az 26 birim yazıyla hazırlanır; 238 piksel çıktıları incelenir.
- Önceki 370 soru ve 222 SVG korunur. Toplam 38 test / 380 soru / 224 SVG / 43 rota. Veri, rota, TypeScript ve üretim derlemesiyle doğrulanır. Etkileşimli tarayıcı testi yapılmaz; production’a otomatik aktarılmaz.


## Türkçe Test 9 — Metinler Arası Bağlar ve Bilgiye Ulaşma (25 Ekim 2026)

- Yeni Test 9, orta düzeyde 8 metin + 2 görsel okuma sorusudur. Bağlamda anlam, iki metnin ortak tutumu, ana düşünce, paragrafta cümle yerleştirme, güncellenen duyuruyu yorumlama, içindekilerden bilgi bulma, anlatıcı, karşıtlık, alıntı noktalaması ve eleştirel görsel okuma işlenir. Tam yıllık müfredat kapsamı iddiası değildir.
- Anahtar: **C, A, D, B, C, D, A, B, D, B**. İki pasif SVG 360 birim genişliğinde, en az 26 birim yazıyla hazırlanır; 238 piksel çıktıları incelenir.
- Önceki 380 soru ve 224 SVG korunur. Toplam 39 test / 390 soru / 226 SVG / 44 rota. Veri, rota, TypeScript ve üretim derlemesiyle doğrulanır. Etkileşimli tarayıcı testi yapılmaz; production’a otomatik aktarılmaz.


## Türkçe Test 10 — Karma Değerlendirme: Anlam ve Görsel İletiler (25 Ekim 2026)

- Yeni Test 10, orta düzeyde 8 metin + 2 görsel okuma sorusudur. Deyim, eksik bilgi, iki metni karşılaştırma, paragraf tamamlama, program okuma, görsel ileti, duygu ve beklenti, betimleme, soru anlamı ve noktalama ile kanıta dayalı çıkarım işlenir. Tam yıllık müfredat kapsamı iddiası değildir.
- Anahtar: **A, D, B, C, B, D, A, B, C, D**. İki pasif SVG 360 birim genişliğinde, en az 26 birim yazıyla hazırlanır; 238 piksel çıktıları incelenir.
- Önceki 390 soru ve 226 SVG korunur. Toplam 40 test / 400 soru / 228 SVG / 45 rota. Veri, rota, TypeScript ve üretim derlemesiyle doğrulanır. Etkileşimli tarayıcı testi yapılmaz; production’a otomatik aktarılmaz.

## Matematik Test 11 — Karma Akıl Yürütme: Zor Sorular (25 Ekim 2026)

- `/6-sinif/matematik/test-11` adresine 7 şekilli ve 3 şekilsiz, açıklamalı zor soru eklendi. Kimlikler `m6-1-t11-01`–`m6-1-t11-10`; cevap anahtarı **C, D, A, B, D, C, B, A, D, A**.
- Ortak bölen ve uzunluk sınırıyla kesim sayısı, biriken deney kayıtlarından göreli sıklık, örtüşme ve kesim kaybı, ortalama–ortanca koşulları, ikizkenar üçgende açıortaylar, ortak kenarlı çubuk örüntüsü, koşullu algoritmanın olası başlangıçları, rakam koşullarıyla bölünebilme, yalnız bir lambanın yandığı anlar ve iki dağıtım koşulunu birleştirme işlenir. Zorluk birden fazla bilgiyi birlikte kullanmaktan gelir; tam yıllık müfredat kapsamı iddia edilmez.
- Yedi pasif SVG `public/grade6/matematik/test-11/soru-01.svg`–`soru-07.svg` altındadır. 360 birim genişlik, en az 26 birim yazı, Türkçe başlık/açıklama ve çözümü vermeyen alternatif metin kullanılır. 238, 320 ve 360 piksel çıktıları üretildi; 238 ve 320 piksel çıktıları görsel olarak ve bağımsız ikinci incelemeyle kontrol edildi. Son üç soruda görsel alanı yoktur.
- On sorunun tek doğru cevabı bağımsız matematik incelemesi, kesin aritmetik ve olası durum taramalarıyla doğrulandı. Yeni içerik kayıtlı testler, sayısal test sıralaması, statik rota parametreleri ve sitemap verileriyle uyumludur. Önceki 400 soru ve 40 test kaydı veri karşılaştırmasıyla, 228 SVG bayt karşılaştırmasıyla korunmuştur. Yeni toplamlar **41 test / 410 soru / 235 SVG / 46 adet 6. sınıf rotası**dır.
- Yerel ortamda proje bağımlılıkları kurulamadığından `validate-grade6.cjs` dosyasının doğrulama gövdesi değiştirilmeden, Node.js'in yerleşik TypeScript tür ayıklayıcısını kullanan geçici veri yükleyicisiyle çalıştırıldı. Veri, cevap, SVG ve rota/sitemap kontrolleri geçti. Yerel TypeScript tip denetimi, Next.js üretim derlemesi ve etkileşimli tarayıcı testi çalıştırılmadı. Ortak bileşenler ve bağımlılıklar değiştirilmedi.

## Matematik Test 12 — Karma Problemler: Zor Akıl Yürütme (25 Ekim 2026)

- `/6-sinif/matematik/test-12` adresine 7 şekilli ve 3 şekilsiz, açıklamalı zor soru eklendi. Kimlikler `m6-1-t12-01`–`m6-1-t12-10`; cevap anahtarı **B, D, A, C, B, C, D, A, C, B**.
- Asal çarpan koşullarıyla aday eleme, farklı büyüklükteki deney gruplarının birleşik göreli sıklığı, tam şişe alımında maliyet karşılaştırması, hatalı veri kaydından tepe değer ve ortanca, paralel doğrularda kırık çizgi açıları, parça çevrelerinden alan, sıralı paketleme algoritmasında en küçük kapasite, kalan koşulları, ardışık kesirli kullanım ve dilimli kargo ücretleri işlenir. Sorular önceki testin sayılarını değiştiren tekrarlar değildir; koşulları birleştirme, sınır durumları ve birden fazla işlem gerektirir. Tam yıllık müfredat kapsamı iddia edilmez.
- Yedi pasif SVG `public/grade6/matematik/test-12/soru-01.svg`–`soru-07.svg` altındadır. 360 birim genişlik, en az 26 birim yazı, Türkçe başlık/açıklama ve çözümü vermeyen alternatif metin kullanılır. 238, 320 ve 360 piksel çıktıları üretildi; küçük ekran okunabilirliği ve şekil verileri bağımsız ikinci incelemeyle kontrol edildi. Son üç soruda görsel alanı yoktur.
- On cevabın doğruluğu ve tekliği bağımsız matematik incelemesi, kesin aritmetik ve olası durum taramalarıyla denetlendi. Önceki 410 soru ve 41 test kaydı veri karşılaştırmasıyla, 235 SVG bayt karşılaştırmasıyla korunmuştur. Yeni toplamlar **42 test / 420 soru / 242 SVG / 47 adet 6. sınıf rotası**dır. Test sıralaması, Test 12 başlığı, statik rota parametreleri ve sitemap verileri doğrulandı.
- Yerel veri/SVG doğrulaması, mevcut `validate-grade6.cjs` doğrulama gövdesi korunarak Node.js'in yerleşik TypeScript tür ayıklayıcısını kullanan geçici yükleyiciyle çalıştırıldı. Yerel TypeScript tip denetimi, Next.js üretim derlemesi ve etkileşimli tarayıcı testi çalıştırılmadı; GitHub'a kayıttan sonraki Vercel derlemesi ayrı kontrol edilir. Ortak bileşenler, önceki sorular ve bağımlılıklar değiştirilmedi.

## İngilizce Test 11 — Günlük Yaşamda Planlar ve Tercihler (25 Ekim 2026)

- `/6-sinif/ingilizce/test-11` adresine **Günlük Yaşamda Planlar ve Tercihler: Karma Tekrar (Orta)** başlığıyla 7 görselli ve 3 metin sorusu eklendi. Soru ve seçenekler İngilizce, açıklamalar Türkçedir. Kimlikler `e6-1-t11-01`–`e6-1-t11-10`; cevap anahtarı **B, D, A, C, B, C, D, A, C, B**.
- Serinin mevcut Life, Yummy Breakfast, Downtown, Weather and Emotions ve At the Fair kapsamındaki orta düzeyi korunur. Ortak etkinlik günleri ve sıklık, ortak yiyecek/kişisel içecek tercihleri, iki konum ipucuyla buluşma yeri, açıkça belirtilen kişisel plan ve duygu, lunapark görüşleri, iki kişinin olağan görevleriyle bugünkü görevlerinin karşılaştırılması, gezi duyurusu, nazik tekrar isteği, mesajdan çıkarım ve Why/Who soru sözcükleri işlenir. Güncel resmî tema sırası veya tam yıllık müfredat kapsamı iddia edilmez.
- Yedi pasif SVG `public/grade6/ingilizce/test-11/soru-01.svg`–`soru-07.svg` altındadır. 360 birim genişlik, en az 26 birim yazı, İngilizce görsel etiketleri, Türkçe başlık/açıklama ve alternatif metin kullanılır. Çizelge, yiyecek/içecek ikonları, şehir haritası, ev etkinliği, lunapark oyuncakları, kahvaltı görevleri ve gezi programı görselleri hazırlanmıştır. 238, 320 ve 360 piksel çıktıları üretildi; küçük ekran okunabilirliği ve görsel/veri uyumu bağımsız olarak incelendi.
- On sorunun doğal İngilizcesi, düzeyi, tek doğru cevabı ve Türkçe açıklamaları bağımsız dil incelemesinden geçti. Konum sorusu davette belirtilen buluşma yerini sorar; duygu soruları kişilerin açık ifadelerine dayanır. Görseller, sorular ve alternatif metinlerdeki bilgiler tutarlıdır.
- Önceki 420 soru ve 42 test kaydı veri karşılaştırmasıyla, 242 SVG bayt karşılaştırmasıyla korunmuştur. Yeni toplamlar **43 test / 430 soru / 249 SVG / 48 adet 6. sınıf rotası**dır. İngilizce testlerinin sayısal sırası, yeni başlık, soru verisi, statik rota parametreleri ve sitemap girdileri doğrulandı; 12 matematik testi korunmuştur.
- Yerel veri/SVG kontrolleri, mevcut doğrulama gövdesi korunarak Node.js'in yerleşik TypeScript tür ayıklayıcısıyla çalıştırıldı. Yerel TypeScript tip denetimi, Next.js üretim derlemesi ve etkileşimli tarayıcı testi yapılmadı; GitHub'a kayıttan sonraki Vercel derlemesi ayrı kontrol edilir. Ortak bileşenler ve bağımlılıklar değiştirilmedi.

## İngilizce Test 12 — Günlük İletişim ve Görsel İpuçları (25 Ekim 2026)

- `/6-sinif/ingilizce/test-12` adresine **Günlük İletişim ve Görsel İpuçları: Karma Tekrar (Orta)** başlığıyla 7 görselli ve 3 metin sorusu eklendi. Soru ve seçenekler İngilizce, çözüm açıklamaları Türkçedir. Kimlikler `e6-1-t12-01`–`e6-1-t12-10`; cevap anahtarı **C, A, D, B, C, D, A, B, D, A**.
- Serinin mevcut ilk beş konu kapsamı korunur. Güncellenmiş kulüp saatini bildirme, kahvaltı stoklarına göre alternatif teklif, yürüyüş yönergesi, yağmurda yardım sunma, lunapark yasağını eyleme uygulama, eylemden uygun alışveriş isteğini söyleyen kişiyi bulma, iki giriş kuralını birlikte yorumlama, oturma izni isteme, zamirin gönderimini bulma ve siparişte many/much kullanımı işlenir. Güncel resmî tema sırası veya tam yıllık müfredat kapsamı iddia edilmez.
- Yedi pasif SVG `public/grade6/ingilizce/test-12/soru-01.svg`–`soru-07.svg` altındadır. 360 birim genişlik, en az 26 birim yazı, İngilizce görsel etiketleri ve Türkçe erişilebilir açıklamalar kullanılır. Saat duyurusu, kahvaltı tezgâhı, yönlü sokak, yağmurda mesaj, atlıkarınca girişi, şehirde dört eylem ve bilet/sıra kuralları görselleri hazırlanmıştır. 238, 320 ve 360 piksel çıktıları üretildi; küçük ekran okunabilirliği, saat ibreleri, yönler ve görsel/veri uyumu bağımsız olarak incelendi.
- On sorunun İngilizcesi, düzeyi, tek doğru cevabı ve Türkçe açıklamaları bağımsız dil incelemesinden geçti. Yiyeceklerin mevcut olup olmadığı açık etiketlerle, duygular kişinin kendi mesajıyla, sıra ihlali beklemeden öne geçme ifadesiyle belirtilir. Soru verileri, seçenekler ve alternatif metinler tutarlıdır.
- Önceki 430 soru ve 43 test kaydı veri karşılaştırmasıyla, 249 SVG bayt karşılaştırmasıyla korunmuştur. Yeni toplamlar **44 test / 440 soru / 256 SVG / 49 adet 6. sınıf rotası**dır. İngilizce testlerinin sayısal sırası, yeni başlık, soru verisi, statik rota parametreleri ve sitemap girdileri doğrulandı. Matematikteki 12 test korunmuştur.
- Yerel veri/SVG kontrolleri mevcut doğrulama gövdesi ve Node.js'in yerleşik TypeScript tür ayıklayıcısıyla çalıştırıldı. Yerel TypeScript tip denetimi, Next.js üretim derlemesi ve etkileşimli tarayıcı testi yapılmadı; GitHub'a kayıttan sonraki Vercel derlemesi ayrıca kontrol edilir. Ortak bileşenler ve bağımlılıklar değiştirilmedi.

## Fen Bilimleri Test 11 — Deney, Veri ve Bilimsel Çıkarım (26 Ekim 2026)

- `/6-sinif/fen/test-11` adresine **Deney, Veri ve Bilimsel Çıkarım: Karma Tekrar (Orta–Zor)** başlığıyla 7 görselli ve 3 metin sorusu eklendi. Kimlikler `f6-1-t11-01`–`f6-1-t11-10`; cevap anahtarı **B, D, A, C, B, C, D, A, C, B**. Tüm sorularda Türkçe çözüm açıklaması bulunur.
- Mevcut ilk on testin konuları farklı muhakeme hedefleriyle tekrar edilir: aynı tutulmanın Dünya ve Ay üzerinden gözlemi, denge bilgisinden bulunan kuvveti başka düzeneğe aktarma, çimlenmeme gözleminin canlılık açısından sınırı, düz aynada ışığın ters yöndeki yolu, aynı sıcaklıkta farklı hâllerdeki örneklerin ısıtılması, iki ölçüm farkından yoğunluk, tel biçimi ile devreye katılan uzunluk ayrımı, hormon taşınması ve gözlenen etki, renk ile soğurulan enerji ayrımı ve kümülatif çimlenme kayıtları. Önceki testlerin kapsam sınırları korunur; tam yıllık müfredat kapsamı iddia edilmez.
- Yedi pasif SVG `public/grade6/fen/test-11/soru-01.svg`–`soru-07.svg` altındadır. 360 birim genişlik, en az 26 birim yazı, Türkçe başlık/açıklama ve alternatif metin kullanılır. Tutulma, kuvvet, tohum gözlemi, ayna, hâl değişimi, dereceli kap ve pilli devre şemaları hazırlanmıştır. 238, 320 ve 360 piksel çıktıları üretildi; küçük ekran okunabilirliği ve şekil/veri uyumu bağımsız olarak incelendi.
- On sorunun bilimsel doğruluğu, koşulları, tek doğru cevabı ve açıklamaları bağımsız içerik incelemesinden geçti. Kuvvet, yansıma açısı ve ölçüm farkıyla yoğunluk bağımsız hesaplarla doğrulandı; kümülatif sayımlar içerik incelemesinde denetlendi. Isıtma sorusunda buharlaşma ve çevreye ısı kaybının ihmal edildiği açıkça belirtildi. Önceki 440 soru ve 44 test kaydı veri karşılaştırmasıyla, 256 SVG bayt karşılaştırmasıyla korunmuştur. Yeni toplamlar **45 test / 450 soru / 263 SVG / 50 adet 6. sınıf rotası**dır. Test sıralaması, yeni başlık, statik rota parametreleri ve sitemap girdileri doğrulandı.
- Yerel veri/SVG kontrolleri mevcut doğrulama gövdesi ve Node.js'in yerleşik TypeScript tür ayıklayıcısıyla çalıştırıldı ve geçti. Yerel TypeScript tip denetimi, Next.js üretim derlemesi ve etkileşimli tarayıcı testi yapılmadı; GitHub'a kayıttan sonraki Vercel derlemesi ayrıca kontrol edilir. Ortak bileşenler ve bağımlılıklar değiştirilmedi.

## Fen Bilimleri Test 12 — Kanıtları Birleştirme ve Günlük Yaşam (26 Ekim 2026)

- `/6-sinif/fen/test-12` adresine **Kanıtları Birleştirme ve Günlük Yaşam: Karma Tekrar (Orta–Zor)** başlığıyla 7 görselli ve 3 metin sorusu eklendi. Kimlikler `f6-1-t12-01`–`f6-1-t12-10`; cevap anahtarı **C, A, D, B, C, A, D, B, C, A**. Tüm soruların Türkçe çözüm açıklaması vardır.
- Meteor ile yere ulaşan gök taşı ayrımı, tek kuvvetin yönünü değiştirerek hedef bileşkeye ulaşma, fırçayla polen aktarımında kontrol grubu, değişen gelme açısından yansıma yönünü öngörme, açık/kapalı kaplarda buharlaşma ve yoğuşma, yüzme-batmadan bilinmeyen sıvının yoğunluk aralığı, reosta bağlantısını düzeltme, refleks ile bilinçli farkındalık, üç renkli etiketi ayırt eden aydınlatma ve farklı büyüklükteki gruplarda çimlenme oranları işlenir. Mevcut kapsam sınırları korunur; tam yıllık müfredat kapsamı iddia edilmez.
- Yedi pasif SVG `public/grade6/fen/test-12/soru-01.svg`–`soru-07.svg` altındadır. 360 birim genişlik, en az 26 birim yazı, Türkçe başlık/açıklama ve alternatif metin kullanılır. Uzay-atmosfer-yeryüzü kaydı, kuvvetler, polen deneyi, yansıma, tartım kayıtları, sıvıda cisimler ve reosta devresi görselleri hazırlandı. 238, 320 ve 360 piksel çıktıları üretildi; küçük ekran okunabilirliği ve şekil/veri uyumu bağımsız olarak incelendi.
- On sorunun bilimsel doğruluğu, koşulları, tek doğru cevabı ve açıklamaları bağımsız olarak denetlendi. Polen deneyinde böcek erişiminin engellendiği açıkça belirtildi; refleks sorusunda bilgi iletiminin zamanı hakkında gereksiz çıkarım yapılmaz. Dört kuvveti tersleme olasılıkları, yansıma açısı değişimi, yoğunluk aralığı ve çimlenme oranları bağımsız hesaplarla doğrulandı.
- Önceki 450 soru ve 45 test kaydı veri karşılaştırmasıyla, 263 SVG bayt karşılaştırmasıyla korunmuştur. Yeni toplamlar **46 test / 460 soru / 270 SVG / 51 adet 6. sınıf rotası**dır. Sayısal test sırası, yeni başlık, statik rota parametreleri ve sitemap girdileri doğrulandı; matematikteki ve İngilizcedeki on ikişer test korundu.
- Yerel veri/SVG kontrolleri mevcut doğrulama gövdesi ve Node.js'in yerleşik TypeScript tür ayıklayıcısıyla çalıştırıldı ve geçti. Yerel TypeScript tip denetimi, Next.js üretim derlemesi ve etkileşimli tarayıcı testi yapılmadı; GitHub'a kayıttan sonraki Vercel derlemesi ayrıca kontrol edilir. Ortak bileşenler ve bağımlılıklar değiştirilmedi.

## Türkçe Test 11 — Kanıt, Bağlam ve Çok Adımlı Çıkarım (26 Ekim 2026)

- Son production kaynağı `eb92647b2eea49188f351a3f7b2aca2739f11310` temel alınarak `/6-sinif/turkce/test-11` adresine **Kanıt, Bağlam ve Çok Adımlı Çıkarım (Zor)** başlığıyla 8 metin + 2 görsel okuma sorusu eklendi. Cevap anahtarı: **A, C, B, D, C, A, D, B, C, D**.
- Zorluk; iki metnin ortak düşüncesini sınırlarını koruyarak bulma, belgelerin desteklediği bilgiyi varsayımdan ayırma, gönderme zincirleriyle paragraf oluşturma ve sıralı özet denetiminde ilk hatayı belirleme üzerinden sağlanır. Sınıf düzeyinin dışındaki dil bilgisi terimleri yerine dikkatli okuma ve çok adımlı çıkarım kullanılır.
- İki pasif SVG 360 birim genişliğinde, en az 26 birim yazılıdır; 238 piksel çıktıları incelenir. Belge kartları ve iki aşamalı karar yolu görseli, doğru cevabı belirlemek için gereklidir. Önceki matematik, fen ve İngilizce 11–12. testler dâhil **460 soru ve 270 SVG** korunur. Yeni toplam: **47 test / 470 soru / 272 SVG / 52 adet 6. sınıf rotası**.
- Bağımsız Türkçe anlam, tek cevap, zorluk ve görsel denetimi; veri/rota doğrulaması, TypeScript ve üretim derlemesi uygulanır. Etkileşimli tarayıcı testi yapılmamıştır; bağımsız lint yapılandırması mevcut değildir. Production’a otomatik aktarım yapılmaz.


## Türkçe Test 12 — Örtük İleti, Tutarlılık ve Çoklu Koşullar (26 Ekim 2026)

- Zor düzeyde 8 metin + 2 görsel okuma sorusu: davranıştan çıkarım, iki metnin ortak düşüncesi, ihtiyaçları birleştirme, gönderme zinciri, çoklu yayımlama koşulları, iki afişin eksik bilgilerini tamamlama, sınırları koruyan özet, paragraf sırası, anlamı koruyarak yeniden yazma ve başlık–kanıt tutarlılığı. Anahtar: **A, D, B, C, B, D, A, C, B, D**.
- İki pasif SVG 360 birim genişlikte, en az 26 birim yazıyla hazırlanır; 238 piksel çıktıları denetlenir. Önceki 470 soru ve 272 SVG korunur. Toplam 48 test / 480 soru / 274 SVG / 53 rota.
- Bağımsız dil, tek doğru cevap ve zor düzey denetimi; veri/rota doğrulaması, TypeScript ve üretim derlemesi uygulanır. Etkileşimli tarayıcı testi yapılmaz; production’a otomatik aktarım yapılmaz.

## Türkçe Test 13 — Zor

- 8 metin sorusu ve 2 görsel okuma sorusu; cevap anahtarı: **A B C D B D A C A D**.
- Gerekçeyi değerlendirme, iki metnin ortak iletisi, parça-bütün ilişkisi, anlamı koruyarak birleştirme, çoklu yönerge, düzenleme aşamaları, zaman içinde bakış açısı, paragraf bağları, kapsam ve neden ilişkisi.
- Görseller 360 px genişliğinde, en az 26 px yazılıdır; 238 px genişlikte okunabilirlik ve taşma kontrolü yapılır. Kitap köşesi ve düzenleme yolu görselleri cevap için gereklidir.
- SEO başlığı: **Gerekçe, Kapsam ve Anlam Bağları (Zor)**. Ortak soru şeması değişmemiştir.
- Toplam: 49 test, 490 soru, 276 SVG; 54 altıncı sınıf rotası, 358 statik sayfa. Önceki 480 soru ve 274 SVG korunur.
- Kontroller: veri, TypeScript, rota, production build, eski içerik korunumu ve bağımsız dil/cevap denetimi. Bağımsız ESLint yapılandırılmamıştır; canlı tarayıcı doğrulaması bu çalışma kapsamında yapılmamıştır.

## Türkçe Test 14 — Bakış Açısı, Kanıt ve Yorum Sınırları (Zor)

- 8 metin + 2 görsel okuma sorusu; cevap anahtarı **B, D, A, C, B, C, A, D, B, C**. `/6-sinif/turkce/test-14` rotası mevcut veri kaydından üretilir; ortak soru şeması değişmez.
- Sahne doğaçlamasının örtük anlamı, iki metindeki bilgi sınırı, röportajdaki karşıtlığın işlevi, parça-bütün genellemeleri, yeni bulguyla çizimdeki kanıt durumunu güncelleme, sıra numarası ile göreli konumu ayırma, yönergenin amacı, gözlemin kapsamı, yaşantının metni anlamaya etkisi ve işlevi gözeten değerlendirme işlenir. Zorluk; birbirine yakın, metnin yalnız bir yönünü koruyan çeldiriciler ve çok adımlı çıkarımlarla sağlanır.
- `soru-05.svg` buluntu–önerilen tamamlama çizimi, `soru-06.svg` planlanan–gerçekleşen söyleşi akışıdır. İki pasif SVG 360 birim genişliğinde ve en az 26 birim yazılıdır; 238 piksel çıktıları okunabilirlik ve taşma bakımından incelenir. Görseller doğru cevap için gereklidir.
- Önceki **490 soru ve 276 SVG** korunur; matematik, fen ve İngilizcedeki 11–12. testler değişmez. Yeni toplamlar **50 test / 500 soru / 278 SVG / 55 altıncı sınıf rotası / 359 statik sayfa**.
- Bağımsız Türkçe, tek cevap, zorluk ve görsel denetimi; veri/rota doğrulaması, TypeScript, tam üretim derlemesi ve eski içerik korunumu kontrolleri uygulanır. ESLint yapılandırılmamıştır; etkileşimli tarayıcı denetimi yapılmaz. Production’a otomatik aktarım yapılmaz.

## Türkçe Test 15 — Bağlam, Örtük İleti ve Anlatım Tercihleri (Zor)

- 8 metin + 2 görsel okuma sorusu; cevap anahtarı **A, C, B, D, B, D, C, A, B, D**. `/6-sinif/turkce/test-15` rotası mevcut veri kaydından üretilir; ortak soru şeması değişmez.
- Sonucu bilinen anlatıda dikkat odağı, iki sanat dalında sezdirme, farklı yalnızlık yorumları, görüşün koşullarını koruyarak özetleme, kadraj ve paylaşımın kapsamı, gözlemci anlatıcının bilgi sınırı, çeviride amaç–araç ayrımı, yerel ve dışarıdan bakış, zamansal/nedensel paragraf sıralaması ve benzetmenin düşünceye katkısı işlenir. Yakın çeldiriciler; bir koşulu koruyup diğerini bozma, söylenen bilgiyi doğrulanmış sayma ve sınırlı yargıyı genişletme üzerine kuruludur.
- `soru-05.svg` aynı fotoğrafın geniş görüntüsünü ve işaretli bölümünün ölçekli kırpımını, `soru-06.svg` kapalı kutulu sahnede düşünce ile konuşmanın ayrımını gösterir. İki pasif SVG 360 × 760 birimdir; yazılar en az 26 birimdir. 238 piksel çıktıları okunabilirlik ve taşma bakımından incelenir. Her iki görsel, sorunun çözümünde kullanılan bilgileri taşır.
- Önceki **500 soru ve 278 SVG** korunur; matematik, fen ve İngilizcedeki 11–12. testler değişmez. Yeni toplamlar **51 test / 510 soru / 280 SVG / 56 altıncı sınıf rotası / 360 statik sayfa**.
- Bağımsız Türkçe, tek cevap, zorluk, özgünlük ve görsel denetimi; veri/rota doğrulaması, TypeScript, tam üretim derlemesi ve eski içerik korunumu kontrolleri uygulanır. ESLint yapılandırılmamıştır; etkileşimli tarayıcı denetimi yapılmaz. Production’a otomatik aktarım yapılmaz.

## Türkçe Test 16 — Anlatım Katmanları, Tutarlılık ve Eleştirel Çıkarım (Zor)

- 8 metin + 2 görsel okuma sorusu; cevap anahtarı **C, A, D, B, D, A, C, B, D, A**. `/6-sinif/turkce/test-16` rotası mevcut veri kaydından üretilir; ortak soru şeması değişmez.
- Bir kazanımla kaybı birlikte yorumlama, şiirin son dizesinin önceki dizelere etkisi, bilinen konuda özgün gözlem, gerekçe–karar–uygulama bağları, yazı–görüntü çelişkisi, geriye dönüşlü anlatım, doğrudan alıntının kime ait olduğu, bağlama uygun mecaz, eleştirmenlerin anlaşmazlık noktasını belirleme ve paragrafın düşünce bütünlüğü işlenir. Yakın çeldiriciler; sınırlı anlamı genişletme, özgünlükle güvenilirliği karıştırma, söyleyişle konuyu özdeşleştirme ve gerçek yaşamda mümkün olanla metinde gerekçelendirileni ayırma üzerine kuruludur.
- `soru-05.svg` herkese açık katılım çağrısıyla merdiveni kapatan ödül vitrininin çelişkisini, `soru-06.svg` olay kartlarıyla geriye dönüşlü anlatım planını gösterir. Görseller 360 birim genişliğinde, en az 26 birim yazılıdır; 238 piksel çıktıları okunabilirlik ve taşma bakımından incelenmiştir. Görseller doğru cevap için gereklidir.
- Önceki **510 soru ve 280 SVG** korunur; matematik, fen ve İngilizcedeki 11–12. testler değişmez. Yeni toplamlar **52 test / 520 soru / 282 SVG / 57 altıncı sınıf rotası / 361 statik sayfa**.
- Bağımsız Türkçe, tek cevap, zorluk, özgünlük ve görsel denetimi; veri/rota doğrulaması, TypeScript, tam üretim derlemesi ve eski içerik korunumu kontrolleri uygulanır. ESLint yapılandırılmamıştır; etkileşimli tarayıcı denetimi yapılmaz. Production’a otomatik aktarım yapılmaz.


## Fen Bilimleri Test 13 — Deney Koşulları ve Çok Aşamalı Bilimsel Çıkarım (Zor)

- 7 şekilli + 3 şekilsiz soru; cevap anahtarı **B, C, A, D, A, C, B, D, A, C**. `/6-sinif/fen/test-13` rotası mevcut veri kaydından üretilir; ortak soru şeması değişmez.
- Tutulmada gölgenin konumu, bileşke ve dengeleyici kuvvet, iki araştırma için ayrı kontrollü karşılaştırma, yüzey–normal açı ayrımı, parçalanmada yoğunluğun korunması, donma süresi ile donma noktasının ayrımı, iletkenlik deneyinde kontrol düzeneğinin güvenilirliği, tozlaşma–döllenme kanıtı, iki aydınlatma altında renk belirleme ve genleşmede sıcaklık değişiminin kontrolü işlenir. Zorluk çok aşamalı çıkarım, ölçülen ile çıkarılan bilgiyi ayırma ve deney koşullarını birlikte değerlendirme üzerinden sağlanır.
- Yedi pasif SVG 360 birim genişliğinde, en az 26 birim yazılıdır; 238 piksel çıktıları okunabilirlik ve taşma bakımından incelenir. Görseller soruların çözümünde gereken kayıtları taşır.
- Önceki **520 soru ve 282 SVG** korunur. Yeni toplamlar **53 test / 530 soru / 289 SVG / 58 altıncı sınıf rotası / 362 statik sayfa**.
- MEB kapsam kontrolü: https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/410, https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/413 ve https://tymm.meb.gov.tr/fen-bilimleri-dersi/unite/414. Sürat-hız hesabı, grafik ve birim dönüşümleri eklenmez; elektrik sorusunda akım veya Ohm kanunu hesabı kullanılmaz.
- Bağımsız bilimsel doğruluk, tek cevap, zorluk ve görsel denetimi; veri/rota doğrulaması, TypeScript, tam üretim derlemesi ve eski içerik korunumu kontrolleri uygulanır. ESLint yapılandırılmamıştır; etkileşimli tarayıcı denetimi yapılmaz. Production’a otomatik aktarım yapılmaz.


## Matematik Test 13 — Alan, Veri ve Çok Adımlı Sayısal Akıl Yürütme (Zor)

- 7 şekilli + 3 şekilsiz soru; cevap anahtarı **B, D, C, A, B, C, C, B, D, A**. `/6-sinif/matematik/test-13` rotası mevcut veri kaydından üretilir; ortak soru şeması değişmez.
- Üçgen alanlarını çıkarma, yay ve yarıçap uzunluğundan yeni şeklin alanına geçiş, alan birimleri ve tam paket satın alma, gruplar arası geçişte aritmetik ortalama, eş zamanlı iki değişkenli işlem kuralını geri yürütme, iki ikizkenar üçgenle açı bulma, kare panoda dış sıra, ortak bölen koşulu, kesir–ondalık birim fiyat ve indirim, eksik anket kaydında değişen payda işlenir.
- Yedi pasif SVG 360 birim genişliğinde ve en az 26 birim yazılıdır. Geometrik çizimler verilen uzunluk ve açılarla uyumludur; grafikler, akış okları ve kare pano örnekleri cevap için gereklidir. 238 piksel çıktıları okunabilirlik ve taşma bakımından incelenir.
- Önceki **530 soru ve 289 SVG** korunur. Yeni toplamlar **54 test / 540 soru / 296 SVG / 59 altıncı sınıf rotası / 363 statik sayfa**.
- Ortak bölen sorusunda EBOB terimi veya algoritması kullanılmaz. Çemberde yay uzunluğu ve alan konuları kullanıcının sağladığı konu listesine uygundur.
- Bağımsız matematik, tek cevap, özgünlük ve görsel denetimi; veri/rota doğrulaması, TypeScript, tam üretim derlemesi ve eski içerik korunumu kontrolleri uygulanır. ESLint yapılandırılmamıştır; etkileşimli tarayıcı denetimi yapılmaz. Production’a otomatik aktarım yapılmaz.


## Matematik Test 14 — Zor kategori (26 Ekim 2026)

- Matematik Test 14, 7 şekilli ve 3 şekilsiz özgün soruyla eklendi. Önceki 13 matematik testi ve diğer derslerin içerikleri korunur.
- Kapsam: örtüşen karelerde alan ve dış çevre; tekerlek çevresi ile kalan dönüş açısı; ortalama ve ortanca; yamukta paralellik ve ikizkenar üçgen; iki dengeyle bilinmeyen kütle; birim dönüşümü, boya ve tam şişe gereksinimi; ardışık nokta örüntüsü; asal sayıların tek-çift özelliği; para aktarımı; kademeli ücret.
- Zorluk, birden fazla bağıntının birleştirilmesi ve tersine çözümden doğar. Bazı sorular orta-zor düzeydedir; tüm sorular eşit güçlükte değildir.
- Cevap sırası: C, A, D, B, C, C, B, B, D, A. Sayısal sonuçlar: 88 cm² ve 42 cm; 72°; 8; 65°; 13 kg; 0,45 L; 45; 23; 81 TL; 6 TL.
- Yedi SVG 360 piksel genişlikte ve en az 26 piksel yazıyla hazırlandı; mobilde 238 piksel genişliğinde okunabilirlik kontrolü yapılır. Görseller gerçek geometrik şekil, sıralı kayıt, denge veya örüntü gösterir.
- Matematik toplamı 14 test / 140 sorudur. Tüm 6. sınıf paketi 55 test / 550 soru / 303 SVG içerir.
- Veri, TypeScript, tam derleme, rotalar ve önceki içeriklerin korunması kontrolleri yayın öncesinde çalıştırılır. Bağımsız matematik ve görsel inceleme yapılır. Standalone lint yapılandırılmamıştır; etkileşimli tarayıcı kontrolü çalıştırılmamıştır.
- Bu değişiklik production aktarımı içermez.


## Matematik Test 15 — Zor kategori (26 Ekim 2026)

- 7 şekilli ve 3 şekilsiz özgün soru eklendi. Önceki 14 matematik testi ve diğer derslerin içerikleri korunur.
- Kapsam: kesişen yolların alanı ve kesir; üç yarım çember yayının sınırı; eksik sıklık ve değişen ortalama; dış açı ve açıortay; geri kazanımlı şişe değişiminde en az başlangıç; üçgen alanlarında toplam ve fark; göreli sıklık aralığı; iki aşamalı yuvarlama; tam paket koşulunda en düşük ücret; farklı birim fiyatlarla bilinmeyen adet.
- Zorluk, bilgileri birleştirme, tersine düşünme ve koşulların uçlarını birlikte değerlendirmeden doğar. Bazı sorular orta-zor düzeydedir; tüm sorular eşit güçlükte değildir.
- Cevap sırası: A, C, D, B, C, B, D, A, C, B. Sonuçlar: 108 m²; 56 cm; 8 puan; 87°; 29 şişe; 72 cm²; 11 değer; 5 sayı; 379 TL; 32,40 TL.
- Yedi SVG 360 piksel genişlikte ve en az 26 piksel yazıyla hazırlandı; mobilde 238 piksel genişliğinde okunabilirlik kontrolü yapılır. Şekiller gerçek geometrik düzen, nokta sıklığı, değişim akışı veya ortak ölçekli çubuklar içerir.
- Matematik toplamı 15 test / 150 sorudur. Tüm 6. sınıf paketi 56 test / 560 soru / 310 SVG içerir.
- Veri, TypeScript, tam derleme, rotalar ve önceki içeriklerin korunması kontrolleri yayın öncesinde çalıştırılır. Bağımsız matematik ve görsel inceleme yapılır. Standalone lint yapılandırılmamıştır; etkileşimli tarayıcı kontrolü çalıştırılmamıştır.
- Bu değişiklik production aktarımı içermez.
