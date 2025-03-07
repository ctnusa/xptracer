import { useDraggable } from "@dnd-kit/core";

export const Draggable = (props: any) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} {...attributes} {...listeners} style={style}>
      {props.children}
    </button>
  );
};
