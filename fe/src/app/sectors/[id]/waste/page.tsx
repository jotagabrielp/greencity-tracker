'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { useParams } from 'next/navigation';
import AuthGuard from '@/lib/authGuard';

interface WasteRecord {
  id: number;
  wasteCollected: number;
  createdAt: string;
}

export default function WastePage() {
  const [wasteRecords, setWasteRecords] = useState<WasteRecord[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchWasteRecords = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get(`/sectors/${id}/waste`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setWasteRecords(response.data);
      } catch (err) {
        console.error('Erro ao buscar registros de resíduos', err);
      }
    };

    fetchWasteRecords();
  }, [id]);

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-2xl font-bold mb-4">Gestão de Resíduos</h1>
        {wasteRecords.length > 0 ? (
          <ul>
            {wasteRecords.map((record) => (
              <li key={record.id}>
                <div className="mb-4">
                  <p>Quantidade de Resíduos: {record.wasteCollected} kg</p>
                  <p>Data: {new Date(record.createdAt).toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum registro de resíduos encontrado.</p>
        )}
      </div>
    </AuthGuard>
  );
}
