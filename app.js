const TRACKS = [
  {
    id: "cloud",
    name: "클라우드 AI",
    group: "코어AI트랙",
    target: "정보컴퓨터공학",
    color: "#d9236a",
    keywords: ["클라우드", "네트워크", "컴퓨팅", "플랫폼", "데이터마이닝"],
    summary: "클라우드 컴퓨팅, 네트워크, 데이터 인프라를 기반으로 AI 서비스를 설계하는 경로"
  },
  {
    id: "physical",
    name: "피지컬 AI",
    group: "코어AI트랙",
    target: "정보컴퓨터공학",
    color: "#e43d4f",
    keywords: ["온디바이스", "로보틱스", "임베디드", "사물인터넷", "강화학습"],
    summary: "임베디드 시스템, IoT, 강화학습을 묶어 현실 세계의 AI 장치를 다루는 경로"
  },
  {
    id: "generative",
    name: "생성형 AI",
    group: "코어AI트랙",
    target: "인공지능전공",
    color: "#2aa84a",
    keywords: ["생성형", "자연어", "멀티모달", "딥러닝", "모델"],
    summary: "생성모델, 자연어처리, 멀티모달러닝으로 AI 모델 활용 역량을 확장하는 경로"
  },
  {
    id: "xr",
    name: "XR공간컴퓨팅",
    group: "코어AI트랙",
    target: "인공지능전공",
    color: "#14a6a6",
    keywords: ["XR", "공간", "그래픽스", "가상현실", "시각컴퓨팅"],
    summary: "시각컴퓨팅, 그래픽스, 가상현실을 통해 공간형 AI 인터페이스를 만드는 경로"
  },
  {
    id: "security",
    name: "AI융합보안",
    group: "코어AI트랙",
    target: "인공지능전공",
    color: "#22aeea",
    keywords: ["보안", "네트워크", "블록체인", "모바일", "정보보안"],
    summary: "정보보안, 네트워크보안, 블록체인 보안을 AI와 결합하는 경로"
  },
  {
    id: "industry",
    name: "산업 AI",
    group: "산업AI 트랙",
    target: "산업공학",
    color: "#2e3192",
    keywords: ["산업", "제조", "품질", "공급사슬", "생산운영"],
    summary: "제조, 품질, 공급사슬 데이터를 AI로 분석하고 개선하는 산업공학 중심 경로"
  },
  {
    id: "fusion",
    name: "융합 AI",
    group: "융합AI 트랙",
    target: "전공무관",
    color: "#6b4aa0",
    keywords: ["융합", "데이터분석", "지역사회", "문제해결", "딥러닝"],
    summary: "전공 배경과 관계없이 데이터마이닝과 AI 문제해결 프로젝트로 진입하는 경로"
  }
];

const CORE_AI_TRACK_IDS = ["cloud", "physical", "generative", "xr", "security"];
const CORE_AI_MODULE_LABELS = ["클라우드·피지컬AI", "생성형AI", "XR공간컴퓨팅", "AI융합보안"];
const INTERMEDIATE_DASHBOARD_GROUPS = [
  {
    id: "core-ai",
    name: "코어AI트랙",
    trackIds: CORE_AI_TRACK_IDS,
    color: "#0b3a75",
    moduleLabels: CORE_AI_MODULE_LABELS,
    description: "4개 중급 모듈 통합 관리"
  },
  {
    id: "industry-ai",
    name: "산업AI트랙",
    trackIds: ["industry"],
    color: "#2e3192",
    description: "산업 AI 중급 교과 진행"
  },
  {
    id: "fusion-ai",
    name: "융합AI트랙",
    trackIds: ["fusion"],
    color: "#6b4aa0",
    description: "중급 교과형 없음 · AI 스프린트 PBL과 융합형 PBL 운영"
  }
];
const ADVANCED_DASHBOARD_GROUPS = TRACKS
  .filter((track) => track.id !== "fusion")
  .map((track) => ({
  id: track.id,
  name: track.name,
  trackIds: [track.id],
  color: track.color,
  description: track.summary
}));

const MODULES = [
  module("m-ai-intro", "인공지능개론", "교과형", "초급", "2-4학년", ["cloud", "physical", "generative", "xr", "security", "fusion"], ["AI기초", "공통"]),
  module("m-ai-programming", "AI프로그래밍", "교과형", "초급", "2-2", ["cloud", "physical", "generative", "xr", "security"], ["Python", "모델활용"]),
  module("m-ai-sprint", "AI 스프린트 NAVER CONNECT", "교과형", "초급", "공통", ["cloud", "physical", "generative", "xr", "security", "industry", "fusion"], ["실습", "공통"]),
  module("m-industrial-data", "산업데이터과학", "교과형", "초급", "2-2", ["industry"], ["산업데이터", "기초분석"]),
  module("m-fusion-mining", "융합 데이터마이닝", "교과형", "초급", "2-4학년", ["fusion"], ["융합", "데이터마이닝"]),
  module("m-local-ai", "AI활용지역사회 문제해결", "교과형", "초급", "교양", ["fusion"], ["문제해결", "프로젝트"]),
  module("m-algorithm", "컴퓨터알고리즘", "교과형", "중급", "3-1", ["cloud", "physical", "generative", "xr", "security"], ["알고리즘", "코어"]),
  module("m-network", "컴퓨터네트워크", "교과형", "중급", "3-2", ["cloud"], ["네트워크", "인프라"]),
  module("m-ml", "머신러닝", "교과형", "중급", "4-1", ["cloud", "physical", "generative", "xr", "security"], ["모델링", "학습"]),
  module("m-data-mining", "데이터마이닝", "교과형", "중급", "4-2", ["cloud", "physical", "generative", "xr", "security", "industry"], ["분석", "추천"]),
  module("m-embedded", "임베디드시스템설계및실험", "교과형", "중급", "4-2", ["cloud", "physical"], ["임베디드", "실험"]),
  module("m-visual", "시각컴퓨팅", "교과형", "중급", "4-1", ["generative", "xr"], ["비전", "공간"]),
  module("m-rl", "강화학습개론", "교과형", "중급", "4-2", ["physical", "xr"], ["강화학습", "제어"]),
  module("m-deep-programming", "딥러닝프로그래밍", "교과형", "중급", "3-2", ["generative", "xr"], ["딥러닝", "구현"]),
  module("m-info-sec", "정보보안", "교과형", "중급", "3-1", ["security"], ["보안기초", "위협분석"]),
  module("m-manufacturing", "제조공학", "교과형", "중급", "2-1", ["industry"], ["제조", "공정"]),
  module("m-operations", "생산운영관리", "교과형", "중급", "2-2", ["industry"], ["운영", "계획"]),
  module("m-quality", "품질경영", "교과형", "중급", "3-2", ["industry"], ["품질", "관리"]),
  module("m-ai-quality", "인공지능개론 품질경영", "교과형", "중급", "3-2", ["industry"], ["AI기초", "품질"]),
  module("m-cloud-computing", "클라우드컴퓨팅", "교과형", "고급", "4-1", ["cloud"], ["클라우드", "인프라"]),
  module("m-aiot-platform", "지능형 IoT 플랫폼", "교과형", "고급", "4-2", ["cloud", "physical"], ["IoT", "플랫폼"]),
  module("m-quantum-info", "양자컴퓨팅및정보의기초", "교과형", "고급", "4-2", ["cloud"], ["양자", "컴퓨팅"]),
  module("m-iot", "사물인터넷", "교과형", "고급", "4-1", ["physical"], ["IoT", "센서"]),
  module("m-gen-nlp", "생성모델 자연어처리", "교과형", "고급", "4-1", ["generative"], ["생성모델", "NLP"]),
  module("m-multimodal", "멀티모달러닝", "교과형", "고급", "4-2", ["generative"], ["멀티모달", "딥러닝"]),
  module("m-graph-data", "그래프데이터분석", "교과형", "고급", "3학년", ["generative"], ["그래프", "분석"]),
  module("m-computer-graphics", "컴퓨터그래픽스", "교과형", "고급", "3학년", ["xr"], ["그래픽스", "공간"]),
  module("m-vr", "가상현실개론", "교과형", "고급", "4-1", ["xr"], ["VR", "XR"]),
  module("m-hci", "인간컴퓨팅상호작용 캡스톤디자인", "교과형", "고급", "4-2", ["xr"], ["HCI", "캡스톤"]),
  module("m-network-security", "네트워크보안", "교과형", "고급", "3학년", ["security"], ["네트워크", "보안"]),
  module("m-blockchain-ai-sec", "블록체인 인공지능보안", "교과형", "고급", "4-1", ["security"], ["블록체인", "보안"]),
  module("m-mobile-security", "모바일디바이스보안", "교과형", "고급", "4-2", ["security"], ["모바일", "보안"]),
  module("m-supply-chain", "공급사슬관리", "교과형", "고급", "3학년", ["industry"], ["공급사슬", "최적화"]),
  module("m-smart-factory", "스마트제조 딥러닝", "교과형", "고급", "4-1", ["industry"], ["스마트제조", "딥러닝"]),
  module("m-advanced-rl", "강화학습개론", "교과형", "고급", "4-2", ["industry"], ["강화학습", "최적화"]),
  module("pbl-ai-sprint", "AI 스프린트 PBL", "몰입형", "중급형", "2-4학년·여름계절", ["cloud", "physical", "generative", "xr", "security", "industry", "fusion"], ["PBL", "NAVER CONNECT", "AI Native", "서비스개발"]),
  module("pbl-cloud", "클라우드 AI PBL", "몰입형", "고급형", "3/4학년", ["cloud"], ["PBL", "클라우드"]),
  module("pbl-ondevice", "온디바이스 AI PBL", "몰입형", "고급형", "3/4학년", ["physical"], ["PBL", "온디바이스"]),
  module("pbl-robotics", "로보틱스 AI PBL", "몰입형", "고급형", "3/4학년", ["physical"], ["PBL", "로보틱스"]),
  module("pbl-genai", "생성형 AI PBL", "몰입형", "고급형", "3/4학년", ["generative"], ["PBL", "생성형"]),
  module("pbl-xr", "XR PBL", "몰입형", "고급형", "3/4학년", ["xr"], ["PBL", "XR"]),
  module("pbl-security", "AI융합보안 PBL", "몰입형", "고급형", "3/4학년", ["security"], ["PBL", "보안"]),
  module("pbl-industry", "산업AI PBL", "몰입형", "고급형", "3/4학년", ["industry"], ["PBL", "산업"]),
  module("pbl-deep", "딥러닝 PBL", "몰입형", "중급형", "3/4학년", ["fusion"], ["PBL", "딥러닝"]),
  module("pbl-analysis", "데이터분석 PBL", "몰입형", "중급형", "3/4학년", ["fusion"], ["PBL", "데이터분석"])
];

const SAMPLE_TRACK_COMPLETION_RATIOS = {
  cloud: [0.82, 0.86, 0.9, 0.94, 1],
  physical: [0.82, 0.86, 0.9, 0.94, 1],
  generative: [0.84, 0.88, 0.92, 0.96, 1],
  xr: [0.82, 0.86, 0.9, 0.94, 1],
  security: [0.82, 0.86, 0.9, 0.94, 1],
  industry: [0.5, 0.55, 0.58, 0.62, 0.65],
  fusion: [0.22, 0.28, 0.32, 0.36, 0.4]
};
const COMPLETION_YEARS = [2024, 2025, 2026];
const COMPLETION_SEMESTERS = ["1학기", "2학기", "계절학기"];

const SAMPLE_STUDENTS = createSampleStudents();

const STORAGE_KEY = "pnu.bootcamp.students.v5";
const STAGES = ["초급", "중급", "고급"];
const IMMERSIVE_STAGES = ["중급형", "고급형"];
const DASHBOARD_PAGE_SIZE = 10;
const TRANSCRIPT_ANALYSIS_LIMIT = 5;
const PDFJS_WORKER_SRC = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
const TRANSCRIPT_MODULE_ALIASES = {
  "m-aiot-platform": ["지능형 IoT 플랫폼", "지능형IoT플랫폼", "AIoT 플랫폼"],
  "m-ai-sprint": ["AI 스프린트 NAVER CONNECT", "AI스프린트", "NAVER CONNECT"],
  "m-quantum-info": ["양자컴퓨팅및정보의기초", "양자컴퓨팅 및 정보의 기초"],
  "m-deep-programming": ["딥러닝프로그래밍", "딥러닝 프로그래밍"],
  "m-cloud-computing": ["클라우드컴퓨팅", "클라우드 컴퓨팅"],
  "m-graph-data": ["그래프데이터분석", "그래프 데이터 분석"],
  "m-computer-graphics": ["컴퓨터그래픽스", "컴퓨터 그래픽스"],
  "m-info-sec": ["정보보안", "정보 보안"],
  "m-mobile-security": ["모바일디바이스보안", "모바일 디바이스 보안"],
  "m-network-security": ["네트워크보안", "네트워크 보안"],
  "m-fusion-mining": ["융합데이터마이닝", "융합 데이터마이닝"],
  "pbl-ai-sprint": ["AI 스프린트 PBL", "AI스프린트 PBL", "AI스프린트PBL", "부산대 AI 스프린트 PBL"]
};
const TRACK_GUIDES = {
  cloud: {
    goal: "클라우드 인프라와 AI 서비스 운영 역량을 결합해 확장 가능한 지능형 서비스를 설계하는 인재 양성",
    overview: "클라우드 컴퓨팅, 컴퓨터네트워크, 데이터마이닝, 지능형 IoT 플랫폼을 연결해 AI 서비스 배포와 운영까지 경험하는 트랙입니다.",
    competencies: ["클라우드 아키텍처 설계", "AI 서비스 배포와 모니터링", "네트워크 기반 데이터 파이프라인", "클라우드 보안 기초"],
    outcomes: ["AI 서비스 프로토타입 배포", "클라우드 리소스 비용·성능 점검", "PBL 기반 포트폴리오 구성"]
  },
  physical: {
    goal: "온디바이스·임베디드 환경에서 작동하는 AI 시스템 구현 역량 확보",
    overview: "임베디드시스템, 사물인터넷, 지능형 IoT 플랫폼, 강화학습을 통해 현실 세계 장치와 AI 모델을 연결합니다.",
    competencies: ["IoT 센서 데이터 처리", "온디바이스 AI 모델 적용", "로보틱스 제어 기초", "강화학습 활용"],
    outcomes: ["디바이스 기반 AI PoC", "센서 데이터 분석 결과", "로보틱스·온디바이스 PBL 진입"]
  },
  generative: {
    goal: "생성모델, 자연어처리, 멀티모달 모델을 활용한 AI 서비스 기획·구현 역량 강화",
    overview: "딥러닝프로그래밍, 그래프데이터분석, 생성모델 자연어처리, 멀티모달러닝으로 모델 활용과 서비스 응용을 다룹니다.",
    competencies: ["LLM·생성모델 활용", "자연어처리와 그래프 분석", "멀티모달 데이터 이해", "모델 평가와 개선"],
    outcomes: ["생성형 AI 서비스 기획서", "모델 활용 실습 산출물", "생성형 AI PBL 포트폴리오"]
  },
  xr: {
    goal: "시각컴퓨팅과 공간 인터페이스를 결합한 XR 기반 AI 서비스 설계",
    overview: "시각컴퓨팅, 컴퓨터그래픽스, 가상현실개론을 바탕으로 공간형 사용자 경험과 AI 인터페이스를 만듭니다.",
    competencies: ["시각 데이터 처리", "공간 인터랙션 설계", "가상현실 콘텐츠 구현", "컴퓨터그래픽스 기초"],
    outcomes: ["XR 인터페이스 프로토타입", "공간컴퓨팅 기획서", "XR PBL 진입 상담 자료"]
  },
  security: {
    goal: "AI와 정보보안을 결합해 지능형 위협 탐지와 보안 서비스 설계 역량 확보",
    overview: "정보보안, 네트워크보안, 모바일디바이스보안, 블록체인 인공지능보안을 통해 AI 보안 실무 기반을 만듭니다.",
    competencies: ["보안 로그 분석", "네트워크 위협 이해", "모바일·블록체인 보안", "AI 기반 탐지 시나리오"],
    outcomes: ["AI 보안 분석 리포트", "위협 탐지 PoC", "AI융합보안 PBL 준비"]
  },
  industry: {
    goal: "제조·품질·공급사슬 데이터를 AI로 분석해 산업 현장의 의사결정을 개선",
    overview: "산업데이터과학, 품질경영, 공급사슬관리, 스마트제조 딥러닝으로 산업공학 문제를 AI 관점에서 해결합니다.",
    competencies: ["제조 데이터 분석", "품질 예측과 개선", "공급사슬 최적화", "스마트제조 모델링"],
    outcomes: ["산업 데이터 분석 보고서", "공정 개선 아이디어", "산업AI PBL 과제 제안"]
  },
  fusion: {
    goal: "전공과 관계없이 AI·데이터분석 기반 문제해결 역량을 확보",
    overview: "융합 데이터마이닝과 지역사회 문제해결 교과를 기반으로 중급형 몰입형 PBL에 진입하는 트랙입니다.",
    competencies: ["데이터 분석 기초", "문제정의와 데이터 수집", "딥러닝 활용 탐색", "융합형 프로젝트 수행"],
    outcomes: ["데이터분석 PBL 제안서", "지역사회 문제해결 산출물", "전공 연계 AI 상담 자료"]
  }
};
const BIG_TECH_PBL_GUIDES = {
  "pbl-ai-sprint": {
    heroTitle: "네이버 커넥트재단과 함께하는 AI Native 개발 집중 스프린트",
    color: "#03c75a",
    label: "공통 중급 몰입형",
    companies: [
      { name: "NAVER Connect Foundation", focus: "2주 집중 커리큘럼 주관·운영, 데일리 미션과 학습 큐레이션" },
      { name: "NAVER 현업 개발자", focus: "매일 실시간 특강, 팀별 멘토링, 과제 피드백과 평가" },
      { name: "NAVER Cloud", focus: "클라우드 기반 서비스 개발·배포 환경 이해" },
      { name: "AI API & Git 협업", focus: "AI 도구 활용, 데이터 처리, 웹 서비스 개발, 팀 단위 협업" }
    ],
    project: "AI 도구와 클라우드 기반 개발 환경을 활용해 팀별 아이디어 기획, 서비스 설계, 프로토타입 구현, 배포와 데모까지 한 사이클을 수행합니다.",
    benefits: [
      "네이버 커넥트재단 운영 과정 참여 이력 확보",
      "NAVER 현업 개발자·기획자 멘토링과 과제 피드백 경험",
      "기획-설계-개발-배포-발표 전 과정을 담은 포트폴리오 산출",
      "AI API, Git 협업, 클라우드 배포를 결합한 실무형 개발 경험",
      "데모데이 발표와 2분 엘리베이터 스피치 훈련"
    ],
    operation: [
      "과정명: AI 스프린트 PBL, 2026년 여름계절학기 3학점 과정",
      "대상: 전 학과 2-4학년, 정보컴퓨터공학부·산업공학과 3-4학년 우선 선발",
      "기간: 2026.06.29.-2026.07.10., 총 10일 2주 집중 운영",
      "방식: 오전 오프라인 집합교육, 오후 온·오프라인 팀 프로젝트 및 멘토링",
      "정원: 부산대학교 재학생 30명 내외, 팀당 5-6명 구성"
    ],
    evaluation: [
      "출석 및 참여 20%",
      "데일리 실습 및 과제 40%",
      "최종 프로젝트 산출물·발표 40%",
      "평가 방식: S/U, 과정 종료 후 데모데이와 만족도 조사 진행"
    ],
    flow: [
      "DAY 1-2: 문제 정의, 아이디어 발산, 팀 빌딩",
      "DAY 3-5: 서비스 범위 결정, UI/UX 스케치, 개발 계획 수립",
      "DAY 6-8: AI API 활용, 데이터 처리, 프로토타입 개발",
      "DAY 9-10: 배포, 데모데이 발표, 회고와 포트폴리오 정리"
    ]
  },
  "pbl-cloud": {
    companies: [
      { name: "AWS", focus: "클라우드 아키텍처와 AI 서비스 배포" },
      { name: "Microsoft Azure", focus: "엔터프라이즈 AI 플랫폼과 데이터 파이프라인" },
      { name: "Google Cloud", focus: "데이터 분석, MLOps, 생성형 AI API 활용" },
      { name: "NAVER Cloud", focus: "국내 클라우드 인프라와 서비스 운영 실습" }
    ],
    project: "실제 클라우드 환경에 AI 서비스를 배포하고, 성능·비용·보안 관점에서 운영 개선안을 제시합니다.",
    benefits: ["빅테크 클라우드 스택 경험", "배포 가능한 포트폴리오 확보", "현업 멘토링 기반 문제해결", "클라우드·MLOps 직무 상담 자료 확보"]
  },
  "pbl-ondevice": {
    companies: [
      { name: "NVIDIA", focus: "엣지 AI 가속과 모델 최적화" },
      { name: "Qualcomm", focus: "온디바이스 AI 칩셋 활용" },
      { name: "Samsung", focus: "모바일·디바이스 AI 서비스 시나리오" }
    ],
    project: "디바이스 제약 조건에서 작동하는 AI 모델을 설계하고 성능 최적화 결과를 정리합니다.",
    benefits: ["엣지 AI 구현 경험", "모델 경량화 포트폴리오", "하드웨어 친화적 AI 역량 증명"]
  },
  "pbl-robotics": {
    companies: [
      { name: "NVIDIA", focus: "로보틱스 시뮬레이션과 AI 가속" },
      { name: "Hyundai Robotics", focus: "산업용 로봇 적용 시나리오" },
      { name: "Doosan Robotics", focus: "협동로봇 서비스 과제" }
    ],
    project: "로봇 센서 데이터와 제어 시나리오를 바탕으로 AI 기반 자동화 과제를 해결합니다.",
    benefits: ["로보틱스 AI 프로젝트 경험", "센서·제어 데이터 이해", "스마트팩토리 직무 연계"]
  },
  "pbl-genai": {
    companies: [
      { name: "OpenAI", focus: "생성형 AI 서비스 기획과 모델 활용" },
      { name: "Google", focus: "멀티모달 AI와 검색·분석 서비스" },
      { name: "NAVER", focus: "한국어 AI 서비스와 플랫폼 적용" }
    ],
    project: "LLM과 멀티모달 모델을 활용해 사용자 문제를 해결하는 생성형 AI 서비스를 기획·구현합니다.",
    benefits: ["생성형 AI 포트폴리오", "프롬프트·평가 역량", "서비스 기획부터 구현까지 경험"]
  },
  "pbl-xr": {
    companies: [
      { name: "Meta", focus: "XR 인터페이스와 공간 경험" },
      { name: "Apple", focus: "공간컴퓨팅 UX 설계 관점" },
      { name: "Unity", focus: "실시간 3D 콘텐츠 제작" }
    ],
    project: "XR 환경에서 AI가 사용자 경험을 돕는 공간형 인터페이스를 설계합니다.",
    benefits: ["XR 서비스 시나리오 확보", "공간 UI 포트폴리오", "실시간 3D와 AI 연계 경험"]
  },
  "pbl-security": {
    companies: [
      { name: "Microsoft Security", focus: "클라우드 보안과 위협 탐지" },
      { name: "Google Cloud Security", focus: "보안 로그 분석과 AI 탐지" },
      { name: "AhnLab", focus: "국내 보안 관제와 위협 대응" }
    ],
    project: "보안 로그와 위협 시나리오를 분석해 AI 기반 탐지·대응 아이디어를 제안합니다.",
    benefits: ["보안 분석 실무 감각", "위협 탐지 포트폴리오", "AI 보안 직무 상담 근거"]
  },
  "pbl-industry": {
    companies: [
      { name: "Siemens", focus: "스마트제조와 산업 자동화" },
      { name: "Samsung SDS", focus: "제조 데이터 플랫폼과 분석" },
      { name: "POSCO DX", focus: "산업 현장 데이터 기반 개선" }
    ],
    project: "제조·품질·공급사슬 데이터를 분석해 산업 현장 개선안을 도출합니다.",
    benefits: ["산업 데이터 분석 경험", "제조 AI 포트폴리오", "현장 문제해결형 상담 자료"]
  },
  "pbl-deep": {
    companies: [
      { name: "NVIDIA", focus: "딥러닝 모델 학습과 가속" },
      { name: "Google", focus: "AI 모델 실험과 평가" },
      { name: "Kakao Enterprise", focus: "서비스형 AI 적용 사례" }
    ],
    project: "전공 배경을 살려 딥러닝 모델을 적용하고 성능 개선 과정을 정리합니다.",
    benefits: ["딥러닝 실험 경험", "모델 평가 리포트", "고급 교과 진입 상담 자료"]
  },
  "pbl-analysis": {
    companies: [
      { name: "Google Cloud", focus: "데이터 분석 플랫폼" },
      { name: "Tableau", focus: "시각화와 의사결정 대시보드" },
      { name: "NAVER Cloud", focus: "국내 데이터 플랫폼 적용" }
    ],
    project: "데이터 수집부터 분석, 시각화, 의사결정 제안까지 하나의 문제해결 흐름으로 수행합니다.",
    benefits: ["데이터분석 포트폴리오", "대시보드 산출물", "비전공자 AI 진입 근거 확보"]
  }
};
const DASHBOARD_STAGE_OPTIONS = [
  { id: "all", label: "전체 과정", stage: null },
  { id: "intermediate", label: "중급과정", stage: "중급" },
  { id: "advanced", label: "고급과정", stage: "고급" }
];

const state = {
  view: "dashboard",
  selectedStudentId: "s-001",
  students: loadStudents(),
  globalSearch: "",
  studentSearch: "",
  studentStatus: "all",
  trackFilter: "all",
  historyYear: "all",
  historySemester: "all",
  dashboardYear: "all",
  dashboardSemester: "all",
  dashboardStage: "all",
  dashboardDrilldown: null,
  dashboardPage: 1,
  dashboardCounselingPage: 1,
  courseModal: null,
  infoModal: null,
  transcriptReview: null,
  transcriptUploadBusy: false,
  transcriptUploadMessage: ""
};

function module(id, title, type, stage, semester, trackIds, tags) {
  return { id, title, type, stage, semester, trackIds, tags };
}

function student(id, name, major, grade, targetTrack, interests, completedModules, status, risk, memo) {
  return {
    id,
    name,
    major,
    grade,
    targetTrack,
    interests,
    completedModules,
    completedRecords: [],
    counselingRecords: [],
    status,
    risk,
    memo,
    nextCounseling: "2026-06-20"
  };
}

function createSampleStudents() {
  const familyNames = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임"];
  const givenNames = ["하은", "민준", "서연", "도윤", "유진", "지호", "수빈", "현우", "예린", "준서"];
  const statuses = ["상담 예정", "진행중", "상담 완료", "관찰 필요"];
  const trackProfiles = {
    cloud: {
      majors: ["정보컴퓨터공학", "컴퓨터공학부", "소프트웨어학과"],
      interests: ["클라우드 인프라와 AI 서비스 운영", "AI 플랫폼 배포 자동화", "데이터센터 기반 클라우드 컴퓨팅"]
    },
    physical: {
      majors: ["정보컴퓨터공학", "로봇공학전공", "전자공학과"],
      interests: ["온디바이스 AI와 로보틱스", "사물인터넷 기반 피지컬 AI", "임베디드 시스템과 강화학습"]
    },
    generative: {
      majors: ["인공지능전공", "정보컴퓨터공학", "데이터사이언스전공"],
      interests: ["생성형 AI와 자연어처리 서비스 개발", "멀티모달 모델 활용", "딥러닝 모델 고도화"]
    },
    xr: {
      majors: ["인공지능전공", "디자인학과", "컴퓨터공학부"],
      interests: ["XR 인터페이스와 시각컴퓨팅", "가상현실 콘텐츠 개발", "공간컴퓨팅 기반 사용자 경험"]
    },
    security: {
      majors: ["인공지능전공", "정보컴퓨터공학", "정보보호학과"],
      interests: ["AI 보안과 모바일 보안", "네트워크보안과 블록체인", "지능형 보안 위협 분석"]
    },
    industry: {
      majors: ["산업공학", "산업경영공학", "기계공학부"],
      interests: ["제조 데이터 기반 품질 개선", "스마트제조와 공급사슬 최적화", "산업 데이터마이닝"]
    },
    fusion: {
      majors: ["전공무관", "경영학과", "사회복지학과", "교육학과"],
      interests: ["지역사회 문제해결과 데이터분석", "전공 융합 AI 서비스 기획", "데이터 기반 사회문제 해결"]
    }
  };

  return Array.from({ length: 100 }, (_, index) => {
    const track = TRACKS[index % TRACKS.length];
    const profile = trackProfiles[track.id];
    const grade = 2 + (index % 3);
    const name = `${familyNames[index % familyNames.length]}${givenNames[(index * 3 + Math.floor(index / familyNames.length)) % givenNames.length]}`;
    const progressPattern = index % 10;
    const completedModules = sampleCompletedModules(track.id, grade, progressPattern);
    const status = statuses[index % statuses.length];
    const rate = sampleCompletionRate(track.id, completedModules);
    const risk = status === "관찰 필요" || rate < 25 ? "높음" : rate < 50 ? "중간" : "낮음";
    const nextDate = new Date(2026, 5, 10 + (index % 18));
    const sample = student(
      `s-${String(index + 1).padStart(3, "0")}`,
      name,
      profile.majors[index % profile.majors.length],
      grade,
      track.id,
      profile.interests[index % profile.interests.length],
      completedModules,
      status,
      risk,
      sampleCounselingMemo(track, grade, rate, status)
    );
    sample.nextCounseling = nextDate.toISOString().slice(0, 10);
    sample.completedRecords = sampleCompletionRecords(completedModules, index);
    return sample;
  });
}

function sampleCompletedModules(trackId, grade, progressPattern) {
  const curriculum = curriculumModules(trackId);
  const pbl = immersiveModules(trackId);
  const completionCount = sampleCompletionCount(trackId, curriculum.length, progressPattern);
  const ids = curriculum.slice(0, completionCount).map((m) => m.id);

  if (grade >= 3 && completionCount / Math.max(curriculum.length, 1) >= 0.75 && pbl[0]) ids.push(pbl[0].id);
  if (grade >= 4 && completionCount / Math.max(curriculum.length, 1) >= 0.9 && pbl[1]) ids.push(pbl[1].id);
  return [...new Set(ids)];
}

function sampleCompletionCount(trackId, total, progressPattern) {
  if (!total) return 0;
  const ratios = SAMPLE_TRACK_COMPLETION_RATIOS[trackId] || [0.8];
  const ratio = ratios[progressPattern % ratios.length];
  const count = Math.round(total * ratio);
  const minimum = ["industry", "fusion"].includes(trackId) ? 1 : Math.ceil(total * 0.8);
  return Math.min(total, Math.max(minimum, count));
}

function sampleCompletionRecords(moduleIds, studentIndex) {
  return moduleIds.map((moduleId, index) => {
    const moduleInfo = MODULES.find((m) => m.id === moduleId);
    const stage = moduleInfo?.stage || "초급";
    const year = moduleInfo?.type === "몰입형" ? 2026 : stage === "초급" ? 2024 : stage === "중급" ? 2025 : 2026;
    const semester = moduleInfo?.type === "몰입형"
      ? "계절학기"
      : COMPLETION_SEMESTERS[(studentIndex + index + year) % 2];
    return { moduleId, year, semester };
  });
}

function sampleCompletionRate(trackId, completedModules) {
  const list = curriculumModules(trackId);
  if (!list.length) return 0;
  const done = list.filter((m) => completedModules.includes(m.id)).length;
  return Math.round((done / list.length) * 100);
}

function sampleCounselingMemo(track, grade, rate, status) {
  if (status === "관찰 필요") return `${track.name} 중급 진입 전 기초 모듈 보강과 상담 추적 필요`;
  if (rate >= 70) return `${track.name} 고급 교과형 이후 몰입형 PBL 연계 상담 권장`;
  if (grade >= 4) return `${track.name} 졸업 전 고급형 모듈과 PBL 이수 계획 점검`;
  return `${track.name} 목표 트랙 기준 다음 교과형 모듈 안내 필요`;
}

function cloneStudentList(students) {
  return students.map(normalizeStudent);
}

function normalizeStudent(student) {
  const completedModules = [...new Set(student.completedModules || [])];
  const existingRecords = Array.isArray(student.completedRecords) ? student.completedRecords : [];
  const normalizedRecords = existingRecords
    .filter((record) => completedModules.includes(record.moduleId))
    .map((record) => ({
      moduleId: record.moduleId,
      year: Number(record.year) || 2026,
      semester: COMPLETION_SEMESTERS.includes(record.semester) ? record.semester : "1학기"
    }));
  const recordedIds = new Set(normalizedRecords.map((record) => record.moduleId));
  const missingRecords = completedModules
    .filter((moduleId) => !recordedIds.has(moduleId))
    .map((moduleId, index) => fallbackCompletionRecord(moduleId, index));

  return {
    ...student,
    studentNumber: student.studentNumber || "",
    completedModules,
    completedRecords: [...normalizedRecords, ...missingRecords],
    counselingRecords: normalizeCounselingRecords(student.counselingRecords),
    transcriptAnalyses: normalizeTranscriptAnalyses(student.transcriptAnalyses)
  };
}

function normalizeCounselingRecords(records) {
  if (!Array.isArray(records)) return [];
  return records.map((record, index) => ({
    id: record.id || `c-${Date.now()}-${index}`,
    date: record.date || "2026-06-09",
    audioName: record.audioName || "",
    audioType: record.audioType || "",
    audioSize: Number(record.audioSize) || 0,
    transcript: record.transcript || "",
    summary: record.summary || "상담 내용 정리 필요",
    nextActions: Array.isArray(record.nextActions) ? record.nextActions : [],
    keywords: Array.isArray(record.keywords) ? record.keywords : []
  }));
}

function normalizeTranscriptAnalyses(analyses) {
  if (!Array.isArray(analyses)) return [];
  return analyses.slice(0, TRANSCRIPT_ANALYSIS_LIMIT).map((analysis, index) => ({
    id: analysis.id || `tr-${Date.now()}-${index}`,
    fileName: analysis.fileName || "성적증명서.pdf",
    uploadedAt: analysis.uploadedAt || new Date().toISOString(),
    pageCount: Number(analysis.pageCount) || 0,
    textLength: Number(analysis.textLength) || 0,
    textPreview: analysis.textPreview || "",
    advisorNote: analysis.advisorNote || "",
    matchedModules: Array.isArray(analysis.matchedModules)
      ? analysis.matchedModules.filter((match) => byId(MODULES, match.moduleId)).map((match) => ({
        moduleId: match.moduleId,
        sourceTitle: match.sourceTitle || byId(MODULES, match.moduleId)?.title || "",
        year: Number(match.year) || fallbackCompletionRecord(match.moduleId).year,
        semester: COMPLETION_SEMESTERS.includes(match.semester) ? match.semester : fallbackCompletionRecord(match.moduleId).semester,
        confidence: match.confidence || "중간"
      }))
      : [],
    trackSummaries: Array.isArray(analysis.trackSummaries) ? analysis.trackSummaries.map((summary) => ({
      trackId: summary.trackId,
      matched: Number(summary.matched) || 0,
      total: Number(summary.total) || 0,
      rate: Number(summary.rate) || 0,
      status: summary.status || "탐색",
      missingModuleIds: Array.isArray(summary.missingModuleIds) ? summary.missingModuleIds : [],
      pblModuleIds: Array.isArray(summary.pblModuleIds) ? summary.pblModuleIds : []
    })).filter((summary) => byId(TRACKS, summary.trackId)) : []
  }));
}

function fallbackCompletionRecord(moduleId, index = 0) {
  const moduleInfo = MODULES.find((m) => m.id === moduleId);
  const year = moduleInfo?.type === "몰입형" ? 2026 : moduleInfo?.stage === "초급" ? 2024 : moduleInfo?.stage === "중급" ? 2025 : 2026;
  const semester = moduleInfo?.type === "몰입형" ? "계절학기" : COMPLETION_SEMESTERS[index % 2];
  return { moduleId, year, semester };
}

function loadStudents() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return cloneStudentList(SAMPLE_STUDENTS);
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : cloneStudentList(SAMPLE_STUDENTS);
  } catch {
    return cloneStudentList(SAMPLE_STUDENTS);
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.students));
}

function byId(list, id) {
  return list.find((item) => item.id === id);
}

function selectedStudent() {
  return byId(state.students, state.selectedStudentId) || state.students[0];
}

function trackById(id) {
  return byId(TRACKS, id) || TRACKS[0];
}

function h(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(name) {
  const paths = {
    dashboard: '<path d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z"/>',
    users: '<path d="M16 11a4 4 0 1 0-3.4-6.1"/><path d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M2 21a6 6 0 0 1 12 0"/><path d="M14 16.4A6 6 0 0 1 22 21"/>',
    history: '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v6h6"/><path d="M12 7v5l3 2"/>',
    map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15"/><path d="M15 6v15"/>',
    spark: '<path d="M12 2 9.5 8.8 3 11.5l6.5 2.7L12 21l2.5-6.8 6.5-2.7-6.5-2.7L12 2Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    check: '<path d="m20 6-11 11-5-5"/>',
    upload: '<path d="M12 21V9"/><path d="m7 14 5-5 5 5"/><path d="M5 3h14"/>',
    download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
    reset: '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v6h6"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>'
  };
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.dashboard}</svg>`;
}

function render() {
  const app = document.getElementById("app");
  if (document.body) document.body.classList.toggle("modal-open", Boolean(state.courseModal || state.infoModal || state.transcriptReview));
  app.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">${icon("spark")}</div>
          <div>
            <h1 class="brand-title">PNU 부트캠프</h1>
            <p class="brand-subtitle">훈련생 이수·상담 관리</p>
          </div>
        </div>
        <nav aria-label="주요 메뉴">
          <ul class="nav-list">
            ${navButton("dashboard", "대시보드", "dashboard")}
            ${navButton("students", "학생관리", "users")}
            ${navButton("history", "수강이력", "history")}
            ${navButton("curriculum", "트랙맵", "map")}
            ${navButton("recommend", "추천", "spark")}
          </ul>
        </nav>
        <div class="sidebar-quick-upload">
          <input id="sidebar-transcript-input" class="file-hidden" type="file" accept="application/pdf" />
          <button class="sidebar-upload-button" type="button" data-action="open-sidebar-transcript-upload" ${state.transcriptUploadBusy ? "disabled" : ""}>
            ${icon("upload")}
            <span>${state.transcriptUploadBusy ? "분석 중" : "성적증명서 업로드"}</span>
          </button>
          <p>PDF 학생정보 기준으로 기존 학생을 찾고, 없으면 신규 등록합니다.</p>
        </div>
        <div class="sidebar-footer">
          7개 트랙의 초급·중급·고급 교과형 과정과 중급형·고급형 몰입형 PBL을 학생별 모듈 단위로 추적합니다.
        </div>
      </aside>
      <main class="main">
        ${renderTopbar()}
        <div id="global-search-results-slot">${renderGlobalSearchResults()}</div>
        ${renderView()}
      </main>
    </div>
    ${renderCourseGroupModal()}
    ${renderInfoModal()}
    ${renderTranscriptReviewModal()}
  `;
}

function navButton(view, label, iconName) {
  return `
    <li>
      <button class="nav-button ${state.view === view ? "is-active" : ""}" data-action="set-view" data-view="${view}">
        ${icon(iconName)} <span>${label}</span>
      </button>
    </li>
  `;
}

function renderTopbar() {
  const studentOptions = state.students
    .map((s) => `<option value="${h(s.id)}" ${s.id === selectedStudent().id ? "selected" : ""}>${h(s.name)} · ${h(trackById(s.targetTrack).name)}</option>`)
    .join("");

  return `
    <header class="topbar">
      <div>
        <p class="page-kicker">부산대학교 부트캠프 교과·몰입형 관리 시스템</p>
        <h2 class="page-title">${h(pageTitle())}</h2>
      </div>
      <div class="topbar-search" role="search">
        <label class="global-search-box" for="global-search-input">
          ${icon("search")}
          <input id="global-search-input" type="search" value="${h(state.globalSearch)}" placeholder="학생명, 학과, 교과목, 트랙 검색" aria-label="학생명, 학과, 교과목, 트랙 검색" autocomplete="off" />
        </label>
        <button class="search-clear-button" type="button" data-action="clear-global-search">초기화</button>
      </div>
      <div class="topbar-actions">
        <select id="global-student-select" class="select" aria-label="학생 선택">${studentOptions}</select>
        <button class="button secondary" data-action="export-csv" title="학생 데이터를 CSV로 내보내기">${icon("download")}CSV</button>
      </div>
    </header>
  `;
}

function renderGlobalSearchResults() {
  const query = state.globalSearch.trim();
  if (!query) return "";

  const results = globalSearchResults(query);
  const total = results.students.length + results.tracks.length + results.modules.length;
  const queryLabel = h(query);

  return `
    <section class="panel global-search-panel" aria-label="통합 검색 결과">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">통합 검색 결과</h3>
          <p class="panel-subtitle">"${queryLabel}" 검색어와 연결된 학생, 트랙, 교과목입니다.</p>
        </div>
        <button class="button ghost" type="button" data-action="clear-global-search">닫기</button>
      </div>
      <div class="panel-body">
        ${total ? `
          <div class="global-search-grid">
            ${renderGlobalSearchSection("학생", results.students, renderStudentSearchResult)}
            ${renderGlobalSearchSection("트랙", results.tracks, renderTrackSearchResult)}
            ${renderGlobalSearchSection("교과목·모듈", results.modules, renderModuleSearchResult)}
          </div>
        ` : `<div class="empty">검색 결과가 없습니다. 학생명, 학과명, 교과목명, 트랙명을 다른 표현으로 입력해 보세요.</div>`}
      </div>
    </section>
  `;
}

function renderGlobalSearchSection(title, items, renderer) {
  return `
    <section class="search-result-section">
      <div class="search-result-section-title">
        <strong>${h(title)}</strong>
        <span>${items.length}건</span>
      </div>
      <div class="search-result-list">
        ${items.length ? items.map(renderer).join("") : `<div class="search-empty">관련 자료 없음</div>`}
      </div>
    </section>
  `;
}

function renderStudentSearchResult(studentInfo) {
  const track = trackById(studentInfo.targetTrack);
  const completedTitles = (studentInfo.completedModules || [])
    .slice(0, 3)
    .map((moduleId) => byId(MODULES, moduleId)?.title)
    .filter(Boolean);
  const transcriptCount = (studentInfo.transcriptAnalyses || []).length;
  return `
    <button class="search-result-row" type="button" data-action="open-search-student" data-id="${h(studentInfo.id)}">
      <span class="search-result-main">${h(studentInfo.name)} <small>${h(studentInfo.major)} · ${h(studentInfo.grade)}학년</small></span>
      <span class="search-result-meta">${h(track.name)} · 이수율 ${completionRate(studentInfo, studentInfo.targetTrack)}%</span>
      <span class="search-result-tags">
        <span class="badge ${riskClass(studentInfo.risk)}">${h(studentInfo.risk)}</span>
        <span class="badge">${h(studentInfo.status)}</span>
        ${transcriptCount ? `<span class="badge success">성적표 ${transcriptCount}건</span>` : ""}
      </span>
      ${completedTitles.length ? `<span class="search-result-note">이수: ${completedTitles.map(h).join(", ")}</span>` : ""}
    </button>
  `;
}

function renderTrackSearchResult(track) {
  const students = state.students.filter((studentInfo) => studentInfo.targetTrack === track.id);
  const avgRate = students.length
    ? Math.round(students.reduce((sum, studentInfo) => sum + completionRate(studentInfo, track.id), 0) / students.length)
    : 0;
  return `
    <button class="search-result-row" type="button" data-action="open-search-track" data-track="${h(track.id)}">
      <span class="search-result-main"><span class="track-dot" style="--track-color:${track.color}"></span>${h(track.name)} <small>${h(track.group)}</small></span>
      <span class="search-result-meta">${h(track.target)} · 관리 학생 ${students.length}명 · 평균 ${avgRate}%</span>
      <span class="search-result-note">${h(track.summary)}</span>
    </button>
  `;
}

function renderModuleSearchResult(moduleInfo) {
  const trackNames = moduleInfo.trackIds.map((trackId) => trackById(trackId).name).join(", ");
  const completedStudents = state.students.filter((studentInfo) => (studentInfo.completedModules || []).includes(moduleInfo.id)).length;
  return `
    <button class="search-result-row" type="button" data-action="open-search-module" data-module="${h(moduleInfo.id)}">
      <span class="search-result-main">${h(moduleInfo.title)} <small>${h(moduleInfo.type)} · ${h(moduleInfo.stage)}</small></span>
      <span class="search-result-meta">${h(moduleInfo.semester)} · 이수 학생 ${completedStudents}명</span>
      <span class="search-result-tags">${moduleInfo.tags.map((tag) => `<span class="badge">${h(tag)}</span>`).join("")}</span>
      <span class="search-result-note">${h(trackNames)}</span>
    </button>
  `;
}

function globalSearchResults(query) {
  const studentMatches = state.students
    .map((studentInfo) => ({ item: studentInfo, score: searchScore(studentSearchText(studentInfo), query) }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name, "ko"))
    .slice(0, 8)
    .map((result) => result.item);

  const trackMatches = TRACKS
    .map((track) => ({ item: track, score: searchScore(trackSearchText(track), query) }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name, "ko"))
    .slice(0, 7)
    .map((result) => result.item);

  const moduleMatches = MODULES
    .map((moduleInfo) => ({ item: moduleInfo, score: searchScore(moduleSearchText(moduleInfo), query) }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || moduleSort(a.item, b.item))
    .slice(0, 10)
    .map((result) => result.item);

  return { students: studentMatches, tracks: trackMatches, modules: moduleMatches };
}

function studentSearchText(studentInfo) {
  const track = trackById(studentInfo.targetTrack);
  const completedTitles = (studentInfo.completedModules || [])
    .map((moduleId) => byId(MODULES, moduleId)?.title)
    .filter(Boolean);
  const transcriptText = (studentInfo.transcriptAnalyses || [])
    .flatMap((analysis) => [
      analysis.fileName,
      analysis.advisorNote,
      ...(analysis.matchedModules || []).map((match) => match.title || byId(MODULES, match.moduleId)?.title || "")
    ])
    .filter(Boolean);
  return [
    studentInfo.name,
    studentInfo.studentNumber,
    studentInfo.major,
    `${studentInfo.grade}학년`,
    studentInfo.interests,
    studentInfo.status,
    studentInfo.risk,
    studentInfo.memo,
    track.name,
    track.group,
    track.target,
    track.summary,
    ...completedTitles,
    ...transcriptText
  ].join(" ");
}

function trackSearchText(track) {
  const modules = MODULES.filter((moduleInfo) => moduleInfo.trackIds.includes(track.id)).map((moduleInfo) => moduleInfo.title);
  return [
    track.name,
    track.group,
    track.target,
    track.summary,
    ...(track.keywords || []),
    ...modules
  ].join(" ");
}

function moduleSearchText(moduleInfo) {
  return [
    moduleInfo.title,
    moduleInfo.type,
    moduleInfo.stage,
    moduleInfo.semester,
    ...(moduleInfo.tags || []),
    ...moduleInfo.trackIds.map((trackId) => {
      const track = trackById(trackId);
      return `${track.name} ${track.group} ${track.target}`;
    })
  ].join(" ");
}

function searchScore(text, query) {
  const tokens = searchTokens(query);
  if (!tokens.length) return 0;
  const normalizedText = normalizeSearchText(text);
  if (!tokens.every((token) => normalizedText.includes(token))) return 0;
  return tokens.reduce((score, token) => score + (normalizedText.startsWith(token) ? 6 : 2) + Math.min(6, token.length), 0);
}

function searchTokens(query) {
  return String(query || "")
    .trim()
    .split(/\s+/)
    .map(normalizeSearchText)
    .filter(Boolean);
}

function normalizeSearchText(value) {
  return normalizeCourseText(value);
}

function updateGlobalSearchResultsSlot() {
  const slot = document.getElementById("global-search-results-slot");
  if (slot) slot.innerHTML = renderGlobalSearchResults();
}

function pageTitle() {
  return {
    dashboard: "운영 대시보드",
    students: "관리자 학생관리",
    history: "모듈 단위 수강이력",
    curriculum: "트랙별 이수체계",
    recommend: "트랙·몰입형 추천"
  }[state.view];
}

function renderView() {
  if (state.view === "students") return renderStudents();
  if (state.view === "history") return renderHistory();
  if (state.view === "curriculum") return renderCurriculum();
  if (state.view === "recommend") return renderRecommend();
  return renderDashboard();
}

function renderDashboard() {
  const dashboardRows = dashboardStudents();
  const total = dashboardRows.length;
  const avg = total ? Math.round(dashboardRows.reduce((sum, s) => sum + dashboardCompletionRate(s, s.targetTrack), 0) / total) : 0;
  const attention = dashboardRows.filter((s) => s.risk === "높음" || s.status === "관찰 필요").length;
  const pblReady = dashboardRows.filter((s) => recommendationFor(s).pblReady).length;
  const counselingRows = dashboardRows.slice().sort((a, b) => riskScore(b.risk) - riskScore(a.risk));

  return `
    <section class="view">
      ${renderCurrentTrackOverview(dashboardRows)}
      <div class="toolbar dashboard-filterbar">
        <div>
          <h3 class="panel-title">대시보드 기준</h3>
          <p class="panel-subtitle">${h(dashboardCriteriaLabel())} 기준으로 이수 현황을 집계합니다.</p>
        </div>
        <div class="filter-group">
          <select id="dashboard-year-filter" class="select" aria-label="대시보드 연도">
            ${option("all", "전체 연도", state.dashboardYear)}
            ${COMPLETION_YEARS.map((year) => option(String(year), `${year}년`, state.dashboardYear)).join("")}
          </select>
          <select id="dashboard-semester-filter" class="select" aria-label="대시보드 학기">
            ${option("all", "전체 학기", state.dashboardSemester)}
            ${COMPLETION_SEMESTERS.map((semester) => option(semester, semester, state.dashboardSemester)).join("")}
          </select>
          <select id="dashboard-stage-filter" class="select" aria-label="대시보드 과정 단계">
            ${DASHBOARD_STAGE_OPTIONS.map((item) => option(item.id, item.label, state.dashboardStage)).join("")}
          </select>
        </div>
      </div>
      <div class="grid kpi">
        ${kpi("students", "관리 학생", `${total}명`, `${dashboardCriteriaLabel()} 활동 학생`, "#0b3a75")}
        ${kpi("completion", "평균 이수율", `${avg}%`, `${dashboardCriteriaLabel()} 진행률`, "#0f9f8f")}
        ${kpi("attention", "상담 우선", `${attention}명`, `${dashboardCriteriaLabel()} 추적 대상`, "#c9364c")}
        ${kpi("pbl", "PBL 추천 가능", `${pblReady}명`, `${dashboardStageLabel()} 기반 확보`, "#6b4aa0")}
      </div>
      ${renderTranscriptDashboard()}
      ${renderDashboardDrilldown()}
      <div class="grid two">
        <section class="panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">트랙별 목표 학생 현황</h3>
              <p class="panel-subtitle">${h(dashboardCriteriaLabel())} 기준으로 목표 트랙 이수율을 봅니다.</p>
            </div>
          </div>
          <div class="panel-body">
            <div class="track-list">
              ${TRACKS.map(renderTrackProgress).join("")}
            </div>
          </div>
        </section>
        <section class="panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">상담 우선순위</h3>
              <p class="panel-subtitle">다음 과정 안내가 필요한 학생입니다.</p>
            </div>
          </div>
          <div class="panel-body">
            <div class="student-list counseling-priority-list">
              ${paginate(counselingRows, state.dashboardCounselingPage, DASHBOARD_PAGE_SIZE).map(renderCounselingRow).join("")}
            </div>
            ${renderNumberPagination("dashboard-counseling-page", state.dashboardCounselingPage, Math.ceil(counselingRows.length / DASHBOARD_PAGE_SIZE), counselingRows.length)}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderCurrentTrackOverview(rows) {
  return `
    <div class="course-dashboard-stack">
      ${renderCourseStageDashboard({
        title: "중급과정 대시보드",
        stage: "중급",
        groups: INTERMEDIATE_DASHBOARD_GROUPS,
        rows,
        gridClass: "is-intermediate",
        subtitle: "중급형 몰입형은 네이버 커넥트재단 AI 스프린트 PBL을 공통 운영하며, 코어AI트랙은 4개 세부 모듈을 통합 관리합니다."
      })}
      ${renderCourseStageDashboard({
        title: "고급과정 대시보드",
        stage: "고급",
        groups: ADVANCED_DASHBOARD_GROUPS,
        rows,
        gridClass: "is-advanced",
        subtitle: "고급형 몰입형은 클라우드 AI PBL, 온디바이스 AI PBL, 로보틱스 AI PBL, 생성형 AI PBL, XR PBL, AI융합보안 PBL, 산업AI PBL 7개 과목입니다."
      })}
    </div>
  `;
}

function renderTranscriptDashboard() {
  const rows = latestTranscriptRows();
  const uploadedStudents = rows.length;
  const matchedTotal = rows.reduce((sum, row) => sum + row.analysis.matchedModules.length, 0);
  const avgMatch = uploadedStudents
    ? Math.round(rows.reduce((sum, row) => sum + (row.analysis.trackSummaries[0]?.rate || 0), 0) / uploadedStudents)
    : 0;
  const pblCandidates = rows.filter((row) => (row.analysis.trackSummaries[0]?.pblModuleIds || []).length > 0).length;

  return `
    <section class="panel transcript-dashboard-panel">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">성적증명서 매핑 현황</h3>
          <p class="panel-subtitle">학생이 업로드한 PDF에서 교과목을 추출해 부트캠프 트랙 모듈과 매핑한 결과입니다.</p>
        </div>
      </div>
      <div class="panel-body">
        <div class="transcript-stat-grid">
          <div><span>업로드 학생</span><strong>${uploadedStudents}명</strong></div>
          <div><span>매핑 교과</span><strong>${matchedTotal}개</strong></div>
          <div><span>평균 최고 트랙률</span><strong>${avgMatch}%</strong></div>
          <div><span>PBL 상담 가능</span><strong>${pblCandidates}명</strong></div>
        </div>
        ${rows.length
          ? `<div class="transcript-dashboard-list">${rows.slice(0, 6).map(renderTranscriptDashboardRow).join("")}</div>`
          : `<div class="empty">아직 업로드된 성적증명서 분석 결과가 없습니다. 학생관리에서 PDF를 업로드하면 이곳에 표시됩니다.</div>`}
      </div>
    </section>
  `;
}

function latestTranscriptRows() {
  return state.students
    .map((student) => ({ student, analysis: latestTranscriptAnalysis(student) }))
    .filter((row) => row.analysis)
    .sort((a, b) => new Date(b.analysis.uploadedAt) - new Date(a.analysis.uploadedAt));
}

function renderTranscriptDashboardRow({ student, analysis }) {
  const top = analysis.trackSummaries[0];
  const track = top ? trackById(top.trackId) : trackById(student.targetTrack);
  const pblLabels = (top?.pblModuleIds || []).map((id) => byId(MODULES, id)?.title).filter(Boolean).slice(0, 2);
  return `
    <button class="transcript-dashboard-row" type="button" data-action="select-student" data-id="${h(student.id)}">
      <span>
        <strong>${h(student.name)}</strong>
        <small>${h(student.major)} · ${h(student.grade)}학년</small>
      </span>
      <span class="track-chip"><span class="track-dot" style="--track-color:${track.color}"></span>${h(track.name)}</span>
      <span><strong>${top?.rate || 0}%</strong><small>${analysis.matchedModules.length}개 교과 매핑</small></span>
      <span class="badge-row">
        <span class="badge ${top?.rate >= 70 ? "success" : "warning"}">${h(top?.status || "분석 필요")}</span>
        ${pblLabels.map((label) => `<span class="badge">${h(label)}</span>`).join("")}
      </span>
    </button>
  `;
}

function renderCourseStageDashboard({ title, stage, groups, rows, gridClass, subtitle }) {
  const immersiveStage = immersiveStageForCourse(stage);
  const scopedRows = courseGroupRows(rows, groups);
  const activeRows = scopedRows.filter((student) => student.status === "진행중");
  const totalActive = activeRows.length;
  const pblReady = activeRows.filter((student) => recommendationFor(student).pblReady).length;
  const curriculumAvg = courseTypeAverage(activeRows, "교과형", stage);
  const immersiveAvg = courseTypeAverage(activeRows, "몰입형", immersiveStage);

  return `
    <section class="panel current-track-overview course-stage-dashboard">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">${h(title)}</h3>
          <p class="panel-subtitle">${h(dashboardTermLabel())} 기준 진행중 학생 ${totalActive}명 · 교과형 평균 ${formatRate(curriculumAvg)} · 몰입형 평균 ${formatRate(immersiveAvg)} · PBL 추천 가능 ${pblReady}명</p>
          <p class="panel-subtitle course-dashboard-subtitle">${h(subtitle)}</p>
        </div>
      </div>
      <div class="panel-body">
        <div class="course-dashboard-grid ${h(gridClass)}">
          ${groups.map((group) => renderCourseGroupCard(group, rows, stage, immersiveStage)).join("")}
        </div>
      </div>
    </section>
  `;
}

function courseGroupRows(rows, groups) {
  const ids = new Set(groups.flatMap((group) => group.trackIds));
  return rows.filter((student) => ids.has(student.targetTrack));
}

function renderCourseGroupCard(group, rows, curriculumStage, immersiveStage) {
  const members = rows.filter((student) => group.trackIds.includes(student.targetTrack));
  const active = members.filter((student) => student.status === "진행중");
  const attentionRows = members.filter((student) => student.risk === "높음" || student.status === "관찰 필요");
  const pblReady = active.filter((student) => recommendationFor(student).pblReady).length;
  const curriculumSummary = courseGroupTypeSummary(group, rows, "교과형", curriculumStage, group.moduleLabels || []);
  const immersiveSummary = courseGroupTypeSummary(group, rows, "몰입형", immersiveStage);
  const headlineRate = curriculumSummary.rate ?? immersiveSummary.rate ?? 0;

  return `
    <article class="active-track-card course-group-card" style="--track-color:${group.color}">
      <div class="toolbar">
        <button class="track-chip info-chip" type="button" data-action="open-info-modal" data-kind="track" data-track="${h(group.trackIds[0])}" data-group="${h(group.id)}" data-stage="${h(curriculumStage)}">
          <span class="track-dot" style="--track-color:${group.color}"></span>${h(group.name)}
        </button>
        <strong>${formatRate(headlineRate)}</strong>
      </div>
      <p class="course-card-note">${h(group.description)}</p>
      <div class="course-type-breakdown">
        ${renderCourseTypeSummary(curriculumSummary, group.color, {
          enableDetail: curriculumStage === "고급",
          groupId: group.id,
          stage: curriculumStage
        })}
        ${renderCourseTypeSummary(immersiveSummary, group.color, {
          enableDetail: curriculumStage === "고급",
          groupId: group.id,
          stage: curriculumStage
        })}
      </div>
      <div class="active-track-metrics">
        ${renderCourseGroupMetric(active.length, "진행중", "active", group.id, curriculumStage)}
        ${renderCourseGroupMetric(members.length, "전체", "members", group.id, curriculumStage)}
        ${renderCourseGroupMetric(pblReady, "PBL", "pbl", group.id, curriculumStage)}
        ${renderCourseGroupMetric(attentionRows.length, "상담", "attention", group.id, curriculumStage)}
      </div>
    </article>
  `;
}

function renderCourseGroupMetric(value, label, panel, groupId, stage) {
  return `
    <button class="course-metric-button" type="button" data-action="open-track-modal" data-group="${h(groupId)}" data-stage="${h(stage)}" data-panel="${h(panel)}">
      <strong>${h(value)}</strong>
      <small>${h(label)}</small>
    </button>
  `;
}

function renderInfoModal() {
  if (!state.infoModal) return "";
  if (state.infoModal.kind === "track") return renderTrackInfoModal(state.infoModal);
  if (state.infoModal.kind === "pbl") return renderPblGuideModal(state.infoModal);
  if (state.infoModal.kind === "module") return renderModuleSyllabusModal(state.infoModal);
  return "";
}

function renderTrackInfoModal(modal) {
  const group = dashboardGroupById(modal.groupId, modal.stage);
  const isGroupGuide = group && group.trackIds.length > 1 && group.id !== modal.trackId;
  const track = trackById(modal.trackId);
  const guide = isGroupGuide ? groupGuideContent(group) : trackGuideContent(track);
  const trackIds = isGroupGuide ? group.trackIds : [track.id];
  const rows = dashboardStudents().filter((student) => trackIds.includes(student.targetTrack));
  const active = rows.filter((student) => student.status === "진행중");
  const curriculum = uniqueModules(trackIds, "교과형");
  const immersive = uniqueModules(trackIds, "몰입형");

  return `
    <div class="modal-backdrop" role="presentation">
      <div class="modal-scrim" data-action="close-info-modal" aria-hidden="true"></div>
      <section class="track-modal info-modal" role="dialog" aria-modal="true" aria-labelledby="info-modal-title">
        <div class="modal-header">
          <div>
            <p class="modal-eyebrow">트랙 안내 · ${h(dashboardTermLabel())}</p>
            <h2 id="info-modal-title">${h(guide.name)}</h2>
            <p>${h(guide.overview)}</p>
          </div>
          <button class="button ghost modal-close" type="button" data-action="close-info-modal" aria-label="팝업 닫기">닫기</button>
        </div>
        <div class="modal-body info-modal-body">
          <section class="info-hero" style="--track-color:${guide.color}">
            <div>
              <span class="track-chip"><span class="track-dot" style="--track-color:${guide.color}"></span>${h(guide.name)}</span>
              <h3>${h(guide.goal)}</h3>
              <p>${h(guide.overview)}</p>
            </div>
            <div class="info-stat-grid">
              <span><strong>${active.length}</strong><small>진행중</small></span>
              <span><strong>${rows.length}</strong><small>관리 학생</small></span>
              <span><strong>${curriculum.length}</strong><small>교과형</small></span>
              <span><strong>${immersive.length}</strong><small>몰입형</small></span>
            </div>
          </section>
          <div class="info-grid two">
            ${renderInfoList("트랙 목표 역량", guide.competencies)}
            ${renderInfoList("이수 후 기대 산출물", guide.outcomes)}
          </div>
          <section class="info-section">
            <div class="section-heading">
              <h3 class="panel-title">연계 교과목</h3>
              <p class="panel-subtitle">트랙 안내 상담 시 함께 확인할 교과형·몰입형 모듈입니다.</p>
            </div>
            <div class="info-module-columns">
              <div>
                <h4>교과형</h4>
                <div class="course-module-pills">
                  ${curriculum.map((moduleInfo) => renderCourseModulePill({ label: moduleInfo.title, moduleId: moduleInfo.id }, "교과형")).join("") || `<span>교과형 모듈 없음</span>`}
                </div>
              </div>
              <div>
                <h4>몰입형</h4>
                <div class="course-module-pills">
                  ${immersive.map((moduleInfo) => renderCourseModulePill({ label: moduleInfo.title, moduleId: moduleInfo.id }, "몰입형")).join("") || `<span>몰입형 모듈 없음</span>`}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  `;
}

function renderModuleSyllabusModal(modal) {
  const moduleInfo = byId(MODULES, modal.moduleId);
  if (!moduleInfo) return "";
  const syllabus = moduleSyllabus(moduleInfo);
  const trackNames = moduleInfo.trackIds.map((trackId) => trackById(trackId).name).join(", ");

  return `
    <div class="modal-backdrop" role="presentation">
      <div class="modal-scrim" data-action="close-info-modal" aria-hidden="true"></div>
      <section class="track-modal info-modal" role="dialog" aria-modal="true" aria-labelledby="syllabus-modal-title">
        <div class="modal-header">
          <div>
            <p class="modal-eyebrow">교과목 수업계획서 · ${h(moduleInfo.stage)}</p>
            <h2 id="syllabus-modal-title">${h(moduleInfo.title)}</h2>
            <p>${h(moduleInfo.type)} · 권장 ${h(moduleInfo.semester)} · 연계 트랙: ${h(trackNames)}</p>
          </div>
          <button class="button ghost modal-close" type="button" data-action="close-info-modal" aria-label="팝업 닫기">닫기</button>
        </div>
        <div class="modal-body info-modal-body">
          <section class="info-hero compact" style="--track-color:${trackById(moduleInfo.trackIds[0]).color}">
            <div>
              <span class="badge-row">${moduleInfo.tags.map((tag) => `<span class="badge">${h(tag)}</span>`).join("")}</span>
              <h3>${h(syllabus.summary)}</h3>
              <p>${h(syllabus.advisorUse)}</p>
            </div>
          </section>
          <div class="info-grid two">
            ${renderInfoList("수업 목표", syllabus.objectives)}
            ${renderInfoList("평가 및 산출물", syllabus.evaluation)}
          </div>
          <section class="info-section">
            <div class="section-heading">
              <h3 class="panel-title">주차별 운영 계획</h3>
              <p class="panel-subtitle">교수자 상담 시 학생에게 안내할 수 있는 압축형 수업계획입니다.</p>
            </div>
            <div class="syllabus-week-list">
              ${syllabus.weeks.map((week) => `<div><strong>${h(week.period)}</strong><span>${h(week.topic)}</span></div>`).join("")}
            </div>
          </section>
        </div>
      </section>
    </div>
  `;
}

function renderPblGuideModal(modal) {
  const moduleInfo = byId(MODULES, modal.moduleId);
  if (!moduleInfo) return "";
  const guide = pblGuide(moduleInfo);
  const track = trackById(moduleInfo.trackIds[0]);
  const accentColor = guide.color || track.color;
  const pblLabel = guide.label || `${track.name} 몰입형`;
  const prepModules = curriculumModules(track.id).filter((module) => module.stage !== "초급").slice(0, 4);
  const operationItems = guide.operation || prepModules.map((module) => `${module.title} (${module.stage})`);
  const operationTitle = guide.operation ? "운영 정보" : "상담 시 확인할 준비 교과";
  const flowItems = guide.flow || ["선행 교과 이수 확인", "기업형 문제 정의와 팀 빌딩", "멘토링 기반 프로토타입 제작", "성과 발표와 포트폴리오 정리"];

  return `
    <div class="modal-backdrop" role="presentation">
      <div class="modal-scrim" data-action="close-info-modal" aria-hidden="true"></div>
      <section class="track-modal info-modal pbl-info-modal" role="dialog" aria-modal="true" aria-labelledby="pbl-modal-title">
        <div class="modal-header">
          <div>
            <p class="modal-eyebrow">몰입형 PBL 안내자료 · ${h(moduleInfo.stage)}</p>
            <h2 id="pbl-modal-title">${h(moduleInfo.title)}</h2>
            <p>${h(guide.project)}</p>
          </div>
          <button class="button ghost modal-close" type="button" data-action="close-info-modal" aria-label="팝업 닫기">닫기</button>
        </div>
        <div class="modal-body info-modal-body">
          <section class="pbl-company-hero" style="--track-color:${accentColor}">
            <div>
              <span class="track-chip"><span class="track-dot" style="--track-color:${accentColor}"></span>${h(pblLabel)}</span>
              <h3>${h(guide.heroTitle || "빅테크 실무 스택을 경험하는 집중 프로젝트")}</h3>
              <p>${h(guide.project)}</p>
            </div>
            <div class="company-grid">
              ${guide.companies.map((company) => `
                <article>
                  <strong>${h(company.name)}</strong>
                  <span>${h(company.focus)}</span>
                </article>
              `).join("")}
            </div>
          </section>
          <div class="info-grid two">
            ${renderInfoList("참여 혜택", guide.benefits)}
            ${renderInfoList(operationTitle, operationItems)}
          </div>
          ${guide.evaluation ? renderInfoList("평가 및 산출물", guide.evaluation) : ""}
          <section class="info-section">
            <div class="section-heading">
              <h3 class="panel-title">운영 안내</h3>
              <p class="panel-subtitle">학생에게 PBL 참여 전 기대 결과와 준비도를 설명할 때 활용합니다.</p>
            </div>
            <div class="pbl-guide-flow">
              ${flowItems.map((item, index) => `<div><strong>${index + 1}</strong><span>${h(item)}</span></div>`).join("")}
            </div>
          </section>
        </div>
      </section>
    </div>
  `;
}

function renderInfoList(title, items) {
  return `
    <section class="info-section">
      <h3 class="panel-title">${h(title)}</h3>
      <ul class="info-list">
        ${items.map((item) => `<li>${h(item)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function trackGuideContent(track) {
  const guide = TRACK_GUIDES[track.id] || {};
  return {
    name: track.name,
    color: track.color,
    goal: guide.goal || `${track.name} 관련 AI 실무 역량을 체계적으로 확보합니다.`,
    overview: guide.overview || track.summary,
    competencies: guide.competencies || track.keywords,
    outcomes: guide.outcomes || ["트랙별 이수 포트폴리오", "PBL 진입 상담 자료", "전공 연계 역량 정리"]
  };
}

function groupGuideContent(group) {
  return {
    name: group.name,
    color: group.color,
    goal: "코어AI 세부 모듈을 통합 관리해 학생의 중급 진입 방향을 빠르게 판단합니다.",
    overview: group.description,
    competencies: ["클라우드·피지컬 AI 기반 이해", "생성형 AI 모델 활용", "XR공간컴퓨팅 응용", "AI융합보안 기초"],
    outcomes: ["세부 트랙 선택 상담", "고급 교과 진입 계획", "몰입형 PBL 추천 근거"]
  };
}

function uniqueModules(trackIds, type) {
  const map = new Map();
  trackIds.forEach((trackId) => {
    MODULES
      .filter((moduleInfo) => moduleInfo.type === type && moduleInfo.trackIds.includes(trackId))
      .forEach((moduleInfo) => map.set(moduleInfo.id, moduleInfo));
  });
  return [...map.values()].sort(moduleSort);
}

function moduleSyllabus(moduleInfo) {
  const trackNames = moduleInfo.trackIds.map((trackId) => trackById(trackId).name).join(", ");
  const tagText = moduleInfo.tags.join(", ");
  return {
    summary: `${moduleInfo.title}은 ${trackNames} 트랙의 ${moduleInfo.stage} ${moduleInfo.type} 모듈로, ${tagText} 역량을 다룹니다.`,
    advisorUse: `${moduleInfo.semester} 권장 과목입니다. 학생의 선행 이수 과목과 목표 트랙을 확인한 뒤 다음 단계 교과 또는 PBL 진입 가능성을 상담하세요.`,
    objectives: [
      `${moduleInfo.title}의 핵심 개념과 적용 흐름을 설명할 수 있다.`,
      `${tagText} 관련 실습을 통해 트랙별 문제를 해결할 수 있다.`,
      `이수 결과를 바탕으로 ${trackNames} 후속 교과 또는 몰입형 PBL 참여 계획을 세울 수 있다.`
    ],
    evaluation: [
      "출석·참여 20%",
      "실습 과제 35%",
      "중간 점검 또는 퀴즈 20%",
      "최종 프로젝트·리포트 25%"
    ],
    weeks: [
      { period: "1-3주", topic: `${moduleInfo.title} 개요와 선행 개념 점검` },
      { period: "4-6주", topic: `${tagText} 핵심 이론과 사례 분석` },
      { period: "7-9주", topic: "데이터·모델·시스템 실습 과제 수행" },
      { period: "10-12주", topic: "트랙별 응용 문제 해결과 결과 개선" },
      { period: "13-15주", topic: "최종 산출물 발표와 다음 교과·PBL 상담" }
    ]
  };
}

function pblGuide(moduleInfo) {
  const fallback = {
    companies: [
      { name: "Big Tech Partner", focus: "실무형 문제 정의와 기술 멘토링" },
      { name: "Cloud/AI Platform", focus: "플랫폼 기반 프로젝트 수행" }
    ],
    project: `${moduleInfo.title}은 트랙 교과 이수 내용을 실제 문제해결 프로젝트로 연결하는 몰입형 과정입니다.`,
    benefits: ["실무형 포트폴리오", "기업형 문제해결 경험", "멘토링 기반 프로젝트 산출물", "후속 진로 상담 자료"]
  };
  return BIG_TECH_PBL_GUIDES[moduleInfo.id] || fallback;
}

function renderCourseGroupModal() {
  if (!state.courseModal) return "";
  if (state.courseModal.type) return renderCourseTypeStatusModal();
  const { groupId, stage } = state.courseModal;
  const group = dashboardGroupById(groupId, stage);
  if (!group) return "";
  const rows = dashboardStudents();
  const immersiveStage = immersiveStageForCourse(stage);
  const members = rows.filter((student) => group.trackIds.includes(student.targetTrack));
  const active = members.filter((student) => student.status === "진행중");
  const attentionRows = members.filter((student) => student.risk === "높음" || student.status === "관찰 필요");
  const pblRows = active.filter((student) => recommendationFor(student).pblReady);
  const selectedPanel = state.courseModal.studentPanel;
  const detailTracks = courseGroupDetailTracks(group);
  const curriculumSummary = courseGroupTypeSummary(group, rows, "교과형", stage, group.moduleLabels || []);
  const immersiveSummary = courseGroupTypeSummary(group, rows, "몰입형", immersiveStage);

  return `
    <div class="modal-backdrop" role="presentation">
      <div class="modal-scrim" data-action="close-track-modal" aria-hidden="true"></div>
      <section class="track-modal" role="dialog" aria-modal="true" aria-labelledby="track-modal-title">
        <div class="modal-header">
          <div>
            <p class="modal-eyebrow">${h(courseStageLabel(stage))} · ${h(dashboardTermLabel())}</p>
            <h2 id="track-modal-title">${h(group.name)} 세부 트랙 이수 현황</h2>
            <p>${h(group.description)} · 세부 트랙 ${detailTracks.length}개</p>
          </div>
          <button class="button ghost modal-close" type="button" data-action="close-track-modal" aria-label="팝업 닫기">닫기</button>
        </div>
        <div class="modal-body">
          <div class="modal-summary-grid">
            ${renderModalStat("관리 학생", `${members.length}명`, "현재 조건 기준", { panel: "members", active: selectedPanel === "members" })}
            ${renderModalStat("진행중", `${active.length}명`, "상담 진행 대상", { panel: "active", active: selectedPanel === "active" })}
            ${renderModalStat("상담 우선", `${attentionRows.length}명`, "위험도 높음/관찰 필요", { panel: "attention", active: selectedPanel === "attention" })}
            ${renderModalStat("PBL 추천", `${pblRows.length}명`, "몰입형 안내 가능", { panel: "pbl", active: selectedPanel === "pbl" })}
            ${renderModalStat("교과형", formatRate(curriculumSummary.rate), `${curriculumSummary.count}개`)}
            ${renderModalStat("몰입형", formatRate(immersiveSummary.rate), `${immersiveSummary.count}개`)}
          </div>
          ${renderModalStudentPanel(selectedPanel, {
            members: { title: "관리 학생 현황", rows: members, note: "현재 조건에 해당하는 전체 학생입니다." },
            active: { title: "진행중 학생 현황", rows: active, note: "상담 진행 대상 학생입니다." },
            attention: { title: "상담 우선 학생 현황", rows: attentionRows, note: "위험도 높음 또는 관찰 필요 상태의 학생입니다." },
            pbl: { title: "PBL 추천 학생 현황", rows: pblRows, note: "몰입형 PBL 안내를 시작할 수 있는 학생입니다." }
          })}
          <div class="track-detail-grid">
            ${detailTracks.map((detail) => renderTrackDetailCard(detail, rows, stage, immersiveStage, group.id)).join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function dashboardGroupById(groupId, stage) {
  const groups = stage === "고급" ? ADVANCED_DASHBOARD_GROUPS : INTERMEDIATE_DASHBOARD_GROUPS;
  return groups.find((group) => group.id === groupId);
}

function courseStageLabel(stage) {
  return stage === "고급" ? "고급과정" : "중급과정";
}

function courseGroupDetailTracks(group) {
  if (group.id === "core-ai") {
    return [
      {
        id: "cloud-physical",
        name: "클라우드·피지컬AI",
        trackIds: ["cloud", "physical"],
        color: "#d9236a",
        description: "클라우드 AI와 피지컬 AI 학생을 통합해 확인"
      },
      {
        id: "generative",
        name: "생성형AI",
        trackIds: ["generative"],
        color: trackById("generative").color,
        description: "생성형 AI 세부 트랙"
      },
      {
        id: "xr",
        name: "XR공간컴퓨팅",
        trackIds: ["xr"],
        color: trackById("xr").color,
        description: "XR공간컴퓨팅 세부 트랙"
      },
      {
        id: "security",
        name: "AI융합보안",
        trackIds: ["security"],
        color: trackById("security").color,
        description: "AI융합보안 세부 트랙"
      }
    ];
  }
  return group.trackIds.map((trackId) => {
    const track = trackById(trackId);
    return {
      id: track.id,
      name: track.name,
      trackIds: [track.id],
      color: track.color,
      description: track.summary
    };
  });
}

function renderTrackDetailCard(detail, rows, curriculumStage, immersiveStage, parentGroupId = "") {
  const members = rows.filter((student) => detail.trackIds.includes(student.targetTrack));
  const active = members.filter((student) => student.status === "진행중");
  const atRisk = active.filter((student) => student.risk === "높음" || student.status === "관찰 필요").length;
  const pblReady = active.filter((student) => recommendationFor(student).pblReady).length;
  const curriculumSummary = courseGroupTypeSummary(detail, rows, "교과형", curriculumStage);
  const immersiveSummary = courseGroupTypeSummary(detail, rows, "몰입형", immersiveStage);

  return `
    <article class="modal-track-card" style="--track-color:${detail.color}">
      <div class="toolbar">
        <span class="track-chip"><span class="track-dot" style="--track-color:${detail.color}"></span>${h(detail.name)}</span>
        <strong>${formatRate(curriculumSummary.rate ?? immersiveSummary.rate)}</strong>
      </div>
      <p class="row-meta">${h(detail.description)}</p>
      <div class="modal-track-metrics">
        <span><strong>${members.length}</strong><small>학생</small></span>
        <span><strong>${active.length}</strong><small>진행중</small></span>
        <span><strong>${pblReady}</strong><small>PBL</small></span>
        <span><strong>${atRisk}</strong><small>상담</small></span>
      </div>
      <div class="course-type-breakdown">
        ${renderCourseTypeSummary(curriculumSummary, detail.color, {
          enableDetail: curriculumStage === "고급",
          groupId: parentGroupId || detail.id,
          detailId: detail.id,
          stage: curriculumStage
        })}
        ${renderCourseTypeSummary(immersiveSummary, detail.color, {
          enableDetail: curriculumStage === "고급",
          groupId: parentGroupId || detail.id,
          detailId: detail.id,
          stage: curriculumStage
        })}
      </div>
    </article>
  `;
}

function renderCourseTypeStatusModal() {
  const modal = state.courseModal;
  const group = courseModalGroup(modal);
  if (!group) return "";
  const rows = dashboardStudents();
  const typeStage = modal.typeStage || (modal.type === "몰입형" ? immersiveStageForCourse(modal.stage) : modal.stage);
  const modules = courseGroupModules(group, modal.type, typeStage);
  const members = rows.filter((student) => group.trackIds.includes(student.targetTrack));
  const progressRows = members
    .map((student) => courseTypeStudentProgress(student, modal.type, typeStage))
    .filter(Boolean)
    .sort((a, b) => a.rate - b.rate || a.student.name.localeCompare(b.student.name, "ko"));
  const activeRows = progressRows.filter((item) => item.student.status === "진행중" && item.rate < 100);
  const completeRows = progressRows.filter((item) => item.rate === 100);
  const notStartedRows = progressRows.filter((item) => item.completed === 0);
  const selectedPanel = modal.studentPanel;
  const avg = progressRows.length
    ? Math.round(progressRows.reduce((sum, item) => sum + item.rate, 0) / progressRows.length)
    : null;

  return `
    <div class="modal-backdrop" role="presentation">
      <div class="modal-scrim" data-action="close-track-modal" aria-hidden="true"></div>
      <section class="track-modal course-type-modal" role="dialog" aria-modal="true" aria-labelledby="course-type-modal-title">
        <div class="modal-header">
          <div>
            <p class="modal-eyebrow">${h(courseStageLabel(modal.stage))} · ${h(group.name)} · ${h(dashboardTermLabel())}</p>
            <h2 id="course-type-modal-title">${h(modal.type)} 이수 현황</h2>
            <p>${h(typeStage)} ${h(modal.type)} 모듈 ${modules.length}개와 이수중인 학생 현황입니다.</p>
          </div>
          <button class="button ghost modal-close" type="button" data-action="close-track-modal" aria-label="팝업 닫기">닫기</button>
        </div>
        <div class="modal-body">
          <div class="modal-summary-grid">
            ${renderModalStat("대상 학생", `${progressRows.length}명`, "모듈 보유 트랙", { panel: "targets", active: selectedPanel === "targets" })}
            ${renderModalStat("평균 이수율", formatRate(avg), `${modal.type} 기준`)}
            ${renderModalStat("이수중", `${activeRows.length}명`, "진행중 상태", { panel: "active", active: selectedPanel === "active" })}
            ${renderModalStat("이수 완료", `${completeRows.length}명`, "100% 이수", { panel: "complete", active: selectedPanel === "complete" })}
            ${renderModalStat("미착수", `${notStartedRows.length}명`, "0% 이수", { panel: "not-started", active: selectedPanel === "not-started" })}
          </div>
          ${renderCourseTypeStudentPanel(selectedPanel, {
            targets: { title: "대상 학생 현황", rows: progressRows, note: "해당 모듈을 가진 트랙의 전체 학생입니다." },
            active: { title: "이수중인 학생 현황", rows: activeRows, note: "진행중 상태이며 아직 100% 이수하지 않은 학생입니다." },
            complete: { title: "이수 완료 학생 현황", rows: completeRows, note: "해당 유형 모듈을 모두 이수한 학생입니다." },
            "not-started": { title: "미착수 학생 현황", rows: notStartedRows, note: "해당 유형 모듈 이수 기록이 없는 학생입니다." }
          })}
          <section class="type-status-section">
            <div class="section-heading">
              <h3 class="panel-title">${h(modal.type)} 모듈별 이수 현황</h3>
              <p class="panel-subtitle">${h(group.name)} ${h(typeStage)} ${h(modal.type)} 과목별 이수율입니다.</p>
            </div>
            <div class="type-module-list">
              ${modules.map((module) => renderTypeModuleStatus(module, members, group.color)).join("") || `<div class="empty">해당 ${h(modal.type)} 모듈이 없습니다.</div>`}
            </div>
          </section>
          ${selectedPanel ? "" : `<section class="type-status-section">
            <div class="section-heading">
              <h3 class="panel-title">이수중인 학생 현황</h3>
              <p class="panel-subtitle">진행중 상태 학생의 ${h(modal.type)} 이수율과 다음 모듈입니다.</p>
            </div>
            <div class="type-student-list">
              ${activeRows.map(renderTypeStudentRow).join("") || `<div class="empty">현재 이수중인 학생이 없습니다.</div>`}
            </div>
          </section>`}
        </div>
      </section>
    </div>
  `;
}

function courseModalGroup(modal) {
  const group = dashboardGroupById(modal.groupId, modal.stage);
  if (!group) return null;
  if (!modal.detailId) return group;
  return courseGroupDetailTracks(group).find((detail) => detail.id === modal.detailId) || group;
}

function courseTypeStudentProgress(student, type, stage) {
  const modules = courseTypeModules(student.targetTrack, type, stage);
  if (!modules.length) return null;
  const completedModules = modules.filter((module) => studentHasDashboardCompletion(student, module.id));
  const pendingModules = modules.filter((module) => !studentHasDashboardCompletion(student, module.id));
  const completed = completedModules.length;
  const rate = Math.round((completed / modules.length) * 100);
  const nextModule = pendingModules[0];
  return {
    student,
    track: trackById(student.targetTrack),
    type,
    stage,
    total: modules.length,
    completed,
    rate,
    completedModules,
    pendingModules,
    nextModule: nextModule?.title || "이수 완료"
  };
}

function renderModalStudentPanel(selectedPanel, panels) {
  const panel = selectedPanel ? panels[selectedPanel] : null;
  if (!panel) return "";
  return `
    <section class="modal-student-panel">
      <div class="section-heading">
        <h3 class="panel-title">${h(panel.title)}</h3>
        <p class="panel-subtitle">${h(panel.note)}</p>
      </div>
      <div class="modal-student-list">
        ${panel.rows.map(renderModalStudentRow).join("") || `<div class="empty">해당 학생이 없습니다.</div>`}
      </div>
    </section>
  `;
}

function renderModalStudentRow(student) {
  const track = trackById(student.targetTrack);
  const rate = dashboardCompletionRate(student, student.targetTrack);
  return `
    <button class="modal-student-row" type="button" data-action="select-student" data-id="${h(student.id)}">
      <span>
        <span class="row-title">${h(student.name)}</span>
        <span class="row-meta">${h(student.major)} · ${h(student.grade)}학년 · ${h(track.name)}</span>
      </span>
      <span class="progress-wrap">
        <span class="progress"><span style="width:${rate}%; --bar-color:${track.color}"></span></span>
        <span class="row-meta">교과형 기준 ${rate}%</span>
      </span>
      <span>
        <span class="badge-row">
          <span class="badge">${h(student.status)}</span>
          <span class="badge ${riskClass(student.risk)}">${h(student.risk)}</span>
        </span>
        <span class="row-meta">다음 상담 ${h(student.nextCounseling)}</span>
      </span>
    </button>
  `;
}

function renderCourseTypeStudentPanel(selectedPanel, panels) {
  const panel = selectedPanel ? panels[selectedPanel] : null;
  if (!panel) return "";
  return `
    <section class="modal-student-panel">
      <div class="section-heading">
        <h3 class="panel-title">${h(panel.title)}</h3>
        <p class="panel-subtitle">${h(panel.note)}</p>
      </div>
      ${renderProgressPanelRows(panel.rows)}
    </section>
  `;
}

function renderProgressPanelRows(rows) {
  return `
    <div class="type-student-list">
      ${rows.map(renderTypeStudentRow).join("") || `<div class="empty">해당 학생이 없습니다.</div>`}
    </div>
  `;
}

function renderTypeModuleStatus(module, students, color) {
  const eligible = students.filter((student) => module.trackIds.includes(student.targetTrack));
  const completed = eligible.filter((student) => studentHasDashboardCompletion(student, module.id));
  const active = eligible.filter((student) => student.status === "진행중" && !studentHasDashboardCompletion(student, module.id));
  const rate = eligible.length ? Math.round((completed.length / eligible.length) * 100) : 0;

  return `
    <article class="type-module-row">
      <span>
        <strong>${h(module.title)}</strong>
        <span class="row-meta">${h(module.stage)} · 권장 ${h(module.semester)} · 대상 ${eligible.length}명</span>
      </span>
      <span class="progress-wrap">
        <span class="progress"><span style="width:${rate}%; --bar-color:${color}"></span></span>
        <span class="row-meta">이수 ${completed.length}명 · 이수중 ${active.length}명</span>
      </span>
      <strong>${rate}%</strong>
    </article>
  `;
}

function renderTypeStudentRow(item) {
  const expanded = state.courseModal?.recommendStudentId === item.student.id;
  return `
    <article class="type-student-row ${expanded ? "is-expanded" : ""}">
      <span>
        <button class="student-name-toggle" type="button" data-action="toggle-student-recommendation" data-id="${h(item.student.id)}" aria-expanded="${expanded}">
          ${h(item.student.name)}
        </button>
        <span class="row-meta">${h(item.student.major)} · ${h(item.student.grade)}학년 · ${h(item.track.name)}</span>
      </span>
      <span class="progress-wrap">
        <span class="progress"><span style="width:${item.rate}%; --bar-color:${item.track.color}"></span></span>
        <span class="row-meta">${item.completed}/${item.total}개 이수</span>
      </span>
      <span>
        <span class="badge-row">
          <span class="badge">${h(item.student.status)}</span>
          <span class="badge ${riskClass(item.student.risk)}">${h(item.student.risk)}</span>
        </span>
        <span class="row-meta">다음: ${h(item.nextModule)}</span>
      </span>
      <strong>${item.rate}%</strong>
      ${item.type === "교과형" ? renderStudentCourseSplit(item) : ""}
      ${expanded ? renderInlineStudentRecommendation(item) : ""}
    </article>
  `;
}

function renderStudentCourseSplit(item) {
  return `
    <div class="student-course-split">
      <div class="student-course-group">
        <strong>이수한 교과목</strong>
        <div class="student-course-pills">
          ${renderCourseNamePills(item.completedModules, "아직 이수한 교과목 없음")}
        </div>
      </div>
      <div class="student-course-group">
        <strong>이수해야 할 교과목</strong>
        <div class="student-course-pills">
          ${renderCourseNamePills(item.pendingModules, "이수해야 할 교과목 없음")}
        </div>
      </div>
    </div>
  `;
}

function renderCourseNamePills(modules, emptyText) {
  if (!modules.length) return `<span class="is-empty">${h(emptyText)}</span>`;
  return modules.map((module) => `<span>${h(module.title)}</span>`).join("");
}

function renderInlineStudentRecommendation(item) {
  const student = item.student;
  const currentTrack = trackById(student.targetTrack);
  const recommendations = [
    stageTypeRecommendation(student, "교과형", "중급"),
    stageTypeRecommendation(student, "몰입형", "중급형"),
    stageTypeRecommendation(student, "교과형", "고급"),
    stageTypeRecommendation(student, "몰입형", "고급형")
  ].filter(Boolean);
  const top = recommendations.slice().sort((a, b) => b.score - a.score)[0];

  return `
    <div class="inline-recommendation-panel">
      <div class="student-recommend-head">
        <span>
          <strong>${h(student.name)} 추천 트랙</strong>
          <span class="row-meta">${h(student.major)} · ${h(student.grade)}학년 · 현재 ${h(currentTrack.name)}</span>
        </span>
        <span class="badge">${h(item.type)} 기준</span>
      </div>
      <div class="recommend-track-grid">
        ${recommendations.map(renderStageTypeRecommendation).join("")}
      </div>
      ${top ? `
        <div class="advisor-brief">
          <strong>교수 상담 포인트</strong>
          <p>${h(advisorBriefFor(student, top))}</p>
        </div>
      ` : `<div class="empty">추천 가능한 트랙 정보가 부족합니다.</div>`}
    </div>
  `;
}

function renderStudentRecommendationCard(item) {
  const student = item.student;
  const currentTrack = trackById(student.targetTrack);
  const recommendations = [
    stageTypeRecommendation(student, "교과형", "중급"),
    stageTypeRecommendation(student, "몰입형", "중급형"),
    stageTypeRecommendation(student, "교과형", "고급"),
    stageTypeRecommendation(student, "몰입형", "고급형")
  ].filter(Boolean);
  const top = recommendations.slice().sort((a, b) => b.score - a.score)[0];

  return `
    <article class="student-recommend-card">
      <div class="student-recommend-head">
        <span>
          <strong>${h(student.name)}</strong>
          <span class="row-meta">${h(student.major)} · ${h(student.grade)}학년 · 현재 ${h(currentTrack.name)}</span>
        </span>
        <span class="badge ${riskClass(student.risk)}">${h(student.risk)}</span>
      </div>
      <div class="recommend-track-grid">
        ${recommendations.map(renderStageTypeRecommendation).join("")}
      </div>
      ${top ? `
        <div class="advisor-brief">
          <strong>상담 포인트</strong>
          <p>${h(advisorBriefFor(student, top))}</p>
        </div>
      ` : `<div class="empty">추천 가능한 트랙 정보가 부족합니다.</div>`}
    </article>
  `;
}

function renderStageTypeRecommendation(rec) {
  return `
    <section class="recommend-track-card" style="--track-color:${rec.track.color}">
      <div class="toolbar">
        <span class="track-chip"><span class="track-dot" style="--track-color:${rec.track.color}"></span>${h(rec.title)}</span>
        <strong>${rec.score}점</strong>
      </div>
      <p class="recommend-main">${h(rec.track.name)} 추천</p>
      <p class="recommend-description">${h(rec.track.summary)}</p>
      <div class="progress"><span style="width:${rec.score}%; --bar-color:${rec.track.color}"></span></div>
      <div class="recommend-reasons">
        ${rec.reasons.map((reason) => `<span>${h(reason)}</span>`).join("")}
      </div>
      <div class="recommend-next">
        <strong>다음 안내</strong>
        <div class="student-course-pills">
          ${renderCourseNamePills(rec.nextModules, "추가 이수 과목 없음")}
        </div>
      </div>
    </section>
  `;
}

function stageTypeRecommendation(student, type, stage) {
  const candidates = TRACKS
    .map((track) => buildStageTypeCandidate(student, track, type, stage))
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.track.name.localeCompare(b.track.name, "ko"));
  return candidates[0] || null;
}

function buildStageTypeCandidate(student, track, type, stage) {
  const modules = courseTypeModules(track.id, type, stage);
  if (!modules.length) return null;
  const completed = modules.filter((module) => studentHasDashboardCompletion(student, module.id));
  const pending = modules.filter((module) => !studentHasDashboardCompletion(student, module.id));
  const progressRate = Math.round((completed.length / modules.length) * 100);
  const priorRate = prerequisiteRateFor(student, track.id, type, stage);
  const majorFit = track.target === "전공무관" || student.major.includes(track.target) || (student.major.includes("인공지능") && track.group === "코어AI트랙");
  const grade = Number(student.grade) || 0;
  const gradeFit = gradeFitsStage(grade, stage);
  const targetFit = student.targetTrack === track.id;
  const interestText = `${student.interests} ${student.major}`.toLowerCase();
  const keywordHits = track.keywords.filter((keyword) => interestText.includes(keyword.toLowerCase())).length;
  const score = Math.min(100, Math.round(
    progressRate * 0.28 +
    priorRate * 0.24 +
    scoreTrack(student, track).score * 0.28 +
    (majorFit ? 9 : 2) +
    (gradeFit ? 7 : 1) +
    (targetFit ? 5 : 0) +
    keywordHits * 2
  ));

  return {
    title: `${stageLabel(stage)} ${type}`,
    track,
    type,
    stage,
    score,
    progressRate,
    priorRate,
    completed,
    pending,
    nextModules: pending.slice(0, 3),
    reasons: recommendationReasons(student, track, type, stage, {
      modules,
      completed,
      progressRate,
      priorRate,
      majorFit,
      gradeFit,
      targetFit,
      keywordHits
    })
  };
}

function prerequisiteRateFor(student, trackId, type, stage) {
  if (type === "몰입형") {
    const baseStage = stage === "고급형" ? "고급" : "중급";
    return courseTypeCompletionRate(student, trackId, "교과형", baseStage) ?? 0;
  }
  if (stage === "고급") return courseTypeCompletionRate(student, trackId, "교과형", "중급") ?? 0;
  const basicModules = curriculumModules(trackId).filter((module) => module.stage === "초급");
  if (!basicModules.length) return 0;
  const done = basicModules.filter((module) => studentHasDashboardCompletion(student, module.id)).length;
  return Math.round((done / basicModules.length) * 100);
}

function gradeFitsStage(grade, stage) {
  if (stage === "고급" || stage === "고급형") return grade >= 3;
  return grade >= 2;
}

function stageLabel(stage) {
  return stage === "중급형" ? "중급" : stage === "고급형" ? "고급" : stage;
}

function recommendationReasons(student, track, type, stage, info) {
  const reasons = [
    `${info.completed.length}/${info.modules.length}개 ${type} 이수`,
    `${student.grade}학년 ${gradeFitsStage(Number(student.grade), stage) ? "진입 가능" : "준비 상담 필요"}`,
    info.majorFit ? `${student.major} 전공 적합` : `${student.major}에서 연계 가능`,
    `선행 이수율 ${info.priorRate}%`
  ];
  if (info.targetFit) reasons.push("현재 목표 트랙과 일치");
  if (info.keywordHits) reasons.push(`관심 키워드 ${info.keywordHits}개 일치`);
  return reasons;
}

function advisorBriefFor(student, rec) {
  const pending = rec.nextModules.map((module) => module.title).join(", ") || "추가 이수 과목 없음";
  const trackShift = student.targetTrack === rec.track.id
    ? "현재 목표 트랙을 유지하며"
    : `현재 목표 트랙과 ${rec.track.name} 추천 결과를 비교하며`;
  const readiness = rec.score >= 75 ? "바로 진입 가능성이 높습니다" : rec.score >= 55 ? "보강 후 진입을 권장합니다" : "기초 보강 상담이 필요합니다";
  return `${student.name} 학생은 ${rec.title}에서 ${rec.track.name} 적합도가 ${rec.score}점입니다. ${trackShift} ${pending} 이수 계획을 확인하세요. 학년, 전공, 선행 이수율을 고려하면 ${readiness}.`;
}

function renderModalStat(label, value, note, options = {}) {
  const clickable = Boolean(options.panel);
  const tag = clickable ? "button" : "div";
  const attrs = clickable ? `type="button" data-action="set-modal-student-panel" data-panel="${h(options.panel)}"` : "";
  return `
    <${tag} class="modal-stat ${clickable ? "is-clickable" : ""} ${options.active ? "is-active" : ""}" ${attrs}>
      <span>${h(label)}</span>
      <strong>${h(value)}</strong>
      <small>${h(note)}</small>
    </${tag}>
  `;
}

function immersiveStageForCourse(stage) {
  return stage === "중급" ? "중급형" : "고급형";
}

function courseGroupTypeSummary(group, rows, type, stage, displayLabels = []) {
  const members = rows.filter((student) => group.trackIds.includes(student.targetTrack));
  const active = members.filter((student) => student.status === "진행중");
  const modules = courseGroupModules(group, type, stage);
  const labels = displayLabels.length ? displayLabels : modules.map((module) => module.title);
  const items = displayLabels.length
    ? displayLabels.map((label) => {
      const matchedModule = modules.find((module) => normalizeSearchText(module.title) === normalizeSearchText(label));
      return { label, moduleId: matchedModule?.id || "", type: matchedModule?.type || type };
    })
    : modules.map((module) => ({ label: module.title, moduleId: module.id, type: module.type }));
  const rates = active
    .map((student) => courseTypeCompletionRate(student, student.targetTrack, type, stage))
    .filter((rate) => rate !== null);
  return {
    type,
    stage,
    count: displayLabels.length || modules.length,
    labels,
    items,
    rate: rates.length ? Math.round(rates.reduce((sum, rate) => sum + rate, 0) / rates.length) : null
  };
}

function courseGroupModules(group, type, stage) {
  const moduleMap = new Map();
  group.trackIds.forEach((trackId) => {
    MODULES
      .filter((module) => module.type === type && module.stage === stage && module.trackIds.includes(trackId))
      .forEach((module) => moduleMap.set(module.id, module));
  });
  return [...moduleMap.values()].sort(moduleSort);
}

function courseTypeModules(trackId, type, stage) {
  return MODULES.filter((module) => module.type === type && module.stage === stage && module.trackIds.includes(trackId)).sort(moduleSort);
}

function courseTypeCompletionRate(student, trackId, type, stage) {
  const list = courseTypeModules(trackId, type, stage);
  if (!list.length) return null;
  const moduleIds = new Set(list.map((module) => module.id));
  if (!dashboardHasTermFilter()) {
    const done = list.filter((module) => student.completedModules.includes(module.id)).length;
    return Math.round((done / list.length) * 100);
  }
  const done = new Set((student.completedRecords || [])
    .filter((record) => moduleIds.has(record.moduleId) && recordMatchesDashboardTerm(record))
    .map((record) => record.moduleId)).size;
  return Math.round((done / list.length) * 100);
}

function studentHasDashboardCompletion(student, moduleId) {
  if (!dashboardHasTermFilter()) return student.completedModules.includes(moduleId);
  return (student.completedRecords || [])
    .some((record) => record.moduleId === moduleId && recordMatchesDashboardTerm(record));
}

function courseTypeAverage(students, type, stage) {
  const rates = students
    .map((student) => courseTypeCompletionRate(student, student.targetTrack, type, stage))
    .filter((rate) => rate !== null);
  if (!rates.length) return null;
  return Math.round(rates.reduce((sum, rate) => sum + rate, 0) / rates.length);
}

function formatRate(rate) {
  return rate === null || rate === undefined ? "해당 없음" : `${rate}%`;
}

function renderCourseTypeSummary(summary, color, options = {}) {
  const empty = summary.count === 0;
  const clickable = Boolean(options.enableDetail);
  const headTag = clickable ? "button" : "div";
  const headAttrs = clickable
    ? `type="button" data-action="open-course-type-modal" data-group="${h(options.groupId)}" data-detail="${h(options.detailId || "")}" data-stage="${h(options.stage)}" data-type="${h(summary.type)}" data-type-stage="${h(summary.stage)}"`
    : "";
  return `
    <section class="course-type-summary ${empty ? "is-empty" : ""}">
      <${headTag} class="course-type-head ${clickable ? "is-clickable" : ""}" ${headAttrs}>
        <span>${h(summary.type)}</span>
        <strong>${empty ? "없음" : `${summary.count}개 · ${formatRate(summary.rate)}`}</strong>
      </${headTag}>
      ${empty
        ? `<p class="course-type-empty">${h(summary.stage)} ${h(summary.type)} 모듈 없음</p>`
        : `<div class="progress" aria-label="${h(summary.stage)} ${h(summary.type)} 이수율"><span style="width:${summary.rate ?? 0}%; --bar-color:${color}"></span></div>
           <div class="course-module-pills">${summary.items.map((item) => renderCourseModulePill(item, summary.type)).join("")}</div>`}
    </section>
  `;
}

function renderCourseModulePill(item, summaryType) {
  if (!item.moduleId) return `<span>${h(item.label)}</span>`;
  const kind = summaryType === "몰입형" ? "pbl" : "module";
  return `
    <button class="module-pill-button" type="button" data-action="open-info-modal" data-kind="${kind}" data-module="${h(item.moduleId)}">
      ${h(item.label)}
    </button>
  `;
}

function renderActiveTrackCard(track, rows) {
  const members = rows.filter((student) => student.targetTrack === track.id);
  const active = members.filter((student) => student.status === "진행중");
  const atRisk = active.filter((student) => student.risk === "높음" || student.status === "관찰 필요").length;
  const pblReady = active.filter((student) => recommendationFor(student).pblReady).length;
  const avg = active.length
    ? Math.round(active.reduce((sum, student) => sum + dashboardCompletionRate(student, track.id), 0) / active.length)
    : 0;
  const intermediateAvg = stageAverage(active, track.id, "중급");
  const advancedAvg = stageAverage(active, track.id, "고급");

  return `
    <article class="active-track-card" style="--track-color:${track.color}">
      <div class="toolbar">
        <span class="track-chip"><span class="track-dot" style="--track-color:${track.color}"></span>${h(track.name)}</span>
        <strong>${avg}%</strong>
      </div>
      <div class="progress" aria-label="${h(track.name)} 진행중 평균 이수율"><span style="width:${avg}%; --bar-color:${track.color}"></span></div>
      <div class="stage-progress-list">
        ${renderStageProgressMini("중급", intermediateAvg, track.color)}
        ${renderStageProgressMini("고급", advancedAvg, track.color)}
      </div>
      <div class="active-track-metrics">
        <span><strong>${active.length}</strong><small>진행중</small></span>
        <span><strong>${members.length}</strong><small>전체</small></span>
        <span><strong>${pblReady}</strong><small>PBL</small></span>
        <span><strong>${atRisk}</strong><small>상담</small></span>
      </div>
    </article>
  `;
}

function kpi(id, label, value, note, color) {
  const active = state.dashboardDrilldown === id;
  return `
    <button class="kpi-card ${active ? "is-active" : ""}" type="button" data-action="toggle-dashboard-drilldown" data-panel="${h(id)}" aria-expanded="${active}" style="border-left-color:${color}">
      <p class="kpi-label">${h(label)}</p>
      <p class="kpi-value">${h(value)}</p>
      <p class="kpi-note">${h(note)}</p>
    </button>
  `;
}

function dashboardTermLabel() {
  const year = state.dashboardYear === "all" ? "전체 연도" : `${state.dashboardYear}년`;
  const semester = state.dashboardSemester === "all" ? "전체 학기" : state.dashboardSemester;
  return `${year} · ${semester}`;
}

function dashboardStageLabel() {
  return DASHBOARD_STAGE_OPTIONS.find((item) => item.id === state.dashboardStage)?.label || "전체 과정";
}

function dashboardCriteriaLabel() {
  return `${dashboardTermLabel()} · ${dashboardStageLabel()}`;
}

function dashboardSelectedStage() {
  return DASHBOARD_STAGE_OPTIONS.find((item) => item.id === state.dashboardStage)?.stage || null;
}

function dashboardModules(trackId) {
  const selectedStage = dashboardSelectedStage();
  return curriculumModules(trackId).filter((module) => !selectedStage || module.stage === selectedStage);
}

function dashboardHasTermFilter() {
  return state.dashboardYear !== "all" || state.dashboardSemester !== "all";
}

function dashboardStudents() {
  if (!dashboardHasTermFilter()) return state.students;
  return state.students.filter((student) =>
    (student.completedRecords || []).some((record) => recordMatchesDashboardTerm(record))
  );
}

function recordMatchesDashboardTerm(record) {
  const yearMatch = state.dashboardYear === "all" || String(record.year) === state.dashboardYear;
  const semesterMatch = state.dashboardSemester === "all" || record.semester === state.dashboardSemester;
  return yearMatch && semesterMatch;
}

function dashboardCompletionRate(student, trackId) {
  const list = dashboardModules(trackId);
  if (!list.length) return 0;
  const moduleIds = new Set(list.map((m) => m.id));
  if (!dashboardHasTermFilter()) {
    const done = list.filter((m) => student.completedModules.includes(m.id)).length;
    return Math.round((done / list.length) * 100);
  }
  const done = new Set((student.completedRecords || [])
    .filter((record) => moduleIds.has(record.moduleId) && recordMatchesDashboardTerm(record))
    .map((record) => record.moduleId)).size;
  return Math.round((done / list.length) * 100);
}

function dashboardCompletedCount(student, trackId) {
  const list = dashboardModules(trackId);
  if (!dashboardHasTermFilter()) {
    return list.filter((m) => student.completedModules.includes(m.id)).length;
  }
  const moduleIds = new Set(list.map((m) => m.id));
  return new Set((student.completedRecords || [])
    .filter((record) => moduleIds.has(record.moduleId) && recordMatchesDashboardTerm(record))
    .map((record) => record.moduleId)).size;
}

function stageCompletionRate(student, trackId, stage) {
  const list = curriculumModules(trackId).filter((module) => module.stage === stage);
  if (!list.length) return 0;
  const moduleIds = new Set(list.map((m) => m.id));
  if (!dashboardHasTermFilter()) {
    const done = list.filter((m) => student.completedModules.includes(m.id)).length;
    return Math.round((done / list.length) * 100);
  }
  const done = new Set((student.completedRecords || [])
    .filter((record) => moduleIds.has(record.moduleId) && recordMatchesDashboardTerm(record))
    .map((record) => record.moduleId)).size;
  return Math.round((done / list.length) * 100);
}

function stageAverage(students, trackId, stage) {
  if (!students.length) return 0;
  return Math.round(students.reduce((sum, student) => sum + stageCompletionRate(student, trackId, stage), 0) / students.length);
}

function renderStageProgressMini(label, value, color) {
  return `
    <div class="stage-progress-row">
      <span>${h(label)}</span>
      <div class="progress" aria-label="${h(label)} 과정 이수율"><span style="width:${value}%; --bar-color:${color}"></span></div>
      <strong>${value}%</strong>
    </div>
  `;
}

function renderDashboardDrilldown() {
  if (!state.dashboardDrilldown) return "";
  const scopedRows = dashboardStudents();

  const configs = {
    students: {
      title: "관리 학생 목록",
      subtitle: `${dashboardCriteriaLabel()} 기준 활동 학생과 트랙 이수 현황입니다.`,
      rows: scopedRows,
      mode: "students"
    },
    completion: {
      title: "평균 이수율 상세",
      subtitle: `${dashboardCriteriaLabel()} 평균 이수율 계산에 반영된 학생별 진행률입니다.`,
      rows: scopedRows.slice().sort((a, b) => dashboardCompletionRate(a, a.targetTrack) - dashboardCompletionRate(b, b.targetTrack)),
      mode: "completion"
    },
    attention: {
      title: "상담 우선 대상",
      subtitle: `${dashboardCriteriaLabel()} 기준 관찰 필요 상태이거나 위험도가 높은 학생입니다.`,
      rows: scopedRows.filter((s) => s.risk === "높음" || s.status === "관찰 필요").sort((a, b) => riskScore(b.risk) - riskScore(a.risk)),
      mode: "attention"
    },
    pbl: {
      title: "PBL 추천 가능 학생",
      subtitle: `${dashboardCriteriaLabel()} 활동 학생 중 몰입형 PBL 안내가 가능한 학생입니다.`,
      rows: scopedRows.filter((s) => recommendationFor(s).pblReady).sort((a, b) => recommendationFor(b).top.score - recommendationFor(a).top.score),
      mode: "pbl"
    }
  };

  const config = configs[state.dashboardDrilldown];
  if (!config) return "";
  const totalRows = config.rows.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / DASHBOARD_PAGE_SIZE));
  const currentPage = Math.min(Math.max(state.dashboardPage, 1), totalPages);
  const start = (currentPage - 1) * DASHBOARD_PAGE_SIZE;
  const pageRows = config.rows.slice(start, start + DASHBOARD_PAGE_SIZE);
  const rowHtml = pageRows.map((student) => renderDashboardDetailRow(student, config.mode)).join("");

  return `
    <section class="panel dashboard-drilldown">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">${h(config.title)}</h3>
          <p class="panel-subtitle">${h(config.subtitle)}</p>
        </div>
        <button class="button ghost" type="button" data-action="close-dashboard-drilldown" aria-label="상세 목록 닫기">닫기</button>
      </div>
      <div class="panel-body">
        <div class="dashboard-list">
          ${rowHtml || `<div class="empty">현재 조건에 해당하는 학생이 없습니다.</div>`}
        </div>
        ${renderDashboardPagination(currentPage, totalPages, totalRows)}
      </div>
    </section>
  `;
}

function renderDashboardPagination(currentPage, totalPages, totalRows) {
  if (totalRows <= DASHBOARD_PAGE_SIZE) return "";
  const start = (currentPage - 1) * DASHBOARD_PAGE_SIZE + 1;
  const end = Math.min(currentPage * DASHBOARD_PAGE_SIZE, totalRows);

  return `
    <div class="dashboard-pagination" aria-label="대시보드 학생 목록 페이지">
      <span class="pagination-summary">${start}-${end} / 총 ${totalRows}명</span>
      <div class="page-number-list">${renderPageButtons("set-dashboard-page", currentPage, totalPages)}</div>
    </div>
  `;
}

function renderNumberPagination(action, currentPage, totalPages, totalRows) {
  if (totalRows <= DASHBOARD_PAGE_SIZE) return "";
  const safeTotalPages = Math.max(1, totalPages);
  const safePage = Math.min(Math.max(currentPage, 1), safeTotalPages);
  const start = (safePage - 1) * DASHBOARD_PAGE_SIZE + 1;
  const end = Math.min(safePage * DASHBOARD_PAGE_SIZE, totalRows);

  return `
    <div class="dashboard-pagination compact" aria-label="대시보드 목록 페이지">
      <span class="pagination-summary">${start}-${end} / 총 ${totalRows}명</span>
      <div class="page-number-list">${renderPageButtons(action, safePage, safeTotalPages)}</div>
    </div>
  `;
}

function renderPageButtons(action, currentPage, totalPages) {
  return Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    return `
      <button class="page-button ${page === currentPage ? "is-active" : ""}" type="button" data-action="${action}" data-page="${page}" aria-label="${page}페이지">
        ${page}
      </button>
    `;
  }).join("");
}

function paginate(rows, page, pageSize) {
  const safePage = Math.max(page, 1);
  const start = (safePage - 1) * pageSize;
  return rows.slice(start, start + pageSize);
}

function renderDashboardDetailRow(student, mode) {
  const track = trackById(student.targetTrack);
  const rate = dashboardCompletionRate(student, student.targetTrack);
  const selectedModules = dashboardModules(student.targetTrack);
  const total = selectedModules.length;
  const completed = dashboardCompletedCount(student, student.targetTrack);
  const rec = recommendationFor(student);
  const nextModules = selectedModules
    .filter((module) => !student.completedModules.includes(module.id))
    .slice(0, 2)
    .map((m) => m.title)
    .join(", ") || "후속 교과형 대부분 이수";
  const pblModules = rec.pblModules.map((m) => m.title).join(", ") || "PBL 후보 없음";

  const modeDetail = {
    students: `${dashboardCriteriaLabel()} ${completed}/${total}개 교과형 이수 · 다음: ${nextModules}`,
    completion: `${dashboardCriteriaLabel()} 반영값 ${rate}% · 미이수 ${Math.max(total - completed, 0)}개`,
    attention: `${student.memo || "상담 메모 없음"} · 다음 상담 ${student.nextCounseling}`,
    pbl: `${rec.top.match} · ${pblModules}`
  }[mode];

  return `
    <button class="dashboard-row" type="button" data-action="select-student" data-id="${h(student.id)}">
      <span>
        <span class="row-title">${h(student.name)}</span>
        <span class="row-meta">${h(student.major)} · ${h(student.grade)}학년</span>
      </span>
      <span class="track-chip"><span class="track-dot" style="--track-color:${track.color}"></span>${h(track.name)}</span>
      <span class="progress-wrap">
        <span class="progress"><span style="width:${rate}%; --bar-color:${track.color}"></span></span>
        <span class="row-meta">${h(track.group)}</span>
      </span>
      <strong>${rate}%</strong>
      <span>
        <span class="badge-row">
          <span class="badge">${h(student.status)}</span>
          <span class="badge ${riskClass(student.risk)}">${h(student.risk)}</span>
        </span>
        <span class="row-meta">${h(modeDetail)}</span>
      </span>
    </button>
  `;
}

function renderTrackProgress(track) {
  const members = dashboardStudents().filter((s) => s.targetTrack === track.id);
  const avg = members.length
    ? Math.round(members.reduce((sum, s) => sum + dashboardCompletionRate(s, track.id), 0) / members.length)
    : 0;
  return `
    <div class="progress-line">
      <span class="track-chip"><span class="track-dot" style="--track-color:${track.color}"></span>${h(track.name)}</span>
      <div class="progress" aria-label="${h(track.name)} 평균 이수율"><span style="width:${avg}%; --bar-color:${track.color}"></span></div>
      <strong>${avg}%</strong>
      <span class="row-meta">${members.length}명</span>
    </div>
  `;
}

function renderCounselingRow(student) {
  const rec = recommendationFor(student);
  const track = trackById(student.targetTrack);
  return `
    <button class="student-row counseling-row ${student.id === selectedStudent().id ? "is-active" : ""}" type="button" data-action="select-student" data-id="${h(student.id)}">
      <span class="counseling-main">
        <span class="row-title">${h(student.name)}</span>
        <span class="row-meta">${h(student.major)} · ${h(student.grade)}학년 · ${h(track.name)}</span>
      </span>
      <span class="counseling-badges">
        <span class="badge ${riskClass(student.risk)}">${h(student.risk)} 위험도</span>
        <span class="badge">${h(student.status)}</span>
        <strong>${rec.top.score}점</strong>
      </span>
    </button>
  `;
}

function renderStudents() {
  const s = selectedStudent();
  const track = trackById(s.targetTrack);
  return `
    <section class="view">
      <div class="toolbar">
        <div class="filter-group">
          <input id="student-search" class="input" type="search" value="${h(state.studentSearch)}" placeholder="이름, 전공, 관심분야 검색" />
          <select id="student-status-filter" class="select" aria-label="상담 상태 필터">
            ${option("all", "전체 상태", state.studentStatus)}
            ${option("상담 예정", "상담 예정", state.studentStatus)}
            ${option("진행중", "진행중", state.studentStatus)}
            ${option("상담 완료", "상담 완료", state.studentStatus)}
            ${option("관찰 필요", "관찰 필요", state.studentStatus)}
          </select>
        </div>
        <div class="filter-group">
          <button class="button secondary" data-action="reset-demo" title="데모 데이터로 초기화">${icon("reset")}초기화</button>
          <button class="button" data-action="mark-counseling">${icon("check")}상담완료</button>
        </div>
      </div>
      <div class="grid two student-management-grid">
        <section class="panel student-list-panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">학생 목록 <span id="student-count">${filteredStudents().length}</span></h3>
              <p class="panel-subtitle">학생을 선택하면 상담 정보와 추천 근거가 연결됩니다.</p>
            </div>
          </div>
          <div class="panel-body">
            <div id="student-table-body" class="student-list">
              ${renderStudentRows()}
            </div>
          </div>
        </section>
        <section class="panel student-detail-panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">${h(s.name)} 상담 카드</h3>
              <p class="panel-subtitle">${h(track.name)} · ${completionRate(s, s.targetTrack)}% 이수</p>
            </div>
          </div>
          <div class="panel-body detail-stack">
            <dl>
              <div class="detail-line"><dt>전공</dt><dd>${h(s.major)}</dd></div>
              <div class="detail-line"><dt>학년</dt><dd>${h(s.grade)}학년</dd></div>
              <div class="detail-line"><dt>관심분야</dt><dd>${h(s.interests)}</dd></div>
              <div class="detail-line"><dt>상담상태</dt><dd><span class="badge">${h(s.status)}</span></dd></div>
              <div class="detail-line"><dt>위험도</dt><dd><span class="badge ${riskClass(s.risk)}">${h(s.risk)}</span></dd></div>
              <div class="detail-line"><dt>다음상담</dt><dd>${h(s.nextCounseling)}</dd></div>
            </dl>
            <label>
              <span class="panel-subtitle">상담 메모</span>
              <textarea id="memo-input" class="textarea">${h(s.memo)}</textarea>
            </label>
            <section class="counseling-box">
              <div>
                <h4 class="section-title">음성 상담 업로드</h4>
                <p class="panel-subtitle">음성파일과 전사문을 함께 저장하면 자동으로 상담 요약을 생성합니다.</p>
              </div>
              <form id="counseling-upload-form" class="counseling-form">
                <input class="input" type="date" name="date" value="${h(todayValue())}" aria-label="상담일" />
                <input class="input wide" type="file" name="audio" accept="audio/*" aria-label="상담 음성파일" />
                <textarea class="textarea wide" name="transcript" placeholder="음성 전사문이나 상담 내용을 붙여넣으세요. 예: 학생은 생성형 AI PBL에 관심이 있으며, 데이터마이닝 이수 후 멀티모달러닝을 수강하기로 함."></textarea>
                <button class="button wide" type="submit">${icon("spark")}상담이력 정리 저장</button>
              </form>
            </section>
            <section class="counseling-box transcript-upload-box">
              <div>
                <h4 class="section-title">성적증명서 PDF 업로드</h4>
                <p class="panel-subtitle">PDF에서 이수 교과목을 추출해 부트캠프 트랙 교과와 자동 매핑하고 브라우저 DB에 저장합니다.</p>
              </div>
              <form id="transcript-upload-form" class="transcript-upload-form">
                <input class="input wide" type="file" name="transcriptPdf" accept="application/pdf" aria-label="성적증명서 PDF" required />
                <button class="button wide" type="submit" ${state.transcriptUploadBusy ? "disabled" : ""}>${icon("spark")}${state.transcriptUploadBusy ? "분석 중" : "성적표 분석 저장"}</button>
              </form>
              ${state.transcriptUploadMessage ? `<p class="upload-message">${h(state.transcriptUploadMessage)}</p>` : ""}
              ${renderTranscriptStudentSummary(s)}
            </section>
            <section class="counseling-box">
              <div>
                <h4 class="section-title">상담이력</h4>
                <p class="panel-subtitle">최근 상담부터 표시됩니다.</p>
              </div>
              ${renderCounselingHistory(s)}
            </section>
            <div class="filter-group">
              <button class="button secondary" data-action="set-view" data-view="history">${icon("history")}수강이력 편집</button>
              <button class="button" data-action="set-view" data-view="recommend">${icon("spark")}추천 보기</button>
            </div>
          </div>
        </section>
      </div>
      <section class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">신규 학생 등록</h3>
            <p class="panel-subtitle">관리자 페이지에서 바로 상담 대상자를 추가합니다.</p>
          </div>
        </div>
        <div class="panel-body">
          <form id="add-student-form" class="form-grid">
            <input class="input" name="name" placeholder="이름" required />
            <input class="input" name="major" placeholder="전공" required />
            <select class="select" name="grade" required>
              <option value="2">2학년</option>
              <option value="3" selected>3학년</option>
              <option value="4">4학년</option>
            </select>
            <select class="select" name="targetTrack" required>
              ${TRACKS.map((t) => `<option value="${h(t.id)}">${h(t.name)}</option>`).join("")}
            </select>
            <input class="input wide" name="interests" placeholder="관심분야 예: 생성형 AI, 데이터분석, 로보틱스" required />
            <button class="button wide" type="submit">${icon("plus")}학생 추가</button>
          </form>
        </div>
      </section>
    </section>
  `;
}

function renderCounselingHistory(student) {
  const records = student.counselingRecords || [];
  if (!records.length) {
    return `<div class="empty">아직 저장된 상담이력이 없습니다.</div>`;
  }

  return `
    <div class="counseling-history-list">
      ${records.map((record) => `
        <article class="counseling-record">
          <div class="toolbar">
            <strong>${h(record.date)}</strong>
            <span class="badge">${record.audioName ? h(record.audioName) : "음성파일 없음"}</span>
          </div>
          <p>${h(record.summary)}</p>
          ${record.nextActions.length ? `<div class="badge-row">${record.nextActions.map((action) => `<span class="badge success">${h(action)}</span>`).join("")}</div>` : ""}
          ${record.keywords.length ? `<div class="badge-row">${record.keywords.map((keyword) => `<span class="badge">${h(keyword)}</span>`).join("")}</div>` : ""}
          <p class="row-meta">${record.audioSize ? `${h(record.audioType || "audio")} · ${formatFileSize(record.audioSize)}` : "전사문 기반 상담기록"}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderTranscriptStudentSummary(student) {
  const analysis = latestTranscriptAnalysis(student);
  if (!analysis) {
    return `<div class="empty">업로드된 성적증명서 분석 결과가 없습니다.</div>`;
  }
  const topTracks = analysis.trackSummaries.slice(0, 3);
  const top = topTracks[0];
  const missingModules = (top?.missingModuleIds || []).map((id) => byId(MODULES, id)).filter(Boolean).slice(0, 4);
  const pblModules = (top?.pblModuleIds || []).map((id) => byId(MODULES, id)).filter(Boolean).slice(0, 3);

  return `
    <div class="transcript-result-card">
      <div class="toolbar">
        <div>
          <strong>최근 분석 결과</strong>
          <span class="row-meta">${h(analysis.fileName)} · ${h(formatDateTime(analysis.uploadedAt))}</span>
        </div>
        <span class="badge success">${analysis.matchedModules.length}개 매핑</span>
      </div>
      <p>${h(analysis.advisorNote)}</p>
      <div class="transcript-track-list">
        ${topTracks.map((summary) => {
          const track = trackById(summary.trackId);
          return `
            <div class="transcript-track-row">
              <span class="track-chip"><span class="track-dot" style="--track-color:${track.color}"></span>${h(track.name)}</span>
              <div class="progress"><span style="width:${summary.rate}%; --bar-color:${track.color}"></span></div>
              <strong>${summary.rate}%</strong>
            </div>
          `;
        }).join("")}
      </div>
      <div>
        <h4 class="mini-title">매핑된 교과목</h4>
        <div class="badge-row">
          ${analysis.matchedModules.slice(0, 10).map((match) => {
            const moduleInfo = byId(MODULES, match.moduleId);
            return `<span class="badge success">${h(moduleInfo?.title || match.sourceTitle)} · ${h(match.year)}년 ${h(match.semester)}</span>`;
          }).join("")}
        </div>
      </div>
      <div class="student-course-split">
        <div>
          <h4 class="mini-title">추가 이수 추천</h4>
          <div class="badge-row">
            ${missingModules.map((m) => `<span class="badge">${h(m.title)}</span>`).join("") || `<span class="badge success">주요 교과 대부분 충족</span>`}
          </div>
        </div>
        <div>
          <h4 class="mini-title">몰입형 상담 후보</h4>
          <div class="badge-row">
            ${pblModules.map((m) => `<span class="badge">${h(m.title)}</span>`).join("") || `<span class="badge">교과형 기반 보강 후 추천</span>`}
          </div>
        </div>
      </div>
    </div>
  `;
}

function latestTranscriptAnalysis(student) {
  return (student.transcriptAnalyses || [])[0] || null;
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value || "";
  return date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function todayValue() {
  return new Date().toLocaleDateString("sv-SE");
}

function createCounselingRecord(student, form) {
  const audio = form.get("audio");
  const transcript = String(form.get("transcript") || "").trim();
  const hasAudio = audio && typeof audio === "object" && audio.name;
  const summaryData = summarizeCounseling(student, transcript, hasAudio ? audio.name : "");

  return {
    id: `c-${Date.now()}`,
    date: form.get("date") || todayValue(),
    audioName: hasAudio ? audio.name : "",
    audioType: hasAudio ? audio.type : "",
    audioSize: hasAudio ? audio.size : 0,
    transcript,
    summary: summaryData.summary,
    nextActions: summaryData.nextActions,
    keywords: summaryData.keywords
  };
}

function summarizeCounseling(student, transcript, audioName) {
  const track = trackById(student.targetTrack);
  const cleanText = transcript.replace(/\s+/g, " ").trim();
  if (!cleanText) {
    return {
      summary: audioName
        ? `${audioName} 음성파일이 업로드되었습니다. 전사문을 추가하면 상담 내용을 자동 요약할 수 있습니다.`
        : "상담 내용이 비어 있습니다. 전사문 또는 상담 메모를 입력하세요.",
      nextActions: ["전사문 보완"],
      keywords: [track.name]
    };
  }

  const sentences = cleanText
    .split(/(?:[.!?。]\s+|다\.\s+|요\.\s+|함\.\s+|음\.\s+)/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
  const keySentences = sentences.filter((sentence) => /추천|수강|이수|상담|다음|필요|계획|PBL|트랙|보강|신청|안내|희망|관심/.test(sentence));
  const summarySource = (keySentences.length ? keySentences : sentences).slice(0, 2).join(" ");
  const nextActions = extractNextActions(cleanText, track);
  const keywords = extractCounselingKeywords(cleanText, track);

  return {
    summary: summarySource || `${student.name} 학생 상담 내용을 정리했습니다.`,
    nextActions,
    keywords
  };
}

function extractNextActions(text, track) {
  const actions = [];
  if (/PBL|프로젝트|몰입형/.test(text)) actions.push("PBL 안내");
  if (/수강|이수|신청/.test(text)) actions.push("다음 수강계획 확인");
  if (/보강|어려움|부족|미흡|관찰/.test(text)) actions.push("보강 상담");
  if (/진로|취업|포트폴리오/.test(text)) actions.push("진로 연계");
  if (!actions.length) actions.push(`${track.name} 후속 모듈 안내`);
  return [...new Set(actions)].slice(0, 3);
}

function extractCounselingKeywords(text, track) {
  const candidates = [
    track.name,
    "초급",
    "중급",
    "고급",
    "PBL",
    "데이터마이닝",
    "머신러닝",
    "딥러닝",
    "생성형 AI",
    "클라우드",
    "보안",
    "산업 AI",
    "XR",
    "상담",
    "수강계획"
  ];
  return candidates.filter((keyword) => text.includes(keyword) || keyword === track.name).slice(0, 5);
}

function formatFileSize(size) {
  if (size < 1024) return `${size}B`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)}KB`;
  return `${(size / 1024 / 1024).toFixed(1)}MB`;
}

async function handleTranscriptUpload(formElement) {
  const studentId = selectedStudent().id;
  const form = new FormData(formElement);
  const file = form.get("transcriptPdf");
  await handleTranscriptFileUpload(file, studentId);
}

async function handleTranscriptFileUpload(file, studentId, options = {}) {
  if (!file || !file.name) {
    state.transcriptUploadMessage = "성적증명서 PDF 파일을 선택하세요.";
    render();
    return;
  }

  if (!/pdf$/i.test(file.name) && file.type !== "application/pdf") {
    state.transcriptUploadMessage = "PDF 파일만 업로드할 수 있습니다.";
    render();
    return;
  }

  state.transcriptUploadBusy = true;
  state.transcriptUploadMessage = `${file.name} 성적증명서를 분석하고 있습니다.`;
  render();

  try {
    const { text, pageCount } = await extractPdfText(file);
    const transcriptStudentInfo = extractTranscriptStudentInfo(text);
    const matchedModules = matchTranscriptModules(text);
    const trackSummaries = buildTranscriptTrackSummaries(matchedModules);
    const matchResult = resolveTranscriptStudent(transcriptStudentInfo, trackSummaries, studentId);
    const analysis = createTranscriptAnalysis(matchResult.studentInfo, file, text, pageCount, {
      matchedModules,
      trackSummaries,
      transcriptStudentInfo
    });
    if (matchResult.studentInfo.id) state.selectedStudentId = matchResult.studentInfo.id;
    if (options.openStudentDetail) state.view = "students";
    state.transcriptReview = createTranscriptReview(matchResult.studentInfo, analysis, matchResult);
    state.transcriptUploadMessage = `${analysis.matchedModules.length}개 교과목을 찾았습니다. 팝업에서 확인 후 저장하세요.`;
  } catch (error) {
    state.transcriptUploadMessage = error.message || "성적증명서 분석 중 오류가 발생했습니다.";
  } finally {
    state.transcriptUploadBusy = false;
    render();
  }
}

async function extractPdfText(file) {
  const pdfjs = window.pdfjsLib;
  if (!pdfjs) {
    throw new Error("PDF 분석 라이브러리를 불러오지 못했습니다. 인터넷 연결 후 새로고침하거나 PDF.js 스크립트 로드를 확인하세요.");
  }
  pdfjs.GlobalWorkerOptions.workerSrc = pdfjs.GlobalWorkerOptions.workerSrc || PDFJS_WORKER_SRC;
  const bytes = new Uint8Array(await file.arrayBuffer());
  const pdf = await pdfjs.getDocument({ data: bytes }).promise;
  const pageTexts = [];
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    pageTexts.push(content.items.map((item) => item.str).join(" "));
  }
  const text = pageTexts.join("\n");
  if (!text.trim()) {
    throw new Error("PDF에서 텍스트를 추출하지 못했습니다. 스캔 이미지 PDF는 OCR 기능이 필요합니다.");
  }
  return { text, pageCount: pdf.numPages };
}

function createTranscriptAnalysis(studentInfo, file, text, pageCount, options = {}) {
  const matchedModules = options.matchedModules || matchTranscriptModules(text);
  const trackSummaries = options.trackSummaries || buildTranscriptTrackSummaries(matchedModules);
  const transcriptStudentInfo = options.transcriptStudentInfo || extractTranscriptStudentInfo(text);
  const advisorNote = transcriptAdvisorNote(studentInfo, matchedModules, trackSummaries);

  return {
    id: `tr-${Date.now()}`,
    fileName: file.name,
    uploadedAt: new Date().toISOString(),
    pageCount,
    textLength: text.length,
    textPreview: text.replace(/\s+/g, " ").slice(0, 500),
    transcriptStudentInfo,
    matchedModules,
    trackSummaries,
    advisorNote
  };
}

function extractTranscriptStudentInfo(text) {
  const normalized = String(text || "").replace(/\s+/g, " ").trim();
  const name = cleanExtractedField(extractByPatterns(normalized, [
    /(?:학생명|성명|이름)\s*[:：]?\s*([가-힣A-Za-z]{2,12})(?:\s*\([^)]*\))?/i
  ]));
  const studentNumber = cleanExtractedField(extractByPatterns(normalized, [
    /(?:학번|student\s*id|student\s*no)\s*[:：]?\s*([A-Za-z0-9-]{4,20})/i
  ]));
  const major = cleanExtractedField(extractByPatterns(normalized, [
    /(?:소속)\s*[:：]?\s*(.+?)(?=\s*(?:학년|학번|생년월일|기준일|문서구분|발급효력|총\s*취득|전체\s*평점|전공\s*평점|$))/,
    /(?:전공)\s*[:：]?\s*(.+?)(?=\s*(?:학년|학번|생년월일|기준일|문서구분|발급효력|총\s*취득|전체\s*평점|전공\s*평점|$))/
  ]));
  const gradeMatch = normalized.match(/(?:학년)\s*[:：]?\s*([1-6])\s*학년/) || normalized.match(/([1-6])\s*학년/);
  const grade = gradeMatch ? Number(gradeMatch[1]) : null;
  return { name, studentNumber, major, grade };
}

function extractByPatterns(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) return match[1];
  }
  return "";
}

function cleanExtractedField(value) {
  return String(value || "")
    .replace(/\([^)]*\)/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function resolveTranscriptStudent(transcriptInfo, trackSummaries, fallbackStudentId) {
  const existing = findExistingStudentForTranscript(transcriptInfo);
  if (existing) {
    return {
      studentInfo: existing,
      isNewStudent: false,
      matchReason: transcriptInfo.studentNumber && existing.studentNumber === transcriptInfo.studentNumber
        ? "학번이 일치하는 기존 학생"
        : "이름이 일치하는 기존 학생"
    };
  }

  const fallback = byId(state.students, fallbackStudentId);
  const topTrackId = trackSummaries[0]?.trackId || fallback?.targetTrack || TRACKS[0].id;
  const topTrack = trackById(topTrackId);
  const provisional = {
    id: null,
    studentNumber: transcriptInfo.studentNumber || "",
    name: transcriptInfo.name || "성적표 신규학생",
    major: transcriptInfo.major || "전공 미확인",
    grade: transcriptInfo.grade || fallback?.grade || 4,
    targetTrack: topTrackId,
    interests: transcriptInfo.name ? `${topTrack.name} 성적표 매핑 기반 상담` : "성적증명서 학생정보 확인 필요",
    completedModules: [],
    completedRecords: [],
    counselingRecords: [],
    transcriptAnalyses: [],
    status: "진행중",
    risk: "중간",
    memo: "성적증명서 업로드로 신규 등록 검토",
    nextCounseling: todayValue()
  };

  return {
    studentInfo: provisional,
    isNewStudent: true,
    matchReason: transcriptInfo.name
      ? "데이터베이스에 동일 학생이 없어 신규 등록 예정"
      : "PDF에서 학생명을 인식하지 못해 신규 학생으로 검토"
  };
}

function findExistingStudentForTranscript(info) {
  if (info.studentNumber) {
    const byNumber = state.students.find((studentInfo) => studentInfo.studentNumber && studentInfo.studentNumber === info.studentNumber);
    if (byNumber) return byNumber;
  }
  const nameKey = normalizePersonName(info.name);
  if (!nameKey) return null;
  const exactNameMatches = state.students.filter((studentInfo) => normalizePersonName(studentInfo.name) === nameKey);
  if (exactNameMatches.length <= 1) return exactNameMatches[0] || null;
  const majorKey = normalizeCourseText(info.major || "");
  return exactNameMatches.find((studentInfo) => majorKey && normalizeCourseText(studentInfo.major || "").includes(majorKey.slice(0, 4))) || exactNameMatches[0];
}

function normalizePersonName(value) {
  return String(value || "")
    .replace(/\([^)]*\)/g, "")
    .replace(/[^가-힣A-Za-z]/g, "")
    .toLowerCase();
}

function transcriptAdvisorNote(studentInfo, matchedModules, trackSummaries) {
  const top = trackSummaries[0];
  const topTrack = top ? trackById(top.trackId) : trackById(studentInfo.targetTrack);
  return matchedModules.length
    ? `${studentInfo.name} 학생 성적표 기준 ${topTrack.name} 매핑률이 ${top?.rate || 0}%로 가장 높습니다. 다음 상담에서는 ${nextTranscriptAdvisorTopic(top)} 중심으로 안내하세요.`
    : `${studentInfo.name} 학생 성적표에서 부트캠프 교과와 자동 매핑된 과목이 없습니다. 과목명 매핑표를 보완하거나 관리자 확인이 필요합니다.`;
}

function createTranscriptReview(studentInfo, analysis, matchResult = {}) {
  return {
    studentId: studentInfo.id || null,
    isNewStudent: Boolean(matchResult.isNewStudent || !studentInfo.id),
    matchReason: matchResult.matchReason || "",
    editMode: false,
    studentInfo: {
      studentNumber: studentInfo.studentNumber || analysis.transcriptStudentInfo?.studentNumber || "",
      name: studentInfo.name,
      major: studentInfo.major,
      grade: Number(studentInfo.grade) || 4,
      targetTrack: studentInfo.targetTrack,
      interests: studentInfo.interests
    },
    analysis: {
      ...analysis,
      matchedModules: analysis.matchedModules.map((match) => ({ ...match, selected: true }))
    }
  };
}

function renderTranscriptReviewModal() {
  const review = state.transcriptReview;
  if (!review) return "";
  const studentInfo = review.studentInfo;
  const selectedMatches = transcriptReviewSelectedMatches(review);
  const summaries = buildTranscriptTrackSummaries(selectedMatches);
  const advisorNote = transcriptAdvisorNote(studentInfo, selectedMatches, summaries);

  return `
    <div class="modal-backdrop" role="presentation">
      <div class="modal-scrim" data-action="cancel-transcript-review" aria-hidden="true"></div>
      <section class="track-modal transcript-review-modal" role="dialog" aria-modal="true" aria-labelledby="transcript-review-title">
        <div class="modal-header">
          <div>
            <p class="modal-eyebrow">성적증명서 업로드 검토</p>
            <h2 id="transcript-review-title">학생 정보와 트랙 매핑 확인</h2>
            <p>${h(review.analysis.fileName)} · ${review.analysis.pageCount}페이지 · 확인을 눌러야 데이터베이스에 저장됩니다.</p>
          </div>
        </div>
        <div class="modal-body">
          <section class="review-section">
            <div class="review-section-head">
              <h3 class="panel-title">학생 일반정보</h3>
              <span class="badge ${review.editMode ? "warning" : "success"}">${review.editMode ? "수정 가능" : "확인 모드"}</span>
            </div>
            ${renderTranscriptReviewMatchNotice(review)}
            ${renderTranscriptReviewStudentInfo(review)}
          </section>
          <section class="review-section">
            <div class="review-section-head">
              <h3 class="panel-title">매핑 가능한 트랙 정보</h3>
              <p class="panel-subtitle">${selectedMatches.length}개 교과목 기준 추천 트랙입니다.</p>
            </div>
            <div class="review-track-grid">
              ${summaries.slice(0, 5).map(renderTranscriptReviewTrackCard).join("")}
            </div>
            <p class="advisor-review-note">${h(advisorNote)}</p>
          </section>
          <section class="review-section">
            <div class="review-section-head">
              <h3 class="panel-title">매핑된 교과목 확인</h3>
              <p class="panel-subtitle">수정 모드에서 잘못 매핑된 교과목은 체크 해제하고, 연도·학기를 바꿀 수 있습니다.</p>
            </div>
            <div class="review-match-list">
              ${review.analysis.matchedModules.map((match) => renderTranscriptReviewMatch(match, review.editMode)).join("") || `<div class="empty">매핑된 교과목이 없습니다.</div>`}
            </div>
          </section>
        </div>
        <div class="transcript-review-actions">
          <button class="button" type="button" data-action="confirm-transcript-review">${icon("check")}확인</button>
          <button class="button secondary" type="button" data-action="edit-transcript-review">${icon("spark")}수정</button>
          <button class="button ghost" type="button" data-action="cancel-transcript-review">취소</button>
        </div>
      </section>
    </div>
  `;
}

function renderTranscriptReviewStudentInfo(review) {
  const info = review.studentInfo;
  if (review.editMode) {
    return `
      <div class="review-form-grid">
        <label><span>학번</span><input class="input" data-review-field="studentNumber" value="${h(info.studentNumber)}" /></label>
        <label><span>이름</span><input class="input" data-review-field="name" value="${h(info.name)}" /></label>
        <label><span>전공</span><input class="input" data-review-field="major" value="${h(info.major)}" /></label>
        <label><span>학년</span><select class="select" data-review-field="grade">${[1, 2, 3, 4].map((grade) => option(String(grade), `${grade}학년`, String(info.grade))).join("")}</select></label>
        <label><span>목표 트랙</span><select class="select" data-review-field="targetTrack">${TRACKS.map((track) => option(track.id, track.name, info.targetTrack)).join("")}</select></label>
        <label class="wide"><span>관심분야</span><input class="input" data-review-field="interests" value="${h(info.interests)}" /></label>
      </div>
    `;
  }

  const track = trackById(info.targetTrack);
  return `
    <dl class="review-info-grid">
      <div><dt>학번</dt><dd>${h(info.studentNumber || "인식 안 됨")}</dd></div>
      <div><dt>이름</dt><dd>${h(info.name)}</dd></div>
      <div><dt>전공</dt><dd>${h(info.major)}</dd></div>
      <div><dt>학년</dt><dd>${h(info.grade)}학년</dd></div>
      <div><dt>목표 트랙</dt><dd><span class="track-chip"><span class="track-dot" style="--track-color:${track.color}"></span>${h(track.name)}</span></dd></div>
      <div class="wide"><dt>관심분야</dt><dd>${h(info.interests)}</dd></div>
    </dl>
  `;
}

function renderTranscriptReviewMatchNotice(review) {
  const source = review.analysis.transcriptStudentInfo || {};
  return `
    <div class="review-match-notice ${review.isNewStudent ? "is-new" : "is-existing"}">
      <strong>${review.isNewStudent ? "신규 학생 등록 예정" : "기존 학생에 매핑 예정"}</strong>
      <p>${h(review.matchReason || "성적증명서 학생정보 기준으로 매핑했습니다.")}</p>
      <div class="badge-row">
        <span class="badge">PDF 이름: ${h(source.name || "인식 안 됨")}</span>
        <span class="badge">PDF 학번: ${h(source.studentNumber || "인식 안 됨")}</span>
        <span class="badge">PDF 전공: ${h(source.major || "인식 안 됨")}</span>
        <span class="badge">PDF 학년: ${source.grade ? `${h(source.grade)}학년` : "인식 안 됨"}</span>
      </div>
    </div>
  `;
}

function renderTranscriptReviewTrackCard(summary) {
  const track = trackById(summary.trackId);
  const missing = summary.missingModuleIds.map((id) => byId(MODULES, id)).filter(Boolean).slice(0, 3);
  const pbl = summary.pblModuleIds.map((id) => byId(MODULES, id)).filter(Boolean).slice(0, 2);
  return `
    <article class="review-track-card" style="--track-color:${track.color}">
      <div class="toolbar">
        <span class="track-chip"><span class="track-dot" style="--track-color:${track.color}"></span>${h(track.name)}</span>
        <strong>${summary.rate}%</strong>
      </div>
      <div class="progress"><span style="width:${summary.rate}%; --bar-color:${track.color}"></span></div>
      <p class="row-meta">${summary.matched}/${summary.total}개 교과 매핑 · ${h(summary.status)}</p>
      <div>
        <h4 class="mini-title">추가 이수 후보</h4>
        <div class="badge-row">${missing.map((moduleInfo) => `<span class="badge">${h(moduleInfo.title)}</span>`).join("") || `<span class="badge success">주요 교과 충족</span>`}</div>
      </div>
      <div>
        <h4 class="mini-title">PBL 후보</h4>
        <div class="badge-row">${pbl.map((moduleInfo) => `<span class="badge">${h(moduleInfo.title)}</span>`).join("") || `<span class="badge">교과 보강 후 추천</span>`}</div>
      </div>
    </article>
  `;
}

function renderTranscriptReviewMatch(match, editMode) {
  const moduleInfo = byId(MODULES, match.moduleId);
  if (!moduleInfo) return "";
  const selected = match.selected !== false;
  return `
    <article class="review-match-row ${selected ? "" : "is-disabled"}">
      ${editMode ? `<input class="check" type="checkbox" data-review-match="${h(match.moduleId)}" ${selected ? "checked" : ""} aria-label="${h(moduleInfo.title)} 매핑 포함" />` : `<span class="badge ${selected ? "success" : ""}">${selected ? "포함" : "제외"}</span>`}
      <div>
        <strong>${h(moduleInfo.title)}</strong>
        <span class="row-meta">${h(moduleInfo.stage)} · ${h(moduleInfo.semester)} · ${h(moduleInfo.trackIds.map((id) => trackById(id).name).join(", "))}</span>
        <span class="row-meta">성적표 인식명: ${h(match.sourceTitle)}</span>
      </div>
      <div class="review-term-controls">
        ${editMode
          ? `<input class="input" type="number" min="2020" max="2030" data-review-match-term="${h(match.moduleId)}" data-term-field="year" value="${h(match.year)}" />
             <select class="select" data-review-match-term="${h(match.moduleId)}" data-term-field="semester">${COMPLETION_SEMESTERS.map((semester) => option(semester, semester, match.semester)).join("")}</select>`
          : `<span class="badge">${h(match.year)}년</span><span class="badge success">${h(match.semester)}</span>`}
      </div>
    </article>
  `;
}

function transcriptReviewSelectedMatches(review = state.transcriptReview) {
  if (!review) return [];
  return review.analysis.matchedModules
    .filter((match) => match.selected !== false)
    .map(({ selected, ...match }) => match);
}

function confirmTranscriptReview() {
  const review = state.transcriptReview;
  if (!review) return;
  let studentInfo = review.isNewStudent ? null : byId(state.students, review.studentId);

  if (!studentInfo) {
    studentInfo = student(
      `s-${Date.now()}`,
      review.studentInfo.name.trim() || "성적표 신규학생",
      review.studentInfo.major.trim() || "전공 미확인",
      Number(review.studentInfo.grade) || 4,
      byId(TRACKS, review.studentInfo.targetTrack)?.id || review.analysis.trackSummaries[0]?.trackId || TRACKS[0].id,
      review.studentInfo.interests.trim() || "성적증명서 업로드 기반 상담",
      [],
      "진행중",
      "중간",
      "성적증명서 업로드로 신규 등록"
    );
    state.students = [studentInfo, ...state.students];
  } else {
    studentInfo.name = review.studentInfo.name.trim() || studentInfo.name;
    studentInfo.major = review.studentInfo.major.trim() || studentInfo.major;
    studentInfo.grade = Number(review.studentInfo.grade) || studentInfo.grade;
    studentInfo.targetTrack = byId(TRACKS, review.studentInfo.targetTrack)?.id || studentInfo.targetTrack;
    studentInfo.interests = review.studentInfo.interests.trim() || studentInfo.interests;
  }

  studentInfo.studentNumber = review.studentInfo.studentNumber.trim() || studentInfo.studentNumber || "";

  const matchedModules = transcriptReviewSelectedMatches(review);
  const trackSummaries = buildTranscriptTrackSummaries(matchedModules);
  const finalizedAnalysis = {
    ...review.analysis,
    matchedModules,
    trackSummaries,
    advisorNote: transcriptAdvisorNote(studentInfo, matchedModules, trackSummaries)
  };

  applyTranscriptAnalysis(studentInfo, finalizedAnalysis);
  state.selectedStudentId = studentInfo.id;
  state.view = "students";
  state.transcriptReview = null;
  state.transcriptUploadMessage = `${matchedModules.length}개 교과목을 확인 후 데이터베이스에 저장했습니다.`;
  persist();
  render();
}

function updateTranscriptReviewField(field, value) {
  if (!state.transcriptReview) return;
  if (!Object.prototype.hasOwnProperty.call(state.transcriptReview.studentInfo, field)) return;
  state.transcriptReview.studentInfo[field] = field === "grade" ? Number(value) : value;
}

function updateTranscriptReviewMatch(moduleId, selected) {
  if (!state.transcriptReview) return;
  const match = state.transcriptReview.analysis.matchedModules.find((item) => item.moduleId === moduleId);
  if (match) match.selected = selected;
}

function updateTranscriptReviewMatchTerm(moduleId, field, value) {
  if (!state.transcriptReview) return;
  const match = state.transcriptReview.analysis.matchedModules.find((item) => item.moduleId === moduleId);
  if (!match) return;
  if (field === "year") match.year = Number(value) || match.year;
  if (field === "semester" && COMPLETION_SEMESTERS.includes(value)) match.semester = value;
}

function matchTranscriptModules(text) {
  const normalizedTranscript = normalizeCourseText(text);
  return MODULES
    .filter((moduleInfo) => moduleInfo.type === "교과형" || moduleInfo.type === "몰입형")
    .map((moduleInfo) => {
      const aliases = transcriptAliases(moduleInfo);
      const sourceTitle = aliases.find((alias) => normalizedTranscript.includes(normalizeCourseText(alias)));
      if (!sourceTitle) return null;
      const index = findOriginalCourseIndex(text, aliases);
      const term = inferTranscriptTerm(text, index, moduleInfo);
      return {
        moduleId: moduleInfo.id,
        sourceTitle,
        year: term.year,
        semester: term.semester,
        confidence: index >= 0 ? "높음" : "중간"
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.year - b.year || COMPLETION_SEMESTERS.indexOf(a.semester) - COMPLETION_SEMESTERS.indexOf(b.semester) || moduleSort(byId(MODULES, a.moduleId), byId(MODULES, b.moduleId)));
}

function transcriptAliases(moduleInfo) {
  return [...new Set([
    moduleInfo.title,
    moduleInfo.title.replace(/\s+/g, ""),
    ...(TRANSCRIPT_MODULE_ALIASES[moduleInfo.id] || [])
  ])];
}

function normalizeCourseText(text) {
  return String(text || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[·ㆍ.,/#!$%^&*;:{}=\-_`~()[\]\s]/g, "");
}

function findOriginalCourseIndex(text, aliases) {
  const lowerText = text.toLowerCase();
  for (const alias of aliases) {
    const index = lowerText.indexOf(alias.toLowerCase());
    if (index >= 0) return index;
  }
  return -1;
}

function inferTranscriptTerm(text, index, moduleInfo) {
  const fallback = fallbackCompletionRecord(moduleInfo.id);
  if (index < 0) return fallback;
  const snippet = text.slice(Math.max(0, index - 140), Math.min(text.length, index + 80));
  const termMatches = [...snippet.matchAll(/(20\d{2})\s*(?:년)?\s*(1학기|2학기|계절학기)/g)];
  if (termMatches.length) {
    const [, year, semester] = termMatches[termMatches.length - 1];
    return { year: Number(year), semester };
  }
  const yearMatch = snippet.match(/20\d{2}/);
  const semesterMatch = snippet.match(/1학기|2학기|계절학기/);
  return {
    year: yearMatch ? Number(yearMatch[0]) : fallback.year,
    semester: semesterMatch ? semesterMatch[0] : fallback.semester
  };
}

function buildTranscriptTrackSummaries(matchedModules) {
  const matchedIds = new Set(matchedModules.map((match) => match.moduleId));
  return TRACKS.map((track) => {
    const modules = curriculumModules(track.id);
    const matched = modules.filter((moduleInfo) => matchedIds.has(moduleInfo.id));
    const rate = modules.length ? Math.round((matched.length / modules.length) * 100) : 0;
    const intermediateDone = matched.filter((moduleInfo) => moduleInfo.stage === "중급").length;
    const pblReady = rate >= 45 || intermediateDone >= 2;
    return {
      trackId: track.id,
      matched: matched.length,
      total: modules.length,
      rate,
      status: rate >= 80 ? "이수 가능 높음" : rate >= 45 ? "이수 가능" : rate > 0 ? "탐색 가능" : "근거 부족",
      missingModuleIds: modules.filter((moduleInfo) => !matchedIds.has(moduleInfo.id)).map((moduleInfo) => moduleInfo.id),
      pblModuleIds: pblReady ? immersiveModules(track.id).map((moduleInfo) => moduleInfo.id) : []
    };
  }).sort((a, b) => b.rate - a.rate || b.matched - a.matched);
}

function nextTranscriptAdvisorTopic(summary) {
  if (!summary) return "과목명 매핑표 보완";
  const missing = (summary.missingModuleIds || []).map((id) => byId(MODULES, id)?.title).filter(Boolean);
  const pbl = (summary.pblModuleIds || []).map((id) => byId(MODULES, id)?.title).filter(Boolean);
  if (pbl.length) return `${pbl[0]} 진입 가능성`;
  if (missing.length) return `${missing[0]} 추가 이수 계획`;
  return "몰입형 PBL 연계";
}

function applyTranscriptAnalysis(studentInfo, analysis) {
  const completed = new Set(studentInfo.completedModules || []);
  const records = Array.isArray(studentInfo.completedRecords) ? [...studentInfo.completedRecords] : [];
  analysis.matchedModules.forEach((match) => {
    completed.add(match.moduleId);
    if (!records.some((record) => record.moduleId === match.moduleId)) {
      records.push({
        moduleId: match.moduleId,
        year: match.year,
        semester: match.semester,
        source: "transcript",
        transcriptId: analysis.id
      });
    }
  });
  studentInfo.completedModules = [...completed];
  studentInfo.completedRecords = records;
  studentInfo.transcriptAnalyses = [analysis, ...(studentInfo.transcriptAnalyses || [])].slice(0, TRANSCRIPT_ANALYSIS_LIMIT);
  studentInfo.memo = analysis.advisorNote;
  studentInfo.status = "진행중";
  const topRate = analysis.trackSummaries[0]?.rate || 0;
  studentInfo.risk = topRate >= 70 ? "낮음" : topRate >= 35 ? "중간" : "높음";
}

function renderStudentRows() {
  const rows = filteredStudents();
  if (!rows.length) return `<div class="empty">조건에 맞는 학생이 없습니다.</div>`;
  return rows
    .map((student) => {
      const track = trackById(student.targetTrack);
      return `
        <button class="student-row ${student.id === selectedStudent().id ? "is-active" : ""}" data-action="select-student" data-id="${h(student.id)}">
          <span>
            <span class="row-title">${h(student.name)}</span>
            <span class="row-meta">${h(student.major)} · ${h(student.grade)}학년</span>
          </span>
          <span>${h(track.name)}</span>
          <span class="badge ${riskClass(student.risk)}">${h(student.risk)}</span>
          <span class="badge">${h(student.status)}</span>
          <strong>${completionRate(student, student.targetTrack)}%</strong>
        </button>
      `;
    })
    .join("");
}

function filteredStudents() {
  const q = state.studentSearch.trim().toLowerCase();
  return state.students.filter((s) => {
    const matchQuery = !q || `${s.name} ${s.major} ${s.interests} ${trackById(s.targetTrack).name}`.toLowerCase().includes(q);
    const matchStatus = state.studentStatus === "all" || s.status === state.studentStatus;
    return matchQuery && matchStatus;
  });
}

function renderHistory() {
  const s = selectedStudent();
  const track = trackById(s.targetTrack);
  const selectedTrack = state.trackFilter === "all" ? s.targetTrack : state.trackFilter;
  const termRecords = filteredCompletionRecords(s, selectedTrack);
  return `
    <section class="view">
      <div class="toolbar">
        <div>
          <span class="track-chip"><span class="track-dot" style="--track-color:${track.color}"></span>${h(s.name)} · ${h(track.name)}</span>
        </div>
        <div class="filter-group">
          <select id="history-year-filter" class="select" aria-label="이수 연도">
            ${option("all", "전체 연도", state.historyYear)}
            ${COMPLETION_YEARS.map((year) => option(String(year), `${year}년`, state.historyYear)).join("")}
          </select>
          <select id="history-semester-filter" class="select" aria-label="이수 학기">
            ${option("all", "전체 학기", state.historySemester)}
            ${COMPLETION_SEMESTERS.map((semester) => option(semester, semester, state.historySemester)).join("")}
          </select>
        </div>
      </div>
      <div class="track-filter-grid">
        <button class="segment ${state.trackFilter === "all" ? "is-active" : ""}" data-action="set-track-filter" data-track="all">목표 트랙</button>
        ${TRACKS.map((t) => `<button class="segment ${state.trackFilter === t.id ? "is-active" : ""}" data-action="set-track-filter" data-track="${h(t.id)}">${h(t.name)}</button>`).join("")}
      </div>
      <section class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">연도·학기별 이수 내역</h3>
            <p class="panel-subtitle">선택한 기준으로 ${h(s.name)} 학생의 이수 과목을 확인합니다.</p>
          </div>
          <span class="badge success">${termRecords.length}개 이수</span>
        </div>
        <div class="panel-body">
          ${renderTermSummary(s, selectedTrack)}
          <div class="term-history-list">
            ${termRecords.map(renderTermHistoryRow).join("") || `<div class="empty">선택한 연도/학기에 이수한 모듈이 없습니다.</div>`}
          </div>
        </div>
      </section>
      <div class="grid two history-module-grid">
        <section class="panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">교과형 이수 모듈</h3>
              <p class="panel-subtitle">체크하면 학생 수강이력에 즉시 저장됩니다.</p>
            </div>
          </div>
          <div class="panel-body">
            ${renderStageChecklist(s, selectedTrack)}
          </div>
        </section>
        <section class="panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">몰입형 PBL 이력</h3>
              <p class="panel-subtitle">교과형과 별도로 중급형·고급형을 관리합니다.</p>
            </div>
          </div>
          <div class="panel-body">
            ${renderPblChecklist(s, selectedTrack)}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderStageChecklist(student, trackId) {
  return `
    <div class="stage-board history-stage-board">
      ${STAGES.map((stage) => {
        const modules = curriculumModules(trackId).filter((m) => m.stage === stage);
        return `
          <section class="stage-column">
            <h3>${h(stage)}</h3>
            <div class="module-list">
              ${modules.map((m) => renderModuleCheck(student, m)).join("") || `<div class="empty">배정된 모듈 없음</div>`}
            </div>
          </section>
        `;
      }).join("")}
    </div>
  `;
}

function renderPblChecklist(student, trackId) {
  return `
    <div class="module-list">
      ${IMMERSIVE_STAGES.map((stage) => {
        const modules = immersiveModules(trackId).filter((m) => m.stage === stage);
        return `
          <div>
            <h3 class="panel-title">${h(stage)}</h3>
            <div class="module-list">
              ${modules.map((m) => renderModuleCheck(student, m)).join("") || `<div class="empty">해당 단계 PBL 없음</div>`}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderTermSummary(student, trackId) {
  const records = completionRecordsForTrack(student, trackId);
  const summary = COMPLETION_YEARS.flatMap((year) =>
    COMPLETION_SEMESTERS.map((semester) => ({
      year,
      semester,
      count: records.filter((record) => record.year === year && record.semester === semester).length
    }))
  ).filter((item) => item.count > 0);

  if (!summary.length) return `<div class="empty">아직 이수 기록이 없습니다.</div>`;

  return `
    <div class="term-summary-grid">
      ${summary.map((item) => `
        <button class="term-chip ${String(item.year) === state.historyYear && item.semester === state.historySemester ? "is-active" : ""}" type="button" data-action="set-history-term" data-year="${item.year}" data-semester="${h(item.semester)}">
          <strong>${item.year}년 ${h(item.semester)}</strong>
          <span>${item.count}개</span>
        </button>
      `).join("")}
    </div>
  `;
}

function renderTermHistoryRow(record) {
  const moduleInfo = MODULES.find((m) => m.id === record.moduleId);
  if (!moduleInfo) return "";
  const trackNames = moduleInfo.trackIds.map((id) => trackById(id).name).join(", ");
  return `
    <article class="term-history-row">
      <span>
        <strong>${h(moduleInfo.title)}</strong>
        <span class="row-meta">${h(moduleInfo.type)} · ${h(moduleInfo.stage)} · 권장 ${h(moduleInfo.semester)}</span>
      </span>
      <span class="badge">${record.year}년</span>
      <span class="badge success">${h(record.semester)}</span>
      <span class="row-meta">${h(trackNames)}</span>
    </article>
  `;
}

function filteredCompletionRecords(student, trackId) {
  return completionRecordsForTrack(student, trackId)
    .filter((record) => state.historyYear === "all" || String(record.year) === state.historyYear)
    .filter((record) => state.historySemester === "all" || record.semester === state.historySemester)
    .sort((a, b) => a.year - b.year || COMPLETION_SEMESTERS.indexOf(a.semester) - COMPLETION_SEMESTERS.indexOf(b.semester));
}

function completionRecordsForTrack(student, trackId) {
  const trackModuleIds = new Set([...curriculumModules(trackId), ...immersiveModules(trackId)].map((m) => m.id));
  return (student.completedRecords || [])
    .filter((record) => trackModuleIds.has(record.moduleId))
    .map((record) => ({ ...record, year: Number(record.year) }))
    .filter((record) => record.moduleId);
}

function completionRecord(student, moduleId) {
  return (student.completedRecords || []).find((record) => record.moduleId === moduleId);
}

function recordLabel(record) {
  if (!record) return "";
  return `${record.year}년 ${record.semester}`;
}

function activeCompletionRecord(moduleId) {
  const moduleInfo = MODULES.find((m) => m.id === moduleId);
  const year = state.historyYear === "all" ? 2026 : Number(state.historyYear);
  const semester = state.historySemester === "all"
    ? moduleInfo?.type === "몰입형" ? "계절학기" : "1학기"
    : state.historySemester;
  return { moduleId, year, semester };
}

function renderModuleCheck(student, m) {
  const checked = student.completedModules.includes(m.id);
  const record = completionRecord(student, m.id);
  return `
    <label class="module-row">
      <input class="check" type="checkbox" data-action="toggle-module" data-module="${h(m.id)}" ${checked ? "checked" : ""} />
      <span class="module-main">
        <strong class="module-title">${h(m.title)}</strong>
        <span class="row-meta">${h(m.type)} · ${h(m.stage)} · ${h(m.semester)}</span>
        <span class="badge-row module-tags">${m.tags.map((tag) => `<span class="badge">${h(tag)}</span>`).join("")}</span>
      </span>
      <span class="badge module-status ${checked ? "success" : ""}">${checked ? `이수 · ${recordLabel(record)}` : "미이수"}</span>
    </label>
  `;
}

function renderCurriculum() {
  const selected = state.trackFilter === "all" ? TRACKS : TRACKS.filter((t) => t.id === state.trackFilter);
  return `
    <section class="view">
      <div class="toolbar">
        <div class="track-filter-grid">
          <button class="segment ${state.trackFilter === "all" ? "is-active" : ""}" data-action="set-track-filter" data-track="all">전체</button>
          ${TRACKS.map((t) => `<button class="segment ${state.trackFilter === t.id ? "is-active" : ""}" data-action="set-track-filter" data-track="${h(t.id)}">${h(t.name)}</button>`).join("")}
        </div>
      </div>
      <section class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">부트캠프 트랙별 이수체계도 원본</h3>
            <p class="panel-subtitle">첨부 자료를 앱 안에서 함께 확인할 수 있습니다.</p>
          </div>
        </div>
        <div class="panel-body">
          <img class="reference-image" src="./assets/curriculum-map.jpg" alt="부트캠프 트랙별 이수체계도" />
        </div>
      </section>
      ${selected.map(renderTrackBoard).join("")}
    </section>
  `;
}

function renderTrackBoard(track) {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h3 class="panel-title"><span class="track-chip"><span class="track-dot" style="--track-color:${track.color}"></span>${h(track.name)}</span></h3>
          <p class="panel-subtitle">${h(track.target)} · ${h(track.group)} · ${h(track.summary)}</p>
        </div>
      </div>
      <div class="panel-body">
        <div class="stage-board">
          ${[...STAGES, "몰입형"].map((stage) => {
            const list = stage === "몰입형" ? immersiveModules(track.id) : curriculumModules(track.id).filter((m) => m.stage === stage);
            return `
              <section class="stage-column">
                <h3>${h(stage)}</h3>
                <div class="module-list">
                  ${list.map(renderCourseCard).join("") || `<div class="empty">모듈 없음</div>`}
                </div>
              </section>
            `;
          }).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCourseCard(m) {
  return `
    <article class="course-card">
      <p class="course-title">${h(m.title)}</p>
      <span class="course-meta">${h(m.type)} · ${h(m.stage)} · ${h(m.semester)}</span>
      <span class="badge-row">${m.tags.map((tag) => `<span class="badge">${h(tag)}</span>`).join("")}</span>
    </article>
  `;
}

function renderRecommend() {
  const s = selectedStudent();
  const rec = recommendationFor(s);
  return `
    <section class="view">
      <div class="grid two">
        <section class="panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">${h(s.name)} 추천 결과</h3>
              <p class="panel-subtitle">${h(s.major)} · 관심분야: ${h(s.interests)}</p>
            </div>
          </div>
          <div class="panel-body">
            <div class="recommend-list">
              ${rec.ranking.map((item, index) => renderRecommendationRow(item, index)).join("")}
            </div>
          </div>
        </section>
        <section class="panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">다음 상담 안내</h3>
              <p class="panel-subtitle">추천 근거를 상담 문장으로 정리합니다.</p>
            </div>
          </div>
          <div class="panel-body detail-stack">
            <p>${h(rec.advisorNote)}</p>
            <div>
              <h3 class="panel-title">다음 교과형 모듈</h3>
              <div class="module-list">
                ${rec.nextModules.map(renderCourseCard).join("") || `<div class="empty">목표 트랙 교과형 모듈을 대부분 이수했습니다.</div>`}
              </div>
            </div>
            <div>
              <h3 class="panel-title">몰입형 추천</h3>
              <div class="module-list">
                ${rec.pblModules.map(renderCourseCard).join("") || `<div class="empty">중급 교과형 모듈을 조금 더 이수한 뒤 PBL을 추천하세요.</div>`}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderRecommendationRow(item, index) {
  return `
    <article class="recommend-row">
      <div class="toolbar">
        <span class="track-chip"><span class="track-dot" style="--track-color:${item.track.color}"></span>${index + 1}. ${h(item.track.name)}</span>
        <strong>${item.score}점</strong>
      </div>
      <div class="progress"><span style="width:${item.score}%; --bar-color:${item.track.color}"></span></div>
      <p class="row-meta">${h(item.reason)}</p>
      <span class="badge-row">
        <span class="badge">${h(item.track.target)}</span>
        <span class="badge">${h(item.track.group)}</span>
        <span class="badge ${item.match === "강력 추천" ? "success" : "warning"}">${h(item.match)}</span>
      </span>
    </article>
  `;
}

function option(value, label, selected) {
  return `<option value="${h(value)}" ${value === selected ? "selected" : ""}>${h(label)}</option>`;
}

function curriculumModules(trackId) {
  return MODULES.filter((m) => m.type === "교과형" && m.trackIds.includes(trackId)).sort(moduleSort);
}

function immersiveModules(trackId) {
  return MODULES.filter((m) => m.type === "몰입형" && m.trackIds.includes(trackId)).sort(moduleSort);
}

function moduleSort(a, b) {
  const order = { "초급": 1, "중급": 2, "고급": 3, "중급형": 4, "고급형": 5 };
  return (order[a.stage] || 9) - (order[b.stage] || 9) || a.title.localeCompare(b.title, "ko");
}

function completionRate(student, trackId) {
  const list = curriculumModules(trackId);
  if (!list.length) return 0;
  const done = list.filter((m) => student.completedModules.includes(m.id)).length;
  return Math.round((done / list.length) * 100);
}

function recommendationFor(student) {
  const ranking = TRACKS.map((track) => scoreTrack(student, track)).sort((a, b) => b.score - a.score);
  const top = ranking[0];
  const completed = new Set(student.completedModules);
  const targetModules = curriculumModules(top.track.id);
  const nextModules = targetModules.filter((m) => !completed.has(m.id)).slice(0, 5);
  const intermediateDone = targetModules.filter((m) => m.stage === "중급" && completed.has(m.id)).length;
  const pblReady = completionRate(student, top.track.id) >= 45 || intermediateDone >= 2;
  const pblModules = pblReady ? immersiveModules(top.track.id).filter((m) => !completed.has(m.id)).slice(0, 3) : [];
  const firstNext = nextModules[0]?.title || "몰입형 프로젝트";
  const advisorNote = `${student.name} 학생은 ${top.track.name} 적합도가 가장 높습니다. 현재 목표 트랙 교과형 이수율은 ${completionRate(student, top.track.id)}%이며, 다음 상담에서는 ${firstNext} 이수 계획과 ${pblReady ? "몰입형 PBL 진입 가능성" : "중급 교과형 기반 보강"}을 중심으로 안내하면 좋습니다.`;
  return { ranking, top, nextModules, pblModules, pblReady, advisorNote };
}

function scoreTrack(student, track) {
  const modules = curriculumModules(track.id);
  const completed = modules.filter((m) => student.completedModules.includes(m.id));
  const completion = modules.length ? completed.length / modules.length : 0;
  const interestText = `${student.interests} ${student.major}`.toLowerCase();
  const keywordHits = track.keywords.filter((keyword) => interestText.includes(keyword.toLowerCase())).length;
  const majorFit = track.target === "전공무관" || student.major.includes(track.target) ? 18 : student.major.includes("인공지능") && track.group === "코어AI트랙" ? 12 : 4;
  const goalBoost = student.targetTrack === track.id ? 12 : 0;
  const score = Math.min(99, Math.round(completion * 50 + keywordHits * 7 + majorFit + goalBoost));
  const match = score >= 70 ? "강력 추천" : score >= 48 ? "추천" : "탐색";
  const reason = `${completed.length}/${modules.length}개 교과형 모듈 이수, 관심 키워드 ${keywordHits}개 일치, 전공 적합도 반영`;
  return { track, score, match, reason };
}

function riskScore(risk) {
  return { "높음": 3, "중간": 2, "낮음": 1 }[risk] || 0;
}

function riskClass(risk) {
  if (risk === "높음") return "danger";
  if (risk === "중간") return "warning";
  return "success";
}

function handleAction(target) {
  const action = target.dataset.action;
  if (!action) return;

  if (action === "set-view") {
    state.view = target.dataset.view;
    render();
  }

  if (action === "open-sidebar-transcript-upload") {
    document.getElementById("sidebar-transcript-input")?.click();
    return;
  }

  if (action === "clear-global-search") {
    state.globalSearch = "";
    const input = document.getElementById("global-search-input");
    if (input) input.value = "";
    updateGlobalSearchResultsSlot();
    return;
  }

  if (action === "open-search-student") {
    state.selectedStudentId = target.dataset.id;
    state.view = "students";
    render();
    return;
  }

  if (action === "open-search-track") {
    state.trackFilter = target.dataset.track || "all";
    state.view = "curriculum";
    render();
    return;
  }

  if (action === "open-search-module") {
    const moduleInfo = byId(MODULES, target.dataset.module);
    state.trackFilter = moduleInfo?.trackIds?.[0] || "all";
    state.view = "curriculum";
    render();
    return;
  }

  if (action === "toggle-dashboard-drilldown") {
    const panel = target.dataset.panel;
    const isClosing = state.dashboardDrilldown === panel;
    state.dashboardDrilldown = isClosing ? null : panel;
    state.dashboardPage = 1;
    render();
  }

  if (action === "close-dashboard-drilldown") {
    state.dashboardDrilldown = null;
    state.dashboardPage = 1;
    render();
  }

  if (action === "open-track-modal") {
    state.courseModal = {
      groupId: target.dataset.group,
      stage: target.dataset.stage,
      studentPanel: target.dataset.panel || null
    };
    render();
  }

  if (action === "open-info-modal") {
    state.infoModal = {
      kind: target.dataset.kind,
      trackId: target.dataset.track || "",
      groupId: target.dataset.group || "",
      stage: target.dataset.stage || "",
      moduleId: target.dataset.module || ""
    };
    render();
    return;
  }

  if (action === "close-info-modal") {
    state.infoModal = null;
    render();
    return;
  }

  if (action === "open-course-type-modal") {
    state.courseModal = {
      groupId: target.dataset.group,
      detailId: target.dataset.detail || "",
      stage: target.dataset.stage,
      type: target.dataset.type,
      typeStage: target.dataset.typeStage
    };
    render();
  }

  if (action === "set-modal-student-panel") {
    if (!state.courseModal) return;
    const panel = target.dataset.panel;
    state.courseModal = {
      ...state.courseModal,
      studentPanel: state.courseModal.studentPanel === panel ? null : panel
    };
    render();
  }

  if (action === "toggle-student-recommendation") {
    if (!state.courseModal) return;
    const studentId = target.dataset.id;
    state.courseModal = {
      ...state.courseModal,
      recommendStudentId: state.courseModal.recommendStudentId === studentId ? null : studentId
    };
    render();
  }

  if (action === "close-track-modal") {
    state.courseModal = null;
    render();
  }

  if (action === "confirm-transcript-review") {
    confirmTranscriptReview();
    return;
  }

  if (action === "edit-transcript-review") {
    if (!state.transcriptReview) return;
    state.transcriptReview.editMode = !state.transcriptReview.editMode;
    render();
    return;
  }

  if (action === "cancel-transcript-review") {
    state.transcriptReview = null;
    state.transcriptUploadMessage = "성적증명서 저장을 취소했습니다.";
    render();
    return;
  }

  if (action === "set-dashboard-page") {
    state.dashboardPage = Number(target.dataset.page) || 1;
    render();
  }

  if (action === "dashboard-counseling-page") {
    state.dashboardCounselingPage = Number(target.dataset.page) || 1;
    render();
  }

  if (action === "select-student") {
    state.selectedStudentId = target.dataset.id;
    render();
  }

  if (action === "set-track-filter") {
    state.trackFilter = target.dataset.track;
    render();
  }

  if (action === "set-history-term") {
    state.historyYear = target.dataset.year;
    state.historySemester = target.dataset.semester;
    render();
  }

  if (action === "toggle-module") {
    const s = selectedStudent();
    const id = target.dataset.module;
    const set = new Set(s.completedModules);
    if (target.checked) {
      set.add(id);
      const records = (s.completedRecords || []).filter((record) => record.moduleId !== id);
      records.push(activeCompletionRecord(id));
      s.completedRecords = records;
    } else {
      set.delete(id);
      s.completedRecords = (s.completedRecords || []).filter((record) => record.moduleId !== id);
    }
    s.completedModules = [...set];
    persist();
    render();
  }

  if (action === "mark-counseling") {
    selectedStudent().status = "상담 완료";
    selectedStudent().risk = "낮음";
    persist();
    render();
  }

  if (action === "reset-demo") {
    state.students = cloneStudentList(SAMPLE_STUDENTS);
    state.selectedStudentId = state.students[0].id;
    persist();
    render();
  }

  if (action === "export-csv") {
    exportCsv();
  }
}

function exportCsv() {
  const headers = ["이름", "전공", "학년", "목표트랙", "이수율", "상담상태", "위험도", "상담기록수", "관심분야", "메모"];
  const rows = state.students.map((s) => [
    s.name,
    s.major,
    `${s.grade}학년`,
    trackById(s.targetTrack).name,
    `${completionRate(s, s.targetTrack)}%`,
    s.status,
    s.risk,
    (s.counselingRecords || []).length,
    s.interests,
    s.memo
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "pnu-bootcamp-students.csv";
  link.click();
  URL.revokeObjectURL(url);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (target?.dataset.action === "toggle-module") return;
  if (target) handleAction(target);
});

document.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target?.dataset?.action === "open-track-modal") {
    event.preventDefault();
    handleAction(event.target);
  }

  if (event.key === "Escape" && state.courseModal) {
    state.courseModal = null;
    render();
  }

  if (event.key === "Escape" && state.infoModal) {
    state.infoModal = null;
    render();
  }

  if (event.key === "Escape" && state.transcriptReview) {
    state.transcriptReview = null;
    state.transcriptUploadMessage = "성적증명서 저장을 취소했습니다.";
    render();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.dataset.action === "toggle-module") {
    handleAction(event.target);
  }

  if (event.target.dataset.reviewField) {
    updateTranscriptReviewField(event.target.dataset.reviewField, event.target.value);
    render();
    return;
  }

  if (event.target.dataset.reviewMatch) {
    updateTranscriptReviewMatch(event.target.dataset.reviewMatch, event.target.checked);
    render();
    return;
  }

  if (event.target.dataset.reviewMatchTerm) {
    updateTranscriptReviewMatchTerm(event.target.dataset.reviewMatchTerm, event.target.dataset.termField, event.target.value);
    render();
    return;
  }

  if (event.target.id === "sidebar-transcript-input") {
    const file = event.target.files?.[0];
    if (file) handleTranscriptFileUpload(file, selectedStudent().id, { openStudentDetail: true });
    event.target.value = "";
    return;
  }

  if (event.target.id === "global-student-select") {
    state.selectedStudentId = event.target.value;
    render();
  }

  if (event.target.id === "student-status-filter") {
    state.studentStatus = event.target.value;
    const body = document.getElementById("student-table-body");
    const count = document.getElementById("student-count");
    if (body) body.innerHTML = renderStudentRows();
    if (count) count.textContent = filteredStudents().length;
  }

  if (event.target.id === "history-year-filter") {
    state.historyYear = event.target.value;
    render();
  }

  if (event.target.id === "history-semester-filter") {
    state.historySemester = event.target.value;
    render();
  }

  if (event.target.id === "dashboard-year-filter") {
    state.dashboardYear = event.target.value;
    state.dashboardPage = 1;
    state.dashboardCounselingPage = 1;
    render();
  }

  if (event.target.id === "dashboard-semester-filter") {
    state.dashboardSemester = event.target.value;
    state.dashboardPage = 1;
    state.dashboardCounselingPage = 1;
    render();
  }

  if (event.target.id === "dashboard-stage-filter") {
    state.dashboardStage = event.target.value;
    state.dashboardPage = 1;
    state.dashboardCounselingPage = 1;
    render();
  }

  if (event.target.id === "memo-input") {
    selectedStudent().memo = event.target.value;
    persist();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.dataset.reviewField) {
    updateTranscriptReviewField(event.target.dataset.reviewField, event.target.value);
    return;
  }

  if (event.target.dataset.reviewMatchTerm) {
    updateTranscriptReviewMatchTerm(event.target.dataset.reviewMatchTerm, event.target.dataset.termField, event.target.value);
    return;
  }

  if (event.target.id === "student-search") {
    state.studentSearch = event.target.value;
    const body = document.getElementById("student-table-body");
    const count = document.getElementById("student-count");
    if (body) body.innerHTML = renderStudentRows();
    if (count) count.textContent = filteredStudents().length;
  }

  if (event.target.id === "global-search-input") {
    state.globalSearch = event.target.value;
    updateGlobalSearchResultsSlot();
  }
});

document.addEventListener("submit", async (event) => {
  if (event.target.id === "transcript-upload-form") {
    event.preventDefault();
    await handleTranscriptUpload(event.target);
    return;
  }

  if (event.target.id === "counseling-upload-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    const s = selectedStudent();
    const record = createCounselingRecord(s, form);
    s.counselingRecords = [record, ...(s.counselingRecords || [])];
    s.memo = record.summary;
    s.status = "진행중";
    persist();
    render();
    return;
  }

  if (event.target.id !== "add-student-form") return;
  event.preventDefault();
  const form = new FormData(event.target);
  const newStudent = student(
    `s-${Date.now()}`,
    form.get("name"),
    form.get("major"),
    Number(form.get("grade")),
    form.get("targetTrack"),
    form.get("interests"),
    [],
    "상담 예정",
    "중간",
    "신규 등록 학생. 초기 상담 필요"
  );
  state.students = [newStudent, ...state.students];
  state.selectedStudentId = newStudent.id;
  persist();
  render();
});

render();
