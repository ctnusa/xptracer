import { Draggable } from "@/components/Draggable";
import { Droppable } from "@/components/Droppable";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";


export const ExpensePage = () => {
  const [isDropped, setIsDropped] = useState(false);

  function handleDragEnd(event: any) {
    console.log(event.active.id)
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped && <Draggable>Drag me</Draggable>}
      <Droppable>
        {isDropped ? <Draggable>Drag me</Draggable>: 'Drop here'}
      </Droppable>
    </DndContext>
  );
}
