'use client'

import { useState } from 'react'

type Tale = {
  id: string
  title: string
  description: string
  theme: string
  text: string[]
}

const tales: Tale[] = [
  {
    id: 'ahmet-susuz-toprak',
    title: 'Ahmet ve Susuz Kalan Toprak',
    description:
      'Edirne’nin köy yaşamı, kuraklık, suyu koruma, fidan dikme ve çevre bilinci anlatılmıştır.',
    theme: 'Çevre bilinci • Köy yaşamı • Su tasarrufu',
    text: [
      'Edirne’nin yemyeşil tarlalarına bakan küçük bir köyde Ahmet adında meraklı bir çocuk yaşardı. Her sabah dedesiyle bahçeye çıkar, toprağın kokusunu içine çeker, kuşların sesini dinlerdi. Fakat o yıl yağmurlar gecikmiş, dere sessizleşmiş, toprağın rengi solmuştu.',
      'Ahmet, çatlamış toprağa eğilip “Sana nasıl yardım edebilirim?” diye fısıldadı. Dedesi, toprağın da canlılar gibi ilgi istediğini anlattı. Suyu boşa akıtmamak, yağmur suyunu biriktirmek ve fidan dikmek köyün geleceği için çok önemliydi.',
      'Ertesi gün Ahmet arkadaşlarını topladı. Eski kovalar temizlendi, damlayan musluklar onarıldı, okul bahçesine fidanlar dikildi. Her fidanın yanına küçük bir söz yazdılar: “Suyu koru, toprağı yaşat.”',
      'Günler sonra ilk yağmur damlaları köyün üstüne düştüğünde çocuklar sevinçle dışarı koştu. Toprak mis gibi koktu, fidanlar yapraklarını kaldırdı. Ahmet anladı ki bir çocuğun küçük bir iyiliği, koskoca bir köyün umudu olabilir.',
    ],
  },
  {
    id: 'mehmet-edirne-ruyasi',
    title: 'Mehmet’in Edirne Rüyası',
    description:
      'Selimiye Camii, Meriç Nehri, tarihî yapılar ve Edirne’ye uyum süreci masal diliyle işlenmiştir.',
    theme: 'Kültürel miras • Uyum • Şehir sevgisi',
    text: [
      'Mehmet, ailesiyle Edirne’ye yeni taşındığında kendini biraz yabancı hissetti. Sokaklar, köprüler, çarşılar ona önce büyük ve sessiz göründü. Bir akşam penceresinden Selimiye Camii’nin zarif minarelerine bakarken uykuya daldı.',
      'Rüyasında Meriç Nehri gümüş bir yol gibi parlıyor, eski köprüler ona geçmişten masallar anlatıyordu. Selimiye’nin kubbesinden yükselen ışık, “Bu şehir, tanımak isteyene kapılarını açar,” dedi sanki.',
      'Mehmet rüyasında çarşıdan geçen ustalarla, nehir kıyısında uçan kuşlarla ve taş duvarların sakladığı anılarla tanıştı. Her biri Edirne’nin sabırla, emekle ve güzellikle kurulmuş bir kültür hazinesi olduğunu fısıldadı.',
      'Sabah olduğunda Mehmet okul yolunda artık etrafına başka gözle baktı. Gördüğü her yapı, duyduğu her ses ona yeni bir hikâye gibi geldi. Edirne’yi tanıdıkça, bu şehrin onun da evi olduğunu hissetti.',
    ],
  },
  {
    id: 'doruk-er-meydani',
    title: 'Doruk ve Er Meydanının Sırrı',
    description:
      'Kırkpınar Yağlı Güreşleri üzerinden sabır, saygı, gelenek ve karakter eğitimi konu edilmiştir.',
    theme: 'Kırkpınar • Saygı • Sabır • Karakter',
    text: [
      'Doruk, Kırkpınar haftasında davulların sesini duyunca çok heyecanlandı. Er meydanında pehlivanları izlerken gücün yalnızca kaslarda olduğunu düşündü. O sırada yaşlı bir usta ona gülümseyerek “Er meydanının asıl sırrı yürekte saklıdır,” dedi.',
      'Doruk bu sözün anlamını merak etti. Usta ona pehlivanların önce saygıyı, sonra sabrı öğrendiğini anlattı. Rakibe değer vermek, kurallara uymak, yenilince teşekkür edebilmek ve kazanınca alçakgönüllü kalmak gerçek gücün işaretleriydi.',
      'Doruk gün boyunca pehlivanların birbirlerine nasıl selam verdiğini, büyüklerin küçüklere nasıl öğüt sunduğunu izledi. Davulun her vuruşunda geleneklerin yalnızca geçmişte değil, bugünün davranışlarında da yaşadığını fark etti.',
      'Akşam eve dönerken Doruk artık er meydanının sırrını biliyordu. Kırkpınar ona şunu öğretmişti: İnsan güçlü olabilir; ama saygılı, sabırlı ve iyi yürekli olduğunda gerçekten pehlivan olur.',
    ],
  },
]

function TaleCard({ tale, isOpen, onToggle }: { tale: Tale; isOpen: boolean; onToggle: () => void }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#d6b45d]/30 bg-white/85 shadow-xl shadow-[#5b1f2a]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-[#d6b45d]/25 dark:bg-[#151019]/85 dark:shadow-black/30">
      <div className="h-2 bg-gradient-to-r from-[#7a1f2b] via-[#d6b45d] to-[#4f7d3a]" />
      <div className="p-6 sm:p-7">
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
        <p className="mt-4 rounded-2xl bg-[#f2eadc] px-4 py-3 text-sm font-semibold text-[#704b2a] dark:bg-[#241c16] dark:text-[#f0c98a]">{tale.theme}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
            disabled
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-[#1d2f57]/20 bg-[#fbf5e8] px-5 py-3 text-sm font-extrabold text-[#1d2f57]/60 dark:border-[#d6b45d]/20 dark:bg-[#211828] dark:text-[#f6e7c4]/55"
            title="PDF kitapçık alanı yakında eklenecek"
          >
            PDF Kitapçık <span className="ml-2 text-xs">Yakında</span>
          </button>
        </div>
        <div
          id={`${tale.id}-content`}
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <div className="mt-6 rounded-3xl border border-[#d6b45d]/30 bg-[#fffaf0] p-5 text-[#3f332b] dark:border-[#d6b45d]/20 dark:bg-[#201722] dark:text-[#f4eadb]">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#7a1f2b] dark:text-[#ffd86a]">Masal Metni</p>
              <div className="space-y-4 text-base leading-8">
                {tale.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
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

  return (
    <section className="grid gap-7 lg:grid-cols-3">
      {tales.map((tale) => (
        <TaleCard
          key={tale.id}
          tale={tale}
          isOpen={openTaleId === tale.id}
          onToggle={() => setOpenTaleId((current) => (current === tale.id ? null : tale.id))}
        />
      ))}
    </section>
  )
}
