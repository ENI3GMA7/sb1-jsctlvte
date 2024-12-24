import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UnreviewedUsers from './pages/UnreviewedUsers';
import Transactions from './pages/Transactions';

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex minH="100vh">
          <Sidebar />
          <Box flex="1" ml="250px">
            <Header />
            <Box as="main" mt="60px" p={5}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/active" element={<Users status="active" />} />
                <Route path="/users/pending" element={<Users status="pending" />} />
                <Route path="/users/unreviewed" element={<UnreviewedUsers />} />
                <Route path="/users/:userId/transactions" element={<Transactions />} />
                <Route path="/products" element={<div>Products Page</div>} />
                <Route path="/settings" element={<div>Settings Page</div>} />
              </Routes>
            </Box>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}