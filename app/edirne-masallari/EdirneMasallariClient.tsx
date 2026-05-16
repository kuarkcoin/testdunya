'use client'

import { useEffect, useMemo, useState } from 'react'

const pdfUrl = '/pdf/edirne-masallari.pdf'

type Tale = {
  id: string
  title: string
  description: string
  theme: string
  text: string[]
}

function splitParagraphs(text: string) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

const ahmetText = splitParagraphs(`
Bir varmış, bir yokmuş…

Evvel zaman içinde, kalbur saman içinde, Edirne’nin rüzgârı bol, toprağı bereketli bir köyünde Ahmet adında bir çocuk yaşarmış. Ahmet daha on bir yaşındaymış ama toprağı dinlemeyi bilenlerdenmiş. Sabahları babasıyla tarlaya gider, çizmelerine yapışan çamura bakar, avucuna aldığı toprağı koklar, yeni filizlenen ekinleri uzun uzun seyredermiş.

Babası köyün muhtarıymış. Ahmet, onun peşinden ayrılmazmış. Kimi zaman tohum eker, kimi zaman fide sular, kimi zaman da dere kenarında oturup suyun taşlara çarpa çarpa akışını izlerlermiş.

Ama bir yaz, köyün üstüne ağır bir sessizlik çökmüş.

Yağmurlar gecikmiş. Dereler incelmiş. Ekinler başını eğmiş. Toprak, eski bir testi gibi çatlamış. Köy meydanında eskiden çocuk sesleri, gülüşmeler, harman konuşmaları duyulurken artık herkesin yüzünde aynı düşünce varmış:

“Bu kuraklık daha ne kadar sürecek?”

Bir akşam Ahmet, babasını evin önündeki tahta sırada düşünceli düşünceli otururken görmüş. Babasının yüzündeki çizgiler sanki o gün biraz daha derinleşmiş.

Yanına usulca oturmuş.

“Babacığım,” demiş, “yağmuru biz yağdıramayız, değil mi?”

Babası içini çekmiş.

“Yağdıramayız oğlum.”

Ahmet bir süre susmuş. Sonra gözleri parlayarak devam etmiş:

“Ama yağan suyu tutabiliriz. Toprağın hemen susuz kalmasına engel olabiliriz.”

Babası başını çevirip oğluna bakmış. Ahmet’in sesi çocuk sesiymiş ama içinde koca bir kararlılık varmış.

“Peki,” demiş babası. “Nasıl yapacağız bunu?”

Ahmet o gece uyuyamamış. Ertesi sabah eline küçük defterini almış. Önce köyün en yaşlılarından Hüseyin Dede’ye gitmiş. Sonra öğretmenine danışmış. Yağmur yağdığı günlerde suyun nerelerden akıp gittiğini izlemiş. Dere yatağına bakmış. Eğimli tarlalarda suyun nasıl hızla kaçtığını görmüş.

Bir gün, evlerinin çatısından damlayan son yağmur suyunun toprağa düşüp hemen kaybolduğunu fark etmiş. İşte o an aklına bir fikir gelmiş.

Köy meydanında herkes toplandığında Ahmet biraz utanmış. Kâğıtlarını elinde sıkı sıkı tutmuş. Kalbi hızlı hızlı atıyormuş. Ama babası ona gülümseyince cesaretini toplamış.

“Ben bir şey düşündüm,” demiş.

Köylüler sessizce ona bakmış.

“Yağmur az yağıyor olabilir,” demiş Ahmet. “Ama yağan suyu da hemen kaybediyoruz. Çatılardan akan suları varillere toplasak… Ağaçların diplerini samanla örtersek toprak daha geç kurur. Rüzgâr tarlayı kavurmasın diye kenarlara fidan diksek… Suyun hızla akıp gitmemesi için küçük hendekler açsak…”

Biraz duraklamış. Sonra sesini daha da yumuşatmış:

“Belki toprağa biraz yardım etmiş oluruz.”

Meydanda bir sessizlik olmuş. Sonra yaşlı bir köylü bastonuna dayanarak gülümsemiş.

“Demek toprağın dilini Ahmet çözecek ha?”

Bu söz alay gibi değil, sevgi gibi duyulmuş.

Muhtar ayağa kalkmış.

“Denemeden bilemeyiz,” demiş. “Bir damlanın bile kıymeti varsa, bugün başlayacağız.”

O günden sonra köyde tatlı bir telaş başlamış.

Evlerin saçaklarına oluklar takılmış. Ahırların yanına eski variller yerleştirilmiş. Çocuklar yaprak toplamış, kadınlar saman taşımış, erkekler tarlaların kenarına küçük hendekler açmış. Ağaçların dipleri örtülmüş. Rüzgârın en sert estiği yerlere fidanlar dikilmiş.

Ahmet’in en sevdiği iş fidan dikmekmiş.

Her fidanı toprağa bırakırken iki eliyle toprağı yavaşça bastırır, sonra eğilip fısıldarmış:

“Büyü tamam mı? Gölge ol. Toprağı bırakma.”

Babası bazen onu böyle konuşurken görür, gülümsermiş.

“Fidanlar seni duyuyor mu dersin?”

Ahmet ciddi ciddi başını sallarmış.

“Bence toprak her şeyi duyar.”

O yaz yine kolay geçmemiş. Güneş yakmış. Rüzgâr esmiş. Yağmur yine az yağmış. Ama köylüler bir şeyi fark etmiş: Ağaç diplerindeki toprak eskisi kadar çabuk kurumuyormuş. Hendeklere dolan azıcık su bile hemen akıp gitmiyor, ağır ağır toprağa karışıyormuş. Varillerde biriken su, en kurak günlerde fidanlara can oluyormuş.

Bir akşam Ahmet, babasıyla tarlanın kenarında durmuş. Toprakta eskiye göre daha az çatlak varmış. Küçük bir yeşil filiz, kurumuş otların arasından başını kaldırmış.

Ahmet gülümsemiş.

“Bak babacığım,” demiş. “Yağmuru biz getirmedik ama gelen suyu artık kaçırmıyoruz.”

Babası oğlunun omzuna elini koymuş.

“Bazen akıl,” demiş, “göğe bakıp beklemek değil, yerde ne yapacağını bilmektir.”

Mevsimler geçmiş. Fidanlar boy atmış. Köyün çevresinde ince gölgeler belirmeye başlamış. Toprak yavaş yavaş canlanmış. Köylüler de artık yağmuru beklerken elleri boş beklemiyormuş. Herkes toprağa biraz daha dikkatli bakıyor, suyu biraz daha kıymetli kullanıyormuş.

Bir bahar günü yağmur gerçekten köye uğramış.

Damlar şırıl şırıl akmış, variller dolmuş. Hendeklerde su birikmiş. Toprak suyu içine çekmiş. Ekinler başını kaldırmış. Köy meydanında uzun zamandır duyulmayan bir sevinç sesi yükselmiş.

Komşu köylerden gelenler olmuş.

“Bu tarlalar nasıl böyle toparlandı?” diye sormuşlar.

Muhtar gülümsemiş, Ahmet’i göstermiş.

“Önce bir çocuk fark etti,” demiş. “Sonra bir köy inandı.”

Ahmet o gün tarlanın kenarında durmuş. Rüzgâr saçlarını okşamış. Yeşeren toprağa bakmış. Artık o sadece muhtarın oğlu değilmiş. Köyün umuduna küçük elleriyle su taşıyan bir çocukmuş.

Derler ki o köyde ne zaman bir fidan dikilse, çocuklar Ahmet’i hatırlarmış. Çünkü Ahmet onlara toprağın yalnızca basılıp geçilecek bir yer olmadığını öğretmiş.

Gökten üç elma düşmüş.

Biri toprağa emek verenlerin başına,
biri pes etmeyip çare arayanların başına,
biri de küçücük yüreğiyle koca bir köye umut olan çocukların başına.
`)

const mehmetText = splitParagraphs(`
Bir varmış, bir yokmuş…

Evvel zaman içinde, kalbur saman içinde değil; bundan çok da uzak olmayan bir zamanda, İzmir’de Mehmet adında on iki yaşında bir çocuk yaşarmış.

Mehmet’in dünyası deniz kokulu sokaklardan, martı seslerinden, Kordon’da esen rüzgârdan ve arkadaşlarıyla oynadığı maçlardan ibaretmiş. İzmir onun için kocaman, sıcak, hareketli bir yermiş. Her köşesinde bir anısı varmış.

Bir akşam babası eve biraz sessiz gelmiş. Elinde küçük bir dosya, yüzünde hem sevinç hem de hüzün varmış. Mehmet bunu hemen fark etmiş.

“Ne oldu baba?” diye sormuş.

Babası yanına oturmuş.

“Tayinim çıktı oğlum,” demiş. “Edirne’ye gidiyoruz.”

Mehmet’in içi birden daralmış.

“Edirne mi?” demiş. “Ama benim arkadaşlarım burada. Okulum burada. Deniz burada.”

Babası bir şey söylemek istemiş ama Mehmet çoktan odasına gitmiş. O gece yastığına başını koyduğunda içinden aynı cümle geçip durmuş:

“Ben Edirne’de ne yapacağım?”

Gözleri dolmuş. Denizi, bisikletini, arkadaşlarını düşünmüş. Sonra uyku usulca gelip onu almış.

Gece yarısına doğru odasının penceresinden ince, altın renkli bir ışık süzülmüş. Mehmet gözlerini açmış. Işığın içinde uzun sakallı, başında kavuk, üzerinde işlemeli bir kaftan olan heybetli bir ihtiyar belirmiş.

Mehmet önce korkmuş, sonra adamın yüzündeki yumuşak gülümsemeyi görünce biraz rahatlamış.

“Sen kimsin?” diye fısıldamış.

İhtiyar gülümsemiş.

“Ben Sinan,” demiş. “Taşa can verenlerdenim. Duydum ki Edirne’ye gitmek istemiyormuşsun.”

Mehmet şaşkınlıkla doğrulmuş.

“Mimar Sinan mısınız?”

“Öyle derler,” demiş ihtiyar. “Ama bu gece bana sadece yol arkadaşın diyebilirsin.”

Pencerenin dışında kocaman, işlemeli bir hasır sepet duruyormuş. Sepetin kenarlarında küçük kandiller yanıyor, içinden hafif bir lavanta kokusu geliyormuş.

“Gel,” demiş Mimar Sinan. “Sana korktuğun şehri göstereyim.”

Mehmet tereddüt etmiş ama merakı korkusundan ağır basmış. Sepete binmişler. Sepet yavaşça yükselmiş. İzmir’in ışıkları aşağıda küçülmüş. Deniz, ay ışığında gümüş gibi parlamış.

Bir süre sonra altlarında geniş ovalar, kıvrıla kıvrıla akan nehirler görünmüş.

“Burası Edirne’ye açılan yoldur,” demiş Mimar Sinan. “Her şehir önce uzaktan görünür. Ama ruhunu anlamak için içine girmek gerekir.”

Sepet, sabaha karşı Edirne’nin üstüne süzülmüş. Önce dört minaresiyle göğe uzanan Selimiye Camii görünmüş. Mehmet’in nefesi kesilmiş.

“Bu kadar büyük müydü?” diye fısıldamış.

Mimar Sinan’ın gözleri parlamış.

“Büyük olan taş değil evlat,” demiş. “İnsanın içindeki hayaldir.”

Sepet, Selimiye’nin avlusuna inmiş. Mehmet mermer taşlara çıplak ayağıyla basar gibi bir serinlik hissetmiş. Kubbenin altında başını kaldırdığında desenler sanki gökyüzüne açılan renkli bir bahçe gibi görünmüş.

“Ben burayı yalnızca cami sanırdım,” demiş Mehmet.

“Her yapı,” demiş Sinan, “onu sevenlerin sesiyle yaşar.”

Sonra sepet yeniden havalanmış. Meriç Nehri’nin üzerinden geçmişler. Nehir ay ışığında ince bir ipek şerit gibi uzanıyormuş. Meriç Köprüsü’nün kemerleri suya eğilmiş gibiymiş.

Mehmet, köprünün üzerinden esen rüzgârı yüzünde hissetmiş.

“Burada bisiklet sürülür mü?” diye sormuş birden.

Mimar Sinan gülmüş.

“Sürülür elbette. Hatta insan bazen bir köprüden geçerken eski hayatından yeni hayatına da geçer.”

Mehmet bu sözü tam anlayamamış ama içine yerleşmiş.

Sonra Sultan II. Bayezid Külliyesi’nin avlusuna inmişler. Orada su sesi varmış. Hafif bir ney ezgisi, rüzgârla karışıp duvarlara dokunuyormuş.

“Burası eskiden insanların yalnız bedenini değil, gönlünü de iyileştirirmiş,” demiş Mimar Sinan.

Mehmet suyun sesini dinlemiş. İçindeki sıkıntının biraz hafiflediğini hissetmiş.

Ardından Rüstem Paşa Kervansarayı’na uğramışlar. Geniş avluda Mehmet bir an için develerin ayak seslerini, tüccarların konuşmalarını, baharat ve kumaş kokularını duyar gibi olmuş.

“Burası otel gibi miymiş?” diye sormuş.

“Yolcuların evi gibi,” demiş Sinan. “Çünkü eskiden yollar uzun, yolculuklar zahmetliydi. İnsan yolda bir kapıya, bir çorbaya, bir güvene ihtiyaç duyardı.”

Sepet daha sonra yeşil bir alana doğru süzülmüş. Davul zurna sesleri uzaktan yükseliyormuş. Kırkpınar Er Meydanı’na gelmişler.

Çimenlerin üzerinde pehlivanlar yokmuş belki ama Mehmet sanki geçmiş zamanlardan gelen ayak seslerini duyuyormuş.

“Burası,” demiş Mimar Sinan, “yalnızca gücün değil, sabrın ve saygının meydanıdır.”

Mehmet gözlerini kapatmış. Davulun sesi göğsünde vurmuş. İlk kez Edirne ona küçük ve sıkıcı değil, eski hikâyelerle dolu bir şehir gibi görünmüş.

Uçuşun sonuna doğru sepet, şehrin üstünde bir kez daha dolaşmış. Selimiye’nin kubbesi, Meriç’in suyu, köprülerin taşları, külliyenin sessizliği ve meydanların sesi birbirine karışmış.

Mimar Sinan, Mehmet’i odasının penceresine geri getirmiş.

“Unutma,” demiş. “Büyük şehirde kalabalığı, küçük şehirde ruhu duyarsın. Yeter ki bakmayı bil.”

Sonra avucuna küçük, düzgün bir taş bırakmış.

“Bu sana bu geceden bir hatıra olsun.”

Mehmet taşı sıkıca tutmuş.

“Edirne’ye gidince beni bekler mi?” diye sormuş.

Mimar Sinan gülümsemiş.

“Şehirler beklemez evlat. Ama geleni tanır.”

Işık yavaşça çekilmiş. Sepet kaybolmuş. Mehmet yeniden yatağında kalmış.

Sabah olduğunda Mehmet gözlerini açmış. İlk işi avucuna bakmak olmuş. Küçük taş hâlâ oradaymış.

Koşarak anne ve babasının yanına gitmiş.

“Ben artık Edirne’ye gitmekten korkmuyorum,” demiş. “Mimar Sinan bana gösterdi. Orada taşların bile hikâyesi var.”

Annesi şaşırmış, babası gülümsemiş.

Günler sonra Mehmet ve ailesi Edirne’ye taşınmış. Mehmet Selimiye’nin gölgesinde yeni arkadaşlar edinmiş. Meriç kenarında bisiklet sürmüş. Kervansarayın avlusunda eski zamanları hayal etmiş. Bazen cebindeki küçük taşı çıkarıp avucunda tutmuş.

Ve her seferinde aynı şeyi düşünmüş:

“Bazı şehirler uzaktan küçük görünür. İçine girince kocaman olur.”

Gökten üç elma düşmüş.

Biri yeni yerlere cesaretle gidenlerin başına,
biri hayal kurmayı bırakmayanların başına,
biri de baktığı yerde hikâye görmeyi bilen çocukların başına.
`)

const dorukText = splitParagraphs(`
Bir varmış, bir yokmuş…

Evvel zaman içinde değil de, bundan çok da uzak olmayan bir yaz sabahında, Edirne’de Doruk adında bir çocuk yaşarmış. Doruk on iki yaşındaymış. Meraklıymış, hareketliymiş, her şeyi hemen anlamak istermiş. Ama büyüklerin bazı şeylere neden bu kadar önem verdiğini pek kavrayamazmış.

O sabah babası erkenden kapısını çalmış.

“Haydi bakalım Doruk,” demiş. “Bugün seni Kırkpınar’a götürüyorum.”

Doruk uykulu uykulu doğrulmuş.

“Kırkpınar mı? Güreş izleyeceğiz yani?”

“Evet.”

Doruk yüzünü buruşturmuş.

“Yağlı yağlı adamlar birbirini itiyor işte baba. Ne var bunda bu kadar?”

Babası kızmamış. Sadece hafifçe gülümsemiş.

“Bugün iyi bak,” demiş. “Belki yalnızca onu görmezsin.”

Birlikte evden çıkmışlar. Edirne sokaklarında o gün başka bir canlılık varmış. Uzaktan davul zurna sesleri geliyormuş. İnsanlar akın akın aynı yöne yürüyormuş. Kimi elinde bayrak taşıyor, kimi çocuğunun elinden tutuyor, kimi eski bir tanıdığını görüp sarılıyormuş.

Doruk şaşırmış.

“Bütün şehir mi gidiyor buraya?” diye sormuş.

Babası başını sallamış.

“Bazı günler şehir tek bir kalp gibi atar,” demiş. “Bugün de öyle.”

Kırkpınar Er Meydanı’na vardıklarında sabah güneşi çimenlerin üzerine yeni yeni yayılıyormuş. Tribünler dolmaya başlamış. Cazgırın sesi meydanın üstünde yankılanıyor, davulun tok vuruşları insanın içinde bir yere dokunuyormuş.

Doruk yine de anlamamış.

“İyi de baba,” demiş, “sonuçta biri kazanacak, biri kaybedecek. Hepsi bu değil mi?”

Tam o sırada yanlarında oturan yaşlı bir adam hafifçe gülmüş. Başında eski bir kasket, sırtında açık renk bir ceket varmış. Omuzları yaşına rağmen genişmiş. Elleri dizlerinin üstünde duruyormuş; kalın, nasırlı, sessiz eller…

Yaşlı adam Doruk’a dönmüş.

“Evlat,” demiş, “sen güreşe mi bakıyorsun, yoksa sadece iki kişinin birbirini tuttuğunu mu görüyorsun?”

Doruk biraz utanmış.

“Ben… güreş işte sanıyordum.”

Adam gülümsemiş.

“Adım Hasan,” demiş. “Bir zamanlar ben de bu çimlere çıkardım. Şimdi dizlerim izin vermiyor ama gönlüm hâlâ meydanda.”

Doruk’un babası saygıyla eğilmiş.

“Hasan Pehlivan’ı herkes tanır,” demiş. “Çok er meydanı görmüştür.”

Doruk’un merakı uyanmış.

“Peki burada bu kadar önemli olan ne?” diye sormuş.

Hasan Pehlivan gözlerini meydana çevirmiş. O sırada iki genç pehlivan birbirinin etrafında ağır ağır dönüyormuş. Biri aceleciymiş; hemen hamle yapmak istiyormuş. Diğeri daha sessiz, daha dikkatliymiş.

Hasan Pehlivan parmağıyla onları göstermiş.

“Bak,” demiş. “Şu sağdaki kuvvetli. Ama kuvvet bazen insanın kulağına bağırır. ‘Hemen saldır, hemen göster kendini’ der. Öteki ise bekliyor. Çünkü bilir ki her hamle zamanını ister.”

Doruk dikkatle bakmış.

Gerçekten de aceleci olan pehlivan birkaç kez atılmış ama rakibi sabırla geri çekilmiş. Sonra tam doğru anda yakalayıp onu dengesiz bırakmış. Tribünlerden büyük bir alkış kopmuş.

Doruk’un gözleri büyümüş.

“Bekledi ve başardı,” demiş.

Hasan Pehlivan başını sallamış.

“Güreş yalnızca kol gücü değildir evlat. İnsan bazen rakibinden önce kendi aceleciliğini yenmelidir.”

Doruk ilk kez meydanı başka türlü görmeye başlamış. Çimenlerin üzerinde yalnızca itişme kakışma yokmuş. Denge varmış. Sabır varmış. Zekâ varmış. Bir de insanın içindeki taşkınlığı tutması varmış.

Biraz sonra pehlivanlardan biri kayıp düşmüş. Rakibi onu hemen bastırmak yerine bir an durmuş, toparlanmasına fırsat vermiş.

Doruk bunu fark etmiş.

“Neden bekledi?” diye sormuş.

Hasan Pehlivan’ın yüzü ciddileşmiş.

“Çünkü burada edep vardır,” demiş. “Rakibini ezmek başka şeydir, onunla mertçe güreşmek başka. Pehlivan dediğin önce insanlığıyla güçlü olur.”

Doruk susmuş. Davulun sesi, Hasan Pehlivan’ın sözleriyle birlikte içinde yankılanmış.

Bir süre sonra yaşlı adam cebinden eski, kenarı işlemeli bir mendil çıkarmış. Mendil yıpranmışmış ama tertemizmiş.

“Bu mendili bana ustam vermişti,” demiş. “İlk yenilgimden sonra.”

Doruk şaşırmış.

“İlk galibiyetinizden sonra değil mi?”

Hasan Pehlivan gülmüş.

“Yok evlat. İlk yenilgimden sonra. Çünkü ben o gün yenilmeyi öğrenmiştim. Ustam bana dedi ki: ‘Yere düşmek ayıp değildir. Kalkarken yüzünü kirletmemek mühimdir.’”

Doruk mendile uzun uzun bakmış.

“Hiç altın kemer kazandın mı?” diye sormuş.

Hasan Pehlivan gözlerini uzaklara çevirmiş.

“Nasip olmadı,” demiş. “Ama insanın kazandığı her şey kemer değildir. Bazen bir dost kazanırsın. Bazen sabır kazanırsın. Bazen de kendine karşı küçük bir zafer kazanırsın.”

Doruk bu sözü sevmiş. İçinden birkaç kez tekrar etmiş.

Gün ilerledikçe güneş yükselmiş, meydan kalabalıklaşmış, davul zurna sesleri artmış. Doruk artık sıkılmıyormuş. Her güreşi dikkatle izliyormuş. Kimin acele ettiğini, kimin beklediğini, kimin rakibine saygı gösterdiğini fark etmeye başlamış.

Sabah “yağlı güreş işte” diyen çocuk, öğleden sonra her hareketin içinde bir anlam arayan bir çocuğa dönüşmüş.

Günün sonunda babası ayağa kalkmış.

“Eee Doruk,” demiş. “Nasılmış?”

Doruk cevap vermeden önce meydana baktı. Çimenlerin üstünde gün boyu ter, sabır, sevinç ve yenilgi birikmişti sanki.

“Ben yanlış biliyormuşum,” dedi.

Hasan Pehlivan gülümsedi.

“Neyi yanlış biliyormuşsun?”

Doruk biraz düşündü.

“Bu sadece güreş değilmiş,” dedi. “İnsan güçlü olsa bile kendini tutmayı öğreniyormuş. Düşse de kalkmayı öğreniyormuş. Kazansa da saygıyı unutmamayı öğreniyormuş.”

Hasan Pehlivan’ın gözleri parladı.

“İşte şimdi er meydanını görmüşsün,” dedi.

Tam ayrılacakları sırada Hasan Pehlivan, Doruk’un omzuna dokundu.

“Evlat,” dedi, “her insanın bir er meydanı vardır. Kimininki çimende olur, kimininki okulda, kimininki hayatın tam ortasında. Mühim olan, o meydana çıktığında kalbini kirletmemektir.”

Doruk o sözü duyunca bir şey söylemedi. Ama içinde bir yere yazdı.

Eve döndüklerinde annesi kapıda onları karşıladı.

“Nasıl geçti?” diye sordu.

Doruk önce babasına, sonra uzaklardan hâlâ belli belirsiz gelen davul seslerine baktı.

“Anne,” dedi, “ben bugün güreş izlemedim.”

Annesi şaşırdı.

“Ne izledin peki?”

Doruk gülümsedi.

“Bir insanın nasıl büyüdüğünü izledim.”

Babası sessizce gülümsedi.

Derler ki Doruk o günden sonra ne zaman acele etse, ne zaman öfkesine kapılsa, ne zaman yenildiğini sansa Hasan Pehlivan’ın sözünü hatırlarmış:

“Her insanın bir er meydanı vardır.”

Ve belki yıllar sonra, o da bir çocuğun omzuna dokunup aynı sözü söylemiştir.

Gökten üç elma düşmüş.

Biri gücüyle değil, kalbiyle büyüyenlerin başına,
biri geleneğin içindeki hikmeti görenlerin başına,
biri de er meydanından hayat dersi çıkaran çocukların başına.
`)

const tales: Tale[] = [
  {
    id: 'ahmet-susuz-toprak',
    title: 'Ahmet ve Susuz Kalan Toprak',
    description:
      'Edirne’nin köy yaşamı, kuraklık, suyu koruma, fidan dikme ve çevre bilinci anlatılmıştır.',
    theme: 'Doğa ve Çevre Bilinci',
    text: ahmetText,
  },
  {
    id: 'mehmet-edirne-ruyasi',
    title: 'Mehmet’in Edirne Rüyası',
    description:
      'Selimiye Camii, Meriç Nehri, tarihî yapılar ve Edirne’ye uyum süreci masal diliyle işlenmiştir.',
    theme: 'Tarihî Miras ve Keşif',
    text: mehmetText,
  },
  {
    id: 'doruk-er-meydani',
    title: 'Doruk ve Er Meydanının Sırrı',
    description:
      'Kırkpınar Yağlı Güreşleri üzerinden sabır, saygı, gelenek ve karakter eğitimi konu edilmiştir.',
    theme: 'Gelenek ve Karakter Eğitimi',
    text: dorukText,
  },
]

function getSpeechSynthesis() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null
  }

  return window.speechSynthesis
}

function TaleCard({
  tale,
  isOpen,
  isSpeaking,
  isSpeechSupported,
  onToggle,
  onSpeak,
}: {
  tale: Tale
  isOpen: boolean
  isSpeaking: boolean
  isSpeechSupported: boolean
  onToggle: () => void
  onSpeak: (tale: Tale) => void
}) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#d6b45d]/30 bg-white/90 shadow-xl shadow-[#5b1f2a]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-[#d6b45d]/25 dark:bg-[#151019]/90 dark:shadow-black/30">
      <div className="h-2 bg-gradient-to-r from-[#7a1f2b] via-[#d6b45d] to-[#4f7d3a]" />
      <div className="flex h-full flex-col p-6 sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4f7d3a] dark:text-[#8fbd74]">Masal Kartı</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#17233f] dark:text-[#fff7df]">{tale.title}</h2>
          </div>
          <span className="rounded-full bg-[#fff3c7] px-3 py-1 text-sm font-bold text-[#7a1f2b] ring-1 ring-[#d6b45d]/40 dark:bg-[#322114] dark:text-[#ffd86a]">
            ✦
          </span>
        </div>

        <p className="text-base leading-7 text-[#5d5148] dark:text-[#eadfcf]">{tale.description}</p>

        <p className="mt-4 inline-flex w-fit rounded-full bg-[#f2eadc] px-4 py-2 text-sm font-extrabold text-[#704b2a] ring-1 ring-[#d6b45d]/25 dark:bg-[#241c16] dark:text-[#f0c98a]">
          {tale.theme}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-3">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`${tale.id}-content`}
            className="inline-flex items-center justify-center rounded-full bg-[#7a1f2b] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#7a1f2b]/20 transition hover:bg-[#5f1621] focus:outline-none focus:ring-4 focus:ring-[#d6b45d]/40 dark:bg-[#d6b45d] dark:text-[#1c1520] dark:hover:bg-[#efcf76]"
          >
            {isOpen ? 'Masalı Kapat' : 'Masalı Oku'}
          </button>

          <button
            type="button"
            onClick={() => onSpeak(tale)}
            disabled={!isSpeechSupported}
            className="inline-flex items-center justify-center rounded-full border border-[#1d2f57]/20 bg-[#fbf5e8] px-5 py-3 text-sm font-extrabold text-[#1d2f57] transition hover:bg-[#f2eadc] focus:outline-none focus:ring-4 focus:ring-[#d6b45d]/40 disabled:cursor-not-allowed disabled:opacity-55 dark:border-[#d6b45d]/20 dark:bg-[#211828] dark:text-[#f6e7c4] dark:hover:bg-[#2a2030]"
            title={isSpeechSupported ? `${tale.title} masalını sesli oku` : 'Bu tarayıcı sesli okumayı desteklemiyor'}
          >
            {isSpeaking ? 'Durdur' : 'Sesli Oku'}
          </button>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#d6b45d]/40 bg-[#fff3c7] px-5 py-3 text-sm font-extrabold text-[#7a1f2b] transition hover:bg-[#ffe7a1] focus:outline-none focus:ring-4 focus:ring-[#d6b45d]/40 dark:bg-[#322114] dark:text-[#ffd86a] dark:hover:bg-[#3b2b14] sm:col-span-2 xl:col-span-1 2xl:col-span-1"
          >
            PDF Kitapçığı Aç
          </a>
        </div>

        <div
          id={`${tale.id}-content`}
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-6 rounded-3xl border border-[#d6b45d]/30 bg-[#fffaf0] p-5 text-[#3f332b] dark:border-[#d6b45d]/20 dark:bg-[#201722] dark:text-[#f4eadb]">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#7a1f2b] dark:text-[#ffd86a]">
                  Masal Metni
                </p>

                <button
                  type="button"
                  onClick={() => onSpeak(tale)}
                  disabled={!isSpeechSupported}
                  className="inline-flex items-center justify-center rounded-full border border-[#d6b45d]/35 bg-white px-4 py-2 text-xs font-extrabold text-[#1d2f57] transition hover:bg-[#f2eadc] disabled:cursor-not-allowed disabled:opacity-55 dark:bg-[#151019] dark:text-[#f6e7c4] dark:hover:bg-[#2a2030]"
                >
                  {isSpeaking ? 'Durdur' : 'Sesli Oku'}
                </button>
              </div>

              <div className="space-y-4 text-base leading-8">
                {tale.text.map((paragraph, index) => (
                  <p key={`${tale.id}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function EdirneMasallariClient() {
  const [openTaleId, setOpenTaleId] = useState<string | null>(tales[0]?.id ?? null)
  const [activeSpeechTaleId, setActiveSpeechTaleId] = useState<string | null>(null)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [isSpeechSupported, setIsSpeechSupported] = useState(false)

  useEffect(() => {
    const speechSynthesis = getSpeechSynthesis()

    if (!speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') {
      return undefined
    }

    setIsSpeechSupported(true)

    const updateVoices = () => {
      setVoices(speechSynthesis.getVoices())
    }

    updateVoices()
    speechSynthesis.addEventListener('voiceschanged', updateVoices)

    return () => {
      speechSynthesis.removeEventListener('voiceschanged', updateVoices)
      speechSynthesis.cancel()
    }
  }, [])

  const turkishVoice = useMemo(
    () => voices.find((voice) => voice.lang.toLowerCase().startsWith('tr')),
    [voices],
  )

  const handleSpeak = (tale: Tale) => {
    const speechSynthesis = getSpeechSynthesis()

    if (!speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') {
      return
    }

    if (activeSpeechTaleId === tale.id) {
      speechSynthesis.cancel()
      setActiveSpeechTaleId(null)
      return
    }

    speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(`${tale.title}.\n\n${tale.text.join('\n\n')}`)
    utterance.lang = 'tr-TR'
    utterance.rate = 0.95

    if (turkishVoice) {
      utterance.voice = turkishVoice
    }

    utterance.onend = () => {
      setActiveSpeechTaleId((current) => (current === tale.id ? null : current))
    }

    utterance.onerror = () => {
      setActiveSpeechTaleId((current) => (current === tale.id ? null : current))
    }

    setActiveSpeechTaleId(tale.id)
    speechSynthesis.speak(utterance)
  }

  return (
    <section className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
      {tales.map((tale) => (
        <TaleCard
          key={tale.id}
          tale={tale}
          isOpen={openTaleId === tale.id}
          isSpeaking={activeSpeechTaleId === tale.id}
          isSpeechSupported={isSpeechSupported}
          onToggle={() => setOpenTaleId((current) => (current === tale.id ? null : tale.id))}
          onSpeak={handleSpeak}
        />
      ))}
    </section>
  )
}
