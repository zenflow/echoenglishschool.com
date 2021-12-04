/* global $, apos */

export default function main() {
  apos.util.widgetPlayers.formWidget = {
    selector: ".form-widget",
    player(element) {
      const $form = $(element).find("form");
      $form.on("submit", async (event) => {
        event.preventDefault();

        if (apos?.adminBar?.editMode) {
          return;
        }
        if ($(element).hasClass("with-overlay")) {
          return;
        }
        $(element).addClass("with-overlay");

        let error = null;
        try {
          const formName = $(element).data("form-name");
          const emailTo = $(element).data("email-to");
          const formData = $form.serializeArray();
          await Promise.all([
            new Promise((resolve) => setTimeout(resolve, 500)),
            apos.http.post("/api/v1/form-widget/submit", { body: { formName, emailTo, formData } }),
          ]);
        } catch (e) {
          error = e;
        }
        $(element).find(".spinner-border").hide();
        $(element)
          .find(`.result-${error ? "failure" : "success"}`)
          .show();
      });
    },
  };
}
