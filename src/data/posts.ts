export type Locale = "vi" | "en";

export type LocalizedText = Record<Locale, string>;

export type Post = {
  id: string;
  title: LocalizedText;
  caption: LocalizedText;
  sourceUrl: string;
  source: "X";
  author: string;
  publishedAt?: string;
  category?: LocalizedText;
  tags?: string[];
};

export const posts: Post[] = [
  {
    id: "2087152112073605332",
    title: {
      vi: "CT Chẳng Bao Giờ Đổi",
      en: "CT Never Changes",
    },
    caption: {
      vi: "Thị trường đỏ, catalyst im ắng, nhưng meme casino và lời hứa altseason vẫn chạy hết công suất. Narrative đổi liên tục; phản xạ degen thì không.",
      en: "Markets turn red, catalysts go quiet, yet meme casinos and altseason promises keep running. Narratives rotate; degen reflexes do not.",
    },
    sourceUrl: "https://x.com/normallitt/status/2087152112073605332",
    source: "X",
    author: "@normallitt",
    publishedAt: "2026-08-11",
    category: { vi: "Thị trường", en: "Markets" },
    tags: ["bitcoin", "markets", "culture"],
  },
  {
    id: "2087168695269474798",
    title: {
      vi: "Sau Hype Là Doanh Thu",
      en: "After Hype Comes Revenue",
    },
    caption: {
      vi: "Vốn đang rời narrative rỗng để tìm phí thật, stablecoin và hạ tầng có người dùng. Web3 có thể không chết, chỉ đang học cách làm business.",
      en: "Capital is leaving empty narratives for fees, stablecoins and infrastructure with real users. Web3 may not be dying; it may be learning business.",
    },
    sourceUrl: "https://x.com/normallitt/status/2087168695269474798",
    source: "X",
    author: "@normallitt",
    publishedAt: "2026-08-11",
    category: { vi: "Web3", en: "Web3" },
    tags: ["web3", "revenue", "stablecoins"],
  },
  {
    id: "2087186571137343983",
    title: {
      vi: "Việt Nam Đặt Chỗ Lên Quỹ Đạo",
      en: "Vietnam Books a Ride to Orbit",
    },
    caption: {
      vi: "VinSpace đã có chỗ trên chuyến Falcon 9 vào quý II/2027. Một hợp đồng phóng nhỏ, nhưng là tín hiệu lớn cho tham vọng vũ trụ tư nhân Việt Nam.",
      en: "VinSpace has a Falcon 9 rideshare slot for Q2 2027. A small launch contract signals a much larger private-space ambition.",
    },
    sourceUrl: "https://x.com/normallitt/status/2087186571137343983",
    source: "X",
    author: "@normallitt",
    publishedAt: "2026-08-11",
    category: { vi: "Công nghệ", en: "Technology" },
    tags: ["technology", "space", "vietnam"],
  },
  {
    id: "2087246306544939042",
    title: {
      vi: "VC Crypto Vẫn Có Tiền",
      en: "Crypto VC Still Has Money",
    },
    caption: {
      vi: "Vốn nửa đầu năm vẫn dồi dào trong khi số deal sụt mạnh. VC đang gom cược vào doanh thu, compliance và hạ tầng nối tài chính với AI.",
      en: "H1 capital held up while deal count collapsed. Investors are concentrating on revenue, compliance and infrastructure that connects finance with AI.",
    },
    sourceUrl: "https://x.com/normallitt/status/2087246306544939042",
    source: "X",
    author: "@normallitt",
    publishedAt: "2026-08-11",
    category: { vi: "Dòng vốn", en: "Capital" },
    tags: ["venture-capital", "markets", "infrastructure"],
  },
  {
    id: "2090397416214454551",
    title: {
      vi: "Tether Đang Mua Vàng Cho Ngày Tận Thế?",
      en: "Is Tether Buying Gold for Doomsday?",
    },
    caption: {
      vi: "CEO Paolo Ardoino gọi Bitcoin + vàng là hàng rào trước thảm họa và Tether đang biến khẩu hiệu đó thành danh mục thật, với khoảng 146 tấn vàng cùng Bitcoin ngoài hệ thống tiền pháp định.",
      en: "CEO Paolo Ardoino calls Bitcoin + gold a hedge against doom and Tether is turning that line into a real portfolio, holding roughly 146 tonnes of gold alongside Bitcoin beyond the fiat system.",
    },
    sourceUrl: "https://x.com/normallitt/status/2090397416214454551",
    source: "X",
    author: "@normallitt",
    publishedAt: "2026-08-20",
    category: { vi: "Thị trường", en: "Markets" },
    tags: ["bitcoin", "gold", "tether", "markets"],
  },
];
