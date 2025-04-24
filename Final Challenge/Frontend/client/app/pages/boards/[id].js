'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function BoardDetail() {
  const [board, setBoard] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }

    const fetchBoard = async () => {
      try {
        const response = await axios.get(`/api/boards/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBoard(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBoard();
  }, [id, router]);

  if (!board) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{board.name}</h1>
      <div>{board.description}</div>
      {/* Add board-specific content here */}
    </div>
  );
}
