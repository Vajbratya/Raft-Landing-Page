type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Perguntas', 'frequentes'];
export const mobileHeaderPhrase = ['Perguntas', 'frequentes'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'O que é a laudos.ai?',
    answer:
      'Uma plataforma de apoio ao radiologista que prioriza casos por risco, destaca achados críticos e ajuda a manter consistência diagnóstica.',
  },
  {
    question: 'A IA substitui o radiologista?',
    answer:
      'Não. A IA atua como segunda opinião assistida e automação de fluxo. O radiologista permanece no controle e assina o laudo.',
  },
  {
    question: 'Como a priorização por risco funciona?',
    answer:
      'Modelos analisam sinais do exame e contexto clínico para ordenar a fila. Casos críticos sobem automaticamente para o topo.',
  },
  {
    question: 'Como a plataforma lida com segurança e privacidade?',
    answer:
      'Criptografia em trânsito e em repouso, trilhas de auditoria e controles de acesso. Integração compatível com padrões do setor.',
  },
];
