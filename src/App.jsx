import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Camera,
  ChevronRight,
  CreditCard,
  Headphones,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function IconBadge({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
      <Icon className="h-4 w-4 text-slate-900" />
      <span>{children}</span>
    </div>
  );
}

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200",
        active
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50"
      )}
    >
      {children}
    </button>
  );
}

function Rating({ value = 4.9, count = 312 }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full || (i === full && hasHalf);
          return (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                filled ? "fill-slate-900 text-slate-900" : "text-slate-300"
              )}
            />
          );
        })}
      </div>
      <div className="text-sm text-slate-600">
        <span className="font-semibold text-slate-900">{value.toFixed(1)}</span>{" "}
        <span className="text-slate-500">({count} avaliações)</span>
      </div>
    </div>
  );
}

function Header({ query, setQuery }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
            <Phone className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">Raposo</div>
            <div className="text-lg font-bold tracking-tight text-slate-900">
              FCELL
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#destaques"
            className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
          >
            Destaques
          </a>
          <a
            href="#produtos"
            className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
          >
            Produtos
          </a>
          <a
            href="#servicos"
            className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
          >
            Serviços
          </a>
          <a
            href="#contato"
            className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
          >
            Contato
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar iPhone, Galaxy, acessórios..."
              className="w-[320px] rounded-full border border-slate-200 bg-white px-10 py-2 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-slate-300 focus:ring-4 focus:ring-slate-200/60"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Comprar</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ query, setQuery }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/5 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-slate-900/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <IconBadge icon={Sparkles}>Experiência premium</IconBadge>
              <IconBadge icon={ShieldCheck}>Garantia e procedência</IconBadge>
              <IconBadge icon={Truck}>Entrega rápida</IconBadge>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Raposo FCELL.
              <span className="block text-slate-600">
                Seu próximo celular, do jeito certo.
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              iPhone, Android e acessórios com atendimento humano, preços justos e
              uma vitrine limpa — inspirada no melhor do design.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-slate-800"
              >
                Ver ofertas
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:bg-slate-50"
              >
                Falar com a loja
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <Rating value={4.9} count={528} />
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    <BadgeCheck className="h-4 w-4" />
                    Loja verificada
                  </div>
                  <div className="text-xs font-medium text-slate-600">
                    Troca e suporte pós-venda
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar iPhone, Galaxy, acessórios..."
                  className="w-full rounded-full border border-slate-200 bg-white px-10 py-3 text-sm text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-slate-300 focus:ring-4 focus:ring-slate-200/60"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-b from-slate-900/10 via-slate-900/5 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-soft">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="p-6 md:p-8">
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Destaque da semana
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    iPhone 15 Pro
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    Titânio. Câmera pro. Performance absurda.
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <Camera className="h-5 w-5 text-slate-900" />
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-900">
                          Câmera avançada
                        </div>
                        <div className="text-xs text-slate-600">
                          Fotos e vídeos com qualidade premium
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <BatteryCharging className="h-5 w-5 text-slate-900" />
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-900">
                          Bateria para o dia todo
                        </div>
                        <div className="text-xs text-slate-600">
                          Eficiência e autonomia no uso real
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800"
                    >
                      Ver detalhes
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <div className="text-xs text-slate-500">
                      Parcelamento no cartão
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[280px] bg-slate-950">
                  <img
                    alt="iPhone em destaque"
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                    src="https://images.unsplash.com/photo-1695048133142-1a2043614d64?auto=format&fit=crop&w=1200&q=80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white">
                          Pronto para levar hoje
                        </div>
                        <div className="text-xs text-white/70">
                          Consulte cores e armazenamento
                        </div>
                      </div>
                      <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                        Estoque limitado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Parcelamento
                    </div>
                    <div className="text-xs text-slate-600">
                      Pix, cartão e condições especiais
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Assistência
                    </div>
                    <div className="text-xs text-slate-600">
                      Troca de tela, bateria e diagnóstico
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ id, eyebrow, title, subtitle }) {
  return (
    <div id={id} className="space-y-2">
      <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
        {eyebrow}
      </div>
      <div className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </div>
      <div className="max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
        {subtitle}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-44 bg-slate-950">
        <img
          alt={product.name}
          src={product.image}
          className="h-full w-full object-cover opacity-90 transition-all duration-200 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <div
              key={t}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate text-base font-semibold text-slate-900">
              {product.name}
            </div>
            <div className="mt-1 text-sm text-slate-600">{product.desc}</div>
          </div>
          <div className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
            {product.badge}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs font-medium text-slate-500">A partir de</div>
            <div className="text-lg font-semibold tracking-tight text-slate-900">
              {product.price}
            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800"
          >
            Comprar
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
          <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <div className="text-base font-semibold text-slate-900">{title}</div>
          <div className="text-sm leading-relaxed text-slate-600">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="contato" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
                <Phone className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">
                  Raposo
                </div>
                <div className="text-lg font-bold tracking-tight text-slate-900">
                  FCELL
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Loja de celulares e acessórios com curadoria, transparência e
              suporte pós-venda. Do básico ao topo de linha.
            </p>
            <div className="flex flex-wrap gap-2">
              <IconBadge icon={ShieldCheck}>Garantia</IconBadge>
              <IconBadge icon={Truck}>Entrega</IconBadge>
              <IconBadge icon={BadgeCheck}>Procedência</IconBadge>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-slate-900">
              Atendimento
            </div>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <MapPin className="h-5 w-5 text-slate-900" />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900">
                    Endereço
                  </div>
                  <div className="text-xs text-slate-600">
                    Centro — sua cidade (atualize com seu endereço)
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Headphones className="h-5 w-5 text-slate-900" />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900">
                    Suporte
                  </div>
                  <div className="text-xs text-slate-600">
                    Seg–Sáb • 09:00–19:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-slate-900">
              Fale agora
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="space-y-3">
                <div className="text-sm text-slate-600">
                  Clique para abrir o WhatsApp e pedir orçamento.
                </div>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Chamar no WhatsApp
                </a>
                <div className="text-xs text-slate-500">
                  Atualize o número no link acima.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Raposo FCELL. Todos os direitos
            reservados.
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
              Pix
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
              Cartão
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
              Garantia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");

  const products = useMemo(
    () => [
      {
        id: "iphone-15-pro",
        name: "iPhone 15 Pro",
        desc: "Titânio, câmera pro e desempenho de ponta.",
        price: "R$ 6.999",
        badge: "Top",
        tags: ["Novo", "Pro"],
        image:
          "https://images.unsplash.com/photo-1695048133142-1a2043614d64?auto=format&fit=crop&w=1200&q=80",
        category: "iPhone",
      },
      {
        id: "iphone-14",
        name: "iPhone 14",
        desc: "Equilíbrio perfeito para o dia a dia.",
        price: "R$ 4.299",
        badge: "Mais vendido",
        tags: ["Oferta", "Apple"],
        image:
          "https://images.unsplash.com/photo-1661961112951-f2bfdc0f9b8b?auto=format&fit=crop&w=1200&q=80",
        category: "iPhone",
      },
      {
        id: "galaxy-s24",
        name: "Galaxy S24",
        desc: "Tela incrível, câmeras e performance premium.",
        price: "R$ 4.799",
        badge: "Premium",
        tags: ["Android", "Novo"],
        image:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80",
        category: "Android",
      },
      {
        id: "redmi-note",
        name: "Redmi Note",
        desc: "Custo-benefício com bateria e tela grandes.",
        price: "R$ 1.399",
        badge: "Custo-benefício",
        tags: ["Android", "Bateria"],
        image:
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1200&q=80",
        category: "Android",
      },
      {
        id: "airpods",
        name: "Fones Bluetooth Premium",
        desc: "Som limpo, graves e conforto no uso.",
        price: "R$ 199",
        badge: "Acessório",
        tags: ["Som", "Leve"],
        image:
          "https://images.unsplash.com/photo-1518441311925-10f6c2f3f1f7?auto=format&fit=crop&w=1200&q=80",
        category: "Acessórios",
      },
      {
        id: "carregador",
        name: "Carregador Turbo + Cabo",
        desc: "Carregamento rápido e seguro para seu aparelho.",
        price: "R$ 89",
        badge: "Essencial",
        tags: ["Turbo", "Seguro"],
        image:
          "https://images.unsplash.com/photo-1583863788434-e58a36330f8a?auto=format&fit=crop&w=1200&q=80",
        category: "Acessórios",
      },
    ],
    []
  );

  const categories = ["Todos", "iPhone", "Android", "Acessórios"];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesFilter = filter === "Todos" ? true : p.category === filter;
      const matchesQuery =
        q.length === 0
          ? true
          : [p.name, p.desc, p.badge, p.category, ...p.tags]
              .join(" ")
              .toLowerCase()
              .includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [products, query, filter]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header query={query} setQuery={setQuery} />
      <main>
        <Hero query={query} setQuery={setQuery} />

        <section id="destaques" className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <SectionTitle
              eyebrow="Destaques"
              title="Curadoria que parece simples. Porque é."
              subtitle="Uma seleção enxuta de modelos e acessórios com foco no que realmente importa: procedência, estado, garantia e suporte."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-base font-semibold text-slate-900">
                      Procedência
                    </div>
                    <div className="text-sm leading-relaxed text-slate-600">
                      Aparelhos revisados, com transparência e nota.
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
                    <Truck className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-base font-semibold text-slate-900">
                      Entrega
                    </div>
                    <div className="text-sm leading-relaxed text-slate-600">
                      Retire na loja ou receba com agilidade.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="produtos" className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="Produtos"
              title="Escolha seu próximo celular"
              subtitle="Filtre por categoria e encontre o modelo ideal. Se quiser, chamamos no WhatsApp e montamos a melhor opção para você."
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Pill key={c} active={filter === c} onClick={() => setFilter(c)}>
                  {c}
                </Pill>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <div className="text-base font-semibold text-slate-900">
                Nenhum resultado encontrado
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Tente buscar por “iPhone”, “Android”, “carregador” ou limpe o
                filtro.
              </div>
              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setFilter("Todos");
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800"
                >
                  Limpar filtros
                </button>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:bg-slate-50"
                >
                  Pedir ajuda
                </a>
              </div>
            </div>
          )}
        </section>

        <section id="servicos" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <SectionTitle
                eyebrow="Serviços"
                title="Assistência e acessórios, sem complicação"
                subtitle="Do diagnóstico à troca de tela, passando por capinhas e carregadores. Tudo com padrão de qualidade e atendimento direto."
              />
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-900">
                      Orçamento rápido
                    </div>
                    <div className="text-sm text-slate-600">
                      Envie o modelo e o problema. Respondemos com clareza.
                    </div>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={Wrench}
                title="Troca de tela"
                desc="Peças de qualidade e instalação cuidadosa para manter o toque e a imagem."
              />
              <ServiceCard
                icon={BatteryCharging}
                title="Troca de bateria"
                desc="Recupere autonomia com segurança e testes antes da entrega."
              />
              <ServiceCard
                icon={ShieldCheck}
                title="Diagnóstico"
                desc="Avaliação completa para identificar a causa e evitar gastos desnecessários."
              />
              <ServiceCard
                icon={Headphones}
                title="Acessórios"
                desc="Capinhas, películas, fones e carregadores com curadoria."
              />
              <ServiceCard
                icon={CreditCard}
                title="Pagamento fácil"
                desc="Pix e cartão. Parcelamento conforme disponibilidade."
              />
              <ServiceCard
                icon={Truck}
                title="Entrega/Retirada"
                desc="Combine retirada na loja ou entrega rápida na sua região."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}