import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://peridan.dev";
    const lastModified = new Date();

    const locales = ["pt", "en"];
    const projectSlugs = [
        "brisamar-pescados",
        "fleet-manager",
        "jf-informatica",
        "bem-digital",
        "bolao-copa",
        "hotsite-unialfa",
        "investment-manager",
        "chopits",
        "e-script-website",
        "alfaplus",
        "site-vitrine",
    ];

    const routes: MetadataRoute.Sitemap = [];

    // Página Inicial (Home)
    routes.push({
        url: `${siteUrl}/pt`,
        lastModified,
        changeFrequency: "weekly",
        priority: 1.0,
        alternates: {
            languages: {
                pt: `${siteUrl}/pt`,
                en: `${siteUrl}/en`,
            },
        },
    });

    routes.push({
        url: `${siteUrl}/en`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
            languages: {
                pt: `${siteUrl}/pt`,
                en: `${siteUrl}/en`,
            },
        },
    });

    // Currículo Formal
    for (const lang of locales) {
        routes.push({
            url: `${siteUrl}/${lang}/curriculo`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: {
                languages: {
                    pt: `${siteUrl}/pt/curriculo`,
                    en: `${siteUrl}/en/curriculo`,
                },
            },
        });
    }

    // Hub de Projetos
    for (const lang of locales) {
        routes.push({
            url: `${siteUrl}/${lang}/projetos`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
            alternates: {
                languages: {
                    pt: `${siteUrl}/pt/projetos`,
                    en: `${siteUrl}/en/projetos`,
                },
            },
        });
    }

    // Detalhes Individuais dos Projetos
    for (const slug of projectSlugs) {
        for (const lang of locales) {
            routes.push({
                url: `${siteUrl}/${lang}/projetos/${slug}`,
                lastModified,
                changeFrequency: "monthly",
                priority: 0.7,
                alternates: {
                    languages: {
                        pt: `${siteUrl}/pt/projetos/${slug}`,
                        en: `${siteUrl}/en/projetos/${slug}`,
                    },
                },
            });
        }
    }

    // Política de Privacidade e Termos
    for (const lang of locales) {
        routes.push({
            url: `${siteUrl}/${lang}/privacidade`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
            alternates: {
                languages: {
                    pt: `${siteUrl}/pt/privacidade`,
                    en: `${siteUrl}/en/privacidade`,
                },
            },
        });
    }

    return routes;
}
