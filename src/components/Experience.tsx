const jobs = [
  {
    company: "Pricekeel",
    role: "Founder",
    period: "May 2026 - Present",
    location: "Boston, MA",
    summary:
      "Founder of Pricekeel - AI-driven decision-integrity layer for B2B SaaS deal pricing. Reads live discount exceptions, recommends explainable guardrails trained on the company's own won-and-lost deals, and records the human decision with Finance-auditable evidence. Margin layer next.",
  },
  {
    company: "Sensata Technologies",
    role: "Growth & Product Marketing",
    period: "Sep 2024 – Present",
    location: "Boston, MA",
    summary:
      "Driving growth marketing for new sensing products across NA and EU - GTM, demand gen, and AI-assisted content and attribution tooling feeding the sales pipeline.",
  },
  {
    company: "Sensata Technologies",
    role: "Product Marketing Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Attleboro, MA",
    summary:
      "Ran competitive research, pricing teardowns, and demand-gen content for new sensing lines, leaning on AI tools to accelerate research-to-asset cycles.",
  },
  {
    company: "Plug Power",
    role: "Digital Marketing Manager",
    period: "Oct 2022 – Jul 2023",
    location: "Latham, NY",
    summary:
      "Owned PPC, display, and the MarTech stack across Google, Meta, and LinkedIn - delivered −25% CPA and +20% conversion rate; layered automation and ML-style bidding into the playbook.",
  },
  {
    company: "Pixis",
    role: "Customer Success & Growth Manager - AI Platform",
    period: "Jul 2021 – Sep 2022",
    location: "Bangalore, India",
    summary:
      "Managed $1.4M media budgets on an AI adtech platform across global D2C clients - 3x ROAS, 50% churn reduction, leading an 8-person team using AI-driven optimization.",
  },
  {
    company: "GenY Medium",
    role: "Senior Digital Marketing Analyst",
    period: "Jan 2020 – Jun 2021",
    location: "Hyderabad, India",
    summary:
      "Delivered 16x ROAS for a D2C brand by rebuilding Merchant Center / Meta catalogs and launching structured Shopping + Advantage+ - early hands-on with ML-driven Smart Shopping.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Experience
      </h2>

      <ol className="mt-10 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800" aria-hidden />

        {jobs.map((j, idx) => (
          <li key={`${j.company}-${idx}`} className="relative pl-10 pb-10 last:pb-0">
            <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-zinc-100 bg-zinc-950" />
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              {j.period} · {j.location}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-100">
              {j.role}
            </h3>
            <p className="text-sm text-zinc-400">{j.company}</p>
            <p className="mt-3 text-[15px] text-zinc-300 leading-relaxed max-w-3xl">
              {j.summary}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
