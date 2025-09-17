import { useEffect, useRef, } from 'react';
import { Sheet, SheetRef } from "react-modal-sheet";
import './App.css';

function App() {
  const sheetRef = useRef<SheetRef>(null);
  const snapPoints = [0, 100, 1];
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const isOpen = searchParams.get('open') === '1';
    sheetRef.current?.snapTo(isOpen ? 2 : 1);
  }, []);
  return (
    <div className="App">
      <Sheet ref={sheetRef} isOpen={true} onClose={() => {
        sheetRef.current?.snapTo(1);
      }} snapPoints={snapPoints} initialSnap={1}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div style={{ padding: 20 }}>
              Hello, World!
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
}

export default App;
