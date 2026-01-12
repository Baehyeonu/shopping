const profile = {
  name: "당신의 이름",
  role: "프론트엔드 개발자",
  tagline: "문제를 구조화하고, 브랜드의 감도를 화면 위에 구현합니다.",
  intro:
    "사용자의 흐름과 비즈니스 목표가 만나는 지점을 찾고, 빠르게 테스트할 수 있는 인터페이스를 만드는 데 집중합니다.",
  location: "Seoul, KR",
  status: "프로젝트/협업 문의 환영",
  email: "hello@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/your-id" },
    { label: "Blog", href: "https://your-blog.com" },
  ],
  stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
};

const focusAreas = [
  {
    title: "제품 흐름 설계",
    description:
      "사용자 여정을 정리하고, 필요한 화면과 정보를 우선순위에 맞게 배치합니다.",
  },
  {
    title: "프론트엔드 구현",
    description:
      "컴포넌트 구조를 단순하게 유지하고, 재사용 가능한 UI를 설계합니다.",
  },
  {
    title: "협업과 정리",
    description:
      "디자인, 기획과 언어를 맞추기 위해 문서와 커뮤니케이션 방식을 정돈합니다.",
  },
];

const nowItems = [
  "Next.js 기반의 랜딩/대시보드 프로젝트 진행",
  "Tailwind로 빠르고 일관된 UI 시스템 정리",
  "퍼포먼스 개선과 접근성 체크리스트 구축",
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-[10%] h-72 w-72 rounded-full bg-[var(--accent)] opacity-25 blur-3xl animate-[float-slow_14s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[var(--foreground)] opacity-10 blur-3xl animate-[float-slow_16s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--accent-strong)] opacity-20 blur-3xl animate-[float-slow_18s_ease-in-out_infinite]"
      />

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 lg:px-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            <span className="h-[1px] w-10 bg-[var(--muted)]" />
            Intro
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
            <a className="transition hover:text-[var(--foreground)]" href="#about">
              소개
            </a>
            <a className="transition hover:text-[var(--foreground)]" href="#focus">
              강점
            </a>
            <a className="transition hover:text-[var(--foreground)]" href="#contact">
              연락
            </a>
          </nav>
        </header>

        <section className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            className="space-y-6 opacity-0 animate-[fade-up_0.8s_ease-out_forwards]"
            style={{ animationDelay: "80ms" }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              {profile.role}
            </p>
            <h1 className="text-5xl font-[var(--font-display)] leading-[1.05] text-[var(--foreground)] md:text-6xl">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              {profile.tagline}
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-[var(--foreground)]">
              <span className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2">
                {profile.location}
              </span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2">
                {profile.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent-strong)] hover:text-white"
                href={`mailto:${profile.email}`}
              >
                이메일 보내기
              </a>
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className="space-y-6 rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_20px_60px_rgba(26,26,21,0.1)] opacity-0 animate-[fade-up_0.8s_ease-out_forwards]"
            style={{ animationDelay: "180ms" }}
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                About
              </p>
              <p className="text-base leading-relaxed text-[var(--foreground)]">
                {profile.intro}
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                Now
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                {nowItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-6 opacity-0 animate-[fade-up_0.8s_ease-out_forwards] md:grid-cols-[0.45fr_0.55fr]"
          style={{ animationDelay: "240ms" }}
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              소개
            </p>
            <h2 className="text-3xl font-[var(--font-display)] text-[var(--foreground)]">
              이해하기 쉬운 화면이 가장 빠른 성장이라고 믿습니다.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-[var(--muted)]">
            <p>
              프로젝트의 목표를 명확하게 정리하고, 사용자가 망설이지 않고
              이동할 수 있는 구조를 설계합니다. 이를 위해 빠른 피드백 루프와
              가벼운 프로토타입을 적극 활용합니다.
            </p>
            <p>
              디자인과 개발 사이의 간극을 줄이고, 팀이 공유할 수 있는 언어를
              만드는 데 관심이 많습니다.
            </p>
          </div>
        </section>

        <section
          id="focus"
          className="space-y-6 opacity-0 animate-[fade-up_0.8s_ease-out_forwards]"
          style={{ animationDelay: "320ms" }}
        >
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                강점
              </p>
              <h2 className="text-3xl font-[var(--font-display)] text-[var(--foreground)]">
                제품의 흐름부터 구현까지, 연결된 작업을 선호합니다.
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 text-left shadow-[0_14px_40px_rgba(26,26,21,0.08)]"
              >
                <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-8 rounded-3xl border border-[var(--line)] bg-[var(--card)] p-8 opacity-0 animate-[fade-up_0.8s_ease-out_forwards] md:grid-cols-[1.1fr_0.9fr]"
          style={{ animationDelay: "400ms" }}
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              연락
            </p>
            <h2 className="text-3xl font-[var(--font-display)] text-[var(--foreground)]">
              함께 만들고 싶은 아이디어가 있다면 편하게 연락 주세요.
            </h2>
            <p className="text-sm text-[var(--muted)]">
              간단한 소개와 프로젝트 목표를 알려주시면 더 빠르게 답장드릴 수
              있어요.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 text-sm text-[var(--muted)]">
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Email
              </p>
              <p className="text-base font-semibold text-[var(--foreground)]">
                {profile.email}
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:translate-y-[-2px]"
              href={`mailto:${profile.email}`}
            >
              메일로 연결하기
            </a>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)] md:flex-row">
          <span>© {currentYear} {profile.name}. All rights reserved.</span>
          <span>Built with Next.js & Tailwind CSS.</span>
        </footer>
      </main>
    </div>
  );
}
