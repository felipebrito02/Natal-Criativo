import { useState, useEffect } from "react";

interface Purchase {
  name: string;
  value: string;
  avatar?: string;
}

const fakePurchases: Purchase[] = [
  {
    name: "Ana Silva",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=47",
  },
  {
    name: "Mariana Lima",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=48",
  },
  {
    name: "Luiza Costa",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=49",
  },
  {
    name: "Carla Mendes",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=10",
  },
  {
    name: "Juliana Santos",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    name: "Fernanda Oliveira",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=9",
  },
  {
    name: "Patrícia Almeida",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=16",
  },
  {
    name: "Renata Ferreira",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=19",
  },
  {
    name: "Bianca Rodrigues",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=20",
  },
  {
    name: "Aline Souza",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=21",
  },
  {
    name: "Camila Martins",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=23",
  },
  {
    name: "Vanessa Lima",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=24",
  },
  {
    name: "Gabriela Nunes",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    name: "Larissa Costa",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Isabela Ribeiro",
    value: "R$ 14,90",
    avatar: "https://i.pravatar.cc/40?img=62",
  },
];

export default function SocialProofPopup() {
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [visible, setVisible] = useState(false);

  const showRandomPurchase = () => {
    const randomPurchase =
      fakePurchases[Math.floor(Math.random() * fakePurchases.length)];
    setCurrentPurchase(randomPurchase);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 10000); // popup fica visível 4s
  };

  // Aparece imediatamente ao carregar e depois de tempos em tempos
  useEffect(() => {
    // Delay de 3 segundos para o primeiro popup
    const initialTimeout = setTimeout(() => {
      showRandomPurchase();
    }, 3000);

    // Próximos popups a cada 40s
    const interval = setInterval(() => {
      showRandomPurchase();
    }, 40000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentPurchase) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 bg-white border shadow-lg rounded-xl p-4 w-72 flex items-center gap-3 transition-transform transform ${
        visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      {currentPurchase.avatar && (
        <img
          src={currentPurchase.avatar}
          alt={currentPurchase.name}
          className="w-10 h-10 rounded-full border"
        />
      )}
      <div className="text-sm text-gray-700">
        <p>
          <strong>{currentPurchase.name}</strong> acabou de adquirir o E-book.
        </p>
        <p className="text-red-600 font-bold">{currentPurchase.value}</p>
      </div>
    </div>
  );
}
