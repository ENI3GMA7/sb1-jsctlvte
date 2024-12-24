import { Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel>Total Users</StatLabel>
          <StatNumber>1,200</StatNumber>
          <StatHelpText>↗︎ 23% increase</StatHelpText>
        </Stat>
        
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel>Total Revenue</StatLabel>
          <StatNumber>$48,743</StatNumber>
          <StatHelpText>↗︎ 15% increase</StatHelpText>
        </Stat>
        
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel>Active Products</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>↘︎ 5% decrease</StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
}