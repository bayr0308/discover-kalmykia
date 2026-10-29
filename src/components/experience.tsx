"use client";

import { Accordion } from "@base-ui/react/accordion";
import { Dialog } from "@base-ui/react/dialog";
import { Tabs } from "@base-ui/react/tabs";
import { useGSAP } from "@gsap/react";
import { ArrowDownIcon } from "@phosphor-icons/react/dist/csr/ArrowDown";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import gsap from "gsap";
import Image from "next/image";
import { useContext, useRef, useState } from "react";

import { MotionPreference } from "./motion-preference";
import { places, seasons, questions } from "@/lib/content";

gsap.registerPlugin(useGSAP);

const navigation = [
  { href: "#places", text: "Места" },
  { href: "#culture", text: "Культура" },
  { href: "#routes", text: "Маршруты" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-page pt-3.5 md:pt-6.5 wide:mx-auto wide:max-w-[2000px]">
      <a
        data-header-entrance
        className="py-2.5 text-body leading-[1.5] font-medium tracking-[.065em]"
        href="#home"
      >
        Калмыкия
      </a>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Главная навигация">
        {navigation.map((link) => (
          <a
            key={link.href}
            data-header-entrance
            className="inline-flex min-h-11 items-center hover:-translate-y-0.5 hover:opacity-65"
            href={link.href}
          >
            {link.text}
          </a>
        ))}
      </nav>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          className="inline-flex size-12 items-center justify-center bg-transparent transition-transform duration-200 ease-out-expo hover:rotate-7 md:hidden"
          aria-label="Открыть меню"
        >
          <ListIcon size={26} aria-hidden />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-40 bg-scrim transition-opacity duration-250 data-ending-style:opacity-0 data-starting-style:opacity-0" />
          <Dialog.Popup
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[480px] flex-col bg-ground px-6 pt-5.5 pb-10 transition-[translate,opacity] duration-400 ease-out-expo data-ending-style:translate-x-full data-ending-style:opacity-0 data-starting-style:translate-x-full data-starting-style:opacity-0"
            finalFocus={false}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="py-2.5 text-body leading-[1.5] font-medium tracking-[.065em]">
                Калмыкия
              </span>
              <Dialog.Close
                className="inline-flex size-12 items-center justify-center bg-transparent transition-transform duration-200 ease-out-expo hover:rotate-7"
                aria-label="Закрыть меню"
              >
                <XIcon size={28} aria-hidden />
              </Dialog.Close>
            </div>
            <Dialog.Title className="sr-only">Навигация по сайту</Dialog.Title>
            <nav aria-label="Мобильная навигация" className="my-auto grid gap-7">
              {navigation.map((link) => (
                <a
                  key={link.href}
                  className="flex items-center justify-between text-[38px] tracking-[-.05em]"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.text}
                  <ArrowUpRightIcon size={28} aria-hidden />
                </a>
              ))}
            </nav>
            <Dialog.Description className="text-body text-muted">
              Путешествие начинается
              <br />с любопытства.
            </Dialog.Description>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}

export function Places() {
  return (
    <section id="places" className="px-page wide:mx-auto wide:max-w-[2000px]">
      <div className="mb-9 md:mb-18 md:flex md:items-end md:justify-between md:gap-6 lg:gap-10">
        <h2 className="max-w-[850px] text-heading leading-[1.04] tracking-[-.06em]" data-reveal>
          Увидеть своими глазами
        </h2>
        <p className="mt-6 min-w-[200px] text-body leading-[1.5] md:mt-0" data-reveal>
          Два разных мира.
          <br className="hidden md:block" /> Одна Калмыкия.
        </p>
      </div>
      <div className="grid grid-cols-1 items-start gap-15 md:grid-cols-[1.2fr_.85fr] md:gap-x-[6%] md:gap-y-0 lg:gap-x-[9%]">
        {places.map((place, index) => (
          <article key={place.id} className={index === 1 ? "min-w-0 md:pt-30 lg:pt-45" : "min-w-0"}>
            <Dialog.Root>
              <Dialog.Trigger
                className={`group relative block w-full overflow-hidden bg-surface p-0 ${index === 1 ? "aspect-[1.15] md:aspect-[1.12]" : "aspect-[4/5] md:aspect-[1/1.08]"}`}
                aria-label={`Подробнее: ${place.title}`}
                data-image-reveal
              >
                <Image
                  className="object-cover transition-[scale] duration-900 ease-out-expo group-hover:scale-[1.035]"
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 52vw"
                />
                <span
                  className="absolute right-5.5 bottom-5.5 flex size-12.5 items-center justify-center rounded-full bg-ink text-ground transition-transform duration-300 ease-out-expo group-hover:rotate-45"
                  aria-hidden
                >
                  <ArrowUpRightIcon size={25} />
                </span>
              </Dialog.Trigger>
              <div className="mt-6 md:mt-7" data-reveal>
                <h3 className="text-2xl leading-[1.1] tracking-[-.045em] md:text-lead">
                  {place.title}
                </h3>
                <p className="mt-2.5 text-muted">{place.subtitle}</p>
              </div>
              <p className="mt-5 max-w-[54ch] md:mt-[25px]" data-reveal>
                {place.description}
              </p>
              <Dialog.Trigger
                className="mt-4 inline-flex min-h-11 items-center bg-transparent py-2 text-body underline decoration-1 underline-offset-7 transition-opacity duration-200 hover:opacity-65"
                data-reveal
              >
                Узнать о месте
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Backdrop className="fixed inset-0 z-40 bg-scrim transition-opacity duration-250 data-ending-style:opacity-0 data-starting-style:opacity-0" />
                <Dialog.Viewport className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-3.5 md:p-6">
                  <Dialog.Popup className="relative max-h-[calc(100dvh-28px)] w-full max-w-[760px] overflow-y-auto bg-surface transition-[translate,opacity] duration-350 ease-out-expo data-ending-style:translate-y-6 data-ending-style:opacity-0 data-starting-style:translate-y-6 data-starting-style:opacity-0 md:max-h-[calc(100dvh-48px)]">
                    <div className="relative h-[210px] md:h-[260px]">
                      <Image
                        className="object-cover object-[center_43%]"
                        src={place.image}
                        alt={place.alt}
                        fill
                        sizes="(max-width: 767px) 100vw, 760px"
                      />
                      <Dialog.Close
                        className="absolute top-4 right-4 inline-flex size-12 items-center justify-center rounded-full bg-ground transition-transform duration-200 ease-out-expo hover:rotate-7"
                        aria-label="Закрыть описание"
                      >
                        <XIcon size={24} aria-hidden />
                      </Dialog.Close>
                    </div>
                    <div className="px-6 py-7 md:p-9">
                      <Dialog.Title className="text-2xl leading-[1.04] tracking-[-.06em] md:text-lead">
                        {place.title}
                      </Dialog.Title>
                      <Dialog.Description className="mt-6">{place.detail}</Dialog.Description>
                      <p className="mt-6">{place.note}</p>
                      <a
                        className="mt-7.5 inline-flex min-h-13 items-center justify-center gap-5 bg-ink px-6 py-4 text-body leading-[1.3] font-semibold text-button-ink transition-[translate,scale,opacity] duration-250 ease-out-expo hover:-translate-y-[3px] hover:opacity-90 active:translate-y-0 active:scale-[.98] md:min-h-14 md:px-7.5 md:py-[17px]"
                        href={place.source}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {place.sourceLabel}
                        <ArrowUpRightIcon size={19} aria-hidden />
                      </a>
                    </div>
                  </Dialog.Popup>
                </Dialog.Viewport>
              </Dialog.Portal>
            </Dialog.Root>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SeasonPlanner() {
  const motionEnabled = useContext(MotionPreference);
  const [season, setSeason] = useState<string>("spring");
  const [saved, setSaved] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!motionEnabled) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-season-panel]:not([hidden]) [data-season-reveal]", {
          opacity: 0,
          y: 14,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
        });
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [season, motionEnabled], revertOnUpdate: true },
  );

  function downloadRoute() {
    const current = seasons.find((s) => s.id === season) ?? seasons[0];
    const text = `КАЛМЫКИЯ — НАВСТРЕЧУ ПРОСТОРУ\n\n${current.title}\n${current.period}\n\n${current.intro}\n\n${current.stops.map((s) => `${s.title}\n${s.text}`).join("\n\n")}\n\nЭто идея поездки для самостоятельного планирования, не забронированный тур. Уточняйте доступность маршрутов и часы работы перед поездкой.\n\nПолезные ссылки:\nhttps://www.tourism-kalmykia.ru/\nhttps://khurul.ru/contacts\nhttps://zapovednik-chernyezemli.ru/\n`;
    const url = URL.createObjectURL(
      new Blob(["\uFEFF", text], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = `kalmykia-${current.id}.txt`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setSaved(true);
  }

  return (
    <section id="routes" className="my-22 bg-surface py-16 md:my-30 md:py-25 lg:my-40" ref={root}>
      <div className="px-page wide:mx-auto wide:max-w-[2000px]">
        <div className="mb-8 md:mb-12 md:flex md:items-end md:justify-between md:gap-6 lg:gap-10">
          <h2 className="max-w-[850px] text-heading leading-[1.04] tracking-[-.06em]" data-reveal>
            У каждого сезона
            <br />
            свой маршрут
          </h2>
          <p className="mt-6 min-w-[200px] text-body leading-[1.5] md:mt-0" data-reveal>
            Когда вам хочется
            <br className="hidden md:block" /> отправиться в путь?
          </p>
        </div>
        <Tabs.Root
          value={season}
          onValueChange={(value) => {
            setSeason(String(value));
            setSaved(false);
          }}
        >
          <Tabs.List
            className="mb-8 grid grid-cols-4 gap-2 md:mb-14 md:flex md:gap-3"
            aria-label="Выберите сезон путешествия"
          >
            {seasons.map((s) => (
              <Tabs.Tab
                className="min-h-12 bg-ground px-[7px] py-3 text-small text-ink transition-[opacity,translate] duration-200 ease-out-expo hover:-translate-y-0.5 data-active:bg-ink data-active:text-ground md:min-h-13 md:px-7 md:text-body"
                value={s.id}
                key={s.id}
              >
                {s.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {seasons.map((s) => (
            <Tabs.Panel
              data-season-panel
              className="grid grid-cols-1 items-start gap-7.5 md:grid-cols-2 md:gap-[6%] lg:gap-[9%] [&[hidden]]:hidden"
              key={s.id}
              value={s.id}
            >
              <div
                data-season-reveal
                className="relative aspect-[1.12] overflow-hidden md:aspect-auto md:h-full md:min-h-[720px] lg:min-h-[660px]"
              >
                <Image
                  className="object-cover object-[65%_center]"
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 45vw"
                />
              </div>
              <div data-season-reveal className="py-1.5">
                <h3 className="text-2xl leading-[1.1] tracking-[-.045em] md:text-lead">
                  {s.title}
                </h3>
                <p className="mt-3 text-muted">{s.period}</p>
                <p className="mt-5 max-w-[56ch] md:mt-6">{s.intro}</p>
                <ol className="my-7 grid list-none gap-6 p-0 md:my-8 md:gap-6.5">
                  {s.stops.map((stop) => (
                    <li key={stop.title}>
                      <h4 className="text-body leading-[1.3] tracking-[-.025em]">{stop.title}</h4>
                      <p className="mt-2 max-w-[53ch] text-muted">{stop.text}</p>
                    </li>
                  ))}
                </ol>
                <button
                  className="inline-flex min-h-13 items-center justify-center gap-5 bg-ink px-6 py-4 text-body leading-[1.3] font-semibold text-button-ink transition-[translate,scale,opacity] duration-250 ease-out-expo hover:-translate-y-[3px] hover:opacity-90 active:translate-y-0 active:scale-[.98] md:min-h-14 md:px-7.5 md:py-[17px]"
                  type="button"
                  onClick={downloadRoute}
                >
                  Сохранить маршрут
                  <ArrowDownIcon size={20} aria-hidden />
                </button>
                <p className="mt-3.5 min-h-11 text-small text-muted" role="status">
                  {saved
                    ? "Маршрут скачан в текстовом файле."
                    : "Идея поездки для самостоятельного планирования."}
                </p>
              </div>
            </Tabs.Panel>
          ))}
        </Tabs.Root>
        <noscript>
          <p>
            Начните весной с Элисты и Золотой обители, затем отправляйтесь на согласованный маршрут
            по тюльпанной степи. Уточняйте доступность в{" "}
            <a href="https://www.tourism-kalmykia.ru/">туристическом центре Калмыкии</a>.
          </p>
        </noscript>
      </div>
    </section>
  );
}

export function TravelQuestions() {
  return (
    <section
      className="my-22 grid grid-cols-1 gap-8 px-page md:my-30 md:grid-cols-[.85fr_1.15fr] md:gap-[6%] lg:my-40 lg:gap-[9%] wide:mx-auto wide:max-w-[2000px]"
      id="before-trip"
    >
      <h2 className="text-heading leading-[1.04] tracking-[-.06em]" data-reveal>
        Перед
        <br />
        путешествием
      </h2>
      <Accordion.Root className="grid gap-3" defaultValue={[0]}>
        {questions.map((item, index) => (
          <Accordion.Item className="bg-surface" value={index} key={item.q} data-reveal>
            <Accordion.Header className="font-normal">
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 bg-transparent px-5 py-5.5 text-left text-body leading-[1.35] tracking-[-.02em] md:gap-6 md:p-6">
                {item.q}
                <span className="shrink-0 transition-transform duration-300 ease-out-expo group-data-panel-open:rotate-45">
                  <PlusIcon size={22} aria-hidden />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel className="px-5 pb-6 transition-opacity duration-250 data-starting-style:opacity-0 md:px-6 md:pb-7">
              <p className="max-w-[57ch] text-muted">{item.a}</p>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
