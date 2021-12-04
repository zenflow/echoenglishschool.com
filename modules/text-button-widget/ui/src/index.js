/* global apos, $ */
export default function main() {
  apos.util.widgetPlayers.textButtonWidget = {
    selector: ".text-button-widget",
    player(element) {
      $(element)
        .find("a")
        .on("click", (event) => {
          if (apos?.adminBar?.editMode) {
            event.preventDefault();
            event.stopPropagation();
          }
        });
    },
  };
}
