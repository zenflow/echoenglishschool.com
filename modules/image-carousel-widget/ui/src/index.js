/* global apos, $ */

export default function main() {
  apos.util.widgetPlayers.imageCarouselWidget = {
    selector: ".image-carousel-widget",
    player(element) {
      const secondsPerImage = Number($(element).data("seconds-per-image") || "");
      $(element)
        .find(".carousel")
        .slick({
          accessibility: true,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          dots: true,
          arrows: false,
          pauseOnFocus: false,
          pauseOnHover: false,
          speed: 500,
          infinite: true,
          autoplay: Boolean(secondsPerImage),
          autoplaySpeed: secondsPerImage * 1000,
        });
    },
  };
}
