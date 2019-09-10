import uuid from 'uuid/v1';

export const atendimentos = [
  {
    id: uuid(),
    disciplina: 'DENTISTICA E PERIO I',
    paciente: 'Ekaterina Tankova',
    professorOrientador: 'RODRIGO',
    procedimento: 'EC/OH/PC',
    data: 1555016400000
  },
  {
    id: uuid(),
    disciplina: 'DENTISTICA E PERIO I',
    paciente: 'Ekaterina Tankova',
    professorOrientador: 'RODRIGO',
    procedimento: 'EC/OH/PC',
    data: 1555016400000
  }
];

export const procedimentos = [
  { label: 'Procedimento', value: 0 },
  { label: 'AJ-P', value: 2 },
  { label: 'AJ-RR', value: 3 },
  { label: 'AM', value: 5 },
  { label: 'AMTA', value: 6 },
  { label: 'ASP', value: 7 },
  { label: 'ATF', value: 8 },
  { label: 'AVDTM', value: 9 },
  { label: 'AVF', value: 10 },
  { label: 'BIO', value: 11 },
  { label: 'CCP', value: 12 },
  { label: 'CDV', value: 14 },
  { label: 'CDV-L', value: 15 },
  { label: 'CMET', value: 16 },
  { label: 'CP', value: 17 },
  { label: 'CPDE', value: 18 },
  { label: 'CPE', value: 19 },
  { label: 'CPP', value: 20 },
  { label: 'CTP', value: 21 },
  { label: 'DA', value: 22 },
  { label: 'EC/OH/PC', value: 23 },
  { label: 'EE', value: 24 },
  { label: 'EN', value: 25 },
  { label: 'ENDO-R', value: 26 },
  { label: 'FDRC', value: 27 },
  { label: 'MANT', value: 28 },
  { label: 'ME', value: 29 },
  { label: 'MH/F', value: 30 },
  { label: 'NFV', value: 31 },
  { label: 'NMF', value: 32 },
  { label: 'NPFI', value: 33 },
  { label: 'OP-AS/RRC', value: 34 },
  { label: 'OP-ASP', value: 35 },
  { label: 'OP-ATF', value: 36 },
  { label: 'OP-AVF', value: 37 },
  { label: 'OP-CPI', value: 38 },
  { label: 'OP-ESM', value: 39 },
  { label: 'OP-EXO', value: 40 },
  { label: 'OP-PDP', value: 41 },
  { label: 'OP-RAR', value: 42 },
  { label: 'OP-RRC', value: 43 },
  { label: 'OP-RT/CIV', value: 44 },
  { label: 'OP-U', value: 45 },
  { label: 'OR-MANT', value: 46 },
  { label: 'OR-ACPPM', value: 47 },
  { label: 'OR-AAS', value: 48 },
  { label: 'OR-ACAAS', value: 49 },
  { label: 'OR-ACDA', value: 50 },
  { label: 'OR-ACDMCL', value: 51 },
  { label: 'OR-ACED', value: 52 },
  { label: 'OR-ACEM', value: 53 },
  { label: 'OR-ACEO', value: 54 },
  { label: 'OR-ACGI', value: 55 },
  { label: 'OR-ACMTR', value: 56 },
  { label: 'OR-AEXO', value: 57 },
  { label: 'OR-DM', value: 58 },
  { label: 'OR-DMCL', value: 59 },
  { label: 'OR-EM', value: 60 },
  { label: 'OR-EXD', value: 61 },
  { label: 'OR-GPI', value: 62 },
  { label: 'OR-MANT/CL', value: 63 },
  { label: 'OR-MANT/SL', value: 64 },
  { label: 'OR-MANTR', value: 65 },
  { label: 'OR-MTR', value: 66 },
  { label: 'OR-PH', value: 67 },
  { label: 'PDP', value: 68 },
  { label: 'PE', value: 69 },
  { label: 'PNE-RAR', value: 70 },
  { label: 'PPFR', value: 71 },
  { label: 'PPRD', value: 72 },
  { label: 'PPRP', value: 73 },
  { label: 'PTD', value: 74 },
  { label: 'PTI', value: 75 },
  { label: 'RA', value: 76 },
  { label: 'RARsub', value: 77 },
  { label: 'RARsupra', value: 78 },
  { label: 'RNMF', value: 79 },
  { label: 'RPPUF', value: 80 },
  { label: 'RRC', value: 81 },
  { label: 'RSUT', value: 82 },
  { label: 'RT/CIV', value: 84 },
  { label: 'RX', value: 85 },
  { label: 'RXI', value: 86 },
  { label: 'SC', value: 87 },
  { label: 'TAS', value: 88 }
];

export const professores = [
  { label: 'Professor', value: 0 },
  { label: 'Josef Stein Butzke', value: 1 },
  { label: 'Humberto Nagoya', value: 2 },
  { label: 'Mateus Pavan', value: 3 },
  { label: 'Isao Moragoto', value: 4 }
];

export const disciplinas = [
  { label: 'Disciplina', value: 0 },
  { label: 'INTEGRADA III', value: 1 },
  { label: 'INTEGRADA INFANTIL I', value: 2 },
  { label: 'INTEGRADA INFANTIL II', value: 3 },
  { label: 'DENT E PERIO I', value: 4 }
];

export const regioes = [
  { label: 'Região', value: 0 },
  { label: 'Anterior', value: 1 },
  { label: 'Superior', value: 2 },
  { label: 'Inferior', value: 3 },
  { label: 'Sextante', value: 4 },
  { label: 'Superior e Inferior', value: 5 }
];

export const faces = [
  { label: 'Faces', value: 0 },
  { label: 'O', value: 1 },
  { label: 'D', value: 3 },
  { label: 'O/D', value: 4 },
  { label: 'Palatina Incisal', value: 2 }
];
