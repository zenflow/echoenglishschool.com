/* global $ */

function scrollTo(element) {
  const offset = $(element).offset();
  if (!offset) return;
  const scrollTop = Math.max(offset.top, 0);
  $("html, body").animate({ scrollTop }, 1000, "easeOutCubic");
}

export default function main() {
  if (!window.isAposLayout) return;
  const isOnHomePage = window.location.pathname === "/";

  // new WOW().init();

  if (isOnHomePage) {
    $("body").click(function (event) {
      if (event.target.tagName !== "A") return;
      if (event.target.origin !== window.location.origin) return;
      if (event.target.pathname !== "/") return;
      if (!event.target.hash) return;
      event.preventDefault();
      scrollTo(event.target.hash);
      $(".navbar .navbar-collapse").collapse("hide");
    });

    // begin scrollspy
    const baseTitle = window.document.title;
    const updateState = (hash) => {
      window.history.replaceState({}, "", hash);
      const title = $(`.navbar a.nav-link[href="${hash}"]`).text();
      window.document.title = title ? `${title} | ${baseTitle}` : baseTitle;
    };
    let hash = window.location.hash;
    if ($(`.navbar a.nav-link[href="${hash}"]`).length === 0) {
      hash = $(`.navbar a.nav-link[href]`).attr("href");
    }
    $(document).ready(function () {
      updateState(hash);
      // uncomment below if sometime the layout flow starts changing during loading
      // if (!window.isAposEdit) scrollTo(hash);
    });
    $("body").scrollspy({
      spy: "scroll",
      target: ".navbar",
      offset: 50,
    });
    $(window).on("activate.bs.scrollspy", function (event) {
      updateState($(".navbar a.nav-link.active").attr("href"));
    });
    // end scrollspy
  }
}
