import { About } from "@/components/about";
import { HeroIntro } from "@/components/hero-intro";
import { LanguageProvider } from "@/components/language-provider";
import { PostIndex } from "@/components/post-index";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main id="main-content">
        <HeroIntro />
        <PostIndex />
        <About />
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
