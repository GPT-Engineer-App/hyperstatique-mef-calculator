import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, HStack, Box, IconButton } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

const Index = () => {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [load, setLoad] = useState("");
  const [reaction, setReaction] = useState(null);

  const calculateReactions = () => {
    // Placeholder for actual MEF calculation logic
    // For demonstration, we will just return some dummy values
    const reactionA = (parseFloat(load) * parseFloat(length)) / 2;
    const reactionB = (parseFloat(load) * parseFloat(height)) / 2;
    setReaction({ reactionA, reactionB });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Calcul des Réactions d'un Portique Hyperstatique</Text>
        <Input placeholder="Longueur (m)" value={length} onChange={(e) => setLength(e.target.value)} />
        <Input placeholder="Hauteur (m)" value={height} onChange={(e) => setHeight(e.target.value)} />
        <Input placeholder="Charge (N)" value={load} onChange={(e) => setLoad(e.target.value)} />
        <Button leftIcon={<FaCalculator />} colorScheme="teal" onClick={calculateReactions}>
          Calculer
        </Button>
        {reaction && (
          <Box p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <Text>Réaction à l'appui A: {reaction.reactionA.toFixed(2)} N</Text>
            <Text>Réaction à l'appui B: {reaction.reactionB.toFixed(2)} N</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
