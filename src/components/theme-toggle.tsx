"use client";

import { useEffect, useSyncExternalStore } from "react";
import { CircleHalf } from "@phosphor-icons/react";

type Theme = "light" | "dark";

const themeEvent = "kw-theme-change";
let volatileTheme: Theme | null = null;

function readStoredTheme(): Theme | null {
  try {
    const savedTheme = window.localStorage.getItem("kw-theme");
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : null;
  } catch {
    return volatileTheme;
  }
}

function getThemeSnapshot(): Theme {
  return readStoredTheme() ?? "light";
}

function getThemeServerSnapshot(): Theme {
  return "light";
}

function subscribeToTheme(onStoreChange: () => void) {
  const notify = () => onStoreChange();
  window.addEventListener("storage", notify);
  window.addEventListener(themeEvent, notify);

  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(themeEvent, notify);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function setTheme(next: Theme) {
    volatileTheme = next;
    document.documentElement.dataset.theme = next;

    try {
      window.localStorage.setItem("kw-theme", next);
    } catch {
      // Storage is optional; the in-page event still updates the interface.
    }

    window.dispatchEvent(new Event(themeEvent));
  }

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={
        theme === "light"
          ? "Chuyển sang giao diện tối"
          : "Chuyển sang giao diện sáng"
      }
      title={theme === "light" ? "Dark mode" : "Light mode"}
    >
      <CircleHalf aria-hidden="true" weight="fill" />
    </button>
  );
}
