import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

type Consulta = {
  id: number;
  paciente: string;
  medico: string;
  data: string;
  status: "agendada" | "confirmada" | "cancelada" | "realizada";
};
export default function App() {

  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    paciente: "Jonas Santos",
    medico: "Dr. Hete Caetano",
    data: "28/02/2026",
    status: "agendada",
  });

  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>
      <View style={styles.card}>
        <Text>Paciente: {consulta.paciente}</Text>
        <Text>Médico: {consulta.medico}</Text>
        <Text>Data: {consulta.data}</Text>
        <Text>Status: {consulta.status}</Text>
        {consulta.status === "agendada" && (

          <View style={styles.botao}>
            <Button title="Confirmar Consulta" onPress={confirmarConsulta} /> 
          </View>
          //Componentes proprios precisam estar dentro de um view para conseguir atribuir style
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b3d8f",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
  botao: {
    marginTop: 20,
  },
});
