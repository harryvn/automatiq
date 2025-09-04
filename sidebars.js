import basics from "./sidebars/basics";
import introduction from "./sidebars/selenium-webdriver";
import fundamentals from "./sidebars/fundamentals";
import advanced from "./sidebars/advanced";

const introWithFundamentals = [
  ...introduction.slice(0, 3), // up to Language Bindings
  {
    type: "category",
    label: "Fundamentals",
    items: [...fundamentals],
  },
  ...introduction.slice(3), // rest (Components, Getting Started…)
];

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    "welcome",
    "acknowledgments",
    {
      type: "category",
      label: "Selenium WebDriver",
      items: [
        ...introWithFundamentals,
        {
          type: "category",
          label: "Basics",
          items: [...basics],
        },
        {
          type: "category",
          label: "Advanced",
          items: [...advanced],
        },
      ],
    },
  ],
};

export default sidebars;
