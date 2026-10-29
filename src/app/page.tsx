import Image from "next/image";

import { Navigation, Places, SeasonPlanner, TravelQuestions } from "@/components/experience";
import { MotionShell } from "@/components/motion-shell";

export default function Home() {
  return (
    <MotionShell>
      <a
        href="#main"
        className="fixed -top-25 left-6 z-100 bg-ink px-4.5 py-3 text-ground focus:top-4"
      >
        Перейти к содержимому
      </a>
      <Navigation />
      <main id="main">
        <section
          id="home"
          data-hero
          aria-label="Путешествие по Калмыкии"
          className="relative h-svh min-h-[620px] overflow-clip bg-ground md:min-h-[700px] [@media(max-height:500px)_and_(orientation:landscape)]:min-h-[360px] [@media(min-height:501px)_and_(max-height:650px)_and_(min-width:768px)]:min-h-[540px]"
        >
          <div data-hero-media className="absolute inset-0">
            <Image
              data-hero-image
              className="object-cover object-[64%_center] md:object-center"
              src="/images/hero-tulips.webp"
              alt="Тюльпанная степь под огромным вечерним небом"
              fill
              preload
              sizes="100vw"
              quality={90}
            />
          </div>
          <div
            data-hero-copy
            className="absolute inset-x-0 bottom-10 px-page md:bottom-16 wide:mx-auto wide:max-w-[2000px] [@media(max-height:500px)_and_(orientation:landscape)]:bottom-6 [@media(min-height:501px)_and_(max-height:650px)_and_(min-width:768px)]:bottom-[35px]"
          >
            <h1 className="text-[clamp(48px,12.6vw,80px)] leading-[.94] font-bold tracking-[-.055em] md:text-display md:leading-[.89] md:tracking-[-.045em] [@media(max-height:500px)_and_(orientation:landscape)]:text-[clamp(48px,7.7vw,64px)]">
              <span className="-mb-[.12em] block overflow-hidden pb-[.12em]">
                <span data-hero-line className="inline-block">
                  Навстречу
                </span>
              </span>{" "}
              <span className="-mb-[.12em] block overflow-hidden pb-[.12em]">
                <span data-hero-line className="inline-block">
                  простору
                </span>
              </span>
            </h1>
            <p
              data-hero-support
              className="mt-6 max-w-[340px] text-body leading-[1.5] tracking-[-.025em] md:mt-7.5 md:max-w-none [@media(max-height:500px)_and_(orientation:landscape)]:mt-5"
            >
              Путешествие по Калмыкии начинается здесь.
            </p>
            <div
              data-hero-action
              className="mt-6 md:mt-4 [@media(max-height:500px)_and_(orientation:landscape)]:mt-4"
            >
              <a
                href="#places"
                className="inline-flex min-h-13 items-center justify-center gap-5 bg-ink px-6 py-4 text-body leading-[1.3] font-semibold text-button-ink transition-[translate,scale,opacity] duration-250 ease-out-expo hover:-translate-y-[3px] hover:opacity-90 active:translate-y-0 active:scale-[.98] md:min-h-14 md:px-7.5 md:py-[17px]"
              >
                Открыть Калмыкию
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="my-22 grid grid-cols-1 items-start gap-9 px-page md:my-30 md:grid-cols-2 md:gap-[6%] lg:my-40 lg:gap-[9%] wide:mx-auto wide:max-w-[2000px]"
        >
          <h2 className="text-heading leading-[1.04] tracking-[-.06em]" data-reveal>
            Место, где
            <br />
            слышно ветер
          </h2>
          <div className="md:max-w-[600px]">
            <p className="text-2xl leading-[1.45] tracking-[-.035em] md:text-lead" data-reveal>
              Уехать за горизонт. Увидеть, как цветёт степь. Услышать тишину буддийского храма.
            </p>
            <p className="mt-7 max-w-[52ch]" data-reveal>
              Калмыкия раскрывается без спешки: в бескрайнем пейзаже, в историях местных жителей, в
              чашке солёного чая. Здесь хочется свернуть с привычного маршрута и просто побыть.
            </p>
            <a
              href="#routes"
              className="mt-5 inline-flex min-h-11 items-center bg-transparent py-2 text-body underline decoration-1 underline-offset-7 transition-opacity duration-200 hover:opacity-65"
              data-reveal
            >
              Найти свой маршрут
            </a>
          </div>
        </section>

        <Places />

        <section
          id="culture"
          className="my-22 grid grid-cols-1 items-center gap-9 px-page md:my-30 md:grid-cols-[1.15fr_.85fr] md:gap-[6%] lg:my-40 lg:gap-[9%] wide:mx-auto wide:max-w-[2000px]"
        >
          <div
            className="relative aspect-[1.05] overflow-hidden md:aspect-[1.12]"
            data-image-reveal
          >
            <Image
              className="object-cover"
              src="/images/tea.webp"
              alt="Калмыцкий молочный чай в пиале и золотистые борцоки"
              fill
              sizes="(max-width: 767px) 100vw, 55vw"
            />
          </div>
          <div>
            <h2 className="text-heading leading-[1.04] tracking-[-.06em]" data-reveal>
              Начните
              <br />с чашки чая
            </h2>
            <p
              className="mt-6 text-2xl leading-[1.45] tracking-[-.035em] md:mt-8 md:text-lead"
              data-reveal
            >
              У каждого путешествия есть вкус.
              <br />У этого — калмыцкий чай.
            </p>
            <p className="mt-[25px] max-w-[45ch]" data-reveal>
              Джомба — чай с молоком, солью и маслом. Его подают с борцоками и неспешным разговором.
              Знакомство с Калмыкией складывается из таких простых встреч.
            </p>
            <a
              href="https://www.tourism-kalmykia.ru/"
              className="mt-6 inline-flex min-h-11 items-center bg-transparent py-2 text-body underline decoration-1 underline-offset-7 transition-opacity duration-200 hover:opacity-65"
              target="_blank"
              rel="noreferrer"
              data-reveal
            >
              Больше о культуре региона
            </a>
          </div>
        </section>

        <SeasonPlanner />
        <TravelQuestions />

        <section className="my-22 px-page md:my-30 md:flex md:items-end md:justify-between md:gap-10 lg:my-40 wide:mx-auto wide:max-w-[2000px]">
          <h2 className="text-heading leading-[1.04] tracking-[-.06em]" data-reveal>
            Ваш горизонт
            <br />
            уже ждёт
          </h2>
          <div className="mt-7.5 md:mt-0" data-reveal>
            <p className="mb-6.5 text-body">
              Выберите сезон.
              <br />
              Остальное расскажет степь.
            </p>
            <a
              href="#routes"
              className="inline-flex min-h-13 items-center justify-center gap-5 bg-ink px-6 py-4 text-body leading-[1.3] font-semibold text-button-ink transition-[translate,scale,opacity] duration-250 ease-out-expo hover:-translate-y-[3px] hover:opacity-90 active:translate-y-0 active:scale-[.98] md:min-h-14 md:px-7.5 md:py-[17px]"
            >
              Выбрать маршрут
            </a>
          </div>
        </section>
      </main>

      <footer data-footer className="overflow-hidden px-page pt-5 wide:mx-auto wide:max-w-[2000px]">
        <a
          data-footer-word
          className="block w-fit origin-bottom-left text-[17.8vw] leading-[1.1] font-medium tracking-[-.075em] md:text-[clamp(70px,18.6vw,350px)]"
          href="#home"
          aria-label="Калмыкия — в начало страницы"
        >
          Калмыкия
        </a>
        <div className="mt-6 grid items-center justify-between gap-3 md:mt-12 md:flex md:flex-wrap md:gap-8 lg:flex-nowrap">
          <p>Путешествие по республике</p>
          <nav aria-label="Дополнительная навигация" className="flex flex-wrap gap-x-8 gap-y-2">
            <a
              href="#places"
              className="inline-flex min-h-11 items-center transition-[translate,opacity] duration-200 ease-out-expo hover:-translate-y-0.5 hover:opacity-65"
            >
              Места
            </a>
            <a
              href="#culture"
              className="inline-flex min-h-11 items-center transition-[translate,opacity] duration-200 ease-out-expo hover:-translate-y-0.5 hover:opacity-65"
            >
              Культура
            </a>
            <a
              href="#routes"
              className="inline-flex min-h-11 items-center transition-[translate,opacity] duration-200 ease-out-expo hover:-translate-y-0.5 hover:opacity-65"
            >
              Маршруты
            </a>
          </nav>
          <a
            className="inline-flex min-h-11 items-center transition-[translate,opacity] duration-200 ease-out-expo hover:-translate-y-0.5 hover:opacity-65"
            href="https://www.tourism-kalmykia.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Туристический портал
          </a>
        </div>
        <p className="mt-7.5 max-w-[100ch] text-small leading-[1.65] text-muted md:mt-10 md:leading-[1.6]">
          Изображения созданы с помощью ИИ. Информация о посещении:{" "}
          <a
            className="underline underline-offset-3"
            href="https://khurul.ru/contacts"
            target="_blank"
            rel="noreferrer"
          >
            Золотая обитель
          </a>{" "}
          и{" "}
          <a
            className="underline underline-offset-3"
            href="https://zapovednik-chernyezemli.ru/"
            target="_blank"
            rel="noreferrer"
          >
            «Чёрные земли»
          </a>
          .
        </p>
      </footer>
    </MotionShell>
  );
}
