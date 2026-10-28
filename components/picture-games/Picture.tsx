import { PICTURES, type PictureId } from '../../lib/picture-games/content';

const INK = '#29454b';

/** Hand-drawn vector pictures stay crisp and consistent across devices. */
function Drawing({ id }: { id: PictureId }) {
  switch (id) {
    case 'fox':
      return <>
        <path d="M39 84c-25-2-29-17-24-29 3 13 14 16 27 15" fill="#ed944c" />
        <path d="M15 55c-3 8-2 15 3 20l8-8c-5-3-9-6-11-12Z" fill="#fff5da" />
        <path d="M37 89c0-24 10-35 23-35s25 12 25 35v12H37Z" fill="#ed944c" />
        <path d="M49 100V78c0-9 22-9 22 0v22" fill="#fff5da" />
        <path d="m28 38 1-27 24 16h18l23-16-2 28c7 15-6 34-32 36-27-2-40-21-32-37Z" fill="#ed944c" />
        <path d="m36 29-1-10 11 10M78 29l9-10-1 11" fill="#ecb7a5" />
        <path d="M27 43c10-1 24 10 33 24 9-14 22-25 33-24-2 17-15 29-33 30-19-1-30-13-33-30Z" fill="#fff5da" />
        <path d="m54 60 6 6 6-6Z" fill={INK} />
        <path d="M60 66v5M43 44v2M77 44v2M39 100h13M69 100h15" />
      </>;
    case 'rabbit':
      return <>
        <ellipse cx="82" cy="91" rx="14" ry="12" fill="#fffaf0" />
        <ellipse cx="58" cy="83" rx="27" ry="22" fill="#fffaf0" />
        <path d="M39 48C20 11 33 2 43 12c8 9 11 29 11 34M65 45C64 11 76 3 83 13c6 9-3 28-8 37" fill="#fffaf0" />
        <path d="M40 23c6 9 8 17 9 25M76 23c-1 9-3 17-6 25" stroke="#eea6ae" strokeWidth="6" />
        <ellipse cx="57" cy="59" rx="30" ry="25" fill="#fffaf0" />
        <path d="M43 55v3M70 55v3" />
        <path d="m53 64 5 5 5-5Z" fill="#eea6ae" />
        <path d="M58 69v5M51 73c4 4 10 4 14 0" />
        <path d="M30 69h12M75 69h13" stroke="#c4abb1" />
        <ellipse cx="40" cy="101" rx="15" ry="7" fill="#fffaf0" />
        <ellipse cx="71" cy="101" rx="15" ry="7" fill="#fffaf0" />
      </>;
    case 'cat':
      return <>
        <path d="M81 93c26 0 28-30 14-33" fill="none" stroke="#dfa45d" strokeWidth="12" />
        <path d="M40 67c-9 12-10 29-7 35h51c3-16-3-29-12-36" fill="#efbc76" />
        <path d="m27 48 3-30 25 14h13l24-14 2 31c1 21-14 31-34 31S25 69 27 48Z" fill="#efbc76" />
        <path d="m35 36 1-10 12 10M76 36l10-10 1 10" fill="#e9989e" />
        <path d="M55 34v9M65 34v9M42 51v3M77 51v3" />
        <path d="m55 59 5 5 5-5Z" fill="#d67988" />
        <path d="M60 64v5m0 0c-3 3-6 3-9 0m9 0c3 3 6 3 9 0M24 61l17 1M24 70l17-4M80 62l17-1M80 66l17 4M47 91v11M69 91v11" />
      </>;
    case 'owl':
      return <>
        <path d="M30 96h62" stroke="#9a7350" strokeWidth="7" />
        <path d="m42 96 1 8m8-9 1 9m17-9-1 9m8-9 1 8" stroke="#e9a748" />
        <path d="m27 42 3-23 22 12h17l22-12 3 23v25c0 24-15 34-34 34S27 89 27 66Z" fill="#b798cf" />
        <path d="M29 53c-12 9-13 24-7 35 13-3 20-16 21-27M92 53c12 9 13 24 7 35-13-3-20-16-21-27" fill="#8973b5" />
        <circle cx="44" cy="49" r="20" fill="#fff6da" />
        <circle cx="77" cy="49" r="20" fill="#fff6da" />
        <circle cx="44" cy="49" r="6" fill={INK} />
        <circle cx="77" cy="49" r="6" fill={INK} />
        <circle cx="46" cy="46" r="2" fill="white" stroke="none" />
        <circle cx="79" cy="46" r="2" fill="white" stroke="none" />
        <path d="m54 63 6 10 7-10Z" fill="#f4bc54" />
        <path d="m47 80 4 4 4-4m8 0 4 4 4-4m-16 9 5 4 5-4" fill="none" />
      </>;
    case 'fish':
      return <>
        <path d="m75 48 30-20-3 33 3 30-30-18" fill="#f4b85c" />
        <path d="M39 39c4-21 24-23 31-10l-3 17M40 81c10 18 25 18 30 4l-5-10" fill="#e78d57" />
        <ellipse cx="48" cy="61" rx="37" ry="27" fill="#f7c96a" />
        <path d="M40 39c-9 10-9 34 0 44" fill="none" stroke="#e29d4e" />
        <path d="m52 54 16 9-16 8Z" fill="#e78d57" />
        <circle cx="28" cy="55" r="3" fill={INK} />
        <path d="M18 67c4 3 8 3 11 0" fill="none" />
        <circle cx="22" cy="20" r="6" fill="#d6eff2" stroke="#70b7c2" />
        <circle cx="10" cy="37" r="3" fill="#d6eff2" stroke="#70b7c2" />
      </>;
    case 'turtle':
      return <>
        <path d="m28 74-13 8 13 3" fill="#a9d496" />
        <ellipse cx="38" cy="91" rx="10" ry="12" fill="#a9d496" />
        <ellipse cx="73" cy="91" rx="10" ry="12" fill="#a9d496" />
        <path d="M77 64c7-18 21-24 30-14s3 26-5 30l-19 3" fill="#a9d496" />
        <path d="M26 78c-2-30 10-44 30-44 21 0 33 16 34 44l-9 10H34Z" fill="#74af76" />
        <path d="m45 49 22-1 10 17-10 17H46L36 65Z" fill="#badc92" />
        <path d="m45 49-6-10m28 9 6-9M36 65l-10-1m51 1 10-2M46 82l-8 6m29-6 9 6" fill="none" />
        <circle cx="101" cy="59" r="2.5" fill={INK} />
        <path d="M101 70c3 1 6 0 8-2" fill="none" />
      </>;
    case 'apple':
      return <>
        <path d="M60 34c-1-11 2-18 7-23" fill="none" stroke="#866247" strokeWidth="5" />
        <path d="M66 26c1-15 15-18 26-14-4 13-14 18-26 14Z" fill="#91be75" />
        <path d="M60 36c-28-16-48 3-43 27 3 21 16 41 30 39 8-2 17-2 25 0 15 1 27-21 30-41 3-25-18-39-42-25Z" fill="#e97572" />
        <path d="M31 55c2-9 9-13 16-12" fill="none" stroke="#ffd2bd" strokeWidth="6" />
        <path d="M52 36c5 3 11 3 16 0" fill="none" />
      </>;
    case 'pear':
      return <>
        <path d="M60 25c-1-6 0-13 4-17" fill="none" stroke="#866247" strokeWidth="5" />
        <path d="M65 22C72 9 84 8 93 15c-8 10-17 12-28 7Z" fill="#80b677" />
        <path d="M43 38c-3 23-27 30-24 50 3 16 20 20 41 20s38-4 41-20C105 67 79 61 77 38c-2-24-31-24-34 0Z" fill="#cedb70" />
        <path d="M36 73c-8 8-9 15-4 20" fill="none" stroke="#f5f4b4" strokeWidth="6" />
        <circle cx="58" cy="91" r="1" stroke="#9eae52" /><circle cx="68" cy="78" r="1" stroke="#9eae52" /><circle cx="79" cy="91" r="1" stroke="#9eae52" />
      </>;
    case 'strawberry':
      return <>
        <path d="M20 46c-9 25 23 59 40 63 18-5 48-39 40-64-6-21-74-20-80 1Z" fill="#ec7479" />
        <path d="m60 37-21-1-10-16 23 8 8-16 9 16 23-8-11 17-20 1 5 13-10-6-13 6Z" fill="#85b97a" />
        <path d="M38 56v3m21-5v3m22-1v3M30 72v3m21-1v3m22-2v3m15-9v3M44 90v3m21-1v3" stroke="#ffe6b6" strokeWidth="4" />
      </>;
    case 'carrot':
      return <>
        <path d="M70 39C63 21 65 8 73 10c7 1 8 14 5 23 8-16 17-23 22-17 4 5-7 17-17 23 15-5 25-3 24 4-1 7-14 9-26 4" fill="#85bc74" />
        <path d="M62 38c9-4 24 7 23 18-5 13-48 47-65 50-1-17 27-62 42-68Z" fill="#f5a152" />
        <path d="m53 50 13 9M39 69l12 8M67 73l-9-7M29 88l9 6" fill="none" stroke="#ba7548" />
        <path d="m63 46 9 6" fill="none" stroke="#ffd6a1" strokeWidth="5" />
      </>;
    case 'tree':
      return <>
        <ellipse cx="60" cy="108" rx="38" ry="5" fill="#dceacb" stroke="none" />
        <path d="M51 57v49h20V57" fill="#c79a6c" />
        <path d="m61 82-8-12m9 24 7-8" fill="none" stroke="#966b4f" />
        <path d="M34 76c-25 0-27-33-9-42-5-19 15-30 30-22 15-13 35-4 35 12 27 1 31 35 10 43-7 16-24 16-37 8-9 9-20 9-29 1Z" fill="#83bb88" />
        <path d="M37 32c2-8 9-11 15-7M78 50c7 0 13-5 14-11M29 55c1 6 6 10 12 10" fill="none" stroke="#c0dba0" strokeWidth="5" />
      </>;
    case 'flower':
      return <>
        <path d="M60 62v47" fill="none" stroke="#6b9e6c" strokeWidth="6" />
        <path d="M58 96C37 96 25 87 24 73c20-1 33 9 34 23ZM62 86c21 0 32-9 33-23-19-1-32 9-33 23Z" fill="#9aca89" />
        <path d="M45 29C36 8 61-1 70 17c18-11 35 9 21 24 20 13 9 38-12 31-4 22-31 24-37 3-23 4-33-20-15-33-11-15 5-29 18-13Z" fill="#e9a1b8" />
        <circle cx="59" cy="48" r="20" fill="#f8d56f" />
        <circle cx="52" cy="45" r="2" fill={INK} /><circle cx="66" cy="45" r="2" fill={INK} />
        <path d="M53 54c4 4 9 4 13-1" fill="none" />
      </>;
    case 'sun':
      return <>
        <path d="M60 8v13m0 78v13M8 60h13m78 0h13M24 24l9 9m54 54 9 9M24 96l9-9m54-54 9-9" fill="none" stroke="#e8aa49" strokeWidth="6" />
        <circle cx="60" cy="60" r="32" fill="#f7ce64" />
        <path d="M47 54v4m26-4v4M49 69c7 8 16 8 23 0" fill="none" />
        <circle cx="39" cy="66" r="4" fill="#edaa61" stroke="none" /><circle cx="81" cy="66" r="4" fill="#edaa61" stroke="none" />
      </>;
    case 'moon':
      return <>
        <path d="M78 15C45 3 15 26 15 58c0 29 22 49 48 49 23 0 40-16 44-34-27 10-56-11-53-35 2-11 11-20 24-23Z" fill="#f6d77f" />
        <path d="M32 63c4 4 8 4 12 0M37 77c4 3 8 3 11 0" fill="none" />
        <circle cx="40" cy="42" r="5" fill="#e9c46a" stroke="none" /><circle cx="62" cy="92" r="4" fill="#e9c46a" stroke="none" />
        <path d="m92 20 3 8 9 3-9 3-3 8-3-8-8-3 8-3Z" fill="#acbbd9" strokeWidth="2" />
      </>;
    case 'star':
      return <>
        <path d="m60 12 15 29 33 6-24 24 4 34-28-15-29 15 5-34-24-24 33-6Z" fill="#f6cf6d" />
        <path d="m43 46 12-3 5-11" fill="none" stroke="#fff0b8" strokeWidth="5" />
        <path d="M47 59v4m25-4v4M51 74c5 5 13 5 18 0" fill="none" />
      </>;
    case 'cloud':
      return <>
        <path d="M28 89C1 89 1 52 23 47c-2-26 32-38 47-18 19-8 36 6 34 24 20 9 15 36-7 36Z" fill="#e0f1f2" />
        <path d="M35 46c2-9 8-14 17-13" fill="none" stroke="white" strokeWidth="6" />
        <path d="M45 65v3m28-3v3M51 78c6 4 12 4 18 0" fill="none" />
      </>;
    case 'car':
      return <>
        <path d="m24 55 14-26h37l20 26 12 5v29H13V66c0-6 4-10 11-11Z" fill="#78bac6" />
        <path d="m35 53 10-17h25l14 17Z" fill="#edf6eb" />
        <path d="M58 36v17M18 62h12m67 2h8M63 66h9" fill="none" />
        <circle cx="33" cy="88" r="14" fill="#475d65" />
        <circle cx="87" cy="88" r="14" fill="#475d65" />
        <circle cx="33" cy="88" r="6" fill="#e1e8de" stroke="none" /><circle cx="87" cy="88" r="6" fill="#e1e8de" stroke="none" />
        <path d="M10 103h100" stroke="#d4e5db" strokeWidth="4" />
      </>;
    case 'boat':
      return <>
        <path d="M62 13v65" fill="none" stroke="#8a6853" strokeWidth="4" />
        <path d="M55 22 19 65h36Z" fill="#f8d27a" />
        <path d="m69 32 28 33H69Z" fill="#ef9991" />
        <path d="m14 78 15 21h63l16-21Z" fill="#79b8c3" />
        <path d="M10 107c8 6 16 6 24 0 8 6 16 6 24 0 8 6 16 6 24 0 8 6 16 6 24 0" fill="none" stroke="#64a5bc" />
      </>;
    case 'rocket':
      return <>
        <path d="M48 88c-6 11-3 17 2 23l10-8 10 8c6-8 8-15 2-23" fill="#f6bd64" />
        <path d="M40 61c-15 6-22 21-20 35l24-11m34-24c15 6 22 21 20 35L74 85" fill="#e98b85" />
        <path d="M60 9C33 29 31 58 40 88h40c9-30 6-60-20-79Z" fill="#e7eeee" />
        <path d="M60 9c-9 7-16 15-19 25h38c-3-10-10-18-19-25Z" fill="#e98b85" />
        <circle cx="60" cy="54" r="12" fill="#8dcbd3" />
        <path d="M55 50c1-2 3-3 5-3" fill="none" stroke="white" strokeWidth="3" />
        <path d="M40 81h40" fill="none" />
      </>;
    case 'ball':
      return <>
        <circle cx="60" cy="60" r="45" fill="#f8d276" />
        <path d="M60 15c-22 11-29 28-25 47l25-7 19-23C74 24 68 18 60 15Z" fill="#86bacb" />
        <path d="m60 55 19-23c16 16 22 32 18 53-10 11-22 18-37 20 10-16 11-34 0-50Z" fill="#e9918d" />
        <path d="m35 62 25-7c-13 9-26 16-40 22" fill="none" />
        <ellipse cx="60" cy="55" rx="7" ry="5" fill="#fff2cc" />
        <path d="M33 37c5-7 10-11 16-13" fill="none" stroke="#e4f1ed" strokeWidth="5" />
      </>;
  }
}

type PictureProps = {
  id: PictureId;
  className?: string;
  label?: string;
  decorative?: boolean;
};

export default function Picture({ id, className, label, decorative = false }: PictureProps) {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width="120"
    height="120"
    className={className ?? 'h-24 w-24'}
    role={decorative ? undefined : 'img'}
    aria-hidden={decorative ? true : undefined}
    aria-label={decorative ? undefined : label || PICTURES[id].label}
    focusable="false"
    fill="none"
    stroke={INK}
    strokeWidth="2.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  ><Drawing id={id} /></svg>;
}

export function IslandIllustration({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 320" width="640" height="320"
    className={className ?? 'h-auto w-full'} aria-hidden="true" focusable="false" fill="none"
    stroke={INK} strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="332" cy="258" rx="260" ry="42" fill="#c6e8e7" stroke="none" />
    <path d="M117 262h40m341 10h56M211 288h59m124 2h44" stroke="#f9ffef" strokeWidth="5" />
    <path d="M159 223c-19-35 10-67 61-75 21-40 82-48 119-24 48-27 106-3 112 30 49 4 81 37 67 68-21 39-331 53-359 1Z" fill="#ddcc9d" />
    <path d="M159 211c-19-35 10-67 61-75 21-40 82-48 119-24 48-27 106-3 112 30 49 4 81 37 67 68-21 39-331 53-359 1Z" fill="#b8d79c" />
    <path d="M299 229c17-24 48-28 68-48 13-14 12-30 2-43" stroke="#f9ebbd" strokeWidth="29" />
    <ellipse cx="314" cy="224" rx="17" ry="7" fill="#fcf5df" stroke="#c9b68d" strokeWidth="2" />
    <ellipse cx="342" cy="204" rx="15" ry="6" fill="#fcf5df" stroke="#c9b68d" strokeWidth="2" />
    <ellipse cx="367" cy="184" rx="13" ry="6" fill="#fcf5df" stroke="#c9b68d" strokeWidth="2" />
    <svg x="425" y="20" width="78" height="78" viewBox="0 0 120 120"><Drawing id="sun" /></svg>
    <svg x="97" y="31" width="92" height="65" viewBox="0 0 120 120"><Drawing id="cloud" /></svg>
    <svg x="298" y="20" width="70" height="48" viewBox="0 0 120 120"><Drawing id="cloud" /></svg>
    <svg x="380" y="64" width="119" height="132" viewBox="0 0 120 120"><Drawing id="tree" /></svg>
    <svg x="171" y="104" width="126" height="126" viewBox="0 0 120 120"><Drawing id="fox" /></svg>
    <svg x="434" y="173" width="54" height="54" viewBox="0 0 120 120"><Drawing id="flower" /></svg>
    <svg x="279" y="125" width="50" height="50" viewBox="0 0 120 120"><Drawing id="apple" /></svg>
    <svg x="86" y="208" width="66" height="66" viewBox="0 0 120 120"><Drawing id="boat" /></svg>
    <path d="m186 229 1-10m0 10-7-5m7 5 7-5M405 228l-1-10m1 10-7-5m7 5 6-6M272 116v-9m0 9-6-4m6 4 6-4" stroke="#6e9c71" />
    <path d="m519 122 4 10 11 4-11 4-4 11-4-11-10-4 10-4ZM226 44l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill="#efc571" stroke="none" />
    <path d="m546 193 12-4m-8 16 9 2" stroke="#e7b56f" strokeWidth="4" />
  </svg>;
}
