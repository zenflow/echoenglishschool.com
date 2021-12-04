module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Image Carousel",
  },
  fields: {
    add: {
      secondsPerImage: {
        help: "Number of seconds to show each image before transitioning to the next. Set to 0 to disable automatic transitions.",
        type: "float",
        def: 3,
      },
      _images: {
        type: "relationship",
        label: "Images",
        required: true,
        withType: "@apostrophecms/image",
      },
    },
  },
};
