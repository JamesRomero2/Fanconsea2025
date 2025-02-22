import { useState, useEffect } from "react";
const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="fixed inset-0 cursor-none">
      <div
        className="w-4 h-4 bg-blue-500 rounded-full fixed pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      ></div>
    </div>
  );
}
export default CursorFollower