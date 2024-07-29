import {
  File,
  FileResponse,
} from '../../../../external/ocr/interfaces/file.response.interface';

const file1Mock: File = {
  name: 'file1',
  text: 'word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11',
};

const file2Mock: File = {
  name: 'file2',
  text: 'word1 word2 word3 word4 word5 word6 word7 word8 word9 word10',
};

export const file3Mock: File[] = [
  {
    name: 'BOLETO_301796601.pdf',
    text: 'j j\n! > nosso numero — cnpj vencimento total a pagar !\né £ 101/012008676-3  34075739/0001-84 no vencimento\n! vf estácio agência código beneficiário 20/05/2024 r$ 0,00 !\n! 1360 130020522 geração desta fatura 19/04/2024 ), !\n| |\n| ( matrícula estudante curso engenharia de software !\n! 2023.09.85378-7 diego kennedy guimaraes barros e ||\n| ano 2024 —semestre1º mês maio |\n| | campus estado — cidade |\n| | polo centro - jaraguá do sul - sc sc jaraguá do sul o presennass o brsnems |\n| |\n| |\n! mensalidade sem desconto bolsas/finan/parcel total a pagar !\n| r$ 463,00 o r520635 o " &w  r$000 |\n| |\n| |\n! discriminação dos valores valores r$ !\n| | relação de disciplinas matriculadas !\n! mensalidade - polo centro - jaragu virtual 463,00 (+) !\n! o a6soo\n! campanha padrão estácio (45%) 208,35 (-) !\n| obs |\n| |\n6 nestebloco está contido o valor da sua mensalidade corrente, que tem relação com o currículo do curso.\n! (2 também estão contidas suas informações de bolsas/financiamentos, quando houver. seis 254,65 !\n| | outros lançamentos |\n! plano descasado - polo centro - jaragu virtual mai 254,65 (-) !\n| 1\n! subtotal 254,65 |\n1]\n| !\n! total (=) 0,00 !\n| |\n! constam débitos no valor principal de r$ 169,95. desconsidere este aviso se o pagamento já tiver sido efetuado !\n! o pagamento deste título não quita débitos anteriores. !\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n| |\n" "\n',
  },
];

export const file4Mock: File[] = [
  {
    name: 'boleto (2).pdf',
    text: 'nome: “diego kennedy guimaraes barros matrícula:  202309853787;202309853787\ncurso: engenharia de software campus: polo centro - jaraguá do sul - sc\nresumo dos débitos negociados\ncompetência vencimento tino documento valor oriainal : competência — vencimento — tico documento valor oriainal\n1112023 — 101/2023 mensalidade r$169,95 : 12/2023 11122023 — mensalidade r$169,95\nvalor total atualizado: r$366,83 - (trezentos e sessenta e seis reais e oitenta e três centavos)\ndiego kennedy guimaraes barros o pagamento deste boleto importará no reconhecimento da dívida acima discriminada no\nvalor total de r$366,83 (trezentos e sessenta e seis reais e oitenta e três centavos)não havendo qualquer tipo de contestação\nsobre os valores apresentados.\nfofoterg cesete foco tsrocames tem\n033 santander\n4360-0/2288281 2024-03 238,44 18/03/2024\nsociedade de ensino superior estacio de sa 0000150803583\n18/03/2024 18/03/2024 07560918 001/001\nsantander 033-7 | 03399.22882 28100.001503 80358.301010 4 96590000023844\niscas pagamenio parcoia vercmento\nagencias bancárias\n2024-03 18/03/2024\nbenefício — sociedade de ensino superior estacio de sa - cnpj: 34075739000184 - rua | agência código beneficário\nmora a 40 bio de janeiro. 4360-0/2288281\ndema documento finâmeo do documento two doe em baia do processamento esco nomes\n18/03/2024 07560918-000 18/03/2024 0000150803583\ntea — espécie cuando vao [etc documento\nrcr r$ 238,44\ntatreções (todas su informações dest boleto são de axchusiva responsabilidade o ceder) [so tes—\nnão receber após o vencimento.\ndeve ser pago em espécie\n[e descontos abatments\n[07 6a demuções\nbeer\nref: - 202309853787- parcelamento: 07560918 parc: 001/001 - contrato: 202309853787\neee\nmm diego kennedy guimaraes barros cpf : 99999-99  202309853787;2023098.\nr jose joos11bairro pomeranos\n89063150 - toupava central - blumenau - sc\npagadorlavalista código de baixa\n',
  },
];

export const fileResponseMock: FileResponse = [file1Mock, file2Mock];
