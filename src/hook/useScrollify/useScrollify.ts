import { useEffect, useState } from "react";
import $ from "jquery";
import "jquery-scrollify";

declare global {
  interface JQueryStatic {
    scrollify: {
      (options?: ScrollifyOptions): void;
      update(): void;
      destroy(): void;
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

  const isDesktop = () => {
    return (
      window.innerWidth > 768 && !/Mobi|Android/i.test(navigator.userAgent)
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (isDesktop()) {
        if (!isScrollifyInitialized) {
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
      } else {
        if (isScrollifyInitialized) {
          $.scrollify.destroy();
          setIsScrollifyInitialized(false);
        }
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (isScrollifyInitialized) {
        $.scrollify.destroy();
      }
    };
  }, [isScrollifyInitialized]);

  return null;
};

export default useScrollify;
