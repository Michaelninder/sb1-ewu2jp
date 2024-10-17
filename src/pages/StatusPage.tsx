import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Server, Clock, Users, Cpu } from 'lucide-react';

interface ServerStatus {
  id: string;
  name: string;
  type: 'Minecraft' | 'Web';
  status: 'online' | 'offline';
  uptime: number;
  playerCount?: number;
  cpuUsage: number;
  ramUsage: number;
}

const StatusPage: React.FC = () => {
  const [servers, setServers] = useState<ServerStatus[]>([]);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        // Replace with actual API endpoint
        const response = await axios.get('https://api.xp-host.de/server-status');
        setServers(response.data);
      } catch (error) {
        console.error('Error fetching server status:', error);
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Server Status</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servers.map((server) => (
          <div key={server.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Server className="text-blue-600 mr-2" />
              <h2 className="text-xl font-bold">{server.name}</h2>
            </div>
            <p className="mb-2">
              Type: <span className="font-semibold">{server.type}</span>
            </p>
            <p className="mb-2">
              Status:{' '}
              <span className={`font-semibold ${server.status === 'online' ? 'text-green-500' : 'text-red-500'}`}>
                {server.status}
              </span>
            </p>
            <div className="flex items-center mb-2">
              <Clock className="mr-2" />
              <span>Uptime: {Math.floor(server.uptime / 3600)}h {Math.floor((server.uptime % 3600) / 60)}m</span>
            </div>
            {server.type === 'Minecraft' && (
              <div className="flex items-center mb-2">
                <Users className="mr-2" />
                <span>Players: {server.playerCount}</span>
              </div>
            )}
            <div className="flex items-center mb-2">
              <Cpu className="mr-2" />
              <span>CPU: {server.cpuUsage.toFixed(2)}%</span>
            </div>
            <div className="flex items-center">
              <Server className="mr-2" />
              <span>RAM: {server.ramUsage.toFixed(2)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusPage;