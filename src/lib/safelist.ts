// This file exists ONLY to ensure Tailwind v4 generates utility classes that
// are referenced via dynamic template strings (e.g. `bg-${color}-bg`). It is
// never imported at runtime — it is scanned by Tailwind's @source.
//
// Brand color tokens used dynamically: magenta, purple, teal, gold

export const SAFELIST = `
bg-magenta bg-magenta-bg bg-magenta-light text-magenta hover:bg-magenta-bg hover:text-magenta border-magenta from-magenta to-magenta
bg-purple bg-purple-bg text-purple hover:bg-purple-bg hover:text-purple border-purple from-purple to-purple
bg-teal bg-teal-bg text-teal hover:bg-teal-bg hover:text-teal border-teal from-teal to-teal
bg-gold bg-gold-bg text-gold hover:bg-gold-bg hover:text-gold border-gold from-gold to-gold
bg-cream bg-rose bg-lavender bg-mint bg-canvas bg-warm bg-ink text-ink text-ink-light
fill-gold
`;
