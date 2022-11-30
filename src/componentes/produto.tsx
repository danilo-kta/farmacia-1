import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, TextInput, View } from "react-native";


const ProdutoComponent = () => {
  const navigation = useNavigation();
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

  return (
    <View>
      <TextInput 
        placeholder="Codigo:"
        value={produto_1.codigo.toString()}
      />
      <TextInput 
        placeholder="Nome:"
        value={produto_1.nome}
      />

      <TextInput 
        placeholder="Descrição:"
        value={produto_1.descricao}
      />

      <TextInput 
        placeholder="Valor:"
        value={produto_1.valor.toString()}
      />

      <TextInput 
        placeholder="Categoria:"
        value={produto_1.categoria.descricao}
      />

      <Pressable
        onPress={() => {
          navigation.navigate("Principal" as never);
        }}
      >
        <Text>Voltar</Text>
      </Pressable>
    </View>
  );
};

export default ProdutoComponent;