import React from "react";

export type ProfessionalExperience = {
    id: string;
    role: string;
    company: string;
    startDate: string; // e.g. "Jun 2023"
    endDate?: string; // e.g. "Aug 2023" or "Present"
    location?: string;
    summary?: string;
    responsibilities?: string[]; // bullet points
    tags?: string[]; // tech / domain tags
    link?: string; // company or project link
};

type Props = {
    className?: string;
    experiences?: ProfessionalExperience[];
};

const defaultExperiences: ProfessionalExperience[] = [
    {
        id: "3",
        role: "Upcoming Technical Solution Engineer Intern",
        company: "Appier",
        startDate: "Dec. 2025",
        endDate: "Present",
        location: "Taipei, Taiwan",
        summary:
            "Optimizing Advertisement Automation for News Pushing on Clients' Application",
        responsibilities: [
            ""
        ],
        tags: [""],
        link: "https://www.appier.com/en/about",
    },
    {
        id: "2",
        role: "AI Quantitative Intern",
        company: "UC Capital",
        startDate: "Jul. 2025",
        endDate: "Aug. 2025",
        location: "Taipei, Taiwan",
        summary:
            "Analyzing Stocks-Selling Strategy Using AI Approaches",
        responsibilities: [
            `I am responsible for developing and evaluating AI models to optimize stock-selling strategies, improving decision-making processes for investment portfolios.
            Specifically, I helped design a dynamic sell-side execution algorithm and constructed features.
            I trained models to predict short-term price movements, followed by further experiments with learning architectures. 
            We focused on model interpretability highlighted the importance of adaptability, explainability, and risk-aware design in volatile markets. 
            This experience solidified my interest in quantitative research and the creative, systems-driven thinking it requires. 
            `,
        ],
        tags: ["Python", "Quantitative Finance", "Machine Learning", "Reinforcement Learning"],
        link: "https://www.uccapital.com.tw/TalentProgram/quant2025.html",
    },
    {
        id: "1",
        role: "Research Assistant",
        company: "Academica Sinica",
        startDate: "Jun. 2024",
        endDate: "Feb. 2025",
        location: "Remote",
        summary:
            "Medical Case Manager Large Language Model: TAIDE Project",
            responsibilities: [
            `
            TAIDE is a generative AI dialogue model designed to reflect Taiwan’s cultural context and healthcare needs. 
            It is an exclusive and pioneering project led by Academia Sinica, playing a significant role in advancing Taiwan’s specialized large language models. 
            In this project, we implemented Retrieval-Augmented Generation to adapt the model to the medical domain, using data provided exclusively by Taichung Veterans General Hospital. 
            We also incorporated iterative human feedback from medical professionals to refine the model’s responses. 
            Ultimately, the system supported doctors by offering preliminary recommendations and improving the efficiency of patient education and case management.
            `,
        ],
        tags: ["Python", "Pytorch", "Large Language Models", "RAG", "RLHF"],
        link: "https://taide.tw/index",
    },
];

export default function ProfessionalWorkSection({
    className = "",
    experiences = defaultExperiences,
}: Props) {
    return (
        <section aria-labelledby="professional-work-heading" className="max-w-3xl w-full">
            <h2 id="professional-work-heading" className="font-semibold text-2xl mb-3">
                Professional Experience
            </h2>

            <div style={listStyle}>
                {experiences.map((exp) => (
                    <article key={exp.id} style={cardStyle}>
                        <header style={cardHeaderStyle}>
                            <div>
                                <h3 style={roleStyle}>
                                    {exp.role}
                                    {exp.company ? (
                                        <span style={companyStyle}> — {exp.company}</span>
                                    ) : null}
                                </h3>
                                <div style={metaStyle}>
                                    <time>
                                        {exp.startDate}
                                        {exp.endDate ? ` — ${exp.endDate}` : " — Present"}
                                    </time>
                                    {exp.location ? <span style={dot}>•</span> : null}
                                    {exp.location ? <span>{exp.location}</span> : null}
                                </div>
                            </div>

                            {exp.link ? (
                                <a href={exp.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                    Visit
                                </a>
                            ) : null}
                        </header>

                        {exp.summary ? <p style={summaryStyle}>{exp.summary}</p> : null}

                        {exp.responsibilities && exp.responsibilities.length > 0 ? (
                            <ul style={ulStyle}>
                                {exp.responsibilities.map((r, i) => (
                                    <li key={i} style={liStyle}>
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        {exp.tags && exp.tags.length > 0 ? (
                            <div style={tagsStyle}>
                                {exp.tags.map((t) => (
                                    <span key={t} style={tagStyle}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        ) : null}
                    </article>
                ))}
            </div>
        </section>
    );
}

/* Simple inline styles so this component renders consistently without external CSS.
     Replace or remove these for your project's styling system (Tailwind, CSS modules, etc.). */
const headingStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    margin: "0 0 0.75rem 0",
    fontWeight: 1000,
};

const listStyle: React.CSSProperties = {
    display: "grid",
    gap: "1rem",
};

const cardStyle: React.CSSProperties = {
    padding: "1rem",
    borderRadius: 8,
    border: "1px solid rgba(0,0,0,0.06)",
    background: "white",
    boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
};

const cardHeaderStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1rem",
    marginBottom: "0.5rem",
};

const roleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 600,
};

const companyStyle: React.CSSProperties = {
    fontWeight: 500,
    color: "rgba(0,0,0,0.7)",
};

const metaStyle: React.CSSProperties = {
    fontSize: "0.875rem",
    color: "rgba(0,0,0,0.6)",
    marginTop: "0.25rem",
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
};

const dot: React.CSSProperties = {
    margin: "0 0.25rem",
};

const linkStyle: React.CSSProperties = {
    fontSize: "0.875rem",
    textDecoration: "none",
    color: "#0b6cff",
    whiteSpace: "nowrap",
};

const summaryStyle: React.CSSProperties = {
    margin: "0.25rem 0 0.5rem 0",
    color: "rgba(0,0,0,0.85)",
};

const ulStyle: React.CSSProperties = {
    margin: 0,
    paddingLeft: "1.25rem",
    color: "rgba(0,0,0,0.8)",
};

const liStyle: React.CSSProperties = {
    marginBottom: "0.25rem",
};

const tagsStyle: React.CSSProperties = {
    marginTop: "0.5rem",
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
};

const tagStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem",
    borderRadius: 999,
    background: "rgba(11,108,255,0.08)",
    color: "#0b6cff",
};