import React from 'react';
import { Settings, Bell, Shield, User } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Configurações</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
              <User className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white">Perfil</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Atualize suas informações pessoais</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
              <Bell className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white">Notificações</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Gerencie suas preferências de notificação</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
              <Shield className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white">Segurança</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Configure suas opções de segurança</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;