import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      'Laudos.AI reorganiza a fila e destaca achados críticos. Meu tempo voltou a ser do paciente — não do sistema.',
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      'Automação sem fricção. Menos retrabalho, mais consistência. Plantões longos doem menos quando a IA ajuda de verdade.',
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      'Segunda opinião assistida reduziu minhas revisões finais. Alertas de discrepância já evitaram erros em exames complexos.',
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      'Priorizar por risco muda tudo: trauma e AVC aparecem primeiro. Sinto que a qualidade subiu mesmo com a demanda.',
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      'Integração estável com PACS e salvamento resiliente. Adeus laudo perdido — e o estresse que vinha junto.',
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Junte-se aos primeiros', 'a usar Laudos.AI'];
