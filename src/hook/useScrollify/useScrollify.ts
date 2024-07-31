// useScrollify.ts
import { useEffect, useState } from "react";
import $ from "jquery";
import "jquery-scrollify";

declare global {
  interface JQueryStatic {
    scrollify: {
      (options?: ScrollifyOptions): void;
      update(): void;
      destroy(): void;
      isInitialized?: boolean;
    };
  }
}

interface ScrollifyOptions {
  section?: string;
  sectionName?: boolean;
  interstitialSection?: string;
  easing?: string;
  scrollSpeed?: number;
  offset?: number;
  scrollbars?: boolean;
  setHeights?: boolean;
  overflowScroll?: boolean;
  updateHash?: boolean;
  touchScroll?: boolean;
  before?: () => void;
  after?: () => void;
  afterResize?: () => void;
  afterRender?: () => void;
}

const useScrollify = () => {
  const [isScrollifyInitialized, setIsScrollifyInitialized] = useState(false);

  useEffect(() => {
    const initializeScrollify = () => {
      if (window.innerWidth > 768 && !isScrollifyInitialized) {
        $.scrollify({
          section: ".div-scrollify",
          sectionName: false,
          interstitialSection: "",
          easing: "easeOutExpo",
          scrollSpeed: 1100,
          offset: 0,
          scrollbars: true,
          setHeights: false,
          overflowScroll: true,
          updateHash: false,
          touchScroll: true,
          before: function () {},
          after: function () {},
          afterResize: function () {
            $.scrollify.update();
          },
          afterRender: function () {
            $.scrollify.update();
          },
        });
        setIsScrollifyInitialized(true);
      }
    };

    const destroyScrollify = () => {
      if (isScrollifyInitialized) {
        $.scrollify.destroy();
        setIsScrollifyInitialized(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        initializeScrollify();
      } else {
        destroyScrollify();
      }
    };

    const handleLoad = () => {
      handleResize();
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
      destroyScrollify();
    };
  }, [isScrollifyInitialized]);

  return null;
};

export default useScrollify;
