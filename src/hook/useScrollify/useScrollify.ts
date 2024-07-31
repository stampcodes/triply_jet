import { useEffect } from "react";
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
  useEffect(() => {
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

    // Cleanup on unmount
    return () => {
      $.scrollify.destroy();
    };
  }, []);
};

export default useScrollify;
