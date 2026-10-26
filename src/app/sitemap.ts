import type { MetadataRoute } from "next";
import { getSiteUrl } from "../lib/site-url";
import ptDict from "../dictionaries/pt.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = getSiteUrl();
    const lastModified = new Date();

    const locales = ["pt", "en"];
    // Slugs derivados dinamicamente do dicionário
    const projectSlugs = Object.keys(ptDict.projectsData);

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

    // Página Sobre (About)
    for (const lang of locales) {
        routes.push({
            url: `${siteUrl}/${lang}/sobre`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: {
                languages: {
                    pt: `${siteUrl}/pt/sobre`,
                    en: `${siteUrl}/en/sobre`,
                },
            },
        });
    }

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
