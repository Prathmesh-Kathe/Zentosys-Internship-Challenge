'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Boards() {
  const [boards, setBoards] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }

    const fetchBoards = async () => {
      try {
        const response = await axios.get('/api/boards', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBoards(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBoards();
  }, [router]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Boards</h1>
      <div className="space-y-4">
        {boards.map((board) => (
          <div key={board.id} className="p-4 border">
            <h2 className="text-xl">{board.name}</h2>
            <button onClick={() => router.push(`/boards/${board.id}`)} className="text-blue-500">
              View Board
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
