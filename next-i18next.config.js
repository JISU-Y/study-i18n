module.exports = {
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
    localeDetection: true,
  },
  localePath: typeof window === "undefined" ? require("path").resolve("./public/locales") : "/locales",
}
