import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <p className=" text-sm text-muted">
        Designed & built by {siteConfig.name} <span className="text-border">·</span> © {new Date().getFullYear()}
      </p>
    </footer>
  );
}