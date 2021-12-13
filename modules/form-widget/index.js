const { getIconField } = require("../../lib/field-sets/icon");
const { colorPickerOptions } = require("../../lib/colorPickerOptions");

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Form",
  },
  fields: {
    add: {
      formName: {
        help: "Used to identify the form in emails. Not displayed anywhere on page.",
        type: "string",
        required: true,
      },
      emailTo: {
        help: "Email addresses to send submissions to, comma-separated",
        type: "string",
        required: true,
        def: "drodriguesbrunetti@gmail.com",
      },
      fields: {
        type: "array",
        min: 1,
        titleField: "label",
        fields: {
          add: {
            icon: getIconField(),
            label: {
              type: "string",
              required: true,
            },
            required: {
              type: "boolean",
              def: true,
            },
            type: {
              type: "select",
              required: true,
              def: "text",
              choices: ["text", "email", "tel", "textarea"].map((value) => ({
                label: value,
                value,
              })),
            },
            rows: {
              if: { type: "textarea" },
              type: "integer",
              required: true,
              min: 2,
              def: 5,
            },
          },
        },
      },
      submitButtonText: {
        type: "string",
        required: true,
        def: "SUBMIT",
      },
      submitButtonTextColor: {
        type: "color",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      submitButtonBackgroundColor: {
        type: "color",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      successText: {
        type: "string",
        textarea: true,
        required: true,
        def: "Thanks for reaching out!\nWe will get back to you shortly.",
      },
      failureText: {
        type: "string",
        textarea: true,
        required: true,
        def: "Something went wrong.\nPlease contact via email.",
      },
    },
  },
  apiRoutes(self) {
    return {
      post: {
        async submit(req) {
          const { formName, emailTo, formData } = req.body;
          await self.emit("submission", { req, formName, emailTo, formData });
        },
      },
    };
  },
  handlers(self) {
    return {
      submission: {
        async emailSubmission({ req, formName, emailTo, formData }) {
          const data = { formName, formData };
          const { hostname } = new URL(process.env.BASE_URL);
          const options = {
            from: { name: hostname, address: `no-reply@${hostname}` },
            to: emailTo,
            subject: `Form Submission - ${formName}`,
          };
          try {
            await self.email(req, "emailSubmission", data, options);
          } catch (error) {
            console.error("--- Failed to email form submission ---");
            console.error({ formName, emailTo, formData });
            throw error;
          }
        },
      },
    };
  },
};
