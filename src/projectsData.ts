export interface ProjectBullet { title?: string; text: string }
export interface ProjectSection { heading: string; paragraphs?: string[]; bullets?: ProjectBullet[] }
export interface Project {
  slug: string
  title: string
  slogan: string
  short: string[]
  sections: ProjectSection[]
  hero: string
  wide: string
  img3: string
  img4: string
  scope: string
  year: string
  client: string
  turnaround: string
  industry: string
}

const img = (id: string, w?: number, h?: number) =>
  `https://framerusercontent.com/images/${id}${w && h ? `?width=${w}&height=${h}` : ""}`

export const projects: Project[] = [
  {
    slug: "volta-studio",
    title: "VOLTA STUDIO",
    slogan: "Elevating Everyday Wear",
    short: ["Volta Studio is a Berlin-based architecture firm specializing in adaptive reuse — transforming disused industrial buildings into cultural and residential spaces. After ten years under an identity that no longer reflected the ambition of their work, they came to Julian David for a complete rebrand ahead of their largest commission to date."],
    hero: img("PdP5tVHd8Wg8Lw8aCFzG47M2vo", 736, 920),
    wide: img("8Zs74rKVI8iKlvcMMqTrnkE887c", 2108, 1200),
    img3: img("34RxZmOt0C3IFzDq8jLOfC5NRX0", 1020, 988),
    img4: img("80vATnrytPZXROh5e0kwqNRs", 1496, 1200),
    scope: "Branding, App development",
    year: "2025",
    client: "Jelemy",
    turnaround: "4 weeks",
    industry: "Fashion",
    sections: [
      { heading: "The Challenge", paragraphs: ["Eliotte was transitioning from an offline-first label into a DTC (direct-to-consumer) fashion brand with international ambitions. Their team had crafted a strong product and vision but lacked a cohesive brand identity and a digital experience that reflected the same standard. Our challenge was to translate their minimal, high-end ethos into a brand system and website that communicates trust, craftsmanship, and modernity—without saying too much."] },
      { heading: "Our Approach", paragraphs: ["We began with a deep brand audit—interviewing the founders, studying their materials, and immersing ourselves in the fashion space they wanted to occupy. Our focus was clarity: stripping away what’s not essential while elevating what matters."], bullets: [
        { title: "Brand Identity", text: "We designed a versatile, modern wordmark with a subtle typographic twist to reflect Eliotte’s quiet boldness. The identity system expanded with neutral tones, elevated serif and sans-serif combinations, and modular grid systems for print and digital use." },
        { title: "Website & Art Direction", text: "The e-commerce experience was designed on a clean editorial structure, balancing high-impact photography with minimal UI. We introduced subtle transitions and intentional whitespace to let the content and product speak. Key pages included modular lookbook layouts, launch campaigns, and storytelling blocks for craftsmanship." },
        { title: "Visual Content", text: "Our art direction extended to product photography guidelines, launch visuals, and social-first assets. We introduced a cool-toned aesthetic to align with the brand’s understated presence and seasonal collections." },
      ] },
      { heading: "Outcome", paragraphs: ["After launch, Eliotte saw a measurable uplift in user engagement and brand recall. The new identity resonated with their audience and opened the door for editorial features and a growing online following. More importantly, the internal team finally had a brand they felt proud to scale with."] },
      { heading: "Project Highlights", bullets: [
        { text: "Full brand identity & guidelines" },
        { text: "Custom-designed Framer website" },
        { text: "Art direction for launch campaign" },
        { text: "Lookbook page system for future drops" },
        { text: "Conversion-driven product storytelling" },
      ] },
    ],
  },
  {
    slug: "aura",
    title: "AURA",
    slogan: "Luxury Fragrance",
    short: ["AURA Parfums approached us with a vision to redefine elegance in the perfume industry—blending modern minimalism with timeless sensory experience. The brand needed a digital and visual identity that felt refined, mysterious, and emotionally resonant."],
    hero: img("746yFa87Rvmgn3PyfEdUjV5uz4", 1200, 1200),
    wide: img("0jA6TeyvPXyTp391gR5F9of0", 1060, 1536),
    img3: img("eLowJuG1szKBeafhpNdhnUSefUw", 900, 1200),
    img4: img("tSt9hE2TK36H7exu7SoOxCMjcXE", 1060, 1536),
    scope: "Brand strategy, Online store",
    year: "2026",
    client: "AURA Parfums",
    turnaround: "3 Weeks",
    industry: "Parfums",
    sections: [
      { heading: "Our Approach", paragraphs: ["We began by studying the fragrance industry’s visual language—how it communicates luxury, depth, and emotion. From there, we stripped everything down to the essentials. A soft monochrome palette, custom typography, and fluid animations became the foundation of AURA’s identity. Every element was built to evoke stillness, clarity, and intrigue.", "On the packaging side, we designed bottles and boxes that felt like objects of desire—elevated, sleek, and collectible. The website echoed the same tone: minimal yet immersive, with a focus on storytelling through motion and space."] },
      { heading: "What We Delivered", bullets: [
        { text: "Brand Identity" },
        { text: "Art Direction" },
        { text: "Product & Packaging Design" },
        { text: "Custom Typography System" },
        { text: "Shopify Website with Interactive Transitions" },
        { text: "Photography Direction & UI Styling" },
      ] },
      { heading: "Results", paragraphs: ["The launch of AURA saw an immediate uptake from premium retail distributors and niche fragrance blogs. Sales doubled in the first three months, and the brand has since secured international partners."] },
    ],
  },
  {
    slug: "aeromatch",
    title: "AEROMATCH™",
    slogan: "Performance Meets Precision",
    short: ["AeroMatch sneakers were engineered for agility, grip, and court dominance, but their story needed to cut through a saturated market. The brand had to look sharp, feel fast, and function flawlessly online."],
    hero: img("xDmOnS9JbXvC9Xj3ws5bB9NWUy0", 1200, 1200),
    wide: img("3UqolhEuhZfr2U44jn1URVmkU4", 1200, 1200),
    img3: img("lltTouFSSwylVe3Zxe0SBtCjuOU", 800, 1200),
    img4: img("5OvPVPAeXGGn9y69PTMFN3WE9IA", 4160, 6240),
    scope: "Brand Identity, Product Launch Website, UI/UX Design, Digital Strategy",
    year: "2026",
    client: "AeroMatch",
    turnaround: "3 Weeks",
    industry: "Sportswear / Tennis Footwear",
    sections: [
      { heading: "The Challenge", paragraphs: ["How do you design for performance? That was our north star. AeroMatch sneakers were engineered for agility, grip, and court dominance, but their story needed to cut through a saturated market. The brand had to look sharp, feel fast, and function flawlessly online."] },
      { heading: "Our Approach", paragraphs: ["We built the brand around movement, using bold typography, kinetic layouts, and a minimal yet athletic color system. The site is fully responsive and loads fast, even under high traffic.", "Key features:"], bullets: [
        { text: "Interactive 3D product views" },
        { text: "Performance-focused product pages with comparison charts" },
        { text: "Dynamic launch countdown and email capture" },
        { text: "Athlete ambassador profiles integrated into the brand narrative" },
      ] },
      { heading: "Results", bullets: [
        { text: "Brand launch in under 6 weeks" },
        { text: "25,000+ unique visitors on launch weekend" },
        { text: "32% email sign-up conversion on landing page" },
        { text: "Featured in two leading sportswear blogs within a week of launch" },
      ] },
      { heading: "What We Delivered", bullets: [
        { text: "Brand identity system" },
        { text: "Full responsive web design in Framer" },
        { text: "UI kit and component system" },
        { text: "Copywriting and content structure" },
        { text: "Social media asset kit" },
      ] },
    ],
  },
  {
    slug: "sonikk",
    title: "SONIKK",
    slogan: "A Bold Identity for the Future of Personal Audio",
    short: ["Sonikk approached us with a clear mission: create a bold yet premium brand identity for their growing line of AirPods accessories—ranging from protective cases to charging docks and customizable add-ons. The product was technically solid, but the brand lacked clarity and visual impact."],
    hero: img("5pBVCVZADhWgqTN6z1BJDSZ3y2Q", 1600, 1070),
    wide: img("b0CGyifzJ5OAvYzTwuhmDSVggQ", 904, 1200),
    img3: img("dZYwKPAjtZsZpBFIaOUZYwluDc", 800, 1200),
    img4: img("5oXpVUHc0xZccRcERakneNswT0", 904, 1200),
    scope: "Brand Identity • Packaging Design • Shopify Store Design • Art Direction",
    year: "2025",
    client: "Sonikk Technologies",
    turnaround: "4 Months",
    industry: "Consumer Tech",
    sections: [
      { heading: "Challenge", paragraphs: ["The challenge was twofold:"], bullets: [
        { text: "Differentiate in a saturated market of tech accessories." },
        { text: "Strike a balance between modern aesthetics and mass-market appeal—without compromising on the feel of innovation." },
      ] },
      { heading: "", paragraphs: ["We needed to create a visual system and tone of voice that could scale across packaging, digital campaigns, and physical store placements."] },
      { heading: "Strategy", paragraphs: ["We grounded the brand in three key ideas:"], bullets: [
        { title: "Precision", text: "Every design detail is intentional, just like the tech it supports." },
        { title: "Modularity", text: "Products that adapt. So should the brand system." },
        { title: "Sonic Elegance", text: "Minimalism meets movement. Clean lines, soft gradients, and fluid transitions." },
      ] },
      { heading: "", paragraphs: ["We developed a sleek logo with geometric rhythm, a deep neutral palette punctuated with electric blue, and bold photography that emphasizes detail and texture. All built to evoke a premium tech lifestyle."] },
      { heading: "Results", bullets: [
        { text: "38% boost in conversion rate after launch" },
        { text: "2x time spent on product pages" },
        { text: "New partnerships with lifestyle influencers and tech stores" },
      ] },
      { heading: "", paragraphs: ["The brand has since launched across multiple markets, with packaging now carried in both online and physical retail chains."] },
      { heading: "Delivered", bullets: [
        { text: "Full Brand Identity Kit" },
        { text: "Visual Language & Packaging System" },
        { text: "Shopify Design & Development" },
        { text: "Launch Campaign Visuals" },
        { text: "Photography Direction" },
      ] },
    ],
  },
  {
    slug: "norde",
    title: "NORDE",
    slogan: "Performance Meets Precision",
    short: ["Norde is a Copenhagen-based menswear label built around enduring wardrobe essentials — pieces designed to outlast trends by decades. They needed an identity that embodied that same philosophy visually: something rooted in Scandinavian values but deliberately resistant to Scandinavian design clichés."],
    hero: img("iDFbaSJhOcp8V6igSlzNbKDVg", 1588, 2382),
    wide: img("H7eN9cflgyqyp1FXYHiF9mp54g", 1588, 2382),
    img3: img("dByKshjlu8edTEdMlM010e10c", 1588, 2382),
    img4: img("p0jIqtjAbgex3qva7IU5CEELAo", 1588, 2382),
    scope: "Brand Identity, Product Launch Website, UI/UX Design, Digital Strategy",
    year: "2026",
    client: "AeroMatch",
    turnaround: "3 Weeks",
    industry: "Menswear",
    sections: [
      { heading: "The Challenge", paragraphs: ["Scandinavian design defaults to the same visual vocabulary — white space, light sans-serifs, minimal everything. Norde wanted to feel Scandinavian in its values but not in its aesthetic. They needed restraint with edge — something that could sit comfortably in a Copenhagen concept store and a London boutique without looking like it belonged to either city specifically."] },
      { heading: "The Approach", paragraphs: ["The identity is built on contrast — heavy and light, old and new. The primary mark pairs a dense blackletter N — referencing northern European print heritage — with a clean modern wordmark in a geometric sans. Together they create a tension that feels both rooted and contemporary. The material system — swing tags, garment labels, tissue paper, carrier bags — was designed as a complete tactile experience. Every touchpoint uses uncoated stock and a deliberately limited ink palette, making the physical brand feel as considered as the clothing itself."] },
      { heading: "Deliverables", paragraphs: ["Brand identity system · Primary mark & wordmark · Color & typography system · Brand guidelines · Retail packaging system · Lookbook art direction · Hang tag & label design"] },
      { heading: "Result", paragraphs: ["Launched in two Scandinavian concept stores and one London stockist in Autumn 2023. Shortlisted for a Danish Design Award in the visual communication category."] },
    ],
  },
  {
    slug: "aeromatch-copy",
    title: "MAISON FOREL",
    slogan: "French fashion and culture house.",
    short: ["Maison Forel is a luxury skincare house built around patience, depth, and permanence — a brand world that holds its own next to Aesop and Le Labo without looking like either."],
    hero: img("bHSZywnPvMUO7JKReMi7h8HOE4A", 1200, 1200),
    wide: img("FBGLnNynO3qpe6EW6WJWQr6xJVg", 1600, 2000),
    img3: img("JTx04Oy73VTHqw2SONFj8t9Vfbw", 1600, 2000),
    img4: img("5OvPVPAeXGGn9y69PTMFN3WE9IA", 4160, 6240),
    scope: "Brand Identity, Product Launch Website, UI/UX Design, Digital Strategy",
    year: "2026",
    client: "Maison Forel",
    turnaround: "3 Weeks",
    industry: "Skincare / Luxury",
    sections: [
      { heading: "The Challenge", paragraphs: ["The luxury skincare space is saturated with minimalist white packaging and gold type. The brief was to create something that felt premium without being predictable — a brand world that could hold its own next to Aesop and Le Labo without looking like either. The founders wanted restraint, but with a distinct point of view."] },
      { heading: "The Approach", paragraphs: ["The identity was built around the cedar tree as a symbol of patience, depth, and permanence. The primary mark is a geometric reduction of a cedar branch — precise enough to read as a modern logo, organic enough to feel rooted in nature. The color system draws from the tree itself: deep resinous greens, warm bark browns, and a single pale cream as the base. Typography pairs a refined serif for the wordmark with a narrow grotesque for all functional text — the contrast creates visual tension that feels considered rather than accidental."] },
      { heading: "Deliverables", paragraphs: ["Brand identity system · Logo suite & primary mark · Color & typography system · Packaging design direction · Brand guidelines · Stationery suite"] },
      { heading: "Result", paragraphs: ["Launched in three Parisian concept stores in Spring 2024. Featured in Étapes Magazine's annual packaging review."] },
    ],
  },
]

export const getProject = (slug: string) => projects.find(p => p.slug === slug)
