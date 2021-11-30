/* global WOW, $, apos */

export default function main() {
  if (!window.isAposLayout) return;

  new WOW().init();

  // Begin Navbar
  const isOnHomePage = window.location.pathname === "/";
  if (isOnHomePage) {
    const baseTitle = window.document.title;
    const updateState = (hash) => {
      window.history.replaceState({}, "", hash);
      const title = $(`.navbar a.nav-link[href="${hash}"]`).text();
      window.document.title = title ? `${title} | ${baseTitle}` : baseTitle;
    };
    const scrollTo = (element) => {
      const offset = $(element).offset();
      if (!offset) return;
      const scrollTop = Math.max(offset.top, 0);
      $("html").animate({ scrollTop }, 1000, "easeOutCubic");
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

    apos.util.widgetPlayers.navbar = {
      selector: ".navbar",
      player(element) {
        $(element)
          .find(".navbar-nav a")
          .on("click", function (event) {
            event.preventDefault();
            scrollTo(this.hash);
            $(".navbar .navbar-collapse").collapse("hide");
          });
      },
    };
  }
  // End Navbar
}
