'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { useParams } from 'next/navigation';
import AuthGuard from '@/lib/authGuard';

interface EnergyRecord {
  id: number;
  consumption: number;
  createdAt: string;
}

export default function EnergyPage() {
  const [energyRecords, setEnergyRecords] = useState<EnergyRecord[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchEnergyRecords = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get(`/sectors/${id}/energy`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEnergyRecords(response.data);
      } catch (err) {
        console.error('Erro ao buscar registros de energia', err);
      }
    };

    fetchEnergyRecords();
  }, [id]);

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-2xl font-bold mb-4">Consumo de Energia</h1>
        {energyRecords.length > 0 ? (
          <ul>
            {energyRecords.map((record) => (
              <li key={record.id}>
                <div className="mb-4">
                  <p>Consumo: {record.consumption} kWh</p>
                  <p>Data: {new Date(record.createdAt).toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum registro de consumo encontrado.</p>
        )}
      </div>
    </AuthGuard>
  );
}
