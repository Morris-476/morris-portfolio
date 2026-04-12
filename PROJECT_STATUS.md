# 個人履歷網站 — 進度文件
> 最後更新：2026-04-12　供下次 Claude Code 對話快速銜接

---

## 一、專案基本資訊

| 項目 | 內容 |
|------|------|
| **正確專案路徑** | `C:\Users\user\OneDrive\Desktop\個人履歷\` |
| **Dev server** | `http://localhost:5173/` （Vite 預設 port，未固定設定） |
| **Stack** | React 19 + Vite 8 + Tailwind CSS v4 + Chart.js |
| **設計系統** | Glassmorphism + Neumorphism（Skills）+ 暗色 Hero |
| **CSS 主色** | `--navy #1B2A4A`、`--blue #2E75B6`、`--sky #38bdf8` |

> ⚠️ `C:\Users\user\Desktop\個人履歷\morris-portfolio\` 是**舊版本**，不要在那邊修改。

---

## 二、元件結構（App.jsx 渲染順序）

```
App.jsx
├── MeshBg          # 固定動態漸層光暈背景（5 個 orb）
├── BgCanvas        # 固定粒子連線畫布
├── Navbar
├── main
│   ├── HeroAbout   # Hero + 關於我 合併區塊（深黑背景，sci-fi 風）
│   ├── Skills      # 雷達圖 + 技能條 + 標籤
│   ├── Projects    # 4 個專案卡片 + Modal
│   ├── Competition # 競賽 4 張卡片 + Modal
│   ├── Certs       # 證照自動滾動跑馬燈 + Modal
│   ├── LearningJourney  # 學習歷程（故事塊 + 編號清單）
│   └── Contact     # 深藍聯絡區
```

> ⚠️ `About.jsx` 存在但**沒有被 App.jsx import**，修改它沒有任何效果。「關於我」實際在 `HeroAbout.jsx`。

---

## 三、各 Section 背景顏色與紋理

| Section | 背景漸層 | 背景紋理圖案 |
|---------|---------|------------|
| HeroAbout | `linear-gradient(160deg, #040c18, #071020, #0c1a32)` | 深色格線 SVG（opacity 0.03）|
| **Skills** | `linear-gradient(180deg, #f4f8ff 0%, #ddeeff 100%)` | CircuitBg 電路板 pattern（全域）|
| **Projects** | `linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%)` | 45° 斜線 pattern（`#2E75B6`, opacity 0.22）|
| **Competition** | `linear-gradient(180deg, #f4f8ff 0%, #ddeeff 100%)` | 六角形 hex pattern（`#1D9E75`, opacity 0.1）|
| **Certs** | `linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%)` | 右上角：三層套疊矩形 + 對角線 SVG |
| **LearningJourney** | `linear-gradient(180deg, #f4f8ff 0%, #ddeeff 100%)` | 右上角：同心圓 + 六角形 SVG + 全域十字格線 pattern |
| Contact | 深藍（保留，不動）| — |

**色彩節奏**（由上到下）：深黑 → 藍 → 白 → 藍 → 白 → 藍 → 深黑

---

## 四、HeroAbout Bento Grid（目前狀態）

- 排列：**全部 6 張卡片同一列，等寬（span 1）**
- `gridTemplateColumns: 'repeat(6,1fr)'`、`gridAutoRows: 'auto'`
- **無 icon**（已移除）
- 文字色：label `#ffffff`、value `#ffffff`、sub `rgba(255,255,255,0.7)`
- TOEIC 卡片可點擊，彈出 lightbox 顯示成績單圖片
- 自我介紹段落字色：`#ffffff`

| label | value | accent |
|-------|-------|--------|
| 就讀學校 | 淡江大學 | `#2E75B6` |
| GPA | 3.53 / 4.0 | `#1D9E75` |
| TOEIC | 840 | `#534AB7` |
| 2026 亞太博覽會 | 確定出席 | `#0ea5e9` |
| 品管圈競賽 | 全校第一名 | `#BA7517` |
| 工作經歷 | 文錙音樂廳 | `#D85A30` |

> 卡片文字在 `HeroAbout.jsx` 第 110–117 行 `bentoItems` 陣列修改。
> 現任角色輪播在 `data.js` 第 18–25 行 `roles` 陣列修改。
> 下載履歷 PDF 連結在 `HeroAbout.jsx` 第 377 行 `href="#"` 改為雲端連結。

---

## 五、圖片資源狀態

**路徑基準：** `public/images/`

### 大頭照
- `headshot/個人照片.jpg` ✅ — HeroAbout.jsx 正確引用

### 專案圖片（`projects/`）
| 檔名 | 對應專案 | 狀態 |
|------|---------|------|
| `低成本移動式校園樹木固碳量測系統-硬體設想圖.png` | p1（封面/第一張） | ✅ |
| `低成本移動式校園樹木固碳量測系統-YOLO訓練模型.png` | p1（第二張） | ✅ |
| `樹木辨識與實例分割系統-模型訓練結果.png` | p2 | ✅ |
| `樹木辨識與實例分割系統-系統運算過程.png` | p2 | ✅ |
| `學生選課系統-登入頁面.png` | p3 | ✅ |
| `學生選課系統-選課頁面.png` | p3 | ✅ |
| p4 圖片 | 個人作品集網站 | ❌ 尚無 |

### 競賽圖片（`competitions/`）
| 檔名 | 狀態 |
|------|------|
| `品管圈競賽.jpg` | ✅ |
| `評審委員提問.jpg` | ✅（caption 已更新）|
| c2、c3、c4 圖片 | 不放圖（modal 無待補充提示）|

### 證照圖片（`certs/`）
| 證照 | 狀態 |
|------|------|
| `MCF PL-900.jpg` | ✅ |
| `TQC Python.jpg` | ✅ |
| `TQC Word.jpg` | ✅ |
| `ACP Premiere Pro.jpg` | ✅ |
| `TOEIC.jpg` | ❌ 待放入（lightbox 已串接，放入即生效）|
| ACP Photoshop CC | ❌ 待補 |
| IPAS 初級 AI 應用規劃師 | ❌ 待補 |
| ACP Photoshop 進階 | ❌ 待補 |
| TQC Excel 2021 | ❌ 待補 |

---

## 六、各區功能說明

### HeroAbout
- TOEIC bento 卡點擊 → lightbox（圖片路徑：`/images/certs/TOEIC.jpg`）
- 自我介紹、卡片文字：`HeroAbout.jsx` `bentoItems`（第 110–117 行）

### Skills
- 雷達圖縮小 20%（wrapper `width:80%`）
- 右側能力指標與雷達圖等高（`alignItems:stretch` + `justifyContent:space-between`）
- 能力指標標題字體：`0.92rem`
- 技能標籤：`data.js` `skills` 陣列
- 程式語言：Python、SQL、Java、C++

### Projects
- p1 封面右下角：「點我看計畫書 →」→ `https://reurl.cc/0m9RNl`
- p2、p3 封面右下角：「查看原始碼」→ 對應 GitHub 連結
- p1 圖片順序：硬體設想圖（封面）→ YOLO 訓練模型
- p2 sub 已移除「2024-2025」
- p4 tags：Claude Code 排第一
- **說明文字（desc）在 `data.js` 各專案的 `desc` 欄位修改**

### Competition
- c1 封面右下角：「查看文件 ↗」→ Google Docs
- c3 封面右下角：「查看文件 ↗」→ Google Drive
- c2、c4：無圖片、無連結
- Modal 內無照片時不顯示任何佔位提示

### Certs
- 自動向左滾動跑馬燈（0.5px/frame），拖曳時暫停

### LearningJourney
- **文字修改位置（`data.js`）：**
  - 左側「專案開發與團隊合作」→ `profile.projectStory`（第 14 行）
  - 左側「學習歷程與跨域探索」→ `profile.learningStory`（第 15 行）
  - 右側編號清單 01–05 → `learningHighlights` 陣列（第 157–163 行）

---

## 七、待處理事項

### 🔴 高優先
1. **TOEIC 成績單圖片** — 放到 `public/images/certs/TOEIC.jpg`，lightbox 即生效
2. **下載履歷 PDF 連結** — `HeroAbout.jsx` 第 377 行，`href="#"` 改為雲端 PDF 連結

### 🟡 中優先
3. **p4（個人作品集）圖片** — `data.js` 的 `images: []`，尚無截圖
4. **Certs 4 張待補圖片** — 拍好後補 `photo` 欄位路徑

---

## 八、data.js 圖片路徑格式

```js
// 專案圖片
images: ['/images/projects/檔名.png']

// 競賽圖片
images: [{ src: '/images/competitions/檔名.jpg', caption: '說明文字' }]

// 證照圖片
photo: '/images/certs/檔名.jpg'
```

---

## 九、部署資訊

- **平台**：Vercel（推薦）
- **流程**：GitHub push → Vercel 自動重新部署，URL 不變
- **注意**：`vite.config.js` 未設定 base，部署前確認 Vercel 自動偵測為 Vite 即可

---

## 十、快速起動清單（新 session 開始時）

```bash
# 確認在正確路徑
ls /c/Users/user/OneDrive/Desktop/個人履歷/src/components/

# 如未啟動 dev server，在 OneDrive 路徑下執行
npm run dev
# 開啟 http://localhost:5173/
```
