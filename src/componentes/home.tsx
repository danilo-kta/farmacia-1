import { Alert, FlatList, Pressable, Text, View } from "react-native";
import { Produto } from "../entidades/produto";

interface ItemLista {
  produto: Produto;
}

const Item = ({ produto }: ItemLista) => {
  return (
    <View>
      <Text>Nome: {produto.nome}</Text>
      <Text>Valor: {produto.valor}</Text>
      <Pressable
        onPress={() => {
          Alert.alert(`codigo: ${produto.codigo}`);
        }}>

        <Text>Click</Text>
      </Pressable>
    </View>
  );
}

function fnRenderItem({ item }: any) {
  return (
    <View>
      <Item produto={item} />
      <Text>-----------------------</Text>
    </View>
  )
};

const Home = () => {
  const produto_1 = {
    codigo: 1,
    nome: "Dipirona",
    descricao: "Para dor de cabeça devido a programação",
    valor: 100.00,
    categoria: {
      codigo: 1,
      descricao: "Medicamento"
    }
  };

  const produto_2 = {
    codigo: 2,
    nome: "Alivium",
    descricao: "Para dor de cabeça devido a programação",
    valor: 150.00,
    categoria: {
      codigo: 1,
      descricao: "Medicamento"
    }
  };

  const produto_3 = {
    codigo: 3,
    nome: "Azitromicina",
    descricao: "garganta inflamada",
    valor: 30.00,
    categoria: {
      codigo: 1,
      descricao: "Medicamento"
    }
  };

  const produtos = [
    produto_1,
    produto_2
  ];

  return (
    <View>
      <Text style={{ textAlign: "center" }}>
        Lista de Produtos
      </Text>

      <FlatList
        data={produtos}
        renderItem={fnRenderItem}
      />
    </View>
  );
}

export default Home;