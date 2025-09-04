/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a "Next" and "Previous" button for each doc

 You can create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'table-of-contents',
    'disclaimer',
    'abbreviations',
    'executive-summary', // Changed from 'executive_summary' to 'executive-summary'
    'introduction',
    'chapter-02-approaches-tools',
    'chapter-03-project-cycle',
    'chapter-04-project-experience',
    'conclusion',
    'annexes',
    'acknowledgements',
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
