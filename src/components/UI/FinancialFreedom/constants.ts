
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';

// For desktop
export const desktopHeaderPhrase = ['Qualidade em escala,', 'sem perder o cuidado'];
export const desktopParagraphPhrase = [
  'A Laudos.AI reduz ruído, prioriza o crítico e mantém a consistência',
  'dos laudos mesmo quando o volume dispara.',
];
export const desktopBriefNotePhrase = [
  'Priorização por risco,',
  'segunda opinião assistida e',
  'fluxo resiliente — em',
  'um só lugar.',
];

// For mobile
export const mobileHeaderPhrase = ['Qualidade em escala,', 'sem perder o cuidado'];
export const mobileParagraphPhrase = [
  'Laudos consistentes e priorização do crítico,',
  'mesmo com alta demanda.',
];

export const mobileBriefNotePhrase = [
  'Priorização',
  ' por risco,',
  'segunda',
  ' opinião,',
  'fluxo',
  ' resiliente.',
];

export const edges = [
  {
    point: 'Triagem que entende risco',
    details:
      'Casos urgentes sobem automaticamente para o topo com base em achados e contexto clínico.',
    icon: ic_banknotes,
  },
  {
    point: 'Consistência de laudos',
    details:
      'Checklists dinâmicos e padrões adaptativos reduzem variabilidade e omissões importantes.',
    icon: ic_circle_stack,
  },
  {
    point: 'Fluxo resiliente',
    details:
      'Salvamento e recuperação confiáveis previnem perda de laudos e retrabalho.',
    icon: ic_arrows_left_right,
  },
];
