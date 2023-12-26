export const SIDEBAR_ITEM = "sidebarItem";
export const SECTION = "section";
export const QUESTION = "question";
export const TEXT = "text";
export const BLOCK = "block";
export const VARIABLE = "variable";

export const SIDEBAR_ITEMS = {
  questionnaire: [
    {
      type: SIDEBAR_ITEM,
      component: {
        type: "section",
        content: "Sección"
      },
      nodes: []
    },
    {
      type: SIDEBAR_ITEM,
      component: {
        type: "question",
        content: "Pregunta"
      },
      nodes: []
    },
    {
      type: SIDEBAR_ITEM,
      component: {
        type: "text",
        content: "Texto"
      },
      nodes: []
    }
  ],
  variables: [
    {
      type: SIDEBAR_ITEM,
      component: {
        type: "block",
        content: "Sección"
      },
      bloques: []
    },
    {
      type: SIDEBAR_ITEM,
      component: {
        type: "variable",
        content: "Variable"
      }
    }
  ],
  common: [

  ]
};

export const variablesPath = {
  edo: "/admin/edos/variables",
  outbreak: "/admin/brotes/variables"
}
