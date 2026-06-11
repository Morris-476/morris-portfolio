// ── 個人資料統一管理 ──────────────────────────────────────

export const profile = {
  name: '張恆輔',
  nameEn: 'Morris',
  school: '淡江大學 · 資訊管理系 · 輔修資訊工程系 · 大三',
  gpa: '3.53 / 4.0',
  rank: '前 14.8%',
  email: 'happymorrission@gmail.com',
  phone: '0928-733-773',
  github: 'https://github.com/Morris-476',
  toeic: '840',
  about: '我是淡江大學資訊管理學系大三生，同時輔修資訊工程學系。我認為思考技術如何被運用、管理與整合，是比埋頭寫程式更有趣、更有價值的事。在 AI 浪潮席捲各產業的時代，我沒有選擇等待課堂告訴我答案，而是主動在課餘時間自學新工具、考取多張專業證照，持續拓展自己的技術邊界。資管給了我商業與系統的思維框架，資工讓我真正理解底層邏輯——兩者的結合，讓我成為一個既能動手實作、又能從全局視角思考的人。',
  projectStory: '大三上，我將所學知識與軟體工具拼湊，獨立開發了第一個完整系統：學生選課系統。雖然摸索過程混亂，但卻是第一次完整走完整個流程；從需求分析、環境架設，再到最後的部署階段，每一步皆是自己造出來的。此後，我參訪了資訊服務競賽，在吸取經驗後，我回來組建團隊，擔任組長，立志成為下屆的參賽者。歷經多方討論後，我們將主題訂為低成本移動式校園樹木固碳量測系統，並以敏捷開發模式推進。此專案的難度除了技術的克服，更在於如何在有限資源尋找可行方案，花了近四個月查找文獻與反覆推敲，最終將異質硬體結合，建構出自動化樹木盤點系統。',
  learningStory: '我習慣將資管所學落實於實際應用。系統分析與設計課程培養的結構化思維，直接應用於畢業專題的敏捷開發流程；透過使用者介面課程接觸 Figma，並應用於網頁平台的介面設計；在陳志揚教授的課程中系統學習 Power BI，培養數據視覺化與商業分析能力。我對國際政治與國際情勢有著濃厚興趣，廣泛選修國際現勢、兩岸關係等課程，養成從宏觀視角思考問題的習慣。從小音樂班長大的我，對舞台與音樂始終懷有熱情，在參與燈光音響社團後，透過學長姐推薦，擔任淡江大學文錙音樂廳實習生，並擔任「絲竹空樂團」場次導播工作。跨域的好奇心，始終是我前進的動力。',
}

export const roles = [
  '畢業專題組長',
  '資訊工程輔修生',
  '2026 亞太博覽會代表',
  '品管圈團隊全校第一',
  '溝通與協調',
  '跨域探索者',
]

export const stats = [
  { value: 9,    suffix: '+', label: '證照' },
  { value: 3,    suffix: '',  label: '專案' },
  { value: 4,    suffix: '',  label: '競賽' },
  { value: 840,  suffix: '',  label: 'TOEIC' },
  { value: 14.8, suffix: '%', label: '系排名' },
]

// ── 技能 ─────────────────────────────────────────────────

export const skills = [
  { category: '程式語言',      color: '#2E75B6', tags: ['Java','Python', 'SQL',  'C++'] },
  { category: 'AI / 電腦視覺', color: '#1D9E75', tags: ['YOLOv11-Seg', 'ByteTrack', 'OpenCV'] },
  { category: '硬體整合',      color: '#BA7517', tags: ['RTK-GNSS', 'ToF', 'Arduino'] },
  { category: '平台工具',      color: '#534AB7', tags: ['Power BI', 'Power Apps', 'Power Automate', 'Git/GitHub', 'SQL Server', 'Visual Studio'] },
  { category: '專案管理',      color: '#D85A30', tags: ['Agile', 'Jira', 'Notion'] },
  { category: '設計工具',      color: '#888780', tags: ['Photoshop', 'Premiere Pro', 'Figma', 'Microsoft Office'] },
]

export const radarConfig = {
  labels: ['Python/Java', 'AI/電腦視覺', '硬體整合', 'Power Platform', 'Agile/PM', '設計工具'],
  data: [88, 76, 65, 82, 70, 72],
  pointColors: ['#2E75B6', '#1D9E75', '#BA7517', '#534AB7', '#D85A30', '#888780'],
}

// ── 專案 ─────────────────────────────────────────────────

export const projects = [
  {
    id: 'p1',
    title: '低成本移動式校園樹木固碳量測系統',
    sub: '畢業專題 · 組長 · 2025 至今',
    tags: ['Agile', 'Jira', 'Python Flask', 'YOLOv11-Seg', 'ByteTrack', 'RTK-GNSS', 'ToF', 'GIS互動式地圖', 'Web Dev'],
    desc: '擔任專題組長，以 Agile 敏捷框架搭配 Jira 看板統籌四人團隊。系統整合 YOLOv11-Seg 樹幹實例分割、ByteTrack 多目標追蹤、ToF 雷射測距與 RTK-GNSS 釐米級精確定位，將傳統需大型儀器的固碳調查壓縮至可移動的低成本方案。後端以 Python Flask 提供 RESTful API，前端搭載 GIS 互動式地圖，即時呈現樹木位置與固碳數據。與校方總務處合作場域驗證，完成前測並進入全面實作階段，預計代表淡江大學出席 2026 亞太博覽會。',
    github: null,
    images: [
      '/images/projects/低成本移動式校園樹木固碳量測系統-硬體設想圖.png',
      '/images/projects/低成本移動式校園樹木固碳量測系統-YOLO訓練模型.png',
    ],
    imageAspect: '16/9',
  },
  {
    id: 'p2',
    title: '手機樹木辨識與實例分割系統',
    sub: '個人專案',
    tags: ['Python', 'YOLOv11-Seg', 'OpenCV', 'QR Code 比例尺', '雙驗證演算法'],
    desc: '為解決傳統量測誤差，我們開發了一套具備雙驗證機制的核心演算法。系統透過手機端影像進行樹幹實例分割，並交叉比對像素比例換算與幾何焦距推算兩大模型 。配合自動警告系統與信心度過濾，確保數據相似度達標後輸出精確直徑，為畢業專題固碳量測系統提供核心量測演算法基礎。',
    github: 'https://github.com/Morris-476/Tree-Trunk-Segmentation',
    images: [
      '/images/projects/樹木辨識與實例分割系統-模型訓練結果.png',
      '/images/projects/樹木辨識與實例分割系統-系統運算過程.png',
    ],
    imageAspect: '4/3',
  },
  {
    id: 'p3',
    title: '學生選課系統',
    sub: '個人獨立開發',
    tags: ['C#', 'SQL Server', 'Visual Studio', 'SDLC'],
    desc: '個人獨立走完完整 SDLC 流程（需求分析 → 系統設計 → 實作 → 測試 → 部署）的選課平台。以 C# 搭配 SQL Server 實作選課、即時衝堂偵測、成績管理與報表匯出功能，資料庫設計採正規化至第三正規形式（3NF）確保資料一致性。',
    github: 'https://github.com/Morris-476/StudentCourseSystem',
    images: [
      '/images/projects/學生選課系統-登入頁面.png',
      '/images/projects/學生選課系統-選課頁面.png',
    ],
    imageAspect: '16/9',
  },
  {
    id: 'p4',
    title: '個人作品集暨履歷網站',
    sub: '個人專案 · 2026',
    tags: ['Claude Code', 'React', 'Vite', 'Tailwind CSS', 'Chart.js', 'Framer Motion'],
    desc: '本站本身即是一場實踐。身處 AI 浪潮巔峰，唯有創意能脫穎而出，更需以思辨力過濾資訊並內化優化。我屏棄既有模板，從建構設計系統出發，與 Claude AI 協作，主導色彩、SVG 幾何到互動動效的深度決策。透過持續的詰問與反思，最終將工具淬鍊成具備個人靈魂的視覺語彙。',
    github: null,
    images: [],
    imageAspect: '16/9',
  },
]

// ── 競賽與榮譽 ────────────────────────────────────────────

export const competitions = [
  {
    id: 'c1', emoji: '🏆',
    title: '淡江大學品管圈競賽',
    badge: '全校第一名', type: 'gold',
    desc: '受總務處邀請，期望溶入學生思維並利用學生於課程所學習之技術，改善現有行政效率。以 PDCA 循環提出系統性改善方案，通過初審階段，並於複審階段榮獲全校第一最高殊榮，本人更於複賽中獲評委親睞。',
    docUrl: 'https://docs.google.com/document/d/1SJZ5vXVt30WfsxidyhrwM-rnEw3pCT4h/edit?usp=sharing&ouid=116920230134303322143&rtpof=true&sd=true',
    images: [
      { src: '/images/competitions/品管圈競賽.jpg',    caption: '競賽現場' },
      { src: '/images/competitions/評審委員提問.jpg', caption: '評審委員提問' },
    ],
  },
  {
    id: 'c2', emoji: '🌏',
    title: '2026 亞太博覽會代表',
    badge: '確定出席', type: 'blue',
    desc: '與淡江大學總務處進行合作，利用隨處可得之硬體工具，結合學生自主開發之系統，大幅降低作業人力成本。通過淡江大學生活實驗室競賽第一階段審核，確定代表學校在國際舞台展示研究成果。',
    docUrl:'https://github.com/jump0423/Tree-Trunk-Measurement.git',
    images: [],
  },
  {
    id: 'c3', emoji: '🔬',
    title: '115 學年度大專學生研究計畫',
    badge: '進行中', type: 'green',
    desc: '將異質多感測器結合，深度整合了 YOLOv11 影像辨識、RTK 定位與 ToF 測距技術。透過影像辨識提取樹木特徵，並與物理測距進行數據融合，精確量化樹徑及固碳量，提升校園盤點效率與數據精確度。',
    docUrl: 'https://drive.google.com/file/d/1y5dW0P_IE5jdzTkq0WLEPzmmxE-mThoN/view?usp=sharing',
    images: [],
  },
  {
    id: 'c4', emoji: '🚀',
    title: '淡江大學創新創業競賽 / U-START',
    badge: '全校第三名', type: 'green',
    desc: '以固碳量測系統為基礎提出創新計畫，結合社會環保價值與技術創新。與49組隊伍中，通過初賽，並於複賽取得創新組全校第三。',
    docUrl:'https://canva.link/wfxdvtrrr8qvma5',
    images: [],
  },
]

// ── 證照 ─────────────────────────────────────────────────

export const certs = [
  { id: 'ce1', emoji: '☁️',  name: 'MCF PL-900',            org: 'Microsoft', status: 'done',    photo: '/images/certs/MCF PL-900.jpg' },
  { id: 'ce2', emoji: '🐍',  name: 'TQC Python',             org: 'TQC',       status: 'done',    photo: '/images/certs/TQC Python.jpg' },
  { id: 'ce3', emoji: '📝',  name: 'TQC Word 2021',          org: 'TQC',       status: 'done',    photo: '/images/certs/TQC Word.jpg' },
  { id: 'ce4', emoji: '🎨',  name: 'ACP Photoshop CC',       org: 'Adobe',     status: 'done',    photo: null },
  { id: 'ce5', emoji: '🎬',  name: 'ACP Premiere Pro',       org: 'Adobe',     status: 'done',    photo: '/images/certs/ACP Premiere Pro.jpg' },
  { id: 'ce6', emoji: '🤖',  name: 'IPAS 初級 AI 應用規劃師', org: '經濟部',    status: 'done',    photo: null },
  { id: 'ce7', emoji: '📊',  name: 'TQC Excel 2021',         org: 'TQC',       status: 'done',    photo: null },
]

// ── 學習歷程亮點 ──────────────────────────────────────────

export const learningHighlights = [
  { icon: '🎯', title: '系統分析與設計', desc: '結構化思維直接應用於畢業專題敏捷開發流程' },
  { icon: '📊', title: 'Power BI 數據分析', desc: '培養數據視覺化與商業分析的實務能力' },
  { icon: '🌍', title: '國際視野', desc: '廣泛選修國際現勢、兩岸關係等課程' },
  { icon: '🎵', title: '文錙音樂廳實習', desc: '燈光音響工程 · 擔任絲竹空樂團場次導播' },
  { icon: '📜', title: '自主進修', desc: '課餘報名多項證照課程，持續拓展技術邊界' },
]
