const profile = {
  name: "김서연",
  title: "프론트엔드 개발자",
  tagline: "사용자 흐름을 매끄럽게 만드는 인터페이스를 설계합니다.",
  intro:
    "디자인 시스템과 성능 개선을 연결해 팀이 더 빠르게 실험할 수 있는 환경을 만드는 것을 좋아합니다.",
  detail:
    "디자인 시스템을 코드로 정리하고, 실제 서비스에서 성능과 접근성을 동시에 챙기는 작업을 즐깁니다. 기능을 빠르게 구현하는 것보다 팀이 재사용할 수 있는 구조를 만드는 데 집중합니다.",
  location: {
    city: "서울",
    country: "대한민국",
  },
  email: "hello@seoyeon.dev",
  phone: "010-4821-2345",
  links: {
    github: "https://github.com/seoyeon-dev",
    blog: "https://seoyeon.dev",
  },
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "TanStack Query",
    "Storybook",
    "Playwright",
  ],
  tags: ["사용자 경험", "디자인 시스템", "성능 최적화"],
  metrics: [
    {
      value: "18+",
      label: "프로덕션 릴리스",
      note: "분기별 기능 배포",
    },
    {
      value: "45개",
      label: "재사용 컴포넌트",
      note: "디자인 시스템 운영",
    },
    {
      value: "LCP 42%↓",
      label: "성능 개선",
      note: "실사용 지표 기준",
    },
  ],
  values: ["문서화된 결정", "디자이너와 동일한 언어", "실험 가능한 코드"],
  journey: [
    {
      year: "2020",
      title: "커머스 리디자인",
      description: "구매 전환 흐름을 재설계해 이탈률을 줄였습니다.",
    },
    {
      year: "2022",
      title: "디자인 시스템 구축",
      description: "토큰-컴포넌트 체계로 화면 제작 속도를 개선했습니다.",
    },
    {
      year: "2024",
      title: "성능 모니터링 도입",
      description: "Lighthouse와 실측 지표 리포트를 자동화했습니다.",
    },
  ],
  process: [
    {
      step: "01",
      title: "문제 정의",
      description: "사용자 여정과 KPI를 먼저 합의합니다.",
    },
    {
      step: "02",
      title: "인터페이스 설계",
      description: "토큰과 컴포넌트로 시나리오를 빠르게 검증합니다.",
    },
    {
      step: "03",
      title: "개선 반복",
      description: "측정 데이터를 기반으로 우선순위를 조정합니다.",
    },
  ],
  highlights: [
    {
      title: "협업 방식",
      description:
        "기획 의도와 디자인 맥락을 이해하기 위해 초기부터 함께 논의하고, 토큰과 컴포넌트로 일관된 언어를 만듭니다.",
    },
    {
      title: "현재 집중",
      description:
        "성능 지표를 팀이 이해하기 쉬운 스토리로 풀어내고, 재렌더링 비용을 줄이는 구조를 연구하고 있습니다.",
    },
    {
      title: "강점",
      description:
        "기획-디자인-개발 사이의 단절을 줄이는 UI 구조화를 잘합니다.",
    },
  ],
  labels: {
    badge: "프론트엔드 프로필",
    aboutTitle: "상세 소개",
    stackTitle: "기술 스택",
    stackNote: "서비스에 적용 가능한 안정적인 스택을 선호합니다.",
    contactTitle: "연락처",
    linkTitle: "링크",
    ctaEmail: "이메일 보내기",
    ctaCall: "통화하기",
    highlightsTitle: "작업 포커스",
    metricsTitle: "작업 스냅샷",
    journeyTitle: "프로젝트 여정",
    processTitle: "작업 프로세스",
    valuesTitle: "협업 가치",
  },
  footer: "새로운 프로젝트 제안을 기다리고 있습니다.",
};

const phoneHref = `tel:${profile.phone.replace(/[^0-9+]/g, "")}`;

const contactItems = [
  {
    label: "이메일",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "전화번호",
    value: profile.phone,
    href: phoneHref,
  },
];

const linkItems = [
  {
    label: "깃허브",
    value: profile.links.github.replace(/^https?:\/\//, ""),
    href: profile.links.github,
  },
  {
    label: "블로그",
    value: profile.links.blog.replace(/^https?:\/\//, ""),
    href: profile.links.blog,
  },
];

const locationText = `${profile.location.city}, ${profile.location.country}`;
const tags = [locationText, ...profile.tags];

const highlightStyles = [
  {
    card: "bg-white/90 text-[#1f1a14]",
    title: "text-[#1f1a14]",
    text: "text-[#3f352a]",
  },
  {
    card: "bg-[#0f766e]/90 text-white",
    title: "text-white",
    text: "text-white/80",
  },
  {
    card: "bg-[#f8deb3]/70 text-[#1f1a14]",
    title: "text-[#1f1a14]",
    text: "text-[#4a3c2c]",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f2ea] text-[#1f1a14]">
      <div className="relative isolate overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 grid-dots opacity-40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 -top-32 h-80 w-80 rounded-full bg-[#f8deb3]/70 blur-3xl animate-[float-slow_11s_ease-in-out_infinite]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[-160px] top-24 h-96 w-96 rounded-full bg-[#bfe4de]/70 blur-3xl animate-[drift_16s_ease-in-out_infinite]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-[55%] h-72 w-72 -translate-x-1/2 rounded-full bg-[#f0b6a2]/40 blur-[120px] animate-[pulse-glow_12s_ease-in-out_infinite]"
          aria-hidden="true"
        />
        <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-20 lg:pt-24">
          <header className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#eadfce] bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#7a6a5a] animate-[fade-in_0.7s_ease-out_both]">
                {profile.labels.badge}
              </span>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-[#0f766e] animate-[fade-in-up_0.6s_ease-out_0.1s_both]">
                  {profile.title}
                </p>
                <h1 className="font-serif text-4xl leading-tight text-[#1f1a14] sm:text-5xl lg:text-6xl animate-[fade-in-up_0.75s_ease-out_0.15s_both]">
                  {profile.name}
                </h1>
                <p className="max-w-xl text-lg leading-8 text-[#3f352a] animate-[fade-in-up_0.8s_ease-out_0.2s_both]">
                  {profile.tagline}
                </p>
                <p className="max-w-xl text-sm leading-7 text-[#5a4e43] animate-[fade-in-up_0.85s_ease-out_0.25s_both]">
                  {profile.intro}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b5f52] animate-[fade-in-up_0.85s_ease-out_0.3s_both]">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#eadfce] bg-white/70 px-4 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-4 animate-[fade-in-up_0.9s_ease-out_0.35s_both]">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7a6a5a]">
                  {profile.labels.metricsTitle}
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {profile.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-[#eadfce] bg-white/80 px-4 py-3 shadow-[0_12px_30px_-25px_rgba(20,10,0,0.25)]"
                    >
                      <p className="text-xl font-semibold text-[#1f1a14]">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-xs text-[#6b5f52]">
                        {metric.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row animate-[fade-in-up_0.9s_ease-out_0.4s_both]">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[#0f766e] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-20px_rgba(15,118,110,0.8)] transition hover:bg-[#115e59]"
                  href={`mailto:${profile.email}`}
                >
                  {profile.labels.ctaEmail}
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-[#0f766e]/30 bg-white/80 px-5 py-3 text-sm font-semibold text-[#0f766e] transition hover:border-[#0f766e]/60 hover:bg-white"
                  href={phoneHref}
                >
                  {profile.labels.ctaCall}
                </a>
              </div>
            </div>
            <aside className="relative rounded-3xl border border-[#eadfce] bg-white/85 p-6 shadow-[0_30px_80px_-60px_rgba(20,10,0,0.4)] backdrop-blur animate-[fade-in-right_0.9s_ease-out_0.2s_both]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7a6a5a]">
                  {profile.labels.aboutTitle}
                </p>
                <span className="rounded-full border border-[#eadfce] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b5f52]">
                  {locationText}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-2xl text-[#1f1a14]">
                {profile.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#3f352a]">
                {profile.detail}
              </p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                  {profile.labels.valuesTitle}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[#3f352a]">
                  {profile.values.map((value) => (
                    <li key={value} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0f766e]" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-[#eadfce] bg-[#f7f2ea] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                    {profile.labels.contactTitle}
                  </p>
                  <div className="mt-3 space-y-3">
                    {contactItems.map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-wrap items-center justify-between gap-2"
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                          {item.label}
                        </span>
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-[#1f1a14] transition hover:text-[#0f766e]"
                        >
                          {item.value}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[#eadfce] bg-white/90 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                    {profile.labels.linkTitle}
                  </p>
                  <div className="mt-3 space-y-3">
                    {linkItems.map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-wrap items-center justify-between gap-2"
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                          {item.label}
                        </span>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-[#1f1a14] transition hover:text-[#0f766e]"
                        >
                          {item.value}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </header>
          <section className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] animate-[fade-in-up_0.9s_ease-out_0.2s_both]">
            <div className="rounded-3xl border border-[#eadfce] bg-white/85 p-6 shadow-[0_18px_50px_-40px_rgba(20,10,0,0.4)]">
              <h2 className="font-serif text-2xl text-[#1f1a14]">
                {profile.labels.stackTitle}
              </h2>
              <p className="mt-2 text-sm text-[#6b5f52]">
                {profile.labels.stackNote}
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {profile.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[#eadfce] bg-[#f7f2ea] px-4 py-2 text-sm font-semibold text-[#3f352a]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[#eadfce] bg-white/85 p-6 shadow-[0_18px_50px_-40px_rgba(20,10,0,0.4)]">
              <h2 className="font-serif text-2xl text-[#1f1a14]">
                {profile.labels.journeyTitle}
              </h2>
              <div className="mt-6 border-l border-[#eadfce] pl-6">
                <ul className="space-y-6">
                  {profile.journey.map((item) => (
                    <li key={item.title} className="relative">
                      <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-[#eadfce] bg-[#0f766e]" />
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                        {item.year}
                      </p>
                      <h3 className="mt-2 text-base font-semibold text-[#1f1a14]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#3f352a]">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="mt-14 animate-[fade-in-up_0.9s_ease-out_0.25s_both]">
            <h2 className="font-serif text-2xl text-[#1f1a14]">
              {profile.labels.processTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {profile.process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl border border-[#eadfce] bg-gradient-to-br from-white via-white to-[#f8deb3]/40 p-6 shadow-[0_18px_40px_-30px_rgba(20,10,0,0.25)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                    {item.step}
                  </p>
                  <h3 className="mt-4 font-serif text-lg text-[#1f1a14]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#3f352a]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-14 animate-[fade-in-up_0.9s_ease-out_0.3s_both]">
            <h2 className="font-serif text-2xl text-[#1f1a14]">
              {profile.labels.highlightsTitle}
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {profile.highlights.map((item, index) => {
                const style = highlightStyles[index % highlightStyles.length];
                return (
                  <div
                    key={item.title}
                    className={`rounded-3xl border border-[#eadfce] p-6 shadow-[0_18px_40px_-30px_rgba(20,10,0,0.25)] ${style.card}`}
                  >
                    <h3 className={`font-serif text-lg ${style.title}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-7 ${style.text}`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
          <footer className="mt-16 text-xs text-[#6b5f52]">
            {profile.footer}
          </footer>
        </main>
      </div>
    </div>
  );
}
