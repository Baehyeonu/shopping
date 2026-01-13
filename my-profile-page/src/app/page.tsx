const profile = {
  name: "김서연",
  title: "프론트엔드 개발자",
  tagline: "사용자 흐름을 매끄럽게 만드는 인터페이스를 설계합니다.",
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

const tags = [
  `${profile.location.city}, ${profile.location.country}`,
  ...profile.tags,
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f2ea] text-[#1f1a14]">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(255,255,255,0.85),transparent_60%),radial-gradient(900px_circle_at_90%_0%,rgba(196,240,235,0.65),transparent_55%),radial-gradient(800px_circle_at_50%_100%,rgba(252,220,184,0.6),transparent_60%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-28 top-16 h-64 w-64 rounded-full bg-[#f8deb3]/70 blur-3xl animate-[float-slow_10s_ease-in-out_infinite]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[-120px] top-[-80px] h-72 w-72 rounded-full bg-[#bfe4de]/70 blur-3xl animate-[float-slow_12s_ease-in-out_infinite]"
          aria-hidden="true"
        />
        <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-20 lg:pt-24">
          <header className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#eadfce] bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#7a6a5a] animate-[fade-in_0.7s_ease-out_both]">
                {profile.labels.badge}
              </span>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-[#0f766e] animate-[fade-in-up_0.7s_ease-out_0.1s_both]">
                  {profile.title}
                </p>
                <h1 className="font-serif text-4xl leading-tight text-[#1f1a14] sm:text-5xl animate-[fade-in-up_0.8s_ease-out_0.15s_both]">
                  {profile.name}
                </h1>
                <p className="max-w-xl text-lg leading-8 text-[#3f352a] animate-[fade-in-up_0.8s_ease-out_0.2s_both]">
                  {profile.tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-[#6b5f52] animate-[fade-in-up_0.8s_ease-out_0.25s_both]">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#eadfce] bg-white/70 px-4 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row animate-[fade-in-up_0.8s_ease-out_0.3s_both]">
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
            <aside className="relative rounded-3xl border border-[#eadfce] bg-white/80 p-6 shadow-[0_30px_80px_-60px_rgba(20,10,0,0.4)] backdrop-blur animate-[fade-in-up_0.9s_ease-out_0.2s_both]">
              <h2 className="font-serif text-xl text-[#1f1a14]">
                {profile.labels.aboutTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#3f352a]">
                {profile.detail}
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                    {profile.labels.contactTitle}
                  </p>
                  <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                    {contactItems.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[#eadfce] bg-[#f7f2ea] px-4 py-3"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                          {item.label}
                        </dt>
                        <dd className="mt-2 text-sm font-semibold text-[#1f1a14]">
                          <a
                            href={item.href}
                            className="transition hover:text-[#0f766e]"
                          >
                            {item.value}
                          </a>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                    {profile.labels.linkTitle}
                  </p>
                  <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                    {linkItems.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[#eadfce] bg-white/90 px-4 py-3"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6a5a]">
                          {item.label}
                        </dt>
                        <dd className="mt-2 text-sm font-semibold text-[#1f1a14]">
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-[#0f766e]"
                          >
                            {item.value}
                          </a>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </aside>
          </header>
          <section className="mt-16 animate-[fade-in-up_0.9s_ease-out_0.25s_both]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl text-[#1f1a14]">
                  {profile.labels.stackTitle}
                </h2>
                <p className="mt-2 text-sm text-[#6b5f52]">
                  {profile.labels.stackNote}
                </p>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {profile.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[#eadfce] bg-white/80 px-4 py-3 text-sm font-semibold text-[#3f352a] shadow-[0_12px_30px_-25px_rgba(20,10,0,0.25)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-14 animate-[fade-in-up_0.9s_ease-out_0.3s_both]">
            <h2 className="font-serif text-2xl text-[#1f1a14]">
              {profile.labels.highlightsTitle}
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {profile.highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#eadfce] bg-white/80 p-6 shadow-[0_18px_40px_-30px_rgba(20,10,0,0.25)]"
                >
                  <h3 className="font-serif text-lg text-[#1f1a14]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#3f352a]">
                    {item.description}
                  </p>
                </div>
              ))}
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
