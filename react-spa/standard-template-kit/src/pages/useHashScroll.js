import { useEffect, useRef, useState } from "react";

function waitForImages(root) {
  const imgs = Array.from(root.querySelectorAll("img"));
  console.log("[useHashScroll] imgs found:", imgs.length);
  if (imgs.length === 0) return Promise.resolve();
  return new Promise((resolve) => {
    let remaining = imgs.filter((img) => !img.complete).length;
    console.log("[useHashScroll] imgs still loading:", remaining);
    if (remaining === 0) return resolve();
    const done = () => {
      remaining -= 1;
      if (remaining === 0) {
        console.log("[useHashScroll] all images loaded");
        resolve();
      }
    };
    imgs.forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
  });
}

function waitForElement(id, root) {
  const el = () => document.getElementById(id);
  if (el()) return Promise.resolve(el());
  return new Promise((resolve) => {
    const observer = new MutationObserver(() => {
      const found = el();
      if (found) {
        console.log("[useHashScroll] element appeared:", found);
        observer.disconnect();
        resolve(found);
      }
    });
    observer.observe(root || document.body, { childList: true, subtree: true });
  });
}

function openAccordionFor(targetEl) {
  let contentDiv = targetEl.closest(".content.hide");
  let opened = 0;
  while (contentDiv) {
    contentDiv.classList.remove("hide");
    contentDiv.classList.add("show");
    opened += 1;
    contentDiv = contentDiv.parentElement?.closest(".content.hide") ?? null;
  }
  const title = targetEl.closest(".item")?.querySelector(".title");
  if (title) title.classList.add("open");
  console.log("[useHashScroll] accordions opened:", opened);
}

export default function useHashScroll(rootRef, { offset = 0, behavior = "smooth" } = {}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const rootEl = rootRef?.current ?? document;

    const scrollToTarget = (el, attempt) => {
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      console.log(`[useHashScroll] attempt ${attempt}: scrolling to`, y);
      window.scrollTo({ top: y, behavior });
    };

    const handleHash = async () => {
      const hash = window.location.hash.slice(1);
      console.log("[useHashScroll] handleHash =>", hash);
      if (!hash) return setLoading(false);

      const target = await waitForElement(hash, rootEl);
      openAccordionFor(target);
      await waitForImages(rootEl);

      requestAnimationFrame(() => {
        scrollToTarget(target, 1);

        setTimeout(() => {
          const dist = target.getBoundingClientRect().top - offset;
          console.log("[useHashScroll] after 150ms target top:", dist);
          if (Math.abs(dist) > 10) {
            scrollToTarget(target, 2);
          }
          setLoading(false);
        }, 250);
      });
    };

    handleHash();

    const onHashChange = () => {
      console.log("[useHashScroll] hashchange event");
      setLoading(true);
      handleHash();
    };

    const cancel = () => {
      console.log("[useHashScroll] user interaction – cancel loader");
      setLoading(false);
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("wheel", cancel, { passive: true, once: true });
    window.addEventListener("touchmove", cancel, { passive: true, once: true });
    window.addEventListener("keydown", cancel, { once: true });

    return () => window.removeEventListener("hashchange", onHashChange);
  }, [rootRef, offset, behavior]);

  return loading;
}
