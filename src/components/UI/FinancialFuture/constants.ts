import ic_money_send from '../../../../public/svgs/ic_money_send.svg';
import ic_wallet_minus from '../../../../public/svgs/ic_wallet_minus.svg';
export const cardsInfo = [
  {
    title: 'Priorize Melhor',
    details:
      'Fila por risco clínico em tempo real. O que é crítico aparece primeiro, sempre.',
    icon: ic_money_send,
  },
  {
    title: 'Diagnostique Melhor',
    details:
      'Sinais de achados críticos e comparação com casos similares em segundos.',
    icon: ic_wallet_minus,
  },
];

export const stats = [
  {
    number: '96.7%',
    subtitle: 'precisão da IA',
  },
  {
    number: '127',
    subtitle: 'casos/hora monitorados',
  },
  {
    number: '1.2M+',
    subtitle: 'exames processados',
  },
  {
    number: '15%',
    subtitle: 'ganho de produtividade',
  },
];

// For desktop
export const desktopHeaderPhrase = ['Qualidade previsível', 'em qualquer volume'];
export const desktopParagraphPhrase = [
  'Laudos.AI antecipa sobrecarga e alerta para riscos que afetam',
  'a qualidade antes que virem erro diagnóstico.',
];

// For mobile
export const mobileHeaderPhrase = ['Qualidade previsível', 'em qualquer volume'];
export const mobileParagraphPhrase = [
  'Alertas proativos de risco',
  'e monitoramento da carga.',
];
