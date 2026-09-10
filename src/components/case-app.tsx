import { useEffect, useMemo, useState, Fragment } from "react";
import {
  AlertTriangle,
  BarChart3,
  FileText,
  Gavel,
  Landmark,
  Mail,
  MapPin,
  Scale,
  Search,
  X,
} from "lucide-react";
import {
  ALL_EVENTS,
  CASE,
  CATEGORIES,
  CATEGORY_META,
  EVENT_COUNT,
  KEY_COUNT,
  LEGAL_ISSUES,
  PHASE_COUNT,
  PHASES,
  type CaseEvent,
  type EventCategory,
  type LegalIssue,
  type Phase,
} from "@/lib/case-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CAT_ICON = {
  contract: FileText,
  test: BarChart3,
  mail: Mail,
  arb: Gavel,
} as const;

const CAT_DOT = {
  contract: "bg-cat-contract",
  test: "bg-cat-test",
  mail: "bg-cat-mail",
  arb: "bg-cat-arb",
} as const;

function matches(
  event: CaseEvent,
  category: EventCategory | "all",
  keyOnly: boolean,
  issue: LegalIssue | null,
  query: string,
) {
  if (category !== "all" && event.category !== category) return false;
  if (keyOnly && !event.key) return false;
  if (issue && !event.issues.includes(issue)) return false;
  if (query) {
    const hay = `${event.title} ${event.body} ${event.date} ${event.exhibit ?? ""}`;
    if (!hay.includes(query.trim())) return false;
  }
  return true;
}

function scrollToId(id: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });
}

export function CaseApp() {
  const [category, setCategory] = useState<EventCategory | "all">("all");
  const [keyOnly, setKeyOnly] = useState(false);
  const [issue, setIssue] = useState<LegalIssue | null>(null);
  const [query, setQuery] = useState("");
  const [activePhase, setActivePhase] = useState(PHASES[0]?.id ?? "p1");

  const filteredPhases = useMemo(() => {
    return PHASES.map((phase) => ({
      ...phase,
      events: phase.events.filter((e) =>
        matches(e, category, keyOnly, issue, query),
      ),
    })).filter((phase) => phase.events.length > 0);
  }, [category, keyOnly, issue, query]);

  const visibleCount = filteredPhases.reduce((n, p) => n + p.events.length, 0);
  const filtered =
    category !== "all" || keyOnly || issue !== null || query.trim().length > 0;

  useEffect(() => {
    const nodes = filteredPhases
      .map((p) => document.getElementById(p.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (nodes.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target.id) setActivePhase(top.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: [0.1, 0.4, 0.8] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [filteredPhases]);

  function toggleIssue(id: LegalIssue) {
    setIssue((cur) => (cur === id ? null : id));
    window.requestAnimationFrame(() => scrollToId("timeline"));
  }

  function clearFilters() {
    setCategory("all");
    setKeyOnly(false);
    setIssue(null);
    setQuery("");
  }

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <a
        href="#timeline"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-forest-fg"
      >
        انتقل إلى الخط الزمني
      </a>

      <Masthead issue={issue} onToggleIssue={toggleIssue} />

      <section id="timeline" className="scroll-mt-4 pb-24">
        <div className="sticky top-0 z-30 border-b border-stone/80 bg-paper/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-2.5 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="min-w-0 flex-1">
                <PhaseRail
                  phases={PHASES}
                  activeId={activePhase}
                  visibleIds={new Set(filteredPhases.map((p) => p.id))}
                  onJump={(id) => {
                    setActivePhase(id);
                    scrollToId(id);
                  }}
                />
              </div>
              <label className="relative hidden w-56 shrink-0 lg:block">
                <span className="sr-only">بحث في الأحداث</span>
                <Search
                  className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-ink-subtle"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="بحث…"
                  className="h-9 w-full rounded-full bg-paper-elevated pe-3 ps-9 text-sm text-ink shadow-border placeholder:text-ink-subtle focus:outline-2 focus:outline-offset-2 focus:outline-forest"
                />
              </label>
            </div>
            <FilterBar
              category={category}
              keyOnly={keyOnly}
              query={query}
              issue={issue}
              visibleCount={visibleCount}
              filtered={filtered}
              activeTitle={PHASES.find((p) => p.id === activePhase)?.title}
              onCategory={setCategory}
              onKeyOnly={() => setKeyOnly((v) => !v)}
              onQuery={setQuery}
              onClearIssue={() => setIssue(null)}
              onClear={clearFilters}
            />
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6">
          {filteredPhases.length === 0 ? (
            <EmptyState onClear={clearFilters} />
          ) : (
            <div className="flex flex-col gap-12">
              {filteredPhases.map((phase, i) => (
                <PhaseBlock
                  key={phase.id}
                  phase={phase}
                  index={indexOfPhase(phase.id)}
                  delay={i < 3}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-stone px-4 py-10 text-center">
  <p className="font-mono text-xs tracking-wide text-ink-subtle">
    {CASE.number} · {CASE.venue} · مقر التحكيم: {CASE.seat}
  </p>
  <p className="mt-2 text-sm text-ink-muted">
    ملف داخلي للأحداث الموثقة — لا يُعد حكماً أو إقراراً بالوقائع المتنازع عليها
  </p>
  <p className="mt-1 text-sm font-medium text-red-600">
    Abdulrahman Ahmed insta (meleehly)
  </p>
</footer>
    </div>
  );
}

function indexOfPhase(id: string) {
  return PHASES.findIndex((p) => p.id === id);
}

function Masthead({
  issue,
  onToggleIssue,
}: {
  issue: LegalIssue | null;
  onToggleIssue: (id: LegalIssue) => void;
}) {
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 start-0 w-1 bg-forest" />
      <div className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 sm:pt-14">
        <div className="reveal flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-ink-muted">
          <span className="inline-flex items-center gap-2">
            <Landmark className="size-3.5" aria-hidden="true" />
            {CASE.venue}
          </span>
          <span className="font-mono tabular-nums tracking-wide">{CASE.number}</span>
        </div>

        <p className="reveal reveal-d1 mt-8 text-center text-xs font-medium tracking-wide text-ink-subtle">
          المحتكمة ضد المحتكم ضدها
        </p>
        <h1 className="reveal reveal-d2 mx-auto mt-3 max-w-3xl text-center font-display text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl">
          {CASE.claimant}
          <span className="mt-2 block text-xl font-medium text-forest sm:text-2xl">ضد</span>
          {CASE.respondent}
        </h1>
        <p className="reveal reveal-d3 mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-ink-muted">
          خط زمني تفاعلي لأحداث النزاع وإجراءات التحكيم، من {CASE.dateRange}. {EVENT_COUNT} حدثاً
          موثقاً على {PHASE_COUNT} مراحل، قابلة للتصفية حسب الفئة أو المسائل الجوهرية.
        </p>

        <dl className="reveal reveal-d4 mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="أحداث موثّقة" value={String(EVENT_COUNT)} />
          <Stat label="مراحل" value={String(PHASE_COUNT)} />
          <Stat label="مسائل جوهرية" value={String(KEY_COUNT)} />
          <Stat label="قيمة العقد" value="٢٫١ م$" />
        </dl>

        <div className="reveal reveal-d5 mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-ink-muted">
          <MetaChip icon={MapPin} text={`المقر: ${CASE.seat}`} />
          <MetaChip icon={Scale} text={`القانون: ${CASE.lawShort}`} />
          <MetaChip icon={Gavel} text="هيئة ثلاثية · العربية" />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <PartyCard kicker="المحتكمة" name={CASE.claimant} arb={CASE.arbitrators[0]} />
          <PartyCard kicker="المحتكم ضدها" name={CASE.respondent} arb={CASE.arbitrators[1]} />
        </div>
        <p className="mt-3 text-center text-sm text-ink-muted">
          رئيس الهيئة: <span className="font-medium text-ink">{CASE.arbitrators[2]?.name}</span>
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl bg-paper-elevated p-5 shadow-border sm:p-6">
            <h2 className="text-sm font-semibold text-ink">طلبات المحتكمة</h2>
            <ul className="mt-4 space-y-3">
              {CASE.claims.map((c) => (
                <li key={c.label} className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-ink-muted">{c.label}</span>
                  <span className="font-medium tabular-nums text-ink">{c.amount}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-subtle">{CASE.claimsNote}</p>
          </article>
          <article className="rounded-xl bg-paper-elevated p-5 shadow-border sm:p-6">
            <h2 className="text-sm font-semibold text-ink">دفوع المحتكم ضدها</h2>
            <ul className="mt-4 space-y-3">
              {CASE.defenses.map((d) => (
                <li key={d} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-forest" />
                  {d}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-10">
          <div className="mb-4 flex items-end justify-between gap-3">
            <h2 className="font-display text-xl font-semibold text-ink">
              مسائل الأمر الإجرائي رقم 1
            </h2>
            <p className="hidden text-xs text-ink-subtle sm:block">اضغط لتصفية الخط الزمني</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {LEGAL_ISSUES.map((item) => {
              const on = issue === item.id;
              const count = ALL_EVENTS.filter((e) => e.issues.includes(item.id)).length;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onToggleIssue(item.id)}
                  aria-pressed={on}
                  className={cn(
                    "min-h-11 rounded-xl p-4 text-start shadow-border transition-[background-color,color,box-shadow,transform] duration-150 ease-out active:scale-[0.98] sm:p-5",
                    on
                      ? "bg-forest text-forest-fg shadow-none"
                      : "bg-paper-elevated text-ink hover:shadow-border-hover",
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        "font-display text-lg font-semibold",
                        on ? "text-forest-fg" : "text-forest",
                      )}
                    >
                      {item.n}
                    </span>
                    <span
                      className={cn(
                        "text-xs tabular-nums",
                        on ? "text-forest-fg/70" : "text-ink-subtle",
                      )}
                    >
                      {count} أحداث
                    </span>
                  </div>
                  <div className="mt-2 text-base font-semibold">{item.label}</div>
                  <p
                    className={cn(
                      "mt-1 text-sm leading-relaxed",
                      on ? "text-forest-fg/80" : "text-ink-muted",
                    )}
                  >
                    {item.hint}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-paper-elevated px-3 py-3 text-center shadow-border">
      <dd className="font-display text-2xl font-semibold tabular-nums text-ink">{value}</dd>
      <dt className="mt-1 text-xs text-ink-subtle">{label}</dt>
    </div>
  );
}

function MetaChip({ icon: Icon, text }: { icon: typeof Scale; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-paper-sunken px-3 py-1.5">
      <Icon className="size-3.5" aria-hidden="true" />
      {text}
    </span>
  );
}

function PartyCard({
  kicker,
  name,
  arb,
}: {
  kicker: string;
  name: string;
  arb?: { name: string; role: string };
}) {
  return (
    <article className="rounded-xl bg-paper-elevated p-5 shadow-border sm:p-6">
      <p className="text-xs font-medium tracking-wide text-forest">{kicker}</p>
      <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-ink">{name}</h2>
      {arb ? (
        <p className="mt-3 text-sm text-ink-muted">
          {arb.role}: <span className="font-medium text-ink">{arb.name}</span>
        </p>
      ) : null}
    </article>
  );
}

function PhaseRail({
  phases,
  activeId,
  visibleIds,
  onJump,
}: {
  phases: Phase[];
  activeId: string;
  visibleIds: Set<string>;
  onJump: (id: string) => void;
}) {
  const active = phases.find((p) => p.id === activeId) ?? phases[0];

  return (
    <nav aria-label="مراحل النزاع">
      <ol className="flex items-center">
        {phases.map((phase, i) => {
          const on = activeId === phase.id;
          const available = visibleIds.has(phase.id);
          return (
            <Fragment key={phase.id}>
              {i > 0 ? (
                <span
                  className={cn("h-px min-w-2 flex-1", available ? "bg-stone-strong" : "bg-stone")}
                  aria-hidden="true"
                />
              ) : null}
              <button
                type="button"
                disabled={!available}
                onClick={() => onJump(phase.id)}
                aria-current={on ? "step" : undefined}
                aria-label={`${phase.title} — ${phase.range}`}
                className={cn(
                  "relative flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-medium tabular-nums transition-colors duration-150",
                  "after:absolute after:-inset-2",
                  on
                    ? "bg-forest text-forest-fg"
                    : available
                      ? "bg-paper-sunken text-ink-muted hover:bg-forest-soft hover:text-forest"
                      : "bg-paper-sunken text-ink-subtle opacity-40",
                )}
              >
                {i + 1}
              </button>
            </Fragment>
          );
        })}
      </ol>
      {active ? (
        <p className="sr-only">
          {active.title} — {active.range}
        </p>
      ) : null}
    </nav>
  );
}

function FilterBar({
  category,
  keyOnly,
  query,
  issue,
  visibleCount,
  filtered,
  activeTitle,
  onCategory,
  onKeyOnly,
  onQuery,
  onClearIssue,
  onClear,
}: {
  category: EventCategory | "all";
  keyOnly: boolean;
  query: string;
  issue: LegalIssue | null;
  visibleCount: number;
  filtered: boolean;
  activeTitle?: string;
  onCategory: (c: EventCategory | "all") => void;
  onKeyOnly: () => void;
  onQuery: (q: string) => void;
  onClearIssue: () => void;
  onClear: () => void;
}) {
  const issueMeta = LEGAL_ISSUES.find((i) => i.id === issue);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        <div
          role="group"
          aria-label="تصفية حسب الفئة"
          className="no-scrollbar -mx-1 flex flex-nowrap gap-1.5 overflow-x-auto px-1"
        >
          {CATEGORIES.map((c) => {
            const on = category === c.id;
            const Icon = c.id === "all" ? null : CAT_ICON[c.id];
            return (
              <Button
                key={c.id}
                variant={on ? "primary" : "ghost"}
                size="sm"
                aria-pressed={on}
                onClick={() => onCategory(c.id)}
                className={cn("shrink-0", !on && "border border-stone")}
              >
                {Icon ? <Icon className="size-3.5" aria-hidden="true" /> : null}
                {c.label}
              </Button>
            );
          })}
          <Button
            variant={keyOnly ? "rust" : "ghost"}
            size="sm"
            aria-pressed={keyOnly}
            onClick={onKeyOnly}
            className={cn("shrink-0", !keyOnly && "border border-stone")}
          >
            <AlertTriangle className="size-3.5" aria-hidden="true" />
            مسائل جوهرية
          </Button>
        </div>
        <label className="relative block min-w-0 lg:hidden">
          <span className="sr-only">بحث في الأحداث</span>
          <Search
            className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-ink-subtle"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="ابحث في الأحداث والمرفقات…"
            className="h-11 w-full rounded-full bg-paper-elevated pe-4 ps-10 text-sm text-ink shadow-border placeholder:text-ink-subtle focus:outline-2 focus:outline-offset-2 focus:outline-forest"
          />
        </label>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-muted">
        <p>
          عرض <span className="font-medium tabular-nums text-ink">{visibleCount}</span> من{" "}
          <span className="tabular-nums">{EVENT_COUNT}</span>
          {activeTitle ? (
            <>
              {" "}
              · <span className="text-ink">{activeTitle}</span>
            </>
          ) : null}
          {issueMeta ? (
            <>
              {" "}
              · <span className="font-medium text-forest">{issueMeta.label}</span>
              <button
                type="button"
                onClick={onClearIssue}
                className="ms-1 inline-flex size-6 items-center justify-center rounded-full hover:bg-paper-sunken"
                aria-label="إلغاء تصفية المسألة"
              >
                <X className="size-3.5" />
              </button>
            </>
          ) : null}
        </p>
        {filtered ? (
          <button type="button" onClick={onClear} className="font-medium text-forest hover:underline">
            مسح التصفية
          </button>
        ) : null}
      </div>
    </div>
  );
}

function PhaseBlock({
  phase,
  index,
  delay,
}: {
  phase: Phase;
  index: number;
  delay: boolean;
}) {
  return (
    <section
      id={phase.id}
      className={cn("scroll-mt-28", delay && "reveal")}
      style={delay ? { animationDelay: `${index * 40}ms` } : undefined}
    >
      <header className="mb-6 flex items-baseline justify-between gap-3 border-b border-stone pb-3">
        <div>
          <p className="text-xs font-medium tabular-nums text-forest">المرحلة {index + 1}</p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-ink">{phase.title}</h2>
        </div>
        <p className="shrink-0 text-sm text-ink-subtle">{phase.range}</p>
      </header>
      <ol className="relative flex flex-col">
        <span className="absolute start-4 top-2 bottom-2 w-px bg-stone" aria-hidden="true" />
        {phase.events.map((event) => (
          <EventRow key={event.id} event={event} />
        ))}
      </ol>
    </section>
  );
}

function EventRow({ event }: { event: CaseEvent }) {
  const Icon = CAT_ICON[event.category];
  const cat = CATEGORY_META[event.category];

  return (
    <li className="relative flex gap-4 pb-8 last:pb-0">
      <div
        className={cn(
          "relative z-10 mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full",
          event.key ? "bg-rust text-rust-fg" : "bg-forest-soft text-forest",
        )}
        aria-hidden="true"
      >
        <Icon className="size-3.5" />
      </div>
      <article
        className={cn(
          "min-w-0 flex-1 rounded-xl bg-paper-elevated p-4 shadow-border transition-shadow duration-150 sm:p-5",
          event.key && "ring-1 ring-rust/40",
        )}
      >
        <div className="flex flex-wrap items-center gap-2">
          <time className="text-xs font-medium text-ink-muted">{event.date}</time>
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-subtle">
            <span className={cn("size-1.5 rounded-full", CAT_DOT[event.category])} />
            {cat.short}
          </span>
          {event.key ? (
            <span className="rounded-full bg-rust-soft px-2 py-0.5 text-xs font-medium text-rust">
              مسألة جوهرية
            </span>
          ) : null}
          {event.exhibit ? (
            <span className="rounded-full bg-paper-sunken px-2 py-0.5 text-xs text-ink-muted">
              {event.exhibit}
            </span>
          ) : null}
        </div>
        <h3 className="mt-2 text-base font-semibold leading-snug text-ink">{event.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{event.body}</p>
        {event.issues.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {event.issues.map((id) => {
              const meta = LEGAL_ISSUES.find((i) => i.id === id);
              return (
                <li
                  key={id}
                  className="rounded-full border border-stone px-2 py-0.5 text-xs text-ink-subtle"
                >
                  {meta?.label}
                </li>
              );
            })}
          </ul>
        ) : null}
      </article>
    </li>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="rounded-xl bg-paper-elevated px-6 py-16 text-center shadow-border">
      <p className="font-display text-xl font-semibold text-ink">لا توجد أحداث مطابقة</p>
      <p className="mt-2 text-sm text-ink-muted">جرّب فئة أخرى أو امسح كلمات البحث.</p>
      <Button variant="primary" className="mt-6" onClick={onClear}>
        مسح التصفية
      </Button>
    </div>
  );
}
