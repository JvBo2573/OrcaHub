import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../assets/logo.png';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },

  header: {
    marginBottom: 20,
  },

  logo: {
  width: 120,
  marginBottom: 10
  },

  title: {
    fontSize: 20,
    marginBottom: 5,
  },

  section: {
    marginBottom: 10,
  },

  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    marginTop: 5,
  },

  col1: { width: '50%' },
  col2: { width: '25%' },
  col3: { width: '25%' },

  total: {
    marginTop: 15,
    fontSize: 14,
  }
});

const calcularTotal = (produtos, desconto = 0, acrescimo = 0) => {
  const subtotal = produtos.reduce(
    (acc, item) => acc + (item.preco * (1 - (item.desconto || 0)/100)) * item.qtd,
    0
  );
  return subtotal - desconto + acrescimo;
};

const OrcamentoPdf = ({ dados }) => {

  const total = calcularTotal(
    dados.produtos,
    dados.desconto,
    dados.acrescimo
  );

  return (
    <Document>
      <Page style={styles.page}>

        {/* Cabeçalho */}
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} />
          <Text>Orçamento</Text>
        </View>

        {/* Cliente */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text>Cliente: {dados.cliente}</Text>
            <Text>CPF: {dados.cpf}</Text>
            <Text>Telefone: {dados.telefone}</Text>
          </View>

          <View>
            <Text>Email: {dados.email}</Text>
            <Text>Endereço: {dados.endereco}</Text>
            <Text>Data: {dados.data}</Text>
          </View>
        </View>

        {/* Tabela */}
        <View style={styles.tableHeader}>
          <Text style={styles.col1}>Produto</Text>
          <Text style={styles.col2}>Qtd</Text>
          <Text style={styles.col3}>Preço</Text>
        </View>

        {dados.produtos.map((item, index) => (
          <View style={styles.row} key={item.nome + index}>
            <Text style={styles.col1}>{item.nome}</Text>
            <Text style={styles.col2}>{item.qtd}</Text>
            <Text style={styles.col3}>R$ {item.preco}</Text>
          </View>
        ))}

        <View style={styles.section}>
          <Text>Observações:</Text>
          <Text>{dados.observacoes}</Text>
        </View>

        {/* Totais */}
        <View style={styles.total}>
          <Text>Desconto: R$ {dados.desconto}</Text>
          <Text>Acréscimo: R$ {dados.acrescimo}</Text>
          <Text>Total: R$ {total}</Text>
        </View>

      </Page>
    </Document>
  );
};

export default OrcamentoPdf;