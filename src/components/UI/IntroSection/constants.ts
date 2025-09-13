import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ['Apresentando', 'laudos.ai'];
export const desktopParagraphPhrase = [
  'Fluxo de radiologia sem atrito: priorização inteligente,',
  'segunda opinião assistida e consistência diagnóstica.',
];

// For mobile
export const mobileHeaderPhrase = ['Apresentando', 'laudos.ai'];
export const mobileParagraphPhrase = [
  'Fluxo de radiologia sem atrito:',
  'priorização, segunda opinião e consistência.',
];

export const edges = [
  {
    point: 'Priorização por risco em tempo real',
    details:
      'Casos urgentes sobem para o topo automaticamente com base nos achados e contexto clínico.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Segunda opinião assistida',
    details:
      'Sinalizações contextuais para achados críticos e comparação com casos similares.',
    icon: ic_identification,
  },
  {
    point: 'Fluxo seguro e resiliente',
    details:
      'Salvamento confiável e checagens automáticas reduzem retrabalho e perdas de laudo.',
    icon: ic_lock_closed,
  },
];
