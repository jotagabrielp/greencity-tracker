'use client';

import { useState } from 'react';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AuthGuard from '@/lib/authGuard';

export default function AddSectorPage() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.post('/sectors', { name }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push('/sectors');
    } catch (err) {
      setError('Erro ao adicionar setor.');
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 p-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Adicionar Setor</h1>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Nome do Setor"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <Button type="submit" className="w-full">Adicionar</Button>
        </form>
      </div>
    </AuthGuard>
  );
}
