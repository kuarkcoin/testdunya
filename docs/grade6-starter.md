# 6. sınıf başlangıç paketi

260 özgün soru: Matematikte 10, Fen Bilimlerinde 10, Türkçe ve İngilizcede üçer test; her test 10 soru. Matematik Test 1, Test 4, Test 5 ve Test 6, onar şekilli akıl yürütme sorusu içerir. Test 1, eski 10 soru yerine orta–zor düzeyde 10 şekilli soruyla yenilenmiştir; toplam test ve soru sayısı değişmemiştir. Test 7, Test 8, Test 9 ve Test 10, yedişer şekilli ve üçer şekilsiz orta–zor soru içerir. Fen Test 1, Test 2 ve Test 3, yedişer şekilli ve üçer şekilsiz orta–zor soruyla yenilenmiştir. Testler mevcut birinci dönem kayıt yapısında tutulur; yeni matematik testleri yılın farklı temalarından seçilmiştir. Tüm yıl/müfredat kapsandığı veya MEB onayı bulunduğu iddia edilmez. İkinci dönem için soru eklenmedi.

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
