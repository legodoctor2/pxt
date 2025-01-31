import { Button } from "react-common/components/controls/Button";

export default function Render(props: {
    title: string;
    selected: boolean;
    onClick: () => void;
}) {
    return (
        <div>
            <Button
                className={`tw-m-0 tm-px-8 ${
                    props.selected ? "tw-font-bold" : ""
                }`}
                title={props.title}
                label={props.title}
                onClick={props.onClick}
            />
            <div
                className={
                    "tw-mx-1 tw-border-b-2 tw-rounded-sm tw-ease-linear tw-duration-[75ms]"
                }
                style={{
                    borderColor: props.selected
                        ? "var(--primary-color)"
                        : "transparent",
                }}
            ></div>
        </div>
    );
}
