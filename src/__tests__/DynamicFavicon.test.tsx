import { describe, it, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import DynamicFavicon from "../components/DynamicFavicon";

describe("<DynamicFavicon />", () => {
    beforeEach(() => {
        document.head.innerHTML = "";
    });

    it("cria tag link com type='image/svg+xml' e href do tema dark", () => {
        render(<DynamicFavicon />);

        const svgLink = document.querySelector<HTMLLinkElement>("link[rel~='icon'][type='image/svg+xml']");
        expect(svgLink).not.toBeNull();
        expect(svgLink?.href).toContain("/icon-dark.svg");
    });

    it("não sobrescreve favicon.ico estático preexistente", () => {
        const icoLink = document.createElement("link");
        icoLink.rel = "icon";
        icoLink.href = "/favicon.ico";
        icoLink.type = "image/x-icon";
        document.head.appendChild(icoLink);

        render(<DynamicFavicon />);

        const existingIco = document.querySelector<HTMLLinkElement>("link[type='image/x-icon']");
        expect(existingIco?.href).toContain("/favicon.ico");

        const svgLink = document.querySelector<HTMLLinkElement>("link[type='image/svg+xml']");
        expect(svgLink).not.toBeNull();
        expect(svgLink?.href).toContain("/icon-dark.svg");
    });
});
