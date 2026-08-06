import useWindowStore from "#store/window";
import { Trash2Icon } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { locations } from "#constants";

const Trash = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="trash" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Trash2Icon className="icon" />
        </div>
      </div>

      <div className="content">
        <ul>
          {locations.trash.children.map(
            ({ id, name, icon, kind, fileType, position, imageUrl }) => (
              <li
                key={id}
                className={position}
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name,
                    icon,
                    kind,
                    fileType,
                    imageUrl,
                  })
                }
              >
                <img src={icon} alt={name}  />
                <p className="truncate">{`archived-${name}`}</p>
              </li>
            ),
          )}
        </ul>
      </div>
    </>
  );
};

export const TrashWindow = WindowWrapper(Trash, "trash");

export default TrashWindow;