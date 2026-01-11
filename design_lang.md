# Planty Design Language

> 당신만의 원격 텃밭, Planty의 디자인 시스템

---

## 🎨 Brand Identity

### Brand Personality
- **Organic & Natural**: 자연 친화적이고 따뜻한 느낌
- **Modern & Tech-savvy**: 스마트하고 혁신적인 기술 감성
- **Friendly & Approachable**: 친근하고 접근하기 쉬운 톤
- **Trustworthy**: 신뢰감 있는 서비스

### Tone & Voice
- 친근하지만 전문적인 어조
- 긍정적이고 희망찬 메시지
- 쉽고 명확한 설명
- 공감과 위로를 담은 커뮤니케이션

---

## 🎨 Color Palette

### Primary Colors - Planty Green
자연과 성장을 상징하는 메인 컬러

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Green 50 | `#E8F5E9` | rgb(232, 245, 233) | 배경, 하이라이트 |
| Green 100 | `#C8E6C9` | rgb(200, 230, 201) | 카드 배경, 아이콘 배경 |
| Green 200 | `#A5D6A7` | rgb(165, 214, 167) | 보조 요소 |
| Green 300 | `#81C784` | rgb(129, 199, 132) | 호버 상태 |
| Green 400 | `#66BB6A` | rgb(102, 187, 106) | 액센트 |
| Green 500 | `#4CAF50` | rgb(76, 175, 80) | 기본 버튼 |
| Green 600 | `#43A047` | rgb(67, 160, 71) | 활성 상태 |
| Green 700 | `#388E3C` | rgb(56, 142, 60) | **Primary CTA** |
| Green 800 | `#2E7D32` | rgb(46, 125, 50) | **Main Brand Color** |
| Green 900 | `#1B5E20` | rgb(27, 94, 32) | 다크 모드, Vision 섹션 |

### Secondary Colors - Earth Tones
따뜻함과 안정감을 주는 보조 컬러

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Earth 50 | `#EFEBE9` | rgb(239, 235, 233) | 섹션 배경 |
| Earth 100 | `#D7CCC8` | rgb(215, 204, 200) | 구분선 |
| Earth 200 | `#BCAAA4` | rgb(188, 170, 164) | 비활성 요소 |
| Earth 300 | `#A1887F` | rgb(161, 136, 127) | 서브텍스트 |
| Earth 400 | `#8D6E63` | rgb(141, 110, 99) | 강조 텍스트 |
| Earth 500 | `#795548` | rgb(121, 85, 72) | 아이콘, 뱃지 |

### Neutral Colors - Beige
부드럽고 자연스러운 배경 컬러

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Beige 50 | `#FAFAF6` | rgb(250, 250, 246) | **기본 배경** |
| Beige 100 | `#F5F5DC` | rgb(245, 245, 220) | 카드 배경 |
| Beige 200 | `#E8E4C9` | rgb(232, 228, 201) | 구분 영역 |

### Gray Scale

| Name | Hex | Usage |
|------|-----|-------|
| Gray 50 | `#FAFAFA` | 배경 |
| Gray 100 | `#F5F5F5` | 카드 배경 |
| Gray 200 | `#EEEEEE` | 구분선 |
| Gray 300 | `#E0E0E0` | 비활성 테두리 |
| Gray 400 | `#BDBDBD` | 플레이스홀더 |
| Gray 500 | `#9E9E9E` | 비활성 텍스트 |
| Gray 600 | `#757575` | 서브텍스트 |
| Gray 700 | `#616161` | 본문 텍스트 |
| Gray 800 | `#424242` | 제목 |
| Gray 900 | `#212121` | 강조 제목 |

### Semantic Colors

| Type | Color | Hex | Usage |
|------|-------|-----|-------|
| Success | Green 500 | `#4CAF50` | 성공 메시지, 완료 상태 |
| Warning | Amber | `#FFA726` | 경고, 주의 |
| Error | Red | `#EF5350` | 에러, 실패 |
| Info | Blue | `#42A5F5` | 정보, 안내 |

---

## 📝 Typography

### Font Family
```css
font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Font Weights
| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | 긴 본문, 설명 텍스트 |
| Regular | 400 | 일반 본문 |
| Medium | 500 | 강조 텍스트, 라벨 |
| SemiBold | 600 | 서브 제목, 버튼 |
| Bold | 700 | 제목, 헤드라인 |

### Type Scale

| Name | Size (Mobile) | Size (Desktop) | Weight | Line Height | Usage |
|------|---------------|----------------|--------|-------------|-------|
| Display | 36px | 60px | 700 | 1.1 | 히어로 헤드라인 |
| H1 | 30px | 48px | 700 | 1.2 | 섹션 제목 |
| H2 | 24px | 36px | 700 | 1.3 | 서브 섹션 제목 |
| H3 | 20px | 24px | 600 | 1.4 | 카드 제목 |
| H4 | 18px | 20px | 600 | 1.4 | 소제목 |
| Body Large | 18px | 20px | 400 | 1.6 | 강조 본문 |
| Body | 16px | 16px | 400 | 1.6 | 기본 본문 |
| Body Small | 14px | 14px | 400 | 1.5 | 보조 텍스트 |
| Caption | 12px | 12px | 400 | 1.4 | 캡션, 라벨 |

### Text Colors
| Usage | Light Mode | Dark Mode |
|-------|------------|-----------|
| Primary | `#1F2937` (Gray 800) | `#F9FAFB` |
| Secondary | `#4B5563` (Gray 600) | `#D1D5DB` |
| Tertiary | `#9CA3AF` (Gray 400) | `#9CA3AF` |
| Accent | `#2E7D32` (Green 800) | `#81C784` |

---

## 📐 Spacing System

8px 기반의 스페이싱 시스템

| Name | Value | Usage |
|------|-------|-------|
| xs | 4px | 아이콘 간격, 인라인 요소 |
| sm | 8px | 요소 내부 패딩 |
| md | 16px | 카드 패딩, 리스트 간격 |
| lg | 24px | 섹션 내 요소 간격 |
| xl | 32px | 컴포넌트 간 간격 |
| 2xl | 48px | 섹션 간격 (모바일) |
| 3xl | 64px | 섹션 간격 |
| 4xl | 80px | 대형 섹션 간격 |
| 5xl | 128px | 페이지 섹션 간격 |

---

## 🔲 Border Radius

Soft UI를 위한 둥근 모서리

| Name | Value | Usage |
|------|-------|-------|
| none | 0 | 직선 요소 |
| sm | 4px | 작은 버튼, 태그 |
| md | 8px | 입력 필드, 작은 카드 |
| lg | 12px | 버튼, 일반 카드 |
| xl | 16px | 큰 카드 |
| 2xl | 24px | 대형 카드, 모달 |
| 3xl | 32px | 히어로 이미지 |
| full | 9999px | 원형 버튼, 아바타, CTA 버튼 |

---

## 🌫️ Shadows

| Name | Value | Usage |
|------|-------|-------|
| sm | `0 1px 2px rgba(0,0,0,0.05)` | 호버 전 상태 |
| md | `0 4px 6px rgba(0,0,0,0.1)` | 카드 기본 |
| lg | `0 10px 15px rgba(0,0,0,0.1)` | 호버 상태, 드롭다운 |
| xl | `0 20px 25px rgba(0,0,0,0.15)` | 모달, 플로팅 요소 |
| 2xl | `0 25px 50px rgba(0,0,0,0.25)` | 히어로 이미지 |
| glow | `0 0 20px rgba(46,125,50,0.3)` | CTA 버튼 강조 |
| glow-lg | `0 0 40px rgba(46,125,50,0.6)` | 애니메이션 강조 |

---

## ✨ Effects & Animations

### Glass Morphism
```css
.glass-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Fade In (Scroll Animation)
```css
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Float Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.float-animation {
  animation: float 6s ease-in-out infinite;
}
```

### Pulse Glow (CTA Button)
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(46, 125, 50, 0.3); }
  50% { box-shadow: 0 0 40px rgba(46, 125, 50, 0.6); }
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
```

### Transition Defaults
```css
/* 기본 트랜지션 */
transition: all 0.3s ease;

/* 호버 효과 */
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* 색상 변화 */
transition: color 0.2s ease, background-color 0.2s ease;
```

### Hover States
- **버튼**: `transform: scale(1.05)`
- **카드**: `transform: translateY(-8px)` + shadow 증가
- **링크**: 색상 변화 (Gray → Green 700)

---

## 🧩 Components

### Buttons

#### Primary Button (CTA)
```css
.btn-primary {
  background-color: #388E3C; /* Green 700 */
  color: white;
  padding: 16px 32px;
  border-radius: 9999px; /* Full rounded */
  font-weight: 600;
  font-size: 18px;
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #2E7D32; /* Green 800 */
  transform: scale(1.05);
  box-shadow: 0 20px 25px rgba(0,0,0,0.15);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: transparent;
  color: #388E3C;
  border: 2px solid #388E3C;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: 500;
}

.btn-secondary:hover {
  background-color: #E8F5E9;
}
```

### Cards

#### Feature Card
```css
.feature-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 32px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px rgba(0,0,0,0.15);
}
```

#### Icon Container
```css
.icon-container {
  width: 64px;
  height: 64px;
  background-color: #C8E6C9; /* Green 100 */
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-container i {
  color: #388E3C; /* Green 700 */
  font-size: 24px;
}
```

### Input Fields
```css
.input-field {
  padding: 16px 24px;
  border: 2px solid #E5E7EB; /* Gray 200 */
  border-radius: 9999px;
  font-size: 16px;
  transition: border-color 0.2s ease;
}

.input-field:focus {
  border-color: #4CAF50; /* Green 500 */
  outline: none;
}

.input-field::placeholder {
  color: #9CA3AF; /* Gray 400 */
}
```

### Badges / Tags
```css
.badge {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
}

.badge-green {
  background-color: #C8E6C9;
  color: #388E3C;
}

.badge-earth {
  background-color: #EFEBE9;
  color: #795548;
}
```

### Notification Card
```css
.notification-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
}
```

### Info Box
```css
.info-box {
  background-color: #E8F5E9; /* Green 50 */
  border-left: 4px solid #4CAF50; /* Green 500 */
  border-radius: 16px;
  padding: 24px;
}
```

---

## 🖼️ Iconography

### Icon Library
- **Primary**: Font Awesome 6.x
- **Style**: Solid (`fa-solid`) 기본, 필요시 Regular 사용

### Common Icons

| Purpose | Icon | Class |
|---------|------|-------|
| 브랜드 로고 | 🌱 | `fa-seedling` |
| 실시간 관찰 | 📹 | `fa-video` |
| 인터랙션 | 👆 | `fa-hand-pointer` |
| 배송 | 🚚 | `fa-truck` |
| 알림 | 🔔 | `fa-bell` |
| 물방울 | 💧 | `fa-droplet` |
| 지구 | 🌏 | `fa-earth-asia` |
| 로켓 | 🚀 | `fa-rocket` |
| 이메일 | ✉️ | `fa-envelope` |
| 전화 | 📞 | `fa-phone` |
| 위치 | 📍 | `fa-location-dot` |
| 방패 | 🛡️ | `fa-shield-halved` |

### Icon Sizes
| Size | Value | Usage |
|------|-------|-------|
| xs | 12px | 인라인 아이콘 |
| sm | 16px | 버튼 내 아이콘 |
| md | 20px | 리스트 아이콘 |
| lg | 24px | 카드 아이콘 |
| xl | 32px | 피처 아이콘 |
| 2xl | 48px | 히어로 아이콘 |

---

## 📱 Responsive Breakpoints

| Name | Min Width | Usage |
|------|-----------|-------|
| Mobile | 0px | 기본 (Mobile First) |
| sm | 640px | 큰 모바일 |
| md | 768px | 태블릿 |
| lg | 1024px | 작은 데스크톱 |
| xl | 1280px | 데스크톱 |
| 2xl | 1536px | 큰 데스크톱 |

### Container Max Widths
```css
.container {
  max-width: 1280px; /* 7xl */
  margin: 0 auto;
  padding: 0 16px; /* Mobile */
}

@media (min-width: 640px) {
  .container { padding: 0 24px; }
}

@media (min-width: 1024px) {
  .container { padding: 0 32px; }
}
```

---

## 🌈 Gradients

### Hero Gradient
```css
background: linear-gradient(135deg, #E8F5E9 0%, #F5F5DC 50%, #C8E6C9 100%);
```

### Vision (Tech) Gradient
```css
background: linear-gradient(135deg, #1B5E20 0%, #0D3B0F 50%, #1a1a2e 100%);
```

### Button Glow Gradient
```css
background: linear-gradient(to right, #4CAF50, #81C784);
```

---

## 🌙 Dark Mode Considerations

Vision 섹션에서 사용된 다크 테마 스타일 참고

### Dark Background
- Primary: `#1B5E20` → `#0D3B0F` → `#1a1a2e`
- Card: `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur`
- Border: `rgba(255, 255, 255, 0.1)`

### Dark Text Colors
- Primary: `#FFFFFF`
- Secondary: `#D1D5DB` (Gray 300)
- Tertiary: `#9CA3AF` (Gray 400)
- Accent: `#81C784` (Green 300)

---

## ✅ Do's and Don'ts

### ✅ Do's
- 충분한 여백(whitespace) 사용하기
- 자연스러운 색상 조합 유지하기
- 둥근 모서리로 부드러운 느낌 주기
- 미묘한 애니메이션으로 생동감 더하기
- 계층적 타이포그래피 사용하기
- 접근성 고려한 색상 대비 유지하기

### ❌ Don'ts
- 너무 많은 색상 사용하지 않기
- 날카로운 모서리 피하기
- 과도한 애니메이션 피하기
- 너무 작은 텍스트 사용하지 않기
- 부정적이거나 강한 표현 피하기
- 복잡한 레이아웃 피하기

---

## 📚 Resources

### CDN Links
```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Image Sources
- **Stock Photos**: Unsplash (https://unsplash.com)
- **Recommended Search Terms**: plants, seedlings, farming, smart agriculture, greenhouse, fresh vegetables

---

*Last Updated: January 2026*
*Version: 1.0*
