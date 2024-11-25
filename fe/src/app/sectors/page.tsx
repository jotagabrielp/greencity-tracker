'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import AuthGuard from '@/lib/authGuard';

interface Sector {
  id: number;
  name: string;
}

export default function SectorsPage() {
  const [sectors, setSectors] = useState<Sector[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/sectors', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSectors(response.data);
      } catch (err) {
        console.error('Erro ao buscar setores', err);
      }
    };

    fetchSectors();
  }, []);

  const handleViewSector = (sectorId: number) => {
    router.push(`/sectors/${sectorId}`);
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-2xl font-bold mb-4">Meus Setores</h1>
        {sectors.length > 0 ? (
          <ul>
            {sectors.map((sector) => (
              <li key={sector.id} className="mb-4">
                <div className="flex justify-between items-center">
                  <span>{sector.name}</span>
                  <Button onClick={() => handleViewSector(sector.id)}>Ver Detalhes</Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum setor encontrado.</p>
        )}
        <Button onClick={() => router.push('/sectors/add')}>Adicionar Setor</Button>
      </div>
    </AuthGuard>
  );
}
